import os
import sys
import json
import sqlite3
import hashlib
from urllib.parse import urlparse
import tornado.ioloop
import tornado.web
import requests

# Add repo directories to sys.path so we can import Robinho if needed
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROBINHO_DIR = os.path.join(BASE_DIR, "robinho")
if ROBINHO_DIR not in sys.path:
    sys.path.insert(0, ROBINHO_DIR)

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fakenews.db")

VERIFIED_DOMAINS = {
    "cnn.com": 1,
    "nytimes.com": 1,
    "theguardian.com": 1,
    "washingtonpost.com": 1,
    "bbc.co.uk": 1,
    "forbes.com": 1,
    "g1.globo.com": 1,
    "estadao.com.br": 1,
    "folha.com.br": 1,
    "uol.com.br": 1,
    "theonion.com": 5,
    "sensacionalista.com.br": 5
}

def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL
        )
    """)
    c.execute("""
        CREATE TABLE IF NOT EXISTS links (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url TEXT UNIQUE,
            title TEXT,
            content TEXT,
            category_id INTEGER,
            clickbait_title INTEGER,
            verified_category_id INTEGER,
            count INTEGER DEFAULT 0
        )
    """)
    c.execute("""
        CREATE TABLE IF NOT EXISTS votes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            link_id INTEGER,
            category_id INTEGER,
            uuid TEXT,
            ip TEXT,
            clickbait_title INTEGER,
            UNIQUE(link_id, uuid)
        )
    """)
    
    # Seed default categories
    default_categories = [
        (1, "Real News"),
        (2, "Fake News"),
        (3, "Click Bait"),
        (4, "Extremely Biased"),
        (5, "Satire"),
        (6, "Not News")
    ]
    for cat_id, cat_name in default_categories:
        c.execute("INSERT OR IGNORE INTO categories (id, name) VALUES (?, ?)", (cat_id, cat_name))
    
    # Pre-populate some initial sample links if empty
    c.execute("SELECT COUNT(*) FROM links")
    if c.fetchone()[0] == 0:
        samples = [
            ("https://g1.globo.com/politica/noticia/2026/01/congresso-aprova-orcamento.ghtml", "Congresso aprova novo orçamento geral da união", "Texto com detalhes oficiais da votação na câmara e no senado federal.", 1, 0, 1, 14),
            ("https://theonion.com/scientists-discover-sun-is-just-giant-lightbulb", "Scientists Discover Sun Is Just Giant Lightbulb Screwed Into Sky", "Astronomers at NASA announced yesterday that the solar system is illuminated by a 500-billion watt incandescent bulb.", 5, 0, 5, 8),
            ("http://fakenewsportal.net/secret-cure-discovered", "SHOCKING: Secret 100% cure for all diseases hidden by pharmaceutical elite", "Leaked secret documents prove that doctors and governments have hidden the real cure to keep making billions in profits.", 2, 1, 2, 29)
        ]
        for url, title, content, cat_id, cb_title, v_cat_id, count in samples:
            c.execute("INSERT OR IGNORE INTO links (url, title, content, category_id, clickbait_title, verified_category_id, count) VALUES (?, ?, ?, ?, ?, ?, ?)",
                      (url, title, content, cat_id, cb_title, v_cat_id, count))
    
    conn.commit()
    conn.close()

def get_verified_domain(url):
    if not url:
        return None
    try:
        domain = urlparse(url).netloc.lower()
        if domain.startswith("www."):
            domain = domain[4:]
        for dom, cat_id in VERIFIED_DOMAINS.items():
            if domain == dom or domain.endswith("." + dom):
                return {"category_id": cat_id}
    except Exception:
        pass
    return None

def fetch_robinho_prediction(title, content, url):
    try:
        r = requests.get("http://localhost:8888/predict", params={
            "title": title or "",
            "content": content or "",
            "url": url or ""
        }, timeout=5)
        if r.status_code == 200:
            return r.json()
    except Exception:
        pass
    
    # Direct model fallback if localhost:8888 isn't answering
    try:
        from robinho.model import Robinho
        robinho = Robinho()
        preds = robinho.predict(title or "", content or "", url or "")
        kws = robinho.find_keywords(title or "", content or "", url or "")
        return {"predictions": preds, "keywords": kws}
    except Exception as e:
        return {
            "predictions": {"fake_news": 0.0, "extremely_biased": 0.0, "clickbait": 0.0},
            "keywords": []
        }

class BaseHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with, content-type, authorization")
        self.set_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")

    def options(self, *args, **kwargs):
        self.set_status(204)
        self.finish()

class HealthCheckHandler(BaseHandler):
    def get(self):
        self.finish("OK")

class CategoriesHandler(BaseHandler):
    def get(self):
        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        c.execute("SELECT id, name FROM categories ORDER BY id ASC")
        rows = c.fetchall()
        conn.close()
        self.set_header("Content-Type", "application/json")
        self.finish(json.dumps([{"id": r[0], "name": r[1]} for r in rows]))

class VotesHandler(BaseHandler):
    def get(self):
        url = self.get_argument("url", "")
        title = self.get_argument("title", "")
        content = self.get_argument("content", "")

        domain = get_verified_domain(url)
        robinho_data = fetch_robinho_prediction(title, content, url)

        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        
        # Look for existing link
        c.execute("SELECT id FROM links WHERE url = ?", (url,))
        link_row = c.fetchone()
        
        people_content = []
        people_title = {"clickbait": False, "count": 0}
        
        if link_row:
            link_id = link_row[0]
            c.execute("SELECT category_id, COUNT(*) FROM votes WHERE link_id = ? GROUP BY category_id", (link_id,))
            for cat_id, cnt in c.fetchall():
                people_content.append({"category_id": cat_id, "count": cnt})
            
            c.execute("SELECT clickbait_title, COUNT(*) FROM votes WHERE link_id = ? AND clickbait_title IS NOT NULL GROUP BY clickbait_title", (link_id,))
            for cb, cnt in c.fetchall():
                if cb == 1:
                    people_title = {"clickbait": True, "count": cnt}
        
        conn.close()

        response = {
            "domain": domain,
            "robot": robinho_data.get("predictions", {"fake_news": 0.0, "extremely_biased": 0.0, "clickbait": 0.0}),
            "people": {
                "content": people_content,
                "title": people_title
            },
            "keywords": robinho_data.get("keywords", [])
        }
        self.finish(response)

class VotesByContentHandler(BaseHandler):
    def get(self):
        content = self.get_argument("content", "")
        url = "hash://" + hashlib.md5(content.encode("utf-8")).hexdigest()
        
        domain = None
        robinho_data = fetch_robinho_prediction("", content, url)

        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        c.execute("SELECT id FROM links WHERE url = ?", (url,))
        link_row = c.fetchone()
        
        people_content = []
        people_title = {"clickbait": False, "count": 0}
        
        if link_row:
            link_id = link_row[0]
            c.execute("SELECT category_id, COUNT(*) FROM votes WHERE link_id = ? GROUP BY category_id", (link_id,))
            for cat_id, cnt in c.fetchall():
                people_content.append({"category_id": cat_id, "count": cnt})
        conn.close()

        self.finish({
            "domain": domain,
            "robot": robinho_data.get("predictions", {"fake_news": 0.0, "extremely_biased": 0.0, "clickbait": 0.0}),
            "people": {
                "content": people_content,
                "title": people_title
            },
            "keywords": robinho_data.get("keywords", [])
        })

class VoteHandler(BaseHandler):
    def post(self):
        try:
            data = json.loads(self.request.body.decode("utf-8"))
        except Exception:
            data = {}

        uuid = data.get("uuid") or "anonymous"
        url = data.get("url") or ""
        title = data.get("title") or ""
        category_id = int(data.get("category_id", 0))
        clickbait_title = data.get("clickbait_title")
        if category_id == 3:
            clickbait_title = True
        cb_val = 1 if clickbait_title is True else (0 if clickbait_title is False else None)

        ip = self.request.remote_ip or "127.0.0.1"

        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        
        # Find or create link
        c.execute("SELECT id, count FROM links WHERE url = ?", (url,))
        row = c.fetchone()
        if row:
            link_id = row[0]
            c.execute("UPDATE links SET count = count + 1 WHERE id = ?", (link_id,))
        else:
            c.execute("INSERT INTO links (url, title, content, category_id, clickbait_title, count) VALUES (?, ?, ?, ?, ?, ?)",
                      (url, title, "", category_id, cb_val, 1))
            link_id = c.lastrowid

        # Insert or replace vote
        c.execute("""
            INSERT INTO votes (link_id, category_id, uuid, ip, clickbait_title)
            VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(link_id, uuid) DO UPDATE SET category_id = excluded.category_id, clickbait_title = excluded.clickbait_title
        """, (link_id, category_id, uuid, ip, cb_val))

        conn.commit()
        conn.close()

        self.finish({
            "link_id": link_id,
            "category_id": category_id,
            "uuid": uuid,
            "ip": ip
        })

class LinksAllHandler(BaseHandler):
    def get(self):
        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        c.execute("SELECT id, url, title, content, category_id, clickbait_title, verified_category_id, count FROM links ORDER BY id DESC")
        rows = c.fetchall()
        conn.close()
        
        links = []
        for r in rows:
            links.append({
                "id": r[0],
                "url": r[1],
                "title": r[2],
                "content": r[3],
                "category_id": r[4],
                "clickbait_title": bool(r[5]) if r[5] is not None else None,
                "verified_category_id": r[6],
                "count": r[7]
            })
        self.set_header("Content-Type", "application/json")
        self.finish(json.dumps(links))

class FrontendHandler(BaseHandler):
    def get(self):
        html = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>The Fake News Detector &bull; Robinho AI</title>
  <link rel="icon" href="/static/favicons/favicon-32x32.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap">
  <style>
    :root {
      --bg: #0b0f19;
      --card-bg: #141c2e;
      --card-border: #23314f;
      --primary: #3b82f6;
      --primary-hover: #2563eb;
      --accent: #10b981;
      --danger: #ef4444;
      --warning: #f59e0b;
      --text: #f3f4f6;
      --text-muted: #9ca3af;
      --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-sans);
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    header {
      background: rgba(20, 28, 46, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--card-border);
      position: sticky;
      top: 0;
      z-index: 50;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: inherit;
    }
    .brand img {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      border: 2px solid var(--primary);
    }
    .brand h1 {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    .brand span {
      display: block;
      font-size: 0.75rem;
      color: var(--primary);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .system-status {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.82rem;
      color: var(--accent);
      background: rgba(16, 185, 129, 0.1);
      padding: 6px 14px;
      border-radius: 9999px;
      border: 1px solid rgba(16, 185, 129, 0.2);
    }
    .pulse-dot {
      width: 8px;
      height: 8px;
      background: var(--accent);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
      100% { opacity: 1; transform: scale(1); }
    }
    main {
      flex: 1;
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
      padding: 2.5rem 1.5rem;
    }
    .hero {
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .hero h2 {
      font-size: 2.2rem;
      font-weight: 800;
      margin-bottom: 0.75rem;
      background: linear-gradient(135deg, #fff 30%, #93c5fd 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero p {
      color: var(--text-muted);
      font-size: 1.05rem;
      max-width: 600px;
      margin: 0 auto;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 1.75rem;
      margin-bottom: 2rem;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
    }
    .input-group {
      margin-bottom: 1.25rem;
    }
    label {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #d1d5db;
    }
    input[type="text"], textarea {
      width: 100%;
      background: #0f172a;
      border: 1px solid var(--card-border);
      border-radius: 10px;
      padding: 0.85rem 1rem;
      color: #fff;
      font-family: inherit;
      font-size: 0.95rem;
      transition: all 0.2s;
    }
    input[type="text"]:focus, textarea:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }
    textarea {
      min-height: 90px;
      resize: vertical;
    }
    .btn {
      background: var(--primary);
      color: #fff;
      border: none;
      border-radius: 10px;
      padding: 0.85rem 1.75rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
    }
    .btn:hover {
      background: var(--primary-hover);
      transform: translateY(-1px);
    }
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
    .results-container {
      display: none;
      margin-top: 2rem;
      border-top: 1px solid var(--card-border);
      padding-top: 2rem;
      animation: fadeIn 0.3s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .verdict-banner {
      padding: 1.25rem 1.5rem;
      border-radius: 12px;
      margin-bottom: 1.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .verdict-banner.clean {
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #34d399;
    }
    .verdict-banner.flagged {
      background: rgba(239, 68, 68, 0.15);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #f87171;
    }
    .verdict-banner.warning {
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid rgba(245, 158, 11, 0.3);
      color: #fbbf24;
    }
    .verdict-title {
      font-size: 1.2rem;
      font-weight: 700;
    }
    .scores-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.25rem;
      margin-bottom: 1.75rem;
    }
    .score-box {
      background: #0f172a;
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 1.25rem;
      text-align: center;
    }
    .score-label {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }
    .score-value {
      font-size: 2rem;
      font-weight: 800;
      font-family: var(--font-mono);
    }
    .progress-bar-bg {
      height: 6px;
      background: #1e293b;
      border-radius: 9999px;
      overflow: hidden;
      margin-top: 0.75rem;
    }
    .progress-bar-fill {
      height: 100%;
      border-radius: 9999px;
      transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .keywords-section {
      margin-bottom: 1.75rem;
    }
    .keywords-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 0.5rem;
    }
    .keyword-chip {
      background: #1e293b;
      border: 1px solid #334155;
      color: #cbd5e1;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 0.85rem;
      text-decoration: none;
      transition: all 0.2s;
    }
    .keyword-chip:hover {
      background: var(--primary);
      color: #fff;
      border-color: var(--primary);
    }
    .voting-section {
      background: #0f172a;
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 1.5rem;
      margin-top: 1.75rem;
    }
    .vote-buttons {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 10px;
      margin-top: 1rem;
    }
    .vote-btn {
      background: #1e293b;
      border: 1px solid var(--card-border);
      color: #e2e8f0;
      padding: 0.7rem 1rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .vote-btn:hover {
      border-color: var(--primary);
      background: rgba(59, 130, 246, 0.15);
      color: #93c5fd;
    }
    .recent-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
    }
    .recent-table th {
      text-align: left;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--card-border);
      color: var(--text-muted);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .recent-table td {
      padding: 1rem;
      border-bottom: 1px solid rgba(35, 49, 79, 0.5);
    }
    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
    }
    .badge-fake { background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); }
    .badge-real { background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .badge-satire { background: rgba(168, 85, 247, 0.2); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3); }
    .badge-biased { background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
    footer {
      border-top: 1px solid var(--card-border);
      padding: 2rem;
      text-align: center;
      color: var(--text-muted);
      font-size: 0.85rem;
    }
    footer a { color: var(--primary); text-decoration: none; }
  </style>
</head>
<body>
  <header>
    <a href="/" class="brand">
      <img src="/static/avatar.png" alt="Robinho">
      <div>
        <h1>The Fake News Detector</h1>
        <span>Powered by Robinho ML &amp; Community Voting</span>
      </div>
    </a>
    <div class="system-status">
      <div class="pulse-dot"></div>
      <span>Backend &amp; Robinho Active</span>
    </div>
  </header>

  <main>
    <div class="hero">
      <h2>Combat Misinformation with AI &amp; Humans</h2>
      <p>Analyze any news article link or text to get predictions from Robinho's machine learning models and community flags.</p>
    </div>

    <div class="card">
      <form id="checkForm">
        <div class="input-group">
          <label for="newsUrl">Article URL (Optional)</label>
          <input type="text" id="newsUrl" placeholder="https://example.com/news-story...">
        </div>
        <div class="input-group">
          <label for="newsTitle">News Headline / Title</label>
          <input type="text" id="newsTitle" placeholder="Paste the news title here..." required>
        </div>
        <div class="input-group">
          <label for="newsContent">Article Body Text</label>
          <textarea id="newsContent" placeholder="Paste article content or excerpt (longer content yields higher precision)..."></textarea>
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <button type="submit" class="btn" id="analyzeBtn">
            <span>&#9889; Analyze News</span>
          </button>
          <button type="button" class="btn" style="background:#1e293b;" onclick="loadSample()">
            <span>Load Sample Hoax</span>
          </button>
          <button type="button" class="btn" style="background:#1e293b;" onclick="loadLegitSample()">
            <span>Load Verified News</span>
          </button>
        </div>
      </form>

      <div class="results-container" id="results">
        <div class="verdict-banner" id="verdictBanner">
          <div>
            <div class="verdict-title" id="verdictTitle">Assessment Ready</div>
            <div id="verdictSubtitle" style="font-size: 0.9rem; opacity: 0.9;">Robinho analyzed the text features.</div>
          </div>
          <div id="domainBadge"></div>
        </div>

        <div class="scores-grid">
          <div class="score-box">
            <div class="score-label">Fake News Risk</div>
            <div class="score-value" id="fakeNewsScore" style="color: #f87171;">0%</div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" id="fakeNewsBar" style="background: #ef4444; width: 0%;"></div>
            </div>
          </div>
          <div class="score-box">
            <div class="score-label">Extremely Biased</div>
            <div class="score-value" id="biasedScore" style="color: #fbbf24;">0%</div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" id="biasedBar" style="background: #f59e0b; width: 0%;"></div>
            </div>
          </div>
          <div class="score-box">
            <div class="score-label">Clickbait Probability</div>
            <div class="score-value" id="clickbaitScore" style="color: #60a5fa;">0%</div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" id="clickbaitBar" style="background: #3b82f6; width: 0%;"></div>
            </div>
          </div>
        </div>

        <div class="keywords-section" id="keywordsSection">
          <label>Fact-Check Keywords (Click to verify on Google):</label>
          <div class="keywords-list" id="keywordsList"></div>
        </div>

        <div class="voting-section">
          <label>Help Robinho Learn: Cast Your Community Flag</label>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">
            Every vote trains the Robinho neural pipeline and flags stories for other readers.
          </p>
          <div class="vote-buttons">
            <button class="vote-btn" onclick="castVote(1)">&#9989; Legitimate</button>
            <button class="vote-btn" onclick="castVote(2)">&#10060; Fake News</button>
            <button class="vote-btn" onclick="castVote(3)">&#128065; Clickbait</button>
            <button class="vote-btn" onclick="castVote(4)">&#9878; Biased</button>
            <button class="vote-btn" onclick="castVote(5)">&#129313; Satire</button>
            <button class="vote-btn" onclick="castVote(6)">&#128196; Not News</button>
          </div>
          <div id="voteMessage" style="font-size: 0.85rem; margin-top: 10px; color: var(--accent);"></div>
        </div>
      </div>
    </div>

    <div class="card">
      <h3 style="margin-bottom: 1.25rem; font-size: 1.15rem;">Community Flagged Articles &amp; Data</h3>
      <table class="recent-table">
        <thead>
          <tr>
            <th>Article Headline</th>
            <th>Status / Category</th>
            <th>Votes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="recentTableBody">
          <tr><td colspan="4" style="text-align:center; color:var(--text-muted);">Loading articles...</td></tr>
        </tbody>
      </table>
    </div>
  </main>

  <footer>
    <p>Fake News Detector &bull; Backend: Rust/Rocket &bull; ML Engine: Robinho (Python/scikit-learn) &bull; Frontend: Elm</p>
    <p style="margin-top:6px;">API Running on <code>http://localhost:8000</code> &bull; Robinho Daemon on <code>http://localhost:8888</code></p>
  </footer>

  <script>
    let currentUUID = localStorage.getItem("fnd_uuid") || 'user_' + Math.random().toString(36).substring(2, 10);
    localStorage.setItem("fnd_uuid", currentUUID);

    function loadSample() {
      document.getElementById('newsUrl').value = 'http://hoaxportal.net/alien-secret-discovery';
      document.getElementById('newsTitle').value = 'Shocking Secret Documents Reveal Aliens Living in Underground Government Facility';
      document.getElementById('newsContent').value = 'Secret documents leaked by anonymous whistleblowers claim that top scientists have concealed shocking evidence of alien spacecraft landing on Earth. Officials in a top secret bunker have allegedly held discussions hidden from the public for decades.';
      analyzeCurrent();
    }

    function loadLegitSample() {
      document.getElementById('newsUrl').value = 'https://www.bbc.co.uk/news/science-environment';
      document.getElementById('newsTitle').value = 'Global climate summit reaches historic agreement on carbon reduction targets';
      document.getElementById('newsContent').value = 'Representatives from over one hundred nations concluded negotiations today, reaching consensus on targeted reductions in industrial carbon emissions over the next decade with scheduled verification procedures.';
      analyzeCurrent();
    }

    document.getElementById('checkForm').addEventListener('submit', function(e) {
      e.preventDefault();
      analyzeCurrent();
    });

    async function analyzeCurrent() {
      const url = document.getElementById('newsUrl').value.trim();
      const title = document.getElementById('newsTitle').value.trim();
      const content = document.getElementById('newsContent').value.trim();
      const btn = document.getElementById('analyzeBtn');

      if (!title && !content) return;

      btn.disabled = true;
      btn.innerHTML = '<span>Analyzing...</span>';

      try {
        const queryParams = new URLSearchParams({ url, title, content });
        const res = await fetch(`/votes?${queryParams.toString()}`);
        const data = await res.json();
        displayResults(data, url, title);
      } catch (err) {
        alert('Error connecting to backend API: ' + err.message);
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>&#9889; Analyze News</span>';
      }
    }

    function displayResults(data, url, title) {
      document.getElementById('results').style.display = 'block';

      const fakeVal = Math.round((data.robot.fake_news || 0) * 100);
      const biasedVal = Math.round((data.robot.extremely_biased || 0) * 100);
      const cbVal = Math.round((data.robot.clickbait || 0) * 100);

      document.getElementById('fakeNewsScore').innerText = fakeVal + '%';
      document.getElementById('fakeNewsBar').style.width = fakeVal + '%';

      document.getElementById('biasedScore').innerText = biasedVal + '%';
      document.getElementById('biasedBar').style.width = biasedVal + '%';

      document.getElementById('clickbaitScore').innerText = cbVal + '%';
      document.getElementById('clickbaitBar').style.width = cbVal + '%';

      const banner = document.getElementById('verdictBanner');
      const vTitle = document.getElementById('verdictTitle');
      const vSub = document.getElementById('verdictSubtitle');
      const domainBadge = document.getElementById('domainBadge');

      if (data.domain) {
        if (data.domain.category_id === 1) {
          banner.className = 'verdict-banner clean';
          vTitle.innerText = 'Verified Legitimate Domain';
          vSub.innerText = 'This source is indexed as a verified reputable news outlet.';
          domainBadge.innerHTML = '<span class="badge badge-real">Verified Source</span>';
        } else if (data.domain.category_id === 5) {
          banner.className = 'verdict-banner warning';
          vTitle.innerText = 'Verified Satire Source';
          vSub.innerText = 'This domain is a known satirical or parody publication.';
          domainBadge.innerHTML = '<span class="badge badge-satire">Satire</span>';
        }
      } else if (fakeVal > 50 || biasedVal > 50) {
        banner.className = 'verdict-banner flagged';
        vTitle.innerText = fakeVal > 50 ? 'High Fake News Probability' : 'Extremely Biased Language Detected';
        vSub.innerText = 'Robinho machine learning models detected deceptive rhetorical or sensational markers.';
        domainBadge.innerHTML = '<span class="badge badge-fake">Suspicious</span>';
      } else if (cbVal > 50) {
        banner.className = 'verdict-banner warning';
        vTitle.innerText = 'Clickbait Headline Detected';
        vSub.innerText = 'The title is structured to generate clicks rather than convey informative summary.';
        domainBadge.innerHTML = '<span class="badge badge-biased">Clickbait</span>';
      } else {
        banner.className = 'verdict-banner clean';
        vTitle.innerText = 'No Deceptive Signals Flagged';
        vSub.innerText = 'The content does not exhibit elevated misinformation markers.';
        domainBadge.innerHTML = '<span class="badge badge-real">Clean</span>';
      }

      // Keywords
      const kwList = document.getElementById('keywordsList');
      kwList.innerHTML = '';
      if (data.keywords && data.keywords.length > 0) {
        document.getElementById('keywordsSection').style.display = 'block';
        data.keywords.forEach(kw => {
          const a = document.createElement('a');
          a.className = 'keyword-chip';
          a.target = '_blank';
          a.href = 'https://www.google.com/search?q=' + encodeURIComponent(kw + ' fact check');
          a.innerText = kw + ' \u2197';
          kwList.appendChild(a);
        });
      } else {
        document.getElementById('keywordsSection').style.display = 'none';
      }

      document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    }

    async function castVote(categoryId) {
      const url = document.getElementById('newsUrl').value.trim() || 'http://example.com/item-' + Date.now();
      const title = document.getElementById('newsTitle').value.trim();
      const msg = document.getElementById('voteMessage');

      try {
        const res = await fetch('/vote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            uuid: currentUUID,
            url: url,
            title: title,
            category_id: categoryId,
            clickbait_title: categoryId === 3
          })
        });
        if (res.ok) {
          msg.innerText = '\u2714 Your vote has been recorded and submitted to the Fake News database!';
          setTimeout(() => { msg.innerText = ''; }, 4000);
          loadRecentLinks();
        }
      } catch (err) {
        msg.innerText = 'Failed to submit vote: ' + err.message;
      }
    }

    async function loadRecentLinks() {
      try {
        const res = await fetch('/links/all');
        const links = await res.json();
        const tbody = document.getElementById('recentTableBody');
        tbody.innerHTML = '';

        if (!links || links.length === 0) {
          tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:var(--text-muted);">No flagged links yet.</td></tr>';
          return;
        }

        const catBadges = {
          1: '<span class="badge badge-real">Real News</span>',
          2: '<span class="badge badge-fake">Fake News</span>',
          3: '<span class="badge badge-biased">Clickbait</span>',
          4: '<span class="badge badge-biased">Biased</span>',
          5: '<span class="badge badge-satire">Satire</span>',
          6: '<span class="badge badge-real">Not News</span>'
        };

        links.slice(0, 10).forEach(link => {
          const tr = document.createElement('tr');
          const badge = catBadges[link.category_id] || '<span class="badge badge-real">Unclassified</span>';
          tr.innerHTML = `
            <td>
              <div style="font-weight:600; color:#fff;">${escapeHtml(link.title || link.url)}</div>
              <div style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">${escapeHtml(link.url.substring(0, 50))}...</div>
            </td>
            <td>${badge}</td>
            <td style="font-family:var(--font-mono);">${link.count} flags</td>
            <td>
              <button class="vote-btn" style="padding:4px 10px; font-size:0.75rem;" onclick="testLink('${escapeHtml(link.url)}', '${escapeHtml(link.title || '')}')">Inspect</button>
            </td>
          `;
          tbody.appendChild(tr);
        });
      } catch (e) {
        console.error('Error loading links:', e);
      }
    }

    function testLink(url, title) {
      document.getElementById('newsUrl').value = url;
      document.getElementById('newsTitle').value = title;
      document.getElementById('newsContent').value = '';
      analyzeCurrent();
    }

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.innerText = text || '';
      return div.innerHTML;
    }

    loadRecentLinks();
  </script>
</body>
</html>
"""
        self.set_header("Content-Type", "text/html; charset=utf-8")
        self.finish(html)

def make_app():
    static_path = os.path.join(BASE_DIR, "site", "src", "static")
    extension_path = os.path.join(BASE_DIR, "extension")
    return tornado.web.Application([
        (r"/", FrontendHandler),
        (r"/healthcheck", HealthCheckHandler),
        (r"/categories", CategoriesHandler),
        (r"/votes", VotesHandler),
        (r"/votes_by_content", VotesByContentHandler),
        (r"/vote", VoteHandler),
        (r"/links/all", LinksAllHandler),
        (r"/static/(.*)", tornado.web.StaticFileHandler, {"path": static_path}),
        (r"/bundle.js", tornado.web.StaticFileHandler, {"path": os.path.join(extension_path, "bundle.js")}),
    ])

if __name__ == "__main__":
    init_db()
    port = int(os.getenv("PORT") or 8000)
    app = make_app()
    app.listen(port)
    print(f"Fake News Detector API & Frontend running at http://localhost:{port}")
    tornado.ioloop.IOLoop.current().start()

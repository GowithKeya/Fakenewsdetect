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

ROBINHO_INSTANCE = None

def get_robinho():
    global ROBINHO_INSTANCE
    if ROBINHO_INSTANCE is None:
        try:
            curr = os.getcwd()
            os.chdir(ROBINHO_DIR)
            from robinho.model import Robinho
            ROBINHO_INSTANCE = Robinho()
            os.chdir(curr)
        except Exception as e:
            print(f"Robinho ML initialization notice: {e}")
    return ROBINHO_INSTANCE

def fetch_robinho_prediction(title, content, url):
    try:
        r = requests.get("http://localhost:8888/predict", params={
            "title": title or "",
            "content": content or "",
            "url": url or ""
        }, timeout=0.2)
        if r.status_code == 200:
            return r.json()
    except Exception:
        pass
    
    # Direct model fallback using pre-loaded ML weights
    try:
        robinho = get_robinho()
        if robinho:
            curr = os.getcwd()
            os.chdir(ROBINHO_DIR)
            preds = robinho.predict(title or "", content or "", url or "")
            kws = robinho.find_keywords(title or "", content or "", url or "")
            os.chdir(curr)
            return {"predictions": preds, "keywords": kws}
    except Exception as e:
        pass

    # Fallback to local heuristic evaluator
        # Heuristic evaluator when offline
        combined = f"{title} {content}".lower()
        fake_risk = 0.08
        bias_risk = 0.10
        cb_risk = 0.05

        sensational_triggers = [
            "shocking", "secret", "cure", "hidden", "aliens", "bunker",
            "conspiracy", "whistleblower", "leaked", "banned", "miracle",
            "they don't want you to know", "urgent", "illuminati"
        ]
        for trigger in sensational_triggers:
            if trigger in combined:
                fake_risk = min(0.96, fake_risk + 0.32)
                bias_risk = min(0.92, bias_risk + 0.28)
                cb_risk = min(0.88, cb_risk + 0.24)

        if title and title.isupper() and len(title) > 10:
            cb_risk = min(0.98, cb_risk + 0.45)
            fake_risk = min(0.95, fake_risk + 0.20)

        if "!" in title:
            cb_risk = min(0.95, cb_risk + 0.25)

        import re
        words = re.findall(r'\b[a-zA-Z]{5,}\b', title)
        stop_words = {"about", "there", "their", "which", "would", "these", "other", "after", "first"}
        filtered_kws = [w for w in words if w.lower() not in stop_words][:5]

        # Heuristic evaluator when offline
        combined = f"{title} {content}".lower()
        fake_risk = 0.08
        bias_risk = 0.10
        cb_risk = 0.05

        sensational_triggers = [
            "shocking", "secret", "cure", "hidden", "aliens", "bunker",
            "conspiracy", "whistleblower", "leaked", "banned", "miracle",
            "they don't want you to know", "urgent", "illuminati"
        ]
        for trigger in sensational_triggers:
            if trigger in combined:
                fake_risk = min(0.96, fake_risk + 0.32)
                bias_risk = min(0.92, bias_risk + 0.28)
                cb_risk = min(0.88, cb_risk + 0.24)

        if title and title.isupper() and len(title) > 10:
            cb_risk = min(0.98, cb_risk + 0.45)
            fake_risk = min(0.95, fake_risk + 0.20)

        if "!" in title:
            cb_risk = min(0.95, cb_risk + 0.25)

        import re
        words = re.findall(r'\b[a-zA-Z]{5,}\b', title)
        stop_words = {"about", "there", "their", "which", "would", "these", "other", "after", "first"}
        filtered_kws = [w for w in words if w.lower() not in stop_words][:5]

        return {
            "predictions": {
                "fake_news": round(fake_risk, 3),
                "extremely_biased": round(bias_risk, 3),
                "clickbait": round(cb_risk, 3)
            },
            "keywords": filtered_kws
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
        index_path = os.path.join(BASE_DIR, "site", "index.html")
        if os.path.exists(index_path):
            with open(index_path, "r", encoding="utf-8") as f:
                content = f.read()
        else:
            content = "<h1>Fake News Detector: site/index.html not found</h1>"
        self.set_header("Content-Type", "text/html; charset=utf-8")
        self.finish(content)

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
    get_robinho()
    port = int(os.getenv("PORT") or 8000)
    app = make_app()
    app.listen(port)
    print(f"Fake News Detector API & Frontend running at http://localhost:{port}")
    tornado.ioloop.IOLoop.current().start()

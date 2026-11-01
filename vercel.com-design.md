---
version: alpha
name: Vercel Minimal Light
description: A stark, spacious, high-contrast system with restrained monochrome styling and precise typography.
colors:
  primary: "#171717"
  secondary: "#6b7280"
  tertiary: "#e5e7eb"
  neutral: "#fafafa"
  surface: "#ffffff"
  on-surface: "#171717"
  error: "#dc2626"
  border: "#e5e7eb"
  shadow: "#ebebeb"
typography:
  headline-display:
    fontFamily: Geist Sans
    fontSize: 64px
    fontWeight: 400
    lineHeight: 64px
    letterSpacing: -3.84px
  headline-lg:
    fontFamily: Geist Sans
    fontSize: 50px
    fontWeight: 400
    lineHeight: 56px
    letterSpacing: -3.36px
  headline-md:
    fontFamily: Geist Sans
    fontSize: 39px
    fontWeight: 400
    lineHeight: 47px
    letterSpacing: 0px
  headline-sm:
    fontFamily: Geist Sans
    fontSize: 31px
    fontWeight: 400
    lineHeight: 37px
    letterSpacing: 0px
  body-lg:
    fontFamily: Geist Sans
    fontSize: 24px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -0.96px
  body-md:
    fontFamily: Geist Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: Geist Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  label-lg:
    fontFamily: Geist Sans
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0px
  label-md:
    fontFamily: Geist Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
  label-sm:
    fontFamily: Geist Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 2px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 40px
  button-primary-hover:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 40px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 40px
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: 0px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 16px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 8px
---

## Overview
This system is minimal, monochrome, and highly spacious, with a strong engineering-product feel. It communicates confidence through restraint: almost everything is white or near-white, with black used for emphasis and action. The tone is professional, precise, and premium, aimed at developers and teams shipping software quickly.

## Colors
- **Primary (#171717):** A near-black ink used for key text, the filled call-to-action button, icons, and brand-critical contrast points.
- **Secondary (#6B7280):** A muted gray for low-emphasis navigation and supporting copy where a softer hierarchy is needed.
- **Tertiary (#E5E7EB):** A light neutral gray for borders, subtle button outlines, and gentle separation between UI surfaces.
- **Neutral (#FAFAFA):** The default page wash; slightly off-white to keep the layout feeling airy without harsh pure-white glare.
- **Surface (#FFFFFF):** True white surface color for cards, elevated elements, and content areas that need maximum clarity.
- **On-surface (#171717):** The primary readable text color on light backgrounds; use this for body copy and strong labels.
- **Error (#DC2626):** Reserved for validation or destructive states; it should remain rare and highly legible.
- **Border (#E5E7EB):** A dedicated border token for subtle 1px rules and outlined controls.
- **Shadow (#EBEBEB):** The tone used for hairline shadows and soft separation when depth is required without visual heaviness.

## Typography
Geist Sans is the dominant voice across the UI, giving the brand a modern, technical, and highly legible character. Headings are large and lightweight, with tight negative letter spacing at the top levels to create a refined editorial look. Body copy stays clean and readable, while labels and buttons use medium weight for clear affordance without becoming bold.

Use `headline-display`, `headline-lg`, `headline-md`, and `headline-sm` for prominent marketing statements and section titles. Use `body-lg` for hero supporting copy, `body-md` for standard interface text, and `body-sm` for smaller annotations. `label-md` is the primary button and nav style, with `label-sm` for compact metadata or utility text. The source treatment does not rely on uppercase styling; instead, it uses weight, size, and spacing for hierarchy.

## Layout
The layout is extremely open, with large amounts of whitespace surrounding a centered hero structure. Content is arranged in a wide, balanced composition rather than a dense grid, with generous horizontal margins and large vertical breathing room between navigation, hero content, and the logo strip. Use spacing in the 2px, 12px, 20px, 32px, and 80px rhythm to preserve the crisp, measured feel.

Sections should feel like they sit in a fixed, broad container on a light canvas, not a cramped card layout. Buttons and text blocks use compact internal padding, but the overall page padding is expansive. Keep column relationships loose and asymmetrical when needed, while maintaining alignment discipline.

## Elevation & Depth
Depth is intentionally minimal. The interface relies on contrast, whitespace, and a few soft shadows rather than layered elevation systems. When shadow appears, it is very subtle and diffuse, supporting the central icon/hero mark without making the page feel heavy.

Use border-only separation for most controls and cards, with `shadow` for hairline depth cues and `border` for structural definition. Avoid large drop shadows, glossy effects, and stacked surfaces; the design reads best when flat, crisp, and quiet.

## Shapes
The shape language is soft but disciplined. Interactive controls are pill-shaped via `rounded.full`, while content containers and cards use modest radii such as `rounded.md`. The overall feel is smooth and approachable, but not playful; curves are used sparingly to soften otherwise stark geometry.

The system favors simple geometry with clean edges, reinforcing the technical, infrastructure-oriented identity. Avoid overly decorative rounding or irregular contours.

## Components
Buttons are the most expressive component. `button-primary` is a black filled pill with white text, sized for a compact header or hero CTA, using `label-md` typography and `rounded.full`. `button-secondary` is a transparent or white-on-light outlined pill with a 1px border and matching height, used for secondary actions like “Talk to sales.” `button-tertiary` should be text-only and borderless, reserved for low-emphasis actions. Hover states should slightly deepen the fill or reinforce the outline, but should never introduce color beyond the monochrome system.

Cards should stay quiet and utility-driven. Use `card` with a white or near-white background, a 1px border, modest `rounded.md`, and 16px padding. Keep shadows off unless a card is acting as a floating panel; even then, stay extremely subtle.

Inputs should follow the same border-led logic: white surface, 1px neutral border, `rounded.md`, and 12px padding. Focus states should prioritize clarity and contrast over decoration. Do not over-style form fields; they should feel like part of a rigorous developer tool.

Chips and tags should be compact, pill-shaped, and typographically restrained using `label-sm`. Navigation links should remain lightweight and unobtrusive, with simple hover affordances and no heavy background treatment. Lists and supporting text blocks should rely on spacing rather than dividers whenever possible.

## Do's and Don'ts
- Do keep the palette nearly monochrome, with black, white, and light grays doing most of the work.
- Do use large whitespace and clear alignment to make the layout feel premium and calm.
- Do preserve the lightweight typography, especially the negative tracking on large headings.
- Do use pill buttons for primary and secondary actions, with compact 40px height behavior.
- Don't introduce bright accent colors or playful gradients.
- Don't add heavy shadows, glassmorphism, or multi-layer depth effects.
- Don't make buttons or cards overly rounded beyond the established pill-and-soft-rectangle language.
- Don't crowd the page with dense text blocks or narrow spacing; the design should breathe.
### Bloomora Brand Guidelines

These guidelines document the core elements of the Bloomora brand to ensure consistency across web, product, and marketing.

---

### 1. Brand Essence
- **Positioning**: Web/App design + development studio for founders and startups
- **Voice**: Confident, clear, helpful; avoid jargon; focus on outcomes
- **Tone**: Modern, optimistic, pragmatic

---

### 2. Logo System
- **Primary Mark**: Lotus symbol with gradient from violet to teal
- **Wordmark**: “Bloomora” set in Geist or equivalent grotesk/sans-serif
- **Clear Space**: At least the height of the lotus around all sides
- **Minimum Size**: 24px for favicon mark, 120px width for combined lockup
- **Don’ts**: Do not skew, stretch, re-color outside palette, or apply drop shadows

Logo component reference lives at `src/components/Logo.tsx` and supports these variants:
- `lotus` (icon only)
- `wordmark` (text only)
- `lockup` (icon + text)

---

### 3. Color Palette
- **Core Gradient**
  - Violet: `#8B5CF6`
  - Teal: `#14B8A6`
- **Background**: `#0E0E0E` (Dark)
- **Surface**: `#0A0A0A` to `#1A1A1A`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#9CA3AF`
- **Accent**: `#9333EA` (hover), `#0D9488`

Usage:
- Prefer gradient for highlights, accents, and brand elements (logo, headings accents)
- Keep body backgrounds dark for depth; use subtle borders at low alpha

---

### 4. Typography
- **Primary**: Geist Sans (via `next/font`)
  - Weights: 400 (regular), 500 (medium), 600 (semibold)
- **Mono**: Geist Mono for code/metrics

Scale (Tailwind CSS tokens already mapped in `globals.css`):
- h1: 2.25rem to 4.5rem (clamp responsively)
- h2: 1.875rem to 3rem
- h3: 1.25rem to 1.875rem
- Body: 1rem; Lead copy: 1.125–1.25rem

---

### 5. Imagery & Illustration
- Prefer real product shots or relevant mockups from `public/`
- Increase visibility/opacity for illustrations to 0.8–1.0 on dark backgrounds
- On hover, tasteful color reveal from grayscale for project thumbnails

---

### 6. Components & Motions
- Motion library: `motion/react`
- Motions should be subtle, easing `[0.33, 1, 0.68, 1]`, 300–800ms durations
- Use magnetic/hover effects for primary CTAs only

---

### 7. Accessibility
- Minimum contrast ratio 4.5:1 for text on surfaces
- Provide focus states distinct from hover
- Do not rely on color alone for meaning

---

### 8. Logo Usage on Backgrounds
- On dark backgrounds, use gradient fills (`#8B5CF6 → #14B8A6`)
- On light backgrounds, prefer solid single-color (violet) or mono black

---

### 9. SEO & Favicons
- Favicon: `public/favicon.svg` (lotus simplified)
- Social preview: `public/og-image.png` 1200×630
- Titles concise; descriptions outcome-driven

---

### 10. Voice Examples
- Do: “Ship a production-grade MVP in 2 weeks.”
- Don’t: “We synergize cutting-edge solutions.”

---

Revision: 1.0 • Maintainer: Brand/Design • Last updated: automated migration



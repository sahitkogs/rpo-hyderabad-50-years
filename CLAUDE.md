# RPO Hyderabad — 50 Years

A static commemorative microsite marking 50 years of the Regional Passport Office, Hyderabad (1976–2026). Single-page HTML + Tailwind (Play CDN) + vanilla JS, deployed to GitHub Pages.

## Run locally

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

No build step.

## File map

- [index.html](index.html) — all sections, semantic HTML
- [styles.css](styles.css) — design tokens (CSS variables) + custom styles layered on Tailwind
- [script.js](script.js) — sticky nav scrollspy, mobile menu, lazy YouTube loader
- `assets/` — images and placeholders
- [RPO_Hyderabad_Website_Plan.md](RPO_Hyderabad_Website_Plan.md) — original project brief, content sources

## Design Context

Strategic and visual context lives in two files at the project root. **Read them before any design work.** They are normative for tone, palette, typography, and anti-patterns.

- [PRODUCT.md](PRODUCT.md) — register (`brand`), users, brand personality, anti-references, design principles, accessibility commitments. Strategic.
- [DESIGN.md](DESIGN.md) — visual system (currently SEED — re-run `/impeccable document` once tokens settle). Creative North Star: *"The Commemorative Volume."* Civic ceremony rendered with editorial restraint.

### One-line summary

This is a **brand** site for an **MEA / officialdom** primary audience. Personality is **ceremonial, archival, considered**. Visual lane is civic festive expressed as state-occasion gravity, never decoration. The tricolour is a civic mark, never a background fill. The current Regional Passport Officer is referenced with restraint; the office is the protagonist.

### Hard "no"s (carried from PRODUCT.md and DESIGN.md)

- No stock photos of "happy citizens"
- No default sarkari-portal look (dense top nav, scrolling tickers, clip-art icons)
- No modern startup landing page polish (gradient meshes, glass cards, hero metric template, neon accents)
- No personal-showcase framing of leadership
- No `#000` or `#fff` — every neutral tilts toward warm paper
- No em dashes in copy
- No scroll-tied motion or entrance choreography (state changes only)

### Working with this codebase

- Mobile-first; verify every section at 360px
- Telugu typography is a first-class concern (Mandali / Noto Sans Telugu) — verify before shipping any type decision
- WCAG 2.1 AA target throughout
- No analytics, no forms, no data collection. By design.

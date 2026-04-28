# RPO Hyderabad — 50 Years (Prototype Microsite)

Static, single-page commemorative microsite marking 50 years of the Regional Passport Office, Hyderabad (1976–2026). Built to be reviewed by the RPO team and hosted on GitHub Pages for easy sharing.

> **Status:** Prototype. Content placeholders are in place where real copy / photos / videos are pending. See *What to swap before launch* below.

---

## Run locally

No build step. Just open `index.html`:

```bash
open index.html        # macOS
```

Or serve it locally (recommended — avoids any browser file:// quirks):

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit: RPO Hyderabad 50-year microsite prototype"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then on GitHub:

1. Go to **Settings → Pages**.
2. Under *Build and deployment → Source*, choose **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Wait ~1 minute. The site URL will appear at the top of the Pages settings page (typically `https://<your-username>.github.io/<repo-name>/`).

All asset paths are relative, so the site works at any subpath.

---

## File structure

```
.
├── index.html              # all 10 sections, semantic HTML
├── styles.css              # custom styles + CSS variables (design tokens)
├── script.js               # sticky nav scrollspy, mobile menu, lazy YouTube loader
├── assets/
│   └── placeholder.svg     # generic image placeholder (swap with real photos)
├── RPO_Hyderabad_Website_Plan.md   # original project brief
└── README.md
```

---

## Tech notes

- **Tailwind CSS** is loaded via the Play CDN — fine for prototyping. For a production launch, switch to a proper Tailwind build to avoid the runtime warning, drop bundle size, and pin a version.
- **No analytics, no forms, no data collection.** This site never collects citizen information — by design (see §8 of the project plan).
- **Videos** lazy-load: cards only fetch a YouTube iframe after a click. Until real YouTube IDs are added, cards display as "Coming soon" and are inert.

---

## What to swap before launch

### Copy
- [ ] **Personal message from the RPO** (`#message` section) — current text is a placeholder.
- [ ] **Citizen testimonials** (`#citizens` section) — three placeholder quotes; collect real ones with consent.
- [ ] **Telugu video titles & summaries** — currently English-only; add Telugu copy after native-speaker review.

### Imagery (replace `assets/placeholder.svg` references in `index.html`)
- [ ] Portrait of RPO Snehaja (Section: Message — `<img src="assets/placeholder.svg" ...>`)
- [ ] Office exterior / interior photos (optional hero or section accents)
- [ ] National Award ceremony photo (June 2025)
- [ ] Art & Calligraphy Exhibition photos
- [ ] Constitution @75 commemorative envelope photo
- [ ] Historical photos from 1976 onward, if available

### Videos (in `index.html`)
For each `.video-card`, set the `data-video-id` attribute to the real YouTube video ID:

```html
<li class="video-card" data-video-id="dQw4w9WgXcQ">
```

Once `data-video-id` is non-empty, the card becomes clickable and loads the YouTube embed.

### Open Graph / social preview
- [ ] Replace `assets/placeholder.svg` in the `og:image` meta tag with a real share image (1200×630 PNG/JPG).

---

## Approvals checklist (from project plan §6.3)

Before going public with MEA branding:

- [ ] MEA / Ministry approval for use of official emblem and branding
- [ ] Disclaimer is present (already in footer; verify wording)
- [ ] Privacy policy if any user-facing interactions are added later
- [ ] Accessibility audit (WCAG 2.1 AA) — semantic markup and focus states are in place; verify contrast on real imagery
- [ ] Hosting on a `.gov.in` or `.nic.in` subdomain if officially adopted

---

## Editing the design

Colour palette and most spacing tokens are CSS variables at the top of `styles.css`:

```css
:root {
  --navy-900: #0B2545;
  --saffron:  #FF9933;
  --green:    #138808;
  --paper:    #FBF9F4;
  ...
}
```

Tweak these and the whole site updates.

---

## Credits

- Project brief: `RPO_Hyderabad_Website_Plan.md`
- Built as a prototype handoff for the RPO Hyderabad team's review.

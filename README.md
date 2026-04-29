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

- **Tailwind CSS** is loaded via the Play CDN, fine for prototyping. For a production launch, switch to a proper Tailwind build to avoid the runtime warning, drop bundle size, and pin a version.
- **No analytics, no forms, no data collection.** This site never collects citizen information, by design (see §8 of the project plan).
- **Bilingual (English / Telugu)** rendering, with a toggle in the header. The hero, the Videos section (header + 19 items), and the Services section currently ship in both languages. Telugu translations are explicitly marked as draft pending review by the RPO Hyderabad team. See `index.html` and search for `t-en` / `t-te` siblings to extend coverage.
- **Telugu fonts:** Mandali (display) and Noto Sans Telugu (body), loaded via Google Fonts.
- **Videos:** the Videos section is currently a numbered editorial list of 19 forthcoming topics. There is no inline video player. When the Telugu FAQ video library goes live, link each item to the YouTube playlist or embed individual videos as a follow-up pass.

---

## What to swap before launch

### Copy
- [ ] **Letter from the RPO** (`#message` section) — currently a clean draft signed "Jonnalagadda Snehaja, IFS." Replace with the officer's final wording when supplied.
- [ ] **Telugu translations** — drafted in good faith, marked as `t-te` siblings in `index.html`, and disclosed to readers via the "translations are draft" note that appears in the Videos section in Telugu mode. **Have native speakers verify every Telugu string before launch.**
- [ ] **Sections still English-only** — History, Achievements, Reforms, Message, Contact, Footer. Wrap each translatable string in `<span class="t-en">…</span><span class="t-te" lang="te">…</span>` to extend bilingual coverage.

### Imagery
- [ ] **`og:image` meta tag** in `index.html` still points at `assets/placeholder.svg`. Replace with a 1200×630 PNG or JPG share image.
- [ ] No other `placeholder.svg` references remain in user-visible markup. Add real photographs (office exterior / interior, National Award ceremony, Art & Calligraphy Exhibition, Constitution @75 envelope, historical photos) when sourced — but only with explicit consent for any people who appear, per PRODUCT.md's anti-reference on stock imagery.

### Videos
When the 19 Telugu FAQ videos go live on YouTube at `@rpohyderabad`:
1. Wrap each `<h3 class="videolist-item__title">` in an `<a href="…">` pointing at the relevant YouTube video or playlist segment.
2. Or, if you prefer inline embeds, design a follow-up pass that swaps the editorial list for an embedded player UI. The current section ships intentionally with no fake "Coming soon" tiles — the editorial list is honest about pre-launch state.

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

<!-- SEED — re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: RPO Hyderabad — 50 Years
description: Commemorative microsite for the Regional Passport Office, Hyderabad (1976–2026). Civic ceremony rendered with editorial restraint.
---

# Design System: RPO Hyderabad — 50 Years

## 1. Overview

**Creative North Star: "The Commemorative Volume"**

This is a state occasion rendered as a printed monograph would render it: with weight, with restraint, with the assumption that the reader is bringing their attention rather than having it grabbed. The visual register is closer to a National Gallery exhibition catalogue or an India Post commemorative stamp release than to anything that would be called a website. Civic festivity is real but expressed through gravity, not decoration. The tricolour appears the way a state seal appears, not the way a Republic Day poster does.

The system rejects the default look of every other government portal and the polished sameness of every modern startup landing page in equal measure. The standard to hold is the standard Singapore GDS and GOV.UK hold in their best moments: clarity, generous whitespace, restrained color, considered typography. That standard is not the floor; it is the bar.

**Key Characteristics:**
- Full tricolour palette as deliberate named roles, not decoration
- Serif display + humanist sans body, both readable at 360px width and at headline scale in Telugu
- Flat surfaces, archival neutrals, motion only on state change
- Editorial cadence: long-form sections with generous vertical rhythm
- No imagery without truth (real people with consent or no people at all)

## 2. Colors

A full tricolour palette where saffron, white, and india-green each carry distinct ceremonial roles, set against an archival neutral spine of deep ink and warm paper. No color is decorative; each is doing a specific civic job.

### Primary
- **Archival Ink** `[to be resolved during implementation — direction: deep navy or near-black with a warm tilt, never #000]`: Body text, headings, the institutional voice. Carries 60–80% of the typographic surface.
- **Warm Paper** `[to be resolved during implementation — direction: a warm off-white tilted toward the manuscript-paper end, never #fff]`: The page surface. Carries the entire reading canvas.

### Secondary (the tricolour, as named civic roles)
- **State Saffron** `[to be resolved during implementation — direction: the official India saffron, OKLCH'd for screen accuracy]`: Anniversary moments, the leading edge of the tricolour mark, the section markers between major chapters. Used with deliberation; never as background fill.
- **State Green** `[to be resolved during implementation — direction: the official India green]`: The trailing edge of the tricolour mark, accents on dates and milestones. Always paired with State Saffron in tricolour compositions; never used alone as an accent color.
- **Ceremonial White** `[to be resolved during implementation — direction: a slightly cooler white than Warm Paper, used only inside tricolour marks]`: The middle band of the tricolour. Functionally a placeholder color that exists to hold the relationship between Saffron and Green.

### Tertiary
- **Verification Stamp** `[to be resolved during implementation — direction: a deep oxblood or ink-blue used only for the official-record signal: dates, citations, the "documented" voice]`: Used on numerals, citation marks, footnote references. Carries the archival authority.

### Neutral
- **Document Dust** `[to be resolved during implementation — direction: a low-chroma warm grey, tinted toward the paper hue]`: Section dividers, secondary metadata, eyebrow text.
- **Margin Note** `[to be resolved during implementation — direction: a softer warm grey for tertiary metadata]`: Captions, footnotes, fine print.

### Named Rules

**The Civic Mark Rule.** When the tricolour appears, all three colors appear together in the official 1:1:1 vertical proportion, and they appear at a defined ceremonial moment (header mark, section break, anniversary date band, footer signature) — never as decorative backgrounds, never as gradients, never as a single ribbon color used alone.

**The Restraint Rule.** The page is mostly Warm Paper and Archival Ink. The State colors carry less than 8% of any given screen by area. Their power is their rarity. Saturated color flooding any single section is a signal that the section is wrong, not that the color is wrong.

**The Tinted Neutral Rule.** No `#000`, no `#fff`. Every neutral carries a small chroma tilt toward the warm-paper hue. Pure neutrals on screen feel synthetic; tinted neutrals feel printed.

## 3. Typography

**Display Font:** `[serif display family to be chosen at implementation — direction: a transitional or modern serif with strong weight contrast and good Telugu-adjacent rendering. Candidates: Source Serif 4, Playfair Display, Cormorant Garamond, Lora]`
**Body Font:** `[humanist sans family to be chosen at implementation — direction: a workhorse humanist sans with strong readability at 16px and below. Candidates: Inter, Source Sans 3, IBM Plex Sans]`
**Telugu Font:** `[Telugu-script family to be chosen at implementation — direction: Mandali for editorial display, Noto Sans Telugu for body. Both must be tested at 14px / 18px / 32px before being adopted]`

**Character:** Editorial weight in the display face; institutional clarity in the body. The pairing reads as a published volume, not as a website. The Telugu face is treated with equal care; it is not bolted on as an afterthought.

### Hierarchy
- **Display** (serif, weight 600–700, clamp from ~2.5rem to ~5rem, line-height 1.05): Section openers and the anniversary mark. Used sparingly; the page should hold no more than 4–6 display moments end to end.
- **Headline** (serif, weight 600, ~2rem to ~3rem, line-height 1.15): Major section headings (History, Achievements, Reforms, Citizens, Videos, Services, Contact).
- **Title** (sans, weight 600, ~1.25rem, line-height 1.3): Sub-section titles, achievement-card titles, video titles.
- **Body** (sans, weight 400, ~1rem to ~1.125rem, line-height 1.55, max line length 65–75ch): The institutional voice. The reading floor.
- **Label** (sans, weight 500–600, ~0.75rem to ~0.85rem, letter-spacing ~0.12em, uppercase): Eyebrows, dates, metadata, "1976 — 2026" marks.

### Named Rules

**The Telugu Parity Rule.** Every typographic decision is verified in Telugu before it ships. If a Telugu rendering breaks the layout, the layout is wrong, not the Telugu.

**The Quiet Display Rule.** Display type appears no more than once per long scroll-section. Two display headlines in the same viewport collapse the hierarchy.

**The Numerals Rule.** All dates, statistics, and milestone numbers use the display serif (or its tabular figures), not the body sans. Numbers are part of the institutional voice and carry the most archival weight.

## 4. Elevation

The system is flat by default. Surfaces sit on the page; depth is conveyed through tonal layering against Warm Paper, through the Civic Mark at section breaks, and through generous vertical rhythm — not through shadows. Cards, when they appear at all, sit on the page rather than floating above it.

Shadows appear only as a quiet response to interaction (hover on a video card, focus ring on an interactive element) and only at low opacity. They are never used to manufacture importance or to separate sections that should be separated by space.

### Named Rules

**The Flat Page Rule.** Sections are separated by space and by the Civic Mark, not by shadows or borders. If a section needs a shadow to read as separate, it needs more vertical space instead.

**The State-Change Rule.** Shadows exist as feedback, not as identity. A button has no shadow at rest; a hovered video card has the smallest possible elevation cue. The visual default is print, not application.

## 5. Components

`[Components are documented on the next /impeccable document run, after the implementation pass extracts real button, card, nav, and video-card variants from the codebase. The seed deliberately leaves this empty: components should follow the principles above, not be invented in advance.]`

## 6. Do's and Don'ts

### Do:
- **Do** treat every tricolour appearance as a civic mark with 1:1:1 proportion and a defined ceremonial role — header, section break, anniversary band, footer signature.
- **Do** keep saturated color under 8% of any given screen by area. Warm Paper and Archival Ink are the page; Saffron, Green, and Verification Stamp are the marks on it.
- **Do** verify every typographic decision in Telugu (Mandali / Noto Sans Telugu) at body, headline, and display sizes before shipping it.
- **Do** use real photographs of real people at the office, with consent, for any human imagery. If real photographs aren't available, ship the section without imagery.
- **Do** hold the editorial standard of a printed monograph. When in doubt, ask whether the page would be at home in a National Gallery catalogue or an India Post commemorative release.
- **Do** honor `prefers-reduced-motion` everywhere. The ceremonial register holds without motion doing the work.
- **Do** test every section at 360px width before it ships. The citizen audience reads on phones; mobile is the primary canvas, not the responsive afterthought.

### Don't:
- **Don't** use generic stock photos of "happy citizens." No diverse-smiling-people-holding-passports imagery. No handshake metaphors. No trust-bank visual language. (Carried directly from PRODUCT.md.)
- **Don't** let the design land at the default sarkari-portal look: dense top nav, scrolling tickers, clip-art icons, mismatched fonts, 1024px-fixed layouts. Every reflexive choice that lands there is the wrong choice. (Carried directly from PRODUCT.md.)
- **Don't** ship anything that reads as a modern startup landing page. No gradient meshes, no glass cards, no hero-metric template, no neon accents, no perfectly-aligned 12-column SaaS grids. The polish has the wrong provenance for this institution.
- **Don't** centerpiece the current Regional Passport Officer. No hero portrait, no centered leadership layout, no profile-of-an-officer composition. The office is the protagonist. (Carried directly from PRODUCT.md.)
- **Don't** use `#000` or `#fff`. Every neutral carries a small chroma tilt toward the warm-paper hue.
- **Don't** use side-stripe borders (`border-left` greater than 1px as a colored accent on cards, list items, callouts). If a section needs emphasis, give it space, weight, or a Civic Mark — not a colored stripe.
- **Don't** use gradient text (`background-clip: text` over a gradient). Display weight comes from the serif face and from scale, not from rainbow effects.
- **Don't** use em dashes. Use commas, colons, semicolons, periods, or parentheses. (Carried from PRODUCT.md.)
- **Don't** animate scroll-tied effects, parallax, or entrance choreography. Motion is restrained to state change only — hover, focus, link transition.
- **Don't** invent a "festive" treatment that is decoration rather than ceremony. Tricolour drapes, ornate borders, gold filigree, fluttering-flag GIFs, "Jai Hind" splashes — all read as kitsch and undo the gravity in a single section.

# ASSET INDEX — Felix Phan Portfolio
**Last verified:** 2026-08-09  
**All 34 real images now located at:** `public/images/`

---

## Project images

| Asset ID | Filename | Related project | Format | Size | Usage in site | Dimensions (approx) | Notes |
|---------|----------|----------------|--------|------|--------------|---------------------|-------|
| A01 | p01-qnh.jpg | P01 | JPEG | 281 KB | Cover image for P01 | — | Source: github-baseline |
| A02 | p02-credits.jpg | P02 | JPEG | 52 KB | Supporting image for P02 | — | Credits still / storyboard |
| A03 | p02-summer.jpg | P02 | JPEG | 45 KB | Cover image for P02 | — | |
| A04 | p05-buv.jpg | P05 | JPEG | 36 KB | Cover image for P05 | — | |
| A05 | p13-chart.jpg | P13 | JPEG | 28 KB | Evidence chart for P13 | — | |
| A06 | p13-maggi.jpg | P13 | JPEG | 73 KB | Cover image for P13 | — | |
| A07 | p13-storyboard.png | P13 | PNG | 1,422 KB | Storyboard evidence for P13 | — | Large file; may need web optimisation |
| A08 | p20-chart.jpg | P20 | JPEG | 27 KB | Evidence chart for P20 | — | |
| A09 | p20-concept.jpg | P20 | JPEG | 233 KB | Concept image for P20 | — | |
| A10 | p20-tres.jpg | P20 | JPEG | 258 KB | Cover image for P20 | — | |
| A11 | p22-accept-differences.jpg | P22 | JPEG | 292 KB | Gallery image for P22 | — | |
| A12 | p22-booklet.jpg | P22 | JPEG | 201 KB | Booklet photo for P22 | — | |
| A13 | p22-buddy.jpg | P22 | JPEG | 233 KB | Buddy activity photo for P22 | — | |
| A14 | p22-calmjar.jpg | P22 | JPEG | 232 KB | Calm jar activity for P22 | — | |
| A15 | p22-core-memories.jpg | P22 | JPEG | 149 KB | Core memories activity for P22 | — | |
| A16 | p22-draw.jpg | P22 | JPEG | 196 KB | Draw activity for P22 | — | |
| A17 | p22-floorplan.png | P22 | PNG | 346 KB | Exhibition floor plan for P22 | — | |
| A18 | p22-little-me.jpg | P22 | JPEG | 84 KB | Cover image for P22 | — | |
| A19 | p22-shower-thoughts.jpg | P22 | JPEG | 124 KB | Shower thoughts activity for P22 | — | |
| A20 | p25-empacts.jpg | P25 | JPEG | 50 KB | Cover image for P25 | — | |
| A21 | p25-event.jpg | P25 | JPEG | 104 KB | Event photo for P25 | — | |
| A22 | p25-felix.jpg | P25 | JPEG | 104 KB | Felix at EMPACTS event | — | |
| A23 | p25-vision-global.jpg | P25 | JPEG | 139 KB | Vision: Global for P25 | — | |
| A24 | p25-vision-investment.jpg | P25 | JPEG | 124 KB | Vision: Investment for P25 | — | |
| A25 | p25-vision-market.jpg | P25 | JPEG | 111 KB | Vision: Market for P25 | — | |
| A26 | p25-vision-resilience.jpg | P25 | JPEG | 173 KB | Vision: Resilience for P25 | — | |
| A27 | p25-vision-tech.jpg | P25 | JPEG | 172 KB | Vision: Tech for P25 | — | |
| A28 | p28-vinfast.jpg | P28 | JPEG | 48 KB | Cover image for P28 | — | |
| A29 | p31-be-local.png | P31 | PNG | 4,242 KB | Original high-res cover for P31 | — | **Keep original; use web copy for site** |
| A30 | p31-be-local-web.jpg | P31 | JPEG | ~379 KB | Web-optimised cover for P31 | — | Created 2026-08-09 from original PNG |
| A31 | p31-finance.png | P31 | PNG | 590 KB | Financial plan image for P31 | — | |
| A32 | p31-process.png | P31 | PNG | 766 KB | Process workflow for P31 | — | |
| A33 | p31-risk.png | P31 | PNG | 648 KB | Risk heatmap for P31 | — | |
| A34 | p31-schedule.png | P31 | PNG | 513 KB | Project schedule for P31 | — | |
| A35 | p31-team.jpg | P31 | JPEG | 164 KB | Team photo for P31 | — | |

---

## Fonts

| Asset | Location | Format | Size | Usage |
|-------|----------|--------|------|-------|
| EBGaramond-Variable.ttf | public/fonts/ | TTF | 851 KB | Display headings; declared in app/globals.css |
| Montserrat-Variable.ttf | public/fonts/ | TTF | 745 KB | Body text; declared in app/globals.css |

---

## Icons and branding

| Asset | Location | Format | Size | Usage |
|-------|----------|--------|------|-------|
| favicon.svg | public/ | SVG | 266 bytes | Browser tab icon; North Star polygon; declared in app/layout.tsx |
| favicon.svg (static) | source-materials/felix-portfolio-github-baseline-2026-08-07/ | SVG | 258 bytes | Used by static HTML version only |

---

## Status of image integration in Next.js

**Wired up 2026-08-09:** 9 projects now use real `<img>` tags. The mapping lives in `app/project-images.ts`.

| Project | Cover file | object-fit |
|---------|-----------|-----------|
| P01 | p01-qnh.jpg | cover |
| P02 | p02-credits.jpg | cover |
| P05 | p05-buv.jpg | cover |
| P13 | p13-chart.jpg | contain |
| P20 | p20-chart.jpg | contain |
| P22 | p22-accept-differences.jpg | cover |
| P25 | p25-empacts.jpg | cover |
| P28 | p28-vinfast.jpg | cover |
| P31 | p31-be-local-web.jpg | cover |

Remaining 22 projects (P03–P04, P06–P12, P14–P19, P21, P23–P24, P26–P27, P29–P30) still show `MediaPlaceholder` because no real image exists for them yet. To add a new project image: add the file to `public/images/`, then add its entry to `app/project-images.ts`.

---

## Rights and publication notes

- All images sourced from Felix Phan's personal portfolio archive.
- Portfolio images should not be published to any third-party platform without Felix's approval.
- EMPACTS vision images (p25-vision-*.jpg) depict the organisation's public-facing materials.
- p22-*.jpg images are from the Little Me exhibition — check RMIT photo release policy before large-scale publication.
- p31-be-local-web.jpg is a derived JPEG from the original PNG; both are kept.

# ASSET INDEX — Felix Phan Portfolio
**Last verified:** 2026-08-10  
**Real images located at:** `public/images/`

> **2026-08-09 optimisation pass:** every served raster over 500 KB was resized
> to a max 1800 px width and recompressed in place (`npm run optimize:images`),
> saving ~23.6 MB with no change to filenames or references. `p13-storyboard.png`
> is now ~428 KB (was 1.42 MB); the largest P20 charts dropped from ~5 MB to
> under 1 MB each. 26 project ids map to a rendered cover in
> `app/project-images.ts`; the remaining active projects (P26)
> intentionally use the evidence-state placeholder until a real asset
> exists.

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
| A07 | p13-storyboard.png | P13 | PNG | ~428 KB | Storyboard evidence for P13 | — | Optimised 2026-08-09 (was 1,422 KB) |
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
| A28 | p28-vinfast.jpg | P10 | JPEG | 48 KB | Cover image for P10 (VinFast Campaign Series; ex-P28) | — | |
| A29 | p31-be-local.png | P31 | PNG | 4,242 KB | Original high-res cover for P31 | — | **Keep original; use web copy for site** |
| A30 | p31-be-local-web.jpg | P31 | JPEG | ~379 KB | Web-optimised cover for P31 | — | Created 2026-08-09 from original PNG |
| A31 | p31-finance.png | P31 | PNG | 590 KB | Financial plan image for P31 | — | |
| A32 | p31-process.png | P31 | PNG | 766 KB | Process workflow for P31 | — | |
| A33 | p31-risk.png | P31 | PNG | 648 KB | Risk heatmap for P31 | — | |
| A34 | p31-schedule.png | P31 | PNG | 513 KB | Project schedule for P31 | — | |
| A35 | p31-team.jpg | P31 | JPEG | 164 KB | Team photo for P31 | — | |

---

## Feature-case evidence assets (`public/images/cases/pXX/`)

Curated evidence/photography for the bespoke feature cases (added 2026-08-09 from the featured-cases handoff pack). These are referenced directly by the case components in `app/work/[slug]/*-case.tsx`, not by `project-images.ts`. Raw sources and confidential material were deliberately **not** shipped.

| Case | Files | Fit | Evidentiary use |
|------|-------|-----|-----------------|
| P02 | cases/p02/p02-script-cover.png, p02-credits.jpg, p02-award.jpg | contain | Sole script credit, shared direction/edit, class-collective (D5 K60) award |
| P13 | cases/p13/p13-comment-themes.png, p13-sentiment-volume.png, p13-campaign-framework.png, p13-big-idea.png, p13-storyboard.png | contain | Research method, insight, proposed direction, proposed Tết creative |
| P20 | cases/p20/p20-platform-analysis.png, p20-platform-table.png, p20-kol-diagnosis.png, p20-interactive-dooh.png, p20-plan-pulsing.png | contain | Platform diagnosis, creator-role design, DOOH concept, pulsing plan |
| P22 | cases/p22/p22-key-visual.jpg (hero), p22-floor-plan.png, p22-zone-1.jpg, p22-calm-jar.jpg, p22-buddy-pickup.jpg | cover (photos) / contain (plan) | Hero, participant-journey floor plan, activity photos |
| P25 | cases/p25/p25-key-visual.jpg (hero), p25-business-model-canvas.png, p25-event.jpg, p25-onepager-1.png, p25-onepager-2.png, p25-felix.jpg | cover (photos) / contain (docs) | Public-safe organisation/system evidence only |
| P32 | cases/p32/p32-press-release-p1.png | contain | Felix-authored simulation press release (primary individual proof) |

**Withheld on purpose:** the EMPACTS EPIC proposal (classified Confidential) and the P32 HUST-branded press-conference backdrop (`p32-press-conference-background-team-context.png`, brand-impersonation risk) were **not** copied into `public/`.

---

## Supporting-case evidence assets (shared renderer)

Referenced by the shared `app/work/[slug]/supporting-case.tsx` via `supporting-case-data.ts`. Authentic figures only; everything else uses `project-images.ts` heroes or intentional placeholders.

All native figures added **2026-08-10** were rendered from the primary source
files in the two evidence packs (`9 Next Projects.zip`, `9 next next project.zip`)
at up to 1800 px wide and shipped as `contain` evidence (or `cover` for
photography). No slide, chart, axis, label, citation, date, credit or
contribution table was cropped; no screenshot was fabricated. Full decks stay
available via the authentic embeds below.

| Case | Files | Fit | Evidentiary use |
|------|-------|-----|-----------------|
| P05 | cases/p05/p05-creative-idea.jpg, p05-character.jpg, p05-storyline.jpg (added 2026-08-10 from `9 Next Projects` BUV proposal PDF) | contain | Creative idea ("The Futuristic Wave"), human entry point (16–18 student), script architecture (scene clusters) from Felix's ForArt lead-creative proposal |
| P07 | cases/p07/p07-boardgame.jpg (added 2026-08-10), p07-storyboard.jpg (added 2026-08-09 from `9 Next Projects`) | cover (board game) / contain (storyboard) | The Cleaning Frenzy board game (brand/category) and a storyboard page from the Tết proposal |
| P14 | cases/p14/p14-magazine-cover.jpg, p14-photoshoots.jpg (added 2026-08-10 from `9 Next Projects`) | cover | Equal in Ao Dai editorial spread and the three-shoot photo series (ex-P15), team-produced under Felix's direction |
| P16 | cases/p16/p16-proposal-cover.png (added 2026-08-10 from `9 next next project`) | contain | RMIT COMM2497 cover + first page of the completed patriotic-rap research proposal (proposal only, no findings) |
| P30 | cases/p30/p30-map-the-system.jpg (hero, added 2026-08-09 v3) | cover | Map the System 2023 presentation cover |
| P33 | cases/p33/p33-media-research.jpg (hero), p33-research-question.jpg, p33-data-collection.jpg, p33-analysis-method.jpg (3 native slides added 2026-08-10 from the COMM2892 team deck PDF) | cover (hero) / contain (slides) | Research question + knowledge gap, operationalised criteria and the 39-item sample (26/8/5), and the source/publisher analysis framework |
| P34 | cases/p34/p34-prre-infographic.png (hero), p34-assignment1-cover.png, p34-regression.jpg, p34-nvivo-themes.jpg, p34-nodexl-network.jpg (4 native figures added 2026-08-10 from the MKTG1459 individual + team PDFs) | contain | Sole-authored Assignment 1 cover (individual ownership), the 22-country regression (p=0.02, Multiple R=0.48), NVivo social-listening themes (30 articles), and the NodeXL network graph |

**Withheld on purpose (P34):** the source slides that surface the conflicting raw
YouTube comment total (2,377 vs 2,535) were **not** shipped; the NodeXL figure
uses the network graph and eigenvector ranking instead, and the case copy reports
only users (1,749) and videos (83).

**Authentic embeds (no local asset):** P01 live case (GitHub Pages, kept as a secondary link under the native sections), P03 Canva deck + Drive script, P04 Drive audio + script, P05/P06 Drive proposals, P07 Canva proposal, P14 Heyzine flipbook, P16 Drive report, P17 Canva white paper + Drive eMagazine feature (Drive id 13MC1iP8GQYWd3L-Kvwu9fF2V0adka2c_), P33 Canva deck (closing section), P34 Canva presentation (closing section). All lazy-loaded with an external-link fallback; none autoplay.

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
| P10 | p28-vinfast.jpg | cover |
| P31 | p31-be-local-web.jpg | cover |
| P32 | cases/p32/p32-press-release-p1.png | contain |

Remaining projects (P03–P04, P06–P07, P11–P12, P14–P19, P21, P24, P26, P30) still show `MediaPlaceholder` because no real grid image exists for them yet. The six bespoke feature cases (P02, P13, P20, P22, P25, P32) additionally load evidence assets from `public/images/cases/pXX/` inside their `*-case.tsx` components. To add a new project image: add the file to `public/images/`, then add its entry to `app/project-images.ts`.

---

## Rights and publication notes

- All images sourced from Felix Phan's personal portfolio archive.
- Portfolio images should not be published to any third-party platform without Felix's approval.
- EMPACTS vision images (p25-vision-*.jpg) depict the organisation's public-facing materials.
- p22-*.jpg images are from the Little Me exhibition — check RMIT photo release policy before large-scale publication.
- p31-be-local-web.jpg is a derived JPEG from the original PNG; both are kept.

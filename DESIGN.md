# DESIGN.md: Contemporary Burgundy Poster System

The visual contract for fzzzzzlix.github.io. Read this before changing layout or
styles. Words live in `app/content/*` and `app/data.ts` (see `CLAUDE.md`); this
file governs how they look.

**Brand values:** classic resilience, bold spark, efficient simplicity.
**Balance:** about 90% efficient editorial, 10% theatrical gesture. The gesture is
stronger because it is rare.
**Rule of thumb:** heroes may perform; body content must work; nothing gets more
ceremony than its content earns. Respecting the reader's time is part of the brand.

**Length budget (desktop screenfuls at 1440×900):** Home ≤5, Work ≤5, About ≤4,
Experience ≤4, Focus Areas ≤3, supporting cases ≤5, feature cases ≤7 open,
StarX ≤8 open. Measure after any layout change.

Mental model (never printed on the site): the home page is the cover, Work is the
contents, case studies are the feature spreads, About is the profile, Contact is
the colophon.

---

## 1. Two modes

| Mode | Surface | Used for | Character |
|---|---|---|---|
| **Poster** | `surface-wine` | Home cover, Contact, the Featured works band on Home, the About opener and capability band, compact case openers, case navigation | Scale, asymmetry, the North Star, sparse type |
| **Editorial** | stone (default body, `--bone`) | Everything people read or scan, including interior page openers (`PageHero` is a compact header) | Measured columns, separated by space, no decoration |
| Colophon | `surface-plum` | Site footer, and the Focus Areas band on Home (it follows Featured works, so it takes plum to stay apart) | Quiet close |

Rhythm: **dramatic → quiet → visual → informational → quiet → dramatic
punctuation.** Never two poster bands back to back except the case navigation
into the footer. Spacing uses three steps (`--space-s`, `--space-m`,
`--space-l`); pick the smallest that separates the ideas.

The seam between modes is a signature move: a hero image or portrait sits
across the wine/bone edge (`.p31-hero-body`, `.profile-portrait`).

## 2. Palette (`app/globals.css` `:root`)

| Token | Hex | Role |
|---|---|---|
| `--wine` | #5E1526 | Primary identity, poster surfaces, headings on bone |
| `--plum` | #331520 | Depth (footer, video and embed backgrounds). Use instead of black |
| `--bone` | #EFEEEC | Reading surface, a low-chroma stone. Use instead of white |
| `--bone-deep` | #E5E3DF | Image loading backdrop only |
| `--silver` | #C8C5CF | Star, italic name, accents on wine |
| `--mauve` | #9A7882 | Decorative only. **Never for text** (3.3:1 on bone) |
| `--oxblood` | #781729 | Hover state of wine buttons/links |
| `--ink` | #28131B | Body text on bone |
| `--ink-muted` | #6B4A55 | Secondary text on bone (6.4:1) |
| `--bone-muted` | #D9C8CD | Secondary text on wine (8.1:1) and plum (10.3:1) |

Components read **semantic tokens** (`--fg`, `--fg-muted`, `--rule`,
`--accent`, `--star`, `--focus`, `--btn-*`), which the surface classes set.
To put something on wine, add `surface-wine`; do not hardcode colours.
No cobalt, no blue accent, no gradients except inside the North Star glow and
the plum scrim that keeps Work tile captions readable over a picture.

## 3. Typography

Self-hosted woff2 subsets (Latin, Latin Extended, Vietnamese) in `public/fonts`.

| Voice | Face | Use |
|---|---|---|
| Everything | EB Garamond 400–600 (roman and italic) | Headings, body copy, captions, figures, and the utility voice: navigation, metadata, dates, labels, buttons, links out |
| Signature | EB Garamond *italic* | Only: "Phan" in the home hero, the page titles ("Work", "Experience", "Interests that shape my work", "Hello, I’m a…" with its "Creative Strategist & Storyteller" subheading), the footer line, pull quotes |

One face. There is no monospace on the site.

- **Type scale.** Every text size is one of eight steps in `:root`:
  `--fs-label` 14, `--fs-note` 16, `--fs-body` 18 (17 on phones), `--fs-lead` 20–22,
  `--fs-h3` 22–28, `--fs-h2` 28–40, `--fs-h1` 40–72, `--fs-display` 64–148 (the
  home name only). Do not add a size between steps; pick the nearest.
- Headings are weight 400 with tight tracking; hierarchy comes from scale.
- Body line-height ~1.55, measure `--measure` (40em).
- **Long running text is justified** (case ledes and lists, About narrative and
  capability text, Experience bullets, home feature text) with `hyphens: auto`.
  Leads, headings, captions and two-line intros stay ranged left: justified
  short lines open ugly gaps.
- Labels (metadata, dates, buttons, nav) are 14px (`--fs-label`), **sentence
  case**, no tracking. No spaced capitals anywhere; the hero role line is sentence case at
  body size.
- **No eyebrows.** Labels above or beside headings are not shown (`.eyebrow {
  display: none }`); the heading carries the meaning. Their strings stay in the
  content files. Capability tiers on About are information, not eyebrows, and
  stay.
- **No dash shapes.** Nothing on the page may read as an em dash, typed or drawn.
  Separate list items with commas (case meta, status tags) or the tiny star (the
  hero capability list); mark sub-headings with an arrow; in copy, use a colon or
  comma. Number and date ranges keep their plain hyphen or en dash.
- **No middle dots (·) or vertical bars (|)** as separators, in copy or in page
  titles. Use a colon or comma. Browser titles read "Felix Phan, Work"; the home
  page is "Felix Phan, PORTFOLIO".
- Numerals: old-style in running text, lining in figures/stats.
- No generic script font. The italic Garamond is the signature.

## 4. The six-wing North Star (`app/site-shell.tsx`)

One geometry everywhere: two vertical wings and four wings at ±30° from
horizontal, equal length, slim waist (`STAR_POINTS`, viewBox 200).

| Mode | Component | Size | Treatment |
|---|---|---|---|
| Signature | `StarMark` | 12–44px | Flat `currentColor`. Header brand, footer. The favicon is the wine star on a transparent ground |
| Plate | `StarMark` | 32–44px | Work and Focus Areas tiles for a project without media |
| Marker | `--star-mask` | 9–10px | Separator in the hero capability list |
| Hero | `NorthStar mode="glow"` | 35–65% of the composition | Translucent wings, bright core, thin horizontal flare. **Only** the home hero and Contact. No other page uses a large star |
| Structural | none yet | | Diagonals may guide a crop or rule. Do not draw stars behind components |

No twinkling, spinning, pulsing, particles or lens-flare excess. Star motion is
a one-time arrival on the two glowing stars and a 30° turn of the brand mark on
hover.

## 5. Layout

- 12-column grid inside `.section-shell` (max 1320px, gutter `--gutter`).
- Case and About bodies use a named grid: an open margin column (3fr), text
  column (7fr), breathing column (2fr). Figures, pairs, embeds and tables break out to
  the right edge, and so do stat rows.
- Asymmetry must create hierarchy or direction. Media pairs step the second item
  down; About photo pairs are unequal. Home features: a wine plate for a project
  without an image, one lead with a large image, then compact rows
  (`HOME_FEATURED_IDS` in `app/page.tsx` picks the four).
- Bleeds use negative `--gutter` margins; `.site-frame` clips overflow-x.

## 6. Progressive disclosure

Two layers. **Layer 1** (always open) is the recruiter scan: title, role,
status, strongest facts, problem, what Felix did, outcome, one or two visuals.
**Layer 2** (closed, native `<details>`) is deep evidence.

- `CaseSection collapsed`: an archive section whose heading is the toggle (StarX format archive, Be Local risk register and peer scores).
- `MoreEvidence`: secondary images inside an open section, Experience photos.
  The Experience certificates start **open**, so their slideshow loads with the
  page (its images are stored at display size, 480px tall).
- **Every toggle reads as a button.** A boxed +/− mark comes first, then the
  label, then the action word (Show/Hide; Open for documents), inside a wine
  outline that fills on hover. A collapsed case section keeps its heading, with
  the word and boxed mark on the right.
- Embedded documents (Canva, Drive, Sheets) start closed behind their title and
  only load when opened. Video embeds stay open.
- Never collapse the core story, a role, a status or an outcome. Hover is for
  discovery: on Work, a tile's title and role appear on hover or focus, and on
  touch screens they sit under the picture, so nothing is hover-only.

## 7. Work index

A moodboard: one 4:3 thumbnail per project, nothing else at rest. Hovering or
focusing a tile reveals its **title and role** over a plum scrim; on touch
screens both sit under the picture. The detail lives in the case.

- **Featured** is the first filter and the default view. Its tiles are larger:
  three to a row on desktop (closing tiles widen so the last row is never one
  tile alone), two on tablets with an odd count opening on a full-width tile,
  one on phones. Category filters run four, three, two. **All** runs smaller
  tiles, five to a row (four on tablets, two on phones).
- A project without media is a wine plate with the star and its title always
  showing.
- Filters and their URLs are unchanged.

### Case openers

Title and role only. No project ids (P01…P35) and no meta line (year, type,
team, status, category tags) anywhere on the site; those values stay in
`app/data.ts` for filtering.

### Focus Areas

The page title, then three folds (below), one per area, closed at load: the
bars are the page's navigation and set the areas apart. An open area keeps the
same shape every time: text (left), an equal-height photo pair (right), then
"Projects in this area" (lead size, wine star marker) over compact rows, a
small 4:3 thumbnail with title and type beside it.

### Folds

A section that opens from a wine bar: `<details class="fold">` with a
`surface-wine` summary (title left, Show/Hide and a 32px boxed mark right) and
a `.fold-body`. Closed, it is the bar alone. Open, only the bar stays wine; the
content sits on the light ground inside a 2px wine border, so it reads as one
block. Used on Focus Areas and Experience.

### Photo pairs

Photos that sit side by side share one height. `PhotoRow`
(`app/site-shell.tsx`) by default sizes each figure by its own aspect ratio, so
every photo keeps its whole frame (content files carry each `w` and `h`); Focus
Areas uses this. With `ratio` it splits the row evenly and crops every photo to
that frame: About's pairs use 4:5 at the text measure, so both pairs line up
with the paragraphs and with each other.

### Experience

Title, a wide 21:9 opening photo (`experience.cover`; a pending-image plate
until one is set), then three folds, closed at load: Education, Work
experience, Other achievements. Certificates inside Other achievements start
open, so their slideshow images still load with the page.

## 8. Images

- Show images at their **own proportions** (`height: auto`), capped at 60vh in
  cases so no single image owns a screen. Frames hug the image. Thumbnails
  (Work tiles, Home rows, Focus Areas project links) are the only cropped set.
- Documents, decks and charts are shown as documents with a hairline edge.
- No borders, no rounded corners, no drop shadows on anything at rest (the open
  mobile menu floats, so it keeps one).
- **Media honesty:** never add, duplicate or generate imagery. A project without
  media is typographic: the StarX plate on Home, `no-media` tiles on Work, the
  `no-media` case hero. Pending image slots render as a dashed ruled line with
  their reference, never a fake picture.

## 9. Surfaces, borders, radius

- **No divider lines.** Space, scale and a change of surface separate things.
  Lines stay only where they carry function: data tables, chart tracks,
  button outlines, the dashed pending-image line, and the thin edge that keeps a
  white document image from dissolving into the page.
- Cards are plain columns, not boxes. Stats are typographic figures, not tiles.
- No decorative index numbers (01, 02…). Order, where it matters, is in the words.
- Border radius is 0 everywhere (the round play button is the exception).

## 10. Interaction and motion

- Links: an underline that contracts on hover. Buttons: square, solid
  `--btn-bg`, colour change on hover, no lift. Every control answers a press
  (scale .98 on `:active`).
- Image hover: scale 1.01–1.03 inside its frame. Titles shift to wine.
- Motion is CSS only: hero star arrival + flare opening, a short rise on the
  hero copy, and a rise-in on each section's parts as they scroll into view
  (scroll-driven `animation-timeline: view()`, so no script). Browsers without
  scroll timelines, and anything already on screen, show the finished state.
  Everything is fully visible without JavaScript.
- `prefers-reduced-motion` disables all animation and smooth scrolling.
- Focus: 2px `--focus` outline (wine on bone, bone on wine) on every control.

## 11. Responsive

- ≤1366: hero star shifts left. ≤1180: tighter grids; Work tiles three to a row
  (Featured two).
- ≤980: mobile menu (native `<details>`), case/About bodies drop the margin
  column, multi-column blocks reflow.
- **Stacked cover** (≤760, and portrait tablets ≤1180): star above the name, name
  set two lines.
- ≤760: figures go edge to edge, the Work filter scrolls horizontally (fades and
  an arrow show what is hidden), Work tiles two to a row (Featured one), Focus
  Areas projects become compact rows, stats
  are two-up. Test 320, 390, 1024 portrait, 1280, 1440, 1920; no horizontal overflow.

## 12. Forbidden patterns

- No generic card grids by default. The Work moodboard is the one image grid.
- No glassmorphism, no backdrop blur.
- No arbitrary gradients.
- No AI-generated decorative blobs or abstract SVGs unrelated to the star.
- No repeated pill UI (chips are plain text with spacing).
- No fake archive assets: no faux Polaroids, tape, handwriting or stock images.
- No star spam: large stars on two pages only (Home cover, Contact).
- No poster openers on information pages; no giant type for ordinary headings.
- No more than four projects featured on Home; the full set lives on Work.
- No equal section rhythm.
- No excessive micro-labels.
- No decorative animation without purpose; no scroll-jacking, parallax, custom
  cursors or 3D. Scroll-driven rise-ins never hide content from a reader who has
  scrolled to it.
- No new copy. Layout may move and resize existing words, never rewrite them.
- No em dashes in copy or comments, and no drawn short lines that read as one (project convention).

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
| **Poster** | `surface-wine` | Home cover, Contact, the Focus Areas band on Home, compact case openers, case navigation | Scale, asymmetry, the North Star, sparse type |
| **Editorial** | bone (default body) | Everything people read or scan, including interior page openers (`PageHero` is a compact bone header) | Measured columns, hairline rules, no decoration |
| Colophon | `surface-plum` | Site footer only | Quiet close |

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
| `--bone` | #F2EEE8 | Reading surface. Use instead of white |
| `--bone-deep` | #E9E2D9 | Image loading backdrop only |
| `--silver` | #C8C5CF | Star, italic name, accents on wine |
| `--mauve` | #9A7882 | Decorative only. **Never for text** (3.3:1 on bone) |
| `--oxblood` | #781729 | Hover state of wine buttons/links |
| `--ink` | #28131B | Body text on bone |
| `--ink-muted` | #6B4A55 | Secondary text on bone (6.6:1) |
| `--bone-muted` | #D9C8CD | Secondary text on wine (8.1:1) and plum (10.3:1) |

Components read **semantic tokens** (`--fg`, `--fg-muted`, `--rule`,
`--accent`, `--star`, `--focus`, `--btn-*`), which the surface classes set.
To put something on wine, add `surface-wine`; do not hardcode colours.
No cobalt, no blue accent, no gradients except inside the North Star glow.

## 3. Typography

Self-hosted woff2 subsets (Latin, Latin Extended, Vietnamese) in `public/fonts`.

| Voice | Face | Use |
|---|---|---|
| Display + reading serif | EB Garamond 400–600 (roman and italic) | All headings, body copy, captions, figures |
| Utility | Roboto Mono 400–500 | Navigation, metadata, dates, folios, labels, buttons, links out |
| Signature | EB Garamond *italic* | Only: "Phan" in the home hero, the "The work"/"Experience" page words, the footer line, pull quotes |

- Headings are weight 400 with tight tracking; hierarchy comes from **scale**,
  and large scale is reserved: the home name (≤148px), Contact headline (≤90px),
  the StarX plate. Page titles ≤80px, case titles ≤72px, section heads ≤34px.
- Body is 18px (17px on phones), line-height ~1.55, measure `--measure` (40em).
- Mono metadata is 12–13px, **sentence case**, almost no tracking. The only
  spaced capitals are the hero role line under the name.
- The `.eyebrow` is a mono label with a short hairline lead-in. Use it as a
  margin note, not as a caption above every heading.
- Numerals: old-style in running text, lining in figures/stats.
- No generic script font. The italic Garamond is the signature.

## 4. The six-wing North Star (`app/site-shell.tsx`)

One geometry everywhere: two vertical wings and four wings at ±30° from
horizontal, equal length, slim waist (`STAR_POINTS`, viewBox 200).

| Mode | Component | Size | Treatment |
|---|---|---|---|
| Signature | `StarMark` | 12–44px | Flat `currentColor`. Header brand, footer, favicon |
| Folio | `StarMark` | 12px | Beside the project id in case openers; the Work preview plate |
| Hero | `NorthStar mode="glow"` | 35–65% of the composition | Translucent wings, bright core, thin horizontal flare. **Only** the home hero and Contact. No other page uses a large star |
| Structural | none yet | | Diagonals may guide a crop or rule. Do not draw stars behind components |

No twinkling, spinning, pulsing, particles or lens-flare excess. The only star
motion is a one-time arrival on the two glowing stars and a 30° turn of the
brand mark on hover.

## 5. Layout

- 12-column grid inside `.section-shell` (max 1320px, gutter `--gutter`).
- Case and About bodies use a named grid: margin label column (3fr), text column
  (7fr), breathing column (2fr). Figures, pairs, embeds and tables break out to
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

- `CaseSection collapsed`: an archive section whose eyebrow and heading are the
  toggle (StarX format archive, Be Local risk register and peer scores).
- `MoreEvidence`: secondary images inside an open section, Experience photos,
  certificates.
- Embedded documents (Canva, Drive, Sheets) start closed behind their title and
  only load when opened. Video embeds stay open.
- Never collapse the core story, a role, a status or an outcome. Never put
  content only on hover: hover is for discovery (the Work preview panel).

## 7. Work index

One dense row per project, all comparable: number, title, one-line premise,
categories, **role**, year and type. On desktop ≥1181px a sticky preview panel
shows the image of the hovered or focused row; below that, each row carries a
small thumbnail. Filters and their URLs are unchanged.

## 8. Images

- Show images at their **own proportions** (`height: auto`), capped at 60vh in
  cases so no single image owns a screen. Frames hug the image. Thumbnails
  (Work rows, Home rows, Focus Areas project links) are the only cropped set.
- Documents, decks and charts are shown as documents with a hairline edge.
- No borders, no rounded corners, no drop shadows except the two seam images.
- **Media honesty:** never add, duplicate or generate imagery. A project without
  media is typographic: the StarX plate on Home, `no-media` rows on Work, the
  `no-media` case hero. Pending image slots render as a dashed ruled line with
  their reference, never a fake picture.

## 9. Surfaces, borders, radius

- Hairline rules (`--rule`, `--rule-strong`) do the structuring. Wine rules mark
  a card or table top.
- Cards are ruled columns, not boxes. Stats are typographic figures, not tiles.
- Border radius is 0 everywhere (the round play button is the exception).

## 10. Interaction and motion

- Links: mono with an underline that contracts on hover. Buttons: square, solid
  `--btn-bg`, colour change on hover, no lift.
- Image hover: scale 1.01–1.03 inside its frame. Titles shift to wine.
- Motion is CSS only and finishes once: hero star arrival + flare opening, a
  short rise on the hero copy. Everything is fully visible without JavaScript.
- `prefers-reduced-motion` disables all animation and smooth scrolling.
- Focus: 2px `--focus` outline (wine on bone, bone on wine) on every control.

## 11. Responsive

- ≤1366: hero star shifts left. ≤1180: tighter grids; Work drops the preview
  panel and shows row thumbnails.
- ≤980: mobile menu (native `<details>`), case/About margin labels move above
  headings, multi-column blocks reflow.
- **Stacked cover** (≤760, and portrait tablets ≤1180): star above the name, name
  set two lines, orbit note becomes a footnote line.
- ≤760: figures go edge to edge, the Work filter scrolls horizontally, stats are
  two-up. Test 320, 390, 1024 portrait, 1280, 1440, 1920; no horizontal overflow.

## 12. Forbidden patterns

- No generic card grids by default.
- No glassmorphism, no backdrop blur.
- No arbitrary gradients.
- No AI-generated decorative blobs or abstract SVGs unrelated to the star.
- No repeated pill UI (chips are mono text with spacing).
- No fake archive assets: no faux Polaroids, tape, handwriting or stock images.
- No star spam: large stars on two pages only (Home cover, Contact).
- No poster openers on information pages; no giant type for ordinary headings.
- No more than four projects featured on Home; the full set lives on Work.
- No equal section rhythm.
- No excessive micro-labels.
- No decorative animation without purpose; no scroll-jacking, parallax, custom
  cursors or 3D.
- No new copy. Layout may move and resize existing words, never rewrite them.
- No em dashes in copy or comments (project convention).

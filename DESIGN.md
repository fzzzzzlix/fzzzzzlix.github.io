# DESIGN.md: Contemporary Burgundy Poster System

The visual contract for fzzzzzlix.github.io. Read this before changing layout or
styles. Words live in `app/content/*` and `app/data.ts` (see `CLAUDE.md`); this
file governs how they look.

**Brand values:** classic resilience, bold spark, efficient simplicity.
**Balance:** about 75% disciplined editorial restraint, 25% theatrical gesture.
**Rule of thumb:** heroes may perform; body content must work.

Mental model (never printed on the site): the home page is the cover, Work is the
contents, case studies are the feature spreads, About is the profile, Contact is
the colophon.

---

## 1. Two modes

| Mode | Surface | Used for | Character |
|---|---|---|---|
| **Poster** | `surface-wine` | Home hero, page openers, case openers, one punctuation band per page, case navigation, Contact | Scale, asymmetry, the North Star, sparse type |
| **Editorial** | bone (default body) | Everything people read: case bodies, lists, CV information, project index | Measured columns, hairline rules, no decoration |
| Colophon | `surface-plum` | Site footer only | Quiet close |

Rhythm: **dramatic → quiet → visual → informational → quiet → dramatic
punctuation.** Never two poster bands back to back except the case navigation
into the footer. Section padding varies on purpose; do not normalise it.

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

- Headings are weight 400 with tight tracking; hierarchy comes from **scale**.
- Body is 19px (18px on phones), line-height ~1.55, measure `--measure` (38em).
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
| Editorial | `NorthStar mode="flat"` | Large, cropped | Flat silver at 8–22% opacity on wine. Page/case openers, punctuation bands, StarX plate |
| Hero | `NorthStar mode="glow"` | 35–65% of the composition | Translucent wings, bright core, thin horizontal flare. **Only** the home hero and Contact |
| Structural | none yet | | Diagonals may guide a crop or rule. Do not draw stars behind components |

No twinkling, spinning, pulsing, particles or lens-flare excess. The only star
motion is a one-time arrival on the two glowing stars and a 30° turn of the
brand mark on hover.

## 5. Layout

- 12-column grid inside `.section-shell` (max 1320px, gutter `--gutter`).
- Case and About bodies use a named grid: margin label column (3fr), text column
  (7fr), breathing column (2fr). Figures, pairs, embeds and tables break out to
  the right edge; stats sit in the text column.
- Asymmetry must create hierarchy or direction. Media pairs step the second item
  down; About photo pairs are unequal; home features vary by position
  (`FEATURE_LAYOUTS` in `app/page.tsx`).
- Bleeds use negative `--gutter` margins; `.site-frame` clips overflow-x.

## 6. Images

- Show images at their **own proportions** (`height: auto`). Do not force a
  shared aspect ratio. The Work index thumbnails are the only cropped set.
- Documents, decks and charts are shown as documents with a hairline edge.
- No borders, no rounded corners, no drop shadows except the two seam images.
- **Media honesty:** never add, duplicate or generate imagery. A project without
  media is typographic: the StarX plate on Home, `no-media` rows on Work, the
  `no-media` case hero. Pending image slots render as a dashed ruled line with
  their reference, never a fake picture.

## 7. Surfaces, borders, radius

- Hairline rules (`--rule`, `--rule-strong`) do the structuring. Wine rules mark
  a card or table top.
- Cards are ruled columns, not boxes. Stats are typographic figures, not tiles.
- Border radius is 0 everywhere (the round play button is the exception).

## 8. Interaction and motion

- Links: mono with an underline that contracts on hover. Buttons: square, solid
  `--btn-bg`, colour change on hover, no lift.
- Image hover: scale 1.01–1.03 inside its frame. Titles shift to wine.
- Motion is CSS only and finishes once: hero star arrival + flare opening, a
  short rise on the hero copy. Everything is fully visible without JavaScript.
- `prefers-reduced-motion` disables all animation and smooth scrolling.
- Focus: 2px `--focus` outline (wine on bone, bone on wine) on every control.

## 9. Responsive

- ≤1366: hero star shifts left. ≤1180: tighter grids.
- ≤980: mobile menu (native `<details>`), case/About margin labels move above
  headings, multi-column blocks reflow.
- **Stacked cover** (≤760, and portrait tablets ≤1180): star above the name, name
  set two lines, orbit note becomes a footnote line.
- ≤760: figures go edge to edge, the Work filter scrolls horizontally, stats are
  two-up. Test 320, 390, 1024 portrait, 1280, 1440, 1920; no horizontal overflow.

## 10. Forbidden patterns

- No generic card grids by default.
- No glassmorphism, no backdrop blur.
- No arbitrary gradients.
- No AI-generated decorative blobs or abstract SVGs unrelated to the star.
- No repeated pill UI (chips are mono text with spacing).
- No fake archive assets: no faux Polaroids, tape, handwriting or stock images.
- No star spam: one large star per screen at most, glow only in two places.
- No equal section rhythm.
- No excessive micro-labels.
- No decorative animation without purpose; no scroll-jacking, parallax, custom
  cursors or 3D.
- No new copy. Layout may move and resize existing words, never rewrite them.
- No em dashes in copy or comments (project convention).

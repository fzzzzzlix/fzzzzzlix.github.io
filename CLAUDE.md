# Felix Phan Portfolio — content map & editing guide

Next.js (App Router) portfolio exported as a static site. **All user-facing words
live in plain-string content modules.** This file is the map: use it to find the
exact file for any word on the site without re-reading the whole codebase.

## Where every word lives

### Pages (`app/content/*.ts`)
| Page (route) | Component | Content file |
|---|---|---|
| Home (`/`) | `app/page.tsx` | `app/content/home.ts` |
| About (`/about`) | `app/about/page.tsx` | `app/content/about.ts` |
| Contact (`/contact`) | `app/contact/page.tsx` | `app/content/contact.ts` |
| Experience (`/experience`) | `app/experience/page.tsx` | `app/content/experience.ts` |
| Focus Areas (`/interests`) | `app/interests/page.tsx` | `app/content/interests.ts` |

### Feature case studies (`app/content/cases/*.ts`)
Long-form cases. The component in `app/work/[slug]/*-case.tsx` only arranges the
words; edit the words in the content file.
| Case | Component | Content file |
|---|---|---|
| P02 Mùa Hạ Của Chúng Tôi | `mua-ha-case.tsx` | `app/content/cases/mua-ha.ts` |
| P13 MAGGI | `maggi-case.tsx` | `app/content/cases/maggi.ts` |
| P20 TRESemmé | `tresemme-case.tsx` | `app/content/cases/tresemme.ts` |
| P22 Little Me | `little-me-case.tsx` | `app/content/cases/little-me.ts` |
| P25 EMPACTS | `empacts-case.tsx` | `app/content/cases/empacts.ts` |
| P31 Be Local | `be-local-case.tsx` | `app/content/cases/be-local.ts` |
| P32 HUST Crisis Response | `crisis-response-case.tsx` | `app/content/cases/crisis-response.ts` |

### Project data (already centralised — edit in place)
| What | File |
|---|---|
| All 30 project records (title, year, role, tension, approach, significance, evidence, tags, alt text) — drives the Work grid, cards and every non-feature case | `app/data.ts` |
| Supporting-case long-form layer (decks, extra sections, figures, links for non-feature cases) | `app/work/[slug]/supporting-case-data.ts` |
| Which image file each project uses (plus an 800px `thumb` for tiles; run `node scripts/make-thumbs.mjs` after adding or replacing one) | `app/project-images.ts` |

The Work index page (`/work`) and every card/tension line come from `app/data.ts`
via `app/work/work-grid.tsx` — there is no separate content file for the grid.

## How to edit copy

- **Edit the text between the quotes.** e.g. in `app/content/home.ts`, change
  `prop: "A creative strategist..."` to whatever it should say.
- **Emphasis inside a paragraph:** wrap in `**double asterisks**` for bold or
  `*single asterisks*` for italic. These are rendered by `app/content/render-inline.tsx`.
- **Punctuation:** type real characters, not HTML entities — curly quotes `’ “ ”`,
  en dash `–`, `&`, accented Vietnamese letters. **Never use em dashes (—);** use a
  comma or colon (project convention). No middot `·` separators inside a single
  string either — the layout adds separators between elements.
- **`body` is an array of paragraphs** — add or remove a string to add/remove a
  paragraph.
- **`unit`** on a strip/stat item renders as the small superscript, e.g.
  `{ value: "3.3", unit: "%", label: "..." }` → 3.3%.

## What stays in the component (not "content")

Images, embed/iframe URLs, external + download links, and layout live in the
content module too (as `asset("/images/...")`, `src`, `url`, `href`), grouped near
the copy they belong to — but they are structural. Editing a URL or an image path
changes what loads, so change those deliberately. Page routes, category `filter`
values and project `id`s must stay valid.

## Visual design

Colours, type, the North Star, layout and motion rules live in `DESIGN.md`.
Styles are in `app/globals.css`, organised by page; components read semantic
surface tokens (`surface-wine`, `surface-plum`, default bone) instead of raw colours.

## Agent skills (`.claude/skills/`)

Vendored copies; permissions for their commands are in `.claude/settings.json`.
| Skill | Use it for |
|---|---|
| `web-design-guidelines` (Vercel) | Audit UI code for accessibility, focus, motion, image and form rules |
| `design-taste-frontend` (Taste Skill) | Browser inspection + screenshots at 1440/768/390: `node .claude/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:5199/<page> --out .taste-skill/<page>` |
| `playwright-cli` | Click through and screenshot the running site. Install with `npm install -g @playwright/cli@latest`; in cloud sessions open with `playwright-cli open <url> --config=.claude/playwright-cli.cloud.json` |
| `frontend-ui-engineering` (Addy Osmani) | Component and UI engineering practice |

**`DESIGN.md` wins over every skill.** The owner reviewed Taste Skill's house
rules in Oct 2026 and adopted most of them (one serif face, no divider lines, no
index numbers, no eyebrows, stone ground, no rest shadows, a seven-step type
scale, scroll rise-ins); DESIGN.md records the result. Labels are now 14px.
Still declined: the italic "Phan", About capability tiers, the italic page titles,
and stock or archive imagery (media honesty). Treat findings on those as noise. Act on
layout, overflow, contrast and covered-text findings after confirming them in a
screenshot. The "edge-text" finding for the nav links at 768/390 is a false
positive from the closed mobile `<details>` menu, and full-page screenshots show
blank bands below the fold because scroll-driven rise-ins have not run; scroll
and take viewport shots instead.

**Eyebrow strings** (`eyebrow:` fields in content files and case data) are kept
but not displayed; see DESIGN.md §3.

## Search (SEO, AEO, GEO)

| What | Where |
|---|---|
| Names, profile facts, page metadata helper, JSON-LD (WebSite, Person, ProfilePage, CreativeWork) | `app/seo.ts` |
| Site defaults: title "Felix Phan, PORTFOLIO", template "Felix Phan, %s" | `app/layout.tsx` |
| `robots.txt` and the AI-readable summary `llms.txt` | `public/` |
| `sitemap.xml`, written from the exported HTML after every build | `scripts/write-sitemap.mjs` (part of `npm run build:pages`) |

Keep both names, **Felix Phan** and the legal name **Nguyen Phan Thuc Huong**
(with diacritics: **Nguyễn Phan Thục Hương**, shown on About and in the JSON-LD),
in page descriptions where they read naturally; the footer carries both on
every page. Interior pages use `pageMetadata()` so each gets its own title,
canonical URL and share card. Update `public/llms.txt` when facts change.

## Verify a change
```bash
npx tsc --noEmit
```
Dev preview (Vite, port 5199):
```bash
npm run dev
```
Portfolio content/claim checks:
```bash
npm run validate:portfolio
```

Pre-existing `tsc` errors in `db/index.ts` and `worker/index.ts` (Cloudflare
Workers types) are unrelated to page/content edits — ignore them.

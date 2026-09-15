# Felix Phan Portfolio — content map & editing guide

Next.js (App Router) portfolio exported as a static site. **All user-facing words
live in plain-string content modules.** This file is the map: use it to find the
exact file for any word on the site without re-reading the whole codebase.

The site is bilingual: **English at the root** (`/about`) and **Vietnamese under
`/vi`** (`/vi/about`). Every content file comes in a pair, `*.en.ts` and
`*.vi.ts`, plus a tiny `*.ts` that only picks between them. **Edit the words in
the `.en.ts` / `.vi.ts` files, never in the picker.**

## Where every word lives

### Pages
The page body lives in `app/views/*-view.tsx` and is shared by both languages;
the route files (`app/page.tsx`, `app/vi/page.tsx`, …) are three-line wrappers.
| Page (route) | Shared view | English words | Vietnamese words |
|---|---|---|---|
| Home (`/`, `/vi`) | `app/views/home-view.tsx` | `app/content/home.en.ts` | `app/content/home.vi.ts` |
| About | `app/views/about-view.tsx` | `app/content/about.en.ts` | `app/content/about.vi.ts` |
| Contact | `app/views/contact-view.tsx` | `app/content/contact.en.ts` | `app/content/contact.vi.ts` |
| Experience | `app/views/experience-view.tsx` | `app/content/experience.en.ts` | `app/content/experience.vi.ts` |
| Focus Areas (`/interests`) | `app/views/interests-view.tsx` | `app/content/interests.en.ts` | `app/content/interests.vi.ts` |
| Work index (`/work`) | `app/views/work-view.tsx` | `app/content/ui.ts` | `app/content/ui.ts` |
| Project case (`/work/[slug]`) | `app/views/project-view.tsx` | `app/data.ts` | `app/content/projects.vi.ts` |

### Interface chrome (`app/content/ui.ts`)
Navigation, footer, buttons, case-study section labels ("The tension"), result
counts and screen-reader labels, for both languages in one file. It also records
the **translation policy**: which words deliberately stay English in the
Vietnamese version (nav labels, CV, LinkedIn, capability filters, role titles,
brand names, "Follow the North Star"). Read that comment before translating.

### Feature case studies (`app/content/cases/*`)
Long-form cases. The component in `app/work/[slug]/*-case.tsx` only arranges the
words; edit the words in the content file.
| Case | Component | English words | Vietnamese words |
|---|---|---|---|
| P02 Mùa Hạ Của Chúng Tôi | `mua-ha-case.tsx` | `cases/mua-ha.en.ts` | `cases/mua-ha.vi.ts` |
| P13 MAGGI | `maggi-case.tsx` | `cases/maggi.en.ts` | `cases/maggi.vi.ts` |
| P20 TRESemmé | `tresemme-case.tsx` | `cases/tresemme.en.ts` | `cases/tresemme.vi.ts` |
| P22 Little Me | `little-me-case.tsx` | `cases/little-me.en.ts` | `cases/little-me.vi.ts` |
| P25 EMPACTS | `empacts-case.tsx` | `cases/empacts.en.ts` | `cases/empacts.vi.ts` |
| P31 Be Local | `be-local-case.tsx` | `cases/be-local.en.ts` | `cases/be-local.vi.ts` |
| P32 HUST Crisis Response | `crisis-response-case.tsx` | `cases/crisis-response.en.ts` | `cases/crisis-response.vi.ts` |

Each `.vi.ts` case file spreads its English block first (`...en.film`), so image
paths, embed URLs and links are inherited and can never drift between the two
languages. Only the words are written out again.

### Project data (already centralised — edit in place)
| What | File |
|---|---|
| All 30 project records (title, year, role, tension, approach, significance, evidence, tags, alt text) — drives the Work grid, cards and every non-feature case | `app/data.ts` |
| Supporting-case long-form layer (decks, extra sections, figures, links for non-feature cases) | `app/work/[slug]/supporting-case-data.ts` |
| Which image file each project uses | `app/project-images.ts` |

The Work index page (`/work`) and every card/tension line come from `app/data.ts`
via `app/work/work-grid.tsx` — there is no separate content file for the grid.

## How to translate

- **Adding Vietnamese to something not yet translated.** Projects fall back to
  English automatically. To translate one, add its id to
  `app/content/projects.vi.ts` with only the fields you want in Vietnamese
  (`tension`, `approach`, `output`, `significance`, `evidence`, `role`, `alt`).
  Nothing else needs to change. Seven feature cases are translated so far; the
  other 18 and the long-form layer in
  `app/work/[slug]/supporting-case-data.ts` are still English.
- **Never translate:** `slug`, `id`, `filter`, `route`, `tags`, image paths and
  URLs. The Work-page filters and every internal link depend on them.
  `npm run validate:portfolio` fails if a Vietnamese page file's paths or URLs
  drift from the English one.
- **TypeScript enforces the shape**: a `.vi.ts` file that is missing a key, or
  invents one, fails `npx tsc --noEmit`. It cannot go half-translated by accident.
- **Adding a language** means adding it to `LOCALES` in `app/i18n.ts`, adding a
  content file per page, and copying the `app/vi/` route folder.

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

## Verify a change
```bash
npx tsc --noEmit
```
Dev preview (Vite, port 5199), English at `/`, Vietnamese at `/vi`:
```bash
npm run dev
```
Portfolio content/claim checks:
```bash
npm run validate:portfolio
```

Pre-existing `tsc` errors in `db/index.ts` and `worker/index.ts` (Cloudflare
Workers types) are unrelated to page/content edits — ignore them.

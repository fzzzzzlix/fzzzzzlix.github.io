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
| Which image file each project uses | `app/project-images.ts` |

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

# Felix Phan — Portfolio 2026

Personal portfolio for Felix Phan: Creative Strategist & Storyteller.  
Live deployment: <https://fzzzzzlix.github.io/>

---

## Technology stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 16.2.6 |
| Runtime | Vinext (Cloudflare Workers) | 0.0.50 |
| Build tool | Vite | 8.0.13 |
| UI library | React | 19.2.6 |
| CSS | Tailwind CSS 4 (PostCSS) | 4.2.1 |
| Language | TypeScript | 5.9.3 |
| Hosting | GitHub Pages (static export) | — |
| Node | ≥ 22.13.0 | — |

---

## Prerequisites

- Node.js 22.13.0 or newer
- npm
- Linux or WSL (the build and install scripts use GNU tools)

---

## Development

```bash
npm ci
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

---

## Production build

```bash
npm run build
```

The build script validates the Sites artifact automatically. Do not run `npm run build` as a normal checkpoint step — it is for targeted diagnosis of remote failures.

## Preview the built app

```bash
npm run start
```

## Test (build + validate + metadata check)

```bash
npm test
```

---

## Canonical folder structure

```
portfolio/
├── README.md               This file
├── AUDIT_REPORT.md         Phase 1 audit (reference)
├── CLEANUP_LOG.md          Full change log from reorganisation
├── package.json
├── package-lock.json
├── app/                    Next.js source — edit here
│   ├── data.ts             Single source of truth for all 32 projects
│   ├── globals.css         Full design system
│   ├── layout.tsx          Root layout + metadata
│   ├── page.tsx            Homepage
│   ├── site-shell.tsx      Shared components (header, footer, etc.)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── experience/page.tsx
│   ├── interests/page.tsx
│   └── work/
│       ├── page.tsx
│       ├── work-grid.tsx
│       └── [slug]/page.tsx
├── public/
│   ├── favicon.svg
│   ├── fonts/              Self-hosted EB Garamond + Montserrat
│   └── images/             34 real project images
├── content-master/         Human-editable master content files
│   ├── PROFILE_MASTER.md
│   ├── EXPERIENCE_MASTER.md
│   ├── PROJECT_INDEX.md
│   ├── ASSET_INDEX.md
│   └── projects/           Long-form source docs per project
├── source-materials/       Static HTML reference (github-baseline)
├── _archive_review/        Superseded files — pending final deletion
├── build/                  Vite plugin (Sites artifact)
├── scripts/                Build, install, validation helpers
├── tests/                  Build metadata test
├── worker/                 Cloudflare Worker entry
├── db/                     Drizzle schema (inactive)
└── dist/                   Generated production build
```

---

## Content editing workflow

All project data lives in [`app/data.ts`](app/data.ts).  
Each project record is a typed `Project` object with: `id`, `title`, `slug`, `year`, `publicType`, `role`, `tension`, `approach`, `output`, `significance`, `evidence`, `source`, `priority`, `feature`, `tags`, `assetFilename`, `assetRatio`, `assetRule`, `alt`, and an optional `proofLinks` array.

After editing `data.ts`, changes propagate automatically to:
- The work index page (`/work`)
- Every project case page (`/work/[slug]`)
- The homepage featured grid and proof-band counts

To edit page copy (About, Experience, Interests, Contact), edit the corresponding file in `app/`.

---

## How to add a new project

1. Add a new `Project` object to the array in `app/data.ts`.
2. Use the next sequential ID (currently P32 would be next).
3. Set a unique, URL-safe `slug`.
4. Set `feature: true` if it should appear in the featured section. Update the homepage `featured` array in `app/page.tsx` if you change the featured set.
5. Place the cover image in `public/images/` following the `pNN-name.ext` naming convention.
6. Update `ASSET_INDEX.md` in `content-master/`.
7. Create a project detail file in `content-master/projects/[slug].md` if extended copy is needed.

---

## Asset naming rules

- Use lowercase, hyphenated filenames: `p22-little-me.jpg`
- Prefix with the project number: `pNN-`
- For multiple images per project, add a suffix: `p22-booklet.jpg`, `p22-buddy.jpg`
- Web-optimised versions: suffix `-web`: `p31-be-local-web.jpg`
- Original high-resolution versions are kept alongside; never delete originals

---

## Deployment notes

The site is deployed to **GitHub Pages** as a static export. It is a *user* Pages
site: the repository is named `fzzzzzlix.github.io`, so the site is served at the
domain root (`https://fzzzzzlix.github.io/`) with no path prefix.

Deployment is automated by [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml):
on every push to `main` it runs `npm run build:pages` (which sets
`output: "export"` in [`next.config.ts`](next.config.ts)), then publishes the
generated `dist/client/` directory to Pages.

### One-time setup

1. Rename the GitHub repo to `fzzzzzlix.github.io` (Settings → General → Repository name).
2. In Settings → Pages, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.

### Static-export constraints

- All routes are prerendered to HTML. Dynamic app-router routes must export
  `generateStaticParams()` (see [`app/work/[slug]/page.tsx`](app/work/[slug]/page.tsx)).
- There is no server image optimizer, so `images.unoptimized` is set and images
  are served directly from `public/images/`.
- vinext's exporter does **not** support Next's `basePath`; hence the root-domain
  (user-site) hosting above. If the site ever moves to a sub-path, see
  [`app/base-path.ts`](app/base-path.ts).

To build the static site locally:

```bash
npm run build:pages   # outputs dist/client/
npx serve dist/client # or: python -m http.server -d dist/client 8000
```

---

## Known limitations

- Projects listed in [`app/project-images.ts`](app/project-images.ts) render their real
  cover image; any project not in that map still uses a `MediaPlaceholder`.
- The CV URL on the contact page is a placeholder (`/contact#cv`). Felix will supply the final URL.
- The `db/` and `drizzle/` directories are framework stubs; no database is currently active.
- The legacy Cloudflare Sites scripts in `scripts/` require Linux or WSL. The GitHub
  Pages build (`npm run build:pages`) does **not** use them and runs on any platform.

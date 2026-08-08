# AUDIT REPORT — Felix Phan Portfolio WIP
**Audit date:** 2026-08-09  
**Auditor:** Claude Code (Phase 1 only — no files moved, renamed, or deleted)  
**Working directory:** `D:\felix-phan-portfolio-wip`

---

## A. Project overview

### Detected frameworks and technologies

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 16.2.6 |
| Deployment runtime | Vinext (Cloudflare Workers via Vite) | 0.0.50 |
| Build tool | Vite | 8.0.13 |
| UI library | React + React DOM | 19.2.6 |
| CSS | Tailwind CSS 4 (PostCSS) | 4.2.1 |
| Language | TypeScript | 5.9.3 |
| Database ORM | Drizzle ORM (schema currently empty) | 0.45.2 |
| Hosting platform | ChatGPT Sites (OpenAI), Cloudflare Workers | — |
| Node requirement | ≥ 22.13.0 | — |
| Static fallback | Vanilla HTML / CSS / minimal JS | — |
| Fonts | EB Garamond Variable, Montserrat Variable | Self-hosted |

### Likely main entry points

| Entry point | Purpose |
|-------------|---------|
| `app/layout.tsx` | Root Next.js layout |
| `app/page.tsx` | Homepage |
| `app/about/page.tsx` | About page |
| `app/experience/page.tsx` | Experience page |
| `app/interests/page.tsx` | Interests page |
| `app/contact/page.tsx` | Contact page |
| `app/work/page.tsx` | Work index |
| `app/work/[slug]/page.tsx` | Dynamic project case page |
| `app/data.ts` | Single source-of-truth for all 30 project records |
| `app/site-shell.tsx` | Shared layout components (header, footer, etc.) |
| `worker/index.ts` | Cloudflare Worker entry point |

### Available development and build commands

| Script | Command |
|--------|---------|
| Install (CI) | `npm run install:ci` (Linux/WSL only) |
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Start built app | `npm run start` |
| Test | `npm test` |
| Lint | `npm run lint` |
| DB migrate | `npm run db:generate` |

> **Important:** The `install:ci` and `build` scripts use Bash/GNU tooling and are Linux-only.  
> Local dev on Windows requires WSL or Bash.

### Existing deployment configuration

- **Platform:** ChatGPT Sites (OpenAI), project ID `appgprj_6a7278c75318819195c50198964595f3` (`.openai/hosting.json`)
- **Live URL:** `https://felix-phan-portfolio.anh022145.chatgpt.site/`
- **No D1 or R2 bindings currently active** (`"d1": null, "r2": null`)
- **GitHub Pages fallback** targeted via `felix-portfolio-github-baseline-2026-08-07/`

### Whether there are multiple separate websites or codebases

**Yes — four distinct versions were found:**

| # | Directory | Technology | Projects | Images | Status |
|---|-----------|-----------|---------|--------|--------|
| 1 | `app/` (root) | Next.js + Vinext | 30 (P01–P30) | Placeholders only | **Active WIP — canonical candidate** |
| 2 | `felix-portfolio-github-baseline-2026-08-07/` | Vanilla HTML/CSS/JS | 31 (P01–P31) | 34 real images | **Content-complete static backup** |
| 3 | `felix-phan-portfolio-live-static-export/` | Vanilla HTML/CSS/JS | 30 routes | None (data only) | Generated crawl of live site |
| 4 | `portfolio-repo-ready/` | Vanilla HTML/CSS/JS | 30 (P01–P31 via images, but missing inner pages) | 34 real images (exact duplicates of #2) | Superseded by #2 |

### Recommended canonical codebase

**Codebase 1 (`app/` + root config) — the Next.js/Vinext app — is the canonical working version.**

**Supporting evidence:**
- Latest file timestamps (2026-08-09 vs 2026-08-07 for static versions)
- Has a complete build system with verified production build in `dist/`
- Has an active OpenAI hosting project ID
- Has a proper component architecture (reusable header, footer, media placeholder, etc.)
- Is the source of the live deployment at `felix-phan-portfolio.anh022145.chatgpt.site`
- The `EXPORT_README.md` confirms it as "the current work-in-progress portfolio"

**However, codebase 2 (github-baseline) contains critical content and assets not yet in codebase 1:**
- P31 "Be Local" — a 31st project missing from `app/data.ts`
- 34 real project images (all placeholders in the Next.js app)
- 9 completed case-study HTML pages with full narrative copy
- Two long-form markdown source documents

**Confidence level:** High. The distinction between source (codebase 1) and content backup (codebase 2) is clear from timestamps, build configuration, and deployment records.

---

## B. Repository inventory

### Root-level config and framework files

| Path | File type | Apparent purpose | Status | Recommended action | Confidence | Notes |
|------|-----------|-----------------|--------|--------------------|------------|-------|
| `.gitignore` | Config | Git ignore rules | CANONICAL | Keep | High | Standard Next.js + Wrangler ignore list |
| `.npmrc` | Config | npm registry settings | CANONICAL | Keep | High | Sites-specific npm settings |
| `.openai/hosting.json` | Config | ChatGPT Sites hosting bindings | SENSITIVE | Keep, do not publish raw project_id | High | Contains `project_id` — treat as internal config |
| `EXPORT_README.md` | Docs | Instructions for the exported WIP archive | KEEP | Retain | High | Confirms this is a WIP export |
| `README.md` | Docs | Vinext-starter template README | OBSOLETE | Replace with portfolio-specific README in Phase 2 | High | Generic starter template; not portfolio-specific |
| `drizzle.config.ts` | Config | Drizzle ORM migration config | KEEP | Keep | High | Required if D1 is ever activated |
| `eslint.config.mjs` | Config | ESLint rules | KEEP | Keep | High | Next.js ESLint config |
| `next.config.ts` | Config | Next.js config | CANONICAL | Keep | High | Minimal config |
| `package.json` | Config | Project manifest and scripts | CANONICAL | Keep | High | |
| `package-lock.json` | Config | Exact dependency lockfile | CANONICAL | Keep | High | Required for reproducible installs |
| `postcss.config.mjs` | Config | PostCSS/Tailwind config | KEEP | Keep | High | |
| `tsconfig.json` | Config | TypeScript config | KEEP | Keep | High | |
| `vite.config.ts` | Config | Vite + Vinext + Cloudflare config | CANONICAL | Keep | High | |

### `app/` — Next.js source (canonical)

| Path | File type | Apparent purpose | Status | Recommended action | Confidence | Notes |
|------|-----------|-----------------|--------|--------------------|------------|-------|
| `app/layout.tsx` | TSX | Root layout, metadata, CSS import | CANONICAL | Keep | High | |
| `app/page.tsx` | TSX | Homepage with hero, featured projects, method, routes | CANONICAL | Keep | High | Featured set (P01, P05, P22, P13) differs from github-baseline — see Section E |
| `app/site-shell.tsx` | TSX | Shared components: SiteHeader, SiteFooter, MediaPlaceholder, etc. | CANONICAL | Keep | High | |
| `app/data.ts` | TS | All 30 project records + exports | CANONICAL | Keep; add P31 in Phase 2 | High | Missing P31 "Be Local" vs. github-baseline |
| `app/globals.css` | CSS | Full design system: typography, layout, components | CANONICAL | Keep | High | Dark wine/ivory theme; self-hosted fonts |
| `app/about/page.tsx` | TSX | About page | CANONICAL | Keep | High | |
| `app/contact/page.tsx` | TSX | Contact page | CANONICAL | Keep | High | CV link is a placeholder |
| `app/experience/page.tsx` | TSX | Experience + education timeline | CANONICAL | Keep | High | |
| `app/interests/page.tsx` | TSX | Interests page | CANONICAL | Keep | High | |
| `app/work/page.tsx` | TSX | Work index page | CANONICAL | Keep | High | |
| `app/work/work-grid.tsx` | TSX | Client-side filterable project grid | CANONICAL | Keep | High | |
| `app/work/[slug]/page.tsx` | TSX | Dynamic project case page | CANONICAL | Keep | High | |
| `app/chatgpt-auth.ts` | TS | Optional ChatGPT sign-in helpers | KEEP | Keep | High | Not used by portfolio pages; framework boilerplate |

### `build/`, `scripts/`, `tests/`, `worker/`, `db/`, `drizzle/`

| Path | File type | Apparent purpose | Status | Recommended action | Confidence | Notes |
|------|-----------|-----------------|--------|--------------------|------------|-------|
| `build/sites-vite-plugin.ts` | TS | Sites artifact validation plugin | KEEP | Keep | High | Part of build chain |
| `scripts/build-verified.sh` | Shell | Build + artifact validation (Linux) | KEEP | Keep | High | |
| `scripts/install-ci.sh` | Shell | Bounded single-run install | KEEP | Keep | High | |
| `scripts/sites-env.sh` | Shell | Writable path setup for build tools | KEEP | Keep | High | |
| `scripts/validate-artifact.sh` | Shell | Post-build artifact validation | KEEP | Keep | High | |
| `tests/rendered-html.test.mjs` | MJS | Build metadata test | KEEP | Keep | High | |
| `worker/index.ts` | TS | Cloudflare Worker entry point | KEEP | Keep | High | |
| `db/index.ts` | TS | D1 binding reader | KEEP | Keep | Medium | Not actively used (D1 is null) |
| `db/schema.ts` | TS | Empty Drizzle schema | KEEP | Keep | Medium | Placeholder only |
| `drizzle/meta/_journal.json` | JSON | Migration journal | KEEP | Keep | Medium | Framework state |

### `public/` — Font and icon assets

| Path | File type | Apparent purpose | Status | Recommended action | Confidence | Notes |
|------|-----------|-----------------|--------|--------------------|------------|-------|
| `public/fonts/EBGaramond-Variable.ttf` | Font | Self-hosted EB Garamond | CANONICAL | Keep | High | 851 KB; used in globals.css |
| `public/fonts/Montserrat-Variable.ttf` | Font | Self-hosted Montserrat | CANONICAL | Keep | High | 745 KB; used in globals.css |
| `public/favicon.svg` | SVG | Favicon (North Star polygon) | CANONICAL | Keep | High | Portfolio brand mark |
| `public/file.svg` | SVG | Next.js starter default asset | UNUSED | Archive in Phase 2 | High | Not referenced in any page |
| `public/globe.svg` | SVG | Next.js starter default asset | UNUSED | Archive in Phase 2 | High | Not referenced in any page |
| `public/window.svg` | SVG | Next.js starter default asset | UNUSED | Archive in Phase 2 | High | Not referenced in any page |

### `examples/` — Framework boilerplate

| Path | File type | Apparent purpose | Status | Recommended action | Confidence | Notes |
|------|-----------|-----------------|--------|--------------------|------------|-------|
| `examples/d1/app/api/notes/route.ts` | TS | D1 example API route | OBSOLETE | Archive in Phase 2 | High | Vinext starter example; not part of portfolio |
| `examples/d1/db/schema.ts` | TS | D1 example schema | OBSOLETE | Archive in Phase 2 | High | Same |

### `dist/` — Verified production build output

| Directory | Status | Recommended action | Notes |
|-----------|--------|--------------------|-------|
| `dist/` (all contents) | GENERATED | Do not edit; recreate via `npm run build` | Verified build artifact for Cloudflare deployment |

### `felix-portfolio-github-baseline-2026-08-07/` — Static HTML version (content-complete backup)

| Path | File type | Apparent purpose | Status | Recommended action | Confidence | Notes |
|------|-----------|-----------------|--------|--------------------|------------|-------|
| `index.html` | HTML | Full homepage (31 projects, 6 featured) | KEEP | Retain as content reference; extract P31 data | High | Contains more content than Next.js homepage |
| `work.html` | HTML | Work index with full 31-project catalogue | KEEP | Content reference | High | All 31 projects listed |
| `about.html` | HTML | About page | KEEP | Content reference | High | |
| `experience.html` | HTML | Experience page | KEEP | Content reference | High | |
| `interests.html` | HTML | Interests page | KEEP | Content reference | High | |
| `contact.html` | HTML | Contact page | KEEP | Content reference | High | |
| `case-qnh.html` | HTML | P01 deep case (Bếp Nhà Haha) | KEEP | Content reference | High | 4878 bytes; supersedes portfolio-repo-ready version (4152 bytes) |
| `case-summer.html` | HTML | P02 deep case (Mùa Hạ) | KEEP | Content reference | High | 4000 bytes; supersedes portfolio-repo-ready (3272 bytes) |
| `case-buv.html` | HTML | P05 deep case (BUV TVC) | KEEP | Content reference | High | 4257 bytes; supersedes portfolio-repo-ready (3529 bytes) |
| `case-maggi.html` | HTML | P13 deep case (MAGGI) | KEEP | Content reference | High | 3814 bytes; supersedes portfolio-repo-ready (3086 bytes) |
| `case-tresemme.html` | HTML | P20 deep case (TRESemmé) | KEEP | Content reference | High | 3740 bytes; supersedes portfolio-repo-ready (3012 bytes) |
| `case-little-me.html` | HTML | P22 deep case (Little Me) | KEEP | Content reference | High | 8379 bytes; supersedes portfolio-repo-ready (7651 bytes) |
| `case-empacts.html` | HTML | P25 deep case (EMPACTS) | KEEP | Content reference | High | 8143 bytes; supersedes portfolio-repo-ready (7417 bytes) |
| `case-vinfast-kim-yoojung.html` | HTML | P28 deep case (VinFast × Kim Yoo-jung) | KEEP | New case not in portfolio-repo-ready | High | Only in github-baseline |
| `case-be-local.html` | HTML | P31 deep case (Be Local) | KEEP | Content reference for P31 (missing from Next.js) | High | 5177 bytes; supersedes portfolio-repo-ready (4393 bytes) |
| `images/` (34 files) | Images | Real project photography and evidence | KEEP | Move to `public/images/` in Phase 2 | High | Exact duplicates of portfolio-repo-ready images; see Section D |
| `content/qnh-case-study.md` | Markdown | Full rewrite copy for P01 case | KEEP | Move to `content-master/` in Phase 2 | High | Identical to portfolio-repo-ready copy |
| `content/empacts-public-copy-source.md` | Markdown | EMPACTS Facebook post public copy | KEEP | Move to `content-master/` in Phase 2 | High | Contains public EMPACTS social posts and contact info |
| `favicon.svg` | SVG | North Star favicon | DUPLICATE | Keep here; identical to `public/favicon.svg` | High | Same design; different file |
| `styles.css` | CSS | Full static site CSS (19,369 bytes) | KEEP | Content reference | High | More complete than portfolio-repo-ready styles.css (11,081 bytes) |
| `app.js` | JS | Minimal recruiter-path JS | KEEP | Content reference | High | Different from portfolio-repo-ready app.js |
| `README.md` | Docs | GitHub baseline README | KEEP | Move to `content-master/` in Phase 2 | High | Contains canonical featured-project order decisions |
| `MIGRATION_BASELINE.md` | Docs | Baseline decisions log | KEEP | Move to `content-master/` in Phase 2 | High | Documents P31 launch date, featured set decisions |
| `PUSH_TO_GITHUB.txt` | Docs | GitHub Pages deploy instructions | OBSOLETE | Archive | High | Operational note; not content |

### `felix-phan-portfolio-live-static-export/` — Crawled deployment snapshot

| Path | Status | Recommended action | Notes |
|------|--------|--------------------|-------|
| Entire directory | GENERATED | Keep as reference snapshot; do not edit | Reconstructed from live chatgpt.site crawl; not original source. 17 of 30 project pages fully recovered (`full: true` in manifest); 13 are partial |

### `portfolio-repo-ready/` — Earlier static HTML version (superseded)

| Path | Status | Recommended action | Notes |
|------|--------|--------------------|-------|
| `index.html` | OBSOLETE | Archive | Superseded by github-baseline/index.html (which has more content and the correct featured-6 set) |
| `case-*.html` (8 pages) | OBSOLETE | Archive | All superseded by larger github-baseline versions |
| `images/` (34 files) | DUPLICATE | Archive | Byte-for-byte identical to github-baseline images |
| `content/*.md` (2 files) | DUPLICATE | Archive | Byte-for-byte identical to github-baseline content |
| `styles.css` | OBSOLETE | Archive | 11,081 bytes vs 19,369 in github-baseline |
| `app.js` | OBSOLETE | Archive | Different from and older than github-baseline version |
| `README.md` | OBSOLETE | Archive | Superseded by github-baseline README |
| `PUSH_TO_GITHUB.txt` | OBSOLETE | Archive | Deploy instructions only |
| `.gitignore` | DUPLICATE | Archive | Identical content purpose; root .gitignore is canonical |

---

## C. Website versions

### Version 1 — Next.js / Vinext app (root `app/`)

| Attribute | Assessment |
|-----------|------------|
| Completeness | 30 projects (P01–P30); missing P31 |
| Content coverage | Full project data in data.ts; biographical copy in page components |
| Visual implementation | Dark wine/ivory theme; EB Garamond display + Montserrat body; North Star brand mark |
| Code quality | Clean component architecture; TypeScript; data-driven project pages |
| Maintainability | High — single `data.ts` drives all project pages dynamically |
| Responsiveness | CSS shows mobile breakpoints; mobile menu implemented |
| Accessibility | Skip link, ARIA labels, semantic HTML, `lang="en"` |
| Build status | Verified production build present in `dist/` |
| Deployment readiness | Deployed at `felix-phan-portfolio.anh022145.chatgpt.site/` |
| Unique features | Dynamic filterable work grid, data-driven case pages, Cloudflare Workers runtime |
| Missing assets | All project images are `MediaPlaceholder` — no real photographs loaded |
| Missing content | P31 Be Local not in data.ts |
| Missing content | CV URL not resolved (placeholder in contact page) |
| Missing content | Featured set on homepage (4 projects) differs from github-baseline decision (6 projects) |

### Version 2 — Static HTML github-baseline (`felix-portfolio-github-baseline-2026-08-07/`)

| Attribute | Assessment |
|-----------|------------|
| Completeness | 31 projects including P31 Be Local; 6 featured cases; 9 deep case pages |
| Content coverage | Full work index HTML; all inner pages; 34 real project images |
| Visual implementation | Same visual identity as the Next.js app (shared design language) |
| Code quality | Vanilla HTML/CSS/JS; readable but not component-based |
| Maintainability | Lower — content duplicated across HTML files; no data abstraction |
| Responsiveness | Mobile navigation implemented |
| Accessibility | Skip link present |
| Build status | No build step needed |
| Deployment readiness | Ready for GitHub Pages |
| Unique features | Recruiter entry-path URL states; 34 real images; P31 case study |
| Missing assets | No fonts self-hosted; uses Google Fonts CDN links |
| Missing content | Nothing vs. the portfolio scope |

### Version 3 — Live static export (`felix-phan-portfolio-live-static-export/`)

| Attribute | Assessment |
|-----------|------------|
| Completeness | 30 routes; 17 fully recovered project pages; 13 partial |
| Content coverage | Reconstruction only; not original source |
| Build status | Not buildable — static crawl output |
| Deployment readiness | Could be served statically but should not be used as source |
| Unique features | Most recent public snapshot of the deployed site |

### Version 4 — Portfolio repo-ready (`portfolio-repo-ready/`)

| Attribute | Assessment |
|-----------|------------|
| Completeness | Missing: about, contact, experience, interests, work inner pages |
| Content coverage | Less complete than github-baseline |
| Build status | No build step; but missing pages means it is not a complete website |
| Status | Superseded by github-baseline in every dimension |

### Recommendation

**Continue development with Version 1 (Next.js/Vinext app) as the canonical codebase.**

Move project assets from Version 2 (github-baseline `images/`) into `public/images/` in Phase 2. Extract P31 data from Version 2 and add it to `app/data.ts`. Use the deep case HTML pages from Version 2 as content reference when expanding the Next.js case pages.

---

## D. Duplicate-file analysis

### Group 1 — All 34 project images (exact duplicates)

`portfolio-repo-ready/images/` and `felix-portfolio-github-baseline-2026-08-07/images/` contain **34 files with identical MD5 hashes**. They are byte-for-byte identical.

| Canonical copy | Reason | Destination |
|----------------|--------|-------------|
| `felix-portfolio-github-baseline-2026-08-07/images/` | Unchanged; slightly later timestamp; associated with the more complete codebase | Move to `public/images/` in Phase 2 |
| `portfolio-repo-ready/images/` | Exact duplicate | Archive to `_archive_review/portfolio-repo-ready/images/` |

**Complete list of duplicated image files:**
p01-qnh.jpg, p02-credits.jpg, p02-summer.jpg, p05-buv.jpg, p13-chart.jpg, p13-maggi.jpg, p13-storyboard.png, p20-chart.jpg, p20-concept.jpg, p20-tres.jpg, p22-accept-differences.jpg, p22-booklet.jpg, p22-buddy.jpg, p22-calmjar.jpg, p22-core-memories.jpg, p22-draw.jpg, p22-floorplan.png, p22-little-me.jpg, p22-shower-thoughts.jpg, p25-empacts.jpg, p25-event.jpg, p25-felix.jpg, p25-vision-global.jpg, p25-vision-investment.jpg, p25-vision-market.jpg, p25-vision-resilience.jpg, p25-vision-tech.jpg, p28-vinfast.jpg, p31-be-local.png, p31-finance.png, p31-process.png, p31-risk.png, p31-schedule.png, p31-team.jpg

### Group 2 — Content markdown files (exact duplicates)

| File | Locations | Hash match |
|------|-----------|------------|
| `qnh-case-study.md` | `portfolio-repo-ready/content/` and `felix-portfolio-github-baseline-2026-08-07/content/` | Identical (MD5: 5583E4CED83DDF482120AA85609B83C2) |
| `empacts-public-copy-source.md` | `portfolio-repo-ready/content/` and `felix-portfolio-github-baseline-2026-08-07/content/` | Identical (MD5: BDD93A3F442FA5FBBCB07C8B0F7FD89E) |

**Canonical copy:** github-baseline version.  
**Archive:** portfolio-repo-ready version.

### Group 3 — favicon.svg (near-duplicate, different context)

| Location | Hash/Size | Notes |
|----------|-----------|-------|
| `public/favicon.svg` (266 bytes) | North Star polygon | Canonical — served by Next.js app |
| `felix-portfolio-github-baseline-2026-08-07/favicon.svg` (258 bytes) | North Star polygon | Slightly different file; used by static HTML version |

Both are similar North Star SVGs. The 8-byte difference may be whitespace or minor path variation. Neither should be deleted — they serve different deployments.

### Group 4 — `styles.css` (different versions, same-named file)

| Location | Size | Status |
|----------|------|--------|
| `portfolio-repo-ready/styles.css` | 11,081 bytes | OBSOLETE — older, smaller |
| `felix-portfolio-github-baseline-2026-08-07/styles.css` | 19,369 bytes | KEEP — more complete |
| `app/globals.css` | 25,531 bytes | CANONICAL — full Tailwind-based design system |

### Group 5 — `app.js` (different versions)

| Location | Size | Status |
|----------|------|--------|
| `portfolio-repo-ready/app.js` | 414 bytes | OBSOLETE |
| `felix-portfolio-github-baseline-2026-08-07/app.js` | 2,853 bytes | KEEP — has recruiter-path logic |

### Group 6 — Static HTML deep case pages (different sizes)

Every case page in `portfolio-repo-ready/` has a larger, more developed equivalent in `felix-portfolio-github-baseline-2026-08-07/`. No unique content is lost by archiving the portfolio-repo-ready versions; the github-baseline supersedes all of them.

| github-baseline | Bytes | portfolio-repo-ready | Bytes |
|----------------|-------|---------------------|-------|
| `case-qnh.html` | 4,878 | `case-qnh.html` | 4,152 |
| `case-summer.html` | 4,000 | `case-summer.html` | 3,272 |
| `case-buv.html` | 4,257 | `case-buv.html` | 3,529 |
| `case-maggi.html` | 3,814 | `case-maggi.html` | 3,086 |
| `case-tresemme.html` | 3,740 | `case-tresemme.html` | 3,012 |
| `case-little-me.html` | 8,379 | `case-little-me.html` | 7,651 |
| `case-empacts.html` | 8,143 | `case-empacts.html` | 7,417 |
| `case-be-local.html` | 5,177 | `case-be-local.html` | 4,393 |
| `case-vinfast-kim-yoojung.html` | 3,511 | *(missing)* | — |

---

## E. Overlapping-content analysis

### E1 — Profile / biography

| Topic | Source files | Shared content | Unique content | Conflicts | Recommended canonical source |
|-------|-------------|----------------|----------------|-----------|------------------------------|
| Professional name | app/about, app/site-shell, github-baseline/about.html | "Felix Phan" | Legal name "Nguyen Phan Thuc Huong" only in Next.js experience page | None | `app/about/page.tsx` + `app/site-shell.tsx` |
| Pronouns | app/site-shell.tsx footer, app/about/page.tsx | they/them | — | None | `app/site-shell.tsx` |
| Headline | All versions | "Creative Strategist & Storyteller" | — | None | Consistent |
| Bio short | All versions | "Felix moves meaningful ideas from insight, to story, to impact" | — | None | Consistent |
| Availability | All versions | "Full-time, Immediate" | — | None | Consistent |
| Graduation date | app/about/page.tsx | April 2027 | — | None | `app/about/page.tsx` |
| Base | All versions | Ho Chi Minh City | — | None | Consistent |
| Contact email | All versions | felixphan.contact@gmail.com | — | None | Consistent |
| LinkedIn | All versions | linkedin.com/in/felixphan | — | None | Consistent |
| Phone | app/contact/page.tsx | +84 936 647 704 | — | None | `app/contact/page.tsx` |

### E2 — Featured project selection (CONFLICT)

| Version | Featured projects | Count |
|---------|-----------------|-------|
| Next.js homepage (`app/page.tsx`) | P01, P05, P22, P13 (hardcoded) | 4 |
| `app/data.ts` `feature: true` flag | P01, P02, P05, P13, P20, P22, P25, P28 | 8 |
| github-baseline index.html + README | P22, P25, P31, P13, P20, P02 | 6 |
| `MIGRATION_BASELINE.md` decision | P22, P25, P31, P13, P20, P02 | 6 |

**Conflict:** The homepage hardcodes 4 featured projects that do not match the locked baseline decision of 6 (documented in `MIGRATION_BASELINE.md`). Additionally, the `feature: true` flag in `data.ts` is set on 8 projects, none of which fully matches either display surface. **Requires owner decision.**

### E3 — Project count (CONFLICT)

| Version | Count | Notes |
|---------|-------|-------|
| `app/data.ts` | 30 | P01–P30 |
| github-baseline README + index.html | 31 | P01–P31 |
| live static export manifest | 30 | P01–P30 |
| github-baseline MIGRATION_BASELINE.md | 31 | P31 Be Local added 7 Aug 2026 |

**Conflict:** P31 "Be Local" (project management capstone, October 2025 launch) exists in the static HTML baseline but is absent from `app/data.ts`. It is referenced in multiple github-baseline case pages and images. **Safe to add to data.ts in Phase 2.**

### E4 — Experience / employment history

| Topic | Source files | Shared content | Unique content | Conflicts | Recommended canonical source |
|-------|-------------|----------------|----------------|-----------|------------------------------|
| MBE internship | app/experience, github-baseline/experience.html | Feb–May 2026, 7 events, SOP/checklist systems | — | None | `app/experience/page.tsx` |
| EMPACTS founding | app/experience, github-baseline/experience.html | May–Dec 2024, 6 departments | Next.js says "six departments and built its public architecture, operating logic and leadership handover" | None detected | `app/experience/page.tsx` |
| ForArt internship | app/experience, github-baseline/experience.html | Mar–Jul 2024, 6 campaigns | — | None | `app/experience/page.tsx` |
| RMIT IEC role | app/experience, github-baseline/experience.html | Sep 2023–Jun 2024 | — | None | `app/experience/page.tsx` |
| RMIT Student Council | app/experience, github-baseline/experience.html | Oct 2022–Jun 2024, multiple roles | — | None | `app/experience/page.tsx` |
| Education | app/experience | NEU + RMIT, 2022–April 2027 | — | None | `app/experience/page.tsx` |
| Microsoft Specialist credentials | app/experience | MOS 2020–2022, National Consolation Prize 2022 | Legal name note: "Nguyen Phan Thuc Huong" | — | `app/experience/page.tsx` |

### E5 — Project descriptions (30 shared projects)

All 30 projects from P01–P30 have data in `app/data.ts`. The github-baseline HTML versions contain the same project titles, challenges, and types but with more narrative detail in the deep-case HTML pages (case-*.html) that is not yet in data.ts.

**Key unique content in github-baseline case pages not in app/data.ts:**
- P01 (qnh): Full 13-section Vietnamese-language treatment in `content/qnh-case-study.md`
- P22 (Little Me): Detailed floor plan, event operations, fundraising specifics in case-little-me.html
- P25 (EMPACTS): Full organizational copy and vision posts in `content/empacts-public-copy-source.md`
- P28 (VinFast × Kim Yoo-jung): Deep case page in github-baseline (case-vinfast-kim-yoojung.html)
- P31 (Be Local): Full case page + 5 project images in github-baseline — **not present in Next.js at all**

### E6 — P31 Be Local (UNIQUE CONTENT — NOT IN NEXT.JS)

From github-baseline's `MIGRATION_BASELINE.md`:
- Official launch date: 4 October 2025
- Category: Project management capstone
- Featured: Yes (in the github-baseline featured-6 set)
- Images: p31-be-local.png, p31-finance.png, p31-process.png, p31-risk.png, p31-schedule.png, p31-team.jpg

**Action required in Phase 2:** Add P31 to `app/data.ts` and move images to `public/images/`.

### E7 — Operating method (cosmetic paraphrase)

| Version | Wording | Notes |
|---------|---------|-------|
| Next.js homepage | "Make it real — Write, coordinate, produce and protect the idea across the work." | |
| github-baseline | "Make it real — Write, coordinate, produce and protect the idea across delivery." | One word difference ("work" vs "delivery") |
| All versions | Steps 01–04 match | No factual conflict |

**Action:** Minor wording difference, no factual conflict. Keep Next.js version as canonical. Owner may choose preferred wording.

---

## F. Asset usage analysis

### Project images (34 files)

| Image | Related project | Referenced in | Current Next.js usage | Quality/format | Notes |
|-------|----------------|--------------|----------------------|----------------|-------|
| p01-qnh.jpg | P01 | github-baseline: case-qnh.html, work.html | Not loaded (MediaPlaceholder) | JPEG, 281KB | Ready to add to Next.js |
| p02-credits.jpg | P02 supporting | github-baseline: case-summer.html | Not loaded | JPEG, 52KB | Supporting image for P02 |
| p02-summer.jpg | P02 | github-baseline: case-summer.html, index.html, work.html | Not loaded | JPEG, 45KB | Cover for P02 |
| p05-buv.jpg | P05 | github-baseline: case-buv.html, work.html | Not loaded | JPEG, 36KB | |
| p13-chart.jpg | P13 | github-baseline: case-maggi.html | Not loaded | JPEG, 28KB | Evidence chart |
| p13-maggi.jpg | P13 | github-baseline: case-maggi.html, work.html | Not loaded | JPEG, 73KB | Cover for P13 |
| p13-storyboard.png | P13 | github-baseline: case-maggi.html | Not loaded | PNG, 1.42MB | Large — may need optimisation for web |
| p20-chart.jpg | P20 | github-baseline: case-tresemme.html | Not loaded | JPEG, 27KB | Evidence chart |
| p20-concept.jpg | P20 | github-baseline: case-tresemme.html | Not loaded | JPEG, 233KB | |
| p20-tres.jpg | P20 | github-baseline: case-tresemme.html, work.html | Not loaded | JPEG, 258KB | Cover for P20 |
| p22-accept-differences.jpg | P22 | github-baseline: case-little-me.html | Not loaded | JPEG, 292KB | |
| p22-booklet.jpg | P22 | github-baseline: case-little-me.html | Not loaded | JPEG, 201KB | |
| p22-buddy.jpg | P22 | github-baseline: case-little-me.html | Not loaded | JPEG, 233KB | |
| p22-calmjar.jpg | P22 | github-baseline: case-little-me.html | Not loaded | JPEG, 232KB | |
| p22-core-memories.jpg | P22 | github-baseline: case-little-me.html | Not loaded | JPEG, 149KB | |
| p22-draw.jpg | P22 | github-baseline: case-little-me.html | Not loaded | JPEG, 196KB | |
| p22-floorplan.png | P22 | github-baseline: case-little-me.html | Not loaded | PNG, 346KB | Floor plan evidence |
| p22-little-me.jpg | P22 | github-baseline: case-little-me.html, index.html, work.html | Not loaded | JPEG, 84KB | Cover for P22 |
| p22-shower-thoughts.jpg | P22 | github-baseline: case-little-me.html | Not loaded | JPEG, 124KB | |
| p25-empacts.jpg | P25 | github-baseline: case-empacts.html, index.html, work.html | Not loaded | JPEG, 50KB | Cover for P25 |
| p25-event.jpg | P25 | github-baseline: case-empacts.html | Not loaded | JPEG, 104KB | |
| p25-felix.jpg | P25 | github-baseline: case-empacts.html | Not loaded | JPEG, 104KB | |
| p25-vision-global.jpg | P25 | github-baseline: case-empacts.html | Not loaded | JPEG, 139KB | Vision image |
| p25-vision-investment.jpg | P25 | github-baseline: case-empacts.html | Not loaded | JPEG, 124KB | |
| p25-vision-market.jpg | P25 | github-baseline: case-empacts.html | Not loaded | JPEG, 111KB | |
| p25-vision-resilience.jpg | P25 | github-baseline: case-empacts.html | Not loaded | JPEG, 173KB | |
| p25-vision-tech.jpg | P25 | github-baseline: case-empacts.html | Not loaded | JPEG, 172KB | |
| p28-vinfast.jpg | P28 | github-baseline: case-vinfast-kim-yoojung.html, work.html | Not loaded | JPEG, 48KB | Cover for P28 |
| p31-be-local.png | P31 | github-baseline: case-be-local.html, index.html, work.html | Not in Next.js | PNG, 4.34MB | **Largest asset — may need web optimisation** |
| p31-finance.png | P31 | github-baseline: case-be-local.html | Not in Next.js | PNG, 590KB | |
| p31-process.png | P31 | github-baseline: case-be-local.html | Not in Next.js | PNG, 766KB | |
| p31-risk.png | P31 | github-baseline: case-be-local.html | Not in Next.js | PNG, 648KB | |
| p31-schedule.png | P31 | github-baseline: case-be-local.html | Not in Next.js | PNG, 513KB | |
| p31-team.jpg | P31 | github-baseline: case-be-local.html | Not in Next.js | JPEG, 164KB | |

**Note:** p31-be-local.png is 4.34 MB. While it should be preserved as an original, a web-optimised version may be needed. **Do not discard the original.**

### Public assets

| Asset | Referenced | Notes |
|-------|-----------|-------|
| `public/fonts/EBGaramond-Variable.ttf` | `app/globals.css` | Required |
| `public/fonts/Montserrat-Variable.ttf` | `app/globals.css` | Required |
| `public/favicon.svg` | `app/layout.tsx` | Required |
| `public/file.svg` | Not referenced | Next.js starter default; archive |
| `public/globe.svg` | Not referenced | Next.js starter default; archive |
| `public/window.svg` | Not referenced | Next.js starter default; archive |

---

## G. Risk and ambiguity register

### Safe to automate

| Decision | File(s) | Notes |
|----------|---------|-------|
| Archive `portfolio-repo-ready/images/` | 34 files | Byte-for-bit identical to github-baseline |
| Archive `portfolio-repo-ready/content/*.md` | 2 files | Byte-for-bit identical to github-baseline |
| Archive `portfolio-repo-ready/styles.css`, `app.js` | 2 files | Superseded |
| Archive `portfolio-repo-ready/index.html`, `case-*.html` | 9 files | Superseded by larger github-baseline versions |
| Archive `examples/d1/` | 2 files | Vinext starter boilerplate |
| Archive `public/file.svg`, `globe.svg`, `window.svg` | 3 files | Unused Next.js defaults |

### Automatable with caution

| Decision | File(s) | Notes |
|----------|---------|-------|
| Add P31 to `app/data.ts` | `app/data.ts` | Content is in github-baseline; owner should verify Be Local data fields before merging |
| Move github-baseline images to `public/images/` | 34 files | Safe once owner confirms the image set is complete and approved for publication |
| Replace `README.md` with portfolio README | `README.md` | Current is generic starter template; safe to replace |
| Archive `portfolio-repo-ready/` entirely | Directory | All content superseded; safe after verification |

### Requires owner decision

| Decision | Details | Reason |
|----------|---------|--------|
| **Featured project set** | Next.js homepage shows 4 (P01, P05, P22, P13); `data.ts` marks 8 as `feature: true`; github-baseline has 6 (P22, P25, P31, P13, P20, P02); `MIGRATION_BASELINE.md` locked 6 | Three different answers exist; locked decision in MIGRATION_BASELINE is P22, P25, P31, P13, P20, P02 — but this contradicts the Next.js homepage and data.ts flags |
| **CV URL** | Contact page has placeholder `<div id="cv">` | Owner needs to add the final CV URL or upload a PDF |
| **P31 Be Local data** | Be Local exists fully in github-baseline but needs a data.ts entry | Owner should verify: project ID, slug, year (2025), publicType, role, all narrative fields |
| **Google Fonts CDN vs. self-hosted fonts** | github-baseline uses Google Fonts CDN; Next.js uses self-hosted fonts | Self-hosted is already in place; confirm this is the preferred approach for all deployments |
| **p31-be-local.png optimisation** | 4.34 MB PNG — large for web | Owner to decide whether to create an optimised version or use as-is |
| **Image naming convention** | Current names (p01-qnh.jpg) use project number prefixes | Consider whether to keep this system or adopt the Next.js `assetFilename` naming convention from data.ts |
| **EMPACTS contact info in markdown** | `empacts-public-copy-source.md` contains phone 0914-378-064 and email contact@empacts.org | These are EMPACTS organisation contacts (not Felix's personal details), sourced from public Facebook posts — confirm whether they should be published in a public repository |
| **`app/chatgpt-auth.ts`** | ChatGPT authentication boilerplate — not used by any portfolio page | Safe to archive, but confirm portfolio will never need authenticated pages |
| **`db/` and `drizzle/`** | Empty schema; D1 binding is null | Confirm whether database support will be needed, or archive these |
| **Static HTML future** | github-baseline is a deployable GitHub Pages site in parallel to the Next.js app | Confirm whether both deployments are intended or whether github-baseline is just a backup |

---

## Phase 1 summary

### Proposed canonical codebase

**The Next.js / Vinext app** (`app/` + root config files) is the canonical working version. It is the most recently developed, has a build system, and is the source of the live deployment.

### Proposed folder structure (Phase 2 target)

```
D:\felix-phan-portfolio-wip\
├── AUDIT_REPORT.md
├── CLEANUP_LOG.md
├── README.md               (replace: portfolio-specific)
├── package.json
├── package-lock.json
├── [all root config files]
│
├── app/                    (unchanged Next.js source)
│   ├── data.ts             (add P31)
│   └── [all existing pages]
│
├── public/
│   ├── fonts/              (existing)
│   ├── favicon.svg         (existing)
│   ├── images/             (NEW — move from github-baseline/images/)
│   │   ├── p01-qnh.jpg
│   │   ├── p02-summer.jpg
│   │   └── [all 34 images]
│   └── [remove 3 unused Next.js SVGs → archive]
│
├── content-master/
│   ├── PROFILE_MASTER.md   (NEW)
│   ├── EXPERIENCE_MASTER.md (NEW)
│   ├── PROJECT_INDEX.md    (NEW)
│   ├── ASSET_INDEX.md      (NEW)
│   └── projects/
│       ├── qnh-case-study.md          (from github-baseline/content/)
│       └── empacts-public-copy-source.md (from github-baseline/content/)
│
├── source-materials/
│   └── felix-portfolio-github-baseline-2026-08-07/  (keep all; reference only)
│
├── _archive_review/
│   ├── ARCHIVE_MANIFEST.md
│   ├── portfolio-repo-ready/           (entire directory)
│   ├── felix-phan-portfolio-live-static-export/
│   ├── examples/                       (Vinext D1 boilerplate)
│   └── public-unused-svgs/             (file.svg, globe.svg, window.svg)
│
├── dist/                   (generated; keep)
├── build/, scripts/, tests/, worker/, db/, drizzle/  (keep)
└── [framework config files]
```

### Proposed consolidation plan

1. Add P31 "Be Local" to `app/data.ts` (extract from github-baseline HTML + images)
2. Move 34 images from `felix-portfolio-github-baseline-2026-08-07/images/` to `public/images/`
3. Update `MediaPlaceholder` usages in Next.js pages to use real `<img>` tags once assets are in place
4. Move `content/` markdown files to `content-master/projects/`
5. Create `PROFILE_MASTER.md`, `EXPERIENCE_MASTER.md`, `PROJECT_INDEX.md`, `ASSET_INDEX.md`
6. Move `portfolio-repo-ready/` and `felix-phan-portfolio-live-static-export/` to `_archive_review/`
7. Move `examples/d1/` to `_archive_review/`
8. Move `public/file.svg`, `globe.svg`, `window.svg` to `_archive_review/`
9. Move `felix-portfolio-github-baseline-2026-08-07/` to `source-materials/`
10. Replace `README.md` with portfolio-specific documentation
11. Create `CLEANUP_LOG.md`

### Files proposed for archival

| File / directory | Reason |
|-----------------|--------|
| `portfolio-repo-ready/` (entire) | Superseded by github-baseline in all dimensions; all content duplicated |
| `felix-phan-portfolio-live-static-export/` (entire) | Generated crawl; not original source; content already in data.ts |
| `examples/d1/` | Vinext starter boilerplate; not portfolio content |
| `public/file.svg`, `globe.svg`, `window.svg` | Unused Next.js starter defaults |
| `README.md` (current) | Generic Vinext-starter README; not portfolio-specific |

### Unresolved conflicts

1. **Featured project set** — three different answers (4/6/8); needs owner decision
2. **P31 data fields** — needs owner to verify before adding to data.ts
3. **CV URL** — placeholder; needs owner to supply
4. **Image naming strategy** — current `pNN-name.jpg` vs. data.ts `assetFilename` convention
5. **Static HTML parallel deployment** — is github-baseline intended as a live second site?
6. **EMPACTS contact info publication** — confirm whether it belongs in a public repository
7. **p31-be-local.png size** — 4.34 MB; confirm whether to optimise

---

## Approval checklist (numbered for your response)

Before Phase 2 begins, please confirm or redirect each item:

1. **Confirm canonical codebase:** The Next.js / Vinext app (`app/`) is the primary development target. *(Yes / No / Redirect)*

2. **Confirm P31 addition:** Add P31 "Be Local" to `app/data.ts` using data extracted from `felix-portfolio-github-baseline-2026-08-07/case-be-local.html`. *(Yes / No / Provide data directly)*

3. **Confirm featured project set:** The homepage should show six featured cases: P22, P25, P31, P13, P20, P02 (as per `MIGRATION_BASELINE.md`). *(Yes / No / Different set)*

4. **Confirm image migration:** Move all 34 images from github-baseline to `public/images/` in the Next.js app. *(Yes / No)*

5. **Confirm `portfolio-repo-ready/` archival:** This directory is fully superseded. Move to `_archive_review/`. *(Yes / No)*

6. **Confirm static export archival:** `felix-phan-portfolio-live-static-export/` is a generated crawl. Move to `_archive_review/`. *(Yes / No)*

7. **Confirm `examples/d1/` archival:** Vinext starter boilerplate. Move to `_archive_review/`. *(Yes / No)*

8. **Confirm github-baseline destination:** Move `felix-portfolio-github-baseline-2026-08-07/` to `source-materials/` (not deleted). *(Yes / No / Keep in root)*

9. **Static HTML parallel deployment:** Should `felix-portfolio-github-baseline-2026-08-07/` remain a deployable GitHub Pages site, or is it purely a content reference? *(Deployable backup / Reference only)*

10. **CV URL:** Do you have a final CV URL or PDF to add to the contact page now? *(Supply URL / Skip for now)*

11. **Featured `feature` flag in data.ts:** 8 projects are currently marked `feature: true`. Should this be reduced to match the 6 featured on the homepage (P22, P25, P31, P13, P20, P02)? *(Yes, reduce to 6 / Keep 8 / Other)*

12. **EMPACTS contact info:** The markdown file `empacts-public-copy-source.md` contains the EMPACTS organisation phone and email. Is this safe to commit to a public repository? *(Yes, it is public-sourced / No, redact it)*

13. **p31-be-local.png:** At 4.34 MB, should a web-optimised copy be created alongside the original, or use as-is? *(Create optimised copy / Use as-is)*

---

*End of Phase 1 Audit Report. No files have been moved, renamed, deleted, or overwritten.*

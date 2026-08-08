# CLEANUP LOG
**Phase 2 executed:** 2026-08-09  
**Executed by:** Claude Code (claude-sonnet-4-6)  
**Working directory:** `D:\felix-phan-portfolio-wip`

All changes listed here are traceable and reversible. Archived items are in `_archive_review/`. Source reference materials are in `source-materials/`.

---

## Directories created

| Directory | Purpose |
|-----------|---------|
| `_archive_review/` | Holding area for superseded files (not deleted) |
| `_archive_review/public-unused-svgs/` | Unused Next.js default SVGs |
| `source-materials/` | Reference copies of earlier versions |
| `public/images/` | Real project images (migrated from github-baseline) |
| `content-master/` | Human-editable canonical content files |
| `content-master/projects/` | Long-form project source documents |

---

## Files moved to `_archive_review/`

| Original path | Archived path | Reason |
|--------------|---------------|--------|
| `portfolio-repo-ready/` (entire directory) | `_archive_review/portfolio-repo-ready/` | Fully superseded by github-baseline |
| `felix-phan-portfolio-live-static-export/` (entire) | `_archive_review/felix-phan-portfolio-live-static-export/` | Generated crawl; not original source |
| `examples/` (entire) | `_archive_review/examples/` | Vinext starter boilerplate |
| `public/file.svg` | `_archive_review/public-unused-svgs/file.svg` | Unused Next.js default |
| `public/globe.svg` | `_archive_review/public-unused-svgs/globe.svg` | Unused Next.js default |
| `public/window.svg` | `_archive_review/public-unused-svgs/window.svg` | Unused Next.js default |
| `README.md` (Vinext starter) | `_archive_review/README-vinext-starter-original.md` | Replaced by portfolio-specific README |

---

## Files moved to `source-materials/`

| Original path | New path |
|--------------|----------|
| `felix-portfolio-github-baseline-2026-08-07/` (entire) | `source-materials/felix-portfolio-github-baseline-2026-08-07/` |

---

## Files copied to `public/images/`

All 34 images copied from `source-materials/felix-portfolio-github-baseline-2026-08-07/images/`.  
All 34 are byte-for-bit identical to the archived `portfolio-repo-ready/images/` copies.

| Filename | Project | Format | Size |
|----------|---------|--------|------|
| p01-qnh.jpg | P01 | JPEG | 281 KB |
| p02-credits.jpg | P02 | JPEG | 52 KB |
| p02-summer.jpg | P02 | JPEG | 45 KB |
| p05-buv.jpg | P05 | JPEG | 36 KB |
| p13-chart.jpg | P13 | JPEG | 28 KB |
| p13-maggi.jpg | P13 | JPEG | 73 KB |
| p13-storyboard.png | P13 | PNG | 1,422 KB |
| p20-chart.jpg | P20 | JPEG | 27 KB |
| p20-concept.jpg | P20 | JPEG | 233 KB |
| p20-tres.jpg | P20 | JPEG | 258 KB |
| p22-accept-differences.jpg | P22 | JPEG | 292 KB |
| p22-booklet.jpg | P22 | JPEG | 201 KB |
| p22-buddy.jpg | P22 | JPEG | 233 KB |
| p22-calmjar.jpg | P22 | JPEG | 232 KB |
| p22-core-memories.jpg | P22 | JPEG | 149 KB |
| p22-draw.jpg | P22 | JPEG | 196 KB |
| p22-floorplan.png | P22 | PNG | 346 KB |
| p22-little-me.jpg | P22 | JPEG | 84 KB |
| p22-shower-thoughts.jpg | P22 | JPEG | 124 KB |
| p25-empacts.jpg | P25 | JPEG | 50 KB |
| p25-event.jpg | P25 | JPEG | 104 KB |
| p25-felix.jpg | P25 | JPEG | 104 KB |
| p25-vision-global.jpg | P25 | JPEG | 139 KB |
| p25-vision-investment.jpg | P25 | JPEG | 124 KB |
| p25-vision-market.jpg | P25 | JPEG | 111 KB |
| p25-vision-resilience.jpg | P25 | JPEG | 173 KB |
| p25-vision-tech.jpg | P25 | JPEG | 172 KB |
| p28-vinfast.jpg | P28 | JPEG | 48 KB |
| p31-be-local.png | P31 | PNG | 4,242 KB |
| p31-finance.png | P31 | PNG | 590 KB |
| p31-process.png | P31 | PNG | 766 KB |
| p31-risk.png | P31 | PNG | 648 KB |
| p31-schedule.png | P31 | PNG | 513 KB |
| p31-team.jpg | P31 | JPEG | 164 KB |

---

## Files created

| Path | Purpose |
|------|---------|
| `public/images/p31-be-local-web.jpg` | Web-optimised JPEG copy of p31-be-local.png (4,242 KB → ~379 KB, 82% JPEG quality, .NET System.Drawing) |
| `content-master/PROFILE_MASTER.md` | Canonical profile, biography, contact, education, credentials |
| `content-master/EXPERIENCE_MASTER.md` | Canonical employment history and education |
| `content-master/PROJECT_INDEX.md` | Master index of all 31 projects |
| `content-master/ASSET_INDEX.md` | Master index of all images, fonts, and icons |
| `content-master/projects/qnh-case-study.md` | P01 full case study copy (copied from github-baseline/content/) |
| `content-master/projects/empacts-public-copy-source.md` | P25 EMPACTS public social copy (copied from github-baseline/content/) |
| `README.md` | New portfolio-specific README (replaces Vinext starter template) |
| `CLEANUP_LOG.md` | This file |
| `_archive_review/ARCHIVE_MANIFEST.md` | Manifest of all archived items |

---

## Code changes

### `app/data.ts`

| Change | Detail |
|--------|--------|
| P01 `feature` flag | `true` → `false` (not in locked featured-6 set) |
| P05 `feature` flag | `true` → `false` (not in locked featured-6 set) |
| P28 `feature` flag | `true` → `false` (not in locked featured-6 set) |
| P31 added | New project object appended after P30 (full record derived from github-baseline/case-be-local.html and MIGRATION_BASELINE.md) |

After these changes: 31 total projects, 6 with `feature: true` (P02, P13, P20, P22, P25, P31).

### `app/page.tsx`

| Change | Detail |
|--------|--------|
| `featured` array | Replaced 4-item hardcoded array (P01, P05, P22, P13) with 6-item array matching locked baseline (P22, P25, P31, P13, P20, P02) |
| Proof-band stat | Changed hardcoded `6` for "ForArt campaigns" → `{featured.length}` for "featured cases" |
| Section heading | "Four ways the method shows up." → "Six ways the method shows up." |

---

## Content merges

| Content cluster | Action |
|----------------|--------|
| P01 QNH case study copy | Copied from github-baseline/content/qnh-case-study.md to content-master/projects/; no editing done |
| P25 EMPACTS public copy | Copied from github-baseline/content/empacts-public-copy-source.md to content-master/projects/; no editing done |
| Biography and capability map | Extracted from app/about/page.tsx into PROFILE_MASTER.md |
| Experience history | Extracted from app/experience/page.tsx into EXPERIENCE_MASTER.md |
| All 31 project records | Indexed in PROJECT_INDEX.md; source of truth remains app/data.ts |
| All 35 assets | Indexed in ASSET_INDEX.md |

---

## Unresolved conflicts (require future owner decision)

| Issue | Detail |
|-------|--------|
| CV URL | Contact page still shows a placeholder div. Felix will supply the final URL. |
| MediaPlaceholder → real images | All 34 images are now in `public/images/` but the Next.js app still uses MediaPlaceholder components. Image wiring is not done in this cleanup to avoid regressions until Felix reviews image placement. |
| p13-storyboard.png | 1.42 MB PNG. May benefit from a web-optimised copy (same as done for p31-be-local.png). |
| P31 proofLinks Canva embed URL | Canva embed URL included in data.ts. Confirm this is intended to be public. |

---

## Impact on website output

| Aspect | Before | After |
|--------|--------|-------|
| Project count | 30 (data.ts) | 31 (data.ts) |
| Featured on homepage | 4 projects (P01, P05, P22, P13) | 6 projects (P22, P25, P31, P13, P20, P02) |
| Proof-band "featured" stat | Hardcoded "6 ForArt campaigns" | Dynamic `{featured.length}` = 6 featured cases |
| Homepage section heading | "Four ways the method shows up." | "Six ways the method shows up." |
| Real images in Next.js | 0 (all placeholder) | 0 still (images in public/images/, not yet wired) |

---

## What has NOT changed

- All existing app/ page components, styles, and logic are unchanged except as noted above
- The design system (globals.css) is untouched
- All font files are untouched
- The dist/ production build is the same as before (needs rebuilding to reflect data.ts changes)
- The .openai/hosting.json, package.json, and all config files are untouched
- The github-baseline static HTML site is intact in source-materials/

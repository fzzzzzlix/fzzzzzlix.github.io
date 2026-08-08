# ARCHIVE MANIFEST
**Created:** 2026-08-09  
**Phase:** 2 — Controlled consolidation  
**Rule:** Nothing in this directory is permanently deleted until explicitly approved by Felix Phan.

---

| Original path | Archived path | Reason | Canonical replacement | Unique content preserved? | Safe to delete later? |
|--------------|---------------|--------|-----------------------|--------------------------|----------------------|
| `portfolio-repo-ready/images/` (34 files) | `_archive_review/portfolio-repo-ready/images/` | Byte-for-bit identical to github-baseline images | `public/images/` (34 files now there) | Yes — all moved to public/images | Yes |
| `portfolio-repo-ready/content/qnh-case-study.md` | `_archive_review/portfolio-repo-ready/content/` | Byte-for-bit identical to github-baseline version | `content-master/projects/qnh-case-study.md` | Yes — copy exists in content-master | Yes |
| `portfolio-repo-ready/content/empacts-public-copy-source.md` | `_archive_review/portfolio-repo-ready/content/` | Byte-for-bit identical to github-baseline version | `content-master/projects/empacts-public-copy-source.md` | Yes — copy exists in content-master | Yes |
| `portfolio-repo-ready/styles.css` | `_archive_review/portfolio-repo-ready/` | Superseded — 11,081 bytes vs 19,369 in github-baseline | `source-materials/.../styles.css` | No unique content | Yes |
| `portfolio-repo-ready/app.js` | `_archive_review/portfolio-repo-ready/` | Superseded — 414 bytes vs 2,853 in github-baseline | `source-materials/.../app.js` | No unique content | Yes |
| `portfolio-repo-ready/index.html` | `_archive_review/portfolio-repo-ready/` | Superseded by github-baseline index.html (more content, correct featured-6 set) | `source-materials/.../index.html` | No unique content | Yes |
| `portfolio-repo-ready/case-qnh.html` | `_archive_review/portfolio-repo-ready/` | Superseded — 4,152 bytes vs 4,878 in github-baseline | `source-materials/.../case-qnh.html` | No unique content | Yes |
| `portfolio-repo-ready/case-summer.html` | `_archive_review/portfolio-repo-ready/` | Superseded — 3,272 bytes vs 4,000 in github-baseline | `source-materials/.../case-summer.html` | No unique content | Yes |
| `portfolio-repo-ready/case-buv.html` | `_archive_review/portfolio-repo-ready/` | Superseded — 3,529 bytes vs 4,257 in github-baseline | `source-materials/.../case-buv.html` | No unique content | Yes |
| `portfolio-repo-ready/case-maggi.html` | `_archive_review/portfolio-repo-ready/` | Superseded — 3,086 bytes vs 3,814 in github-baseline | `source-materials/.../case-maggi.html` | No unique content | Yes |
| `portfolio-repo-ready/case-tresemme.html` | `_archive_review/portfolio-repo-ready/` | Superseded — 3,012 bytes vs 3,740 in github-baseline | `source-materials/.../case-tresemme.html` | No unique content | Yes |
| `portfolio-repo-ready/case-little-me.html` | `_archive_review/portfolio-repo-ready/` | Superseded — 7,651 bytes vs 8,379 in github-baseline | `source-materials/.../case-little-me.html` | No unique content | Yes |
| `portfolio-repo-ready/case-empacts.html` | `_archive_review/portfolio-repo-ready/` | Superseded — 7,417 bytes vs 8,143 in github-baseline | `source-materials/.../case-empacts.html` | No unique content | Yes |
| `portfolio-repo-ready/case-be-local.html` | `_archive_review/portfolio-repo-ready/` | Superseded — 4,393 bytes vs 5,177 in github-baseline | `source-materials/.../case-be-local.html` | No unique content | Yes |
| `portfolio-repo-ready/README.md` | `_archive_review/portfolio-repo-ready/` | Superseded | `README.md` (new portfolio README) | No unique content | Yes |
| `portfolio-repo-ready/PUSH_TO_GITHUB.txt` | `_archive_review/portfolio-repo-ready/` | Operational note only | — | No | Yes |
| `portfolio-repo-ready/.gitignore` | `_archive_review/portfolio-repo-ready/` | Superseded by root .gitignore | Root `.gitignore` | No unique content | Yes |
| `felix-phan-portfolio-live-static-export/` (entire) | `_archive_review/felix-phan-portfolio-live-static-export/` | Generated crawl reconstruction of the live site; not original source. All content is in app/data.ts | `app/data.ts` | Partial (17/30 fully recovered); all project data preserved in data.ts | Yes |
| `examples/d1/` (entire) | `_archive_review/examples/` | Vinext starter boilerplate; not portfolio content | — | No unique content | Yes |
| `public/file.svg` | `_archive_review/public-unused-svgs/` | Next.js starter default; not referenced in any portfolio page | — | No | Yes |
| `public/globe.svg` | `_archive_review/public-unused-svgs/` | Next.js starter default; not referenced in any portfolio page | — | No | Yes |
| `public/window.svg` | `_archive_review/public-unused-svgs/` | Next.js starter default; not referenced in any portfolio page | — | No | Yes |
| `README.md` (original) | `_archive_review/README-vinext-starter-original.md` | Generic Vinext-starter README; not portfolio-specific | `README.md` (new portfolio README) | Framework documentation only | Yes |

---

## Items not archived

The following files were retained in place and are NOT archived:

- `felix-portfolio-github-baseline-2026-08-07/` → moved to `source-materials/` (reference, not archive)
- All files in `app/`, `public/`, `build/`, `scripts/`, `tests/`, `worker/`, `db/`, `drizzle/` — canonical or active
- `dist/` — generated build output; kept in place

---

## Final deletion proposal

The following archived items appear safe for permanent deletion when Felix is ready:

1. `_archive_review/portfolio-repo-ready/` — all content superseded, all unique content preserved elsewhere
2. `_archive_review/felix-phan-portfolio-live-static-export/` — generated crawl; content in data.ts
3. `_archive_review/examples/` — framework boilerplate
4. `_archive_review/public-unused-svgs/` — Next.js starter defaults, not used
5. `_archive_review/README-vinext-starter-original.md` — replaced

**Do not delete until Felix confirms.** This manifest is the authority on what was removed and why.

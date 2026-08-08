# Felix Phan Portfolio 2026 — GitHub baseline

This package merges the stronger case-study content and real assets from the uploaded upgrade with the broader multi-page architecture of the current live portfolio.

## Locked baseline decisions

- 31 project records.
- Exactly 6 portfolio-wide featured cases, in this order:
  1. P22 — Little Me
  2. P25 — EMPACTS
  3. P31 — Be Local
  4. P13 — MAGGI Recipe Solution
  5. P20 — TRESemmé
  6. P02 — Mùa Hạ Của Chúng Tôi
- Featured cases are shown first; all 31 project records follow.
- P01, P05 and P28 retain detailed local case pages but are not in the default featured-six set.
- P31 Be Local official launch date in the project plan is 4 October 2025.
- P22 short-form reach is standardized to 34.5K; the detailed case retains the exact 34,588 figure.

## Recruiter states

These are actual URL states that reorder the complete project inventory:

- `work.html?focus=creative-scriptwriting`
- `work.html?focus=strategic-planning`
- `work.html?focus=communication-sustainability`
- `work.html?focus=project-management`
- `work.html?focus=communication-events`
- `work.html?focus=content-roles`

The state changes reading order and recommendation emphasis only. It does not change project facts.

## Site architecture

- `index.html`
- `work.html`
- `about.html`
- `experience.html`
- `interests.html`
- `contact.html`
- deep case pages for P01, P02, P05, P13, P20, P22, P25, P28 and P31
- complete 31-project catalogue on `work.html`

## Preview locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deploy with GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save.

No build step is required.

## Before final public launch

- Add the final CV URL or CV PDF.
- Continue evidence verification for quantified claims.
- Expand supporting capsule records into local case pages only when evidence is sufficient.
- Use real project evidence rather than decorative stock imagery.

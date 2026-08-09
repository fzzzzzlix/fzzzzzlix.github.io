# Featured Cases, Long-form Source & Claim Record (2026-08-09)

Implementation source-of-truth for the six bespoke feature cases built from the
`felix_featured_cases_claude_handoff_master` pack. Records the verified facts,
the evidence-firewall decisions actually applied on the live pages, and the
asset/embed mapping. Confidential and omitted material is noted but **not**
reproduced here. Components live at `app/work/[slug]/*-case.tsx`, dispatched from
`app/work/[slug]/page.tsx` via a bespoke-case map; shared UI is in
`feature-case-primitives.tsx`.

---

## P02, Mùa Hạ Của Chúng Tôi (`mua-ha-cua-chung-toi`)

- **Public type:** Produced short film (2022).
- **Role (corrected):** Writer; co-director and co-editor; team lead. Credits list Felix as **sole script writer**, with direction and editing **shared** across the team. Do not write "sole director/editor".
- **Outcome:** First Prize for audience engagement at the **Yên Hòa** graduation-season showcase, awarded to the **class collective D5 K60**, not an individual award.
- **Embeds/links:** Facebook film via plugin embed (`plugins/video.php`, no autoplay) with direct-URL fallback; English-subtitled Drive version; original script (Drive).
- **Assets:** `cases/p02/p02-script-cover.png` (contain), `p02-credits.jpg`, `p02-award.jpg`.

## P13, MAGGI Recipe Solution (`maggi-recipe-solution`)

- **Public type (corrected):** Academic client brief (was "Client project").
- **Safe research counts:** 74 Facebook posts, 755 NVivo-coded comments, 82 e-commerce reviews (15 top-selling products).
- **Insight framing:** nuanced primary-report version, MAGGI conversation skewed transactional (product/price/delivery); Barona skewed recipe/usage/exploration with stronger engagement. The Muse "MAGGI = product / Barona = emotion" framing is too categorical and is **not** used as fact. The legacy "364 comments / 73 positive" figure is **not** in the evidence ledger and was removed.
- **Tết 2026:** labelled a **proposed academic campaign**, not launched.
- **Embeds/links:** campaign proposal (Canva embed + fallback); research report (Drive link).
- **Assets:** `cases/p13/{comment-themes, sentiment-volume, campaign-framework, big-idea, storyboard}.png` (all contain).

## P20, TRESemmé Vietnam Insights & Media Plan (`tresemme-insights-media-plan`)

- **Public type (corrected):** Academic client brief (was "Client project").
- **Date-bound metrics:** TikTok ~60k fans, 3.3% post interaction rate, 16% follower growth (analysed snapshot; not universal brand health).
- **Budget:** VND 7,333,618,824 incl. GST, labelled a **modelled media-plan budget**, never money Felix managed or spent.
- **Muse caveat:** "visibility not transferring into connection/trust" used only as a diagnosed disconnect/hypothesis, not proven causality.
- **Embeds/links:** media plan (Canva embed + fallback); insights report and workbook (Drive links).
- **Assets:** `cases/p20/{platform-analysis, platform-table, kol-diagnosis, interactive-dooh, plan-pulsing}.png` (all contain).

## P22, Little Me (`little-me`)

- **Role:** Head Organiser; led a 27-person team. (Homepage "Founder, Head Organiser" corrected to "Head Organiser".)
- **Verified outcomes (event report):** 316 visits (97 / 115 / 104), 22 return visits (6.96%), 34,588 organic reach (Facebook 23,900+, TikTok 7,467, Instagram 3,221). KPIs: 300+ visits and 15,000+ reach.
- **Corrections applied:** KPI reached **by the end of the three-day event**, NOT on Day 2 (Day 1+2 = 212). **VND 18M** fundraising claim **omitted** (unsupported by the supplied report).
- **Embeds:** none. **Assets:** `cases/p22/p22-key-visual.jpg` (hero, cover), `floor-plan.png` (contain), `zone-1.jpg`, `calm-jar.jpg`, `buddy-pickup.jpg` (photos, cover).

## P25, EMPACTS (`empacts`)

- **Role (corrected):** Co-founder and Vice-President (source proposal states this exactly). Homepage aligned to "Co-founder, Vice-President".
- **Owner-confirmed scale (not audited):** 54 members, 6 departments, 21 roles, 40+ SOPs.
- **Confidentiality firewall:** `EMPACTS_Youth Program Proposal.pdf` / EPIC deck is **Confidential**, not copied to `public/`, not embedded, not linked. The "communication proposal" Canva (marked *review before embedding*) was **not** embedded, out of caution.
- **Public-safe evidence used:** business model canvas, English + Vietnamese general templates (side-by-side Canva embeds), public webinar deck (Canva) + event photo, two one-pagers; proof links to Facebook, LinkedIn and the VP introduction post.
- **Assets:** `cases/p25/{key-visual, event, felix}.jpg`, `{business-model-canvas, onepager-1, onepager-2}.png`.

## P32, HUST Food-Safety Crisis Response Simulation (`hust-food-safety-crisis-response`), NEW

- **Public type:** Academic capstone simulation (Issues, Risk & Crisis Communication, 2025). `feature: false`; priority `A: Specialist proof`; tags Strategy & Research · Culture & Editorial; visible descriptor **PR & Crisis Communication**. Appears in the work index/filter, not the general homepage featured six.
- **Basis:** 2025 classroom simulation triggered by a **real 2024** HUST food-safety controversy. The page keeps three separated zones: verified 2024 incident (VTV link, no article text) → communication challenge → 2025 simulation.
- **Ownership firewall:** Felix authored the **press release only**. Media kit, FAQ, backgrounder, fact sheet and press-conference materials are **team context**. Never imply HUST employment or official representation. The fictional **"Dr. Felix Phan"** label is not a credential and is not published.
- **Omitted for safety:** the HUST-branded press-conference backdrop (`p32-press-conference-background-team-context.png`) was **removed from `public/`** (brand-impersonation risk). The team crisis-plan Canva is a **link-only** "team simulation material" reference, not a surfaced embed (unverified for the fictional credential).
- **Embeds/links:** Felix-authored press release (Canva embed, portrait, + fallback); VTV 2024 incident context (external).
- **Assets:** `cases/p32/p32-press-release-p1.png` (contain; also the grid cover via `project-images.ts`).

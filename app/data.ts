export type Project = {
  id: string;
  title: string;
  slug: string;
  year: string;
  publicType: string;
  role: string;
  tension: string;
  approach: string;
  output: string;
  significance: string;
  evidence: string;
  source: string;
  proofLinks?: { label: string; url: string }[];
  priority: string;
  feature: boolean;
  tags: string[];
  assetFilename: string;
  assetRatio: string;
  assetRule: string;
  alt: string;
};

export const projects: Project[] = 
[
  {
    "id": "P01",
    "title": "Bếp Nhà Haha Gặp Bếp Cung Đình",
    "slug": "bep-nha-haha-gap-bep-cung-dinh",
    "year": "2026",
    "publicType": "Self-initiated concept",
    "role": "Concept creator, researcher, treatment writer, sponsor-integration designer, short-form cutdown planner.",
    "tension": "Integrate Huế court music and ritual into an unscripted food/entertainment format without turning heritage into a museum backdrop, while incorporating VCB DigiBank without overt product placement.",
    "approach": "Designed an episode engine around a ceremonial night on the Perfume River, using escalating friction across three acts. Built cast-function maps, scene mechanics, a sponsor arc that follows artist pushback, and six short-form cutdown concepts.",
    "output": "A 13-section case study covering strategic brief, audience insight, three-act structure, cast roles, sponsor logic, editorial outputs, short-form plan, and production risks.",
    "significance": "Demonstrates research-led entertainment development and production-aware writing. It is explicitly not an official Yeah1, VCB, VTV, Mango+, or Quán Nhà Haha production.",
    "evidence": "A complete self-initiated case study, presented as independent concept development rather than a commissioned production.",
    "source": "felix-portfolio/content/qnh-case-study.md; felix-portfolio/case-studies/quan-nha-haha.html",
    "priority": "A: Flagship candidate",
    "feature": false,
    "tags": [
      "Creative Content",
      "Culture & Editorial",
      "Strategy & Research"
    ],
    "assetFilename": "felix-p01-bep-nha-haha-gap-bep-cung-inh-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Cover for the self-initiated Bếp Nhà Haha Gặp Bếp Cung Đình entertainment-format concept"
  },
  {
    "id": "P02",
    "title": "Mùa Hạ Của Chúng Tôi",
    "slug": "mua-ha-cua-chung-toi",
    "year": "2022",
    "publicType": "Produced short film",
    "role": "Director, Writer, and Co-editor; project leader.",
    "tension": "Create a coming-of-age story without relying on generic nostalgia.",
    "approach": "Used a three-act structure with a perspective shift rather than a conventional plot twist. Felix authored the script, then carried it into shared direction and editing with the production team.",
    "output": "Completed short film, script, and final edit.",
    "significance": "The film won First Prize for audience engagement (Giải Nhất lượt tương tác) at the Yên Hòa graduation-season video showcase. The award recognised the class collective (D5 K60); the production credits list Felix as sole script writer, with direction and editing shared across the team.",
    "evidence": "First Prize for audience engagement, verified by the award-ceremony photograph, awarded to the class collective (D5 K60), not to Felix individually. The credits confirm Felix as sole script writer, with shared co-direction and co-editing.",
    "source": "felix-portfolio/index.html; felixphan.portfolio2026/index.html; Felix_Phan_Yeah1_CV.pdf",
    "priority": "A: Flagship candidate",
    "feature": true,
    "tags": [
      "Creative Content",
      "Event & Production"
    ],
    "assetFilename": "felix-p02-mua-ha-cua-chung-toi-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Still from the coming-of-age short film Mùa Hạ Của Chúng Tôi"
  },
  {
    "id": "P03",
    "title": "PNJ Mùa Cưới 2024",
    "slug": "pnj-mua-cuoi-2024",
    "year": "2024",
    "publicType": "Academic client brief",
    "role": "Scriptwriter.",
    "tension": "Balance emotional wedding storytelling and commercial messaging without becoming sentimental or product-led.",
    "approach": "Centered the narrative on a small human decision rather than a large proposal spectacle.",
    "output": "Short-film screenplay developed against a PNJ brand brief in a capstone context.",
    "significance": "Shows restraint in branded storytelling and screenplay structure.",
    "evidence": "An academic capstone screenplay written to a PNJ brand brief. Client approval is not documented and is not claimed here.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Creative Content"
    ],
    "assetFilename": "felix-p03-pnj-mua-cuoi-2024-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Cover for the PNJ Mùa Cưới 2024 branded wedding screenplay"
  },
  {
    "id": "P04",
    "title": "Sustainable Energy Series",
    "slug": "sustainable-energy-series",
    "year": "2024",
    "publicType": "Academic podcast",
    "role": "Researcher and scriptwriter.",
    "tension": "Maintain narrative clarity and engagement across a long-form audio format without visual support.",
    "approach": "Structured each segment around one closed question and three open questions, arranged as an emotional and editorial arc across the podcast.",
    "output": "Podcast scripts and final audio for a team academic series on sustainable energy in a global context.",
    "significance": "Evidence of long-form audio structure and editorial discipline.",
    "evidence": "A team academic podcast on sustainable energy. Felix is credited as researcher and scriptwriter; exact runtime, episode count and full team credits are not all documented here.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Sustainability & Advocacy",
      "Creative Content"
    ],
    "assetFilename": "felix-p04-sustainable-energy-series-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Cover artwork for the Sustainable Energy Series academic podcast"
  },
  {
    "id": "P05",
    "title": "BUV Data Science & AI Programme TVC",
    "slug": "buv-data-science-ai-tvc",
    "year": "2024",
    "publicType": "Professional proposal",
    "role": "Lead creative (brief decoding, idea creation, script writing, proposal creation, and pitch preparation).",
    "tension": "Introduce a technical new programme to prospective students and parents in language that feels relevant rather than generic or over-engineered.",
    "approach": "Decoded the recruitment brief, identified a human entry point, developed the central idea, and translated it into a pitchable script and proposal structure.",
    "output": "Creative idea, TVC script, proposal, and pitch-preparation materials.",
    "significance": "Strong lead-creative evidence from Felix's ForArt internship, spanning brief decoding, idea, script and pitch.",
    "evidence": "Confirmed lead-creative work from Felix's ForArt internship, covering brief decoding, idea development, script and pitch materials.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "A: Flagship candidate",
    "feature": false,
    "tags": [
      "Creative Content",
      "Event & Production"
    ],
    "assetFilename": "felix-p05-buv-new-programs-introduction-tvc-data-evidence-3x2-v01.jpg",
    "assetRatio": "Web: 3:2, 1800 × 1200 px. PDF: Fit inside a 3:2 frame, minimum 1800 × 1200 px.",
    "assetRule": "Evidence exception: Fit/contain inside the frame with wine or ivory padding. Do not crop text, charts, logos, dates, or source labels. Never stretch.",
    "alt": "Cover for the BUV Data Science and AI programme TVC proposal"
  },
  {
    "id": "P06",
    "title": "Hapacol iTVC",
    "slug": "hapacol-itvc",
    "year": "2024",
    "publicType": "Professional proposal",
    "role": "Support creative (script writing based on the leader’s idea and approach, proposal creation, and pitch preparation).",
    "tension": "Build an emotionally clear pharmaceutical story while respecting the leader’s strategic direction and category constraints.",
    "approach": "Developed the script from the approved direction, strengthened its narrative flow, and packaged the work for client presentation.",
    "output": "iTVC script, proposal, and pitch-preparation materials.",
    "significance": "Shows disciplined collaborative writing: Felix can expand and sharpen a lead idea without overstating creative ownership.",
    "evidence": "Confirmed collaborative scriptwriting from Felix's ForArt internship, developing an approved direction into a client-ready script and proposal.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Creative Content"
    ],
    "assetFilename": "felix-p06-hapacol-itvc-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Cover for the Hapacol iTVC proposal"
  },
  {
    "id": "P07",
    "title": "Cleaning Frenzy Tết Campaign",
    "slug": "cleaning-frenzy-tet",
    "year": "2024-2025",
    "publicType": "Academic board-game renovation campaign",
    "role": "Production director and Script writer.",
    "tension": "Find a distinctive Tết moment in a crowded seasonal communications environment.",
    "approach": "Moved away from the overused family-reunion trope toward a more specific playable/behavioral moment built around the board game itself.",
    "output": "Campaign idea, script, and storyboard for the Cleaning Frenzy board game.",
    "significance": "Demonstrates seasonal cultural differentiation for a board-game Tết campaign, with Felix credited as Production Director on the team page.",
    "evidence": "An academic capstone Tết campaign for a board game (Cleaning Frenzy). The supplied team-credit page lists Felix (Nguyễn Phan Thục Hương) as Production Director.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Creative Content"
    ],
    "assetFilename": "felix-p07-cleaning-frenzy-tet-campaign-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Key visual for the Cleaning Frenzy board-game Tết campaign proposal"
  },
  {
    "id": "P10",
    "title": "VinFast Campaign Series: VF7, VF5 & Kim Yoo-jung",
    "slug": "vinfast-campaign-series",
    "year": "2024",
    "publicType": "Professional production",
    "role": "Creative and production support across three VinFast campaigns: script writing based on the leader’s idea and approach, proposal creation, pitch preparation, on-set assistance, and BTS content creation, with the BTS workstream led on the Kim Yoo-jung production.",
    "tension": "Support a run of high-visibility VinFast campaigns with named talent while keeping creative direction, production requirements, and BTS storytelling aligned across each one.",
    "approach": "Across VF7 (Touliver & Lương Thùy Linh, #ĐểĐamMêDẫnLối), VF5 (Grey D, Hoàng Hà, AMEE, Kaity Nguyễn & Sơn Soho), and the Kim Yoo-jung production, built script and proposal material from the lead direction, supported the set, and captured BTS content with a clear editorial purpose. On the Kim Yoo-jung production, Felix led the BTS content plan and capture priorities.",
    "output": "Script contributions, proposal materials, on-set support, and BTS content packages across three campaigns.",
    "significance": "Evidence of dependable, repeatable cross-stage campaign support across a complex cast and campaign ecosystem, including ownership of a dedicated BTS workstream.",
    "evidence": "Confirmed campaign support from Felix's ForArt internship across script, proposal, on-set assistance and BTS content for three high-visibility VinFast productions. On the Kim Yoo-jung production Felix led the BTS content and assisted on set, not the main commercial production or talent direction.",
    "source": "felix-portfolio/content/content-pack.md; Felix_Phan_Yeah1_CV.pdf; direct clarification from Felix; ForArt portfolio sources",
    "priority": "A: Flagship candidate",
    "feature": false,
    "tags": [
      "Creative Content",
      "Event & Production"
    ],
    "assetFilename": "felix-p10-vinfast-campaign-series-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Behind-the-scenes still from the VinFast campaign series (VF7, VF5 and Kim Yoo-jung)"
  },
  {
    "id": "P11",
    "title": "Gặp Nhau Cuối Năm: Critical Case Study",
    "slug": "gap-nhau-cuoi-nam",
    "year": "2023",
    "publicType": "Academic media analysis",
    "role": "Solo researcher and analyst.",
    "tension": "Explain how a prime-time entertainment programme can critique power through comedy.",
    "approach": "Applied semiotics and Stuart Hall’s encoding/decoding framework to the ‘Education Reform’ segment from the 2016 programme.",
    "output": "An analytical case-study report, presented here as a summary.",
    "significance": "Demonstrates the ability to explain audience interpretation rather than merely describe content.",
    "evidence": "An academic critical case study applying semiotics and encoding/decoding analysis to a prime-time entertainment segment.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Culture & Editorial",
      "Strategy & Research"
    ],
    "assetFilename": "felix-p11-gap-nhau-cuoi-nam-critical-case-study-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Cover for the Gặp Nhau Cuối Năm critical media case study"
  },
  {
    "id": "P12",
    "title": "Folk × Western Elements in V-Pop Music Videos",
    "slug": "folk-western-vpop",
    "year": "2024",
    "publicType": "Academic cultural research",
    "role": "Co-researcher.",
    "tension": "Explain why some combinations of Vietnamese folk material and Western pop feel credible while others feel borrowed or superficial.",
    "approach": "Used Bourdieu’s cultural-capital framework and cultural hybridity, with Phương Mỹ Chi’s work and ‘Vũ Trụ Cò Anh’ named as a case.",
    "output": "Research report/presentation.",
    "significance": "Supports the cultural-intelligence positioning and the translation of cultural tension into content direction.",
    "evidence": "An academic research project on cultural hybridity in V-Pop using Bourdieu's cultural-capital framework, completed with a co-researcher.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Culture & Editorial",
      "Strategy & Research"
    ],
    "assetFilename": "felix-p12-folk-western-elements-in-v-pop-music-v-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Cover for the research on folk and Western elements in V-Pop music videos"
  },
  {
    "id": "P13",
    "title": "MAGGI Recipe Solution: Research to Execution",
    "slug": "maggi-recipe-solution",
    "year": "2025",
    "publicType": "Academic client brief",
    "role": "Researcher and strategist in the research phase; script writer and storyboard creator in the execution phase.",
    "tension": "Diagnose why MAGGI had awareness but weak affinity compared with Barona and Cholimex, then turn that insight into a seasonal campaign that stands out in a saturated Tết category.",
    "approach": "Phase one, research: analysed 74 posts, coded 755 comments in NVivo, reviewed 82 e-commerce product reviews, built keyword comparisons and a customer journey, then proposed ‘Authentic Convenience’ and a two-tier influencer strategy. Phase two, execution: developed the MAGGI Tết 2026 TVC script and illustrated storyboard, applying the authentic-convenience direction around a specific seasonal moment rather than a generic family-reunion trope.",
    "output": "Research phase: competitive and consumer analysis, charts, positioning direction, the #MaggiNhanhMaNgon concept and a two-tier influencer strategy. Execution phase: a MAGGI Tết 2026 TVC script and illustrated storyboard.",
    "significance": "In the analysed set, MAGGI conversation skewed toward product, price and transactional concerns while Barona generated more recipe, usage and exploration-led discourse and stronger engagement, pointing to an ‘Authentic Convenience’ direction that then shaped a proposed Tết 2026 creative.",
    "evidence": "An academic client-brief research project. The figures come from Felix's own analysis of 74 posts, 755 NVivo-coded comments and 82 product reviews.",
    "source": "felixphan-bsc/index.html; felixphan-muse/index.html; felix-portfolio/content/content-pack.md",
    "priority": "A: Flagship candidate",
    "feature": true,
    "tags": [
      "Strategy & Research",
      "Creative Content"
    ],
    "assetFilename": "felix-p13-maggi-recipe-solution-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum.",
    "assetRule": "Photography and campaign key visual: Crop to Fill with preserved proportions. Never stretch.",
    "alt": "MAGGI Recipe Solution campaign key visual, from research to Tết execution"
  },
  {
    "id": "P14",
    "title": "Gender Equality Magazine: 1080p - Vietnamese Culture & Lifestyle",
    "slug": "equal-in-ao-dai",
    "year": "2023",
    "publicType": "Academic editorial project",
    "role": "Creative Director, Lead photographer.",
    "tension": "Create a gender-equality publication without making the reader feel lectured.",
    "approach": "Used áo dài as the visual anchor and inverted conventional gender-expression expectations, and directed a three-shoot photo series to supply the magazine's own imagery.",
    "output": "Concept deck, editorial spread, magazine/flipbook, and a three-shoot photo series shot to fill it.",
    "significance": "Shows the translation of cultural research into an editorial and visual system.",
    "evidence": "An academic editorial project translating gender-equality research into a magazine concept, spread and photo direction.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Culture & Editorial",
      "Sustainability & Advocacy"
    ],
    "assetFilename": "felix-p14-equal-in-ao-dai-gender-equality-magazi-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Spread from the Equal in Ao Dai gender-equality magazine"
  },
  {
    "id": "P16",
    "title": "Patriotic Rap as New Red Music",
    "slug": "patriotic-rap",
    "year": "2023",
    "publicType": "Academic research proposal",
    "role": "Solo researcher and proposal author.",
    "tension": "Explain why contemporary patriotic rap may resonate with Gen Z differently from traditional revolutionary music.",
    "approach": "Proposed ‘functional inheritance’ rather than formal imitation, drawing on Gramsci, Bourdieu, and cultural hybridity.",
    "output": "Research proposal; the study is not represented as executed.",
    "significance": "Demonstrates cultural analysis and generational audience framing.",
    "evidence": "An academic research proposal on patriotic rap and generational audience framing, presented as a proposal rather than an executed study.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Strategy & Research",
      "Culture & Editorial"
    ],
    "assetFilename": "felix-p16-patriotic-rap-as-new-red-music-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Cover for the patriotic-rap as new red music research proposal"
  },
  {
    "id": "P17",
    "title": "Education Inequality White Paper",
    "slug": "education-inequality",
    "year": "2023–2024",
    "publicType": "Academic policy research & editorial communication",
    "role": "Co-researcher on the white paper; sole author of the editorial article.",
    "tension": "Address education inequality between urban and rural Vietnam for Teach For Viet Nam and align recommendations with SDG 4.",
    "approach": "Developed a multi-stakeholder, cross-sector solution framework.",
    "output": "Policy white paper, plus an eMagazine-format editorial feature authored by Felix that translates the same research for a general audience.",
    "significance": "Adds policy research and structured recommendation writing, plus the ability to translate that research into a public-facing editorial narrative.",
    "evidence": "An academic client-brief policy-research project on education inequality aligned to SDG 4, co-researched, plus an editorial feature authored solely by Felix. No official VTV publication is implied.",
    "source": "felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Sustainability & Advocacy",
      "Strategy & Research"
    ],
    "assetFilename": "felix-p17-education-inequality-white-paper-evidence-3x2-v01.jpg",
    "assetRatio": "Web: 3:2, 1800 × 1200 px. PDF: Fit inside a 3:2 frame, minimum 1800 × 1200 px.",
    "assetRule": "Evidence exception: Fit/contain inside the frame with wine or ivory padding. Do not crop text, charts, logos, dates, or source labels. Never stretch.",
    "alt": "Cover of the education-inequality white paper and its editorial feature"
  },
  {
    "id": "P18",
    "title": "Google Doodle: Vietnam’s 50th Reunification Anniversary (A50)",
    "slug": "google-doodle-a50",
    "year": "2024",
    "publicType": "Academic client brief: art-direction concept",
    "role": "Art director.",
    "tension": "Translate a national historical commemoration into a homepage visual concept.",
    "approach": "Researched visual and cultural references and proposed the art direction for the commemoration.",
    "output": "Concept/art-direction proposal.",
    "significance": "The commemoration is Vietnam's 50th reunification anniversary (A50), reflected accurately in the concept.",
    "evidence": "A client-brief concept and art-direction proposal for a national commemoration (the 50th anniversary, A50), completed as a capstone.",
    "source": "felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Culture & Editorial",
      "Creative Content"
    ],
    "assetFilename": "felix-p18-google-doodle-vietnam-s-50th-reunifica-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Animated concept for a Google Doodle marking Vietnam's 50th reunification anniversary"
  },
  {
    "id": "P20",
    "title": "TRESemmé Vietnam Insights Report and Media Plan",
    "slug": "tresemme-insights-media-plan",
    "year": "July 2024",
    "publicType": "Academic client brief",
    "role": "Researcher and media planner.",
    "tension": "Explain why strong TikTok performance coexisted with decline or stagnation on Facebook, Instagram, and YouTube.",
    "approach": "Used Fanpage Karma data across four platforms and competitors, diagnosed a trust-transfer gap, and proposed ‘Step up your hair game at home’ with AI DOOH, UGC, pop-up, and stylist-creator activations.",
    "output": "Consumer media insights report and a media plan proposal with an approximately VND 7.3 billion budget.",
    "significance": "The diagnosis drew on date-bound platform metrics, for example TikTok around 60k fans, 3.3% interaction and 16% growth, to explain the cross-platform gap.",
    "evidence": "An academic client-brief insights report and media plan. Metrics are date-bound figures from Felix's Fanpage Karma analysis, and the ~VND 7.3B budget is a modelled proposal, not managed spend.",
    "source": "felixphan-bsc/index.html; felixphan-muse/index.html",
    "priority": "A: Flagship candidate",
    "feature": true,
    "tags": [
      "Strategy & Research"
    ],
    "assetFilename": "felix-p20-tresemme-vietnam-insights-report-and-m-evidence-3x2-v01.jpg",
    "assetRatio": "Web: 3:2, 1800 × 1200 px. PDF: Fit inside a 3:2 frame, minimum 1800 × 1200 px.",
    "assetRule": "Evidence exception: Fit/contain inside the frame with wine or ivory padding. Do not crop text, charts, logos, dates, or source labels. Never stretch.",
    "alt": "Report or data proof for TRESemmé Vietnam Insights Report and Media Plan"
  },
  {
    "id": "P21",
    "title": "Vinamilk Brand Bonding Investigation",
    "slug": "vinamilk-brand-bonding",
    "year": "2023",
    "publicType": "Academic research design",
    "role": "Leader, Research designer.",
    "tension": "Investigate weak brand involvement and information gaps within Facebook communities around Vinamilk.",
    "approach": "Designed 30 in-depth interviews across Hanoi, Ho Chi Minh City, and Da Nang, using purposive sampling, a projective technique, and visual prompts.",
    "output": "Research proposal and 20-question interview protocol; no fieldwork was conducted.",
    "significance": "The design framed the problem with market context, for example a reported 43.7% market share and a 48.5% information-gap figure, drawn from cited secondary sources.",
    "evidence": "An academic research design: a proposal and 20-question interview protocol. No fieldwork was conducted, so the cited figures are background context, not Felix's findings.",
    "source": "felixphan-bsc/index.html; felixphan-muse/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Strategy & Research"
    ],
    "assetFilename": "felix-p21-vinamilk-brand-bonding-investigation-evidence-3x2-v01.jpg",
    "assetRatio": "Web: 3:2, 1800 × 1200 px. PDF: Fit inside a 3:2 frame, minimum 1800 × 1200 px.",
    "assetRule": "Evidence exception: Fit/contain inside the frame with wine or ivory padding. Do not crop text, charts, logos, dates, or source labels. Never stretch.",
    "alt": "Cover of the Vinamilk brand-bonding research-design proposal"
  },
  {
    "id": "P22",
    "title": "Little Me: Mental-Wellness Interactive Exhibition",
    "slug": "little-me",
    "year": "3-5 April 2024",
    "publicType": "Event & experience",
    "role": "Head Organiser; led a 27-person team.",
    "tension": "Create an accessible mental-wellness experience during a high-stress semester without making it feel like a formal intervention.",
    "approach": "Designed a self-paced interactive exhibition with Draw Little Me, DIY Calm Jar, and a shared gallery; coordinated RMIT’s Diversity & Inclusion Office, Wellbeing Department, Student Life Department, RMIT Current Media Club, and independent RMIT artists.",
    "output": "Three-day exhibition, fundraising, operations, partner coordination, and cross-platform promotion.",
    "significance": "The event report records 316 visits (97 / 115 / 104 across three days), 34,588 organic reach and 22 return visits (6.96%), exceeding the stated 300+ visit and 15,000+ reach KPIs by the end of the three-day event.",
    "evidence": "Role, partners and event delivery confirmed by Felix. Visit, return and reach figures come from the event's own reporting; the 300+ visit KPI was met by the close of the three-day event, not on Day 2.",
    "source": "felixphan-bsc/index.html; felix-portfolio/content/content-pack.md; CV files",
    "priority": "A: Flagship candidate",
    "feature": true,
    "tags": [
      "Event & Production",
      "Sustainability & Advocacy"
    ],
    "assetFilename": "felix-p22-little-me-rmit-mental-wellness-exhibit-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "The Little Me mental-wellness interactive exhibition space"
  },
  {
    "id": "P25",
    "title": "EMPACTS: Startup Ecosystem for SDGs",
    "slug": "empacts",
    "year": "May-Dec 2024",
    "publicType": "Leadership & organisation",
    "role": "Co-founder and Vice-President; designed an organisation spanning six departments.",
    "tension": "Build a fast-moving organization connecting early-stage social enterprises with Vietnam’s SDG ecosystem and make leadership handover possible.",
    "approach": "Designed six departments, 21 roles, 40+ SOPs, strategic plans, cross-functional tracking, and performance review for a 54-member organization.",
    "output": "Organisation structure, cross-functional operating system, and leadership handover. Detailed organisational documentation is confidential.",
    "significance": "Demonstrates organisation design and systems thinking, showing the operating architecture while internal documents stay confidential.",
    "evidence": "Co-founder and Vice-President role and the six-department structure confirmed by Felix. Internal organisational documents are kept confidential.",
    "source": "felix-portfolio/content/content-pack.md; CV files",
    "priority": "A: Flagship candidate",
    "feature": true,
    "tags": [
      "Sustainability & Advocacy",
      "Event & Production",
      "Project Management"
    ],
    "assetFilename": "felix-p25-empacts-startup-ecosystem-for-sdgs-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "EMPACTS, a startup-ecosystem organisation for the SDGs"
  },
  {
    "id": "P26",
    "title": "RMIT IEC Bootcamp & Fundraiser",
    "slug": "rmit-iec",
    "year": "Sep 2023-Jun 2024",
    "publicType": "Event & experience",
    "role": "Assistant to Vice President; Head Operation (Unicorn Start-up 101 bootcamp); Marketing Leader (Petals of Love).",
    "tension": "Deliver workshops/panel talks and a short charity fundraiser with large student teams.",
    "approach": "Led a 42-person operations team and a 12-person marketing team.",
    "output": "Portfolio records report workshops and panels with about 200 attendees and five speakers, and a fundraiser that sold 97 products and reportedly raised VND 20 million in two weeks.",
    "significance": "Reported roughly 30,000 engagements per cycle and 20,000 social reach for the fundraiser, from the club's own records.",
    "evidence": "Workshops, panel talks and a student fundraiser delivered with large operations and marketing teams. Figures come from the club's own records.",
    "source": "felixphan.portfolio2026/files/Felix_Phan_CV.pdf (ZIP package containing 1.txt)",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Event & Production",
      "Project Management"
    ],
    "assetFilename": "felix-p26-rmit-innovation-entrepreneurship-club--cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Event evidence for RMIT Innovation & Entrepreneurship Club Workshops and Fundraiser"
  },
  {
    "id": "P30",
    "title": "Scienceporium: Cybersecurity Resilience for Vietnamese SMEs",
    "slug": "scienceporium-cybersecurity-resilience",
    "year": "2023",
    "publicType": "Top 15, Map the System 2023",
    "role": "Researcher and Analyst within a five-person team.",
    "tension": "How can Vietnamese SMEs strengthen cybersecurity resilience amid a rise in cybercrime during the COVID-19 period, when budgets, specialist skills, awareness, policy support, and access to tailored solutions are all constrained?",
    "approach": "Mapped visible incidents and underlying mental models through an iceberg model, located stakeholders by interest and influence, and used a causal-loop model to connect awareness, investment, skills, regulation, service providers, and cyberattack exposure. The team also compared local and global solution landscapes before identifying impact gaps and leverage points.",
    "output": "A four-page visual systems map, a 16-page written analysis, a 17-slide presentation, an iceberg model, a stakeholder map, a causal-loop model, five impact-gap themes, and four levers of change.",
    "significance": "A Top 15 project in the 2023 Map the System competition hosted at National Economics University in partnership with the Skoll Centre for Social Entrepreneurship. The work demonstrates systems thinking, evidence synthesis, stakeholder analysis, and the translation of a complex social and economic risk into intervention logic.",
    "evidence": "Felix confirms their role as Researcher and Analyst. Team membership and project outputs are supported by the attached submission files. The Top 15 result is supported by the linked public announcement. No national or global competition stage is claimed without explicit evidence.",
    "source": "NEU_VisualMap_Scienceporium.pdf; NEU_WrittenSummary_Scienceporium.pdf; NEU_PresentationSlide_Scienceporium.pdf; NEU_Bibliography_Scienceporium.docx; direct clarification from Felix; public Top 15 announcement",
    "proofLinks": [
      {
        "label": "View Top 15 announcement",
        "url": "https://www.facebook.com/share/p/193pMCNSuD/"
      }
    ],
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Sustainability & Advocacy",
      "Strategy & Research",
      "Project Management"
    ],
    "assetFilename": "felix-p30-scienceporium-map-the-system-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional systems-map detail: 3:2, 1800 × 1200 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Use the original visual map or presentation cover. Crop to Fill with preserved proportions and keep the project title legible inside the central safe zone. Never stretch or set independent X/Y scale.",
    "alt": "Scienceporium systems map on cybersecurity resilience among Vietnamese SMEs"
  },
  {
    "id": "P31",
    "title": "Be Local",
    "slug": "be-local",
    "year": "2025",
    "publicType": "Academic project-management capstone",
    "role": "Project Manager of a seven-person academic team, with direct ownership of selected deliverables and cross-functional review of the rest.",
    "tension": "Run a seven-person team through a full project-management cycle while planning a community-based tourism venture in Hà Giang that connects visitors to local culture without turning that culture into a commodity.",
    "approach": "Set up the operating system rather than authoring every part: Project Manager to deliverable PICs to team members, with double review and weekly meetings across the cycle. Felix directly owned selected deliverables and reviewed the rest, tracking work in Trello and running seven weekly peer-evaluation rounds.",
    "output": "A modelled project-management system for the proposed venture, covering scope, people, budget, stakeholder governance, a 30-risk register, quality gates and a schedule. Felix was the listed PIC for the Project Charter, Human Resources Plan, presentation video and Peer Evaluation, and appears as reviewer on 15 allocated work items. The soft launch (20 September 2025) and official launch (4 October 2025) are planned milestones in the venture schedule, not realised events.",
    "significance": "Shows structured project management: managing the work, not just describing the idea. The venture plan, its roughly VND 2.594 billion cost model and the launch dates are planning scenarios, not commercial outcomes.",
    "evidence": "An academic project-management capstone. Financial and launch figures are planning models, not realised results. Peer-evaluation scores come from anonymous academic-team evaluation, not client or professional review. Felix did not personally author every deliverable.",
    "source": "P31_Claude_Handoff_Pack (factual context ledger, source-data workbooks, original presentation artefacts)",
    "proofLinks": [
      {
        "label": "View original presentation (Canva)",
        "url": "https://www.canva.com/design/DAGlkXNbHM4/OTW2amJs3KP1o6_sYLBelQ/view"
      }
    ],
    "priority": "A: Flagship candidate",
    "feature": true,
    "tags": [
      "Project Management",
      "Sustainability & Advocacy"
    ],
    "assetFilename": "p31-hero.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1920 x 1080 px. Web copy: p31-hero.jpg (~316 KB JPEG).",
    "assetRule": "Original presentation cover: Crop to Fill with preserved proportions. Keep the BE LOCAL title and Hà Giang landscape legible inside the central safe zone. Never stretch or set independent X/Y scale.",
    "alt": "Be Local project-management presentation cover over a Hà Giang mountain landscape"
  },
  {
    "id": "P32",
    "title": "HUST Food-Safety Crisis Response Simulation",
    "slug": "hust-food-safety-crisis-response",
    "year": "2025",
    "publicType": "Academic capstone simulation",
    "role": "Communication Manager, simulation role.",
    "tension": "How should an institution communicate accountability when student safety and public trust are both under pressure?",
    "approach": "Built a crisis-response communication scenario around a real 2024 HUST food-safety controversy. Felix directly authored the press release; the broader media-kit and press-conference materials are shown only as team context.",
    "output": "Felix-authored crisis press release within a team media-preparedness package developed for an academic simulation.",
    "significance": "Adds specialist PR evidence: issues and risk framing, accountable institutional writing, and media preparedness under scrutiny.",
    "evidence": "A 2025 academic simulation, not HUST employment or official communications. Direct individual ownership is claimed only for the press release; other response materials are team context. Some simulation artefacts use a fictional ‘Dr. Felix Phan’ label that is not a real credential and is not published here.",
    "source": "P32 Crisis Response handoff pack; Felix-authored press release; team media kit; public 2024 incident reporting (VTV)",
    "proofLinks": [
      {
        "label": "View real 2024 incident context (VTV)",
        "url": "https://vtv.vn/xa-hoi/dai-hoc-bach-khoa-ha-noi-dung-hop-dong-voi-don-vi-cung-cap-suat-an-sau-phan-anh-cua-vtv-20241008070959807.htm"
      }
    ],
    "priority": "A: Specialist proof",
    "feature": false,
    "tags": [
      "Strategy & Research"
    ],
    "assetFilename": "p32-press-release-p1.png",
    "assetRatio": "Evidence portrait: fit/contain; never crop document text.",
    "assetRule": "Evidence exception: contain inside frame. Do not crop text, names, dates or labels. Never stretch.",
    "alt": "Felix Phan-authored press release for a 2025 HUST food-safety crisis communication simulation"
  },
  {
    "id": "P33",
    "title": "Vietnam's Media Landscape Through the Việt Á Scandal",
    "slug": "vietnam-media-viet-a",
    "year": "2023",
    "publicType": "Academic media research",
    "role": "Researcher and Analyst.",
    "tension": "How transparent is the Vietnamese media in reporting corruption from 2021 to 2023?",
    "approach": "The team reviewed prior research, defined observable transparency criteria, assembled a cross-platform sample across online news, social media and television/video, and analysed both information sources and publisher transparency, using the Soviet Communist Theory of the Press as the assignment's framing lens.",
    "output": "A research deck recording a final 39-item sample (26 online newspaper, 8 social-media news, 5 television/video) and analysis of 131 citations across 68 primary information sources.",
    "significance": "Within the academic study, the team assessed source diversity and credibility alongside publisher transparency and ownership, keeping interpretation bounded by the sample rather than generalising to all Vietnamese media.",
    "evidence": "A four-person academic team study for COMM2892 (Asian Media and Communication). The artifact proves team membership and the study's stated method and sample, not individual task allocation.",
    "source": "P33 handoff pack; COMM2892 team research deck",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Strategy & Research",
      "Culture & Editorial"
    ],
    "assetFilename": "p33-media-research.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum.",
    "assetRule": "Research-deck slide: Crop to Fill with preserved proportions. Never stretch or set independent X/Y scale.",
    "alt": "Research deck for a study of Vietnamese media transparency around the Việt Á scandal"
  },
  {
    "id": "P34",
    "title": "Cybersecurity & SME Bank-Loan Access in Pakistan",
    "slug": "cybersecurity-sme-loans-pakistan",
    "year": "2023",
    "publicType": "Applied PR research",
    "role": "Project leader, Researcher and Analyst.",
    "tension": "Turn a broad, cross-domain problem, cybersecurity capacity development and SME access to bank loans in Pakistan, into researchable questions with a method matched to each.",
    "approach": "Began with an individual literature review and problem-framing study, then developed a four-person mixed-methods design: a 22-country secondary quantitative analysis, social listening via Google Trends, BuzzSumo and NVivo, and YouTube social-network analysis in NodeXL.",
    "output": "An annotated bibliography and investigation proposal (individual), plus a team presentation triangulating quantitative, social-listening and network evidence. The quantitative dataset reported p = 0.02 with a weak positive correlation (Multiple R = 0.48); a 30-article sample supported sentiment and theme analysis; the network stage examined 1,749 users across 83 videos.",
    "significance": "Demonstrates research architecture: decomposing one difficult problem into distinct research questions, choosing a method for each, triangulating evidence and communicating limitations. The correlation is weak and is not presented as causal.",
    "evidence": "An academic project for MKTG1459 (Applied Public Relations Research). Assignment 1 is solely Felix's; the later mixed-methods stages were a four-person team. Reported figures are as stated in the team presentation.",
    "source": "P34 handoff pack; MKTG1459 individual and team assignments",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Strategy & Research"
    ],
    "assetFilename": "p34-prre-infographic.png",
    "assetRatio": "Web: 3:2, 1800 × 1200 px. PDF: Fit inside a 3:2 frame.",
    "assetRule": "Evidence exception: Fit/contain inside the frame. Do not crop labels, citations or source text. Never stretch.",
    "alt": "Research-system infographic for a study of cybersecurity capacity and SME bank-loan access in Pakistan"
  }
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));
export const featureProjects = projects.filter((project) => project.feature);
export const filters = ["All", "Strategy & Research", "Event & Production", "Project Management", "Creative Content", "Sustainability & Advocacy", "Culture & Editorial"];

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
      "Script & Story",
      "Culture & Editorial",
      "Strategy & Research"
    ],
    "assetFilename": "felix-p01-bep-nha-haha-gap-bep-cung-inh-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Project evidence for Bếp Nhà Haha Gặp Bếp Cung Đình"
  },
  {
    "id": "P02",
    "title": "Mùa Hạ Của Chúng Tôi",
    "slug": "mua-ha-cua-chung-toi",
    "year": "2022",
    "publicType": "Produced short film",
    "role": "Writer; co-director and co-editor; team lead.",
    "tension": "Create a coming-of-age story without relying on generic nostalgia.",
    "approach": "Used a three-act structure with a perspective shift rather than a conventional plot twist. Felix authored the script, then carried it into shared direction and editing with the production team.",
    "output": "Completed short film, script, and final edit.",
    "significance": "The film won First Prize for audience engagement (Giải Nhất lượt tương tác) at the Yên Hòa graduation-season video showcase. The award recognised the class collective (D5 K60); the production credits list Felix as sole script writer, with direction and editing shared across the team.",
    "evidence": "First Prize for audience engagement, verified by the award-ceremony photograph, awarded to the class collective (D5 K60), not to Felix individually. The credits confirm Felix as sole script writer, with shared co-direction and co-editing.",
    "source": "felix-portfolio/index.html; felixphan.portfolio2026/index.html; Felix_Phan_Yeah1_CV.pdf",
    "priority": "A: Flagship candidate",
    "feature": true,
    "tags": [
      "Script & Story",
      "Production"
    ],
    "assetFilename": "felix-p02-mua-ha-cua-chung-toi-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Project evidence for Mùa Hạ Của Chúng Tôi"
  },
  {
    "id": "P03",
    "title": "PNJ Mùa Cưới 2024",
    "slug": "pnj-mua-cuoi-2024",
    "year": "2024",
    "publicType": "Academic client brief",
    "role": "Script writer.",
    "tension": "Balance emotional wedding storytelling and commercial messaging without becoming sentimental or product-led.",
    "approach": "Centered the narrative on a small human decision rather than a large proposal spectacle.",
    "output": "Short-film screenplay developed against a PNJ brand brief in a capstone context.",
    "significance": "Shows restraint in branded storytelling and screenplay structure.",
    "evidence": "An academic capstone screenplay written to a PNJ brand brief. Client approval is not documented and is not claimed here.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Script & Story"
    ],
    "assetFilename": "felix-p03-pnj-mua-cuoi-2024-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Project evidence for PNJ Mùa Cưới 2024"
  },
  {
    "id": "P04",
    "title": "Sustainable Energy Series",
    "slug": "sustainable-energy-series",
    "year": "2024",
    "publicType": "Academic podcast",
    "role": "Researcher and scriptwriter, team academic podcast.",
    "tension": "Maintain narrative clarity and engagement across a long-form audio format without visual support.",
    "approach": "Structured each episode around one closed question and three open questions, with segments arranged as an emotional/editorial arc.",
    "output": "Podcast scripts and final audio for a team academic series on sustainable energy in a global context.",
    "significance": "Evidence of long-form audio structure and editorial discipline.",
    "evidence": "A team academic podcast on sustainable energy. Felix is credited as researcher and scriptwriter; exact runtime, episode count and full team credits are not all documented here.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Sustainability & Advocacy",
      "Script & Story"
    ],
    "assetFilename": "felix-p04-sustainable-energy-series-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Project evidence for Sustainable Energy Series"
  },
  {
    "id": "P05",
    "title": "BUV New Programs Introduction TVC: Data Science & Artificial Intelligence",
    "slug": "buv-data-science-ai-tvc",
    "year": "2024",
    "publicType": "Professional proposal",
    "role": "Lead creative: brief decoding, idea creation, script writing, proposal creation, and pitch preparation.",
    "tension": "Introduce a technical new programme to prospective students and parents in language that feels relevant rather than generic or over-engineered.",
    "approach": "Decoded the recruitment brief, identified a human entry point, developed the central idea, and translated it into a pitchable script and proposal structure.",
    "output": "Creative idea, TVC script, proposal, and pitch-preparation materials.",
    "significance": "Strong lead-creative evidence from Felix's ForArt internship, spanning brief decoding, idea, script and pitch.",
    "evidence": "Confirmed lead-creative work from Felix's ForArt internship, covering brief decoding, idea development, script and pitch materials.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "A: Flagship candidate",
    "feature": false,
    "tags": [
      "Script & Story",
      "Production"
    ],
    "assetFilename": "felix-p05-buv-new-programs-introduction-tvc-data-evidence-3x2-v01.jpg",
    "assetRatio": "Web: 3:2, 1800 × 1200 px. PDF: Fit inside a 3:2 frame, minimum 1800 × 1200 px.",
    "assetRule": "Evidence exception: Fit/contain inside the frame with wine or ivory padding. Do not crop text, charts, logos, dates, or source labels. Never stretch.",
    "alt": "Video or keyframe for BUV New Programs Introduction TVC: Data Science & Artificial Intelligence"
  },
  {
    "id": "P06",
    "title": "Hapacol iTVC",
    "slug": "hapacol-itvc",
    "year": "2024",
    "publicType": "Professional proposal",
    "role": "Creative support: script writing based on the leader’s idea and approach, proposal creation, and pitch preparation.",
    "tension": "Build an emotionally clear pharmaceutical story while respecting the leader’s strategic direction and category constraints.",
    "approach": "Developed the script from the approved direction, strengthened its narrative flow, and packaged the work for client presentation.",
    "output": "iTVC script, proposal, and pitch-preparation materials.",
    "significance": "Shows disciplined collaborative writing: Felix can expand and sharpen a lead idea without overstating creative ownership.",
    "evidence": "Confirmed collaborative scriptwriting from Felix's ForArt internship, developing an approved direction into a client-ready script and proposal.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Script & Story"
    ],
    "assetFilename": "felix-p06-hapacol-itvc-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Video or keyframe for Hapacol iTVC"
  },
  {
    "id": "P07",
    "title": "Cleaning Frenzy Tết Campaign",
    "slug": "cleaning-frenzy-tet",
    "year": "2024-2025",
    "publicType": "Academic capstone campaign proposal",
    "role": "Production Director; script writer and storyboard contributor.",
    "tension": "Find a distinctive Tết moment in a crowded seasonal communications environment.",
    "approach": "Moved away from the overused family-reunion trope toward a more specific playable/behavioral moment built around the board game itself.",
    "output": "Campaign idea, script, and storyboard for the Cleaning Frenzy board game.",
    "significance": "Demonstrates seasonal cultural differentiation for a board-game Tết campaign, with Felix credited as Production Director on the team page.",
    "evidence": "An academic capstone Tết campaign for a board game (Cleaning Frenzy). The supplied team-credit page lists Felix (Nguyễn Phan Thục Hương) as Production Director.",
    "source": "felix-portfolio/content/content-pack.md; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Script & Story"
    ],
    "assetFilename": "felix-p07-cleaning-frenzy-tet-campaign-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Project evidence for Cleaning Frenzy Tết Campaign"
  },
  {
    "id": "P09",
    "title": "TH true Tea TVC",
    "slug": "th-true-tea-tvc",
    "year": "2024",
    "publicType": "Professional production",
    "role": "Creative and production support: script writing based on the leader’s idea and approach, proposal creation, pitch preparation, on-set assistance, and BTS content creation.",
    "tension": "Carry a campaign direction consistently from proposal language into production-day support and useful behind-the-scenes content.",
    "approach": "Supported narrative development and pitch packaging, then stayed involved on set to assist delivery and document production meaningfully.",
    "output": "Script contribution, proposal materials, on-set support, and BTS content.",
    "significance": "Demonstrates continuity across pre-production, production, and supporting content.",
    "evidence": "Confirmed cross-stage support from Felix's ForArt internship, spanning script contribution, proposal, on-set assistance and BTS content.",
    "source": "felix-portfolio/content/content-pack.md; Felix_Phan_Yeah1_CV.pdf; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Production",
      "Script & Story"
    ],
    "assetFilename": "felix-p09-th-true-tea-tvc-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Video or keyframe for TH true Tea TVC"
  },
  {
    "id": "P10",
    "title": "VinFast VF7 × Touliver & Lương Thùy Linh: #ĐểĐamMêDẫnLối",
    "slug": "vinfast-vf7",
    "year": "2024",
    "publicType": "Professional production",
    "role": "Creative and production support: script writing based on the leader’s idea and approach, proposal creation, pitch preparation, on-set assistance, and BTS content creation.",
    "tension": "Support an automotive campaign with named talent while keeping the creative direction, production requirements, and BTS narrative aligned.",
    "approach": "Built script and proposal material from the leader’s direction, supported the set, and captured BTS content with a clear editorial purpose.",
    "output": "Script contribution, proposal materials, on-set support, and BTS content.",
    "significance": "Evidence of dependable cross-stage campaign support in a high-visibility production context.",
    "evidence": "Confirmed campaign support from Felix's ForArt internship across script, proposal, on-set assistance and BTS content for a high-visibility production.",
    "source": "felix-portfolio/content/content-pack.md; Felix_Phan_Yeah1_CV.pdf; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Production",
      "Script & Story"
    ],
    "assetFilename": "felix-p10-vinfast-vf7-touliver-luong-thuy-linh-e-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Video or keyframe for VinFast VF7 × Touliver & Lương Thùy Linh: #ĐểĐamMêDẫnLối"
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
    "output": "Full analytical case-study report.",
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
    "alt": "Project evidence for Gặp Nhau Cuối Năm: Critical Case Study"
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
    "alt": "Project evidence for Folk × Western Elements in V-Pop Music Videos"
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
      "Script & Story"
    ],
    "assetFilename": "felix-p13-maggi-recipe-solution-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum.",
    "assetRule": "Photography and campaign key visual: Crop to Fill with preserved proportions. Never stretch.",
    "alt": "MAGGI Recipe Solution campaign key visual, from research to Tết execution"
  },
  {
    "id": "P14",
    "title": "Equal in Ao Dai / Gender Equality Magazine",
    "slug": "equal-in-ao-dai",
    "year": "2023",
    "publicType": "Academic editorial project",
    "role": "Creative Director, editorial researcher, and photo-direction lead.",
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
    "alt": "Project evidence for Equal in Ao Dai / Gender Equality Magazine"
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
    "alt": "Project evidence for Patriotic Rap as New Red Music"
  },
  {
    "id": "P17",
    "title": "Education Inequality White Paper",
    "slug": "education-inequality",
    "year": "2023–2024",
    "publicType": "Academic policy research & editorial communication",
    "role": "Co-researcher.",
    "tension": "Address education inequality between urban and rural Vietnam for Teach For Viet Nam and align recommendations with SDG 4.",
    "approach": "Developed a multi-stakeholder, cross-sector solution framework.",
    "output": "Policy white paper, plus an eMagazine-format editorial feature authored by Felix that translates the same research for a general audience.",
    "significance": "Adds policy research and structured recommendation writing, plus the ability to translate that research into a public-facing editorial narrative.",
    "evidence": "A client-brief policy white paper on education inequality aligned to SDG 4, completed with a co-researcher.",
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
    "alt": "Report or data proof for Education Inequality White Paper"
  },
  {
    "id": "P18",
    "title": "Google Doodle: Vietnam’s 50th Reunification Anniversary (A50)",
    "slug": "google-doodle-a50",
    "year": "2024",
    "publicType": "Academic client brief: art-direction concept",
    "role": "Research and concept/art direction.",
    "tension": "Translate a national historical commemoration into a homepage visual concept.",
    "approach": "Researched visual and cultural references and proposed the art direction for the commemoration.",
    "output": "Concept/art-direction proposal.",
    "significance": "The commemoration is Vietnam's 50th reunification anniversary (A50), reflected accurately in the concept.",
    "evidence": "A client-brief concept and art-direction proposal for a national commemoration (the 50th anniversary, A50), completed as a capstone.",
    "source": "felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Culture & Editorial"
    ],
    "assetFilename": "felix-p18-google-doodle-vietnam-s-50th-reunifica-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Project evidence for Google Doodle: Vietnam’s 50th Reunification Anniversary (A50)"
  },
  {
    "id": "P19",
    "title": "IKEA, FANTA, LUME Creative Concepts",
    "slug": "ikea-fanta-lume",
    "year": "2024",
    "publicType": "Academic client briefs: grouped creative concepts",
    "role": "Visual concept and copywriting.",
    "tension": "Develop distinct campaign ideas across multiple brand categories.",
    "approach": "Combined insight analysis, big-idea development, visual concept, and copy direction.",
    "output": "Creative concepts portfolio covering three brands.",
    "significance": "The projects are grouped; individual briefs, roles, and outputs are not described in enough detail to assess separately.",
    "evidence": "A client-brief set of creative concepts and copy across three brands, presented as grouped concept development.",
    "source": "felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Culture & Editorial",
      "Script & Story"
    ],
    "assetFilename": "felix-p19-ikea-fanta-lume-creative-concepts-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Project evidence for IKEA, FANTA, LUME Creative Concepts"
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
    "role": "Research designer.",
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
    "alt": "Report or data proof for Vinamilk Brand Bonding Investigation"
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
      "Events & Leadership",
      "Sustainability & Advocacy"
    ],
    "assetFilename": "felix-p22-little-me-rmit-mental-wellness-exhibit-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Event evidence for Little Me: Mental-Wellness Interactive Exhibition"
  },
  {
    "id": "P23",
    "title": "RMIT Student Council Social Channels",
    "slug": "rmit-student-council-social",
    "year": "2022-2023",
    "publicType": "Real social-content work",
    "role": "Content Creator → Media Planner → Director of Content (TikTok & Instagram), before election as Student Rights & Welfare Officer.",
    "tension": "Move the channels beyond announcement-only content and establish a recognizable voice.",
    "approach": "Reorganized content by format across long-form YouTube and short-form TikTok/Reels, with a handover/playbook mindset.",
    "output": "TikTok and short-form social content, including the organisation's first viral TikTok videos.",
    "significance": "Content-leadership work that moved the channels beyond announcement-only posting toward a recognisable voice across long-form and short-form formats.",
    "evidence": "Role progression confirmed by Felix. Presented as content-leadership work; specific channel performance figures are not published here.",
    "source": "felix-portfolio/content/content-pack.md; felixphan-zeit/index.html; felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Content & Channels",
      "Events & Leadership"
    ],
    "assetFilename": "felix-p23-rmit-student-council-social-channels-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Project evidence for RMIT Student Council Social Channels"
  },
  {
    "id": "P24",
    "title": "MBE Corporate Events and Touring Day",
    "slug": "mbe-events",
    "year": "Feb-May 2026",
    "publicType": "Professional production",
    "role": "Assistant to Director and logistics coordinator.",
    "tension": "Deliver seven corporate events for 50-400 attendees while reducing executive preparation load and coordinating vendors/construction.",
    "approach": "Felix built SOP and checklist systems and took over preparation coordination, and coordinated a 270-person touring day across six logistics workstreams.",
    "output": "Seven events delivered; 270-person Hanoi touring day; four executive-support event cycles.",
    "significance": "Standardised meeting preparation and action-item follow-up through SOPs and checklists, reducing executive preparation load.",
    "evidence": "Event-operations and director-support work from Felix's MBE internship, including SOP and checklist systems and a 270-person touring day.",
    "source": "Felix_Phan_Yeah1_CV.pdf; felix-portfolio/content/content-pack.md; felixphan-zeit/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Events & Leadership",
      "Project Management"
    ],
    "assetFilename": "felix-p24-mbe-corporate-events-and-touring-day-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Event evidence for MBE Corporate Events and Touring Day"
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
    "evidence": "Founder status and the six-department structure confirmed by Felix. Internal organisational documents are kept confidential.",
    "source": "felix-portfolio/content/content-pack.md; CV files",
    "priority": "A: Flagship candidate",
    "feature": true,
    "tags": [
      "Sustainability & Advocacy",
      "Events & Leadership",
      "Project Management"
    ],
    "assetFilename": "felix-p25-empacts-startup-ecosystem-for-sdgs-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Project evidence for EMPACTS: Startup Ecosystem for SDGs"
  },
  {
    "id": "P26",
    "title": "RMIT Innovation & Entrepreneurship Club Workshops and Fundraiser",
    "slug": "rmit-iec",
    "year": "Sep 2023-Jun 2024",
    "publicType": "Event & experience",
    "role": "Assistant to Vice President; operations and marketing team lead.",
    "tension": "Deliver workshops/panel talks and a short charity fundraiser with large student teams.",
    "approach": "Led a 42-person operations team and a 12-person marketing team.",
    "output": "Workshops/panels with about 200 attendees and five speakers; fundraiser sold 97 products and reportedly raised VND 20 million in two weeks.",
    "significance": "Reported roughly 30,000 engagements per cycle and 20,000 social reach for the fundraiser, from the club's own records.",
    "evidence": "Workshops, panel talks and a student fundraiser delivered with large operations and marketing teams. Figures come from the club's own records.",
    "source": "felixphan.portfolio2026/files/Felix_Phan_CV.pdf (ZIP package containing 1.txt)",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Events & Leadership",
      "Project Management"
    ],
    "assetFilename": "felix-p26-rmit-innovation-entrepreneurship-club--cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Event evidence for RMIT Innovation & Entrepreneurship Club Workshops and Fundraiser"
  },
  {
    "id": "P27",
    "title": "VinFast VF5 × Grey D, Hoàng Hà, AMEE, Kaity Nguyễn & Sơn Soho",
    "slug": "vinfast-vf5",
    "year": "2024",
    "publicType": "Professional production",
    "role": "Creative and production support: script writing based on the leader’s idea and approach, proposal creation, pitch preparation, on-set assistance, and BTS content creation.",
    "tension": "Support a multi-talent campaign while keeping the creative proposition coherent across scripts, set activity, and BTS storytelling.",
    "approach": "Developed script and proposal material from the lead direction, supported on-set execution, and created BTS content anchored to the campaign idea.",
    "output": "Script contribution, proposal materials, on-set support, and BTS content.",
    "significance": "Shows coordination and editorial judgement across a complex cast and campaign ecosystem.",
    "evidence": "Confirmed campaign support from Felix's ForArt internship across script, proposal, on-set assistance and BTS content.",
    "source": "Direct clarification from Felix; ForArt portfolio sources",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Production",
      "Script & Story"
    ],
    "assetFilename": "felix-p27-vinfast-vf5-grey-d-hoang-ha-amee-kaity-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Video or keyframe for VinFast VF5 × Grey D, Hoàng Hà, AMEE, Kaity Nguyễn & Sơn Soho"
  },
  {
    "id": "P28",
    "title": "VinFast × Kim Yoo-jung",
    "slug": "vinfast-kim-yoojung",
    "year": "2024",
    "publicType": "Professional production",
    "role": "Lead for BTS content creation; on-set assistance.",
    "tension": "Create BTS material that adds editorial value around an international-talent production instead of functioning as generic set coverage.",
    "approach": "Led the BTS content plan and capture priorities, while assisting the main production on set.",
    "output": "BTS content package and on-set production support.",
    "significance": "A focused example of Felix taking ownership within a larger commercial-production system.",
    "evidence": "Confirmed BTS-content lead and on-set support from Felix's ForArt internship on an international-talent production.",
    "source": "Direct clarification from Felix; ForArt portfolio sources",
    "priority": "A: Flagship candidate",
    "feature": false,
    "tags": [
      "Production",
      "Content & Channels"
    ],
    "assetFilename": "felix-p28-vinfast-kim-yoo-jung-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Video or keyframe for VinFast × Kim Yoo-jung"
  },
  {
    "id": "P29",
    "title": "Relax & Recharge",
    "slug": "relax-and-recharge",
    "year": "2023–2024",
    "publicType": "Event & experience",
    "role": "Head Organiser as elected Student Rights & Welfare Officer.",
    "tension": "Create an inclusive Christmas and New Year recreation series that supported student connection across different identities and backgrounds.",
    "approach": "Built the event around recreation, connection, inclusion, and diversity; coordinated RMIT’s Diversity & Inclusion Office and Student Life.",
    "output": "Student event series and partner coordination.",
    "significance": "Extends Felix’s social-advocacy work from a focused exhibition into seasonal community programming.",
    "evidence": "Role and partner offices confirmed by Felix, presented as inclusive event programming under the Student Council.",
    "source": "Direct clarification from Felix",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Events & Leadership",
      "Sustainability & Advocacy"
    ],
    "assetFilename": "felix-p29-relax-recharge-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Event evidence for Relax & Recharge"
  },
  {
    "id": "P30",
    "title": "Scienceporium: Cybersecurity Resilience for Vietnamese SMEs",
    "slug": "scienceporium-cybersecurity-resilience",
    "year": "2023",
    "publicType": "Top 15, Map the System 2023",
    "role": "Researcher and Analyst within a five-person team.",
    "tension": "How can Vietnamese SMEs strengthen cybersecurity resilience during a COVID-19-driven cybercrime surge when budgets, specialist skills, awareness, policy support, and access to tailored solutions are all constrained?",
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
      "Strategy & Research",
      "Culture & Editorial"
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
    "role": "Team researcher / analyst.",
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
    "title": "Cybersecurity Capacity Development & SME Access to Bank Loans in Pakistan",
    "slug": "cybersecurity-sme-loans-pakistan",
    "year": "2023",
    "publicType": "Applied PR research",
    "role": "Researcher: individual literature and problem framing; four-person mixed-methods team research.",
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
export const filters = ["All", "Script & Story", "Strategy & Research", "Production", "Events & Leadership", "Project Management", "Sustainability & Advocacy", "Culture & Editorial", "Content & Channels"];

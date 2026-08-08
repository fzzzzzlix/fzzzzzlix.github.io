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
    "role": "Writer, director, and editor; some text also says camera/solo production.",
    "tension": "Create a coming-of-age story without relying on generic nostalgia.",
    "approach": "Used a three-act structure with a perspective shift rather than a conventional plot twist; carried the work from script through on-set direction and final edit.",
    "output": "Completed short film, script, and final edit.",
    "significance": "The film won First Prize for audience engagement (Giải Nhất lượt tương tác) at the school’s Nhật Hạ graduation-season video showcase. The award recognised the class collective (D5 K60); Felix wrote, directed, and edited the film.",
    "evidence": "First Prize for audience engagement, verified by the award-ceremony photograph. The prize was made to the class collective (D5 K60); Felix’s individual role was writer, director, and editor.",
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
    "publicType": "Client project",
    "role": "Script writer.",
    "tension": "Balance emotional wedding storytelling and commercial messaging without becoming sentimental or product-led.",
    "approach": "Centered the narrative on a small human decision rather than a large proposal spectacle.",
    "output": "Short-film script that reportedly passed brief, internal review, and client approval.",
    "significance": "Shows restraint in branded storytelling; the produced/published status is not consistently stated.",
    "evidence": "A real-company client brief completed as a capstone. Felix wrote the script; it passed brief, internal review and client approval.",
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
    "publicType": "Client project",
    "role": "Script writer, producer, and voice artist.",
    "tension": "Maintain narrative clarity and engagement across a 40+ minute audio format without visual support.",
    "approach": "Structured each episode around one closed question and three open questions, with segments arranged as an emotional/editorial arc.",
    "output": "Podcast scripts and audio production for a series on sustainable energy in a global context.",
    "significance": "Evidence of long-form structure, voice delivery, and editorial discipline.",
    "evidence": "A produced podcast series on sustainable energy, demonstrating long-form audio structure, scripting and voice delivery.",
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
    "publicType": "Board-game/FMCG-style campaign",
    "role": "Script writer, storyboard contributor, and Production Director in one source.",
    "tension": "Find a distinctive Tet moment in a crowded seasonal communications environment.",
    "approach": "Moved away from the overused family-reunion trope toward a more specific playable/behavioral moment.",
    "output": "Campaign idea, script, and storyboard.",
    "significance": "Demonstrates seasonal cultural differentiation; the exact brand/category and team role need tightening.",
    "evidence": "A seasonal Tết campaign concept, script and storyboard, presented as creative development built around a specific playable moment.",
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
    "id": "P08",
    "title": "MAGGI Tết 2026 TVC",
    "slug": "maggi-tet-2026",
    "year": "2025",
    "publicType": "FMCG campaign proposal",
    "role": "Script writer and storyboard creator.",
    "tension": "Differentiate a Tet FMCG story amid a highly saturated seasonal category.",
    "approach": "The master content pack groups this with Cleaning Frenzy and says the script used a more specific moment than the generic ‘family reunion’ territory.",
    "output": "Proposed TVC script and illustrated storyboard.",
    "significance": "Must be kept separate from the 2025 MAGGI Recipe Solution research case.",
    "evidence": "A proposed Tết TVC script and illustrated storyboard, kept distinct from the 2025 MAGGI Recipe Solution research case.",
    "source": "felixphan.portfolio2026/index.html; felix-portfolio/content/content-pack.md",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Script & Story"
    ],
    "assetFilename": "felix-p08-maggi-tet-2026-tvc-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Video or keyframe for MAGGI Tết 2026 TVC"
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
    "publicType": "Client project",
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
    "publicType": "Client project",
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
    "title": "MAGGI Recipe Solution Competitive & Consumer Analysis",
    "slug": "maggi-recipe-solution",
    "year": "2025",
    "publicType": "Client project",
    "role": "Researcher and strategist.",
    "tension": "Diagnose why MAGGI had awareness but weak affinity compared with Barona and Cholimex.",
    "approach": "Analyzed 74 posts, coded 755 comments in NVivo, reviewed 82 e-commerce product reviews, built keyword comparisons and a customer journey, then proposed ‘Authentic Convenience’ and a two-tier influencer strategy.",
    "output": "Competitive/consumer analysis, charts, positioning direction, #MaggiNhanhMaNgon concept, and influencer recommendations.",
    "significance": "The analysis surfaced a weak-affinity signal, for example 364 MAGGI Facebook comments with only 73 positive, pointing to an authentic-convenience direction.",
    "evidence": "An academic client-brief research project. The figures come from Felix's own analysis of 74 posts, 755 NVivo-coded comments and 82 product reviews.",
    "source": "felixphan-bsc/index.html; felixphan-muse/index.html; felix-portfolio/content/content-pack.md",
    "priority": "A: Flagship candidate",
    "feature": true,
    "tags": [
      "Strategy & Research"
    ],
    "assetFilename": "felix-p13-maggi-recipe-solution-competitive-cons-evidence-3x2-v01.jpg",
    "assetRatio": "Web: 3:2, 1800 × 1200 px. PDF: Fit inside a 3:2 frame, minimum 1800 × 1200 px.",
    "assetRule": "Evidence exception: Fit/contain inside the frame with wine or ivory padding. Do not crop text, charts, logos, dates, or source labels. Never stretch.",
    "alt": "Report or data proof for MAGGI Recipe Solution Competitive & Consumer Analysis"
  },
  {
    "id": "P14",
    "title": "Equal in Ao Dai / Gender Equality Magazine",
    "slug": "equal-in-ao-dai",
    "year": "2023",
    "publicType": "Client project",
    "role": "Creative Director, editorial researcher, and photo-direction lead.",
    "tension": "Create a gender-equality publication without making the reader feel lectured.",
    "approach": "Used áo dài as the visual anchor and inverted conventional gender-expression expectations.",
    "output": "Concept deck, editorial spread, magazine/flipbook, and associated photo direction.",
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
    "id": "P15",
    "title": "Photoshoots Series",
    "slug": "photoshoots-series",
    "year": "2023-2024",
    "publicType": "Creative direction / photography",
    "role": "Concept and full photo direction.",
    "tension": "Communicate gender-equality themes visually across multiple shoots.",
    "approach": "Designed three shoots around a shared conceptual direction linked to the magazine project.",
    "output": "A photo series across three shoots developed under a shared conceptual direction.",
    "significance": "Provides visual-direction evidence developed alongside the gender-equality editorial concept.",
    "evidence": "A photo-direction series developed around the gender-equality editorial concept.",
    "source": "felixphan.portfolio2026/index.html",
    "priority": "B: Supporting proof",
    "feature": false,
    "tags": [
      "Culture & Editorial",
      "Content & Channels"
    ],
    "assetFilename": "felix-p15-photoshoots-series-cover-16x9-v01.jpg",
    "assetRatio": "Web and PDF landscape: 16:9, 1600 × 900 px minimum. Optional mobile crop: 4:5, 1200 × 1500 px.",
    "assetRule": "Photography and video: Crop to Fill with preserved proportions. Website uses object-fit: cover; default object-position 50% 50%. Never stretch or set independent X/Y scale.",
    "alt": "Project evidence for Photoshoots Series"
  },
  {
    "id": "P16",
    "title": "Patriotic Rap as New Red Music",
    "slug": "patriotic-rap",
    "year": "2023",
    "publicType": "Client project",
    "role": "Solo researcher/proposal author.",
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
    "year": "2024",
    "publicType": "Client project",
    "role": "Co-researcher.",
    "tension": "Address education inequality between urban and rural Vietnam for Teach For Viet Nam and align recommendations with SDG 4.",
    "approach": "Developed a multi-stakeholder, cross-sector solution framework.",
    "output": "Policy white paper.",
    "significance": "Adds policy research and structured recommendation writing to the profile.",
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
    "publicType": "Client project",
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
    "publicType": "Client project",
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
    "publicType": "Client project",
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
    "publicType": "Client project",
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
    "title": "Little Me: RMIT Mental-Wellness Exhibition",
    "slug": "little-me",
    "year": "3-5 April 2024",
    "publicType": "Event & experience",
    "role": "Head Organiser as RMIT Student Council Student Rights & Welfare Officer; led a 27-person team.",
    "tension": "Create an accessible mental-wellness experience during a high-stress semester without making it feel like a formal intervention.",
    "approach": "Designed a self-paced interactive exhibition with Draw Little Me, DIY Calm Jar, and a shared gallery; coordinated RMIT’s Diversity & Inclusion Office, Wellbeing Department, Student Life Department, RMIT Current Media Club, and independent RMIT artists.",
    "output": "Three-day exhibition, fundraising, operations, partner coordination, and cross-platform promotion.",
    "significance": "Reported 316 visitors, around 34.5k organic reach, a 6.96% return rate, VND 18 million raised, and the 300+ visit KPI reached on Day 2.",
    "evidence": "Role, partners and event delivery confirmed by Felix. Reported reach and visitor figures come from the event's own reporting.",
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
    "alt": "Event evidence for Little Me: RMIT Mental-Wellness Exhibition"
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
    "role": "Founder; designed an organisation spanning six departments.",
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
    "publicType": "Project management capstone",
    "role": "Project Manager; Individual Report Author; Five-Person Pitch Team Lead.",
    "tension": "Design a community-based tourism venture that creates cultural connection without turning culture into a commodity.",
    "approach": "Developed a full project management system covering scope, deliverables, people, finance, stakeholder governance, risk, quality and schedule. The workflow moved from Project Manager to deliverable PICs to team members with double review and weekly meetings across the system.",
    "output": "Project management report covering scope to launch; modelled financial plan of approximately VND 2.594 billion; risk register with 30 identified risks; project schedule; pitch deck developed by a five-person team. Official launch date in project plan: 4 October 2025.",
    "significance": "Demonstrates structured project management — managing the work, not just describing the idea. Financial figures are planning calculations, not actual commercial results.",
    "evidence": "An academic project-management capstone. The financial figures (~VND 2.594B) are planning models rather than commercial results; the pitch deck was developed with the full five-person team.",
    "source": "source-materials/felix-portfolio-github-baseline-2026-08-07/case-be-local.html; MIGRATION_BASELINE.md",
    "proofLinks": [
      {
        "label": "View pitch deck (Canva)",
        "url": "https://www.canva.com/design/DAGlkXNbHM4/OTW2amJs3KP1o6_sYLBelQ/view?embed"
      }
    ],
    "priority": "A: Flagship candidate",
    "feature": true,
    "tags": [
      "Project Management",
      "Sustainability & Advocacy"
    ],
    "assetFilename": "p31-be-local-web.jpg",
    "assetRatio": "Web and PDF landscape: 16:9. Original source: PNG at 4.24 MB (p31-be-local.png). Web copy: p31-be-local-web.jpg (~379 KB JPEG).",
    "assetRule": "Photography and evidence: Crop to Fill with preserved proportions. Keep the project title legible inside the central safe zone. Never stretch or set independent X/Y scale.",
    "alt": "Be Local community-based tourism project cover — project management capstone, Hà Giang, Vietnam"
  }
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));
export const featureProjects = projects.filter((project) => project.feature);
export const filters = ["All", "Script & Story", "Strategy & Research", "Production", "Events & Leadership", "Project Management", "Sustainability & Advocacy", "Culture & Editorial", "Content & Channels"];

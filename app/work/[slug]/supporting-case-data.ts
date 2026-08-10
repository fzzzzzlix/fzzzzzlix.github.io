import { asset } from "../../base-path";

/*
 * Supporting-case extension data.
 *
 * Keyed by project id. Provides the long-form / evidence layer that does NOT
 * belong in app/data.ts: the density mode, an opening deck, the capability
 * close, an honest evidence-status line, evidence-needs, authentic embeds and
 * figures, and extra proof links.
 *
 * Rules honoured here (see GLOBAL/01_EDITORIAL_AND_CLAIM_RULES):
 * - no fabricated metrics, campaign stills or approvals;
 * - academic work is never framed as commissioned/employment;
 * - team output keeps an explicit ownership boundary;
 * - only authentic, user-supplied links/artifacts are embedded.
 * Typography convention: no em dashes, no middot separators (use commas/colons).
 */

export type SupportingDensity = "D1" | "D2" | "D3";

export type CaseEmbed = {
  title: string;
  src: string;
  fallbackUrl: string;
  fallbackLabel: string;
  portrait?: boolean;
  aspect?: string;
};

export type CaseFigure = {
  src: string;
  alt: string;
  caption: string;
  tag: string;
  fit?: "cover" | "contain";
  href?: string;
};

/**
 * Extra narrative section, rendered after "The significance" and before the
 * role boundary. Used to give research cases (P33/P34) and P17 their own beats
 * (method, limitations, research-to-editorial) with an optional embed/figure.
 */
export type CaseSectionBlock = {
  eyebrow: string;
  title: string;
  body: string[];
  embed?: CaseEmbed;
  figure?: CaseFigure;
};

export type SupportingCaseExtension = {
  density: SupportingDensity;
  /** Extra context chip after the public type, e.g. "ForArt internship". */
  context?: string;
  /** One-line opening deck. */
  deck: string;
  /** Strongest capability takeaway. */
  capability: string;
  /** Team/individual boundary note, shown only where it matters. */
  ownership?: string;
  /** Honest, public-facing evidence-status sentence. */
  evidenceStatus: string;
  /** What documentary proof would strengthen the case. */
  evidenceNeeds?: string;
  /** Authentic, user-supplied external proof links. */
  proofLinks?: { label: string; url: string }[];
  /** Authentic embeds (Canva / Google Drive / Heyzine). */
  embeds?: CaseEmbed[];
  /** Authentic evidence figures. */
  figures?: CaseFigure[];
  /** Extra narrative sections (used by research cases). */
  sections?: CaseSectionBlock[];
  /** Optional label overrides so research cases read as research, not ad case studies. */
  tensionLabel?: string;
  approachEyebrow?: string;
  approachTitle?: string;
  outputEyebrow?: string;
  outputTitle?: string;
  significanceEyebrow?: string;
  significanceTitle?: string;
};

// Google Drive file ids embed via /preview; the /view URL is the fallback link.
const drive = (id: string) => ({
  preview: `https://drive.google.com/file/d/${id}/preview`,
  view: `https://drive.google.com/file/d/${id}/view`,
});
// Canva designs embed via /view?embed; the plain /view URL is the fallback.
const canva = (id: string) => ({
  embed: `https://www.canva.com/design/${id}/view?embed`,
  view: `https://www.canva.com/design/${id}/view`,
});

const p04Audio = drive("1nq2AQ3IEOaVSpAMQxCcF3gIGOieno5vy");
const p04Script = drive("1EF6xl_W48wzS19T1MrWpWVll4K3Wya1Y");
const p05Proposal = drive("1VR8HPyHAp0IKt0rtfvOPiCXH0Z7mMrHY");
const p06Proposal = drive("1VqwelVa4SsKy31Kk0B322Bca56x4Eao_");
const p03Script = drive("101sk5uZL6O0_8amn9njj2z7MAom7vQxD");
const p16Report = drive("1M_brfJmCpQNmpbbaYOb0KCP322qdaNUR");
const p03Deck = canva("DAF5Y5-EE1A/tNrfDkFeLbwZIISKk-palQ");
const p07Proposal = canva("DAGb3yxIPB0/QsE2Yl_w3sTR5SuiWBT7ng");
const p17Paper = canva("DAGRgS3yo7w/IvrC73qbxRVFsqP_ttSfgQ");
const p17Article = drive("13MC1iP8GQYWd3L-Kvwu9fF2V0adka2c_");
const p33Deck = canva("DAFpWNBZwwQ/XXM6PQ5juyHrC4H28iY6oA");
const p34Deck = canva("DAFuJ7rWms0/Bs6LW63w-nybhCnHZAa-sQ");

const P01_CASE = "https://fzzzzzlix.github.io/felix-portfolio/case-studies/quan-nha-haha.html";
const P14_MAGAZINE = "https://heyzine.com/flip-book/b9a49ece03.html";

export const SUPPORTING_CASES: Record<string, SupportingCaseExtension> = {
  P01: {
    density: "D1",
    deck:
      "An independent, speculative episode treatment for the entertainment show Quán Nhà Haha, worked out as a full case: how research, cast mechanics and sponsor logic can coexist without flattening cultural material.",
    capability: "Entertainment development, cultural research and treatment writing.",
    ownership:
      "Self-initiated portfolio work by Felix. The cast (Jun Phạm, Rhymastic, Bùi Công Nam, Ngọc Thanh Tâm, Duy Khánh) and VCB DigiBank are named speculatively; none is attached to this concept.",
    evidenceStatus:
      "Supported as a self-initiated concept. This is independent, speculative development, not a Yeah1, VCB, VTV, Mango+ or Quán Nhà Haha commission.",
    approachEyebrow: "The build",
    approachTitle: "How the episode was engineered",
    outputEyebrow: "The output",
    outputTitle: "What the treatment delivers",
    sections: [
      {
        eyebrow: "Research and guardrails",
        title: "Reading Huế before writing a single scene",
        body: [
          "The treatment starts from cultural research, not a set-piece. Nhã nhạc cung đình, Vietnam's first UNESCO intangible-heritage listing (2003), is treated as a living discipline of timing and restraint rather than a backdrop, and the Perfume River, dragon boats and imperial setting are used because Huế offers a visual space no other city can.",
          "The core guardrail is written in as a production risk: heritage and its artisans must never read as props. Artisans are credited on screen, their dialogue is unscripted, and the design allows them to push back on the cast on camera, so the cultural material keeps its authority.",
        ],
      },
      {
        eyebrow: "Episode engine",
        title: "One engine, three acts, escalating friction",
        body: [
          "The spine is an engine, not a fixed plot: a modern, loud, slightly undisciplined cast tries to host one ceremonial night on the river and discovers that keeping a tradition means protecting the gesture that gives it meaning. The cast improvises around the engine instead of reading lines.",
          "It runs across three acts in a single day. Act 1, the wrong rhythm: the cast arrives with street-level energy and learns the day is a test, not a tour. Act 2, learning to host not perform: cooking and Nhã nhạc become mirrors of the same lesson, restraint and patience, and the first sponsor idea is tried and rejected. Act 3, a new gesture not a gimmick: a ceremonial dinner and a flower-offering moment resolve the tension.",
        ],
      },
      {
        eyebrow: "Cast functions",
        title: "Five people, five designed scenes",
        body: [
          "Each cast member gets a designed scene with real stakes, not a personality label. Jun Phạm anchors the kitchen and learns that restraint is trust; Ngọc Thanh Tâm learns by hand across a wordless, cross-generational moment with a culinary artisan; Rhymastic, a technical musician, is taught in reverse when an artisan answers his search for a hook with 'my music waits'.",
          "Bùi Công Nam is the emotional bridge, learning one phrase on the đàn tranh and writing a short thank-you song that becomes the episode's payoff, and Duy Khánh hosts without a script, held to a fail, practice-fail, recovery arc that also yields three distinct short-form cuts.",
        ],
      },
      {
        eyebrow: "Sponsor integration",
        title: "VCB DigiBank as an arc, not an end tag",
        body: [
          "The sponsor moves through a full arc rather than a closing logo. Problem: the cast wants to help guests thank the artisans. Bad solution: a QR standee at the boat door, which an artisan quietly notes 'feels like paying a bill'. Pushback: an elder reframes the historical flower-offering, where money was secondary to the gesture.",
          "Better solution: a physical flower with a small QR tag on the back, so the hand-to-hand gesture is kept and the payment is digitised only after it. The brand becomes infrastructure between two people, and the logo appears only at the moment of scanning, never before. The integration works because the cast finds it after a failure, rather than being handed it.",
        ],
      },
      {
        eyebrow: "Short-form plan",
        title: "Six cutdowns designed with the episode",
        body: [
          "Six short-form cuts are designed in parallel with the episode, not salvaged afterwards: a cold-open 'when a rapper meets Nhã nhạc', a food-fail cut in the kitchen, a no-script MC behind-the-scenes cut, a heart cut of Bùi Công Nam learning from a 70-year-old artisan, a cultural cut on the historical flower ritual, and the payoff cut of the first flower being handed over before the scan.",
        ],
      },
      {
        eyebrow: "Production risks",
        title: "Naming what could break, and the fix",
        body: [
          "The treatment closes on risks and fixes rather than avoiding the hard parts: cultural sensitivity (artisans credited, unscripted, allowed to push back), sponsor overexposure (logo only at the scan, brand-safe line written), Act 2 pacing (edit on the mirror structure, not the chaos), over-acting (the ambassadors are simply the first guests, no imperial cosplay), and weather and audio on the night river (an indoor heritage-house backup, with wind noted in the audio plan).",
        ],
      },
    ],
    proofLinks: [{ label: "Open the full self-initiated case study", url: P01_CASE }],
  },

  P03: {
    density: "D3",
    deck: "A four-person academic pitch team's capstone response to a PNJ brand brief. Felix's contribution was scriptwriting: making branded wedding storytelling feel human before it feels promotional. The script exists; client approval and any produced film are not claimed.",
    capability: "Branded scriptwriting.",
    ownership: "Four-person academic pitch team. Felix's direct contribution: scriptwriting.",
    evidenceStatus: "Academic capstone work by a four-person pitch team. The final script exists; client approval is not documented and is not claimed.",
    evidenceNeeds: "The tutor or client feedback would upgrade this from concept to verified delivery.",
    embeds: [
      {
        title: "PNJ Mùa Cưới pitch deck",
        src: p03Deck.embed,
        fallbackUrl: p03Deck.view,
        fallbackLabel: "Open the pitch deck (Canva)",
      },
    ],
    proofLinks: [{ label: "Read the script (Google Drive)", url: p03Script.view }],
  },

  P04: {
    density: "D3",
    deck: "A long-form audio project focused on keeping sustainable-energy discussion structured when there is no visual layer to carry attention.",
    capability: "Long-form audio storytelling and sustainability communication.",
    ownership: "Felix's role: researcher and scriptwriter. Team context: a group academic podcast.",
    evidenceStatus: "A team academic podcast, with the audio and script embedded below. Felix is credited as researcher and scriptwriter.",
    evidenceNeeds: "The episode list, exact runtime and full team credits.",
    embeds: [
      {
        title: "Sustainable Energy Series, audio",
        src: p04Audio.preview,
        fallbackUrl: p04Audio.view,
        fallbackLabel: "Listen to the audio (Google Drive)",
      },
      {
        title: "Sustainable Energy Series, script",
        src: p04Script.preview,
        fallbackUrl: p04Script.view,
        fallbackLabel: "Read the script (Google Drive)",
      },
    ],
  },

  P05: {
    density: "D1",
    context: "ForArt internship",
    deck: "A professional proposal showing how a technical university programme can be translated from recruitment brief into a human, pitchable TVC story.",
    capability: "Lead creative on commercial proposal development.",
    evidenceStatus:
      "A professional proposal from Felix's ForArt internship, with representative slides shown below and the full proposal embedded. The lead-creative role is confirmed; the production status is not verified.",
    evidenceNeeds: "The final production status or a public output link, and supervisor or team credit.",
    approachEyebrow: "The idea",
    approachTitle: "From recruitment brief to a human story",
    outputEyebrow: "The work",
    outputTitle: "Idea, script and pitch, slide by slide",
    figures: [
      {
        src: asset("/images/cases/p05/p05-creative-idea.jpg"),
        alt: "BUV Data Science and AI proposal slide 'The Futuristic Wave', setting out the key message, concept and key visual for the programme TVC.",
        caption: "The creative idea: 'The Futuristic Wave', built from a key message, a concept and a recurring wave metaphor for the Data Science and AI programme.",
        tag: "Creative idea",
        fit: "contain",
      },
      {
        src: asset("/images/cases/p05/p05-character.jpg"),
        alt: "BUV proposal character slide describing the protagonist: a curious, confident male high-school student aged 16 to 18 in Hanoi.",
        caption: "The human entry point: a 16 to 18-year-old prospective student, chosen so a technical programme reads as a personal journey rather than a spec sheet.",
        tag: "Human entry point",
        fit: "contain",
      },
      {
        src: asset("/images/cases/p05/p05-storyline.jpg"),
        alt: "BUV proposal storyline slide breaking the TVC into scene clusters with shot-by-shot direction.",
        caption: "Script architecture: the TVC broken into scene clusters with shot-level direction, tracing the student from classroom to BUV to a project stage.",
        tag: "Script architecture",
        fit: "contain",
      },
    ],
    embeds: [
      {
        title: "BUV new-programmes TVC proposal",
        src: p05Proposal.preview,
        fallbackUrl: p05Proposal.view,
        fallbackLabel: "Open the proposal (Google Drive)",
      },
    ],
    sections: [
      {
        eyebrow: "Production status",
        title: "Where the work stops",
        body: [
          "This is a pitch-stage proposal from the internship: a decoded brief, a creative idea, a scripted TVC and pitch-ready packaging. It is not presented as a produced or client-approved commercial, and no broadcast output is claimed.",
        ],
      },
    ],
  },

  P06: {
    density: "D3",
    context: "ForArt internship",
    deck: "Collaborative commercial writing: developing a leader-owned pharmaceutical direction into a clearer script and client-ready proposal.",
    capability: "Collaborative commercial scriptwriting.",
    ownership: "Felix's role: creative support, writing from an approved lead direction. Team context: a ForArt creative team.",
    evidenceStatus: "A professional proposal from Felix's ForArt internship, embedded below, developing an approved internal direction.",
    evidenceNeeds: "The production or approval status, and team credits.",
    embeds: [
      {
        title: "Hapacol iTVC proposal",
        src: p06Proposal.preview,
        fallbackUrl: p06Proposal.view,
        fallbackLabel: "Open the proposal (Google Drive)",
      },
    ],
  },

  P07: {
    density: "D3",
    deck: "A Tết capstone concept built around finding a specific behavioural moment instead of defaulting to the season's most familiar storytelling tropes.",
    capability: "Seasonal campaign storytelling.",
    ownership:
      "Felix's formal team-page credit is Production Director. Felix has additionally clarified script and storyboard contribution. Team context: a student campaign team.",
    evidenceStatus:
      "An academic board-game renovation Tết campaign. The supplied team-credit page lists Felix as Production Director.",
    evidenceNeeds: "The full campaign deck.",
    embeds: [
      {
        title: "Cleaning Frenzy campaign proposal",
        src: p07Proposal.embed,
        fallbackUrl: p07Proposal.view,
        fallbackLabel: "Open the proposal (Canva)",
      },
    ],
    figures: [
      {
        src: asset("/images/cases/p07/p07-boardgame.jpg"),
        alt: "The Cleaning Frenzy board game, the product the academic Tết renovation campaign was built around.",
        caption: "Cleaning Frenzy, the board game the campaign set out to renovate for Tết, the brand and category the concept works from.",
        tag: "Board game",
        fit: "cover",
      },
      {
        src: asset("/images/cases/p07/p07-storyboard.jpg"),
        alt: "A storyboard page from the Cleaning Frenzy Tết campaign proposal.",
        caption: "A storyboard page from the Cleaning Frenzy Tết proposal.",
        tag: "Storyboard",
        fit: "contain",
      },
    ],
  },

  P10: {
    density: "D2",
    context: "ForArt internship",
    deck: "Creative and production support across three talent-led VinFast campaigns (VF7, VF5 and Kim Yoo-jung), with responsibility scoped to script and proposal, set assistance and BTS, and a BTS workstream led on the Kim Yoo-jung production.",
    capability: "Multi-campaign automotive production support and BTS.",
    ownership: "Felix's role: creative and production support across the three campaigns, and BTS content lead on the Kim Yoo-jung production. Team context: ForArt productions led by others.",
    evidenceStatus:
      "Professional production support from Felix's ForArt internship across script, proposal, on-set assistance and BTS content for three VinFast productions.",
    evidenceNeeds: "The final campaign links, a redacted proposal, BTS selects and team credits.",
  },

  P11: {
    density: "D3",
    deck: "An academic media analysis asking how comedy encodes criticism and how audiences may decode meaning beyond surface entertainment.",
    capability: "Cultural and media analysis.",
    evidenceStatus: "An academic media analysis, solo-authored.",
    evidenceNeeds: "The full report, course code and bibliography.",
  },

  P12: {
    density: "D3",
    deck: "A cultural-research case on what makes folk and Western pop elements feel integrated rather than merely juxtaposed.",
    capability: "Cultural research and media interpretation.",
    ownership: "Felix's role: co-researcher. Team context: a two-person research team.",
    evidenceStatus: "Academic cultural research completed with a co-researcher.",
    evidenceNeeds: "The full report or slides, and a clear statement of Felix's individual contribution.",
  },

  P14: {
    density: "D2",
    deck: "An editorial concept that used áo dài to turn gender-equality research into a magazine system, with a photo series shot to fill it.",
    capability: "Editorial direction and gender-equality communication.",
    ownership: "Felix's role: Creative Director, with editorial concept and research contribution and photo direction. The magazine and photo series are team-produced academic outputs under Felix's direction.",
    evidenceStatus:
      "An academic editorial project. The flipbook embedded below is the final magazine; commercial publication or distribution is not claimed.",
    evidenceNeeds: "The publication status and a per-member contribution statement.",
    embeds: [
      {
        title: "Equal in Ao Dai magazine",
        src: P14_MAGAZINE,
        fallbackUrl: P14_MAGAZINE,
        fallbackLabel: "Open the magazine flipbook",
      },
    ],
    figures: [
      {
        src: asset("/images/cases/p14/p14-magazine-cover.jpg"),
        alt: "A spread from the Equal in Ao Dai gender-equality magazine, using áo dài as the visual anchor.",
        caption: "The Equal in Ao Dai editorial, which used áo dài as the visual anchor and inverted conventional gender-expression cues. A team-produced academic output under Felix's creative direction.",
        tag: "Editorial",
        fit: "cover",
      },
      {
        src: asset("/images/cases/p14/p14-photoshoots.jpg"),
        alt: "Photography from the gender-equality magazine's own photo shoots.",
        caption: "The three-shoot photo series, directed by Felix to supply the magazine's own imagery.",
        tag: "Photo direction",
        fit: "cover",
      },
    ],
  },

  P16: {
    density: "D2",
    context: "COMM2497",
    deck: "A research proposal exploring patriotic rap through generational audience framing; it proves research design and conceptual thinking, not completed findings.",
    capability: "Research framing for culture and Gen Z.",
    evidenceStatus: "A complete academic research proposal, with its cover and framing shown below and the full document linked. It is a proposal: no study was conducted, so there are no findings.",
    evidenceNeeds: "Instructor feedback on the proposal.",
    figures: [
      {
        src: asset("/images/cases/p16/p16-proposal-cover.png"),
        alt: "RMIT assignment cover and first page of the patriotic-rap research proposal for COMM2497, authored by Nguyen Phan Thuc Huong, titled 'Investigating the Potential of Patriotic Rap as the New Red Music in Vietnam'.",
        caption: "The completed proposal (COMM2497): cover, background and framing for 'patriotic rap as the new red music'. This is a research proposal, not an executed study.",
        tag: "Research proposal",
        fit: "contain",
      },
    ],
    proofLinks: [{ label: "Read the proposal (Google Drive)", url: p16Report.view }],
  },

  P17: {
    density: "D2",
    deck: "An education-inequality brief taken two ways: an evidence-heavy policy white paper, and an eMagazine-format editorial feature that carries the same research to a general audience.",
    capability: "Policy research, evidence synthesis and translating research into public-facing writing.",
    ownership: "Felix's role: co-researcher on the white paper; sole author of the editorial feature. Team context: a co-authored white paper.",
    evidenceStatus:
      "An academic policy-research project completed with a co-researcher, plus a Felix-authored editorial feature. No commissioning, adoption or implementation by Teach For Viet Nam is implied, and the eMagazine styling is the artifact's format, not proof of VTV publication.",
    evidenceNeeds: "The tutor feedback, Felix's authored white-paper sections, and reconciliation of the 2023/2024 date shown on the document.",
    embeds: [
      {
        title: "Education Inequality white paper",
        src: p17Paper.embed,
        fallbackUrl: p17Paper.view,
        fallbackLabel: "Open the white paper (Canva)",
        portrait: true,
        aspect: "1 / 1.414",
      },
    ],
    sections: [
      {
        eyebrow: "Research to editorial",
        title: "Translating the white paper for a general audience",
        body: [
          "Alongside the policy white paper, Felix authored an eMagazine-format feature, “Rural Students Are Left Behind in Vietnam’s Tech Boom”, dated 20 August 2024, carrying the same rural and urban education and digital-access research into a public-facing narrative.",
          "The piece adopts a VTV.news eMagazine visual format. That is the artifact’s chosen style, not evidence of VTV publication, commissioning or newsroom work.",
        ],
        embed: {
          title: "Rural Students Are Left Behind in Vietnam's Tech Boom, editorial feature by Felix Phan",
          src: p17Article.preview,
          fallbackUrl: p17Article.view,
          fallbackLabel: "Read the editorial feature (Google Drive)",
          portrait: true,
          aspect: "1 / 1.3",
        },
      },
    ],
  },

  P18: {
    density: "D3",
    deck: "A capstone art-direction proposal translating the A50 national commemoration into a culturally grounded homepage-visual concept.",
    capability: "Cultural art direction.",
    evidenceStatus: "An academic art-direction concept. It is not an official Google Doodle and was not published by Google.",
    evidenceNeeds: "The full deck and tutor feedback.",
  },

  P19: {
    density: "D3",
    deck: "Three grouped academic brand briefs showing range in insight, big-idea development, visual concept and copy; not three launched client campaigns.",
    capability: "Big idea, visual concept and copy.",
    evidenceStatus: "Academic brand briefs, presented as grouped concept development rather than three launched client campaigns.",
    evidenceNeeds: "One project sheet per brand: brief, insight, idea, execution, role and team.",
  },

  P21: {
    density: "D3",
    deck: "A qualitative-research design for Vinamilk brand bonding: sampling, projective technique and interview protocol, with no fieldwork claimed.",
    capability: "Qualitative research design.",
    evidenceStatus:
      "An academic research design only. The 30 interviews were designed, not conducted, so the cited figures are background context, not Felix's findings.",
    evidenceNeeds: "The full proposal, cited literature and interview guide.",
  },

  P24: {
    density: "D2",
    context: "MBE internship",
    deck: "Professional event-operations work focused on SOPs, preparation coordination and logistics across repeated event cycles.",
    capability: "Event operations, SOPs and logistics.",
    evidenceStatus:
      "Professional event-operations work from Felix's MBE internship. Portfolio-supported; efficiency percentages are not published without a documented basis.",
    evidenceNeeds: "Confirmed internship dates, event names, supervisor verification and the basis for any efficiency percentage.",
  },

  P26: {
    density: "D2",
    context: "RMIT club",
    deck: "Student-organisation operations and marketing leadership across workshops and fundraising, with quantitative outcomes kept secondary until stronger records are attached.",
    capability: "Student event operations and marketing-team coordination.",
    evidenceStatus:
      "Student-organisation work. The quantitative outcomes come from a single portfolio and club record, so they are treated as reported, not independently verified.",
    evidenceNeeds: "Official role confirmation, event reports, fundraising records and analytics.",
  },

  P30: {
    density: "D1",
    context: "Map the System 2023",
    deck: "A systems-thinking case that maps cybersecurity resilience for Vietnamese SMEs through structures, stakeholders, feedback loops and leverage points.",
    capability: "Systems thinking, cybersecurity resilience and sustainability.",
    ownership: "Felix's role: researcher and analyst. Team context: a five-person team.",
    evidenceStatus:
      "Partially supported. Team membership and outputs are supported by the submission files, and a public announcement confirms Top 15 recognition. No national or global stage is claimed.",
    evidenceNeeds: "The exact competition stage beyond the public Top 15 wording.",
  },

  P33: {
    density: "D1",
    context: "COMM2892",
    deck: "A four-person academic study that turned media transparency from an abstract debate into a bounded analysis across online news, social media and television/video coverage.",
    capability: "Framing a researchable question, operationalising a concept, constructing a sample and keeping interpretation bounded by the study.",
    ownership:
      "Felix's role: team researcher and analyst. Team context: a four-person academic team; the artifact proves membership, not individual task allocation.",
    evidenceStatus:
      "A four-person academic team study for COMM2892. The figures (39 items, 131 citations, 68 sources) are as stated in the team deck. Solo research and representative measurement of all Vietnamese media are not claimed.",
    evidenceNeeds: "A statement of Felix's individual task allocation within the team.",
    tensionLabel: "The research question",
    approachEyebrow: "Method",
    approachTitle: "How the study was designed",
    outputEyebrow: "Sample and data",
    outputTitle: "What was collected and analysed",
    significanceEyebrow: "Findings",
    significanceTitle: "What the study reported",
    figures: [
      {
        src: asset("/images/cases/p33/p33-research-question.jpg"),
        alt: "Research-question slide from the COMM2892 team deck: 'How transparent is the Vietnamese media in reporting corruption from 2021 to 2023?', shown against prior studies and the identified knowledge gap.",
        caption: "The study's research question and knowledge gap, framing media transparency as the object of analysis. From the four-person COMM2892 team deck.",
        tag: "Research question",
        fit: "contain",
      },
      {
        src: asset("/images/cases/p33/p33-data-collection.jpg"),
        alt: "Data-collection slide: three transparency criteria (Tsetsura and Kruckeberg 2009), a July 2021 to July 2023 timeframe, and the final 39-item sample of 26 online newspaper, 8 social-media and 5 television/video items refined from 50 collected items.",
        caption: "The operationalised criteria and the final 39-item cross-platform sample (26 online, 8 social-media news, 5 television/video), refined down from 50 collected items.",
        tag: "Sample and method",
        fit: "contain",
      },
      {
        src: asset("/images/cases/p33/p33-analysis-method.jpg"),
        alt: "Data-analysis slide splitting the quantitative work into Information Source Analysis and News Publisher Analysis, each with its own analysis focus.",
        caption: "The two analytical axes the team ran in parallel: information-source diversity and credibility, and news-publisher accessibility and ownership.",
        tag: "Analysis framework",
        fit: "contain",
      },
    ],
    sections: [
      {
        eyebrow: "Operationalisation",
        title: "Turning transparency into observable criteria",
        body: [
          "Rather than debate transparency in the abstract, the team defined it as a set of observable criteria, then read the corpus against them: how many distinct information sources a report drew on, how credible and diverse those sources were, and how openly each publisher disclosed its own ownership and stance.",
          "The Soviet Communist Theory of the Press supplied the framing lens the assignment required, used to interpret the pattern rather than to pre-judge it.",
        ],
      },
      {
        eyebrow: "Analytical framework",
        title: "Two axes: source diversity and publisher transparency",
        body: [
          "Analysis ran on two axes in parallel. The first assessed the 131 citations across 68 primary information sources for diversity and credibility. The second assessed publisher transparency across the 39-item cross-platform sample of online news, social-media news and television/video.",
        ],
      },
      {
        eyebrow: "Limitations",
        title: "What the study does and does not claim",
        body: [
          "The 39-item sample is a bounded academic dataset, not a representative measurement of all Vietnamese media, and the analysis stops short of causal claims. The artifact proves team membership and the study's stated method and sample, not individual task allocation.",
        ],
      },
      {
        eyebrow: "The full deck",
        title: "The complete research presentation",
        body: [
          "The full COMM2892 team deck follows, covering the Vietnamese media context, the Soviet Communist Theory of the Press lens, and the finding and discussion sections in the team's own words.",
        ],
        embed: {
          title: "Vietnam media transparency research deck",
          src: p33Deck.embed,
          fallbackUrl: p33Deck.view,
          fallbackLabel: "Open the research deck (Canva)",
        },
      },
    ],
  },

  P34: {
    density: "D1",
    context: "MKTG1459",
    deck: "A research project that began as an individual literature and problem-framing study and grew into a four-person mixed-methods investigation combining quantitative analysis, social listening and social-network analysis.",
    capability: "Decomposing a difficult problem into research questions, choosing a method for each, triangulating evidence and communicating limitations.",
    ownership:
      "Felix's role: sole author of the individual literature review and problem framing; a member of the four-person team for the mixed-methods stages, where method ownership is shared.",
    evidenceStatus:
      "An academic project for MKTG1459. Assignment 1 is solely Felix's; Assignments 2 and 3 were a four-person team. The team presentation reports p = 0.02 and Multiple R = 0.48, a weak positive correlation, not causal proof.",
    evidenceNeeds: "A statement of Felix's individual task allocation within the team-stage methods.",
    tensionLabel: "The research problem",
    approachEyebrow: "Method",
    approachTitle: "How the study was designed",
    outputEyebrow: "Sample and data",
    outputTitle: "What was collected and analysed",
    significanceEyebrow: "Findings",
    significanceTitle: "What the study reported",
    figures: [
      {
        src: asset("/images/cases/p34/p34-regression.jpg"),
        alt: "Inferential-analysis slide: a scatter plot of cybersecurity capacity development against access to bank loans across 22 countries, with trendline y = 1.8342x + 5.449, R squared 0.2385, and p = 0.02.",
        caption: "The 22-country quantitative result: a statistically significant but weak positive correlation (Multiple R = 0.48, p = 0.02), reported by the team as an association, not causation.",
        tag: "Quantitative analysis",
        fit: "contain",
      },
      {
        src: asset("/images/cases/p34/p34-nvivo-themes.jpg"),
        alt: "NVivo AutoCode treemaps of 18 major positive and 16 major negative themes coded from 30 collected articles, with 7 themes selected for discourse analysis.",
        caption: "Social-listening analysis in NVivo: positive and negative theme hierarchies coded from the 30-article sample, with seven themes taken forward for discourse analysis.",
        tag: "Social listening (NVivo)",
        fit: "contain",
      },
      {
        src: asset("/images/cases/p34/p34-nodexl-network.jpg"),
        alt: "NodeXL social-network graph of the YouTube discussion, alongside a top-10 ranking of accounts by eigenvector centrality, created with NodeXL Pro.",
        caption: "Social-network analysis in NodeXL: the YouTube conversation graph and its most central accounts by eigenvector centrality.",
        tag: "Network analysis (NodeXL)",
        fit: "contain",
      },
    ],
    sections: [
      {
        eyebrow: "Individual ownership",
        title: "A solo start before the team stage",
        body: [
          "Assignment 1, the annotated bibliography, literature review and problem framing, was submitted solely by Felix. The mixed-methods stages that followed were a four-person team.",
        ],
        figure: {
          src: asset("/images/cases/p34/p34-assignment1-cover.png"),
          alt: "RMIT assignment cover page for MKTG1459 Assignment 1, Annotated Bibliography and Literature Review, listing a single student, Nguyen Phan Thuc Huong (S3978588), submitted 27 August 2023.",
          caption: "Assignment 1 was submitted solely by Felix (Nguyen Phan Thuc Huong, S3978588): the individual literature-review and problem-framing foundation before the team stage.",
          tag: "Individual ownership",
          fit: "contain",
        },
      },
      {
        eyebrow: "Method architecture",
        title: "One problem, three matched methods, triangulated",
        body: [
          "The team stage decomposed the problem into three research questions and matched a method to each: a 22-country secondary quantitative analysis for the macro relationship, social listening (Google Trends, BuzzSumo, NVivo) for public discourse, and YouTube social-network analysis in NodeXL for how the conversation propagated (1,749 users across 83 videos).",
          "The value is in the architecture: choosing distinct methods for distinct questions and reading the three evidence streams against each other rather than leaning on any single number.",
        ],
      },
      {
        eyebrow: "Limitations",
        title: "Weak correlation, no causal claim",
        body: [
          "The 22-country quantitative analysis returned a weak positive correlation (Multiple R = 0.48, p = 0.02). It is reported as an association, not proof of causation, and the listening and network samples are bounded academic datasets.",
        ],
      },
      {
        eyebrow: "The full presentation",
        title: "The complete mixed-methods presentation",
        body: [
          "The full MKTG1459 team presentation follows, carrying the background, the three method stages and the recommendations in the team's own words.",
        ],
        embed: {
          title: "Pakistan cybersecurity and SME-loans research presentation",
          src: p34Deck.embed,
          fallbackUrl: p34Deck.view,
          fallbackLabel: "Open the presentation (Canva)",
        },
      },
    ],
  },
};

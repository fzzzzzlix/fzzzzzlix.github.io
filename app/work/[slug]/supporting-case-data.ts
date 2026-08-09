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
    context: "Self-initiated",
    deck:
      "An independent episode-development case about how research, cast mechanics and sponsor logic can coexist without flattening cultural material.",
    capability: "Entertainment development, cultural research and treatment writing.",
    evidenceStatus:
      "Supported as a self-initiated concept. This is independent, speculative development, not a Yeah1, VCB, VTV, Mango+ or Quán Nhà Haha commission.",
    embeds: [
      {
        title: "Bếp Nhà Haha Gặp Bếp Cung Đình, full case study",
        src: P01_CASE,
        fallbackUrl: P01_CASE,
        fallbackLabel: "Open the full case study",
      },
    ],
  },

  P03: {
    density: "D3",
    deck: "A capstone screenplay exercise in making branded wedding storytelling feel human before it feels promotional.",
    capability: "Branded scriptwriting.",
    evidenceStatus: "Academic capstone work. The final script exists; client approval is not documented and is not claimed.",
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
    evidenceStatus: "A team academic podcast. Felix is credited as researcher and scriptwriter.",
    evidenceNeeds: "The final audio, episode list, exact runtime and full team credits.",
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
      "A professional proposal from Felix's ForArt internship. The lead-creative role is confirmed; the production status is not verified.",
    evidenceNeeds: "A redacted proposal or script, the final output or a public link, and supervisor credit.",
    embeds: [
      {
        title: "BUV new-programmes TVC proposal",
        src: p05Proposal.preview,
        fallbackUrl: p05Proposal.view,
        fallbackLabel: "Open the proposal (Google Drive)",
      },
    ],
  },

  P06: {
    density: "D3",
    context: "ForArt internship",
    deck: "Collaborative commercial writing: developing a leader-owned pharmaceutical direction into a clearer script and client-ready proposal.",
    capability: "Collaborative commercial scriptwriting.",
    ownership: "Felix's role: creative support, writing from an approved lead direction. Team context: a ForArt creative team.",
    evidenceStatus: "A professional proposal from Felix's ForArt internship, developing an approved internal direction.",
    evidenceNeeds: "A redacted script or proposal, the production or approval status, and credits.",
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
      "Felix's role: Production Director, plus script and storyboard contribution, credited on the team page. Team context: a student campaign team.",
    evidenceStatus:
      "An academic capstone Tết campaign for a board game. The supplied team-credit page lists Felix as Production Director.",
    evidenceNeeds: "The full deck and confirmation of brand and category detail.",
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
        src: asset("/images/cases/p07/p07-storyboard.jpg"),
        alt: "A storyboard page from the Cleaning Frenzy Tết campaign proposal.",
        caption: "A storyboard page from the Cleaning Frenzy Tết proposal.",
        tag: "Storyboard",
        fit: "contain",
      },
    ],
  },

  P09: {
    density: "D2",
    context: "ForArt internship",
    deck: "A cross-stage production-support case spanning proposal work, set assistance and BTS content rather than a single isolated deliverable.",
    capability: "Cross-stage production support.",
    ownership: "Felix's role: creative and production support. Team context: a ForArt production led by others.",
    evidenceStatus:
      "Professional production support from Felix's ForArt internship, spanning script contribution, proposal, on-set assistance and BTS content.",
    evidenceNeeds: "The final TVC link, a redacted proposal, BTS selects and a responsibility breakdown.",
  },

  P10: {
    density: "D2",
    context: "ForArt internship",
    deck: "Creative and production support inside a talent-led automotive campaign, with responsibility scoped to script and proposal, set assistance and BTS.",
    capability: "Automotive production support and BTS.",
    ownership: "Felix's role: creative and production support. Team context: a ForArt production led by others.",
    evidenceStatus:
      "Professional production support from Felix's ForArt internship across script, proposal, on-set assistance and BTS content.",
    evidenceNeeds: "The final campaign link, a redacted proposal, BTS selects and team credits.",
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
    ownership: "Felix's role: creative director, editorial researcher and photo-direction lead. Team context: an academic editorial project.",
    evidenceStatus:
      "An academic editorial project. The magazine and its photo series are Felix's; commercial publication or distribution is not claimed.",
    evidenceNeeds: "The final layout, publication status and a contribution statement.",
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
        src: asset("/images/p15-photoshoots.jpg"),
        alt: "Photography from the gender-equality magazine's own photo shoots.",
        caption: "The three-shoot photo series, directed by Felix to supply the magazine's imagery.",
        tag: "Photo direction",
        fit: "cover",
      },
    ],
  },

  P16: {
    density: "D3",
    deck: "A research proposal exploring patriotic rap through generational audience framing; it proves research design and conceptual thinking, not completed findings.",
    capability: "Research framing for culture and Gen Z.",
    evidenceStatus: "An academic research proposal only. No study was conducted, so there are no findings.",
    evidenceNeeds: "The complete proposal, research questions, method and instructor feedback.",
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

  P23: {
    density: "D2",
    context: "RMIT Student Council",
    deck: "A student-content leadership case showing progression from creating posts to designing channel formats, planning and handover.",
    capability: "Social-content leadership and channel operations.",
    evidenceStatus:
      "Real student-council content work. The role progression is confirmed; specific channel-performance figures are not published here.",
    evidenceNeeds: "Appointment records, analytics exports and a few post-level contribution links.",
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

  P27: {
    density: "D2",
    context: "ForArt internship",
    deck: "Creative and production support across a multi-talent VinFast campaign, with emphasis on coordination rather than inflated creative ownership.",
    capability: "Multi-talent production support.",
    ownership: "Felix's role: creative and production support. Team context: a ForArt production led by others.",
    evidenceStatus: "Professional production support from Felix's ForArt internship across script, proposal, on-set assistance and BTS content.",
    evidenceNeeds: "Final campaign links, a redacted proposal, BTS selects and team credits.",
  },

  P28: {
    density: "D1",
    context: "ForArt internship",
    deck: "A focused commercial-production case about making BTS content useful as editorial output, with Felix leading that BTS workstream rather than the main production.",
    capability: "BTS content lead and on-set production.",
    ownership: "Felix's role: BTS content lead and on-set assistance. Team context: the main commercial production was led by others.",
    evidenceStatus:
      "Professional production from Felix's ForArt internship. Felix led the BTS content and assisted on set, not the main commercial production or talent direction.",
    evidenceNeeds: "The BTS outputs, the final campaign link and supervisor or team credit.",
  },

  P29: {
    density: "D2",
    context: "RMIT Student Council",
    deck: "Inclusive student-event programming that treated recreation and connection as a design problem rather than only an event theme.",
    capability: "Inclusive event design and student wellbeing.",
    evidenceStatus:
      "A student wellbeing event series. The role and partner offices are confirmed by Felix; attendance and reach records are pending, and no therapeutic outcome is claimed.",
    evidenceNeeds: "The programme, attendance or outcome records, and partner confirmation.",
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
    density: "D2",
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
    embeds: [
      {
        title: "Vietnam media transparency research deck",
        src: p33Deck.embed,
        fallbackUrl: p33Deck.view,
        fallbackLabel: "Open the research deck (Canva)",
      },
    ],
    sections: [
      {
        eyebrow: "Limitations",
        title: "What the study does and does not claim",
        body: [
          "The 39-item sample is a bounded academic dataset, not a representative measurement of all Vietnamese media, and the analysis stops short of causal claims.",
        ],
      },
    ],
  },

  P34: {
    density: "D2",
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
    embeds: [
      {
        title: "Pakistan cybersecurity and SME-loans research presentation",
        src: p34Deck.embed,
        fallbackUrl: p34Deck.view,
        fallbackLabel: "Open the presentation (Canva)",
      },
    ],
    sections: [
      {
        eyebrow: "Individual ownership",
        title: "A solo start before the team stage",
        body: [
          "Assignment 1, the annotated bibliography, literature review and problem framing, was submitted solely by Felix. The mixed-methods stages that followed were a four-person team.",
        ],
      },
      {
        eyebrow: "Limitations",
        title: "Weak correlation, no causal claim",
        body: [
          "The 22-country quantitative analysis returned a weak positive correlation (Multiple R = 0.48, p = 0.02). It is reported as an association, not proof of causation, and the listening and network samples are bounded academic datasets.",
        ],
      },
    ],
  },
};

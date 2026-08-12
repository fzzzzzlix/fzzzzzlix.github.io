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
  /** Extra embeds/figures for sections that carry several (e.g. a deck plus final-work reels). */
  embeds?: CaseEmbed[];
  figures?: CaseFigure[];
  /** Render the body text and the embed side by side in two columns (stacks on mobile). */
  split?: boolean;
  /** Render the body text and this figure side by side in two columns (stacks on mobile). Extra figure/figures/embed still render below. */
  splitFigure?: CaseFigure;
  /** Render `figures` two-up in MediaPairs instead of stacked full-width. */
  pairFigures?: boolean;
};

export type SupportingCaseExtension = {
  density: SupportingDensity;
  /** Extra context chip after the public type, e.g. "ForArt internship". */
  context?: string;
  /** Optional hero-image link override (e.g. open the live case study or a Drive folder) instead of the full-size image. */
  heroHref?: string;
  /** Per-page suppression of the stock sections, so a page can run deck + embeds + lesson only. Opt-in; other pages unaffected. */
  hideTension?: boolean;
  hideApproach?: boolean;
  hideOutput?: boolean;
  hideSignificance?: boolean;
  /** Per-page suppression of hero meta chips (value kept intact for grid/label logic). */
  hideYear?: boolean;
  hideType?: boolean;
  hideContext?: boolean;
  /** Optional caption rendered under the hero image (supports inline emphasis). */
  heroCaption?: string;
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
const p16Infographic = canva("DAF2wZ-bRQg/aU6MJHryhYImuacYMBq4xQ");
const p18Concept = drive("1E7wOejME6fKV7odsjaL78uvjER4hoWmu");
const p18MindMap = canva("DAGW1x12XFE/D8lDHODOIuLojqyU0G6ktg");
const p21Deck = canva("DAFqNuywhYc/1WhT61jJSZ_bzqa-58kLQw");
const p21Proposal = drive("1Vc827NiqwyVeyHCbbpHsigwITHbHPy5n");
const p03Deck = canva("DAF5Y5-EE1A/tNrfDkFeLbwZIISKk-palQ");
const p07Proposal = canva("DAGb3yxIPB0/QsE2Yl_w3sTR5SuiWBT7ng");
const p17Paper = canva("DAGRgS3yo7w/IvrC73qbxRVFsqP_ttSfgQ");
const p17Article = drive("13MC1iP8GQYWd3L-Kvwu9fF2V0adka2c_");
const p33Deck = canva("DAFpWNBZwwQ/XXM6PQ5juyHrC4H28iY6oA");
const p34Deck = canva("DAFuJ7rWms0/Bs6LW63w-nybhCnHZAa-sQ");
const p10KimDeck = canva("DAHRwvuvzlc/-IHeEDGXxysHXkpi_wmD8A");
const p10Vf7Deck = canva("DAHRxxh70SY/ytvPYrS74D6m_qTLFeBJ2g");
const p10Vf5Deck = canva("DAHRx28j_9w/KCnBpyq-FLBZdWFT1VHgZw");
// Instagram reels embed via /reel/<id>/embed; the plain reel URL is the fallback.
const igReel = (id: string) => ({
  embed: `https://www.instagram.com/reel/${id}/embed`,
  view: `https://www.instagram.com/reel/${id}/`,
});
const p10KimReel1 = igReel("DCJUa5rJeiG");
const p10KimReel2 = igReel("DCOZHZ1pRq7");
const p11Doc = drive("1h_esiMrllZ9829aWPdjUjrEWUm2GvNQw");
const p12Deck = canva("DAHKTkbTOjo/57lpNQjlC1Wn5xyPd6F-CA");
// Facebook posts embed via the post plugin; the plain post URL is the fallback.
const fbPost = (url: string) => ({
  embed: `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=true&width=500`,
  view: url,
});
const p26IecPost = fbPost("https://www.facebook.com/share/p/1FMXXLcn8a/");
const p26PetalsPost = fbPost("https://www.facebook.com/share/p/1Bj85zMWGP/");
const p30Report = canva("DAFc7Whd14M/ouOoRt9Gi0-Dq6POCdt3kw");
const p30Deck = canva("DAFdrqtHg6Y/v1gnqs9VM_2x7LxvchbDyg");
const p30CausalMap = "https://www.kumu.io/hoaa/smes-cybersecurity-resilience-causal-loop-model-v20#cybersecurity-res-smes";

const P01_CASE = "https://fzzzzzlix.github.io/felix-portfolio/case-studies/quan-nha-haha.html";
const P14_MAGAZINE = "https://heyzine.com/flip-book/b9a49ece03.html";

export const SUPPORTING_CASES: Record<string, SupportingCaseExtension> = {
  P01: {
    density: "D1",
    heroHref: P01_CASE,
    hideTension: true,
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck:
      "A self-initiated episode treatment for the entertainment show Quán Nhà Haha, built around a ceremonial night on the Perfume River where Huế court music sets the rules and a modern cast has to learn to host it. Research becomes structure: a three-act engine, a designed scene for each cast member, and a bank sponsor that enters the story only after the cast earns it, never as an interruption. The full production-ready case, from cultural guardrails to six short-form cutdowns, is embedded below.",
    capability:
      "Building this taught me to treat cultural material as a discipline with its own timing, not a backdrop to decorate. I came away better at reading research into a workable structure, and at writing an episode where story, cast and sponsor all pull in the same direction under real production constraints.",
    ownership:
      "Self-initiated portfolio work by Felix. The cast (Jun Phạm, Rhymastic, Bùi Công Nam, Ngọc Thanh Tâm, Duy Khánh) and VCB DigiBank are named speculatively; none is attached to this concept.",
    evidenceStatus:
      "Supported as a self-initiated concept. This is independent, speculative development, not a Yeah1, VCB, VTV, Mango+ or Quán Nhà Haha commission.",
    embeds: [
      {
        title: "Quán Nhà Haha, full self-initiated case study",
        src: P01_CASE,
        fallbackUrl: P01_CASE,
        fallbackLabel: "Open the full case study in a new tab",
      },
    ],
  },

  P03: {
    density: "D3",
    heroHref: "https://drive.google.com/drive/folders/1iY9QtssZ1EflfxHWkMRDUmx5X6a86Kra?usp=drive_link",
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck: "A four-person academic pitch team's capstone response to a PNJ brand brief. Felix's contribution was scriptwriting: making branded wedding storytelling feel human before it feels promotional. The script exists; client approval and any produced film are not claimed.",
    capability:
      "Writing to a jewellery brief taught me how much restraint branded storytelling needs: the product lands harder when a real human decision is allowed to breathe first. It sharpened my sense of where a brand should enter a scene, and where it should stay out of the way.",
    ownership: "Four-person academic pitch team. Felix's direct contribution: scriptwriting.",
    evidenceStatus: "Academic capstone work by a four-person pitch team. The final script exists; client approval is not documented and is not claimed.",
    evidenceNeeds: "The tutor or client feedback would upgrade this from concept to verified delivery.",
    embeds: [
      {
        title: "PNJ Mùa Cưới script",
        src: p03Script.preview,
        fallbackUrl: p03Script.view,
        fallbackLabel: "Read the script (Google Drive)",
      },
      {
        title: "PNJ Mùa Cưới pitch deck",
        src: p03Deck.embed,
        fallbackUrl: p03Deck.view,
        fallbackLabel: "Open the pitch deck (Canva)",
      },
    ],
  },

  P04: {
    density: "D3",
    heroHref: "https://drive.google.com/drive/folders/12VriM4x-aIlAnSOmtRzbgZVB6KAApTqZ?usp=drive_link",
    hideOutput: true,
    deck: "A long-form audio project focused on keeping sustainable-energy discussion structured when there is no visual layer to carry attention.",
    capability:
      "This project grew my long-form audio storytelling: with no visuals to lean on, I had to hold attention through structure and pacing alone. It also deepened a genuine interest in sustainability advocacy, and in making a dense energy topic feel worth staying with.",
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
    heroHref: "https://drive.google.com/drive/folders/16Ztq8YRrKhiLU_CgmkwwyTGuRpdMkndF?usp=drive_link",
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck: "A professional proposal showing how a technical university programme can be translated from admission brief into a human, pitchable TVC story.",
    capability:
      "This was the first brief I carried the whole way, from decoding it to a pitch-ready script, and it taught me how much of creative work is really translation: turning an institution's goals into something a person can actually feel. I came away more comfortable owning an idea end to end and standing behind it in the room.",
    evidenceStatus:
      "A professional proposal from Felix's ForArt internship, with representative slides shown below and the full proposal embedded. The lead-creative role is confirmed; the production status is not verified.",
    evidenceNeeds: "The final production status or a public output link, and supervisor or team credit.",
    sections: [
      {
        eyebrow: "",
        title: "From admission brief to a human story",
        body: [
          "The brief was a brand-new degree; the real task was making a sixteen-year-old feel something about it. I read the admission brief for the promise underneath the curriculum, then built the idea around one recurring image, a wave, so Data Science and AI could land as momentum a student rides rather than a syllabus they sit through.",
        ],
        figure: {
          src: asset("/images/cases/p05/p05-creative-idea.jpg"),
          alt: "BUV Data Science and AI proposal slide 'The Futuristic Wave', setting out the key message, concept and key visual for the programme TVC.",
          caption: "The creative idea: 'The Futuristic Wave', built from a key message, a concept and a recurring wave metaphor for the Data Science and AI programme.",
          tag: "Creative idea",
          fit: "contain",
        },
      },
      {
        eyebrow: "",
        title: "Built to be pitched, not just watched",
        body: [
          "From there it had to become shootable: a protagonist chosen so the programme reads as a personal journey, and a TVC broken into scene clusters with shot-level direction that follows one student from a classroom to BUV to a project stage. Every piece was written to survive a pitch room, not just look good on a page.",
        ],
        figure: {
          src: asset("/images/cases/p05/p05-storyline.jpg"),
          alt: "BUV proposal storyline slide breaking the TVC into scene clusters with shot-by-shot direction.",
          caption: "Script architecture: the TVC broken into scene clusters with shot-level direction, tracing the student from classroom to BUV to a project stage.",
          tag: "Script architecture",
          fit: "contain",
        },
      },
      {
        eyebrow: "",
        title: "The full proposal",
        body: [],
        embed: {
          title: "BUV new-programmes TVC proposal",
          src: p05Proposal.preview,
          fallbackUrl: p05Proposal.view,
          fallbackLabel: "Open the proposal (Google Drive)",
        },
      },
    ],
  },

  P06: {
    density: "D3",
    context: "ForArt internship",
    heroHref: "https://drive.google.com/drive/folders/1-6vp9rLS4MkdFyVgQ3_5Z0_l33Qj1EAN?usp=drive_link",
    hideApproach: true,
    hideOutput: true,
    deck: "Collaborative commercial writing: developing a leader-owned pharmaceutical direction into a clearer script and client-ready proposal.",
    capability:
      "Writing under someone else's direction taught me to add value without taking it over, to expand and sharpen an idea while keeping its author's intent intact. It is a different discipline from owning a concept outright, and it made me a more useful person to have on a team.",
    ownership: "Felix's role: creative support, writing from an approved lead direction. Team context: a ForArt creative team.",
    evidenceStatus: "A professional proposal from Felix's ForArt internship, embedded below, developing an approved internal direction.",
    evidenceNeeds: "The production or approval status, and team credits.",
    sections: [
      {
        eyebrow: "",
        title: "Sharpening a lead idea into a client-ready script",
        body: [
          "The strategic direction was already set by the team lead, so my job was to make it play. I took the approved pharmaceutical angle and worked on its narrative flow, tightening how the story moved so an emotional idea could survive a tightly regulated category and still feel human.",
          "Then I packaged it for the client: a script and proposal built to be presented and defended, not just circulated internally.",
        ],
        embed: {
          title: "Hapacol iTVC proposal",
          src: p06Proposal.preview,
          fallbackUrl: p06Proposal.view,
          fallbackLabel: "Open the proposal (Google Drive)",
        },
      },
    ],
  },

  P07: {
    density: "D3",
    heroHref: "https://drive.google.com/drive/folders/1uqvOmfnJOF7zI39FaoaeyqI4IBqbHAcT?usp=drive_link",
    hideApproach: true,
    hideOutput: true,
    deck: "A TVC proposal for the Tết 2025 campaign of a boardgame brand, built around finding a specific behavioural moment instead of defaulting to the season's most familiar storytelling tropes.",
    capability:
      "This one pushed me to earn a Tết idea rather than default to the obvious one, and to build it around how the product actually behaves instead of bolting a brand onto a generic story. Steering it toward production also reminded me that a written beat means nothing until it becomes a shot.",
    ownership:
      "Felix's formal team-page credit is Production Director. Felix has additionally clarified script and storyboard contribution. Team context: a student campaign team.",
    evidenceStatus:
      "An academic board-game renovation Tết campaign. The supplied team-credit page lists Felix as Production Director.",
    evidenceNeeds: "The full campaign deck.",
    sections: [
      {
        eyebrow: "",
        title: "Finding the moment nobody films",
        body: [
          "Every Tết film reaches for the same reunion dinner. I went looking for the moment nobody romanticises, the pre-Tết clean, and made that the story: three bored siblings dragging through chores until the board game's Clock character snaps them into a Đông Hồ-styled game, where sweeping, scrubbing and swapping vases turn into timed missions.",
        ],
        figure: {
          src: asset("/images/cases/p07/p07-storyboard.jpg"),
          alt: "A storyboard page from the Cleaning Frenzy Tết campaign proposal.",
          caption: "A storyboard page from the Cleaning Frenzy Tết proposal.",
          tag: "Storyboard",
          fit: "contain",
        },
        figures: [
          {
            src: asset("/images/cases/p07/p07-onset.jpg"),
            alt: "On-set production still from the Cleaning Frenzy Tết TVC shoot.",
            caption: "On set: taking the storyboard into production.",
            tag: "On set",
            fit: "contain",
          },
        ],
      },
      {
        eyebrow: "",
        title: "Letting the product carry the story",
        body: [
          "The idea was to let the product do the work of the plot. The game does not interrupt the Tết scene, it rescues it, turning a chore into play before landing on the reunion the season is really about. I wrote it to be shot, storyboard and all, so the behavioural idea reads on screen and not only in a deck.",
        ],
        figure: {
          src: asset("/images/cases/p07/p07-felix-onset.jpg"),
          alt: "Felix on set during the Cleaning Frenzy Tết TVC production.",
          caption: "Felix on set, directing the shoot.",
          tag: "On set",
          fit: "contain",
        },
      },
      {
        eyebrow: "",
        title: "The full proposal",
        body: [],
        figure: {
          src: asset("/images/cases/p07/p07-pitch-day.jpg"),
          alt: "Felix presenting the Cleaning Frenzy campaign on pitch day.",
          caption: "Pitch day: presenting the campaign to the room.",
          tag: "Pitch day",
          fit: "contain",
        },
        embed: {
          title: "Cleaning Frenzy campaign proposal",
          src: p07Proposal.embed,
          fallbackUrl: p07Proposal.view,
          fallbackLabel: "Open the proposal (Canva)",
        },
      },
    ],
  },

  P10: {
    density: "D2",
    context: "ForArt internship",
    heroHref: "https://drive.google.com/drive/folders/1VThOulfFODyUX-lEd-i1VUWdOgysqLAh?usp=drive_link",
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck: "Three talent-led VinFast campaigns from one ForArt internship stretch, each asking for something different. Taken one at a time below: Kim Yoo-jung, then VF5, then VF7.",
    capability:
      "Working three campaigns at once taught me to be genuinely useful at whatever stage needed me, writing to someone else's direction on VF5 and VF7, then owning the behind-the-scenes plan end to end on Kim Yoo-jung. It is where I learned how a shoot really runs, and how much of good content is decided in the planning, before the camera turns on.",
    ownership: "Felix's role: creative and production support across the three campaigns, and BTS content lead on the Kim Yoo-jung production. Team context: ForArt productions led by others.",
    evidenceStatus:
      "Professional production support from Felix's ForArt internship across script, proposal, on-set assistance and BTS content for three VinFast productions.",
    evidenceNeeds: "The final campaign links, a redacted proposal, BTS selects and team credits.",
    sections: [
      {
        eyebrow: "",
        title: "Kim Yoo-jung: the BTS workstream I led",
        body: [
          "On the Kim Yoo-jung shoot I owned the behind-the-scenes workstream: two BTS films and ten reels, built to a lollipop, bubble-gum tone that matched the talent rather than the car spec sheet. I worked the capture out in advance, an interview-plus-backstage cut and a beat-driven BTS cut, each mapped into scene clusters so the crew knew what the edit would need before the camera rolled, then I was on set making sure those moments actually happened. The reels below are pieces that went live.",
        ],
        figure: {
          src: asset("/images/p28-vinfast.jpg"),
          alt: "Behind-the-scenes still from the VinFast x Kim Yoo-jung VF5 shoot.",
          caption: "A behind-the-scenes still from the shoot, part of the BTS workstream Felix planned and captured on set.",
          tag: "On-set evidence",
          fit: "cover",
          href: "https://drive.google.com/drive/folders/1VThOulfFODyUX-lEd-i1VUWdOgysqLAh",
        },
        figures: [
          {
            src: asset("/images/p10-onset-1.jpg"),
            alt: "Felix on set during a VinFast production shoot.",
            caption: "Felix on set, running the behind-the-scenes capture.",
            tag: "On set",
            fit: "cover",
          },
        ],
        embed: {
          title: "Kim Yoo-jung x VinFast VF5, BTS proposal",
          src: p10KimDeck.embed,
          fallbackUrl: p10KimDeck.view,
          fallbackLabel: "Open the BTS proposal (Canva)",
        },
        embeds: [
          {
            title: "Final BTS reel 1 (Instagram)",
            src: p10KimReel1.embed,
            fallbackUrl: p10KimReel1.view,
            fallbackLabel: "Watch reel 1 (Instagram)",
            aspect: "9 / 16",
          },
          {
            title: "Final BTS reel 2 (Instagram)",
            src: p10KimReel2.embed,
            fallbackUrl: p10KimReel2.view,
            fallbackLabel: "Watch reel 2 (Instagram)",
            aspect: "9 / 16",
          },
        ],
      },
      {
        eyebrow: "",
        title: "VF5: a whole content system",
        body: [
          "VF5 was a content system, not a single film: a recap, a BTS teaser, six concept shorts (sporty, fashion, music, student, office, service driver) and a stack of reels, each carrying a different KOL and a different slice of life around the same car. I worked from the lead's direction to script and structure it, turning a sprawling multi-KOL brief into a proposal a client could actually say yes to, with dynamic FPV and match-cut treatment holding the six concepts together.",
        ],
        figure: {
          src: asset("/images/p10-vf5-onset.jpg"),
          alt: "On-set production still from the VinFast VF5 KOL video shoot.",
          caption: "On set for the VF5 KOL shoot.",
          tag: "On set",
          fit: "cover",
        },
        embed: {
          title: "VinFast VF5 KOLs video, ForArt proposal",
          src: p10Vf5Deck.embed,
          fallbackUrl: p10Vf5Deck.view,
          fallbackLabel: "Open the proposal (Canva)",
        },
      },
      {
        eyebrow: "",
        title: "VF7: one motif, carried clean",
        body: [
          "VF7 ran on a single disciplined idea: the letter V. I helped write and package a film where every beat is a variation on the VinFast V, light arrows on the floor bending into a V that leads to the car, a match cut from the V on the tailgate to the V of the steering wheel, an all-black studio with an LED road of light tracing the same shape. The constraint was the creative: one motif, carried cleanly from first frame to logo.",
        ],
        figure: {
          src: asset("/images/p10-onset-2.jpg"),
          alt: "Felix on set during a VinFast production shoot.",
          caption: "On set during the VinFast production.",
          tag: "On set",
          fit: "cover",
        },
        embed: {
          title: "VF7 photoshoot and video, ForArt proposal",
          src: p10Vf7Deck.embed,
          fallbackUrl: p10Vf7Deck.view,
          fallbackLabel: "Open the proposal (Canva)",
        },
      },
    ],
  },

  P11: {
    density: "D3",
    heroHref: p11Doc.view,
    hideTension: true,
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck: "A solo media-and-communications case study asking a bigger question than it first looks: whether a prime-time entertainment programme can criticise and reflect real social issues inside a mass medium, not just entertain. It contributes to the conversation about how media reflects and shapes societal concerns in Vietnam, and points to entertainment as a new avenue for social reflection.",
    capability:
      "Doing this taught me to treat entertainment as a text worth reading seriously, to slow down and ask what a costume or a repeated word is actually saying, and who gets to say it. It is where I grew comfortable moving between close analysis and the bigger question of how media reflects the society around it.",
    evidenceStatus: "An academic media analysis, solo-authored.",
    evidenceNeeds: "The full report, course code and bibliography.",
    sections: [
      {
        eyebrow: "",
        title: "Reading a comedy show as social critique",
        split: true,
        body: [
          "I took one twelve-minute sketch from Gặp Nhau Cuối Năm, the Educational Kitchen God report staging the 2015 university-entrance-exam reforms, and read it closely through semiotics and Stuart Hall's encoding and decoding. The marching army of exam candidates, the pen shaped like a spear, the chorus that repeats reform and innovation for eighty-eight seconds: each sign is doing political work, comparing the exam to a battlefield and the reforms to motion without progress.",
          "The sharper part is why the critique has to be coded at all. Read against Chomsky's flak filter, and the show's own director admitting problems could only be raised very softly, the analysis shows how entertainment becomes a safe channel for dissent, and how the same sketch lands as a dominant, negotiated or oppositional reading depending on who is watching. The point is not the jokes; it is that a comedy show can carry social reflection a newspaper cannot.",
        ],
        embed: {
          title: "Gặp Nhau Cuối Năm case study",
          src: p11Doc.preview,
          fallbackUrl: p11Doc.view,
          fallbackLabel: "Read the full case study (Google Drive)",
          aspect: "3 / 4",
        },
      },
    ],
  },

  P12: {
    density: "D3",
    heroHref: "https://canva.link/i1atys8kq38uyc7",
    hideTension: true,
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck: "A cultural-research study asking what actually happens when V-Pop dresses Vietnamese folk in Western pop, built on Phương Mỹ Chi's Vũ Trụ Có Anh as its case.",
    capability:
      "This project trained me to look past the surface of something I enjoy and ask what it is doing culturally, and to hold two ideas at once: that fusion can preserve and celebrate, and that it can quietly flatten. It made me a more careful reader of the culture I work in.",
    ownership: "Felix's role: co-researcher. Team context: a two-person research team.",
    evidenceStatus: "Academic cultural research completed with a co-researcher.",
    evidenceNeeds: "The full report or slides, and a clear statement of Felix's individual contribution.",
    sections: [
      {
        eyebrow: "",
        title: "Reading fusion as cultural capital",
        body: [
          "I read the fusion through Bourdieu's cultural capital and critical-communication theory. The áo bà ba paired with Nike, ca trù layered over rap, đàn nhị over electropop: these are not just aesthetic choices, they are moves that convert heritage into exposure, awards and streams, cultural capital an artist can spend.",
        ],
        figure: {
          src: asset("/images/cases/p12/p12-thesis.jpg"),
          alt: "Thesis-statement slide: the hybridization of Vietnamese folk and Western elements as a tool to examine communication practitioners' responsibilities and their pursuit of cultural capital.",
          caption: "The thesis: fusion as a lens on communication practitioners' responsibilities and their pursuit of cultural capital.",
          tag: "Research slide",
          fit: "cover",
        },
      },
      {
        eyebrow: "",
        title: "Whose culture, whose advantage?",
        body: [
          "The question the study keeps returning to is responsibility, who benefits and who gets flattened when folk material becomes a trend. It follows the same logic from the art director shaping the MV to the TikTok creators imitating it, and lands on a practical stance: respectful fusion that finds the sweet spot between authenticity and accessibility, and audiences who read media critically instead of swallowing the dominant story whole.",
        ],
        figure: {
          src: asset("/images/cases/p12/p12-conclusion.jpg"),
          alt: "Conclusion slide summarising the study's recommendation for intercultural production with awareness and critical consumption.",
          caption: "The close: intercultural production with awareness, respectful fusion, and critical consumption.",
          tag: "Research slide",
          fit: "cover",
        },
      },
      {
        eyebrow: "",
        title: "The full presentation",
        body: [],
        embed: {
          title: "Folk x Western elements in V-Pop music videos, research presentation",
          src: p12Deck.embed,
          fallbackUrl: p12Deck.view,
          fallbackLabel: "Open the presentation (Canva)",
        },
      },
    ],
  },

  P14: {
    density: "D2",
    heroHref: P14_MAGAZINE,
    hideTension: true,
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck: "An editorial magazine that **challenges social norms around gender equality**, backed by thorough research and a photo series shot to fill it.",
    capability:
      "This is where I learned that art direction is really about setting rules other people can create inside, and that a strong, playful topic can protect a sensitive one, letting an audience laugh and think at once. Being lead photographer also showed me how much meaning is decided in framing and styling, before a single word is read.",
    ownership: "Felix's role: Creative Director and lead photographer, owning the concept, creative direction and the photo series. The written articles were produced by teammates.",
    evidenceStatus:
      "An academic editorial project. The flipbook embedded below is the final magazine; commercial publication or distribution is not claimed.",
    evidenceNeeds: "The publication status and a per-member contribution statement.",
    sections: [
      {
        eyebrow: "",
        title: "Setting the topic and the tone",
        body: [
          "1080p is a Vietnamese culture-and-lifestyle magazine my team built to argue with the way appearance gets gendered: women's body hair, the girls-only áo dài rule, the man's crop top, each treated as a norm worth questioning rather than a punchline. My ownership was the topic and the creative direction, deciding what the volume would take on and how it should look and feel, so a heavy subject stayed inviting instead of preachy.",
        ],
        figure: {
          src: asset("/images/cases/p14/p14-photoshoots.jpg"),
          alt: "Photography from the gender-equality magazine's own photo shoots.",
          caption: "The photo series that supplies the magazine's own imagery, art-directed to invert conventional gender cues.",
          tag: "Photo direction",
          fit: "cover",
        },
      },
      {
        eyebrow: "",
        title: "Shooting it myself",
        body: [
          "Then I shot it. As lead photographer I directed and ran a three-part photo series that gave the magazine its own imagery instead of stock, using áo dài as the visual anchor and deliberately inverting the gender cues the articles interrogate. The writing was my teammates'; my ownership is the concept, the art direction and the camera.",
        ],
        figure: {
          src: asset("/images/cases/p14/p14-felix-onset.jpg"),
          alt: "Felix behind the camera on set during the gender-equality magazine photo shoot.",
          caption: "On set as lead photographer, directing the magazine's photo series.",
          tag: "On set",
          fit: "cover",
        },
      },
      {
        eyebrow: "",
        title: "The full magazine",
        body: [],
        embed: {
          title: "1080p gender-equality magazine",
          src: P14_MAGAZINE,
          fallbackUrl: P14_MAGAZINE,
          fallbackLabel: "Open the magazine flipbook",
        },
      },
    ],
  },

  P16: {
    density: "D2",
    context: "COMM2497",
    heroHref: p16Report.view,
    hideTension: true,
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck: "A media-research white paper asking whether patriotic rap could become this generation's Red Music.",
    capability:
      "This project taught me to take a genre people dismiss as just entertainment and ask what it is actually carrying, and to build a cultural argument carefully enough that it holds up. It also grew my interest in how national values get renewed, or quietly lost, from one generation to the next.",
    evidenceStatus: "A complete academic research white paper for COMM2497, embedded in full below. The wider genre-level claim is proposed and argued through one case study, not measured across an executed audience study.",
    evidenceNeeds: "Instructor feedback, and audience-level evidence to move from argument to measured effect.",
    sections: [
      {
        eyebrow: "",
        title: "A wartime genre, looking for its Gen Z form",
        body: [
          "Red Music was the soundtrack of wartime Vietnam, songs written to lift morale, carry propaganda and hold a national identity together. In peacetime it is quietly fading, so this project asks a pointed question: can patriotic rap, the genre this generation actually listens to, do the same cultural work and become Gen Z's Red Music?",
        ],
        embed: {
          title: "Patriotic rap as new Red Music, analysis infographic",
          src: p16Infographic.embed,
          fallbackUrl: p16Infographic.view,
          fallbackLabel: "Open the infographic (Canva)",
          aspect: "4 / 3",
        },
      },
      {
        eyebrow: "",
        title: "Reading Khúc Ca Vàng",
        body: [
          "I built the case around Mikelodic's Khúc Ca Vàng, reading it through semiotics, Nye's soft power and cultural hybridity. The song honours the soldier as an ideal, turns a quiet confession to his mother into a call to enlist, and stitches wartime slogans into a melodic-rap beat, a modern form carrying old values across a generational gap. The full white paper follows.",
        ],
        embed: {
          title: "Patriotic rap as new Red Music, full white paper",
          src: p16Report.preview,
          fallbackUrl: p16Report.view,
          fallbackLabel: "Read the full white paper (Google Drive)",
          aspect: "4 / 3",
        },
      },
    ],
  },

  P17: {
    density: "D2",
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck: "A white paper and an eMagazine editorial feature that carry the research on educational inequality between Vietnam's urban and rural areas to a general audience.",
    capability: "",
    ownership: "Felix's role: co-researcher on the white paper; sole author of the editorial feature. Team context: a co-authored white paper.",
    evidenceStatus:
      "An academic policy-research project completed with a co-researcher, plus a Felix-authored editorial feature. No commissioning, adoption or implementation by Teach For Viet Nam is implied, and the eMagazine styling is the artifact's format, not proof of VTV publication.",
    evidenceNeeds: "The tutor feedback, Felix's authored white-paper sections, and reconciliation of the 2023/2024 date shown on the document.",
    sections: [
      {
        eyebrow: "",
        title: "From policy paper to something people will actually read",
        body: [
          "The brief was education inequality between urban and rural Vietnam, aligned to SDG 4. With a partner I built the policy side: a white paper that diagnoses the gap and argues for a multi-stakeholder, cross-sector response rather than a single fix.",
          "Then I did the part I find hardest and most useful, I took that same research and rewrote it for people who would never open a policy paper. Sole-authored in an eMagazine format, “Rural Students Are Left Behind in Vietnam's Tech Boom” turns the statistics into a story a general reader will actually finish, without softening the argument. The two sit side by side below.",
        ],
        embeds: [
          {
            title: "Education Inequality white paper",
            src: p17Paper.embed,
            fallbackUrl: p17Paper.view,
            fallbackLabel: "Open the white paper (Canva)",
            portrait: true,
            aspect: "1 / 1.414",
          },
          {
            title: "Rural Students Are Left Behind in Vietnam's Tech Boom, editorial feature by Felix Phan",
            src: p17Article.preview,
            fallbackUrl: p17Article.view,
            fallbackLabel: "Read the editorial feature (Google Drive)",
            portrait: true,
            aspect: "1 / 1.3",
          },
        ],
      },
    ],
  },

  P18: {
    density: "D3",
    hideTension: true,
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck: "A capstone art-direction proposal translating the A50 national commemoration into a culturally grounded homepage-visual concept for Google Vietnam.",
    capability:
      "This taught me the discipline of the single idea, that art direction is mostly subtraction, killing good symbols until the one that carries everything is left. It also pushed me to justify every visual choice for a Vietnamese and an international viewer at once, which made me a clearer and more defensible designer.",
    evidenceStatus: "An academic art-direction concept. It is not an official Google Doodle and was not published by Google.",
    evidenceNeeds: "The full deck and tutor feedback.",
    sections: [
      {
        eyebrow: "",
        title: "The concept: one railway, one nation",
        body: [
          "For Vietnam's 50th Reunification Day, I proposed a Google homepage Doodle built on a single metaphor: the North-South Reunification Railway. An animated train runs the length of the country carrying a soldier, a student, a merchant, a farmer and a worker, past the terraced fields of the North and the brackish rivers of the South, so the line that once reconnected a divided nation becomes the image of it moving forward together.",
        ],
        embed: {
          title: "A50 Google Doodle concept proposal",
          src: p18Concept.preview,
          fallbackUrl: p18Concept.view,
          fallbackLabel: "Open the concept proposal (Google Drive)",
        },
      },
      {
        eyebrow: "",
        title: "Narrowing to a single idea",
        body: [
          "The clean idea was the hard part. I worked through a wide field of national symbols, dragons, the tank, the lotus, the banyan tree, the five social classes on the flag's star, and kept narrowing until one motif could hold history, unity and optimism at once without needing a caption. The mind map below is that search; the rationale traces how each visual choice was justified for both a domestic and an international audience.",
        ],
        embed: {
          title: "A50 Google Doodle brainstorm mind map",
          src: p18MindMap.embed,
          fallbackUrl: p18MindMap.view,
          fallbackLabel: "Open the mind map (Canva)",
          aspect: "1 / 1",
        },
      },
    ],
  },

  P21: {
    density: "D3",
    heroHref: "https://drive.google.com/drive/folders/17Ffpz-HPkDFjQn3kYHUfq6EYdFFDYyiz?usp=drive_link",
    hideTension: true,
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck: "A qualitative-research design for Vinamilk: sampling, projective technique and interview protocol.",
    capability: "",
    evidenceStatus:
      "An academic research design only. The 30 interviews were designed, not conducted, so the cited figures are background context, not Felix's findings.",
    evidenceNeeds: "The full proposal, cited literature and interview guide.",
    sections: [
      {
        eyebrow: "",
        title: "The problem worth researching",
        body: [
          "Vinamilk owns the Vietnamese dairy market, yet on Facebook its community was scattered and its followers kept hitting an information gap: plenty of visibility, not much bonding. I framed that as the research problem, not “how do we post more”, but how emotionally connected consumers actually feel to the brand and to each other, and what really drives their involvement.",
        ],
        figure: {
          src: asset("/images/cases/p21/p21-purpose.jpg"),
          alt: "Proposal slide setting out the purpose: examining the relationship between Vinamilk and its Facebook consumer community.",
          caption: "The purpose: examine the Vinamilk–consumer relationship on Facebook and what shapes it.",
          tag: "Proposal slide",
          fit: "contain",
        },
      },
      {
        eyebrow: "",
        title: "Designing the study",
        body: [
          "Then I designed the study to answer it: in-depth interviews with 25-to-44-year-old Vinamilk consumers across Hanoi, Ho Chi Minh City and Da Nang, chosen by purposive sampling. The craft is in the protocol, a projective question that asks people to describe Vinamilk as if it were a person, and a visual-aid question that shows real fanpage replies so answers rest on observation, not only memory. It is a complete research design: the fieldwork was scoped, not run.",
        ],
        figure: {
          src: asset("/images/cases/p21/p21-ro-rq.jpg"),
          alt: "Proposal slide listing the research objectives and research questions on emotional connectedness and brand involvement.",
          caption: "The research objectives and questions the design was built to answer.",
          tag: "Proposal slide",
          fit: "contain",
        },
      },
      {
        eyebrow: "",
        title: "The full proposal",
        body: [],
        figure: {
          src: asset("/images/cases/p21/p21-summary.jpg"),
          alt: "Proposal summary slide recapping the study's approach and expected managerial value.",
          caption: "The summary: the approach and the managerial value it was designed to return.",
          tag: "Proposal slide",
          fit: "contain",
        },
        embed: {
          title: "Vinamilk brand-bonding in-depth interview, pitch deck",
          src: p21Deck.embed,
          fallbackUrl: p21Deck.view,
          fallbackLabel: "Open the pitch deck (Canva)",
        },
      },
    ],
    proofLinks: [
      { label: "View the proposal (Google Drive)", url: p21Proposal.view },
      { label: "Open the pitch deck (Canva)", url: "https://canva.link/paeomnoekrqowyh" },
    ],
  },

  P26: {
    density: "D2",
    context: "RMIT club",
    hideTension: true,
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    hideYear: true,
    heroCaption:
      "The IEC leaders board, from left to right: Mr. Phong Kieu (CFO), Mr. Hung Nguyen (Vice-President), Mr. Luong Ngo (President), Mx. Felix Phan (Vice-President Assistant), Ms. Ha Do (R&D Executive), Ms. Thai Mai (HR Executive), and Ms. Anh Vu (Marketing Executive).",
    deck: "Two initiatives at RMIT's Innovation & Entrepreneurship Club: leading operations for the **Unicorn Start-up 101 bootcamp**, and marketing the **Petals of Love Charity Fundraiser**.",
    capability:
      "Across both, I learned to run the unglamorous middle of an event, the coordination, the quality checks, the handoffs, that decides whether a good idea actually reaches people. Marketing a charity also taught me to move people toward a cause without cheapening it.",
    evidenceStatus:
      "Student-organisation work. The quantitative outcomes come from the club's own records, so they are treated as reported, not independently verified.",
    evidenceNeeds: "Official role confirmation, event reports, fundraising records and analytics.",
    sections: [
      {
        eyebrow: "",
        title: "IEC Bootcamp: Unicorn Start-up 101",
        body: [
          "As Assistant to the Vice President, I led the 42-person operations team behind **Unicorn Start-up 101**, IEC's whole-day entrepreneurship bootcamp at RMIT Hanoi. The programme ran three panels, Ready to Start-up, Manage the Business Model and Ideate Product Fit, into a hands-on “Theory to Action” workshop, and drew 80+ participants from 20+ universities with five guest speakers and judges. My job was the machine underneath: coordinating the HR and Media departments and holding output quality steady on both sides, with roughly 30,000 social engagements per cycle.",
        ],
        figure: {
          src: asset("/images/cases/p26/p26-iec-kv.jpg"),
          alt: "Key visual for IEC Bootcamp: Unicorn Start-up 101.",
          caption: "Unicorn Start-up 101: a whole-day bootcamp of three panels into a hands-on workshop.",
          tag: "Key visual",
          fit: "contain",
        },
        pairFigures: true,
        figures: [
          {
            src: asset("/images/cases/p26/p26-iec-event.jpg"),
            alt: "Participants at the Unicorn Start-up 101 bootcamp.",
            caption: "The bootcamp on the day, 80+ participants from 20+ universities.",
            tag: "On the day",
            fit: "contain",
          },
          {
            src: asset("/images/cases/p26/p26-iec-felix.jpg"),
            alt: "Felix at the Unicorn Start-up 101 bootcamp.",
            caption: "On site, running the operations team behind the programme.",
            tag: "On site",
            fit: "contain",
          },
          {
            src: asset("/images/cases/p26/p26-iec-guest-1.jpg"),
            alt: "A guest speaker sharing entrepreneurship insights at the bootcamp.",
            caption: "One of the guest speakers sharing startup insight.",
            tag: "Guest speaker",
            fit: "contain",
          },
          {
            src: asset("/images/cases/p26/p26-iec-guest-2.jpg"),
            alt: "A guest speaker on a panel at the bootcamp.",
            caption: "A panel session with an industry guest speaker.",
            tag: "Guest speaker",
            fit: "contain",
          },
        ],
      },
      {
        eyebrow: "",
        title: "Petals of Love",
        body: [
          "As Marketing Lead I directed a 12-person team for **Petals of Love**, a year-end charity project for the child patients at K Hospital. We designed and sold handmade velvet-zinc flower sets, ran DIY “Bloom” workshops and a campus booth, and paired every bouquet with a card people could write to the children. In two weeks the campaign drew 20,000+ social engagements, and the project closed by delivering 50 in-kind gifts worth around 20 million VND, with 90% of profits donated.",
        ],
        pairFigures: true,
        figures: [
          {
            src: asset("/images/cases/p26/p26-petals-workshop.jpg"),
            alt: "A DIY Bloom workshop for the Petals of Love charity project.",
            caption: "The “Bloom” DIY workshops, hands-on velvet-zinc flower crafting.",
            tag: "Workshop",
            fit: "contain",
          },
          {
            src: asset("/images/cases/p26/p26-petals-sale.jpg"),
            alt: "The Petals of Love flower booth on campus.",
            caption: "The campus flower booth, with cards to write to the children at K Hospital.",
            tag: "Booth",
            fit: "contain",
          },
          {
            src: asset("/images/cases/p26/p26-petals-felix.jpg"),
            alt: "Felix crafting flowers for the Petals of Love project.",
            caption: "Hands-on with the team, making the flower sets.",
            tag: "On the ground",
            fit: "contain",
          },
          {
            src: asset("/images/cases/p26/p26-petals-recap.jpg"),
            alt: "Petals of Love handover of gifts to K Hospital.",
            caption: "The close: 50 in-kind gifts worth around 20 million VND delivered to K Hospital.",
            tag: "Outcome",
            fit: "contain",
          },
        ],
      },
    ],
    proofLinks: [
      { label: "View the Unicorn Start-up 101 recap (Facebook)", url: p26IecPost.view },
      { label: "View the Petals of Love recap (Facebook)", url: p26PetalsPost.view },
    ],
  },

  P30: {
    density: "D1",
    context: "Map the System 2023",
    hideTension: true,
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck: "A systems-thinking case that maps cybersecurity resilience for Vietnamese SMEs through structures, stakeholders, feedback loops and leverage points.",
    capability:
      "This is where systems thinking clicked for me: the instinct to map a problem's structure and feedback loops before proposing anything, and to aim interventions at leverage points rather than symptoms. It also grounded my interest in cybersecurity and resilience as a social-impact problem, not only a technical one.",
    ownership: "Felix's role: researcher and analyst. Team context: a five-person team.",
    evidenceStatus:
      "Partially supported. Team membership and outputs are supported by the submission files, and a public announcement confirms Top 15 recognition. No national or global stage is claimed.",
    evidenceNeeds: "The exact competition stage beyond the public Top 15 wording.",
    sections: [
      {
        eyebrow: "",
        title: "Reading the whole system, not one symptom",
        body: [
          "Vietnam's SMEs are 98% of its businesses and employ about half its workforce, so when COVID-19 pushed everyone online they became the softest target for cybercrime, short on budget, specialists, awareness and, crucially, policy. Rather than pitch a single fix, the team treated it as a system: an iceberg model to move from visible incidents down to the mental models underneath, a stakeholder map, and a causal-loop model showing how awareness, investment, skills, regulation and attacks actually feed each other.",
        ],
        embed: {
          title: "SMEs cybersecurity resilience causal-loop model (Kumu)",
          src: p30CausalMap,
          fallbackUrl: p30CausalMap,
          fallbackLabel: "Open the interactive causal-loop map (Kumu)",
        },
      },
      {
        eyebrow: "",
        title: "From map to leverage",
        body: [
          "The value was in reading that whole picture and finding where to push. We compared local and global solution landscapes, named the impact gaps, and located the leverage points, education, affordable tailored tools, information-sharing and legal infrastructure, where a multi-stakeholder response would move the system most. The work reached the Top 15 of Map the System 2023 at the National Economic University, run in partnership with Oxford's Skoll Centre for Social Entrepreneurship.",
        ],
        embed: {
          title: "Scienceporium presentation",
          src: p30Deck.embed,
          fallbackUrl: p30Deck.view,
          fallbackLabel: "Open the presentation (Canva)",
        },
      },
      {
        eyebrow: "",
        title: "The full written summary",
        body: [],
        embed: {
          title: "Scienceporium written summary",
          src: p30Report.embed,
          fallbackUrl: p30Report.view,
          fallbackLabel: "Open the written summary (Canva)",
          aspect: "1 / 1.414",
        },
      },
    ],
  },

  P33: {
    density: "D1",
    context: "COMM2892",
    hideYear: true,
    hideType: true,
    hideContext: true,
    hideApproach: true,
    hideOutput: true,
    hideSignificance: true,
    deck: "An academic study that turned Vietnamese media transparency from an abstract debate into a bounded analysis across online news, social media and television/video coverage.",
    capability:
      "This project taught me to make a fuzzy idea like transparency measurable before arguing about it, by turning it into criteria I could actually read a sample against. Working across online, social and broadcast sources also made me more careful about where a claim's evidence really comes from, and honest about how much a bounded sample can and cannot say.",
    ownership:
      "Felix's role: team researcher and analyst. Team context: a four-person academic team; the artifact proves membership, not individual task allocation.",
    evidenceStatus:
      "A four-person academic team study for COMM2892. The figures (39 items, 131 citations, 68 sources) are as stated in the team deck. Solo research and representative measurement of all Vietnamese media are not claimed.",
    evidenceNeeds: "A statement of Felix's individual task allocation within the team.",
    tensionLabel: "The research question",
    sections: [
      {
        eyebrow: "",
        title: "One question, made measurable across three platforms",
        body: [
          "With a four-person team, I helped turn a slippery question, how transparent Vietnamese media is in reporting corruption, into something measurable. We defined transparency as a set of observable criteria, then read a cross-platform sample of 39 items across online newspapers, social-media news and television/video against them, weighing 131 citations from 68 primary sources for how diverse and credible they were, and how openly each publisher disclosed its ownership and stance. The Soviet Communist Theory of the Press supplied the interpretive lens the brief required.",
          "The full method, sample and findings live in the team deck below; the slides here show the research question, the operationalised sample, and the two analytical axes we ran in parallel.",
        ],
        pairFigures: true,
        figures: [
          {
            src: asset("/images/cases/p33/p33-research-question.jpg"),
            alt: "Research-question slide from the COMM2892 team deck: 'How transparent is the Vietnamese media in reporting corruption from 2021 to 2023?', shown against prior studies and the identified knowledge gap.",
            caption: "The study's research question and knowledge gap, framing media transparency as the object of analysis.",
            tag: "Research question",
            fit: "contain",
          },
          {
            src: asset("/images/cases/p33/p33-data-collection.jpg"),
            alt: "Data-collection slide: three transparency criteria (Tsetsura and Kruckeberg 2009), a July 2021 to July 2023 timeframe, and the final 39-item sample of 26 online newspaper, 8 social-media and 5 television/video items refined from 50 collected items.",
            caption: "The operationalised criteria and the final 39-item cross-platform sample (26 online, 8 social-media news, 5 television/video), refined from 50 collected items.",
            tag: "Sample and method",
            fit: "contain",
          },
          {
            src: asset("/images/cases/p33/p33-analysis-method.jpg"),
            alt: "Data-analysis slide splitting the quantitative work into Information Source Analysis and News Publisher Analysis, each with its own analysis focus.",
            caption: "The two analytical axes run in parallel: information-source diversity and credibility, and news-publisher accessibility and ownership.",
            tag: "Analysis framework",
            fit: "contain",
          },
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
    hideYear: true,
    hideType: true,
    hideContext: true,
    deck: "A research project that began as an individual literature and problem-framing study, then grew into a four-person mixed-methods investigation combining quantitative analysis, social listening and social-network analysis.",
    capability:
      "This project taught me to break a sprawling, cross-domain problem into questions I could actually answer, and to match a different method to each rather than force one tool to do everything. Reading three evidence streams against each other, instead of leaning on a single number, is where I learned to trust triangulation, and to say plainly when a result is only an association.",
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
        eyebrow: "",
        title: "One problem, three matched methods, triangulated",
        body: [
          "The team stage decomposed the problem into three research questions and matched a method to each: a 22-country secondary quantitative analysis for the macro relationship, social listening (Google Trends, BuzzSumo, NVivo) for public discourse, and YouTube social-network analysis in NodeXL for how the conversation propagated (1,749 users across 83 videos).",
          "The value is in the architecture: choosing distinct methods for distinct questions and reading the three evidence streams against each other rather than leaning on any single number. The full presentation below carries the background, the three method stages and the recommendations in the team's own words.",
        ],
        splitFigure: {
          src: asset("/images/cases/p34/p34-prre-infographic.png"),
          alt: "PRRE research infographic summarising the Pakistan cybersecurity and SME bank-loan study across its three methods.",
          caption: "The one-page research infographic, summarising the problem and the three matched methods at a glance.",
          tag: "Research infographic",
          fit: "contain",
        },
        figure: {
          src: asset("/images/cases/p34/PRRE ROs & RQs.jpg"),
          alt: "Slide listing the study's three research objectives and matching research questions across the quantitative, social-listening and social-network stages.",
          caption: "The three research questions and objectives, one per method, that the mixed-methods design was built to answer.",
          tag: "Research questions and objectives",
          fit: "contain",
        },
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

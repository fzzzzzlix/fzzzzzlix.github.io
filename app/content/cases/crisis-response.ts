import { asset } from "../../base-path";

/*
 * P32 — HUST Food-Safety Crisis Response case copy.
 * All words, card lists, links and image paths live here; the component only
 * arranges them. Use **bold** for emphasis inside body paragraphs.
 */

const PRESS_RELEASE_EMBED = "https://www.canva.com/design/DAHRwrlA2dU/GSf4MGzwwDCEWEIN42EnXQ/view?embed";
const PRESS_RELEASE_LINK = "https://www.canva.com/design/DAHRwrlA2dU/GSf4MGzwwDCEWEIN42EnXQ/view";
const TEAM_PLAN_LINK = "https://www.canva.com/design/DAGknih3bqQ/0O8yT2ornhGD_OLQlX88DA/view";
const VTV = "https://vtv.vn/xa-hoi/dai-hoc-bach-khoa-ha-noi-dung-hop-dong-voi-don-vi-cung-cap-suat-an-sau-phan-anh-cua-vtv-20241008070959807.htm";

export const crisisResponse = {
  hero: {
    eyebrow: "Specialist case",
    title: "HUST Food-Safety Crisis Response",
    descriptor: "PR & Crisis Communication",
    strip: [
      { value: "2024", label: "real incident (context only)" },
      { value: "2025", label: "academic simulation" },
      { value: "Press release", label: "Felix-authored artefact" },
      { value: "Team", label: "wider media-kit context" },
    ],
  },
  framing: {
    eyebrow: "Framing",
    title: "Communicate accountability when trust is already under pressure",
    body: [
      "This academic capstone for Issues, Risk & Crisis Communication used a real 2024 food-safety controversy involving Hanoi University of Science and Technology as the trigger for a crisis-response simulation. It is not HUST client work, and Felix did not represent the university.",
      "The professional problem was still realistic: when student safety, institutional accountability and media scrutiny collide, what can an organisation say credibly, and what must it be prepared to answer next?",
    ],
  },
  boundary: {
    eyebrow: "Keep the boundary clean",
    title: "Separate the incident from the response scenario",
    realCard: {
      tag: "Verified, 2024",
      title: "The real incident",
      items: [
        "A 2024 food-safety controversy concerning meals served in a HUST programme.",
        "VTV reported the university ended its meal-provider contract after the controversy.",
        "Established here only as the historical trigger, linked to public reporting.",
      ],
    },
    simulationCard: {
      tag: "Simulation, 2025",
      title: "The academic response",
      items: [
        "A 2025 classroom simulation built on that trigger.",
        "Felix’s assigned simulation role was Communication Manager.",
        "All response actions below are proposed simulation material, not historical events.",
      ],
    },
    note: {
      label: "Why this split matters",
      body: "Keeping verified 2024 history separate from the 2025 simulation prevents proposed crisis actions from being mistaken for real institutional decisions, and keeps the case ethically clean.",
    },
  },
  contribution: {
    eyebrow: "Direct contribution",
    title: "The press release Felix authored",
    body: [
      "Felix’s directly attributable artefact is the press release, written in the assigned simulation role of Communication Manager. It attempts several functions at once: acknowledge seriousness, communicate corrective action, establish a sequence of institutional response, and give journalists a usable official-style statement. The evidence here is the actual writing, not a dramatic crisis graphic.",
    ],
    figure: {
      src: asset("/images/cases/p32/p32-press-release-p1.png"),
      alt: "First page of the simulation press release authored by Felix Phan for the 2025 HUST food-safety crisis-communication capstone.",
      caption: "2025 academic simulation artefact, the Felix-authored press release, shown uncropped. Not a real HUST communication.",
      tag: "Team simulation · Felix-authored",
      href: PRESS_RELEASE_LINK,
    },
    note: {
      label: "What this is, and is not",
      body: "This is a 2025 academic simulation document authored by Felix in an assigned role. It is not a genuine HUST press release, and Felix was never employed by or an official spokesperson for HUST.",
    },
    embed: {
      title: "Felix-authored simulation press release",
      src: PRESS_RELEASE_EMBED,
      fallbackUrl: PRESS_RELEASE_LINK,
      fallbackLabel: "Open the press release (Canva)",
    },
  },
  responseArc: {
    eyebrow: "The response arc",
    title: "Crisis communication is an information system",
    body: [
      "A crisis statement works only inside a wider preparedness system. The release was designed to move through a deliberate arc rather than simply express regret.",
    ],
    card: {
      tag: "Response arc",
      title: "From acknowledgement to rebuilt confidence",
      items: [
        "Acknowledge the seriousness of the situation.",
        "Establish the verified facts.",
        "Prioritise affected students.",
        "Explain concrete corrective action.",
        "Prepare for media and stakeholder scrutiny.",
        "Rebuild institutional confidence.",
      ],
    },
    bodyAfter: [
      "The wider team package included a backgrounder, fact sheet, FAQ, media contacts and press-conference planning. These are shown only as **team context**, the environment the press release had to work within, and are not attributed to Felix.",
    ],
  },
  preparedness: {
    eyebrow: "Preparedness, not just a statement",
    title: "A statement is not enough if the next question can’t be answered",
    body: [
      "The team FAQ and media-kit structure illustrate a core communications principle: a crisis statement fails if spokespeople cannot answer the follow-up. The scale of the team package, not any single graphic, is the point.",
    ],
    componentsCard: {
      tag: "Team simulation material",
      title: "Media-kit components",
      items: [
        "Backgrounder and fact sheet",
        "Frequently asked questions",
        "Media contacts",
        "Press-conference planning",
      ],
    },
    ownershipCard: {
      tag: "Ownership boundary",
      title: "Attributed carefully",
      items: [
        "Felix-authored: the press release only.",
        "Team context: every other component above.",
        "Some team artefacts use a fictional “Dr. Felix Phan” label, not a real credential, and not shown here.",
      ],
    },
  },
  demonstrates: {
    eyebrow: "What this demonstrates",
    title: "Professional crisis writing under accountability constraints",
    body: [
      "The case adds a distinct PR capability to the portfolio: translating an issue into institutional language that must be clear, defensible and usable under media scrutiny, while maintaining strict boundaries between verified history, simulation and individual ownership.",
    ],
    links: [
      { label: "Real 2024 incident context (VTV)", url: VTV },
      { label: "Felix-authored press release (Canva)", url: PRESS_RELEASE_LINK },
      { label: "Team crisis plan, team simulation material", url: TEAM_PLAN_LINK },
    ],
  },
};

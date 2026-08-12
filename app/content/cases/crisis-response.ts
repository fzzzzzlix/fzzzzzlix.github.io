import { asset } from "../../base-path";

/*
 * P32 — HUST Food-Safety Crisis Response case copy.
 * All words, card lists, links and image paths live here; the component only
 * arranges them. Use **bold** for emphasis inside body paragraphs.
 */

const PRESS_RELEASE_EMBED = "https://www.canva.com/design/DAHRwrlA2dU/GSf4MGzwwDCEWEIN42EnXQ/view?embed";
const PRESS_RELEASE_LINK = "https://www.canva.com/design/DAHRwrlA2dU/GSf4MGzwwDCEWEIN42EnXQ/view";
const TEAM_PLAN_EMBED = "https://www.canva.com/design/DAGknih3bqQ/0O8yT2ornhGD_OLQlX88DA/view?embed";
const TEAM_PLAN_LINK = "https://www.canva.com/design/DAGknih3bqQ/0O8yT2ornhGD_OLQlX88DA/view";
const VTV = "https://vtv.vn/xa-hoi/dai-hoc-bach-khoa-ha-noi-dung-hop-dong-voi-don-vi-cung-cap-suat-an-sau-phan-anh-cua-vtv-20241008070959807.htm";

export const crisisResponse = {
  hero: {
    eyebrow: "Specialist case",
    title: "HUST Food-Safety Crisis Response",
    descriptor: "PR & Crisis Communication",
    image: asset("/images/cases/p32/Press conference hero.png"),
    strip: [
      { value: "2024", label: "real incident (context only)" },
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
  close: {
    eyebrow: "The response, and its boundary",
    title: "A statement built to survive the next question",
    body: [
      "The press release was written to work as a system, not a single apology. It moves through a deliberate arc: acknowledging the seriousness of the incident, establishing the verified facts, putting affected students first, explaining concrete corrective action, and closing by rebuilding confidence, so a reader reaches the end knowing what happened and what the institution will do next.",
      "Around it, the wider team assembled the rest of a media-preparedness package, a backgrounder, fact sheet, FAQ, media contacts and press-conference plan, because a statement fails the moment a spokesperson cannot answer the follow-up. My own contribution is the release itself; the craft the case shows is writing that stays clear, defensible and usable under scrutiny while keeping verified history, simulation and individual authorship cleanly separated.",
    ],
    figure: {
      src: asset("/images/cases/p32/Press conference map.png"),
      alt: "Press-conference room map for the HUST food-safety crisis simulation, marking the seating and speaking positions of the university spokespeople.",
      caption: "The team's press-conference room plan, mapping where each spokesperson sits and speaks, part of the preparedness package the release had to work within.",
      tag: "Team simulation, press-conference plan",
    },
    embed: {
      title: "Team crisis communication plan",
      src: TEAM_PLAN_EMBED,
      fallbackUrl: TEAM_PLAN_LINK,
      fallbackLabel: "Open the crisis communication plan (Canva)",
    },
    links: [
      { label: "Real 2024 incident context (VTV)", url: VTV },
      { label: "Felix-authored press release (Canva)", url: PRESS_RELEASE_LINK },
      { label: "Team crisis plan, team simulation material", url: TEAM_PLAN_LINK },
    ],
  },
};

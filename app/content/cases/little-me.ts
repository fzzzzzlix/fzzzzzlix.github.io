import { asset } from "../../base-path";

/*
 * P22 — Little Me case copy.
 * All words, captions and image paths live here; the component only arranges
 * them. Use **bold** for emphasis. In strip/stat items, `unit` becomes the
 * small superscript (e.g. value "6.96" + unit "%").
 */
const IMAGES_FOLDER = "https://drive.google.com/drive/folders/1FiBLLSjVYBPSGc2WvJgVemFod2fg4s49?usp=drive_link";

export const littleMe = {
  imagesFolder: IMAGES_FOLDER,
  hero: {
    image: asset("/images/cases/p22/p22-key-visual.jpg"),
    imageHref: IMAGES_FOLDER,
    title: "Little Me",
    descriptor: "RMIT Hanoi · 3–5 April 2024",
    strip: [
      { value: "316", label: "visits across three days" },
      { value: "34,588", label: "organic reach" },
      { value: "6.96", unit: "%", label: "return rate (22 visits)" },
      { value: "27", label: "person team led" },
    ],
  },
  participation: {
    eyebrow: "The participation problem",
    title: "Make wellbeing feel approachable",
    body: [
      "Little Me was designed around a simple participation problem: students can need space to reflect during a stressful semester without wanting a formal intervention. The response was a self-paced interactive exhibition, more invitation than instruction, where participants moved through small activities at their own pace.",
      "It ran for three days, 3–5 April 2024, at the RMIT Hanoi Industry and Innovation Hub, coordinating RMIT’s Diversity & Inclusion Office, Wellbeing and Student Life departments, the Current Media Club and independent RMIT artists.",
    ],
  },
  experienceDesign: {
    eyebrow: "Experience design",
    title: "Design a journey, not just an event schedule",
    body: [
      "The experience combined exhibition prompts and hands-on activities: Childhood Core Memories, Drawing Little Me, Shower Thoughts, Accept Your Differences, Calm Jar Decoration, a Supportive Booklet and Buddy Pick-up. The floor plan below shows that the participant journey was spatially designed, not improvised; the photographs that follow show how individual zones felt on the day.",
    ],
    floorPlanFigure: {
      src: asset("/images/cases/p22/p22-floor-plan.png"),
      alt: "Little Me exhibition floor plan showing the routed sequence of activity zones across the venue.",
      caption: "The venue was routed as a sequence of activity zones, so participants moved through a designed journey.",
      tag: "Planning artefact",
    },
    zoneFigure: {
      src: asset("/images/cases/p22/p22-zone-1.jpg"),
      alt: "Participants at the Childhood Core Memories zone of the Little Me exhibition.",
      caption: "Childhood Core Memories, a low-pressure entry activity that set the reflective tone.",
      tag: "Event photo",
      variant: "photo" as const,
      ratio: "4 / 3",
    },
    calmJarFigure: {
      src: asset("/images/cases/p22/p22-calm-jar.jpg"),
      alt: "A participant decorating a jar at the Calm Jar activity.",
      caption: "Calm Jar Decoration, a hands-on activity participants completed at their own pace.",
      tag: "Event photo",
      variant: "photo" as const,
      ratio: "4 / 3",
    },
    buddyFigure: {
      src: asset("/images/cases/p22/p22-buddy-pickup.jpg"),
      alt: "Participants at the Buddy Pick-up activity of the Little Me exhibition.",
      caption: "Buddy Pick-up closed the journey by connecting participants rather than leaving them to exit alone.",
      tag: "Event photo",
      variant: "photo" as const,
      ratio: "16 / 9",
    },
    artworkFigure: {
      src: asset("/images/cases/p22/p22-artwork.jpg"),
      alt: "Illustrated Little Me exhibition panels displayed at the RMIT Innovation Hub.",
      caption: "The exhibition panels: artist-illustrated pieces on identity and difference that anchored the space.",
      tag: "Event photo",
      variant: "photo" as const,
      ratio: "4 / 3",
    },
    bookletFigure: {
      src: asset("/images/cases/p22/p22-booklet.jpg"),
      alt: "Stacks of the Little Special U supportive booklet handed out at the exhibition.",
      caption: "“Little Special U”, the take-home supportive booklet, so the reflection travelled home with participants.",
      tag: "Event photo",
      variant: "photo" as const,
      ratio: "4 / 3",
    },
    jarVideo: {
      src: asset("/videos/p22/p22-calm-jar.mp4"),
      caption: "The Calm Jar activity in motion, a hands-on moment participants completed at their own pace.",
      tag: "Event footage",
    },
    setupVideo: {
      src: asset("/videos/p22/p22-setup.mp4"),
      caption: "Setting up the space before doors opened, the back-end work behind the calm surface.",
      tag: "Event footage",
    },
  },
  leadership: {
    eyebrow: "Operational leadership",
    title: "Lead the system behind the experience",
    body: [
      "As Head Organiser, Felix led the operating system behind the exhibition rather than authoring every activation. A participant-facing experience depended on back-end work: task allocation across a 27-person team, paperwork and approvals, partner coordination, cross-platform promotion and event-day delivery.",
      "The strongest management story is that the calm, self-paced surface only worked because the coordination underneath it was planned and delegated.",
    ],
    teamFigure: {
      src: asset("/images/cases/p22/p22-team.jpg"),
      alt: "The Little Me core organising team at the RMIT Innovation Hub.",
      caption: "Part of the 27-person team behind Little Me, the coordination that made a calm exhibition possible.",
      tag: "The team",
      variant: "photo" as const,
      ratio: "4 / 3",
    },
    onSiteFigure: {
      src: asset("/images/cases/p22/p22-led-promo.jpg"),
      alt: "Felix in front of the Little Me exhibition signage at the RMIT Hanoi Innovation Hub.",
      caption: "On site as Head Organiser during the three-day run.",
      tag: "On site",
      variant: "photo" as const,
      ratio: "3 / 4",
    },
  },
  results: {
    eyebrow: "Results against the plan",
    title: "Measured against explicit KPIs",
    body: [
      "The event report records **316 visits** across three days: 97 on Day 1, 115 on Day 2 and 104 on Day 3, with **22 return visits (6.96%)** and **34,588 organic reach** across Facebook, Instagram and TikTok. Both stated KPIs, 300+ visits and 15,000+ organic reach, were exceeded by the end of the event.",
    ],
    resultsStat: {
      label: "Little Me event results",
      items: [
        { value: "316", label: "total visits (97 / 115 / 104)" },
        { value: "34,588", label: "organic reach, three platforms" },
        { value: "22", label: "return visits (6.96%)" },
        { value: "2×+", label: "the 15,000+ reach KPI" },
      ],
    },
    reachStat: {
      label: "Organic reach by platform",
      items: [
        { value: "23,900+", label: "Facebook reach" },
        { value: "7,467", label: "TikTok reach" },
        { value: "3,221", label: "Instagram reach" },
        { value: "300+", label: "visit KPI, met by event close" },
      ],
    },
    reachFigure: {
      src: asset("/images/cases/p22/p22-reach.jpg"),
      alt: "Instagram insights screenshot showing 3,221 accounts reached and 38,948 impressions, up 85.9%, over 30 days.",
      caption: "Instagram reach in the campaign window: 3,221 accounts reached and impressions up 85.9%.",
      tag: "Analytics",
    },
    tiktokFigure: {
      src: asset("/images/cases/p22/p22-tiktok.jpg"),
      alt: "TikTok screenshot of a Little Me 2024 post prompting viewers with a 805-plus response sticker.",
      caption: "TikTok carried the invitation too, prompting viewers to reflect and respond.",
      tag: "Social",
    },
    awardFigure: {
      src: asset("/images/cases/p22/p22-inclusion-award.jpg"),
      alt: "RMIT Hanoi Student Council 2023 Inclusion Award trophy and certificate of recognition.",
      caption: "The organising body's 2023 Inclusion Award, the wider recognition the work sat within.",
      tag: "Recognition",
    },
    note: {
      label: "Evidence boundary",
      body: "Attendance and reach figures come from the event’s own reporting. The 300+ visit KPI was reached by the close of the three-day event, not on Day 2, after two days the total was 212. Any fundraising total is omitted here because the supplied event report does not evidence it. The Inclusion Award recognised the RMIT Hanoi Student Council, the organising body, not Felix individually.",
    },
  },
  demonstrates: {
    eyebrow: "What this demonstrates",
    title: "Experience design plus operational leadership",
    body: [
      "Little Me shows how Felix can turn a sensitive communication objective into a participatory format, coordinate a large student team, and evaluate delivery against explicit attendance and communication KPIs, stating the result and the limitation with equal precision.",
    ],
  },
};

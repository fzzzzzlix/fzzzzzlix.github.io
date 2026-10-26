/*
 * P35 StarX case copy.
 *
 * All words, captions, chips and media references live here; the component only
 * arranges them. Use **bold** for emphasis and *single asterisks* for italic.
 * In strip/stat items, `unit` becomes the small superscript (e.g. "8.5" + "/10").
 *
 * The page tells one story in one sitting: what Felix designed, how it ran, what
 * the players said, and what changed because of it. The full documents sit behind
 * collapsible embeds for anyone who wants the detail.
 *
 * Privacy: the scoring-sheet photo has player names blurred. The Zalo message plan
 * is described but never embedded (it carries private phone numbers).
 */
import { asset } from "../../base-path";

const img = (file: string) => asset(`/images/cases/p35/${file}`);

// Google Drive PDFs: `src` loads in the page, `fallbackUrl` opens Drive in a new tab.
const drive = (id: string) => ({
  src: `https://drive.google.com/file/d/${id}/preview`,
  fallbackUrl: `https://drive.google.com/file/d/${id}/view`,
});

const MEDIA_PLAN_SHEET_ID = "1tG_Zzrqg1HQ6CZ3PjhC2Vfbv-LYqhc_O";
const FIGMA_FILE = "https://www.figma.com/design/7c7cltjv7qK4TrefHHPxcd/STARX-BRANDING?node-id=0-1";

export const starx = {
  hero: {
    eyebrow: "Feature case",
    title: "StarX",
    image: img("p35-cover.jpg"),
    strip: [
      { value: "15", label: "players at the first live League event" },
      { value: "13", label: "games run in 48 hours" },
      { value: "8.5", unit: "/10", label: "players’ overall score" },
      { value: "10", unit: "/10", label: "survey respondents would come back" },
    ],
  },

  tension:
    "Make ordinary people worth watching without scripting a single emotion. The rules of the game have to do all the work.",

  venture: {
    eyebrow: "The venture",
    title: "Three founders, one creative lead",
    body: [
      "StarX was a premium adventure community in Hồ Chí Minh City. People sign up to play games nobody has played before, in places they have never been, and leave a bolder version of themselves. Its promise: *anyone can be the best at a game no one has ever played.*",
      "I was the creative lead of a three-person founding team. My two co-founders ran production, finance and logistics. All three of us ran the events on the day.",
    ],
    ownedLabel: "What I owned",
    owned: ["Format design", "Game rules and scoring", "Scripts and production plans", "Media strategy", "Brand identity"],
  },

  map01: {
    eyebrow: "Delivered live",
    title: "Map 01: 48 hours in Hồ Tràm",
    chips: ["Delivered: live event", "27 to 28 June 2026"],
    body: [
      "The League’s first map. Fifteen players, drafted into four teams, every team built from three locked roles: a **Leader**, an **Operator** and a **Media Creator**. Over two days they played thirteen games across the resort, from a kayak race on the river dock to a debate between teams and an Honest Talk circle at night.",
    ],
    photos: [
      {
        src: img("p35-map01-climb.jpg"),
        alt: "Two StarX League players climbing a rope net dome at the Hồ Tràm resort, under a bright sky.",
        caption: "Day 1 in Hồ Tràm. Every game was placed against a zone of the resort.",
        tag: "Event photo",
        ratio: "3 / 2",
      },
      {
        src: img("p35-map01-drone.jpg"),
        alt: "Drone view of four StarX League teams in coloured shirts on a tennis court surrounded by trees.",
        caption: "Four teams on the tennis court, seen from the drone.",
        tag: "Event photo",
        ratio: "3 / 2",
      },
    ],
    recap: {
      title: "StarX League Map 01, Hồ Tràm, recap",
      src: "https://www.youtube-nocookie.com/embed/wB1Dcjcae8s",
      allow:
        "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
      fallbackUrl: "https://www.youtube.com/watch?v=wB1Dcjcae8s",
      fallbackLabel: "Watch the Map 01 recap on YouTube",
    },
    comms:
      "Players were looked after before they arrived, too. Communication ran on a written Zalo plan timed to the minute: a private group per team for bonding and a sneak peek of Game 1, one main group for logistics only, and a list of messages deliberately *not* sent to the main group, with the reason for each.",
  },

  mapping: {
    eyebrow: "One game, up close",
    title: "Game 02: Mapping",
    body: [
      "Each team hunts for its own flag, hidden somewhere in the resort. Finding it is only half the game: the team then has to draw the ground it covered, from memory. The drawing on the tablet is my answer key.",
      "Placement pays out by finishing order, but every player is also scored on the five criteria of their role. A fast team that can’t show its route can still lose. It became the players’ joint favourite: **7 of 10** survey respondents put it in their top five.",
    ],
    answerKey: {
      src: img("p35-hand-drawn-map.jpg"),
      alt: "A hand holding an LCD drawing tablet with a hand-drawn map of the resort: the beach, home 18, the playground, the tennis court and the kayak dock.",
      caption: "My answer key for Mapping, drawn on an LCD tablet.",
      tag: "Game design",
      variant: "photo" as const,
      ratio: "1 / 1",
      position: "50% 42%",
    },
    scoringSheet: {
      src: img("p35-map01-scoring-sheet.jpg"),
      alt: "The StarX League Map 01 team scoring sheet: four colour-coded teams, a row per player and role, and a column per game. Player names are blurred.",
      caption: "The scoring sheet: every player, scored on their role in every game, so a round could be judged rather than argued. Names blurred.",
      tag: "Scoring system",
    },
  },

  survey: {
    eyebrow: "Survey evidence",
    title: "What the players told me",
    chips: ["10 players answered", "Aggregated, anonymised", "30 June to 1 July 2026"],
    stats: [
      { value: "8.5", label: "overall experience, out of 10" },
      { value: "8.8", label: "likelihood of recommending, out of 10" },
      { value: "10 of 10", label: "would come back" },
      { value: "3.4", label: "for explaining the rules, out of 5: the lowest score" },
    ],
    barsLabel: "Operational satisfaction scores out of 5",
    bars: [
      { label: "Timeline", value: 4.6 },
      { label: "Check-in and props", value: 4.6 },
      { label: "Sleeping arrangements", value: 4.6 },
      { label: "Announcements", value: 4.4 },
      { label: "Transport", value: 4.2 },
      { label: "Food and water", value: 4.2 },
      { label: "Explaining the rules", value: 3.4 },
    ],
    body: [
      "The event ran on time and scored well. One thing didn’t, and it was squarely mine: **explaining the rules**. Players named the causes themselves: too little information before each game, and rules that changed or were unclear.",
      "The twist: the two favourite games, Mapping and the word puzzle in the pool, were both thinking games. Players wanted more of exactly the thing I was explaining worst.",
    ],
  },

  fix: {
    eyebrow: "Feedback into design",
    title: "From a 3.4 to a rule card",
    lede: "I wrote the post-event report for the CEO and investors, and turned each weak score into a rule for the next map.",
    tableLabel: "Map 01 problems, the evidence for each, and the fix written for Map 02",
    tableHead: ["Problem", "Evidence", "The fix I wrote"],
    tableRows: [
      { head: "Rules unclear, sometimes changed", cells: ["3.4 out of 5; named by 3 players", "A one-page rule card per game, playtested on the recce, locked before play"] },
      { head: "Too little information before a game", cells: ["Named by 3 players", "A fixed 60-second briefing: goal, rules, scoring, time"] },
      { head: "Media Creators underused", cells: ["Lowest team score, 4.1 out of 5", "A sample shot list and three must-capture moments"] },
      { head: "Few chances to lead", cells: ["“Better leader” impact, 3.9 out of 5", "The lead role rotates in at least one game a day"] },
    ],
    after:
      "Then I carried it forward. Map 02 runs the whole day on **one briefing** and a sealed Race Book. The Sunday We Vibe production pack ends by naming the one rule still open, to settle before playtest.",
    report: {
      title: "Map 01 post-event report (PDF)",
      ...drive("1-BK4H5StvA0JLutgFRhhCgpLQodW1qEn"),
      fallbackLabel: "Open the post-event report",
    },
  },

  next: {
    eyebrow: "The pipeline",
    title: "What I designed next",
    lede: "Alongside the League I developed four more formats, each with the same question underneath: *what rule makes ordinary people worth watching?* None of them aired, and each is labelled for the stage it reached.",
    cards: [
      {
        tag: "Proposal, never ran",
        title: "Map 02: Tái Hoang Dã",
        text: "A day in Cát Tiên National Park, built on the park’s real rescue-and-release work. Teams build a rescue file for one species, then defend a verdict at a fireside council: release, or keep rehabilitating.",
      },
      {
        tag: "Filmed, never edited",
        title: "Sunday We Vibe",
        text: "A weekly pickleball show. You write your opponent’s running order; they decide who is in it. Episode one was shot. Post-production never started.",
      },
      {
        tag: "Original format, pre-production",
        title: "Đêm Tiệc Mặt Nạ",
        text: "A mystery night in a Đà Lạt villa: ten heirs of four families, a corporate collapse in 2006, and a reporter hiding among them. No murder, only degrees of responsibility.",
      },
      {
        tag: "Original format, pitch",
        title: "Mật Mã Di Sản",
        text: "A heritage race across four provinces. Every team pairs Gen Z with Gen Y, and each leg is a box of local codes that only the two generations together can crack.",
      },
    ],
    docs: [
      { title: "Map 02: Tái Hoang Dã pitch deck (PDF)", ...drive("1uAESmKTmvJdpz0AhCDDkHEOXDAK2p-y0"), fallbackLabel: "Open the Map 02 pitch deck" },
      { title: "Map 02: proposal and production bible (PDF)", ...drive("1kz6f7GBWJEl6CUN6O8-SRzuCNYt5F_GM"), fallbackLabel: "Open the Map 02 proposal" },
      { title: "Sunday We Vibe EP01 production pack (PDF)", ...drive("1rwk1-AKB-A3f4qwJY_NW-nYhTSOIpqXy"), fallbackLabel: "Open the EP01 production pack" },
      { title: "Đêm Tiệc Mặt Nạ pitch deck (PDF)", ...drive("1OPP355jABtjUcisrjmySjL7KVvuBD-Dd"), fallbackLabel: "Open the Đêm Tiệc Mặt Nạ deck" },
      { title: "Mật Mã Di Sản pitch deck (PDF)", ...drive("1w89-MD0oDUCE9eXlHQTUL5SzinIvqzAf"), fallbackLabel: "Open the Mật Mã Di Sản deck" },
    ],
  },

  media: {
    eyebrow: "Media strategy",
    title: "Planning the release",
    lede: "Map 01 was planned as two TV episodes, so I wrote the release plan before the footage was cut. One decision rule sits over every post: *does this help an ordinary person become genuinely worth watching?*",
    stats: [
      { value: "9", label: "platforms, each given one job" },
      { value: "12", label: "short-video hypotheses to test" },
      { value: "T-21", label: "to T+10: a timed posting run around release" },
      { value: "5", label: "KPI gates, from narrative to brand" },
    ],
    body: [
      "It is built as an experiment, not a schedule: post, log the numbers, read the comments, recut the version that worked. The episodes were never edited, so the plan never ran.",
    ],
    docs: [
      { title: "Map 01 media plan strategy (PDF)", ...drive("1K47CfEq22saKvmf2WPOhwQ-Qhc-j1VoN"), fallbackLabel: "Open the media plan deck" },
      {
        title: "Map 01 media plan workbook (Google Sheets)",
        src: `https://docs.google.com/spreadsheets/d/${MEDIA_PLAN_SHEET_ID}/preview`,
        fallbackUrl: `https://docs.google.com/spreadsheets/d/${MEDIA_PLAN_SHEET_ID}/edit?gid=2009888852`,
        fallbackLabel: "Open the media plan workbook",
      },
    ],
  },

  brand: {
    eyebrow: "Identity design",
    title: "The brand",
    logoBoard: {
      src: img("p35-brand-logo-options.jpg"),
      alt: "The StarX branding board: three logo routes, A Rising X, B Hidden Star X and C Star Spike X, each with primary, abstract and sub-brand logos, plus supplement colours.",
      caption: "Three logo routes. We adopted A, Rising X: the star sits at the top of a climbing stroke, recognition earned at the end of the path.",
      tag: "Brand design",
    },
    body: [
      "I designed the identity end to end in Figma, then wrote a 23-page guidelines document so that three founders making decks, posts and signage would still look like one company.",
      "It is built in black and white and switched on by a single colour, Trail Orange, which only ever marks movement, decisions and scores.",
    ],
    docs: [
      { title: "StarX brand guidelines (PDF)", ...drive("1pIPP0FfDdp9uBbK-QBp3WtGwxaiTaBKN"), fallbackLabel: "Open the brand guidelines" },
      {
        title: "StarX branding file (Figma)",
        src: `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(FIGMA_FILE)}`,
        fallbackUrl: FIGMA_FILE,
        fallbackLabel: "Open the Figma file",
      },
    ],
  },

  close: {
    eyebrow: "Looking back",
    title: "What StarX taught me",
    lessons: [
      "**Write rules to be heard, not read.** A rule that works on paper can still fail in a field, in the wind, ten seconds before the whistle.",
      "**Lock the rules before the day.** Playtest on the recce. A rule changed mid-event costs more trust than it fixes.",
      "**Give every role its moment.** The roles with the fewest moments scored lowest. A format has to hand each person a turn, not just its strongest player.",
    ],
    standing:
      "I stepped away from StarX when the founders could not agree on where to take it next. I would run a League again, and I would start from the rule card.",
  },
};

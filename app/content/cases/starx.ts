/*
 * P35 StarX case copy.
 *
 * All words, captions and media references live here; the component only
 * arranges them. Use **bold** for emphasis and *single asterisks* for italic.
 * In strip/stat items, `unit` becomes the small superscript (e.g. "8.5" + "/10").
 *
 * The page proves one claim about Felix: they design rules that turn ordinary
 * people into stories, and fix them when they break. Each chapter is one
 * heading, one visual and at most two short sentences. The full documents live
 * in the library at the end; a chapter links to its document by `docs` key.
 *
 * Privacy: the scoring-sheet photo has player names blurred.
 */
import { asset } from "../../base-path";

const img = (file: string) => asset(`/images/cases/p35/${file}`);

const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`;
const sheet = (id: string, gid: string) => `https://docs.google.com/spreadsheets/d/${id}/edit?gid=${gid}`;

/** Every source document, shown once in the library at the end of the page. */
export const STARX_DOCS = {
  report: {
    title: "Map 01 post-event report",
    note: "Player survey, what worked, and the fixes for Map 02",
    meta: "PDF, 14 pages",
    url: drive("1-BK4H5StvA0JLutgFRhhCgpLQodW1qEn"),
    cover: img("docs/map01-post-event-report.jpg"),
  },
  zalo: {
    title: "Map 01 Zalo message plan",
    note: "Every message to players, timed to the minute",
    meta: "Google Sheets",
    url: sheet("1nKK6SmfhhxEiEh8ot2dBYyhlsi8LCZpN", "2082794867"),
  },
  map02Deck: {
    title: "Map 02: Tái Hoang Dã pitch deck",
    note: "The park day, its three acts, and the fireside council",
    meta: "PDF, 17 pages",
    url: drive("1uAESmKTmvJdpz0AhCDDkHEOXDAK2p-y0"),
    cover: img("docs/map02-deck.jpg"),
  },
  map02Proposal: {
    title: "Map 02: proposal and production bible",
    note: "Stations, props, safety rules and the run of the day",
    meta: "PDF, 26 pages",
    url: drive("1kz6f7GBWJEl6CUN6O8-SRzuCNYt5F_GM"),
    cover: img("docs/map02-proposal.jpg"),
  },
  swv: {
    title: "Sunday We Vibe EP01 production pack",
    note: "Rules, script, shot list and interview questions",
    meta: "PDF, 15 pages",
    url: drive("1rwk1-AKB-A3f4qwJY_NW-nYhTSOIpqXy"),
    cover: img("docs/swv-production-pack.jpg"),
  },
  maskedParty: {
    title: "Đêm Tiệc Mặt Nạ pitch deck",
    note: "Story, characters, gameplay and business model",
    meta: "PDF, 17 pages",
    url: drive("1OPP355jABtjUcisrjmySjL7KVvuBD-Dd"),
    cover: img("docs/dem-tiec-mat-na-deck.jpg"),
  },
  heritage: {
    title: "Mật Mã Di Sản pitch deck",
    note: "Concept, season plan and partner value",
    meta: "PDF, 16 pages",
    url: drive("1w89-MD0oDUCE9eXlHQTUL5SzinIvqzAf"),
    cover: img("docs/mat-ma-di-san-deck.jpg"),
  },
  mediaDeck: {
    title: "Map 01 media plan",
    note: "Format DNA, platform roles and the release test",
    meta: "PDF, 14 pages",
    url: drive("1K47CfEq22saKvmf2WPOhwQ-Qhc-j1VoN"),
    cover: img("docs/map01-media-plan-strategy.jpg"),
  },
  mediaSheet: {
    title: "Map 01 media plan workbook",
    note: "The posting calendar and tracking sheets",
    meta: "Google Sheets",
    url: sheet("1tG_Zzrqg1HQ6CZ3PjhC2Vfbv-LYqhc_O", "2009888852"),
  },
  brand: {
    title: "StarX brand guidelines",
    note: "Logo, colour, type, photography and voice",
    meta: "PDF, 23 pages",
    url: drive("1pIPP0FfDdp9uBbK-QBp3WtGwxaiTaBKN"),
    cover: img("docs/brand.jpg"),
  },
  figma: {
    title: "StarX branding file",
    note: "The logo suite and brand assets",
    meta: "Figma",
    url: "https://www.figma.com/design/7c7cltjv7qK4TrefHHPxcd/STARX-BRANDING?node-id=0-1",
  },
};

export type StarXDocKey = keyof typeof STARX_DOCS;

export const starx = {
  hero: {
    eyebrow: "Feature case",
    title: "StarX",
    image: img("p35-map01-team-dinner.jpg"),
    // Crops the overlaid League logo on wide screens and keeps every face.
    imagePosition: "50% 62%",
    imageAlt: "Felix with the StarX team and the Map 01 players around the dinner table at the Hồ Tràm villa, under the StarX League logo.",
    strip: [
      { value: "5", label: "formats designed" },
      { value: "13", label: "games run live" },
      { value: "15", label: "players scored on their roles" },
      { value: "23", label: "page brand system" },
    ],
  },

  tension: "I design rules that make ordinary people worth watching.",

  role: {
    eyebrow: "My role",
    title: "The creative lead behind the League",
    body: [
      "StarX was a premium adventure community in Hồ Chí Minh City. The founders ran production, finance and logistics. I owned the format: the games, the rules, the scripts, the release plan and the brand.",
    ],
  },

  formula: {
    eyebrow: "The method",
    title: "Every format I build has three parts",
    parts: [
      { title: "Ordinary people", text: "Cast for what they could change, not for how famous they are." },
      { title: "A rule that brings out the real person", text: "The drama comes from the rules and real pressure, never from a script." },
      { title: "The place as a character", text: "Its landscape, culture and stories shape the game. It is never a backdrop." },
    ],
    close: "No staged drama: the rules do the work.",
    docs: ["mediaDeck"] as StarXDocKey[],
  },

  map01: {
    eyebrow: "Delivered live",
    title: "The formula, live: 15 players, 4 teams, 13 games",
    chips: ["Delivered: live event", "Hồ Tràm, 27 to 28 June 2026"],
    body: [
      "Every team had three locked roles: a **Leader** makes the calls, an **Operator** runs the task, a **Media Creator** films it. Every player was scored on their role, not just on winning.",
    ],
    photos: [
      {
        src: img("p35-map01-climb.jpg"),
        alt: "Two StarX League players climbing a rope net dome at the Hồ Tràm resort, under a bright sky.",
        caption: "A climbing game on the rope dome.",
        tag: "Event photo",
        ratio: "3 / 2",
      },
      {
        src: img("p35-map01-drone.jpg"),
        alt: "Drone view of four StarX League teams in coloured shirts on a tennis court surrounded by trees.",
        caption: "Four teams on the tennis court.",
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
    after: "Players were onboarded through a minute-by-minute message plan.",
    docs: ["zalo"] as StarXDocKey[],
  },

  mapping: {
    eyebrow: "One game, up close",
    title: "Game 02: Mapping",
    body: [
      "Each team finds its hidden flag, then draws the ground it covered from memory. A fast team that can’t show its route can still lose, and it became the players’ joint favourite.",
    ],
    answerKey: {
      src: img("p35-hand-drawn-map.jpg"),
      alt: "A hand holding an LCD drawing tablet with a hand-drawn map of the resort: the beach, home 18, the playground, the tennis court and the kayak dock.",
      caption: "My answer key, drawn on an LCD tablet.",
      tag: "Game design",
      variant: "photo" as const,
      ratio: "1 / 1",
      position: "50% 42%",
    },
    scoringSheet: {
      src: img("p35-map01-scoring-sheet.jpg"),
      alt: "The StarX League Map 01 team scoring sheet: four colour-coded teams, a row per player and role, and a column per game. Player names are blurred.",
      caption: "Every player, scored on their role in every game. Printed for the 16 games planned; 13 ran on the day. Names blurred.",
      tag: "Scoring system",
    },
  },

  survey: {
    eyebrow: "The break",
    title: "Players loved my thinking games. They could not follow my rules.",
    chips: ["10 players answered", "Aggregated, anonymised"],
    stats: [
      { value: "8.5", unit: "/10", label: "overall experience" },
      { value: "3.4", unit: "/5", label: "for explaining the rules, the lowest score" },
    ],
    body: ["The two favourite games were both thinking games. The lowest score on the survey was mine to own."],
    allScoresLabel: "See all scores",
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
  },

  fix: {
    eyebrow: "The fix",
    title: "From a 3.4 to a one-page rule card",
    lede: "I wrote the post-event report, and every weak score became a rule for Map 02.",
    fixes: [
      { title: "A one-page rule card", text: "One card per game, tested while scouting the venue, locked before play." },
      { title: "A 60-second briefing", text: "Goal, rules, scoring, time: the same order before every game." },
      { title: "A shot list for Media Creators", text: "Three moments every Media Creator must capture." },
      { title: "A rotating lead role", text: "Everyone leads at least one game a day." },
    ],
    docs: ["report"] as StarXDocKey[],
  },

  range: {
    eyebrow: "Range",
    title: "Same question, four more answers",
    lede: "None of these aired. Each is labelled for the stage it reached.",
    ladder: ["Pitch", "Developed", "Filmed", "Ran live"],
    formats: [
      {
        title: "Map 01: Hồ Tràm",
        gloss: "",
        tag: "Delivered: live event",
        stage: 3,
        place: "A beach resort, game by game across its zones",
        rule: "You are scored on your role, not just on winning.",
        cover: img("docs/map01-post-event-report.jpg"),
        docs: ["report"] as StarXDocKey[],
      },
      {
        title: "Tái Hoang Dã",
        gloss: "Rewild",
        tag: "Proposal, never ran",
        stage: 1,
        place: "Cát Tiên National Park",
        rule: "Teams build a rescue file for one animal, then defend a verdict by the fire: release it, or keep it in care.",
        cover: img("docs/map02-deck.jpg"),
        docs: ["map02Deck", "map02Proposal"] as StarXDocKey[],
      },
      {
        title: "Sunday We Vibe",
        gloss: "",
        tag: "Filmed, never edited",
        stage: 2,
        place: "A weekly pickleball court",
        rule: "You decide who plays which match for the other team; they decide who is who. Post-production never started.",
        cover: img("docs/swv-production-pack.jpg"),
        docs: ["swv"] as StarXDocKey[],
      },
      {
        title: "Đêm Tiệc Mặt Nạ",
        gloss: "The Masked Party",
        tag: "Original format, pre-production",
        stage: 1,
        place: "A villa in Đà Lạt",
        rule: "Ten heirs of four families and one hidden reporter. No murder, only degrees of responsibility.",
        cover: img("docs/dem-tiec-mat-na-deck.jpg"),
        docs: ["maskedParty"] as StarXDocKey[],
      },
      {
        title: "Mật Mã Di Sản",
        gloss: "The Heritage Cipher",
        tag: "Original format, pitch",
        stage: 0,
        place: "Four provinces",
        rule: "Gen Z and Gen Y in pairs. Each code opens only when both generations crack it together.",
        cover: img("docs/mat-ma-di-san-deck.jpg"),
        docs: ["heritage"] as StarXDocKey[],
      },
    ],
  },

  world: {
    eyebrow: "Beyond the game",
    title: "I also planned how it would be seen",
    tiles: [
      {
        src: img("p35-media-platform-roles.jpg"),
        alt: "A slide from the Map 01 media plan: a table giving each platform, from YouTube long-form to Threads, its role, length and posting frequency.",
        caption: "A release plan written before the edit, built as an experiment, not a schedule. The episodes were never edited, so the plan never ran.",
        tag: "Media plan",
        docs: ["mediaDeck", "mediaSheet"] as StarXDocKey[],
      },
      {
        src: img("p35-brand-colour.jpg"),
        alt: "A page from the StarX brand guidelines: the colour system, Obsidian, Expedition White, Trail Orange, Graphite and Terrain Sand.",
        caption: "An identity in black and white, switched on by one colour: Trail Orange.",
        tag: "Brand guidelines",
        docs: ["brand", "figma"] as StarXDocKey[],
      },
    ],
  },

  principles: {
    eyebrow: "What I bring",
    title: "Three rules I now design by",
    items: [
      { title: "Write rules to be heard, not read", text: "A rule that works on paper can still fail in a field, ten seconds before the whistle." },
      { title: "Lock the rules before the day", text: "Test them while scouting the venue. A rule changed mid-event costs more trust than it fixes." },
      { title: "Give every role its moment", text: "The roles with the fewest moments scored lowest. Every player needs a turn, not just the strongest." },
    ],
    close: "I would run a League again, and I would start from the rule card.",
    cvLabel: "View CV",
    contactLabel: "Contact",
  },

  library: {
    eyebrow: "Documents",
    title: "The full documents",
    lede: "Everything behind this page, as it was written. Each opens in a new tab.",
    order: ["report", "zalo", "map02Deck", "map02Proposal", "swv", "maskedParty", "heritage", "mediaDeck", "mediaSheet", "brand", "figma"] as StarXDocKey[],
    seeLabel: "See the full doc",
  },
};

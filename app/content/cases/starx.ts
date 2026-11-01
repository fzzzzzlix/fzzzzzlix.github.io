/*
 * P35 StarX case copy.
 *
 * All words, captions, chips and media references live here; the component only
 * arranges them. Use **bold** for emphasis and *single asterisks* for italic.
 * In strip/stat items, `unit` becomes the small superscript (e.g. "8.5" + "/10").
 *
 * The page opens on a short intro, then splits into two folds the viewer opens
 * on demand: Pilot episode, Map 01 (the planning side: research, plan, live
 * event, outcome) and Format lab (the creative side: one coloured, expandable bar per
 * StarX product line, each format's document beside its text). The brand
 * sits after them as a short section of its own.
 *
 * Document embeds: `layout: "landscape"` is a 16:9 frame (decks, sheets),
 * `layout: "portrait"` a 3:4 frame (A4 reports). `open: true` shows the
 * document at load; every frame is sized to fit one screen.
 *
 * Privacy: the scoring-sheet photo has player names blurred.
 */
import { asset } from "../../base-path";

const img = (file: string) => asset(`/images/cases/p35/${file}`);

// Google Drive PDFs: `src` loads in the page, `fallbackUrl` opens Drive in a new tab.
const drive = (id: string) => ({
  src: `https://drive.google.com/file/d/${id}/preview`,
  fallbackUrl: `https://drive.google.com/file/d/${id}/view`,
});

const MEDIA_PLAN_SHEET_ID = "1tG_Zzrqg1HQ6CZ3PjhC2Vfbv-LYqhc_O";
const ZALO_PLAN_SHEET_ID = "1nKK6SmfhhxEiEh8ot2dBYyhlsi8LCZpN";
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

  intro: {
    eyebrow: "The venture",
    title: "A premium adventure community",
    body: [
      "StarX was a premium adventure community in Hồ Chí Minh City. People sign up for challenges nobody has tried before, test their limits and find their own X factor. Its promise: *anyone can be the best at a game no one has ever played.*",
      "I joined at the founding stage as Creative Lead and Format Developer. My work splits in two. **Pilot episode** shows the planning side: Map 01, the live event in Hồ Tràm, from research to results. **Format lab** shows the creative side: the formats I built for each of StarX’s three product lines. Open either one below.",
    ],
    ownedLabel: "What I owned",
    owned: ["Creative direction", "Format development", "Gameplay and rules", "Production planning", "Media strategy", "Brand identity"],
  },

  /* ---------------------------------------------------------------------- */
  /* Fold 1: Map 01, the planning side                                       */
  /* ---------------------------------------------------------------------- */
  map01: {
    id: "pilot",
    title: "Pilot episode",
    kicker: "The planning side: Map 01, 48 hours in Hồ Tràm. Researched, planned, run live and measured.",
    thumb: {
      src: img("p35-map01-drone.jpg"),
      alt: "Drone view of four StarX League teams in coloured shirts on a tennis court.",
    },
    chips: ["Delivered: live event", "27 to 28 June 2026"],
    intro:
      "**Map 01: 48 hours in Hồ Tràm**, the League’s first map and StarX’s pilot. Fifteen players, drafted into four teams, every team built from three locked roles: a **Leader**, an **Operator** and a **Media Creator**. Thirteen games in two days across a Hồ Tràm resort.",

    plan: {
      title: "The research and the plan",
      body: [
        "I treated Map 01 as more than an event: it was a body of data to learn from. The research came first. Vietnamese audiences are not tired of game shows; they are tired of staged drama and players cast for being loud. So StarX would sell real people under real rules, and one decision rule would sit over every creative call: *does this help an ordinary person become genuinely worth watching?*",
        "From that diagnosis I wrote the plan for turning Map 01 into two TV episodes, built as an experiment rather than a schedule: post, log the numbers, read the comments, recut the version that worked. The episodes were never edited, so the plan never ran.",
      ],
      stats: [
        { value: "9", label: "platforms, each given one job" },
        { value: "12", label: "short-video hypotheses to test" },
        { value: "T-21", label: "to T+10: a timed posting run around release" },
        { value: "5", label: "KPI gates, from narrative to brand" },
      ],
      docs: [
        { title: "Map 01 media plan strategy (PDF)", ...drive("1K47CfEq22saKvmf2WPOhwQ-Qhc-j1VoN"), fallbackLabel: "Open the media plan strategy", layout: "landscape" as const, open: true },
        {
          title: "Map 01 media plan workbook (Google Sheets)",
          src: `https://docs.google.com/spreadsheets/d/${MEDIA_PLAN_SHEET_ID}/preview`,
          fallbackUrl: `https://docs.google.com/spreadsheets/d/${MEDIA_PLAN_SHEET_ID}/edit?gid=2009888852`,
          fallbackLabel: "Open the media plan workbook",
          layout: "landscape" as const,
          open: true,
        },
      ],
    },

    event: {
      title: "Two days, thirteen games",
      body: [
        "The games ran from a kayak race on the river dock to a debate between teams and an Honest Talk circle at night. Every game was placed against a zone of the resort, and every player was scored on their role in every game, so a round could be judged rather than argued.",
      ],
      photos: [
        {
          src: img("p35-map01-climb.jpg"),
          alt: "Two StarX League players climbing a rope net dome at the Hồ Tràm resort, under a bright sky.",
          caption: "Day 1 in Hồ Tràm.",
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
      // Shown at their own shapes, side by side at one height.
      gamePhotos: [
        {
          src: img("p35-hand-drawn-map.jpg"),
          alt: "A hand holding an LCD drawing tablet with a hand-drawn map of the resort: the beach, home 18, the playground, the tennis court and the kayak dock.",
          caption: "My answer key for one of the games, drawn on an LCD tablet.",
          tag: "Game design",
          ratio: "3 / 4",
        },
        {
          src: img("p35-map01-scoring-sheet.jpg"),
          alt: "The StarX League Map 01 team scoring sheet: four colour-coded teams, a row per player and role, and a column per game. Player names are blurred.",
          caption: "The scoring sheet: every player, every role, every game. Names blurred.",
          tag: "Scoring system",
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
      commsDoc: {
        title: "Map 01 Zalo message plan (Google Sheets)",
        src: `https://docs.google.com/spreadsheets/d/${ZALO_PLAN_SHEET_ID}/preview`,
        fallbackUrl: `https://docs.google.com/spreadsheets/d/${ZALO_PLAN_SHEET_ID}/edit?gid=2082794867`,
        fallbackLabel: "Open the Zalo message plan",
        layout: "landscape" as const,
      },
    },

    outcome: {
      title: "What Map 01 gave us",
      chips: ["10 players answered", "Aggregated, anonymised"],
      stats: [
        { value: "8.5", label: "overall experience, out of 10" },
        { value: "8.8", label: "likelihood of recommending, out of 10" },
        { value: "10 of 10", label: "would come back" },
        { value: "3.4", label: "for explaining the rules, out of 5: the lowest score" },
      ],
      body: [
        "Proof that the format works: players rated it highly and every respondent would come back. The one weak score was mine, **explaining the rules**.",
        "I wrote the post-event report for the CEO and investors and turned each weak score into a rule for the next map: a one-page rule card per game, locked before play; a fixed 60-second briefing; a shot list for Media Creators; and a lead role that rotates.",
      ],
      report: {
        title: "Map 01 post-event report (PDF)",
        ...drive("1-BK4H5StvA0JLutgFRhhCgpLQodW1qEn"),
        fallbackLabel: "Open the post-event report",
        layout: "portrait" as const,
        open: true,
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /* Fold 2: the formats, the creative side                                  */
  /* ---------------------------------------------------------------------- */
  formats: {
    id: "format-lab",
    title: "Format lab",
    kicker: "The creative side: the formats I built for StarX’s three product lines.",
    thumb: {
      src: img("p35-map02-deck-cover.jpg"),
      alt: "Cover of the Map 02 Tái Hoang Dã pitch deck: the StarX League logo and a large red X on black.",
    },
    intro:
      "StarX had three product lines, and I developed the formats for each. Every one starts from the same question: *what rule makes ordinary people worth watching?* None of them aired; each is labelled for the stage it reached. Open a line to see its formats.",
    // Each line opens from a bar in its brand colour (StarX brand guidelines, p. 15).
    // Originals uses Mystic Violet, the guidelines’ colour for a future format.
    lines: [
      {
        id: "league",
        name: "StarX League",
        line: "Team tournaments that pair games with cultural travel legs.",
        color: "#D72638",
        logo: { src: img("p35-logo-league.png"), alt: "StarX League logo: STARX in white with a red X, LEAGUE spaced out below." },
        items: [
          {
            tag: "Proposal, never ran",
            title: "Map 02: Tái Hoang Dã",
            text: "The League’s second map: a day in Cát Tiên National Park, built on the park’s real rescue-and-release work. Teams build a rescue file for one species, then defend a verdict at a fireside council: release, or keep rehabilitating. The whole day runs on **one briefing** and a sealed Race Book, the fix for Map 01’s weakest score.",
            docs: [
              { title: "Map 02: Tái Hoang Dã pitch deck (PDF)", ...drive("1uAESmKTmvJdpz0AhCDDkHEOXDAK2p-y0"), fallbackLabel: "Open the Map 02 pitch deck", layout: "landscape" as const, open: true },
              { title: "Map 02: proposal and production bible (PDF)", ...drive("1kz6f7GBWJEl6CUN6O8-SRzuCNYt5F_GM"), fallbackLabel: "Open the Map 02 proposal", layout: "portrait" as const, open: true },
            ],
          },
        ],
      },
      {
        id: "sundaywevibe",
        name: "StarX Sunday We Vibe",
        line: "A weekly community sports event in Hồ Chí Minh City.",
        color: "#1565C0",
        logo: { src: img("p35-logo-sundaywevibe.png"), alt: "StarX Sunday We Vibe logo: STARX in white with a blue X, SUNDAYWEVIBE spaced out below." },
        items: [
          {
            tag: "Filmed, never edited",
            title: "Sunday We Vibe",
            text: "A weekly pickleball show. You write your opponent’s running order; they decide who is in it. Episode one was shot. Post-production never started. The production pack ends by naming the one rule still open, to settle before playtest.",
            docs: [
              { title: "Sunday We Vibe EP01 production pack (PDF)", ...drive("1rwk1-AKB-A3f4qwJY_NW-nYhTSOIpqXy"), fallbackLabel: "Open the EP01 production pack", layout: "portrait" as const, open: true },
            ],
          },
        ],
      },
      {
        id: "originals",
        name: "StarX Originals",
        line: "Game-show formats developed in-house.",
        color: "#9847CF",
        logo: { src: img("p35-logo-originals.png"), alt: "StarX Originals logo: STARX in white with a violet X, ORIGINALS spaced out below." },
        items: [
          {
            tag: "Original format, pre-production",
            title: "Đêm Tiệc Mặt Nạ",
            text: "A mystery night in a Đà Lạt villa: ten heirs of four families, a corporate collapse in 2006, and a reporter hiding among them. No murder, only degrees of responsibility.",
            docs: [
              { title: "Đêm Tiệc Mặt Nạ pitch deck (PDF)", ...drive("1OPP355jABtjUcisrjmySjL7KVvuBD-Dd"), fallbackLabel: "Open the Đêm Tiệc Mặt Nạ deck", layout: "landscape" as const, open: true },
            ],
          },
          {
            tag: "Original format, pitch",
            title: "Mật Mã Di Sản",
            text: "A heritage race across four provinces. Every team pairs Gen Z with Gen Y, and each leg is a box of local codes that only the two generations together can crack.",
            docs: [
              { title: "Mật Mã Di Sản pitch deck (PDF)", ...drive("1w89-MD0oDUCE9eXlHQTUL5SzinIvqzAf"), fallbackLabel: "Open the Mật Mã Di Sản deck", layout: "landscape" as const, open: true },
            ],
          },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /* The brand: a short section of its own                                   */
  /* ---------------------------------------------------------------------- */
  brand: {
    eyebrow: "Identity design",
    title: "The brand",
    body: "I was the creative director for StarX’s brand identity.",
    guidelines: { title: "StarX brand guidelines (PDF)", ...drive("1pIPP0FfDdp9uBbK-QBp3WtGwxaiTaBKN"), fallbackLabel: "Open the brand guidelines", layout: "landscape" as const, open: true },
    logoBoard: {
      src: img("p35-brand-logo-options.jpg"),
      alt: "The StarX branding board: three logo routes, A Rising X, B Hidden Star X and C Star Spike X, each with primary, abstract and sub-brand logos, plus supplement colours.",
      caption: "Three logo routes. We adopted A, Rising X: the star sits at the top of a climbing stroke, recognition earned at the end of the path.",
      tag: "Brand design",
      ratio: "3 / 2",
    },
    // Same 3:2 frame as the logo board so the two sit level.
    figma: {
      title: "StarX branding file (Figma)",
      src: `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(FIGMA_FILE)}`,
      fallbackUrl: FIGMA_FILE,
      fallbackLabel: "Open the Figma file",
      aspect: "3 / 2",
    },
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

/*
 * P35 StarX case copy.
 *
 * All words, captions, chips and media references live here; the component only
 * arranges them. Use **bold** for emphasis and *single asterisks* for italic.
 * In strip/stat items, `unit` becomes the small superscript (e.g. "8.5" + "/10").
 *
 * IMAGE SLOTS
 * Every `img*` entry below is a slot from the case's image manifest. While
 * `src` is an empty string the page renders a labelled placeholder carrying the
 * reference, what the slot needs to be and its priority. To publish a real
 * image, drop the file into public/images/cases/p35/ and set
 * `src: asset("/images/cases/p35/<file>")`. If a slot cannot be filled, delete
 * the slot and its <CaseSlot> line rather than substituting something generic.
 */
import { asset } from "../../base-path";

// Keeps the import used while every slot is still pending, and documents the
// folder the real files belong in.
export const P35_IMAGE_FOLDER = asset("/images/cases/p35/");

export const starx = {
  hero: {
    eyebrow: "Feature case",
    title: "StarX",
    descriptor: "Three-person founding team",
    extraMeta: ["No longer active"],
    strip: [
      { value: "13", label: "players at the live League event" },
      { value: "16", label: "games delivered across two days" },
      { value: "3", label: "original formats developed" },
      { value: "8.5", unit: "/10", label: "mean player experience, 10 responses" },
    ],
  },

  tension:
    "Every format had to work twice: as a live experience for the people inside it, and as footage worth watching for everyone who was not there.",

  venture: {
    eyebrow: "The venture",
    title: "What StarX was",
    standfirst: [
      "I owned the creative side of an entertainment venture: the formats, the game design, the scripts, the production plans and the brand. One League event was delivered live to thirteen players over two days. One episode was filmed. Two further formats reached pre-production before the venture wound down.",
    ],
    body: [
      "StarX was built as a premium adventure community rather than a television channel. The proposition was that ordinary people would pay to enter something unfamiliar, be challenged, and leave with a version of themselves they had not met before. Entertainment was one layer of that, not the whole of it.",
      "The brand line we worked to was *the star is discovered through the X*: X being the unknown, the challenge, the crossroads, and the star being recognition you have to earn rather than arrive with.",
      "What that meant in practice is that every format had to do two jobs at once. It had to work as a live experience for the people inside it, and it had to produce footage worth watching for the people who were not there. Those two requirements pull against each other constantly, and most of my design decisions were about that tension.",
    ],
    img01: {
      ref: "IMG-01",
      src: "",
      alt: "Wide frame from the StarX League Map 01 event with players mid-action.",
      caption: "Map 01 in progress, the two days that turned the formats from documents into a delivered event.",
      tag: "Event photo",
      need: "Wide Map 01 frame, people mid-action",
      priority: "Essential",
      variant: "photo" as const,
      ratio: "16 / 9",
    },
  },

  role: {
    eyebrow: "Ownership",
    title: "My role, and the team",
    body: [
      "StarX was three people.",
      "I was **Creative Lead and Format Developer**. I conceived the formats, designed the game mechanics and narrative structures, wrote the scripts and production plans, ran content marketing, and designed the logo and visual identity in Figma.",
      "My two co-founders owned **production**, and **finance and logistics**. Live delivery on the day was shared between all three of us.",
      "That division matters for reading this page. The concepts, rules, scripts and brand are mine. The events happened because three people ran them.",
    ],
  },

  formats: {
    eyebrow: "The portfolio",
    title: "Three formats, three different stages",
    body: [
      "StarX produced three distinct formats. They are not three unrelated side projects: they are the same design question asked at three scales, which is *what rule makes a group of people worth watching?*",
      "The statuses below are the honest ones, and they are different for each.",
    ],
    cards: [
      {
        tag: "Delivered · one live event",
        title: "StarX League",
        text: "Location-based competition. Teams of three with locked roles, a fifty-title game library, and a points economy designed to persist across seasons.",
      },
      {
        tag: "Filmed · never edited",
        title: "Sunday We Vibe",
        text: "The recurring weekly episode. A hidden-number mechanic that turns watching into playing. Episode one was shot. Post-production never started.",
      },
      {
        tag: "Original format · pre-production",
        title: "Đêm Tiệc Mặt Nạ",
        text: "A social-deduction dinner format. Four families, one corporate collapse in 2006, and five graded tiers of responsibility.",
      },
    ],
  },

  league: {
    eyebrow: "Format design",
    title: "StarX League: the format",
    img02: {
      ref: "IMG-02",
      src: "",
      alt: "A StarX League team in their locked roles, or the scoring board being filled in.",
      caption: "The League runs on locked roles and a written scoring sheet, so a round can be judged rather than argued.",
      tag: "Format artefact",
      need: "Team in role, leaderboard or scoring sheet in use",
      priority: "High",
    },
    rule: {
      title: "The rule that does the work",
      body: [
        "Every team is three people, and each person holds one locked role for the whole season: **Leader**, **Operator**, **Media Creator**. Nobody swaps.",
        "The intent is that each team always contains a strategist, a doer and a storyteller, which gives the edit three known points of view per team without briefing anyone to perform. Whether it actually produced the on-camera dynamics I designed for is not something one event can prove. It is a mechanism, stated as a mechanism.",
      ],
    },
    scoring: {
      title: "The scoring economy",
      items: [
        "**Game Score** decides each round. **Season Score** decides the champion. **Career Stats** carry across seasons, so a returning player is defending something.",
        "Five criteria per role, scored 2 to 10. The Leader on leadership, strategy, communication, decision-making and team morale. The Operator on execution, adaptability, physical, accuracy and team support. The Media Creator on storytelling, coverage, creativity, initiative and delivery.",
        "On top: MVP per game, Team Spirit out of 30, a bonus table and a penalty table.",
        "**Overall Rating** out of 100, weighted 40% game performance, 20% team contribution, 15% role, 15% media, 10% sportsmanship. Ranks run Bronze through to Grandmaster.",
      ],
      note: "Map 01 used the per-game and per-role scoring. The season and career layers were designed but never ran, because there was only ever one season.",
    },
    library: {
      title: "The library",
      body: [
        "Fifty games are titled across five categories: Agility, Strength, Endurance, Mind, and StarX Signature. **Thirteen are written out in full**, with objective, setup and scoring. The rest are named concepts waiting to be written.",
        "That is the honest state of the library. Here is one of the thirteen.",
      ],
    },
  },

  mapping: {
    eyebrow: "One game, written out",
    title: "Game 02: Mapping",
    chips: ["Played at Map 01", "Hồ Tràm", "Day 1, 09:00", "30 minutes", "4 teams"],
    img03: {
      ref: "IMG-03",
      src: "",
      alt: "A StarX League team searching for their flag, or the board they drew their route on afterwards.",
      caption: "The drawn route board is the artefact the game produces, and the reason finding the flag is not the deliverable.",
      tag: "Game artefact",
      need: "Team searching, or the drawn route board",
      priority: "Essential",
    },
    body: [
      "**Objective.** Each team finds its own flag, hidden by the crew somewhere across the eight zones of the resort.",
      "**The twist.** Finding it is not the deliverable. The team records the route it took, then draws what it found on a board afterwards. One member is assigned to capture evidence of the journey.",
      "**Constraint.** Thirty minutes. Four teams searching at once, so zones get contested.",
      "**Scoring.** Placement pays 100 / 80 / 60 / 40 by finishing order. On top of that each player is scored 2 to 10 on their five role criteria: the Leader on navigation and decisions, the Operator on execution, the Media Creator on whether the journey was actually captured.",
      "**Failure condition.** A team can finish first on placement and still lose the game on role points if it cannot evidence its route. Speed alone does not win.",
      "**Why it is worth watching.** It puts the three locked roles under pressure simultaneously and in different ways, so the edit gets three parallel stories out of one game. The search is unscripted: the crew hid the flags, so nobody, including me, knew what route a team would take. And the evidence rule forces teams to self-record, which produces first-person footage no camera operator could have got.",
      "**What the players thought.** Seven of ten survey respondents picked Mapping among their five favourite games, the joint highest score of the sixteen. Respondents could select up to five, so that is a popularity signal rather than a ranking.",
    ],
  },

  map01: {
    eyebrow: "Delivered live",
    title: "Map 01: Hồ Tràm",
    chips: ["Delivered · live event", "27 to 28 June 2026"],
    img04: {
      ref: "IMG-04",
      src: "",
      alt: "Establishing shot of the Hồ Tràm resort, its zones, or the group on arrival.",
      caption: "Hồ Tràm, the eight-zone venue the sixteen games were designed against.",
      tag: "Event photo",
      need: "Map 01 establishing shot, drone or wide",
      priority: "High",
      variant: "photo" as const,
      ratio: "16 / 9",
    },
    stats: [
      { value: "13", label: "players" },
      { value: "4", label: "teams" },
      { value: "16", label: "games delivered" },
      { value: "8", label: "venue zones" },
    ],
    recap: {
      title: "The recap",
      embedTitle: "StarX League Map 01, Hồ Tràm, recap",
      embedSrc: "https://www.youtube-nocookie.com/embed/wB1Dcjcae8s",
      embedAllow:
        "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
      fallbackUrl: "https://www.youtube.com/watch?v=wB1Dcjcae8s",
      fallbackLabel: "Watch the Map 01 recap on YouTube",
      caption:
        "Map 01 recap. Unedited beyond a rough assembly, and the only moving footage that came out of the League.",
    },
    plan: {
      title: "The plan",
      body: [
        "I recced the resort before designing a single game, mapped eight zones, and set a game count against each one: main entrance, villa, beach, river bank, challenge zone, basketball, tennis, and the F1 river dock, where the games that mattered most were placed.",
        "Teams were drafted at the venue. Four teams: Red Squid, Green Orca, Blue Shark and Golden Seahorse. Three ran three players, one ran four.",
      ],
    },
    changed: {
      title: "What changed on the day",
      body: [
        "All sixteen games were delivered. Several were re-ruled on site when the weather and the venue stopped cooperating: water games moved, timings compressed, scoring simplified so a host could still explain it in the rain.",
        "Two things I would rather name than hide. There is no written planned-versus-delivered record of those changes, so I can say the format survived being changed but not that the changes were the right ones. And one team ran four players against three, which the scoring rules do not address.",
        "Both are mine to close.",
      ],
    },
    img05: {
      ref: "IMG-05",
      src: "",
      alt: "The Hồ Tràm venue map or zone plan marked up during the recce.",
      caption: "The marked-up zone plan from the recce, the document the sixteen games were placed against.",
      tag: "Planning artefact",
      need: "Venue map or zone plan from the recce",
      priority: "Medium",
    },
  },

  survey: {
    eyebrow: "Survey evidence",
    title: "What the players said",
    chips: ["Survey · 10 of 13 players responded", "Run 30 June 2026", "Aggregated, anonymised"],
    headline: [
      { value: "8.5", label: "mean overall experience, out of 10 (range 8 to 10)" },
      { value: "8.8", label: "mean likelihood of recommending, out of 10" },
      { value: "10", label: "of 10 would return: 2 definitely, 8 if the schedule allowed" },
      { value: "0", label: "said they would not return" },
    ],
    barsTitle: "Operational satisfaction, out of 5",
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
      "Everything sat between 4.2 and 4.6 except one thing, and it is the one thing that was squarely mine. Six of ten scored rule explanation 3 out of 5. The free text named two causes: not enough information before a game, and rules that changed or were unclear.",
      "Re-ruling on site may have contributed. The comments point just as clearly at something earlier: the briefing before each game.",
      "The other finding is more interesting. The two most-picked games were both thinking games, Mapping and the underwater letter puzzle, seven votes each, ahead of every physical game. So the players wanted more of the thing I was explaining worst.",
      "So I wrote a constraint into the next format: **the rule must land in 75 seconds, or the episode has no entry point.** Rule complexity is listed as a named production risk in that workbook. It has not been validated, because that episode was never edited.",
    ],
  },

  map02: {
    eyebrow: "Designed, not run",
    title: "Map 02: Tái Hoang Dã",
    chips: ["Pre-production", "Nam Cát Tiên"],
    img06: {
      ref: "IMG-06",
      src: "",
      alt: "Nam Cát Tiên moodboard, location reference, or a page from the Tái Hoang Dã design document.",
      caption: "A page from the Tái Hoang Dã design document. The map was never run, so the document is the honest evidence.",
      tag: "Design document",
      need: "Nam Cát Tiên moodboard or a design-document page",
      priority: "Medium",
    },
    body: [
      "Cát Tiên is a real rescue and release park. Animals go back to the wild only once their health has recovered, their instincts return and a safe habitat exists. The last Javan rhino recorded in Vietnam died there in 2010.",
      "I did not want a treasure hunt in a forest. I wanted the park's own logic to be the game.",
      "**The engine.** Each team receives a simulated rescue file for one species. Across the day they gather evidence through play to answer four questions, then defend a decision:",
    ],
    questions: [
      "What species is this?",
      "How far has this individual recovered?",
      "Which habitat suits it?",
      "Release, or keep rehabilitating?",
    ],
    afterQuestions: [
      "Identify, assess, rehabilitate, test adaptation, recommend release. Wellness, trekking, sport and role-play stop being a schedule and become five stages of one procedure.",
      "No live animals feature in any activity. Species selection was to be done with the park's own specialists so the data would be accurate.",
    ],
    alternative: {
      title: "The alternative engine I am proudest of",
      body: [
        "A second story for the same map: twenty players, twenty passports, twenty fragments of one ranger archive. Nobody holds the whole story, and the rules forbid lending a passport. You may read it aloud, tell it, share it. You may not hand it over.",
        "So there is no ice-breaker. The only route through the game is conversation, and the format never has to ask anyone to mingle. It closes on a stamp rather than a prize: **OFFICIAL RANGER**, and a blank final page the player fills in themselves.",
      ],
    },
  },

  vibeMechanic: {
    eyebrow: "The recurring format",
    title: "Sunday We Vibe: the mechanic",
    chips: ["Filmed · never edited", "EP01", "July 2026"],
    img07: {
      ref: "IMG-07",
      src: "",
      alt: "Sunday We Vibe on the day: the court, the players, or the sealed strategy board being handed over.",
      caption: "The sealed strategy board changing hands, the moment the whole mechanic turns on.",
      tag: "Event photo",
      need: "The court, players, or the sealed strategy board handover",
      priority: "Essential",
      variant: "photo" as const,
      ratio: "16 / 9",
    },
    quote: "You write your opponent's running order. They decide who is in it.",
    stepsTitle: "How it works",
    steps: [
      "Team A writes a running order by number: number 1 plays round 1, number 2 plays round 3, and so on. That order is handed to Team B.",
      "Team B privately assigns its own three players to numbers 1, 2 and 3. Team A never learns who is who.",
      "Both do this simultaneously, so each side is scheduling a line-up it cannot see.",
      "After rounds 2 and 4, each team may change or keep its sealed decision. The change is not revealed.",
      "After the final rally, every player states their real number. Only then is the winner announced.",
    ],
    body: [
      "**What the rule buys.** A player's ability decides rallies. The read decides which rallies that ability is spent in, so a strong team can lose to a team that guessed better. That is what makes an upset possible without rigging anything.",
      "**What the audience does.** The viewer guesses the same thing the teams are guessing. A prediction board goes up at the setup and locks before the final round. It is designed as an on-screen graphic, not an interactive app: the viewer plays along, they do not submit anything.",
      "**What is still open.** Two things the script does not settle: how five rounds are allocated across three numbers, and whether a decision gate lets a team change the order, the identities, or both. I would fix those before a second episode.",
    ],
  },

  vibeScript: {
    eyebrow: "Production design",
    title: "Sunday We Vibe: script to screen",
    img08: {
      ref: "IMG-08",
      src: "",
      alt: "A page from the EP01 format workbook or script.",
      caption: "A sheet from the eleven-sheet EP01 format workbook. Crop or blur anything that should not be public.",
      tag: "Production paperwork",
      need: "A workbook or script page, screenshotted",
      priority: "High",
    },
    body: [
      "The episode exists as a script plus an eleven-sheet format workbook: series format layer, core loop with a pass or fail checklist per beat, twelve timecoded script blocks, five gameplay beats each with a distinct dramatic function, an edit bible, nine graphic assets with owners and QC criteria, an on-location coverage checklist, a post workflow, seven social cutdowns, and a nine-item editorial risk register.",
    ],
    tableCaption: "Act one, blocks S01 to S04, 00:00 to 03:00",
    tableLabel: "Sunday We Vibe episode one, act one script blocks",
    tableHead: ["Block", "Time", "What it is", "Its dramatic job"],
    tableRows: [
      { head: "S01", cells: ["00:00 – 00:40", "Cold open, highlight montage and VO", "Hook, plant the question, reveal nothing"] },
      { head: "S02", cells: ["00:40 – 01:00", "Ident and warm-up flash", "Set the pulse, establish the sport"] },
      { head: "S03", cells: ["01:00 – 02:15", "The hidden-number rule", "Teach the law in 75 seconds, make it the stake"] },
      { head: "S04", cells: ["02:15 – 03:00", "Finalists, player cards, orders sealed", "Plant character and the physical evidence of a decision"] },
    ],
    quotes: [
      { text: "Sẽ thế nào… nếu bạn trở thành người giỏi nhất… của một trò chưa ai từng chơi?", cite: "From S01, the voice-over" },
      { text: "Trận này không chỉ đấu kỹ năng thể thao. Nó đấu cái đầu.", cite: "From S03, closing the rules block" },
    ],
    closing: [
      "**The edit rules I wrote for this act.** The cold open uses the best footage in the episode and hides its result. Lower-thirds carry real names only, never shirt numbers, before the reveal. No score on the final rally: silence, slow motion, then a face. And every identity is revealed before the winner is announced, never after.",
      "These are instructions written before the shoot. The episode was filmed. Post-production never started, so they remain intentions rather than choices you can watch being executed.",
    ],
  },

  maskedNight: {
    eyebrow: "Original format",
    title: "Đêm Tiệc Mặt Nạ: Vụ Sụp Đổ 2006",
    chips: ["Original format · pre-production", "Đà Lạt"],
    img09: {
      ref: "IMG-09",
      src: "",
      alt: "Đêm Tiệc Mặt Nạ case board, a character card, or a table-setting mock-up.",
      caption: "The case board carries the table's two printed objectives: name the culprit, and keep the worst of it out of the press.",
      tag: "Format artefact",
      need: "Case board, character card, or table mock-up",
      priority: "Medium",
    },
    body: [
      "Four dynasties, one corporate collapse, a case board with two objectives printed on it in large type: find who was behind the 2006 takeover, and keep the worst of it out of the press.",
      "**The rule that keeps the table moving.** If nobody is found, all four families are treated as having covered it up together. If the culprit and the five-step chain are both reconstructed, responsibility is graded instead of shared.",
      "That is the design problem I set out to solve. A deduction table where concealing is the only incentive tends to stall. This gives everyone a reason to push.",
    ],
    lawsTitle: "Five rules I wrote as production law",
    laws: [
      "A player must always know what they are currently doing.",
      "A player must have a reason to solve, not only a reason to conceal.",
      "Every important clue has at least three routes to it: the villa, a minigame, or the auction and archive.",
      "Every player gets one moment to speak and one choice to make at the Final Trial.",
      "The rules must never be more complicated than the drama.",
    ],
    quote: {
      text: "Đến cuối cùng, con người không được định nghĩa bởi điều họ biết, mà bởi điều họ chọn làm với điều họ biết.",
      cite: "The line the format hangs on",
    },
    closing: [
      "Still open: the physical clue props, the full character card set, the minigames, and a full-day playtest. The format document names its own gaps rather than pretending it is production-ready.",
    ],
  },

  brand: {
    eyebrow: "Identity design",
    title: "The brand",
    chips: ["Completed · design"],
    img10: {
      ref: "IMG-10",
      src: "",
      alt: "The StarX logo on the dark ground, at size.",
      caption: "The StarX mark, designed in Figma alongside the full logo suite in vector and raster.",
      tag: "Brand asset",
      need: "The StarX logo on dark, at size",
      priority: "Essential",
    },
    body: [
      "I designed the StarX identity end to end in Figma: the mark, the full logo suite in vector and raster, and a 23-page guidelines document.",
      "The system is built in black and white and activated by a single accent. Obsidian and Expedition White carry the brand. Trail Orange owns movement, decision and recognition, at roughly ten per cent of any layout. Three fonts with one role each: display, subhead, body.",
      "The reason it exists is practical rather than decorative. Three people producing proposals, decks, social assets and on-site signage will produce five different-looking organisations unless somebody writes down what the organisation looks like. So I wrote it down.",
    ],
    img11: {
      ref: "IMG-11",
      src: "",
      alt: "A spread from the StarX brand guidelines showing the colour system or typography page.",
      caption: "A spread from the 23-page guidelines: one accent, three fonts, one role each.",
      tag: "Brand guidelines",
      need: "Guidelines spread, colour or typography page",
      priority: "High",
    },
  },

  status: {
    eyebrow: "Where each piece got to",
    title: "Status, honestly",
    tableLabel: "StarX work, role, stage reached and what exists",
    tableHead: ["Work", "My role", "Stage reached", "What exists"],
    tableRows: [
      { head: "League Map 01", cells: ["Format, game design, run of show", "Delivered live", "Game plan, comms plan, player survey, recap video"] },
      { head: "League Map 02", cells: ["Narrative and game design", "Pre-production", "Full design document"] },
      { head: "Sunday We Vibe EP01", cells: ["Format, script, production plan", "Filmed, never edited", "Script, eleven-sheet format workbook, media plan"] },
      { head: "Đêm Tiệc Mặt Nạ", cells: ["Format, narrative, game systems", "Pre-production", "Master game plan"] },
      { head: "Brand identity", cells: ["Sole designer", "Completed", "Guidelines, logo suite, Figma files"] },
    ],
  },

  standing: {
    eyebrow: "Closing",
    title: "Where this stands now",
    body: [
      "I am no longer active on StarX. The founding partners could not reach a shared agreement on where the venture should go next, and I stepped away rather than keep building against a direction the team had not settled.",
      "I am glad the work exists. Two days at Hồ Tràm taught me more about format design than any amount of writing would have, mostly because thirteen people told me afterwards exactly which part of it I had got wrong.",
      "I would run a League again.",
    ],
  },

  differently: {
    eyebrow: "Lessons",
    title: "What I would do differently",
    body: [
      "**Write the rules to be heard, not to be read.** The lowest score in the whole survey was rule clarity, and I had written every rule as a paragraph rather than as something a host says out loud in a field with wind in the microphone. The 75-second constraint in Sunday We Vibe came directly out of that.",
      "**Keep a change log during the event, not after it.** I can tell you games were re-ruled on the day. I cannot show you which ones or why, and that missing document is the difference between a story and evidence.",
      "**Decide the scoring edge cases before someone turns up.** One team had four players. The rules had nothing to say about it, so we handled it in the moment, which is exactly the kind of improvisation a season table is supposed to make unnecessary.",
    ],
  },
};

/*
 * About page copy (app/about/page.tsx).
 * Reading flow: identity + facts, then the narrative (lead, quotes, story,
 * approach) with the five /images/About photos interleaved 1-5, then capability.
 * Emphasis: **bold** / *italic* is rendered by render-inline. No em dashes.
 */
export const about = {
  meta: {
    title: "About",
    description: "Meet Felix Phan and the method connecting research, story, production and impact.",
  },
  identity: {
    eyebrow: "About Felix",
    heading: "Creative Strategist & Storyteller",
    facts: [
      { term: "Professional name", detail: "Felix Phan" },
      { term: "Legal name", detail: "Nguyen Phan Thuc Huong" },
      { term: "Pronouns", detail: "they/them" },
      { term: "Graduation", detail: "April 2027" },
      { term: "Availability", detail: "Full-time" },
      { term: "Base", detail: "Ho Chi Minh City & Hanoi" },
    ],
  },
  intro: {
    eyebrow: "About Felix",
    lead: "I'm a creative strategist and storyteller. I find the tension inside a brief, give it a structure, and stay with it until the idea works in the real world.",
  },
  story: [
    "Suffering from being too **adaptable**, exceedingly **resourceful**, and having an insanely **strong ownership attitude** – whenever a brief lands in my hands, I fight heartfully to deliver it from start to finish, with everything I have, and to a standard I am proud to own.",
    "My portfolio spans several fields, which might make you ask *what Felix actually specialises in*. Well: **my expertise is getting the job done**. I build things that need to work: projects, teams, systems, campaigns, events and research frameworks. I'm at my best when the objective matters and the problem is too complex for a template. So if you have a job that needs doing, reach out ^^",
  ],
  quote: "“I am most useful when the brief is exciting, slightly inconvenient and too human for a tidy answer”",
  approach: [
    "I work across **strategy**, **story**, and **delivery**, so an idea keeps its intent from the first insight to the final handover, with fewer gaps between the people who plan, make, and ship it.",
    "My work starts with evidence but doesn't end with a spreadsheet: research becomes a human tension, the tension becomes a structure, and the structure becomes a script, a treatment, a plan, an event, or an operating system.",
  ],
  approachClose:
    "That combination suits roles where communication must be **culturally aware**, **operationally realistic**, and **accountable to an outcome**.",
  // Interleaved through the narrative in order. Paths carry literal spaces (browsers encode them).
  images: [
    { src: "/images/About/About_1 Felix portrait.jpg", alt: "Portrait of Felix Phan", caption: "Felix Phan" },
    { src: "/images/About/About_2 Felix is a Challenger.jpg", alt: "Felix Phan taking on a challenge", caption: "A challenger by default" },
    { src: "/images/About/About_3 Felix portrait.jpg", alt: "Portrait of Felix Phan", caption: "Felix Phan" },
    { src: "/images/About/About_4 Felix on stage.jpg", alt: "Felix Phan on stage", caption: "On stage" },
    { src: "/images/About/About_5 Journalism club founder.jpg", alt: "Felix Phan as a journalism club founder", caption: "Journalism club founder" },
  ],
  capability: {
    eyebrow: "Capability",
    // [tier, title, text]
    items: [
      ["Shape the strategy", "Research design", "Research questions, qualitative and mixed-methods design, correlation and regression, NVivo coding, social-network analysis (NodeXL), and systems mapping."],
      ["Shape the strategy", "Strategic planning", "Consumer insight, social listening, thematic and sentiment coding, interviews, media planning and channel strategy."],
      ["Build the story", "Creative development", "Concepts, treatments, story structure, cast functions, sponsor integration and short-form systems."],
      ["Build the story", "Writing & editorial", "TVC scripts, short films, podcasts, proposals, copy, scenes and editorial direction."],
      ["Lead the delivery", "Operational excellence", "On-set support, source tracking, event logistics, vendor coordination, budgets, SOPs and quality control."],
      ["Lead the delivery", "Leadership", "Cross-functional teams, organisation design, fundraising, stakeholders, handover and performance review."],
    ] as [string, string, string][],
  },
  cta: {
    eyebrow: "See the method in motion",
    title: "Good claims need good proof",
    button: "Explore the work",
  },
};

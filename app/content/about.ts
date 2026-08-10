/*
 * About page copy (app/about/page.tsx).
 */
export const about = {
  meta: {
    title: "About",
    description: "Meet Felix Phan and the method connecting research, story, production and impact.",
  },
  hero: {
    eyebrow: "About Felix",
    title: "Curious enough to ask why. Practical enough to make it work",
    deck: "Felix Phan is a creative strategist and storyteller who finds the tension inside a brief, gives it structure and stays involved until the idea can operate in the real world.",
  },
  pullQuote: "“I am most useful when the brief is exciting, slightly inconvenient and too human for a tidy answer.”",
  longCopy: [
    "Felix moves meaningful ideas from insight, to story, to impact: through research, writing, production and systems that survive the handover.",
    "Felix works across strategy, story and delivery so an idea keeps its intent from the first insight to the final handover. That means fewer gaps between the people who plan, make and ship the work: one person can diagnose the problem, frame it, design the response, align the team and stay accountable for the result.",
    "Their work begins with evidence, but it does not end with a spreadsheet. Research is translated into a human tension. The tension becomes a structure. The structure becomes a script, treatment, plan, event or operating system. Then the result is described with its limitations still attached.",
    "That combination suits roles where communication must be culturally aware, operationally realistic and accountable to an outcome.",
  ],
  capability: {
    eyebrow: "Capability map",
    deck: "Grouped by the three ways Felix contributes, not as five equal skills.",
    // [tier, title, text]
    items: [
      ["Shape the strategy", "Research & planning", "Consumer insight, social listening, thematic and sentiment coding, interviews, media planning and channel strategy."],
      ["Shape the strategy", "Research methods", "Academic research experience includes research-question framing, literature review, qualitative and mixed-methods design, secondary quantitative analysis (correlation and regression), NVivo, social-network analysis (NodeXL), operationalisation, triangulation, systems mapping and research-to-editorial translation."],
      ["Build the story", "Creative development", "Concepts, treatments, story structure, cast functions, sponsor integration and short-form systems."],
      ["Build the story", "Writing & editorial", "TVC scripts, short films, podcasts, proposals, copy, scenes and editorial direction."],
      ["Lead the delivery", "Production & operations", "On-set support, source tracking, event logistics, vendor coordination, budgets, SOPs and quality control."],
      ["Lead the delivery", "Leadership", "Cross-functional teams, organisation design, fundraising, stakeholders, handover and performance review."],
    ] as [string, string, string][],
  },
  identity: {
    heading: "Creative Strategist & Storyteller",
    facts: [
      { term: "Professional name", detail: "Felix Phan" },
      { term: "Legal name", detail: "Nguyen Phan Thuc Huong" },
      { term: "Pronouns", detail: "they/them" },
      { term: "Graduation", detail: "April 2027" },
      { term: "Availability", detail: "Full-time, available now" },
      { term: "Base", detail: "Ho Chi Minh City" },
    ],
  },
  cta: {
    eyebrow: "See the method in motion",
    title: "Good claims need good proof",
    button: "Explore the work",
  },
};

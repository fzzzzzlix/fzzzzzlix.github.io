/*
 * Home page copy (app/page.tsx).
 * Edit the words here. Layout, images and links live in the page component.
 */
export const home = {
  hero: {
    eyebrow: "Creative Strategist & Storyteller",
    name: "Felix Phan",
    prop: "A creative strategist who carries ideas all the way into execution.",
    chips: ["Strategy", "Storytelling", "Project delivery"],
    primaryCta: "Explore selected work",
    quietCta: "Request CV",
    facts: ["Available for full-time role", "Ho Chi Minh City"],
    portraitAlt: "Portrait of Felix Phan",
    orbitNote: "insight → story → impact",
  },

  proofBand: [
    { value: "54", label: "person organisation founded" },
    { value: "27", label: "person team led" },
    { value: "755", label: "research comments coded" },
    { value: "30", label: "risks mapped in a full delivery plan" },
  ],

  featuredEyebrow: "Featured works",
  featuredLink: "Explore selected work",

  // Each card pulls its image + alt from the project record; the copy below is
  // the editable overlay. `route` and `id` are structural, keep them in sync.
  featured: [
    { id: "P22", title: "Little Me Interactive Exhibition", lane: "Events & Advocacy", role: "Head Organiser", proof: "A self-paced mental-wellness exhibition: 316 visits and 34,588 organic reach, evidence-controlled against its KPIs.", route: "/work/little-me" },
    { id: "P25", title: "EMPACTS: Startup Ecosystem for SDGs", lane: "Organisation Design", role: "Co-founder, Vice-President", proof: "A startup ecosystem for SDGs built from scratch, with 40+ SOPs and a full leadership handover.", route: "/work/empacts" },
    { id: "P31", title: "Be Local", lane: "Project Management", role: "Project Manager", proof: "A community-based tourism venture planned as a real project: a 30-risk register, five phases from scope to launch, and delegated ownership under weekly review.", route: "/work/be-local" },
    { id: "P13", title: "MAGGI Recipe Solution: Research to Execution", lane: "Research & Execution", role: "Researcher, Strategic Planner, and Scriptwriter", proof: "74 posts and 755 coded comments turned into an authentic-convenience direction, then a Tết TVC script and storyboard.", route: "/work/maggi-recipe-solution" },
    { id: "P20", title: "TRESemmé Vietnam Insights Report and Media Plan", lane: "Research & Planning", role: "Researcher and Strategic Planner", proof: "Cross-platform TikTok/Facebook/Instagram/YouTube diagnosis and a VND 7.3B media plan proposal.", route: "/work/tresemme-insights-media-plan" },
    { id: "P02", title: "Mùa Hạ Của Chúng Tôi", lane: "Scriptwriting & Direction", role: "Writer; co-director and co-editor", proof: "A coming-of-age short film whose class collective won First Prize for audience engagement in a graduation showcase.", route: "/work/mua-ha-cua-chung-toi" },
  ],

  method: {
    eyebrow: "The operating method",
    title: "Felix’s approach to every brief",
    steps: [
      { title: "Find the tension", text: "Locate the human, cultural or operational contradiction inside the brief." },
      { title: "Give it structure", text: "Turn evidence into a story, system, treatment, plan or experience people can follow." },
      { title: "Make it real", text: "Write, coordinate, produce and protect the idea across the work." },
      { title: "Stay for the outcome", text: "Track what happened, state the limitation and leave the next person a clean handover." },
    ],
  },

  routes: {
    eyebrow: "Choose your route",
    title: "Same Felix. Different reason to call",
    // `filter` maps to a work-page category, keep it valid.
    rows: [
      { title: "Shape the strategy", text: "Mixed-methods research, insight and planning that points to a decision", filter: "Strategy & Research", proof: "MAGGI, TRESemmé, Scienceporium, Việt Á and Pakistan studies" },
      { title: "Build the story", text: "Scriptwriting, creative development and content that carries the idea", filter: "Creative Content", proof: "Mùa Hạ Của Chúng Tôi, BUV TVC, VinFast campaign series" },
      { title: "Lead the delivery", text: "Projects, events and operations that actually ship", filter: "Project Management", proof: "EMPACTS, Be Local, Little Me" },
    ],
  },

  interestCallout: {
    eyebrow: "Focus areas",
    title: "The Impact-maker",
    text: "Work across sustainable development, ESG, CSR and social-enterprise support, mixed-methods research and systems thinking, alongside Vietnamese culture, media and social advocacy.",
    cta: "Explore the focus areas",
  },

  closing: {
    eyebrow: "Available for full-time role",
    emailCta: "Email Felix",
    aboutCta: "Meet the person behind the method",
  },
};

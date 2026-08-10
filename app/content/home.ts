/*
 * Home page copy (app/page.tsx).
 * Edit the words here. Layout, images and links live in the page component.
 */
export const home = {
  hero: {
    eyebrow: "Creative Strategist & Storyteller",
    name: "Felix Phan",
    prop: "A creative strategist who carries ideas all the way into execution",
    chips: ["Strategy", "Storytelling", "Project delivery"],
    primaryCta: "Explore selected work",
    quietCta: "View CV",
    facts: ["Available for full-time role", "Ho Chi Minh City & Hanoi"],
    portraitAlt: "Portrait of Felix Phan",
    orbitNote: "insight → story → impact",
  },

  proofBand: [
    { value: "99", label: "xxx" },
    { value: "99", label: "xxx" },
    { value: "99", label: "xxx" },
    { value: "99", label: "xxx" },
  ],

  featuredEyebrow: "Featured works",
  featuredLink: "Explore selected work",
  // Each card pulls its image + alt from the project record; the copy below is
  // the editable overlay. `route` and `id` are structural, keep them in sync.
  featured: [
    { id: "P22", title: "Little Me Interactive Exhibition", lane: "Events & Advocacy", role: "Founder, Head Organiser", proof: "An interactive exhibition under the mental-wellness theme that achieved 316 visits, 34,588 organic reach, and 14M VND funding.", route: "/work/little-me" },
    { id: "P25", title: "EMPACTS: Startup Ecosystem for SDGs", lane: "Organisation Design", role: "Founder, Vice-President", proof: "Built a non-profit organisation from scratch, with 40+ SOPs and a full leadership handover.", route: "/work/empacts" },
    { id: "P31", title: "Be Local", lane: "Project Management", role: "Founder, Project Manager", proof: "A community-based tourism venture planned as a real project. Output: 12 deliverables, including WBS in MPP for five phases from scope to launch - all delegated ownership under weekly review.", route: "/work/be-local" },
    { id: "P13", title: "MAGGI Recipe Solution: Research to Execution", lane: "Research & Planning", role: "Researcher and Strategic Planner", proof: "An inclusive project using social listening analysis of 74 posts and 755 coded comments to propose an IMC Tet campaign for MAGGI new product line.", route: "/work/maggi-recipe-solution" },
    { id: "P20", title: "TRESemmé Vietnam Insights Report and Media Plan", lane: "Research & Planning", role: "Researcher and Strategic Planner", proof: "Cross-platform TikTok/Facebook/Instagram/YouTube diagnosis and a VND 7.3B media plan proposal.", route: "/work/tresemme-insights-media-plan" },
    { id: "P02", title: "Mùa Hạ Của Chúng Tôi", lane: "Scriptwriting & Production", role: "Director, Writer, and Co-editor", proof: "A coming-of-age short film that won First Prize in the graduation showcase.", route: "/work/mua-ha-cua-chung-toi" },
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
    eyebrow: "Range is my strength. I'm adaptive, resourceful, and have insanely ownership attitude - therefore, whenever a brief landed on my hand, I would likely to heartfully fight to deliver it from start to finish with everything I have and in highest quality I approve. My portfolio showcase many projects from too many fields, this might cause confusion on what actually does Felix specialize? Well, my expertise is to get the job done, whatever the job is. If you also have a job need to be done, feel free to reach out.",
    title: "A one-man army",
    // `filter` maps to a work-page category, keep it valid.
    rows: [
      { title: "Shape the strategy", text: "Mixed-methods research, insight, and planning that enable decision-making", filter: "Strategy & Research", proof: "MAGGI, TRESemmé, Scienceporium, Việt Á and Pakistan studies" },
      { title: "Build the story", text: "Creative development, scriptwriting, and content that carries the idea", filter: "Creative Content", proof: "Mùa Hạ Của Chúng Tôi, BUV TVC, VinFast campaign series" },
      { title: "Lead the delivery", text: "Projects, events, and operations that actually ship", filter: "Project Management", proof: "EMPACTS, Be Local, Little Me" },
    ],
  },

  interestCallout: {
    eyebrow: "Focus areas",
    title: "The Impact-maker",
    
    text: "Work across sustainable development, ESG, CSR and social-enterprise support, mixed-methods research, and systematic-thinking, alongside Vietnamese culture, media, and social advocacy.",
    cta: "Explore the focus areas",
  },

  closing: {
    eyebrow: "Available for full-time role",
    emailCta: "Email Felix",
    aboutCta: "Meet the person behind the method",
  },
};

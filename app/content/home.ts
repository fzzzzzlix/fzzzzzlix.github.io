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
    { value: "2", label: "bachelor degrees, completed simultaneously" },
    { value: "4", label: "initiatives founded" },
    { value: "25", label: "selected projects" },
    { value: "54", label: "member-org managed" },
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

  routes: {
    aboutCta: "More about Felix",
    lead: [
      "Suffering from being too **adaptable**, exceedingly **resourceful**, and having an insanely **strong ownership attitude** – whenever a brief lands in my hands, I fight heartfully to deliver it from start to finish, with everything I have, and to a standard I am proud to own.",
      "My portfolio spans several fields; this might cause confusion about *what Felix actually specializes in?* – Well, **my expertise is to get the job done**. I build things that need to work: projects, teams, systems, campaigns, events, and research frameworks. I am most effective when there is a meaningful objective and enough complexity that execution cannot simply follow a template – So if you also have a job that needs to be done, feel free to reach out ^^",
    ],
    title: "A one-man army",
    image: { src: "/images/Home/Home_A one-man army.jpg", alt: "Felix Phan working across a project end to end" },
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
    image: { src: "/images/Home/Home_The Impact-maker.jpg", alt: "Felix Phan driving social impact" },
  },

  closing: {
    eyebrow: "Available for full-time role",
    emailCta: "Email Felix",
    aboutCta: "Meet the person behind the method",
  },
};

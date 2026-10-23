/*
 * Focus Areas / Interests page copy (app/interests/page.tsx).
 * `id` is the area's jump-link anchor; `projects` holds the project ids shown
 * under each area: keep both valid. Photos carry their pixel size (w, h) so a
 * pair can sit side by side at one shared height without cropping.
 */
export const interests = {
  meta: {
    title: "Focus Areas",
    description: "Felix Phan's work across sustainable development, ESG, CSR, culture and social advocacy.",
  },
  hero: {
    eyebrow: "Focus Areas",
    title: "Three interests that run through every project",
    deck: "Sustainable development, culture and media, and social advocacy shape the briefs Felix takes on and how Felix spends an ordinary day, from Hà Giang field trips to concert fancams and Pride Week.",
  },
  projectsLabel: "Projects in this area",
  cards: [
    { id: "sustainability", title: "Sustainable Development", text: "Sustainable development, ESG, CSR and social-enterprise support, from EMPACTS to the education-inequality white paper.", projects: ["P25", "P17", "P04"], images: [
      { src: "/images/Focus area/Focus_Sustainable Development 1_Ha Giang trip.jpg", w: 1920, h: 2560, alt: "Felix Phan on a Hà Giang field trip", caption: "Hà Giang field trip" },
      { src: "/images/Focus area/Focus_Sustainable Development 2_Pitch.jpg", w: 1706, h: 1137, alt: "Felix Phan pitching a sustainability venture", caption: "Pitching the venture" },
    ] },
    { id: "culture", title: "Culture & Media", text: "Vietnamese heritage, contemporary culture, identity, collective memory and how media represents them.", projects: ["P11", "P16", "P33"], images: [
      { src: "/images/Focus area/Focus_Culture & Media 1_Felix is a videographer.jpg", w: 2048, h: 1365, alt: "Felix Phan working as a videographer", caption: "On camera as videographer" },
      { src: "/images/Focus area/Focus_Culture & Media_Felix at a cutural branding concert.jpg", w: 960, h: 1280, alt: "Felix Phan at a cultural branding concert", caption: "Received over 2 million views at my fancam site for concerts and music shows" },
    ] },
    { id: "advocacy", title: "Social Advocacy", text: "Inclusion, diversity, student rights and wellbeing, delivered through events and student-leadership roles.", projects: ["P22", "P30", "P14"], images: [
      { src: "/images/Focus area/Focus_Social advocacy 2_Pride week host.jpg", w: 2560, h: 1704, alt: "Felix Phan hosting Pride Week", caption: "Hosting Pride Week" },
      { src: "/images/Focus area/Focus_Social advocacy 2_Petals of love charity fundraising.jpeg", w: 1440, h: 959, alt: "Felix Phan at the Petals of Love charity fundraiser", caption: "Petals of Love charity fundraiser" },
    ] },
  ],
};

/*
 * Focus Areas / Interests page copy (app/interests/page.tsx).
 * `projects` holds the project ids embedded under each area, keep them valid.
 */
export const interests = {
  meta: {
    title: "Focus Areas",
    description: "Felix Phan's work across sustainable development, ESG, CSR, culture and social advocacy.",
  },
  hero: {
    eyebrow: "Focus Areas",
    title: "The subjects Felix keeps returning to",
  },
  cards: [
    { title: "Sustainable Development", text: "Sustainable development, ESG, CSR and social-enterprise support, from EMPACTS to the education-inequality white paper.", projects: ["P25", "P17", "P04"], images: [
      { src: "/images/Focus area/Focus_Sustainable Development 1_Ha Giang trip.jpg", alt: "Felix Phan on a Hà Giang field trip", caption: "Hà Giang field trip" },
      { src: "/images/Focus area/Focus_Sustainable Development 2_Pitch.jpg", alt: "Felix Phan pitching a sustainability venture", caption: "Pitching the venture" },
    ] },
    { title: "Culture & Media", text: "Vietnamese heritage, contemporary culture, identity, collective memory and how media represents them.", projects: ["P11", "P16", "P33"], images: [
      { src: "/images/Focus area/Focus_Culture & Media 1_Felix is a videographer.jpg", alt: "Felix Phan working as a videographer", caption: "On camera as videographer" },
      { src: "/images/Focus area/Focus_Culture & Media_Felix at a cutural branding concert.jpg", alt: "Felix Phan at a cultural branding concert", caption: "At a cultural branding concert" },
    ] },
    { title: "Social Advocacy", text: "Inclusion, diversity, student rights and wellbeing, delivered through events and student-leadership roles.", projects: ["P22", "P30", "P14"], images: [
      { src: "/images/Focus area/Focus_Social advocacy 2_Pride week host.jpg", alt: "Felix Phan hosting Pride Week", caption: "Hosting Pride Week" },
      { src: "/images/Focus area/Focus_Social advocacy 2_Petals of love charity fundraising.jpeg", alt: "Felix Phan at the Petals of Love charity fundraiser", caption: "Petals of Love charity fundraiser" },
    ] },
  ],
};

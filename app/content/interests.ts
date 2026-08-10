/*
 * Focus Areas / Interests page copy (app/interests/page.tsx).
 * `filter` maps each card to a work-page category, keep it valid.
 */
export const interests = {
  meta: {
    title: "Focus Areas",
    description: "Felix Phan's work across sustainable development, ESG, CSR, culture and social advocacy.",
  },
  hero: {
    eyebrow: "Focus Areas",
    title: "The subjects Felix keeps returning to",
    deck: "Focus areas become credible when they shape completed work, not when they sit alone in a biography.",
  },
  cards: [
    { title: "Sustainable Development", text: "Sustainable development, ESG, CSR and social-enterprise support, from EMPACTS to the education-inequality white paper.", filter: "Sustainability & Advocacy" },
    { title: "Culture & Media", text: "Vietnamese heritage, contemporary culture, identity, collective memory and how media represents them.", filter: "Culture & Editorial" },
    { title: "Research & Systems", text: "Mixed-methods research, operationalisation, social listening, network analysis and systems thinking, from Scienceporium to the Việt Á and Pakistan studies.", filter: "Strategy & Research" },
    { title: "Social Advocacy", text: "Inclusion, diversity, student rights and wellbeing, delivered through events and student-leadership roles.", filter: "Event & Production" },
  ],
  thesis: {
    eyebrow: "The principle",
    // Rendered as two lines separated by a break.
    titleLines: ["Respect the context", "Make the idea usable"],
    text: "Culture should not become decoration. Advocacy should not become a slogan. Sustainability should not become a claim without a system behind it.",
  },
};

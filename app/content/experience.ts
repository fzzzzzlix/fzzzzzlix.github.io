/*
 * Experience page copy (app/experience/page.tsx).
 * `projects` holds project ids for the "Related projects" links, keep them valid.
 */
export const experience = {
  meta: {
    title: "Experience",
    description: "Felix Phan's progression through content, production, events, leadership and organisation design.",
  },
  hero: {
    eyebrow: "Experience",
    title: "Work, leadership, and delivery",
    deck: "Felix moved from making content, to planning it, to directing teams, organising experiences and building systems that other people could use.",
  },
  timeline: [
    { dates: "Feb - May 2026", org: "MBE: Mien Bac Event", role: "Assistant to Director, Internship", scope: "Supported seven corporate events and a 270-person touring day through preparation, logistics, vendor and construction coordination, plus SOP and checklist systems.", projects: ["P24"] },
    { dates: "May - Dec 2024", org: "EMPACTS: Startup Ecosystem for SDGs", role: "Co-founder and Vice-President", scope: "Co-founded an organisation with six departments and built its public architecture, operating logic and leadership handover. Internal organisational documents remain confidential.", projects: ["P25"] },
    { dates: "Mar - Jul 2024", org: "ForArt Film Production", role: "Creative Intern", scope: "Contributed across commercial proposals and production projects, spanning lead creative, collaborative scriptwriting, proposal and pitch work, on-set assistance and BTS content. Some outputs were proposal-stage; others reached production.", projects: ["P05", "P06", "P10"] },
    { dates: "Sep 2023 - Jun 2024", org: "RMIT Innovation & Entrepreneurship Club Hanoi", role: "Assistant to Vice President, Operations and Marketing Lead", scope: "Supported workshops, panel talks and a student fundraiser through team leadership, operations and marketing.", projects: ["P26"] },
    { dates: "Oct 2022 - Jun 2024", org: "RMIT Vietnam Student Council Hanoi", role: "Content Creator → Media Planner → Director of Content → Student Rights & Welfare Officer", scope: "Progressed through content leadership before election. As Student Rights & Welfare Officer, served as Head Organiser for Little Me and Relax & Recharge.", projects: ["P22", "P23", "P29"] },
  ],
  education: {
    eyebrow: "Education",
    title: "Education",
    items: [
      { span: "2022 - April 2027", title: "National Economics University", text: "Bachelor of Business Administration in English" },
      { span: "2022 - April 2027", title: "RMIT University", text: "Bachelor of Professional Communication" },
    ],
    note: "Available for full-time opportunities now, alongside final-stage study commitments through to graduation in April 2027.",
  },
  credentials: {
    eyebrow: "Selected credentials",
    title: "Certified skills, plainly stated",
    items: [
      { span: "2020 - 2022", title: "Microsoft Office Specialist", text: "Word 2013, PowerPoint 2013, Excel 2016 and PowerPoint 2016." },
      { span: "2022", title: "National Consolation Prize", text: "Microsoft Office Specialist World Championship, Viettel 2022." },
    ],
    note: "Certificates are issued to Nguyen Phan Thuc Huong, Felix Phan’s legal name.",
  },
  cta: {
    eyebrow: "The useful next question",
    title: "What did those roles produce?",
    button: "Explore selected work",
  },
};

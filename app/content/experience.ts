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
    deck: "Felix moved from making content, to planning it, to directing teams, organising SOPs, and building systems that other people could use.",
  },
  timeline: [
    { dates: "Feb - May 2026", org: "MBE: Mien Bac Event", role: "Assistant to Director, Internship", scope: "• Streamlined executive operations for the Director across 4 events, reducing meeting prep time by 60% and enabling same-day action item resolution across all stakeholder follow-ups."
      "Delivered end-to-end logistics for 7 corporate events (50-400 attendees), managing timelines, vendor coordination, and construction supervision."
      "Coordinated a 270-guest client touring day in Hanoi, delivering on-time across 6 logistical workstreams."},
    { dates: "May - Dec 2024", org: "EMPACTS: Startup Ecosystem for SDGs", role: "Founder and Vice-President", scope: "• Designed 40+ SOPs and defined 21 roles across 6 departments, establishing clear workflows and decision making authority and enabling seamless handover to the next leadership cohort."
      "• Managed the full project lifecycle for a 54-member organization including strategic planning, role design, cross functional delivery tracking, and performance review.", projects: ["P25"] },
    { dates: "Mar - Jul 2024", org: "ForArt Film Production", role: "Creative Intern", scope: "• Coordinated on-set execution for 2 campaign productions, tracking timeline adherence and controlling on-set quality across all shoot days."
      "• Ideated and scripted 3 commercial TVC campaigns for VinFast, BUV, and Hapacol, producing 4 rounds of scripts per campaign from brief to final storyboard, all delivered on scope and timeline."
      "• Managed the full production cycle for a short-form content series supporting the VF5 × Kim Joo Yung campaign.", projects: ["P05", "P06", "P10"] },
    { dates: "Sep 2023 - Jun 2024", org: "RMIT Innovation & Entrepreneurship Club Hanoi", role: "Assistant to Vice President, Operations and Marketing Lead", scope: "• Led a 42-person operations team to deliver a series of workshops and panel talks across Hanoi – achieved ~200 attendees, 5 industry speakers, and 30,000+ engagements on social media per cycle."
      "• Supervised HR and Media departments, managing cross-functional coordination and ensuring output quality across both teams."
      "• Directed a 12-person team for a charity fundraiser supporting pediatric cancer patients at Hanoi's K Hospital – conceptualized, produced, and sold a handmade product line that raised 20,000,000 VND and generated 20,000+ engagements on social media within 2 weeks.", projects: ["P26"] },
    { dates: "Oct 2022 - Jun 2024", org: "RMIT Vietnam Student Council Hanoi", role: "Content Creator → Media Planner → Director of Content → Student Rights & Welfare Officer", scope: "• Led a 27-person team in producing a full-scale interactive exhibition on mental wellness – achieved 316 visits, a 6.96% return rate, and 34,500+ engagements on social media within 3 days."
      "• Led a 25-person team in organizing the Student Council's annual Christmas event – delivered 225 booth visits, 101 workshop attendees, and 15,000+ engagements on social media across 5 days."
      "• Collaborated with 5 RMIT University departments to identify student welfare gaps and advocate for policy changes, resulting in cross-institutional action.", projects: ["P22"] },
  ],
  education: {
    eyebrow: "Education",
    title: "Education",
    items: [
      { span: "2022 - April 2027", title: "Bachelor of Professional Communication", text: "RMIT University" },
      { span: "2022 - April 2027", title: "Bachelor of Business Administration in English", text: "National Economics University" },
    ],
    note: "Available for full-time opportunities since I have complete all cources and will recieve my degrees at the graduation ceremonies in April 2027.",
  },
  credentials: {
    eyebrow: "Selected credentials",
    title: "Certified skills, plainly stated",
    longCopy: [
      "•	NEU Academic Encouragement Scholarship Recipient in 2023, 2024, and 2025."
      "•	Diversity & Inclusion Award of RMIT University 2023."
      "•	Top 15 National of Map the System by Skoll Centre, University of Oxford, in 2023"
      "•	National Consolation of Microsoft Office Specialist World Championship 2022."
      "•	Jury member at HAEC Entrepreneurship Summer Camp 2024."
      "•	Elected as Student Rights & Welfare Officer of RMIT Vietnam Student Council term 2023-2024."
      "•	Elected Ambassador of the Business School, National Economics University, in 2023."
      "•	Talent Scholarship of Vin University (70%) in 2022."
      "•	Microsoft Office Specialist (Words, PowerPoint, Excel) cerified by IIG Vietnam, in 2021."
    ],
    note: "Certificates are issued to Nguyen Phan Thuc Huong, Felix Phan’s legal name.",
  },
  cta: {
    eyebrow: "The useful next question",
    title: "What did those roles produce?",
    button: "Explore selected work",
  },
};

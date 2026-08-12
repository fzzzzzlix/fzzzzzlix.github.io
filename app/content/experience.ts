/*
 * Experience page copy (app/experience/page.tsx).
 * `scope` is an array of bullet lines; the page renders each as a list item.
 * `links` are external company website/social links (label + url).
 * `images` are evidence photos for that role (paths under /public, wrapped in asset()).
 */
export const experience = {
  meta: {
    title: "Experience",
    description: "Felix Phan's progression through content, production, events, leadership and organisation design.",
  },
  timeline: [
    { dates: "Feb - May 2026", org: "MBE: Mien Bac Event", role: "Assistant to Director, Internship", scope: [
      "Streamlined executive operations for the Director across 4 events, reducing meeting prep time by 60% and enabling same-day action item resolution across all stakeholder follow-ups.",
      "Delivered end-to-end logistics for 7 corporate events (50-400 attendees), managing timelines, vendor coordination, and construction supervision.",
      "Coordinated a 270-guest client touring day in Hanoi, delivering on-time across 6 logistical workstreams.",
    ], links: [
      { label: "Website", url: "https://sukienmienbac.vn/" },
    ], images: [
      "/images/p24-mbe.jpg",
    ] },
    { dates: "May - Dec 2024", org: "EMPACTS: Startup Ecosystem for SDGs", role: "Founder and Vice-President", scope: [
      "Designed 40+ SOPs and defined 21 roles across 6 departments, establishing clear workflows and decision making authority and enabling seamless handover to the next leadership cohort.",
      "Managed the full project lifecycle for a 54-member organization including strategic planning, role design, cross functional delivery tracking, and performance review.",
    ], links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/company/empacts/posts/?feedView=all" },
      { label: "Facebook", url: "https://www.facebook.com/empacts.org" },
    ], images: [
      "/images/cases/p25/p25-onepager-1.png",
      "/images/cases/p25/p25-felix.jpg",
    ] },
    { dates: "Mar - Jul 2024", org: "ForArt Film Production", role: "Creative Intern", scope: [
      "Coordinated on-set execution for 2 campaign productions, tracking timeline adherence and controlling on-set quality across all shoot days.",
      "Ideated and scripted 3 commercial TVC campaigns for VinFast, BUV, and Hapacol, producing 4 rounds of scripts per campaign from brief to final storyboard, all delivered on scope and timeline.",
      "Managed the full production cycle for a short-form content series supporting the VF5 × Kim Yoo-jung campaign.",
    ], links: [
      { label: "Website", url: "https://forartproduction.com/" },
      { label: "Vimeo", url: "https://vimeo.com/forartfilm" },
      { label: "Facebook", url: "https://www.facebook.com/ForArtFilm/" },
    ], images: [
      "/images/p10-onset-1.jpg",
      "/images/p10-onset-2.jpg",
    ] },
    { dates: "Sep 2023 - Jun 2024", org: "RMIT Innovation & Entrepreneurship Club Hanoi", role: "Assistant to Vice President, Operations and Marketing Lead", scope: [
      "Led a 42-person operations team to deliver a series of workshops and panel talks across Hanoi – achieved ~200 attendees, 5 industry speakers, and 30,000+ engagements on social media per cycle.",
      "Supervised HR and Media departments, managing cross-functional coordination and ensuring output quality across both teams.",
      "Directed a 12-person team for a charity fundraiser supporting pediatric cancer patients at Hanoi's K Hospital – conceptualized, produced, and sold a handmade product line that raised 20,000,000 VND and generated 20,000+ engagements on social media within 2 weeks.",
    ], links: [
      { label: "Facebook", url: "https://www.facebook.com/ieclub.hn/" },
    ], images: [
      "/images/cases/p26/p26-iec-leaders.jpg",
      "/images/cases/p26/p26-iec-event.jpg",
      "/images/cases/p26/p26-petals-recap.jpg",
    ] },
    { dates: "Oct 2022 - Jun 2024", org: "RMIT Vietnam Student Council Hanoi", role: "Content Creator → Media Planner → Director of Content → Student Rights & Welfare Officer", scope: [
      "Led a 27-person team in producing a full-scale interactive exhibition on mental wellness – achieved 316 visits, a 6.96% return rate, and 34,500+ engagements on social media within 3 days.",
      "Led a 25-person team in organizing the Student Council's annual Christmas event – delivered 225 booth visits, 101 workshop attendees, and 15,000+ engagements on social media across 5 days.",
      "Collaborated with 5 RMIT University departments to identify student welfare gaps and advocate for policy changes, resulting in cross-institutional action.",
    ], links: [
      { label: "Read more (RMIT)", url: "https://www.rmit.edu.vn/students/student-news-and-events/student-news/student-council-empowering-voices-rmit-vietnam" },
    ], images: [
      "/images/cases/student council web.jpg",
      "/images/cases/student council election.jpg",
      "/images/cases/student council inclusion award.jpg",
      "/images/cases/student council cert.jpg",
    ] },
  ],
  education: {
    eyebrow: "Education",
    title: "Education",
    items: [
      { span: "2022 - April 2027", title: "Bachelor of Professional Communication", text: "RMIT University" },
      { span: "2022 - April 2027", title: "Bachelor of Business Administration in English", text: "National Economics University" },
    ],
    note: "Available for full-time opportunities since I have completed all courses and will receive my degrees at the graduation ceremonies in April 2027.",
  },
  credentials: {
    eyebrow: "Selected credentials",
    title: "Other achievements",
    list: [
      "NEU Academic Encouragement Scholarship Recipient in 2023, 2024, and 2025.",
      "Diversity & Inclusion Award of RMIT University 2023.",
      "Top 15 National of Map the System by Skoll Centre, University of Oxford, in 2023.",
      "National Consolation of Microsoft Office Specialist World Championship 2022.",
      "Jury member at HAEC Entrepreneurship Summer Camp 2024.",
      "Elected as Student Rights & Welfare Officer of RMIT Vietnam Student Council term 2023-2024.",
      "Elected Ambassador of the Business School, National Economics University, in 2023.",
      "Talent Scholarship of Vin University (70%) in 2022.",
      "Microsoft Office Specialist (Word, PowerPoint, Excel) certified by IIG Vietnam, in 2021.",
    ],
    note: "Certificates are issued to Nguyen Phan Thuc Huong, Felix Phan’s legal name.",
    // Continuous achievements marquee. Filenames contain spaces (browsers encode
    // them on request); to add more, drop files in the folder and append here.
    slideshow: [
      "/images/cases/Slideshow cert/1 Cert full.jpg",
      "/images/cases/Slideshow cert/2 SC.jpg",
      "/images/cases/Slideshow cert/3 student council inclusion award 2.jpg",
      "/images/cases/Slideshow cert/4 BUV cert.jpg",
      "/images/cases/Slideshow cert/5 Kawaii startup.jpg",
      "/images/cases/Slideshow cert/6 IEC.jpg",
      "/images/cases/Slideshow cert/7 MOA.jpg",
      "/images/cases/Slideshow cert/8 CMO.jpg",
      "/images/cases/Slideshow cert/9 Kawaii startup 1.jpg",
      "/images/cases/Slideshow cert/10 HR Sandbox.jpg",
      "/images/cases/Slideshow cert/11 d4i.png",
      "/images/cases/Slideshow cert/11 stratic.jpg",
      "/images/cases/Slideshow cert/12 lac.jpg",
      "/images/cases/Slideshow cert/12 ppg.jpg",
      "/images/cases/Slideshow cert/13 MOS National award.jpg",
      "/images/cases/Slideshow cert/14 MOS National cert.jpg",
      "/images/cases/Slideshow cert/15 MOS_Excel 2016.jpg",
      "/images/cases/Slideshow cert/16 MOS_Powerpoint 2013.jpg",
      "/images/cases/Slideshow cert/17 MOS_Powerpoint 2016.jpg",
      "/images/cases/Slideshow cert/18 MOS_Word 2013.jpg",
      "/images/cases/Slideshow cert/19 Charity.png",
      "/images/cases/Slideshow cert/20 certificate-171509.png",
      "/images/cases/Slideshow cert/21 aphw.jpg",
      "/images/cases/Slideshow cert/22 paidia.jpg",
      "/images/cases/Slideshow cert/23 gcb.jpg",
      "/images/cases/Slideshow cert/24 lumiere.jpg",
      "/images/cases/Slideshow cert/25 labougie2.png",
      "/images/cases/Slideshow cert/26 labeaute.jpg",
      "/images/cases/Slideshow cert/27 ccc.jpg",
      "/images/cases/Slideshow cert/28 anatolie.jpg",
      "/images/cases/Slideshow cert/29 hdt.jpg",
    ] as string[],
  },
  cta: {
    eyebrow: "The useful next question",
    title: "What did those roles produce?",
    button: "Explore selected work",
  },
};

import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { projects } from "../data";

export const metadata: Metadata = { title: "Experience", description: "Felix Phan's progression through content, production, events, leadership and organisation design.", alternates: { canonical: "/experience" } };

const projectById = Object.fromEntries(projects.map((p) => [p.id, p]));

const experience = [
  { dates: "Feb - May 2026", org: "MBE: Mien Bac Event", role: "Assistant to Director, Internship", scope: "Supported seven corporate events and a 270-person touring day through preparation, logistics, vendor and construction coordination, plus SOP and checklist systems.", projects: ["P24"] },
  { dates: "May - Dec 2024", org: "EMPACTS: Startup Ecosystem for SDGs", role: "Co-founder and Vice-President", scope: "Co-founded an organisation with six departments and built its public architecture, operating logic and leadership handover. Internal organisational documents remain confidential.", projects: ["P25"] },
  { dates: "Mar - Jul 2024", org: "ForArt Film Production", role: "Creative Intern", scope: "Contributed across six commercial proposals and production projects, spanning lead creative, collaborative scriptwriting, proposal and pitch work, on-set assistance and BTS content. Some outputs were proposal-stage; others reached production.", projects: ["P05", "P06", "P09", "P10", "P27", "P28"] },
  { dates: "Sep 2023 - Jun 2024", org: "RMIT Innovation & Entrepreneurship Club Hanoi", role: "Assistant to Vice President, Operations and Marketing Lead", scope: "Supported workshops, panel talks and a student fundraiser through team leadership, operations and marketing.", projects: ["P26"] },
  { dates: "Oct 2022 - Jun 2024", org: "RMIT Vietnam Student Council Hanoi", role: "Content Creator → Media Planner → Director of Content → Student Rights & Welfare Officer", scope: "Progressed through content leadership before election. As Student Rights & Welfare Officer, served as Head Organiser for Little Me and Relax & Recharge.", projects: ["P22", "P23", "P29"] },
];

function RelatedProjects({ ids }: { ids: string[] }) {
  return (
    <p className="related-projects">
      Related projects:{" "}
      {ids.map((id, i) => {
        const p = projectById[id];
        if (!p) return null;
        return (
          <span key={id}>
            {i > 0 ? ", " : ""}
            <Link href={`/work/${p.slug}`} aria-label={`${id}: ${p.title}`}>{id}</Link>
          </span>
        );
      })}
    </p>
  );
}

export default function ExperiencePage() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <PageHero eyebrow="Experience" title="Work, leadership, and delivery" deck="Felix moved from making content, to planning it, to directing teams, organising experiences and building systems that other people could use." />
        <section className="timeline section-shell">
          {experience.map((item, index) => <article key={item.org}><span className="timeline-index">{String(index + 1).padStart(2, "0")}</span><div><p className="timeline-date">{item.dates}</p><h2>{item.org}</h2><h3>{item.role}</h3><p>{item.scope}</p><RelatedProjects ids={item.projects} /></div></article>)}
        </section>
        <section className="education section-shell">
          <div className="section-intro"><p className="eyebrow">Education</p><h2>Education</h2></div>
          <div className="education-grid"><article><span>2022 - April 2027</span><h3>National Economics University</h3><p>Bachelor of Business Administration in English</p></article><article><span>2022 - April 2027</span><h3>RMIT University</h3><p>Bachelor of Professional Communication</p></article></div>
          <p className="source-note">Available for full-time opportunities now, alongside final-stage study commitments through to graduation in April 2027.</p>
        </section>
        <section className="education section-shell">
          <div className="section-intro"><p className="eyebrow">Selected credentials</p><h2>Certified skills, plainly stated</h2></div>
          <div className="education-grid"><article><span>2020 - 2022</span><h3>Microsoft Office Specialist</h3><p>Word 2013, PowerPoint 2013, Excel 2016 and PowerPoint 2016.</p></article><article><span>2022</span><h3>National Consolation Prize</h3><p>Microsoft Office Specialist World Championship, Viettel 2022.</p></article></div>
          <p className="source-note">Certificates are issued to Nguyen Phan Thuc Huong, Felix Phan&apos;s legal name.</p>
        </section>
        <section className="page-cta section-shell"><p className="eyebrow">The useful next question</p><h2>What did those roles produce?</h2><Link className="button button-primary" href="/work">Explore selected work</Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}

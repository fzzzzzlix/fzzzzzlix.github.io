import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader, StarMark } from "../site-shell";

export const metadata: Metadata = { title: "Focus Areas", description: "Felix Phan's work across sustainable development, ESG, CSR, culture and social advocacy.", alternates: { canonical: "/interests" } };

const interests = [
  { title: "Sustainable Development", text: "Sustainable development, ESG, CSR and social-enterprise support, from EMPACTS to the education-inequality white paper.", filter: "Sustainability & Advocacy" },
  { title: "Culture & Media", text: "Vietnamese heritage, contemporary culture, identity, collective memory and how media represents them.", filter: "Culture & Editorial" },
  { title: "Research & Systems", text: "Mixed-methods research, operationalisation, social listening, network analysis and systems thinking, from Scienceporium to the Việt Á and Pakistan studies.", filter: "Strategy & Research" },
  { title: "Social Advocacy", text: "Inclusion, diversity, student rights and wellbeing, delivered through events and student-leadership roles.", filter: "Event & Production" },
];

export default function InterestsPage() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <PageHero eyebrow="Focus Areas" title="The subjects Felix keeps returning to" deck="Focus areas become credible when they shape completed work, not when they sit alone in a biography." />
        <section className="interest-grid section-shell">
          {interests.map((item, index) => <article key={item.title}><div className="interest-star"><StarMark size={64 + index * 22} /></div><span>0{index + 1}</span><h2>{item.title}</h2><p>{item.text}</p><Link href={`/work?role=${encodeURIComponent(item.filter)}`}>See related work ↗</Link></article>)}
        </section>
        <section className="interest-thesis section-shell"><p className="eyebrow">The principle</p><h2>Respect the context<br />Make the idea usable</h2><p>Culture should not become decoration. Advocacy should not become a slogan. Sustainability should not become a claim without a system behind it.</p></section>
      </main>
      <SiteFooter />
    </div>
  );
}

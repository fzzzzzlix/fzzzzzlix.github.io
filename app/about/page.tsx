import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader, StarMark } from "../site-shell";

export const metadata: Metadata = { title: "About Felix Phan | Creative Strategist & Storyteller", description: "Meet Felix Phan and the method connecting research, story, production and impact." };

const capabilities = [
  ["Creative development", "Concepts, treatments, story structure, cast functions, sponsor integration and short-form systems."],
  ["Writing & editorial", "TVC scripts, short films, podcasts, proposals, copy, scenes and editorial direction."],
  ["Research & planning", "Social listening, thematic coding, consumer insight, interviews, media planning and channel strategy."],
  ["Production & operations", "On-set support, source tracking, event logistics, vendor coordination, budgets, SOPs and quality control."],
  ["Leadership", "Cross-functional teams, organisation design, fundraising, stakeholders, handover and performance review."],
];

export default function AboutPage() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <PageHero eyebrow="About Felix" title="Curious enough to ask why. Practical enough to make it work." deck="Felix Phan is a creative strategist and storyteller who finds the tension inside a brief, gives it structure and stays involved until the idea can operate in the real world." />
        <section className="about-intro section-shell split-copy">
          <p className="pull-quote">“I am most useful when the brief is exciting, slightly inconvenient and too human for a tidy answer.”</p>
          <div className="long-copy">
            <p>Felix moves meaningful ideas from insight, to story, to impact: through research, writing, production and systems that survive the handover.</p>
            <p>Felix works across creative development, strategic research, production, events and organisational systems. The range is intentional: the same idea becomes stronger when the person shaping it understands how it will be pitched, produced, experienced, measured and handed over.</p>
            <p>Their work begins with evidence, but it does not end with a spreadsheet. Research is translated into a human tension. The tension becomes a structure. The structure becomes a script, treatment, plan, event or operating system. Then the result is described with its limitations still attached.</p>
            <p>That combination suits roles where communication must be culturally aware, operationally realistic and accountable to an outcome.</p>
          </div>
        </section>
        <section className="capability-section section-shell">
          <p className="eyebrow">Capability map</p>
          <div className="capability-list">
            {capabilities.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}
          </div>
        </section>
        <section className="identity-strip section-shell">
          <div><StarMark size={34} /><h2>Creative Strategist &amp; Storyteller</h2></div>
          <dl><div><dt>Professional name</dt><dd>Felix Phan</dd></div><div><dt>Legal-name note</dt><dd>Thuc Huong</dd></div><div><dt>Pronouns</dt><dd>they/them</dd></div><div><dt>Graduation</dt><dd>April 2027</dd></div><div><dt>Availability</dt><dd>Full-time, Immediate</dd></div><div><dt>Base</dt><dd>Ho Chi Minh City</dd></div></dl>
        </section>
        <section className="page-cta section-shell"><p className="eyebrow">See the method in motion</p><h2>Good claims need good proof.</h2><Link className="button button-primary" href="/work">Explore the work</Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}

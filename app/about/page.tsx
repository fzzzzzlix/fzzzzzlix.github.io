import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader, StarMark } from "../site-shell";

export const metadata: Metadata = { title: "About", description: "Meet Felix Phan and the method connecting research, story, production and impact.", alternates: { canonical: "/about" } };

const capabilities = [
  ["Shape the strategy", "Research & planning", "Consumer insight, social listening, thematic and sentiment coding, interviews, media planning and channel strategy."],
  ["Shape the strategy", "Research methods", "Academic research experience includes research-question framing, literature review, qualitative and mixed-methods design, secondary quantitative analysis (correlation and regression), NVivo, social-network analysis (NodeXL), operationalisation, triangulation, systems mapping and research-to-editorial translation."],
  ["Build the story", "Creative development", "Concepts, treatments, story structure, cast functions, sponsor integration and short-form systems."],
  ["Build the story", "Writing & editorial", "TVC scripts, short films, podcasts, proposals, copy, scenes and editorial direction."],
  ["Lead the delivery", "Production & operations", "On-set support, source tracking, event logistics, vendor coordination, budgets, SOPs and quality control."],
  ["Lead the delivery", "Leadership", "Cross-functional teams, organisation design, fundraising, stakeholders, handover and performance review."],
];

export default function AboutPage() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <PageHero eyebrow="About Felix" title="Curious enough to ask why. Practical enough to make it work" deck="Felix Phan is a creative strategist and storyteller who finds the tension inside a brief, gives it structure and stays involved until the idea can operate in the real world." />
        <section className="about-intro section-shell split-copy">
          <p className="pull-quote">“I am most useful when the brief is exciting, slightly inconvenient and too human for a tidy answer.”</p>
          <div className="long-copy">
            <p>Felix moves meaningful ideas from insight, to story, to impact: through research, writing, production and systems that survive the handover.</p>
            <p>Felix works across strategy, story and delivery so an idea keeps its intent from the first insight to the final handover. That means fewer gaps between the people who plan, make and ship the work: one person can diagnose the problem, frame it, design the response, align the team and stay accountable for the result.</p>
            <p>Their work begins with evidence, but it does not end with a spreadsheet. Research is translated into a human tension. The tension becomes a structure. The structure becomes a script, treatment, plan, event or operating system. Then the result is described with its limitations still attached.</p>
            <p>That combination suits roles where communication must be culturally aware, operationally realistic and accountable to an outcome.</p>
          </div>
        </section>
        <section className="capability-section section-shell">
          <p className="eyebrow">Capability map</p>
          <p className="capability-deck">Grouped by the three ways Felix contributes, not as five equal skills.</p>
          <div className="capability-list">
            {capabilities.map(([tier, title, text]) => <article key={title}><span className="capability-tier">{tier}</span><h2>{title}</h2><p>{text}</p></article>)}
          </div>
        </section>
        <section className="identity-strip section-shell">
          <div><StarMark size={34} /><h2>Creative Strategist &amp; Storyteller</h2></div>
          <dl><div><dt>Professional name</dt><dd>Felix Phan</dd></div><div><dt>Legal name</dt><dd>Nguyen Phan Thuc Huong</dd></div><div><dt>Pronouns</dt><dd>they/them</dd></div><div><dt>Graduation</dt><dd>April 2027</dd></div><div><dt>Availability</dt><dd>Full-time, available now</dd></div><div><dt>Base</dt><dd>Ho Chi Minh City</dd></div></dl>
        </section>
        <section className="page-cta section-shell"><p className="eyebrow">See the method in motion</p><h2>Good claims need good proof</h2><Link className="button button-primary" href="/work">Explore the work</Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}

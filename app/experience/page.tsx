import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { projects } from "../data";
import { experience } from "../content/experience";

export const metadata: Metadata = { title: experience.meta.title, description: experience.meta.description, alternates: { canonical: "/experience" } };

const projectById = Object.fromEntries(projects.map((p) => [p.id, p]));

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
        <PageHero eyebrow={experience.hero.eyebrow} title={experience.hero.title} deck={experience.hero.deck} />
        <section className="timeline section-shell">
          {experience.timeline.map((item, index) => <article key={item.org}><span className="timeline-index">{String(index + 1).padStart(2, "0")}</span><div><p className="timeline-date">{item.dates}</p><h2>{item.org}</h2><h3>{item.role}</h3><p>{item.scope}</p><RelatedProjects ids={item.projects} /></div></article>)}
        </section>
        <section className="education section-shell">
          <div className="section-intro"><p className="eyebrow">{experience.education.eyebrow}</p><h2>{experience.education.title}</h2></div>
          <div className="education-grid">{experience.education.items.map((item) => <article key={item.title}><span>{item.span}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          <p className="source-note">{experience.education.note}</p>
        </section>
        <section className="education section-shell">
          <div className="section-intro"><p className="eyebrow">{experience.credentials.eyebrow}</p><h2>{experience.credentials.title}</h2></div>
          <div className="education-grid">{experience.credentials.items.map((item) => <article key={item.title}><span>{item.span}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          <p className="source-note">{experience.credentials.note}</p>
        </section>
        <section className="page-cta section-shell"><p className="eyebrow">{experience.cta.eyebrow}</p><h2>{experience.cta.title}</h2><Link className="button button-primary" href="/work">{experience.cta.button}</Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}

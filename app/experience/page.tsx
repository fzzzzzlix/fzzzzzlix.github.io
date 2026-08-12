import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader, CV_URL } from "../site-shell";
import { asset } from "../base-path";
import { experience } from "../content/experience";
import { AchievementsSlideshow } from "./achievements-slideshow";

export const metadata: Metadata = { title: experience.meta.title, description: experience.meta.description, alternates: { canonical: "/experience" } };

export default function ExperiencePage() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <section className="experience-top section-shell">
          <a className="button button-primary" href={CV_URL} target="_blank" rel="noreferrer">View CV</a>
        </section>
        <section className="timeline section-shell">
          {experience.timeline.map((item, index) => (
            <article key={item.org}>
              <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="timeline-date">{item.dates}</p>
                <h2>{item.org}</h2>
                <h3>{item.role}</h3>
                <ul className="timeline-scope">{item.scope.map((line, i) => <li key={i}>{line}</li>)}</ul>
                {item.links.length ? (
                  <div className="timeline-links">
                    {item.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}
                  </div>
                ) : null}
                {item.images.length ? (
                  <div className="timeline-gallery">
                    {item.images.map((src) => (
                      <a key={src} href={asset(src)} target="_blank" rel="noreferrer">
                        <img src={asset(src)} alt={`${item.org} evidence`} loading="lazy" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </section>
        <section className="education section-shell">
          <div className="section-intro"><p className="eyebrow">{experience.education.eyebrow}</p><h2>{experience.education.title}</h2></div>
          <div className="education-grid">{experience.education.items.map((item) => <article key={item.title}><span>{item.span}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          <p className="source-note">{experience.education.note}</p>
        </section>
        <section className="education section-shell">
          <div className="section-intro"><p className="eyebrow">{experience.credentials.eyebrow}</p><h2>{experience.credentials.title}</h2></div>
          <ul className="credentials-list">{experience.credentials.list.map((item, i) => <li key={i}>{item}</li>)}</ul>
          <AchievementsSlideshow images={experience.credentials.slideshow} />
          <p className="source-note">{experience.credentials.note}</p>
        </section>
        <section className="page-cta section-shell"><p className="eyebrow">{experience.cta.eyebrow}</p><h2>{experience.cta.title}</h2><Link className="button button-primary" href="/work">{experience.cta.button}</Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}

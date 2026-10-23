import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import { MediaPlaceholder, OUT_ARROW, PageHero, SiteFooter, SiteHeader, CV_URL } from "../site-shell";
import { asset } from "../base-path";
import { experience } from "../content/experience";
import { AchievementsSlideshow } from "./achievements-slideshow";

export const metadata: Metadata = pageMetadata({ title: experience.meta.title, description: experience.meta.description, path: "/experience" });

export default function ExperiencePage() {
  return (
    <div className="site-frame">
      <SiteHeader current="/experience" />
      <main id="main-content">
        <PageHero eyebrow={experience.meta.title} aside={<a className="button button-primary" href={CV_URL} target="_blank" rel="noreferrer">View CV</a>} />
        <figure className="experience-cover section-shell">
          {experience.cover ? (
            <img src={asset(experience.cover.src)} alt={experience.cover.alt} fetchPriority="high" />
          ) : (
            <MediaPlaceholder discipline="Experience" label="Header image pending" />
          )}
        </figure>
        {/* Education, work experience and achievements as folds: wine bars that
            open in place, like Focus Areas. */}
        <div className="folds section-shell">
          <details className="fold" id="education">
            <summary className="surface-wine"><h2>{experience.education.title}</h2><span className="disclosure-mark" aria-hidden="true" /></summary>
            <div className="fold-body">
              <div className="education-grid">{experience.education.items.map((item) => <article key={item.title}><span>{item.span}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
              <p className="source-note">{experience.education.note}</p>
            </div>
          </details>
          <details className="fold" id="work-experience">
            <summary className="surface-wine"><h2>{experience.timelineTitle}</h2><span className="disclosure-mark" aria-hidden="true" /></summary>
            <div className="fold-body timeline">
              {experience.timeline.map((item) => (
                <article key={item.org}>
                  <div className="timeline-folio">
                    <p className="timeline-date">{item.dates}</p>
                  </div>
                  <div className="timeline-entry">
                    <h3>{item.org}</h3>
                    <p className="timeline-role">{item.role}</p>
                    <ul className="timeline-scope">{item.scope.map((line, i) => <li key={i}>{line}</li>)}</ul>
                    {item.links.length ? (
                      <div className="timeline-links">
                        {item.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} {OUT_ARROW}</a>)}
                      </div>
                    ) : null}
                    {item.images.length ? (
                      <details className="more-evidence">
                        <summary><span>Photos ({item.images.length})</span><span className="disclosure-mark" aria-hidden="true" /></summary>
                        <div className="timeline-gallery">
                          {item.images.map((src) => (
                            <a key={src} href={asset(src)} target="_blank" rel="noreferrer">
                              <img src={asset(src)} alt={`${item.org} evidence`} loading="lazy" />
                            </a>
                          ))}
                        </div>
                      </details>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </details>
          <details className="fold" id="achievements">
            <summary className="surface-wine"><h2>{experience.credentials.title}</h2><span className="disclosure-mark" aria-hidden="true" /></summary>
            <div className="fold-body">
              <ul className="credentials-list">{experience.credentials.list.map((item, i) => <li key={i}>{item}</li>)}</ul>
              {experience.credentials.slideshow.length ? (
                <details className="more-evidence" open>
                  <summary><span>Certificates ({experience.credentials.slideshow.length})</span><span className="disclosure-mark" aria-hidden="true" /></summary>
                  <AchievementsSlideshow images={experience.credentials.slideshow} />
                </details>
              ) : null}
              <p className="source-note">{experience.credentials.note}</p>
            </div>
          </details>
        </div>
        <section className="page-cta section-shell"><p className="eyebrow">{experience.cta.eyebrow}</p><h2>{experience.cta.title}</h2><Link className="button button-primary" href="/work">{experience.cta.button}</Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}

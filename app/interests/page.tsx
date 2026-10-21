import Link from "next/link";
import type { Metadata } from "next";
import { CoverImage, PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { asset } from "../base-path";
import { projects } from "../data";
import { REAL_IMAGES } from "../project-images";
import { interests } from "../content/interests";

export const metadata: Metadata = { title: interests.meta.title, description: interests.meta.description, alternates: { canonical: "/interests" } };

const projectsById = Object.fromEntries(projects.map((p) => [p.id, p]));

export default function InterestsPage() {
  return (
    <div className="site-frame">
      <SiteHeader current="/interests" />
      <main id="main-content">
        <PageHero eyebrow={interests.hero.eyebrow} title={interests.hero.title} />
        <section className="interest-areas section-shell">
          {interests.cards.map((item, index) => (
            <article className={`interest-area${index % 2 ? " is-flip" : ""}`} key={item.title}>
              <div className="interest-area-head">
                <span className="interest-area-index">0{index + 1}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <div className="interest-photos">
                {item.images.map((photo) => (
                  <figure key={photo.src}>
                    <img src={asset(photo.src)} alt={photo.alt} loading="lazy" />
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
              <ul className="interest-projects" aria-label={`${item.title} projects`}>
                {item.projects.map((id) => {
                  const p = projectsById[id];
                  if (!p) return null;
                  const img = REAL_IMAGES[id];
                  return (
                    <li key={id}>
                      <Link className="interest-project" href={`/work/${p.slug}`}>
                        {img ? (
                          <span className="interest-project-media">
                            <CoverImage src={img.src} fit={img.fit} poster={img.poster} alt={p.alt} />
                          </span>
                        ) : null}
                        <span className="interest-project-copy">
                          <span className="project-meta">{p.publicType}</span>
                          <span className="interest-project-title">{p.title}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

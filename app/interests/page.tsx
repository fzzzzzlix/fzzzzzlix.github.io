import Link from "next/link";
import type { Metadata } from "next";
import { CoverImage, PageHero, PhotoRow, SiteFooter, SiteHeader, StarMark } from "../site-shell";
import { projects } from "../data";
import { REAL_IMAGES } from "../project-images";
import { interests } from "../content/interests";

export const metadata: Metadata = { title: interests.meta.title, description: interests.meta.description, alternates: { canonical: "/interests" } };

const projectsById = Object.fromEntries(projects.map((p) => [p.id, p]));

// Every area is laid out the same way, in the same order: heading and text,
// an equal-height photo pair, then its projects as picture tiles. A jump list
// under the opener reaches each area directly.
export default function InterestsPage() {
  return (
    <div className="site-frame">
      <SiteHeader current="/interests" />
      <main id="main-content">
        <PageHero eyebrow={interests.hero.eyebrow} title={interests.hero.title} deck={interests.hero.deck} />
        <nav className="interest-index section-shell" aria-label="Focus areas on this page">
          {interests.cards.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.title}<span aria-hidden="true">↓</span></a>
          ))}
        </nav>
        <div className="interest-areas section-shell">
          {interests.cards.map((item) => (
            <section className="interest-area" id={item.id} key={item.id} aria-labelledby={`${item.id}-title`}>
              <div className="interest-area-head">
                <h2 id={`${item.id}-title`}>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <PhotoRow className="interest-photos" photos={item.images} />
              <div className="interest-projects-block">
                <h3>{interests.projectsLabel}</h3>
                <ul className="interest-projects">
                  {item.projects.map((id) => {
                    const p = projectsById[id];
                    if (!p) return null;
                    const img = REAL_IMAGES[id];
                    return (
                      <li key={id}>
                        <Link className="interest-project" href={`/work/${p.slug}`}>
                          <span className={`interest-project-media${img ? "" : " no-media"}`}>
                            {img ? <CoverImage src={img.src} fit="cover" poster={img.poster} alt="" /> : <StarMark size={32} />}
                          </span>
                          <span className="interest-project-title">{p.title}</span>
                          <span className="project-meta">{p.publicType}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

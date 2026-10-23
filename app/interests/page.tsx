import Link from "next/link";
import type { Metadata } from "next";
import { CoverImage, PageHero, PhotoRow, SiteFooter, SiteHeader, StarMark } from "../site-shell";
import { projects } from "../data";
import { REAL_IMAGES } from "../project-images";
import { interests } from "../content/interests";

export const metadata: Metadata = { title: interests.meta.title, description: interests.meta.description, alternates: { canonical: "/interests" } };

const projectsById = Object.fromEntries(projects.map((p) => [p.id, p]));

// The page opens on three wine bars, one per area. Each bar is a toggle; the
// area opens in place with the same shape every time: text and an
// equal-height photo pair, then its projects as compact thumbnail rows.
export default function InterestsPage() {
  return (
    <div className="site-frame">
      <SiteHeader current="/interests" />
      <main id="main-content">
        <PageHero eyebrow={interests.hero.title} />
        <div className="interest-areas section-shell">
          {interests.cards.map((item) => (
            <details className="interest-area surface-wine" id={item.id} key={item.id}>
              <summary>
                <h2>{item.title}</h2>
                <span className="disclosure-mark" aria-hidden="true" />
              </summary>
              <div className="interest-area-body">
                <p className="interest-area-text">{item.text}</p>
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
                              {img ? <CoverImage src={img.src} fit="cover" poster={img.poster} alt="" /> : <StarMark size={24} />}
                            </span>
                            <span className="interest-project-copy">
                              <span className="interest-project-title">{p.title}</span>
                              <span className="project-meta">{p.publicType}</span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

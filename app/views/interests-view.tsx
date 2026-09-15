import Link from "next/link";
import { CoverImage, MediaPlaceholder, PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { asset } from "../base-path";
import { projects } from "../data";
import { REAL_IMAGES } from "../project-images";
import { getInterests } from "../content/interests";
import { getProjectCopy } from "../content/projects";
import { localePath, type Locale } from "../i18n";

const projectsById = Object.fromEntries(projects.map((p) => [p.id, p]));

/** Focus Areas page body, shared by /interests and /vi/interests. */
export function InterestsView({ locale }: { locale: Locale }) {
  const interests = getInterests(locale);
  return (
    <div className="site-frame" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <PageHero eyebrow={interests.hero.eyebrow} title={interests.hero.title} />
        <section className="interest-areas section-shell">
          {interests.cards.map((item, index) => (
            <article className="interest-area" key={item.title}>
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
              <div className="interest-projects">
                {item.projects.map((id) => {
                  const base = projectsById[id];
                  if (!base) return null;
                  const p = getProjectCopy(locale, base);
                  const img = REAL_IMAGES[id];
                  return (
                    <Link className="project-card" href={localePath(locale, `/work/${p.slug}`)} key={id}>
                      {img ? (
                        <div className="project-img-wrap">
                          <CoverImage src={img.src} fit={img.fit} poster={img.poster} alt={p.alt} />
                        </div>
                      ) : (
                        <MediaPlaceholder locale={locale} projectId={p.id} discipline={p.publicType} />
                      )}
                      <div className="project-card-copy">
                        <p className="project-meta">{p.publicType}</p>
                        <h3>{p.title}</h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

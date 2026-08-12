import Link from "next/link";
import { SiteFooter, SiteHeader, StarMark, MediaPlaceholder, CoverImage, CV_URL } from "./site-shell";
import { projects } from "./data";
import { asset } from "./base-path";
import { REAL_IMAGES } from "./project-images";
import { home } from "./content/home";
import { inline } from "./content/render-inline";

const projectsById = Object.fromEntries(projects.map((p) => [p.id, p]));

export default function Home() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy reveal reveal-1">
            <p className="eyebrow"><StarMark size={18} /> {home.hero.eyebrow}</p>
            <h1 id="hero-title">{home.hero.name}</h1>
            <p className="hero-prop">{home.hero.prop}</p>
            <ul className="hero-chips" aria-label="Core capabilities">
              {home.hero.chips.map((chip) => <li key={chip}>{chip}</li>)}
            </ul>
            <div className="hero-actions">
              <Link className="button button-primary" href="/work">{home.hero.primaryCta}</Link>
              <a className="button button-quiet" href={CV_URL} target="_blank" rel="noreferrer">{home.hero.quietCta}</a>
            </div>
            <ul className="hero-facts" aria-label="Availability">
              {home.hero.facts.map((fact) => <li key={fact}>{fact}</li>)}
            </ul>
          </div>
          <div className="hero-visual reveal reveal-2">
            <div className="hero-portrait-wrap">
              <img src={asset("/images/hero-portrait.jpg")} alt={home.hero.portraitAlt} width={1600} height={2000} />
            </div>
            <div className="orbit-note" aria-hidden="true"><StarMark size={42} /> {home.hero.orbitNote}</div>
          </div>
        </section>

        <section className="proof-band" aria-label="Selected evidence">
          <div className="section-shell proof-grid">
            {home.proofBand.map((item, index) => (
              <p key={index}><strong>{item.value}</strong><span>{item.label}</span></p>
            ))}
          </div>
        </section>

        <section className="routes section-shell" aria-labelledby="routes-title">
          <div className="section-intro routes-intro">
            <div className="routes-cta"><Link className="button button-quiet" href="/about">{home.routes.aboutCta}</Link></div>
            {home.routes.lead.map((para, i) => <p className="routes-lead" key={i}>{inline(para)}</p>)}
            <figure className="home-figure">
              <img src={asset(home.routes.image.src)} alt={home.routes.image.alt} loading="lazy" />
            </figure>
            <h2 id="routes-title">{home.routes.title}</h2>
          </div>
          <div className="route-list">
            {home.routes.rows.map((row, index) => (
              <Link href={`/work?role=${encodeURIComponent(row.filter)}`} key={row.title} className="route-row">
                <span className="route-index">0{index + 1}</span>
                <span><strong>{row.title}</strong><small>{row.text}</small></span>
                <span className="route-proof">{row.proof}</span>
                <span className="route-arrow">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="work-preview section-shell" aria-label="Featured works">
          <div className="section-intro">
            <p className="eyebrow">{home.featuredEyebrow}</p>
          </div>
          <div className="project-grid">
            {home.featured.map((project, index) => {
              const imgInfo = REAL_IMAGES[project.id];
              const pAlt = projectsById[project.id]?.alt ?? project.title;
              return (
                <Link className="project-card" href={project.route} key={project.id}>
                  {imgInfo ? (
                    <div className="project-img-wrap">
                      <CoverImage src={imgInfo.src} fit={imgInfo.fit} poster={imgInfo.poster} alt={pAlt} />
                    </div>
                  ) : (
                    <MediaPlaceholder projectId={project.id} discipline={project.lane} index={index + 1} />
                  )}
                  <div className="project-card-copy">
                    <p className="project-meta">{project.lane}</p>
                    <h3>{project.title}</h3>
                    <p>{project.proof}</p>
                    <p className="project-role">Role: {project.role}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="work-preview-more">
            <Link className="text-link" href="/work">{home.featuredLink} <span>↗</span></Link>
          </div>
        </section>

        <section className="interest-callout section-shell" aria-labelledby="interest-title">
          <div className="star-field" aria-hidden="true"><StarMark size={160} /></div>
          <p className="eyebrow">{home.interestCallout.eyebrow}</p>
          <figure className="home-figure">
            <img src={asset(home.interestCallout.image.src)} alt={home.interestCallout.image.alt} loading="lazy" />
          </figure>
          <h2 id="interest-title">{home.interestCallout.title}</h2>
          <p>{home.interestCallout.text}</p>
          <Link className="button button-primary" href="/interests">{home.interestCallout.cta}</Link>
        </section>

        <section className="closing section-shell">
          <p className="eyebrow">{home.closing.eyebrow}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:felixphan.contact@gmail.com">{home.closing.emailCta}</a>
            <Link className="button button-quiet" href="/about">{home.closing.aboutCta}</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

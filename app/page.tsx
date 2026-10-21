import Link from "next/link";
import { SiteFooter, SiteHeader, NorthStar, CoverImage, CV_URL } from "./site-shell";
import { projects } from "./data";
import { asset } from "./base-path";
import { REAL_IMAGES } from "./project-images";
import { home } from "./content/home";
import { inline } from "./content/render-inline";

const projectsById = Object.fromEntries(projects.map((p) => [p.id, p]));

// Editorial rhythm for the featured sequence, assigned by position. A project
// without a published image always becomes a typographic plate instead, so the
// layout never fakes a visual it does not have.
const FEATURE_LAYOUTS = ["lead", "right", "wide", "pair", "pair", "close"] as const;

// "Felix Phan" is set as two lines: roman given name, italic family name.
function HeroName({ name }: { name: string }) {
  const [first, ...rest] = name.split(" ");
  return (
    <h1 id="hero-title" className="hero-name">
      <span className="hero-name-first">{first}</span>{" "}
      <span className="hero-name-last">{rest.join(" ")}</span>
    </h1>
  );
}

export default function Home() {
  return (
    <div className="site-frame">
      <SiteHeader current="/" />
      <main id="main-content">
        {/* Poster: the cover */}
        <section className="hero surface-wine" aria-labelledby="hero-title">
          <div className="hero-star-wrap" aria-hidden="true">
            <NorthStar mode="glow" id="hero-star" className="hero-star" />
          </div>
          <div className="hero-grid section-shell">
            <div className="hero-copy">
              <p className="hero-eyebrow">{home.hero.eyebrow}</p>
              <HeroName name={home.hero.name} />
              <p className="hero-prop">{home.hero.prop}</p>
              <ul className="hero-chips" aria-label="Core capabilities">
                {home.hero.chips.map((chip) => <li key={chip}>{chip}</li>)}
              </ul>
              <div className="hero-actions">
                <Link className="button button-primary" href="/work">{home.hero.primaryCta}</Link>
                <a className="text-link" href={CV_URL} target="_blank" rel="noreferrer">{home.hero.quietCta} <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <ul className="hero-facts" aria-label="Availability">
              {home.hero.facts.map((fact) => <li key={fact}>{fact}</li>)}
            </ul>
          </div>
          <p className="hero-orbit" aria-hidden="true">{home.hero.orbitNote}</p>
        </section>

        {/* Transition to the reading surface: portrait and the four proof figures */}
        <section className="profile-band section-shell" aria-label="Selected evidence">
          <figure className="profile-portrait">
            <img src={asset("/images/hero-portrait.jpg")} alt={home.hero.portraitAlt} width={800} height={1000} />
          </figure>
          <div className="proof-list">
            {home.proofBand.map((item, index) => (
              <p key={index}><strong>{item.value}</strong><span>{item.label}</span></p>
            ))}
          </div>
        </section>

        <section className="routes section-shell" aria-labelledby="routes-title">
          <h2 id="routes-title" className="routes-title">{home.routes.title}</h2>
          <div className="routes-intro">
            <figure className="routes-figure">
              <img src={asset(home.routes.image.src)} alt={home.routes.image.alt} loading="lazy" width={2560} height={1706} />
            </figure>
            <div className="routes-copy">
              {home.routes.lead.map((para, i) => <p className="routes-lead" key={i}>{inline(para)}</p>)}
              <Link className="text-link" href="/about">{home.routes.aboutCta} <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="route-list">
            {home.routes.rows.map((row, index) => (
              <Link href={`/work?role=${encodeURIComponent(row.filter)}`} key={row.title} className="route-row">
                <span className="route-index">0{index + 1}</span>
                <span className="route-main"><strong>{row.title}</strong><small>{row.text}</small></span>
                <span className="route-proof">{row.proof}</span>
                <span className="route-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="featured section-shell" aria-labelledby="featured-title">
          <h2 id="featured-title" className="featured-title">{home.featuredEyebrow}</h2>
          <div className="featured-list">
            {home.featured.map((project, index) => {
              const imgInfo = REAL_IMAGES[project.id];
              const pAlt = projectsById[project.id]?.alt ?? project.title;
              // Rhythm counts only projects with an image, so a plate never shifts the pattern.
              const imaged = home.featured.slice(0, index).filter((p) => REAL_IMAGES[p.id]).length;
              const layout = imgInfo ? FEATURE_LAYOUTS[imaged % FEATURE_LAYOUTS.length] : "plate";
              const folio = String(index + 1).padStart(2, "0");
              return (
                <Link className={`feature-item layout-${layout}`} href={project.route} key={project.id}>
                  {layout === "plate" ? (
                    <span className="feature-plate surface-wine" aria-hidden="true"><NorthStar className="feature-plate-star" /></span>
                  ) : (
                    <span className="feature-media">
                      <CoverImage src={imgInfo.src} fit={imgInfo.fit} poster={imgInfo.poster} alt={pAlt} />
                    </span>
                  )}
                  <div className="feature-copy">
                    <p className="feature-meta"><span className="feature-folio">{folio}</span><span>{project.lane}</span></p>
                    <h3 className="feature-name">{project.title}</h3>
                    <p className="feature-proof">{project.proof}</p>
                    <p className="feature-role">Role: {project.role}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="featured-more">
            <Link className="text-link text-link-large" href="/work">{home.featuredLink} <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        {/* Poster punctuation */}
        <section className="interest-callout surface-wine" aria-labelledby="interest-title">
          <NorthStar className="interest-star" />
          <div className="interest-inner section-shell">
            <div className="interest-copy">
              <p className="eyebrow">{home.interestCallout.eyebrow}</p>
              <h2 id="interest-title">{home.interestCallout.title}</h2>
              <p className="interest-text">{home.interestCallout.text}</p>
              <Link className="button button-primary" href="/interests">{home.interestCallout.cta}</Link>
            </div>
            <figure className="interest-figure">
              <img src={asset(home.interestCallout.image.src)} alt={home.interestCallout.image.alt} loading="lazy" width={2560} height={1706} />
            </figure>
          </div>
        </section>

        <section className="closing section-shell">
          <p className="closing-line">{home.closing.eyebrow}</p>
          <div className="closing-actions">
            <a className="button button-primary" href="mailto:felixphan.contact@gmail.com">{home.closing.emailCta}</a>
            <Link className="text-link" href="/about">{home.closing.aboutCta} <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

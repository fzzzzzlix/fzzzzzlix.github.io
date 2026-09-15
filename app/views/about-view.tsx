import Link from "next/link";
import { SiteFooter, SiteHeader, StarMark } from "../site-shell";
import { asset } from "../base-path";
import { getAbout } from "../content/about";
import { inline } from "../content/render-inline";
import { localePath, type Locale } from "../i18n";

type AboutImage = { src: string; alt: string; caption: string };

function AboutFigure({ image }: { image: AboutImage }) {
  return (
    <figure className="about-figure">
      <img src={asset(image.src)} alt={image.alt} loading="lazy" />
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}

function AboutFigurePair({ a, b }: { a: AboutImage; b: AboutImage }) {
  return (
    <div className="about-figure-pair">
      <AboutFigure image={a} />
      <AboutFigure image={b} />
    </div>
  );
}

/** About page body, shared by /about and /vi/about. */
export function AboutView({ locale }: { locale: Locale }) {
  const about = getAbout(locale);
  const img = about.images;
  return (
    <div className="site-frame" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="about-hero section-shell">
          <div className="about-hero-copy">
            <p className="eyebrow"><StarMark size={18} /> {about.identity.eyebrow}</p>
            <h1>{about.identity.heading}</h1>
            <dl>
              {about.identity.facts.map((fact) => (
                <div key={fact.term}><dt>{fact.term}</dt><dd>{fact.detail}</dd></div>
              ))}
            </dl>
          </div>
          <div className="about-hero-media">
            <img src={asset(img[0].src)} alt={img[0].alt} loading="eager" />
          </div>
        </section>

        <section className="about-narrative section-shell">
          <p className="eyebrow">{about.intro.eyebrow}</p>
          <p className="about-lead">{about.intro.lead}</p>
          <blockquote className="about-quote">{about.intro.quote}</blockquote>

          {about.story.map((para, i) => <p key={i}>{inline(para)}</p>)}

          <AboutFigurePair a={img[1]} b={img[2]} />

          <blockquote className="about-quote">{about.quote}</blockquote>

          {about.approach.map((para, i) => <p key={i}>{inline(para)}</p>)}

          <AboutFigurePair a={img[3]} b={img[4]} />

          <p className="about-takeaway">→ {inline(about.approachClose)}</p>
        </section>

        <section className="capability-section section-shell">
          <p className="eyebrow">{about.capability.eyebrow}</p>
          <div className="capability-list">
            {about.capability.items.map(([tier, title, text]) => (
              <article key={title}><span className="capability-tier">{tier}</span><h2>{title}</h2><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="page-cta section-shell"><p className="eyebrow">{about.cta.eyebrow}</p><h2>{about.cta.title}</h2><Link className="button button-primary" href={localePath(locale, "/work")}>{about.cta.button}</Link></section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

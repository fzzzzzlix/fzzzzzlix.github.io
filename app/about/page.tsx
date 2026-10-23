import Link from "next/link";
import type { Metadata } from "next";
import { PhotoRow, SiteFooter, SiteHeader } from "../site-shell";
import { asset } from "../base-path";
import { about } from "../content/about";
import { inline } from "../content/render-inline";

export const metadata: Metadata = { title: about.meta.title, description: about.meta.description, alternates: { canonical: "/about" } };

export default function AboutPage() {
  const img = about.images;
  return (
    <div className="site-frame">
      <SiteHeader current="/about" />
      <main id="main-content">
        <section className="about-hero surface-wine">
          <div className="section-shell">
            <p className="eyebrow">{about.identity.eyebrow}</p>
            <h1>{about.identity.heading}</h1>
            <div className="about-hero-grid">
              <figure className="about-hero-media">
                <img src={asset(img[0].src)} alt={img[0].alt} loading="eager" width={img[0].w} height={img[0].h} />
              </figure>
              <dl className="about-facts">
                {about.identity.facts.map((fact) => (
                  <div key={fact.term}><dt>{fact.term}</dt><dd>{fact.detail}</dd></div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="about-narrative section-shell">
          <p className="eyebrow">{about.intro.eyebrow}</p>
          <p className="about-lead">{about.intro.lead}</p>

          {about.story.map((para, i) => <p key={i}>{inline(para)}</p>)}

          <PhotoRow className="about-photos" photos={[img[1], img[2]]} />

          <blockquote className="about-quote about-quote-alt">{about.quote}</blockquote>

          {about.approach.map((para, i) => <p key={i}>{inline(para)}</p>)}

          <PhotoRow className="about-photos" photos={[img[3], img[4]]} />

          <p className="about-takeaway">→ {inline(about.approachClose)}</p>
        </section>

        <section className="capability-section surface-wine">
          <div className="section-shell">
            <p className="eyebrow">{about.capability.eyebrow}</p>
            <div className="capability-list">
              {about.capability.items.map(([tier, title, text]) => (
                <article key={title}><span className="capability-tier">{tier}</span><h2>{title}</h2><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-cta section-shell"><p className="eyebrow">{about.cta.eyebrow}</p><h2>{about.cta.title}</h2><Link className="button button-primary" href="/work">{about.cta.button}</Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}

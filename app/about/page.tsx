import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader, StarMark } from "../site-shell";
import { about } from "../content/about";
import { inline } from "../content/render-inline";

export const metadata: Metadata = { title: about.meta.title, description: about.meta.description, alternates: { canonical: "/about" } };

export default function AboutPage() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <PageHero eyebrow={about.hero.eyebrow} title={about.hero.title} deck={about.hero.deck} />
        <section className="about-intro section-shell split-copy">
          <p className="pull-quote">{about.pullQuote}</p>
          <div className="long-copy">
            {about.longCopy.map((para, i) => <p key={i}>{inline(para)}</p>)}
          </div>
        </section>
        <section className="capability-section section-shell">
          <p className="eyebrow">{about.capability.eyebrow}</p>
          <div className="capability-list">
            {about.capability.items.map(([tier, title, text]) => <article key={title}><span className="capability-tier">{tier}</span><h2>{title}</h2><p>{text}</p></article>)}
          </div>
        </section>
        <section className="identity-strip section-shell">
          <div><StarMark size={34} /><h2>{about.identity.heading}</h2></div>
          <dl>{about.identity.facts.map((fact) => <div key={fact.term}><dt>{fact.term}</dt><dd>{fact.detail}</dd></div>)}</dl>
        </section>
        <section className="page-cta section-shell"><p className="eyebrow">{about.cta.eyebrow}</p><h2>{about.cta.title}</h2><Link className="button button-primary" href="/work">{about.cta.button}</Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}

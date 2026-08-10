import Link from "next/link";
import type { Metadata } from "next";
import { Fragment } from "react";
import { PageHero, SiteFooter, SiteHeader, StarMark } from "../site-shell";
import { interests } from "../content/interests";

export const metadata: Metadata = { title: interests.meta.title, description: interests.meta.description, alternates: { canonical: "/interests" } };

export default function InterestsPage() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <PageHero eyebrow={interests.hero.eyebrow} title={interests.hero.title} deck={interests.hero.deck} />
        <section className="interest-grid section-shell">
          {interests.cards.map((item, index) => <article key={item.title}><div className="interest-star"><StarMark size={64 + index * 22} /></div><span>0{index + 1}</span><h2>{item.title}</h2><p>{item.text}</p><Link href={`/work?role=${encodeURIComponent(item.filter)}`}>See related work ↗</Link></article>)}
        </section>
        <section className="interest-thesis section-shell"><p className="eyebrow">{interests.thesis.eyebrow}</p><h2>{interests.thesis.titleLines.map((line, i) => <Fragment key={i}>{i > 0 ? <br /> : null}{line}</Fragment>)}</h2><p>{interests.thesis.text}</p></section>
      </main>
      <SiteFooter />
    </div>
  );
}

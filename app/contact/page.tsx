import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader, StarMark } from "../site-shell";
import { contact } from "../content/contact";

export const metadata: Metadata = { title: contact.meta.title, description: contact.meta.description, alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <PageHero eyebrow={contact.hero.eyebrow} title={contact.hero.title} deck={contact.hero.deck} />
        <section className="contact-grid section-shell">
          {contact.channels.map((channel) => (
            <a key={channel.kind} href={channel.href}><span>{channel.kind}</span><strong>{channel.value}</strong><b>↗</b></a>
          ))}
          <a id="cv" className="cv-placeholder" href={contact.cv.href}><StarMark size={70} /><span>{contact.cv.label}</span><strong>{contact.cv.title}</strong><p>{contact.cv.text}</p></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

import { PageHero, SiteFooter, SiteHeader, StarMark } from "../site-shell";
import { getContact } from "../content/contact";
import type { Locale } from "../i18n";

/** Contact page body, shared by /contact and /vi/contact. */
export function ContactView({ locale }: { locale: Locale }) {
  const contact = getContact(locale);
  return (
    <div className="site-frame" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <PageHero eyebrow={contact.hero.eyebrow} title={contact.hero.title} deck={contact.hero.deck} />
        <section className="contact-grid section-shell">
          {contact.channels.map((channel) => (
            <a key={channel.kind} href={channel.href}><span>{channel.kind}</span><strong>{channel.value}</strong><b>↗</b></a>
          ))}
          <a id="cv" className="cv-placeholder" href={contact.cv.href} target="_blank" rel="noreferrer"><StarMark size={70} /><span>{contact.cv.label}</span><strong>{contact.cv.title}</strong><p>{contact.cv.text}</p></a>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

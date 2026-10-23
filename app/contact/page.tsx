import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import { NorthStar, OUT_ARROW, SiteFooter, SiteHeader } from "../site-shell";
import { contact } from "../content/contact";

export const metadata: Metadata = pageMetadata({ title: contact.meta.title, description: contact.meta.description, path: "/contact" });

// The colophon: echoes the portfolio cover (luminous star left, information right).
export default function ContactPage() {
  return (
    <div className="site-frame">
      <SiteHeader current="/contact" />
      <main id="main-content" className="contact-page surface-wine">
        <div className="contact-star-wrap" aria-hidden="true"><NorthStar mode="glow" id="contact-star" className="contact-star" /></div>
        <div className="contact-grid section-shell">
          <div className="contact-head">
            <p className="eyebrow">{contact.hero.eyebrow}</p>
            <h1>{contact.hero.title}</h1>
            <p className="page-deck">{contact.hero.deck}</p>
          </div>
          <ul className="contact-channels">
            {contact.channels.map((channel) => (
              <li key={channel.kind}>
                <a href={channel.href}><span>{channel.kind}</span><strong>{channel.value}</strong><b aria-hidden="true">{OUT_ARROW}</b></a>
              </li>
            ))}
            <li>
              <a id="cv" className="cv-placeholder" href={contact.cv.href} target="_blank" rel="noreferrer"><span>{contact.cv.label}</span><strong>{contact.cv.title}</strong>{contact.cv.text ? <p>{contact.cv.text}</p> : null}<b aria-hidden="true">{OUT_ARROW}</b></a>
            </li>
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

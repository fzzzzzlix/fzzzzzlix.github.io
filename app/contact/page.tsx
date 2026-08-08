import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader, StarMark } from "../site-shell";

export const metadata: Metadata = { title: "Contact | Felix Phan", description: "Contact Felix Phan for creative, strategy, communication, sustainability, project, event and content roles." };

export default function ContactPage() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <PageHero eyebrow="Contact" title="A good brief deserves a proper conversation." deck="Felix is available immediately for full-time roles in creative scriptwriting, strategic planning, communication and sustainability, project management, events, and content." />
        <section className="contact-grid section-shell">
          <a href="mailto:felixphan.contact@gmail.com"><span>Email</span><strong>felixphan.contact@gmail.com</strong><b>↗</b></a>
          <a href="tel:+84936647704"><span>Phone</span><strong>+84 936 647 704</strong><b>↗</b></a>
          <a href="https://www.linkedin.com/in/felixphan/"><span>LinkedIn</span><strong>linkedin.com/in/felixphan</strong><b>↗</b></a>
          <div id="cv" className="cv-placeholder"><StarMark size={70} /><span>CV hyperlink placeholder</span><strong>View / download CV</strong><p>Felix will add the final URL before launch.</p></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

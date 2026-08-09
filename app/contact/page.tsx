import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader, StarMark } from "../site-shell";

export const metadata: Metadata = { title: "Contact", description: "Contact Felix Phan for creative, strategy, communication, sustainability, project, event and content roles.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <PageHero eyebrow="Contact" title="A good brief deserves a proper conversation" deck="Felix is available now for full-time roles across strategy, storytelling and project delivery, plus adjacent communication and content work." />
        <section className="contact-grid section-shell">
          <a href="mailto:felixphan.contact@gmail.com"><span>Email</span><strong>felixphan.contact@gmail.com</strong><b>↗</b></a>
          <a href="tel:+84936647704"><span>Phone</span><strong>+84 936 647 704</strong><b>↗</b></a>
          <a href="https://www.linkedin.com/in/felixphan/"><span>LinkedIn</span><strong>linkedin.com/in/felixphan</strong><b>↗</b></a>
          <a id="cv" className="cv-placeholder" href="mailto:felixphan.contact@gmail.com?subject=CV%20request"><StarMark size={70} /><span>Curriculum Vitae</span><strong>Request the latest CV</strong><p>Email Felix for the current one-page PDF.</p></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

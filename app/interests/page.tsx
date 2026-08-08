import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader, StarMark } from "../site-shell";

export const metadata: Metadata = { title: "Interests | Felix Phan", description: "Felix Phan's work across sustainable development, ESG, CSR, culture and social advocacy." };

const interests = [
  { title: "Sustainable Development", text: "Projects concerning sustainability development, ESG, CSR and social enterprise support.", proof: "P30 · P04 · P17 · P22 · P25" },
  { title: "Culture", text: "Vietnamese heritage, contemporary culture, identity, collective memory and generational change.", proof: "P01 · P11 · P12 · P14 · P16 · P18" },
  { title: "Social Advocacy", text: "Inclusion, diversity, student rights, well-being and meaningful participation.", proof: "P14 · P17 · P22 · P29" },
];

export default function InterestsPage() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <PageHero eyebrow="Interests" title="The subjects Felix keeps returning to." deck="Interests become credible when they shape completed work, not when they sit alone in a biography." />
        <section className="interest-grid section-shell">
          {interests.map((item, index) => <article key={item.title}><div className="interest-star"><StarMark size={64 + index * 22} /></div><span>0{index + 1}</span><h2>{item.title}</h2><p>{item.text}</p><Link href={`/work?role=${encodeURIComponent(item.title === "Culture" ? "Culture & Editorial" : item.title === "Social Advocacy" ? "Communication Events" : "Communication & Sustainability")}`}>Related work: {item.proof} ↗</Link></article>)}
        </section>
        <section className="interest-thesis section-shell"><p className="eyebrow">The principle</p><h2>Respect the context.<br />Make the idea usable.</h2><p>Culture should not become decoration. Advocacy should not become a slogan. Sustainability should not become a claim without a system behind it.</p></section>
      </main>
      <SiteFooter />
    </div>
  );
}

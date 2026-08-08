import Link from "next/link";

export function StarMark({ size = 28 }: { size?: number }) {
  return (
    <svg className="star-mark" width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Felix Phan six-wing North Star">
      <polygon points="50,3 52.5,45.7 90.7,26.5 55,50 90.7,73.5 52.5,54.3 50,97 47.5,54.3 9.3,73.5 45,50 9.3,26.5 47.5,45.7" fill="currentColor" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Felix Phan home"><StarMark size={24} /><span>Felix Phan</span></Link>
      <nav aria-label="Primary navigation">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/interests">Focus Areas</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <div>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/interests">Focus Areas</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </details>
      <Link className="nav-cv" href="/contact#cv">View CV <span>↗</span></Link>
    </header>
  );
}

export function PageHero({ eyebrow, title, deck, aside }: { eyebrow: string; title: string; deck: string; aside?: React.ReactNode }) {
  return (
    <section className="page-hero section-shell">
      <div>
        <p className="eyebrow"><StarMark size={18} /> {eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-deck">{deck}</p>
      </div>
      {aside ? <aside>{aside}</aside> : null}
    </section>
  );
}

export function EvidenceLabel({ children }: { children: React.ReactNode }) {
  return <span className="evidence-label">{children}</span>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-brand"><StarMark size={26} /><span>Follow the North Star.</span></div>
      <div className="footer-links"><a href="mailto:felixphan.contact@gmail.com">felixphan.contact@gmail.com</a><a href="https://www.linkedin.com/in/felixphan/">LinkedIn</a></div>
      <ul className="footer-facts"><li>Felix Phan</li><li>they/them</li><li>Ho Chi Minh City</li><li>Full-time, available now</li></ul>
    </footer>
  );
}

export function MediaPlaceholder({ label, filename, ratio, note, portrait = false, index }: { label: string; filename: string; ratio: string; note: string; portrait?: boolean; index?: number }) {
  return (
    <div className={`media-placeholder${portrait ? " media-placeholder-portrait" : ""}`}>
      <div className="placeholder-star" aria-hidden="true"><StarMark size={portrait ? 96 : 54} /></div>
      {index ? <span className="placeholder-index">0{index}</span> : null}
      <div className="placeholder-copy">
        <strong>{label}</strong>
        <span>{ratio}</span>
        <code>{filename}</code>
        <small>{note}</small>
      </div>
    </div>
  );
}

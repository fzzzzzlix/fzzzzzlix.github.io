import Link from "next/link";

// Public CV link (Google Drive). Every "CV" action across the site points here.
export const CV_URL = "https://drive.google.com/file/d/1Ea5Il96N4fVSFY9UZ8J2QdiIwhhIoTtA/view?usp=drive_link";

// The six-wing North Star. Two equal-length vertical wings and four diagonal
// wings at ±30° from horizontal, all meeting in a slim waist. One geometry for
// every size so the mark stays consistent from favicon to hero.
const STAR_POINTS = "100,4 106.5,88.74 183.14,52 113,100 183.14,148 106.5,111.26 100,196 93.5,111.26 16.86,148 87,100 16.86,52 93.5,88.74";

// Signature star (flat, currentColor). Decorative by default (aria-hidden) so the
// repeated brand mark is not announced; pass `label` for a meaningful identity use.
export function StarMark({ size = 28, label, className }: { size?: number; label?: string; className?: string }) {
  const a11y = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const, focusable: false as const };
  return (
    <svg className={`star-mark${className ? ` ${className}` : ""}`} width={size} height={size} viewBox="0 0 200 200" {...a11y}>
      <polygon points={STAR_POINTS} fill="currentColor" />
    </svg>
  );
}

/**
 * Large North Star for poster moments. `flat` is a crisp single-colour mark
 * (editorial use). `glow` adds the restrained luminous treatment from the
 * portfolio cover: translucent silver wings, a bright core and a thin horizontal
 * flare. Reserve `glow` for the home hero and the contact colophon. `id` keeps
 * gradient ids unique when more than one glowing star could share a page.
 */
export function NorthStar({ mode = "flat", id = "ns", className }: { mode?: "flat" | "glow"; id?: string; className?: string }) {
  const cls = `north-star north-star-${mode}${className ? ` ${className}` : ""}`;
  if (mode === "flat") {
    return (
      <svg className={cls} viewBox="0 0 200 200" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet">
        <polygon points={STAR_POINTS} fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 200 200" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" overflow="visible">
      <defs>
        <radialGradient id={`${id}-wing`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#F6F1F3" stopOpacity=".78" />
          <stop offset=".35" stopColor="#D9CCD4" stopOpacity=".58" />
          <stop offset="1" stopColor="#BFA9B4" stopOpacity=".42" />
        </radialGradient>
        <radialGradient id={`${id}-core`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset=".25" stopColor="#fff" stopOpacity=".85" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-flare`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset=".5" stopColor="#fff" stopOpacity=".95" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter id={`${id}-soft`} x="-20%" y="-400%" width="140%" height="900%">
          <feGaussianBlur stdDeviation=".7" />
        </filter>
        <filter id={`${id}-bloom`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3.2" />
        </filter>
      </defs>
      <polygon className="north-star-wings" points={STAR_POINTS} fill={`url(#${id}-wing)`} />
      <g className="north-star-flare">
        <ellipse cx="100" cy="100" rx="74" ry="1.6" fill={`url(#${id}-flare)`} filter={`url(#${id}-soft)`} />
        <ellipse cx="100" cy="100" rx="50" ry=".55" fill="#fff" opacity=".9" />
      </g>
      <circle className="north-star-core" cx="100" cy="100" r="16" fill={`url(#${id}-core)`} filter={`url(#${id}-bloom)`} />
      <circle cx="100" cy="100" r="3.2" fill="#fff" />
    </svg>
  );
}

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/interests", label: "Focus Areas" },
  { href: "/contact", label: "Contact" },
];

// `current` marks the active route for assistive tech and the active-link rule.
export function SiteHeader({ current }: { current?: string }) {
  const navLinks = NAV.map((item) => (
    <Link key={item.href} href={item.href} aria-current={current === item.href ? "page" : undefined}>{item.label}</Link>
  ));
  return (
    <div className="site-header-bar">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Felix Phan home"><StarMark size={18} /><span>Felix Phan</span></Link>
        <nav aria-label="Primary navigation">{navLinks}</nav>
        <a className="nav-cv" href={CV_URL} target="_blank" rel="noreferrer">View CV <span aria-hidden="true">↗</span></a>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <div>
            {navLinks}
            <a className="mobile-menu-cv" href={CV_URL} target="_blank" rel="noreferrer">View CV ↗</a>
          </div>
        </details>
      </header>
    </div>
  );
}

// Cover/evidence image. When a `poster` (static frame) is supplied, renders a
// <picture> whose reduced-motion source swaps an animated GIF for the still
// frame, so `prefers-reduced-motion` actually stops the motion. `display:
// contents` on the <picture> (in globals.css) keeps wrapper layout intact.
export function CoverImage({ src, fit, alt, poster, loading = "lazy" }: { src: string; fit: "cover" | "contain"; alt: string; poster?: string; loading?: "lazy" | "eager" }) {
  const style: React.CSSProperties = { objectFit: fit, ...(fit === "contain" ? { objectPosition: "50% 50%" } : {}) };
  const img = <img src={src} alt={alt} style={style} loading={loading} decoding="async" />;
  if (!poster) return img;
  return (
    <picture>
      <source media="(prefers-reduced-motion: reduce)" srcSet={poster} />
      {img}
    </picture>
  );
}

/**
 * Compact editorial page opener on bone. Interior pages open on information,
 * not a poster. When there is no `title`, the eyebrow is promoted to the
 * page's h1 so every page keeps one.
 */
export function PageHero({ eyebrow, title, deck, aside }: { eyebrow: string; title?: string; deck?: string; aside?: React.ReactNode }) {
  return (
    <section className={`page-hero${title ? "" : " page-hero-compact"}`}>
      <div className="page-hero-inner section-shell">
        <div className="page-hero-copy">
          {title ? <p className="eyebrow">{eyebrow}</p> : <h1 className="page-hero-word">{eyebrow}</h1>}
          {title ? <h1>{title}</h1> : null}
          {deck ? <p className="page-deck">{deck}</p> : null}
        </div>
        {aside ? <aside className="page-hero-aside">{aside}</aside> : null}
      </div>
    </section>
  );
}

// Colophon: the deep plum close to every page.
export function SiteFooter() {
  return (
    <footer className="site-footer surface-plum">
      <div className="site-footer-inner section-shell">
        <div className="footer-brand"><StarMark size={44} /><span>Follow the North Star</span></div>
        <div className="footer-links"><a href="mailto:felixphan.contact@gmail.com">felixphan.contact@gmail.com</a><a href="https://www.linkedin.com/in/felixphan/">LinkedIn</a></div>
      </div>
    </footer>
  );
}

// Public, evidence-state placeholder shown when a project has no published
// primary visual. It intentionally exposes only the project identity and
// discipline plus a neutral status line: no filenames, dimensions, crop rules
// or production notes ever reach public HTML. Styled as a typographic plate,
// never as an imitation photo.
export function MediaPlaceholder({ projectId, discipline, label = "Primary visual not published", portrait = false, index }: { projectId?: string; discipline?: string; label?: string; portrait?: boolean; index?: number }) {
  return (
    <div className={`media-placeholder${portrait ? " media-placeholder-portrait" : ""}`} role="img" aria-label={`${projectId ? projectId + ", " : ""}${discipline ? discipline + ". " : ""}${label}`}>
      <div className="placeholder-star" aria-hidden="true"><StarMark size={portrait ? 96 : 54} /></div>
      {typeof index === "number" ? <span className="placeholder-index" aria-hidden="true">{String(index).padStart(2, "0")}</span> : null}
      <div className="placeholder-copy">
        {projectId ? <strong>{projectId}</strong> : null}
        {discipline ? <span>{discipline}</span> : null}
        <small>{label}</small>
      </div>
    </div>
  );
}

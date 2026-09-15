import Link from "next/link";
import { DEFAULT_LOCALE, localePath, type Locale } from "./i18n";
import { getUi } from "./content/ui";
import { LocaleToggle } from "./locale-toggle";

// Public CV link (Google Drive). Every "CV" action across the site points here.
export const CV_URL = "https://drive.google.com/file/d/1Ea5Il96N4fVSFY9UZ8J2QdiIwhhIoTtA/view?usp=drive_link";

// Decorative by default (aria-hidden) so the repeated brand mark is not
// announced on every eyebrow/section. Pass `label` only for a meaningful,
// standalone identity use to expose it as an image to assistive tech.
export function StarMark({ size = 28, label }: { size?: number; label?: string }) {
  const a11y = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const, focusable: false as const };
  return (
    <svg className="star-mark" width={size} height={size} viewBox="0 0 100 100" {...a11y}>
      <polygon points="50,3 52.5,45.7 90.7,26.5 55,50 90.7,73.5 52.5,54.3 50,97 47.5,54.3 9.3,73.5 45,50 9.3,26.5 47.5,45.7" fill="currentColor" />
    </svg>
  );
}

export function SiteHeader({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const ui = getUi(locale);
  const path = (to: string) => localePath(locale, to);
  const links = (
    <>
      <Link href={path("/")}>{ui.nav.home}</Link>
      <Link href={path("/about")}>{ui.nav.about}</Link>
      <Link href={path("/work")}>{ui.nav.work}</Link>
      <Link href={path("/experience")}>{ui.nav.experience}</Link>
      <Link href={path("/interests")}>{ui.nav.interests}</Link>
      <Link href={path("/contact")}>{ui.nav.contact}</Link>
    </>
  );
  return (
    <>
      <a className="skip-link" href="#main-content">{ui.skipToContent}</a>
      <div className="site-header-bar">
      <header className="site-header">
        <Link className="brand" href={path("/")} aria-label={ui.brandHomeAria}><StarMark size={24} /><span>Felix Phan</span></Link>
        <nav aria-label={ui.navAria}>{links}</nav>
        <details className="mobile-menu">
          <summary>{ui.menu}</summary>
          <div>
            {links}
            <a className="mobile-menu-cv" href={CV_URL} target="_blank" rel="noreferrer">{ui.viewCv} ↗</a>
          </div>
        </details>
        <div className="nav-actions">
          <LocaleToggle locale={locale} ariaLabel={ui.languageAria} />
          <a className="nav-cv" href={CV_URL} target="_blank" rel="noreferrer">{ui.viewCv} <span>↗</span></a>
        </div>
      </header>
      </div>
    </>
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

export function PageHero({ eyebrow, title, deck, aside }: { eyebrow: string; title?: string; deck?: string; aside?: React.ReactNode }) {
  return (
    <section className={`page-hero section-shell${title ? "" : " page-hero-compact"}`}>
      <div>
        <p className="eyebrow"><StarMark size={18} /> {eyebrow}</p>
        {title ? <h1>{title}</h1> : null}
        {deck ? <p className="page-deck">{deck}</p> : null}
      </div>
      {aside ? <aside>{aside}</aside> : null}
    </section>
  );
}

export function SiteFooter({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const ui = getUi(locale);
  return (
    <footer className="site-footer section-shell">
      <div className="footer-brand"><StarMark size={26} /><span>{ui.footerTagline}</span></div>
      <div className="footer-links"><a href="mailto:felixphan.contact@gmail.com">felixphan.contact@gmail.com</a><a href="https://www.linkedin.com/in/felixphan/">LinkedIn</a></div>
    </footer>
  );
}

// Public, evidence-state placeholder shown when a project has no published
// primary visual. It intentionally exposes only the project identity and
// discipline plus a neutral status line: no filenames, dimensions, crop rules
// or production notes ever reach public HTML.
export function MediaPlaceholder({ projectId, discipline, label, portrait = false, index, locale = DEFAULT_LOCALE }: { projectId?: string; discipline?: string; label?: string; portrait?: boolean; index?: number; locale?: Locale }) {
  const text = label ?? getUi(locale).placeholderLabel;
  return (
    <div className={`media-placeholder${portrait ? " media-placeholder-portrait" : ""}`} role="img" aria-label={`${projectId ? projectId + ", " : ""}${discipline ? discipline + ". " : ""}${text}`}>
      <div className="placeholder-star" aria-hidden="true"><StarMark size={portrait ? 96 : 54} /></div>
      {typeof index === "number" ? <span className="placeholder-index" aria-hidden="true">{String(index).padStart(2, "0")}</span> : null}
      <div className="placeholder-copy">
        {projectId ? <strong>{projectId}</strong> : null}
        {discipline ? <span>{discipline}</span> : null}
        <small>{text}</small>
      </div>
    </div>
  );
}

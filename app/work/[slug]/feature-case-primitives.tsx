import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "../../data";
import { StarMark } from "../../site-shell";

/*
 * Shared feature-case primitives.
 *
 * These are thin wrappers around the existing `p31-*` design-system classes in
 * globals.css so that the six bespoke cases (P02, P13, P20, P22, P25, P32) share
 * the Be Local (P31) visual language without re-implementing it. P31 keeps its
 * own bespoke component and is intentionally NOT refactored onto these.
 */

/** Root <article> for a feature case. */
export function CaseArticle({ children }: { children: ReactNode }) {
  return <article className="case-page feature-case p31-case">{children}</article>;
}

type StripItem = { value: ReactNode; unit?: string; label: string };

/** Hero: eyebrow, title, role, meta chips, optional cover image and fast-evidence strip. */
export function CaseHero({
  project,
  eyebrow = "Feature case",
  title,
  descriptor,
  image,
  imageHref,
  imageFit = "cover",
  imagePosition,
  strip,
  hideType = false,
  hideYear = false,
}: {
  project: Project;
  eyebrow?: string;
  title: string;
  descriptor?: string;
  image?: string;
  imageHref?: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  strip?: StripItem[];
  hideType?: boolean;
  hideYear?: boolean;
}) {
  return (
    <header className="p31-hero section-shell">
      <div className="p31-hero-head">
        <p className="eyebrow"><StarMark size={18} /> {eyebrow}</p>
        <h1>{title}</h1>
        <p className="case-role">{project.role}</p>
        <div className="case-meta">
          <span>{project.id}</span>
          {hideYear || !project.year ? null : <span>{project.year}</span>}
          {hideType || !project.publicType ? null : <span>{project.publicType}</span>}
          {descriptor ? <span>{descriptor}</span> : null}
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
      {image ? (
        <a className="p31-hero-media" href={imageHref ?? image} target="_blank" rel="noreferrer" aria-label={imageHref ? `${title}. Opens in a new tab.` : `${project.alt}. Opens full size in a new tab.`}>
          <img src={image} alt={project.alt} style={{ objectFit: imageFit, ...(imagePosition ? { objectPosition: imagePosition } : {}) }} />
        </a>
      ) : null}
      {strip?.length ? (
        <ul className="p31-strip" aria-label="Fast evidence">
          {strip.map((item, i) => (
            <li key={i}><strong>{item.value}{item.unit ? <small>{item.unit}</small> : null}</strong><span>{item.label}</span></li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}

/** One-sentence tension block. */
export function CaseTension({ children }: { children: ReactNode }) {
  return (
    <section className="case-tension section-shell">
      <p className="eyebrow">The tension</p>
      <h2>{children}</h2>
    </section>
  );
}

/** A titled content section. */
export function CaseSection({ eyebrow, title, children }: { eyebrow?: string; title: string; children: ReactNode }) {
  return (
    <section className="p31-section section-shell">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children}
    </section>
  );
}

/** Lede paragraph. */
export function Lede({ children }: { children: ReactNode }) {
  return <p className="p31-lede">{children}</p>;
}

/**
 * Evidence figure. Default (`evidence`) shows the whole image uncropped, the
 * correct behaviour for reports, charts, credits and documents. `photo` crops to
 * a 16:9 (or given) frame for photography where subjects stay intact.
 */
export function EvidenceFigure({
  src,
  alt,
  caption,
  tag,
  href,
  variant = "evidence",
  ratio,
  position,
}: {
  src: string;
  alt: string;
  caption: string;
  tag: string;
  href?: string;
  variant?: "evidence" | "photo";
  ratio?: string;
  position?: string;
}) {
  const link = href ?? src;
  const isPhoto = variant === "photo";
  return (
    <figure className="p31-figure">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={`${alt}. Opens in a new tab.`}
        style={isPhoto ? { aspectRatio: ratio ?? "16 / 9" } : undefined}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={isPhoto ? { width: "100%", height: "100%", objectFit: "cover", objectPosition: position ?? "50% 50%" } : undefined}
        />
      </a>
      <figcaption><span>{caption}</span>{tag ? <em>{tag}</em> : null}</figcaption>
    </figure>
  );
}

/** Inline, controls-only video (no autoplay). Sizes to its natural aspect; pass a poster if available. */
export function CaseVideo({
  src,
  poster,
  caption,
  tag,
}: {
  src: string;
  poster?: string;
  caption: string;
  tag?: string;
}) {
  return (
    <figure className="p31-figure">
      <video className="p31-video" src={src} poster={poster} controls preload="metadata" playsInline />
      <figcaption><span>{caption}</span>{tag ? <em>{tag}</em> : null}</figcaption>
    </figure>
  );
}

/** Two figures/embeds side by side. */
export function MediaPair({ children }: { children: ReactNode }) {
  return <div className="p31-media-pair">{children}</div>;
}

type Stat = { value: ReactNode; label: string };

/** Stat grid (up to four across, reflows on mobile). */
export function StatGrid({ items, label }: { items: Stat[]; label: string }) {
  return (
    <ul className="p31-stats" aria-label={label}>
      {items.map((item, i) => (
        <li key={i}><strong>{item.value}</strong><span>{item.label}</span></li>
      ))}
    </ul>
  );
}

/** Bordered card. */
export function Card({ tag, title, children }: { tag: string; title: string; children: ReactNode }) {
  return (
    <div className="p31-card">
      <span className="p31-tag">{tag}</span>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

/** Two-column card row. */
export function Cards({ children }: { children: ReactNode }) {
  return <div className="p31-cols">{children}</div>;
}

/**
 * Responsive, lazy, titled embed with a required fallback link. No autoplay.
 * Pass `portrait` (or a custom `aspect`) for tall documents such as press releases.
 */
export function ResponsiveEmbed({
  title,
  src,
  fallbackUrl,
  fallbackLabel,
  aspect,
  portrait = false,
  inPair = false,
  extraLinks = [],
  maxHeight,
}: {
  title: string;
  src: string;
  fallbackUrl: string;
  fallbackLabel: string;
  aspect?: string;
  portrait?: boolean;
  inPair?: boolean;
  extraLinks?: { label: string; url: string }[];
  maxHeight?: string;
}) {
  const aspectRatio = aspect ?? (portrait ? "3 / 4" : "16 / 9");
  const body = (
    <>
      <div className="p31-embed-frame" style={{ aspectRatio, ...(maxHeight ? { maxHeight } : {}) }}>
        <iframe title={title} src={src} allow="fullscreen" allowFullScreen loading="lazy" />
      </div>
      <div className="proof-links" aria-label={`${title} link`}>
        <a href={fallbackUrl} target="_blank" rel="noreferrer">{fallbackLabel}</a>
        {extraLinks.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
        ))}
      </div>
    </>
  );
  // Inside a MediaPair the grid gap handles spacing, so skip the top-margin wrapper.
  return inPair ? <div>{body}</div> : <div className="p31-embed">{body}</div>;
}

type ProofLink = { label: string; url: string; download?: boolean };

/** Row of external / download proof links. */
export function ProofLinks({ links, label = "Sources and proof" }: { links: ProofLink[]; label?: string }) {
  return (
    <div className="proof-links" aria-label={label}>
      {links.map((link) =>
        link.download ? (
          <a key={link.url} href={link.url} download>{link.label}</a>
        ) : (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
        ),
      )}
    </div>
  );
}

/**
 * Ownership / evidence / limitation boundary note.
 * Intentionally not displayed (per portfolio owner's request to remove all
 * evidence-boundary displays). Kept as a no-op so call sites remain intact and
 * the notes can be restored later without rewiring every case.
 */
export function OwnershipNote(_props: { label?: string; children: ReactNode }) {
  return null;
}

/**
 * Evidence panel. The evidence-status sentence is intentionally not displayed
 * (per portfolio owner). Any positive artifact links it carried are still
 * surfaced under a neutral "Links" heading.
 */
export function EvidencePanel({ links }: { children?: ReactNode; links?: ProofLink[] }) {
  if (!links?.length) return null;
  return (
    <section className="evidence-panel" style={{ marginTop: 40 }}>
      <ProofLinks links={links} label="Links" />
    </section>
  );
}

/** Previous / all-work / next navigation, matching the site pattern. */
export function CaseNav({ previous, next }: { previous: Project; next: Project }) {
  return (
    <nav className="case-nav section-shell" aria-label="Project navigation">
      <Link href={`/work/${previous.slug}`}><span>Previous project</span><strong>{previous.title}</strong></Link>
      <Link href="/work"><span>Return to</span><strong>All work</strong></Link>
      <Link href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong></Link>
    </nav>
  );
}

import Link from "next/link";
import type { HTMLAttributeReferrerPolicy, ReactNode } from "react";
import type { Project } from "../../data";
import { MediaPlaceholder } from "../../site-shell";

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

/**
 * Shared poster opening for every case (feature, Be Local and supporting).
 * The wine poster carries the eyebrow, title and role; `media` then sits
 * across the seam into the bone reading surface,
 * followed by `children` (caption, fast-evidence strip). With no media the
 * poster simply closes, so a media-light case opens typographically.
 */
export function CaseHeroFrame({
  eyebrow,
  title,
  role,
  media,
  children,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  role: ReactNode;
  media?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className={`p31-hero${media ? " has-media" : " no-media"}`}>
      <div className="p31-hero-poster surface-wine">
        <div className="p31-hero-head section-shell">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="case-role">{role}</p>
        </div>
      </div>
      {media || children ? (
        <div className="p31-hero-body section-shell">
          {media}
          {children}
        </div>
      ) : null}
    </header>
  );
}

/** Fast-evidence strip: typographic figures, no boxes. */
export function EvidenceStrip({ items }: { items: StripItem[] }) {
  return (
    <ul className="p31-strip" aria-label="Fast evidence">
      {items.map((item, i) => (
        <li key={i}><strong>{item.value}{item.unit ? <small>{item.unit}</small> : null}</strong><span>{item.label}</span></li>
      ))}
    </ul>
  );
}

/** Hero: eyebrow, title, role, optional cover image and fast-evidence strip. */
export function CaseHero({
  project,
  eyebrow = "Feature case",
  title,
  image,
  imageAlt,
  imageHref,
  imageFit = "cover",
  imagePosition,
  strip,
}: {
  project: Project;
  eyebrow?: string;
  title: string;
  image?: string;
  /** Alt text when the hero image differs from the project cover (defaults to the project's alt). */
  imageAlt?: string;
  imageHref?: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  strip?: StripItem[];
}) {
  const media = image ? (
    <a className="p31-hero-media" href={imageHref ?? image} target="_blank" rel="noreferrer" aria-label={imageHref ? `${title}. Opens in a new tab.` : `${imageAlt ?? project.alt}. Opens full size in a new tab.`}>
      <img src={image} alt={imageAlt ?? project.alt} fetchPriority="high" style={{ objectFit: imageFit, ...(imagePosition ? { objectPosition: imagePosition } : {}) }} />
    </a>
  ) : undefined;
  return (
    <CaseHeroFrame eyebrow={eyebrow} title={title} role={project.role} media={media}>
      {strip?.length ? <EvidenceStrip items={strip} /> : null}
    </CaseHeroFrame>
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

/**
 * A titled content section. `collapsed` turns it into deep evidence: the
 * eyebrow and heading stay visible as the toggle, the body opens on demand.
 * Use it for archive material, never for a case's core story.
 */
export function CaseSection({ eyebrow, title, children, collapsed = false }: { eyebrow?: string; title: string; children: ReactNode; collapsed?: boolean }) {
  if (collapsed) {
    return (
      <section className="p31-section is-collapsible section-shell">
        <details>
          <summary>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2>{title}</h2>
            <span className="disclosure-mark" aria-hidden="true" />
          </summary>
          <div className="p31-section-body">{children}</div>
        </details>
      </section>
    );
  }
  return (
    <section className="p31-section section-shell">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children}
    </section>
  );
}

/** Secondary evidence inside an open section: a labelled toggle, closed by default. */
export function MoreEvidence({ label, count, children }: { label: string; count?: number; children: ReactNode }) {
  return (
    <details className="more-evidence">
      <summary><span>{label}{typeof count === "number" ? ` (${count})` : ""}</span><span className="disclosure-mark" aria-hidden="true" /></summary>
      <div className="more-evidence-body">{children}</div>
    </details>
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
        className={isPhoto ? "is-photo" : undefined}
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
export function Card({ tag, title, children }: { tag?: string; title: string; children: ReactNode }) {
  return (
    <div className="p31-card">
      {tag ? <span className="p31-tag">{tag}</span> : null}
      <h3>{title}</h3>
      {children}
    </div>
  );
}

/** Card row. Two across by default; pass `cols={3}` for a three-across row. */
export function Cards({ children, cols = 2 }: { children: ReactNode; cols?: 2 | 3 }) {
  return <div className={cols === 3 ? "p31-cols p31-cols-3" : "p31-cols"}>{children}</div>;
}

/** Sub-heading inside a CaseSection, for cases that need more than one h2's worth of structure. */
export function SubHead({ children }: { children: ReactNode }) {
  return <h3 className="p31-subhead">{children}</h3>;
}

/** Status chips (small caps, accent colour). Pass each label separately; the row adds the spacing. */
export function ChipRow({ items, label = "Status" }: { items: string[]; label?: string }) {
  return (
    <ul className="p31-chips" aria-label={label}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

/** Bulleted or numbered list of content strings. */
export function CaseList({ items, ordered = false }: { items: ReactNode[]; ordered?: boolean }) {
  const List = ordered ? "ol" : "ul";
  return <List className="p31-list">{items.map((item, i) => <li key={i}>{item}</li>)}</List>;
}

/** Pulled quote, used for script lines and format taglines. */
export function CaseQuote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <blockquote className="p31-quote">
      <p>{children}</p>
      {cite ? <cite>{cite}</cite> : null}
    </blockquote>
  );
}

type TableRow = { head: ReactNode; cells: ReactNode[] };

/** Data table. `head` is the optional column header row; each row's first cell is a row header. */
export function CaseTable({
  caption,
  head,
  rows,
  label,
}: {
  caption?: string;
  head?: string[];
  rows: TableRow[];
  label: string;
}) {
  return (
    <div className="p31-table-wrap">
      <table className="p31-table" aria-label={label}>
        {caption ? <caption>{caption}</caption> : null}
        {head?.length ? (
          <thead>
            <tr>{head.map((cell) => <th key={cell} scope="col">{cell}</th>)}</tr>
          </thead>
        ) : null}
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <th scope="row">{row.head}</th>
              {row.cells.map((cell, j) => <td key={j}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type BarItem = { label: string; value: number };

/**
 * Horizontal bar list for scored criteria, e.g. survey averages. `max` is the
 * top of the scale (5 for an out-of-5 score) so the fills stay comparable.
 */
export function BarList({ items, max = 5, label }: { items: BarItem[]; max?: number; label: string }) {
  return (
    <div className="p31-bars" aria-label={label}>
      {items.map((item) => (
        <div className="p31-bar" key={item.label}>
          <div className="p31-bar-top"><span>{item.label}</span><b>{item.value.toFixed(1)}</b></div>
          <div className="p31-bar-track"><div className="p31-bar-fill" style={{ width: `${(item.value / max) * 100}%` }} /></div>
        </div>
      ))}
    </div>
  );
}

type Slot = {
  /** Manifest reference, e.g. "IMG-01". */
  ref: string;
  /** Empty until the real file is supplied; set it to an asset("/images/...") path to publish the image. */
  src?: string;
  alt: string;
  caption: string;
  tag: string;
  /** What the slot needs to be, shown in the placeholder while `src` is empty. */
  need: string;
  priority: string;
  variant?: "evidence" | "photo";
  ratio?: string;
  position?: string;
  href?: string;
};

/**
 * An image slot. Renders the real figure once `src` is filled in, and an
 * honest labelled placeholder (reference, what it needs to be, priority) until
 * then, so an unsupplied image is visible as a gap rather than faked.
 */
export function CaseSlot({ slot }: { slot: Slot }) {
  if (slot.src) {
    return (
      <EvidenceFigure
        src={slot.src}
        alt={slot.alt}
        caption={slot.caption}
        tag={slot.tag}
        href={slot.href}
        variant={slot.variant}
        ratio={slot.ratio}
        position={slot.position}
      />
    );
  }
  return (
    <figure className="p31-figure p31-slot">
      <MediaPlaceholder projectId={slot.ref} discipline={slot.need} label={`Image pending: ${slot.priority}`} />
      <figcaption><span>{slot.caption}</span><em>{slot.tag}</em></figcaption>
    </figure>
  );
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
  allow = "fullscreen",
  referrerPolicy,
  open,
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
  /** iframe permissions. Video hosts need more than the "fullscreen" default. */
  allow?: string;
  referrerPolicy?: HTMLAttributeReferrerPolicy;
  /** Force open (true) or closed (false); by default only video embeds start open. */
  open?: boolean;
}) {
  const aspectRatio = aspect ?? (portrait ? "3 / 4" : "16 / 9");
  const body = (
    <>
      <div className="p31-embed-frame" style={{ aspectRatio, ...(maxHeight ? { maxHeight } : {}) }}>
        <iframe title={title} src={src} allow={allow} referrerPolicy={referrerPolicy} allowFullScreen loading="lazy" />
      </div>
      <div className="proof-links" aria-label={`${title} link`}>
        <a href={fallbackUrl} target="_blank" rel="noreferrer">{fallbackLabel}</a>
        {extraLinks.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
        ))}
      </div>
    </>
  );
  // Documents (decks, sheets, PDFs) start closed behind their title so they
  // neither lengthen the page nor load until asked for; video stays open.
  const isVideo = open ?? VIDEO_HOST.test(src);
  if (!isVideo) {
    return (
      <details className={`p31-embed p31-embed-doc${inPair ? " in-pair" : ""}`}>
        <summary><span>{title}</span><span className="disclosure-mark" aria-hidden="true" /></summary>
        {body}
      </details>
    );
  }
  // Inside a MediaPair the grid gap handles spacing, so skip the top-margin wrapper.
  return inPair ? <div>{body}</div> : <div className="p31-embed">{body}</div>;
}

const VIDEO_HOST = /youtube|youtu\.be|vimeo|facebook\.com\/plugins\/video/i;

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

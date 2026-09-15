import type { Metadata } from "next";
import type { ComponentType } from "react";
import { projectBySlug, projects, type Project } from "../data";
import { REAL_IMAGES } from "../project-images";
import { SiteFooter, SiteHeader } from "../site-shell";
import { getProjectCopy } from "../content/projects";
import { localeAlternates, type Locale } from "../i18n";
import { BeLocalCase } from "../work/[slug]/be-local-case";
import { MuaHaCase } from "../work/[slug]/mua-ha-case";
import { MaggiCase } from "../work/[slug]/maggi-case";
import { TresemmeCase } from "../work/[slug]/tresemme-case";
import { LittleMeCase } from "../work/[slug]/little-me-case";
import { EmpactsCase } from "../work/[slug]/empacts-case";
import { CrisisResponseCase } from "../work/[slug]/crisis-response-case";
import { SupportingCase } from "../work/[slug]/supporting-case";

type CaseProps = { project: Project; previous: Project; next: Project; locale: Locale };

// Bespoke feature cases dispatched by project id. Every other project uses the
// generic renderer below. Keeps the routing a single lookup rather than a chain.
const BESPOKE_CASES: Record<string, ComponentType<CaseProps>> = {
  P02: MuaHaCase,
  P13: MaggiCase,
  P20: TresemmeCase,
  P22: LittleMeCase,
  P25: EmpactsCase,
  P31: BeLocalCase,
  P32: CrisisResponseCase,
};

/** One entry per project. Both language trees generate the same slugs. */
export function projectParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

/** Per-project metadata in `locale`, with hreflang alternates to the other one. */
export function projectMetadata(locale: Locale, slug: string): Metadata {
  const base = projectBySlug[slug];
  if (!base) return { title: "Project" };
  const project = getProjectCopy(locale, base);
  const path = `/work/${project.slug}`;
  const image = REAL_IMAGES[project.id]?.src;
  const images = image ? [{ url: image, alt: project.alt }] : undefined;
  return {
    title: project.title,
    description: project.tension,
    alternates: localeAlternates(locale, path),
    openGraph: { type: "article", title: project.title, description: project.tension, url: path, images },
    twitter: { card: "summary_large_image", title: project.title, description: project.tension, images: image ? [image] : undefined },
  };
}

/** Project case-study body, shared by /work/[slug] and /vi/work/[slug]. */
export function ProjectView({ locale, slug }: { locale: Locale; slug: string }) {
  const base = projectBySlug[slug];
  const project = getProjectCopy(locale, base);
  const index = projects.findIndex((item) => item.id === project.id);
  const previous = getProjectCopy(locale, projects[(index - 1 + projects.length) % projects.length]);
  const next = getProjectCopy(locale, projects[(index + 1) % projects.length]);

  const BespokeCase = BESPOKE_CASES[project.id] ?? SupportingCase;

  // Conservative CreativeWork schema. Deliberately not Article/NewsArticle:
  // these are Felix's own academic and professional artifacts, not published
  // news, so nothing implies third-party publication.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    abstract: project.tension,
    creator: { "@type": "Person", name: "Felix Phan" },
    dateCreated: project.year,
    genre: project.publicType,
    inLanguage: locale,
    ...(REAL_IMAGES[project.id]?.src ? { image: REAL_IMAGES[project.id].src } : {}),
  };

  return (
    <div className="site-frame" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <BespokeCase project={project} previous={previous} next={next} locale={locale} />
      </main>
      <SiteFooter locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

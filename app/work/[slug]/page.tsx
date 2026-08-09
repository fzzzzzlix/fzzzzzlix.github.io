import type { Metadata } from "next";
import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { projectBySlug, projects, type Project } from "../../data";
import { REAL_IMAGES } from "../../project-images";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { BeLocalCase } from "./be-local-case";
import { MuaHaCase } from "./mua-ha-case";
import { MaggiCase } from "./maggi-case";
import { TresemmeCase } from "./tresemme-case";
import { LittleMeCase } from "./little-me-case";
import { EmpactsCase } from "./empacts-case";
import { CrisisResponseCase } from "./crisis-response-case";
import { SupportingCase } from "./supporting-case";

type CaseProps = { project: Project; previous: Project; next: Project };

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

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) return { title: "Project" };
  const url = `/work/${project.slug}`;
  const image = REAL_IMAGES[project.id]?.src;
  const images = image ? [{ url: image, alt: project.alt }] : undefined;
  return {
    title: project.title,
    description: project.tension,
    alternates: { canonical: url },
    openGraph: { type: "article", title: project.title, description: project.tension, url, images },
    twitter: { card: "summary_large_image", title: project.title, description: project.tension, images: image ? [image] : undefined },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();
  const index = projects.findIndex((item) => item.id === project.id);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

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
    ...(REAL_IMAGES[project.id]?.src ? { image: REAL_IMAGES[project.id].src } : {}),
  };

  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <BespokeCase project={project} previous={previous} next={next} />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

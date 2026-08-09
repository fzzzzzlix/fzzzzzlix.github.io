import type { Metadata } from "next";
import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { projectBySlug, projects, type Project } from "../../data";
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
  return project ? { title: `${project.title} | Felix Phan`, description: project.tension } : { title: "Project | Felix Phan" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();
  const index = projects.findIndex((item) => item.id === project.id);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const BespokeCase = BESPOKE_CASES[project.id] ?? SupportingCase;
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <BespokeCase project={project} previous={previous} next={next} />
      </main>
      <SiteFooter />
    </div>
  );
}

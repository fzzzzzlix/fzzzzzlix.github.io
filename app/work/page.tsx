import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { featureProjects, projects } from "../data";
import WorkGrid from "./work-grid";

export const metadata: Metadata = { title: "Work | Felix Phan", description: "Explore Felix Phan's projects across strategy, scriptwriting, production, events, sustainability and content." };

export default async function WorkPage({ searchParams }: { searchParams: Promise<{ role?: string }> }) {
  const { role } = await searchParams;
  const supportingCount = projects.length - featureProjects.length;
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <PageHero eyebrow="The work" title={`${projects.length} projects. One operating pattern`} deck={`Start with the ${featureProjects.length} feature cases or filter by the capability you need. Every project keeps its exact role, evidence status and publication boundary.`} aside={<div className="page-aside-stat"><strong>{String(featureProjects.length).padStart(2, "0")}</strong><span>feature cases</span><strong>{String(supportingCount).padStart(2, "0")}</strong><span>supporting cases</span></div>} />
        <section className="work-index section-shell" aria-label="Project index"><WorkGrid initialRole={role} /></section>
      </main>
      <SiteFooter />
    </div>
  );
}

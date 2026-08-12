import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { featureProjects, projects } from "../data";
import WorkGrid from "./work-grid";

export const metadata: Metadata = { title: "Work", description: "Explore Felix Phan's projects across strategy, scriptwriting, production, events, sustainability and content.", alternates: { canonical: "/work" } };

export default async function WorkPage({ searchParams }: { searchParams: Promise<{ role?: string }> }) {
  const { role } = await searchParams;
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <PageHero eyebrow="The work" deck={`Start with the ${featureProjects.length} feature cases or filter by the capability you need.`} aside={<div className="page-aside-stat"><strong>{projects.length}</strong><span>selected projects</span></div>} />
        <section className="work-index section-shell" aria-label="Project index"><WorkGrid initialRole={role} /></section>
      </main>
      <SiteFooter />
    </div>
  );
}

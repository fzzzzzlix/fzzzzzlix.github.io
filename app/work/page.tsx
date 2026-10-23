import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { featureProjects, projects } from "../data";
import WorkGrid from "./work-grid";

export const metadata: Metadata = pageMetadata({ title: "Work", description: "Projects by Felix Phan (Nguyen Phan Thuc Huong) across strategy, research, scriptwriting, production, events, sustainability and content.", path: "/work" });

export default async function WorkPage({ searchParams }: { searchParams: Promise<{ role?: string }> }) {
  const { role } = await searchParams;
  return (
    <div className="site-frame">
      <SiteHeader current="/work" />
      <main id="main-content">
        <PageHero eyebrow="Work" deck={`Start with the ${featureProjects.length} feature cases or filter by the capability you need.`} aside={<div className="page-aside-stat"><strong>{projects.length}</strong><span>selected projects</span></div>} />
        <section className="work-index" aria-label="Project index"><WorkGrid initialRole={role} /></section>
      </main>
      <SiteFooter />
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectBySlug } from "../../data";
import { ProjectView, projectMetadata, projectParams } from "../../views/project-view";

export function generateStaticParams() {
  return projectParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return projectMetadata("en", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!projectBySlug[slug]) notFound();
  return <ProjectView locale="en" slug={slug} />;
}

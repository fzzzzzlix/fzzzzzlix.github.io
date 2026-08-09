import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectBySlug, projects } from "../../data";
import { EvidenceLabel, MediaPlaceholder, SiteFooter, SiteHeader, StarMark } from "../../site-shell";
import { REAL_IMAGES } from "../../project-images";
import { BeLocalCase } from "./be-local-case";

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

  if (project.id === "P31") {
    return (
      <div className="site-frame">
        <SiteHeader />
        <main id="main-content">
          <BeLocalCase project={project} previous={previous} next={next} />
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <article className={`case-page${project.feature ? " feature-case" : " capsule-case"}`}>
          <header className="case-hero section-shell">
            <div>
              <p className="eyebrow"><StarMark size={18} /> {project.feature ? "Feature case" : "Supporting case"}</p>
              <h1>{project.title}</h1>
              <p className="case-role">{project.role}</p>
              <div className="case-meta"><span>{project.id}</span><span>{project.year}</span><span>{project.publicType}</span>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            {REAL_IMAGES[project.id] ? (
              <div className="case-img-wrap">
                <img src={REAL_IMAGES[project.id].src} alt={project.alt} style={{ objectFit: REAL_IMAGES[project.id].fit }} />
              </div>
            ) : (
              <MediaPlaceholder label={`${project.id} case-study evidence`} filename={project.assetFilename} ratio={project.assetRatio} note={project.assetRule} />
            )}
          </header>

          <section className="case-tension section-shell"><p className="eyebrow">The tension</p><h2>{project.tension}</h2></section>

          <section className="case-body section-shell">
            <div className="case-rail"><p>{project.id}</p><span>{project.feature ? "Deep case" : "Capsule case"}</span></div>
            <div className="case-sections">
              <section><p className="eyebrow">The approach</p><h2>Turn the problem into a structure</h2><p>{project.approach}</p></section>
              <section><p className="eyebrow">The output</p><h2>Make the idea concrete</h2><p>{project.output}</p></section>
              <section><p className="eyebrow">The significance</p><h2>State what the work can prove</h2><p>{project.significance}</p></section>
              <section><p className="eyebrow">Role boundary</p><h2>Say exactly what Felix owned</h2><p>{project.role}</p></section>
              <section className="evidence-panel">
                <EvidenceLabel>Evidence and publication rule</EvidenceLabel>
                <p>{project.evidence}</p>
                {project.proofLinks?.length ? (
                  <div className="proof-links" aria-label="Project evidence links">
                    {project.proofLinks.map((proof) => (
                      <a key={proof.url} href={proof.url} target="_blank" rel="noreferrer">{proof.label}</a>
                    ))}
                  </div>
                ) : null}
              </section>
            </div>
          </section>
          <nav className="case-nav section-shell" aria-label="Project navigation"><Link href={`/work/${previous.slug}`}><span>Previous project</span><strong>{previous.title}</strong></Link><Link href="/work"><span>Return to</span><strong>All work</strong></Link><Link href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong></Link></nav>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

import type { Project } from "../../data";
import { CoverImage, MediaPlaceholder, StarMark } from "../../site-shell";
import { REAL_IMAGES } from "../../project-images";
import {
  CaseArticle,
  CaseNav,
  CaseSection,
  EvidenceFigure,
  Lede,
  MediaPair,
  ProofLinks,
  ResponsiveEmbed,
} from "./feature-case-primitives";
import { SUPPORTING_CASES, type CaseEmbed, type CaseFigure } from "./supporting-case-data";

type CaseProps = { project: Project; previous: Project; next: Project };

/*
 * Shared supporting-case renderer for every non-flagship project (P01, P03–P07,
 * P09–P12, P14, P16–P19, P21, P23, P24, P26–P30, P33, P34). It reuses the P31
 * feature-case primitives so the visual language matches the flagship set, and
 * reads the evidence/embed layer from supporting-case-data.ts.
 *
 * Density modes only change how much is shown, never the claim discipline:
 *   D1 enhanced   — deck + full narrative + significance + embeds/figures.
 *   D2 capsule    — deck + narrative + significance, compact.
 *   D3 supporting — deck + tension + approach/output + ownership + evidence.
 *
 * Research cases (P33/P34, P17) override the section labels via the extension so
 * they read as research (question → method → sample/data → findings →
 * limitations → ownership → capability), not as advertising case studies.
 */

// Public classification for the hero eyebrow. Internal density (D1/D2/D3) is an
// implementation detail and must not leak; this maps it to a meaningful,
// presentation-forward label so enhanced/research cases never read as generic
// "supporting" work.
function caseLabel(project: Project, density: string): string {
  const isResearch = /research/i.test(project.publicType);
  if (density === "D1") return isResearch ? "Research case" : "Enhanced case";
  if (density === "D2") return isResearch ? "Research case" : "Evidence case";
  return "Supporting case";
}

function renderEmbeds(embeds: CaseEmbed[]) {
  if (!embeds.length) return null;
  if (embeds.length === 1) return <ResponsiveEmbed {...embeds[0]} />;
  return (
    <MediaPair>
      {embeds.map((embed) => (
        <ResponsiveEmbed key={embed.title} inPair {...embed} />
      ))}
    </MediaPair>
  );
}

function renderFigure(figure: CaseFigure) {
  return (
    <EvidenceFigure
      key={figure.src}
      src={figure.src}
      alt={figure.alt}
      caption={figure.caption}
      tag={figure.tag}
      href={figure.href}
      variant={figure.fit === "cover" ? "photo" : "evidence"}
    />
  );
}

export function SupportingCase({ project, previous, next }: CaseProps) {
  const ext = SUPPORTING_CASES[project.id];
  const image = REAL_IMAGES[project.id];
  const density = ext?.density ?? "D3";
  const showSignificance = density !== "D3";

  const proofLinks = [...(ext?.proofLinks ?? []), ...(project.proofLinks ?? [])];
  const embeds = ext?.embeds ?? [];
  const figures = ext?.figures ?? [];
  const sections = ext?.sections ?? [];

  return (
    <CaseArticle>
      <header className="p31-hero section-shell">
        <div className="p31-hero-head">
          <p className="eyebrow">
            <StarMark size={18} /> {caseLabel(project, density)}
          </p>
          <h1>{project.title}</h1>
          <p className="case-role">{project.role}</p>
          <div className="case-meta">
            <span>{project.id}</span>
            <span>{project.year}</span>
            <span>{project.publicType}</span>
            {ext?.context ? <span>{ext.context}</span> : null}
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        {image ? (
          <a
            className="p31-hero-media"
            href={image.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.alt}. Opens full size in a new tab.`}
          >
            <CoverImage src={image.src} fit={image.fit} poster={image.poster} alt={project.alt} loading="eager" />
          </a>
        ) : (
          <div style={{ marginTop: 46 }}>
            <MediaPlaceholder projectId={project.id} discipline={project.publicType} />
          </div>
        )}
      </header>

      {ext?.deck ? (
        <section className="p31-section section-shell">
          <Lede>{ext.deck}</Lede>
        </section>
      ) : null}

      <section className="case-tension section-shell">
        <p className="eyebrow">{ext?.tensionLabel ?? "The tension"}</p>
        <h2>{project.tension}</h2>
      </section>

      <CaseSection eyebrow={ext?.approachEyebrow ?? "The approach"} title={ext?.approachTitle ?? "Turn the problem into a structure"}>
        <Lede>{project.approach}</Lede>
      </CaseSection>

      <CaseSection eyebrow={ext?.outputEyebrow ?? "The output"} title={ext?.outputTitle ?? "Make the idea concrete"}>
        <Lede>{project.output}</Lede>
        {renderEmbeds(embeds)}
        {figures.map(renderFigure)}
      </CaseSection>

      {showSignificance ? (
        <CaseSection
          eyebrow={ext?.significanceEyebrow ?? "The significance"}
          title={ext?.significanceTitle ?? "What the work can prove"}
        >
          <Lede>{project.significance}</Lede>
        </CaseSection>
      ) : null}

      {sections.map((block) => (
        <CaseSection key={block.title} eyebrow={block.eyebrow} title={block.title}>
          {block.body.map((paragraph, i) => (
            <Lede key={i}>{paragraph}</Lede>
          ))}
          {block.embed ? renderEmbeds([block.embed]) : null}
          {block.figure ? renderFigure(block.figure) : null}
        </CaseSection>
      ))}

      {ext?.capability ? (
        <CaseSection eyebrow="What this demonstrates" title="The capability this proves">
          <Lede>{ext.capability}</Lede>
        </CaseSection>
      ) : null}

      {proofLinks.length ? (
        <section className="p31-section section-shell">
          <ProofLinks links={proofLinks} label="Links" />
        </section>
      ) : null}

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

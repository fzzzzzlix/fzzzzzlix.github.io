import type { Project } from "../../data";
import { inline } from "../../content/render-inline";
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
 * P10–P12, P14, P16–P18, P21, P26, P30, P33, P34). It reuses the P31
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
  const type = project.publicType.toLowerCase();
  const isResearch = /research/.test(type);
  const isSelfInitiated = /self-initiated|concept/.test(type);
  const isProfessional = /professional/.test(type);
  if (density === "D1") {
    if (isResearch) return "Research case";
    if (isSelfInitiated) return "Concept development case";
    if (isProfessional) return "Enhanced professional case";
    return "Enhanced case";
  }
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
  const showTension = !ext?.hideTension;
  const showApproach = !ext?.hideApproach;
  const showOutput = !ext?.hideOutput;
  const showSignificance = density !== "D3" && !ext?.hideSignificance;

  const proofLinks = [...(ext?.proofLinks ?? []), ...(project.proofLinks ?? [])];
  const embeds = ext?.embeds ?? [];
  const figures = ext?.figures ?? [];
  const sections = ext?.sections ?? [];
  const hasMedia = embeds.length > 0 || figures.length > 0;
  const heroHref = ext?.heroHref ?? image?.src;

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
            {ext?.hideYear || !project.year ? null : <span>{project.year}</span>}
            {ext?.hideType || !project.publicType ? null : <span>{project.publicType}</span>}
            {ext?.context && !ext?.hideContext ? <span>{ext.context}</span> : null}
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        {image ? (
          <>
            <a
              className="p31-hero-media"
              href={heroHref}
              target="_blank"
              rel="noreferrer"
              aria-label={ext?.heroHref ? `${project.title}. Opens in a new tab.` : `${project.alt}. Opens full size in a new tab.`}
            >
              <CoverImage src={image.src} fit={image.fit} poster={image.poster} alt={project.alt} loading="eager" />
            </a>
            {ext?.heroCaption ? <p className="p31-hero-caption">{inline(ext.heroCaption)}</p> : null}
          </>
        ) : (
          <div style={{ marginTop: 46 }}>
            <MediaPlaceholder projectId={project.id} discipline={project.publicType} />
          </div>
        )}
      </header>

      {ext?.deck ? (
        <section className="p31-section section-shell">
          <Lede>{inline(ext.deck)}</Lede>
        </section>
      ) : null}

      {showTension ? (
        <section className="case-tension section-shell">
          <p className="eyebrow">{ext?.tensionLabel ?? "The tension"}</p>
          <h2>{project.tension}</h2>
        </section>
      ) : null}

      {showApproach ? (
        <CaseSection eyebrow={ext?.approachEyebrow ?? "The approach"} title={ext?.approachTitle ?? "Turn the problem into a structure"}>
          <Lede>{project.approach}</Lede>
        </CaseSection>
      ) : null}

      {showOutput ? (
        <CaseSection eyebrow={ext?.outputEyebrow ?? "The output"} title={ext?.outputTitle ?? "Make the idea concrete"}>
          <Lede>{project.output}</Lede>
          {renderEmbeds(embeds)}
          {figures.map(renderFigure)}
        </CaseSection>
      ) : hasMedia ? (
        <section className="p31-section section-shell">
          {renderEmbeds(embeds)}
          {figures.map(renderFigure)}
        </section>
      ) : null}

      {showSignificance ? (
        <CaseSection
          eyebrow={ext?.significanceEyebrow ?? "The significance"}
          title={ext?.significanceTitle ?? "What the work can prove"}
        >
          <Lede>{project.significance}</Lede>
        </CaseSection>
      ) : null}

      {sections.map((block) =>
        block.split && block.embed ? (
          <CaseSection key={block.title} eyebrow={block.eyebrow} title={block.title}>
            <MediaPair>
              <div>
                {block.body.map((paragraph, i) => (
                  <Lede key={i}>{inline(paragraph)}</Lede>
                ))}
              </div>
              <ResponsiveEmbed inPair {...block.embed} />
            </MediaPair>
          </CaseSection>
        ) : (
          <CaseSection key={block.title} eyebrow={block.eyebrow} title={block.title}>
            {block.splitFigure ? (
              <MediaPair>
                <div>
                  {block.body.map((paragraph, i) => (
                    <Lede key={i}>{inline(paragraph)}</Lede>
                  ))}
                </div>
                {renderFigure(block.splitFigure)}
              </MediaPair>
            ) : (
              block.body.map((paragraph, i) => <Lede key={i}>{inline(paragraph)}</Lede>)
            )}
            {block.figure ? renderFigure(block.figure) : null}
            {block.figures?.length
              ? block.pairFigures
                ? Array.from({ length: Math.ceil(block.figures.length / 2) }, (_, i) => (
                    <MediaPair key={i}>{block.figures!.slice(i * 2, i * 2 + 2).map(renderFigure)}</MediaPair>
                  ))
                : block.figures.map(renderFigure)
              : null}
            {block.embed ? renderEmbeds([block.embed]) : null}
            {block.embeds?.length ? renderEmbeds(block.embeds) : null}
          </CaseSection>
        ),
      )}

      {ext?.capability ? (
        <CaseSection eyebrow="What this demonstrates" title="The capability this proves">
          <Lede>{inline(ext.capability)}</Lede>
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

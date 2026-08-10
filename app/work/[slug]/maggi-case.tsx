import type { Project } from "../../data";
import { inline } from "../../content/render-inline";
import { maggi as c } from "../../content/cases/maggi";
import {
  CaseArticle,
  CaseHero,
  CaseNav,
  CaseSection,
  CaseTension,
  EvidenceFigure,
  EvidencePanel,
  Lede,
  MediaPair,
  OwnershipNote,
  ResponsiveEmbed,
  StatGrid,
} from "./feature-case-primitives";

export function MaggiCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        title={c.hero.title}
        descriptor={c.hero.descriptor}
        image={c.hero.image}
        imageFit="cover"
        strip={c.hero.strip}
      />

      <CaseTension>{project.tension}</CaseTension>

      <CaseSection eyebrow={c.researchQuestion.eyebrow} title={c.researchQuestion.title}>
        {c.researchQuestion.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <StatGrid label={c.researchQuestion.stat.label} items={c.researchQuestion.stat.items} />
      </CaseSection>

      <CaseSection eyebrow={c.insight.eyebrow} title={c.insight.title}>
        {c.insight.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MediaPair>
          <EvidenceFigure
            src={c.insight.commentThemesFigure.src}
            alt={c.insight.commentThemesFigure.alt}
            caption={c.insight.commentThemesFigure.caption}
            tag={c.insight.commentThemesFigure.tag}
          />
          <EvidenceFigure
            src={c.insight.sentimentFigure.src}
            alt={c.insight.sentimentFigure.alt}
            caption={c.insight.sentimentFigure.caption}
            tag={c.insight.sentimentFigure.tag}
          />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow={c.direction.eyebrow} title={c.direction.title}>
        {c.direction.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <EvidenceFigure
          src={c.direction.figure.src}
          alt={c.direction.figure.alt}
          caption={c.direction.figure.caption}
          tag={c.direction.figure.tag}
        />
      </CaseSection>

      <CaseSection eyebrow={c.creative.eyebrow} title={c.creative.title}>
        {c.creative.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <EvidenceFigure
          src={c.creative.bigIdeaFigure.src}
          alt={c.creative.bigIdeaFigure.alt}
          caption={c.creative.bigIdeaFigure.caption}
          tag={c.creative.bigIdeaFigure.tag}
        />
        <EvidenceFigure
          src={c.creative.storyboardFigure.src}
          alt={c.creative.storyboardFigure.alt}
          caption={c.creative.storyboardFigure.caption}
          tag={c.creative.storyboardFigure.tag}
        />
        <ResponsiveEmbed
          title={c.creative.embed.title}
          src={c.creative.embed.src}
          fallbackUrl={c.creative.embed.fallbackUrl}
          fallbackLabel={c.creative.embed.fallbackLabel}
        />
        <OwnershipNote label={c.creative.note.label}>{inline(c.creative.note.body)}</OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow={c.demonstrates.eyebrow} title={c.demonstrates.title}>
        {c.demonstrates.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <EvidencePanel links={c.demonstrates.links}>
          {project.evidence}
        </EvidencePanel>
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

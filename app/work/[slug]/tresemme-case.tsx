import type { Project } from "../../data";
import { inline } from "../../content/render-inline";
import { tresemme as c } from "../../content/cases/tresemme";
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

export function TresemmeCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        title={c.hero.title}
        image={c.hero.image}
        imageHref={c.hero.imageHref}
        imageFit="cover"
        strip={c.hero.strip}
      />

      <CaseTension>{project.tension}</CaseTension>

      <CaseSection eyebrow={c.diagnosis.eyebrow} title={c.diagnosis.title}>
        {c.diagnosis.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MediaPair>
          <EvidenceFigure
            src={c.diagnosis.platformAnalysisFigure.src}
            alt={c.diagnosis.platformAnalysisFigure.alt}
            caption={c.diagnosis.platformAnalysisFigure.caption}
            tag={c.diagnosis.platformAnalysisFigure.tag}
            href={c.imagesFolder}
          />
          <EvidenceFigure
            src={c.diagnosis.platformTableFigure.src}
            alt={c.diagnosis.platformTableFigure.alt}
            caption={c.diagnosis.platformTableFigure.caption}
            tag={c.diagnosis.platformTableFigure.tag}
            href={c.imagesFolder}
          />
        </MediaPair>
        <OwnershipNote label={c.diagnosis.note.label}>{inline(c.diagnosis.note.body)}</OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow={c.creatorSystem.eyebrow} title={c.creatorSystem.title}>
        {c.creatorSystem.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <EvidenceFigure
          src={c.creatorSystem.figure.src}
          alt={c.creatorSystem.figure.alt}
          caption={c.creatorSystem.figure.caption}
          tag={c.creatorSystem.figure.tag}
          href={c.imagesFolder}
        />
      </CaseSection>

      <CaseSection eyebrow={c.integratedPlan.eyebrow} title={c.integratedPlan.title}>
        {c.integratedPlan.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MediaPair>
          <EvidenceFigure
            src={c.integratedPlan.doohFigure.src}
            alt={c.integratedPlan.doohFigure.alt}
            caption={c.integratedPlan.doohFigure.caption}
            tag={c.integratedPlan.doohFigure.tag}
            href={c.imagesFolder}
          />
          <EvidenceFigure
            src={c.integratedPlan.pulsingFigure.src}
            alt={c.integratedPlan.pulsingFigure.alt}
            caption={c.integratedPlan.pulsingFigure.caption}
            tag={c.integratedPlan.pulsingFigure.tag}
            href={c.imagesFolder}
          />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow={c.budget.eyebrow} title={c.budget.title}>
        {c.budget.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <StatGrid label={c.budget.stat.label} items={c.budget.stat.items} />
        <ResponsiveEmbed
          title={c.budget.embed.title}
          src={c.budget.embed.src}
          fallbackUrl={c.budget.embed.fallbackUrl}
          fallbackLabel={c.budget.embed.fallbackLabel}
        />
        <OwnershipNote label={c.budget.note.label}>{inline(c.budget.note.body)}</OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow={c.mediaPlan.eyebrow} title={c.mediaPlan.title}>
        <ResponsiveEmbed
          title={c.mediaPlan.embed.title}
          src={c.mediaPlan.embed.src}
          fallbackUrl={c.mediaPlan.embed.fallbackUrl}
          fallbackLabel={c.mediaPlan.embed.fallbackLabel}
        />
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

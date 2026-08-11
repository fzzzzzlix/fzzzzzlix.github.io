import type { Project } from "../../data";
import { inline } from "../../content/render-inline";
import { empacts as c } from "../../content/cases/empacts";
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

export function EmpactsCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
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

      <CaseSection eyebrow={c.verifiedRole.eyebrow} title={c.verifiedRole.title}>
        {c.verifiedRole.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <OwnershipNote label={c.verifiedRole.note.label}>{inline(c.verifiedRole.note.body)}</OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow={c.operatingModel.eyebrow} title={c.operatingModel.title}>
        {c.operatingModel.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MediaPair>
          <EvidenceFigure
            src={c.operatingModel.onePager1Figure.src}
            alt={c.operatingModel.onePager1Figure.alt}
            caption={c.operatingModel.onePager1Figure.caption}
            tag={c.operatingModel.onePager1Figure.tag}
          />
          <EvidenceFigure
            src={c.operatingModel.onePager2Figure.src}
            alt={c.operatingModel.onePager2Figure.alt}
            caption={c.operatingModel.onePager2Figure.caption}
            tag={c.operatingModel.onePager2Figure.tag}
          />
        </MediaPair>
        <MediaPair>
          <EvidenceFigure
            src={c.operatingModel.canvasFigure.src}
            alt={c.operatingModel.canvasFigure.alt}
            caption={c.operatingModel.canvasFigure.caption}
            tag={c.operatingModel.canvasFigure.tag}
          />
          <ResponsiveEmbed
            title={c.operatingModel.commProposalEmbed.title}
            src={c.operatingModel.commProposalEmbed.src}
            fallbackUrl={c.operatingModel.commProposalEmbed.fallbackUrl}
            fallbackLabel={c.operatingModel.commProposalEmbed.fallbackLabel}
            inPair
          />
        </MediaPair>
        <p className="p31-lede" style={{ marginTop: 42 }}>
          {inline(c.operatingModel.templatesIntro)}
        </p>
        <MediaPair>
          <ResponsiveEmbed
            title={c.operatingModel.templateEnEmbed.title}
            src={c.operatingModel.templateEnEmbed.src}
            fallbackUrl={c.operatingModel.templateEnEmbed.fallbackUrl}
            fallbackLabel={c.operatingModel.templateEnEmbed.fallbackLabel}
            inPair
          />
          <ResponsiveEmbed
            title={c.operatingModel.templateViEmbed.title}
            src={c.operatingModel.templateViEmbed.src}
            fallbackUrl={c.operatingModel.templateViEmbed.fallbackUrl}
            fallbackLabel={c.operatingModel.templateViEmbed.fallbackLabel}
            inPair
          />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow={c.publicProgramming.eyebrow} title={c.publicProgramming.title}>
        {c.publicProgramming.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MediaPair>
          <ResponsiveEmbed
            title={c.publicProgramming.webinarEmbed.title}
            src={c.publicProgramming.webinarEmbed.src}
            fallbackUrl={c.publicProgramming.webinarEmbed.fallbackUrl}
            fallbackLabel={c.publicProgramming.webinarEmbed.fallbackLabel}
            inPair
          />
          <EvidenceFigure
            src={c.publicProgramming.eventFigure.src}
            alt={c.publicProgramming.eventFigure.alt}
            caption={c.publicProgramming.eventFigure.caption}
            tag={c.publicProgramming.eventFigure.tag}
            variant={c.publicProgramming.eventFigure.variant}
            ratio={c.publicProgramming.eventFigure.ratio}
          />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow={c.epic.eyebrow} title={c.epic.title}>
        {c.epic.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <ResponsiveEmbed
          title={c.epic.proposalEmbed.title}
          src={c.epic.proposalEmbed.src}
          fallbackUrl={c.epic.proposalEmbed.fallbackUrl}
          fallbackLabel={c.epic.proposalEmbed.fallbackLabel}
        />
      </CaseSection>

      <CaseSection eyebrow={c.visibility.eyebrow} title={c.visibility.title}>
        {c.visibility.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MediaPair>
          <EvidenceFigure
            src={c.visibility.felixFigure.src}
            alt={c.visibility.felixFigure.alt}
            caption={c.visibility.felixFigure.caption}
            tag={c.visibility.felixFigure.tag}
          />
          <EvidenceFigure
            src={c.visibility.teamFigure.src}
            alt={c.visibility.teamFigure.alt}
            caption={c.visibility.teamFigure.caption}
            tag={c.visibility.teamFigure.tag}
          />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow={c.demonstrates.eyebrow} title={c.demonstrates.title}>
        {c.demonstrates.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <StatGrid label={c.demonstrates.stat.label} items={c.demonstrates.stat.items} />
        <EvidencePanel links={c.demonstrates.links}>
          {project.evidence}
        </EvidencePanel>
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

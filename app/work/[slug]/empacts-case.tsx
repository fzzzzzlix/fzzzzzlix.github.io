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
        <EvidenceFigure
          src={c.operatingModel.canvasFigure.src}
          alt={c.operatingModel.canvasFigure.alt}
          caption={c.operatingModel.canvasFigure.caption}
          tag={c.operatingModel.canvasFigure.tag}
        />
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

      <CaseSection eyebrow={c.infoDiscipline.eyebrow} title={c.infoDiscipline.title}>
        {c.infoDiscipline.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MediaPair>
          <EvidenceFigure
            src={c.infoDiscipline.onePager1Figure.src}
            alt={c.infoDiscipline.onePager1Figure.alt}
            caption={c.infoDiscipline.onePager1Figure.caption}
            tag={c.infoDiscipline.onePager1Figure.tag}
          />
          <EvidenceFigure
            src={c.infoDiscipline.onePager2Figure.src}
            alt={c.infoDiscipline.onePager2Figure.alt}
            caption={c.infoDiscipline.onePager2Figure.caption}
            tag={c.infoDiscipline.onePager2Figure.tag}
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

import type { Project } from "../../data";
import { inline } from "../../content/render-inline";
import { littleMe as c } from "../../content/cases/little-me";
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
  StatGrid,
} from "./feature-case-primitives";

export function LittleMeCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
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

      <CaseSection eyebrow={c.participation.eyebrow} title={c.participation.title}>
        {c.participation.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.experienceDesign.eyebrow} title={c.experienceDesign.title}>
        {c.experienceDesign.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <EvidenceFigure
          src={c.experienceDesign.floorPlanFigure.src}
          alt={c.experienceDesign.floorPlanFigure.alt}
          caption={c.experienceDesign.floorPlanFigure.caption}
          tag={c.experienceDesign.floorPlanFigure.tag}
        />
        <MediaPair>
          <EvidenceFigure
            src={c.experienceDesign.zoneFigure.src}
            alt={c.experienceDesign.zoneFigure.alt}
            caption={c.experienceDesign.zoneFigure.caption}
            tag={c.experienceDesign.zoneFigure.tag}
            variant={c.experienceDesign.zoneFigure.variant}
            ratio={c.experienceDesign.zoneFigure.ratio}
          />
          <EvidenceFigure
            src={c.experienceDesign.calmJarFigure.src}
            alt={c.experienceDesign.calmJarFigure.alt}
            caption={c.experienceDesign.calmJarFigure.caption}
            tag={c.experienceDesign.calmJarFigure.tag}
            variant={c.experienceDesign.calmJarFigure.variant}
            ratio={c.experienceDesign.calmJarFigure.ratio}
          />
        </MediaPair>
        <EvidenceFigure
          src={c.experienceDesign.buddyFigure.src}
          alt={c.experienceDesign.buddyFigure.alt}
          caption={c.experienceDesign.buddyFigure.caption}
          tag={c.experienceDesign.buddyFigure.tag}
          variant={c.experienceDesign.buddyFigure.variant}
          ratio={c.experienceDesign.buddyFigure.ratio}
        />
      </CaseSection>

      <CaseSection eyebrow={c.leadership.eyebrow} title={c.leadership.title}>
        {c.leadership.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.results.eyebrow} title={c.results.title}>
        {c.results.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <StatGrid label={c.results.resultsStat.label} items={c.results.resultsStat.items} />
        <StatGrid label={c.results.reachStat.label} items={c.results.reachStat.items} />
        <OwnershipNote label={c.results.note.label}>{inline(c.results.note.body)}</OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow={c.demonstrates.eyebrow} title={c.demonstrates.title}>
        {c.demonstrates.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <EvidencePanel>{project.evidence}</EvidencePanel>
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

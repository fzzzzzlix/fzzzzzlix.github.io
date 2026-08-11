import type { Project } from "../../data";
import { inline } from "../../content/render-inline";
import { littleMe as c } from "../../content/cases/little-me";
import {
  CaseArticle,
  CaseHero,
  CaseNav,
  CaseSection,
  CaseTension,
  CaseVideo,
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
        imageHref={c.hero.imageHref}
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
          href={c.imagesFolder}
        />
        <MediaPair>
          <EvidenceFigure
            src={c.experienceDesign.zoneFigure.src}
            alt={c.experienceDesign.zoneFigure.alt}
            caption={c.experienceDesign.zoneFigure.caption}
            tag={c.experienceDesign.zoneFigure.tag}
            variant={c.experienceDesign.zoneFigure.variant}
            ratio={c.experienceDesign.zoneFigure.ratio}
            href={c.imagesFolder}
          />
          <EvidenceFigure
            src={c.experienceDesign.calmJarFigure.src}
            alt={c.experienceDesign.calmJarFigure.alt}
            caption={c.experienceDesign.calmJarFigure.caption}
            tag={c.experienceDesign.calmJarFigure.tag}
            variant={c.experienceDesign.calmJarFigure.variant}
            ratio={c.experienceDesign.calmJarFigure.ratio}
            href={c.imagesFolder}
          />
        </MediaPair>
        <MediaPair>
          <EvidenceFigure
            src={c.experienceDesign.artworkFigure.src}
            alt={c.experienceDesign.artworkFigure.alt}
            caption={c.experienceDesign.artworkFigure.caption}
            tag={c.experienceDesign.artworkFigure.tag}
            variant={c.experienceDesign.artworkFigure.variant}
            ratio={c.experienceDesign.artworkFigure.ratio}
            href={c.imagesFolder}
          />
          <EvidenceFigure
            src={c.experienceDesign.bookletFigure.src}
            alt={c.experienceDesign.bookletFigure.alt}
            caption={c.experienceDesign.bookletFigure.caption}
            tag={c.experienceDesign.bookletFigure.tag}
            variant={c.experienceDesign.bookletFigure.variant}
            ratio={c.experienceDesign.bookletFigure.ratio}
            href={c.imagesFolder}
          />
        </MediaPair>
        <EvidenceFigure
          src={c.experienceDesign.buddyFigure.src}
          alt={c.experienceDesign.buddyFigure.alt}
          caption={c.experienceDesign.buddyFigure.caption}
          tag={c.experienceDesign.buddyFigure.tag}
          variant={c.experienceDesign.buddyFigure.variant}
          ratio={c.experienceDesign.buddyFigure.ratio}
          href={c.imagesFolder}
        />
        <MediaPair>
          <CaseVideo
            src={c.experienceDesign.jarVideo.src}
            caption={c.experienceDesign.jarVideo.caption}
            tag={c.experienceDesign.jarVideo.tag}
          />
          <CaseVideo
            src={c.experienceDesign.setupVideo.src}
            caption={c.experienceDesign.setupVideo.caption}
            tag={c.experienceDesign.setupVideo.tag}
          />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow={c.leadership.eyebrow} title={c.leadership.title}>
        {c.leadership.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MediaPair>
          <EvidenceFigure
            src={c.leadership.teamFigure.src}
            alt={c.leadership.teamFigure.alt}
            caption={c.leadership.teamFigure.caption}
            tag={c.leadership.teamFigure.tag}
            variant={c.leadership.teamFigure.variant}
            ratio={c.leadership.teamFigure.ratio}
            href={c.imagesFolder}
          />
          <EvidenceFigure
            src={c.leadership.onSiteFigure.src}
            alt={c.leadership.onSiteFigure.alt}
            caption={c.leadership.onSiteFigure.caption}
            tag={c.leadership.onSiteFigure.tag}
            variant={c.leadership.onSiteFigure.variant}
            ratio={c.leadership.onSiteFigure.ratio}
            href={c.imagesFolder}
          />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow={c.results.eyebrow} title={c.results.title}>
        {c.results.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <StatGrid label={c.results.resultsStat.label} items={c.results.resultsStat.items} />
        <StatGrid label={c.results.reachStat.label} items={c.results.reachStat.items} />
        <MediaPair>
          <EvidenceFigure
            src={c.results.reachFigure.src}
            alt={c.results.reachFigure.alt}
            caption={c.results.reachFigure.caption}
            tag={c.results.reachFigure.tag}
            href={c.imagesFolder}
          />
          <EvidenceFigure
            src={c.results.tiktokFigure.src}
            alt={c.results.tiktokFigure.alt}
            caption={c.results.tiktokFigure.caption}
            tag={c.results.tiktokFigure.tag}
            href={c.imagesFolder}
          />
        </MediaPair>
        <EvidenceFigure
          src={c.results.awardFigure.src}
          alt={c.results.awardFigure.alt}
          caption={c.results.awardFigure.caption}
          tag={c.results.awardFigure.tag}
          href={c.imagesFolder}
        />
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

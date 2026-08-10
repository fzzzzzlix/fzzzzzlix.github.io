import type { Project } from "../../data";
import { inline } from "../../content/render-inline";
import { muaHa as c } from "../../content/cases/mua-ha";
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
} from "./feature-case-primitives";

export function MuaHaCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
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

      <CaseSection eyebrow={c.film.eyebrow} title={c.film.title}>
        {c.film.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <ResponsiveEmbed
          title={c.film.embed.title}
          src={c.film.embed.src}
          fallbackUrl={c.film.embed.fallbackUrl}
          fallbackLabel={c.film.embed.fallbackLabel}
        />
      </CaseSection>

      <CaseSection eyebrow={c.authorship.eyebrow} title={c.authorship.title}>
        {c.authorship.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.structure.eyebrow} title={c.structure.title}>
        {c.structure.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <EvidenceFigure
          src={c.structure.figure.src}
          alt={c.structure.figure.alt}
          caption={c.structure.figure.caption}
          tag={c.structure.figure.tag}
          href={c.structure.figure.href}
        />
      </CaseSection>

      <CaseSection eyebrow={c.production.eyebrow} title={c.production.title}>
        {c.production.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.recognition.eyebrow} title={c.recognition.title}>
        {c.recognition.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MediaPair>
          <EvidenceFigure
            src={c.recognition.creditsFigure.src}
            alt={c.recognition.creditsFigure.alt}
            caption={c.recognition.creditsFigure.caption}
            tag={c.recognition.creditsFigure.tag}
          />
          <EvidenceFigure
            src={c.recognition.awardFigure.src}
            alt={c.recognition.awardFigure.alt}
            caption={c.recognition.awardFigure.caption}
            tag={c.recognition.awardFigure.tag}
          />
        </MediaPair>
        <OwnershipNote label={c.recognition.note.label}>{inline(c.recognition.note.body)}</OwnershipNote>
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

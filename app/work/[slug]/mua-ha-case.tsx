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
  ResponsiveEmbed,
} from "./feature-case-primitives";

export function MuaHaCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        title={c.hero.title}
        image={c.hero.image}
        imageHref={c.hero.imageHref}
        imageFit="cover"
        strip={c.hero.strip}
        hideType
      />

      <CaseTension>{project.tension}</CaseTension>

      <CaseSection eyebrow={c.film.eyebrow} title={c.film.title}>
        {c.film.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <ResponsiveEmbed
          title={c.film.embed.title}
          src={c.film.embed.src}
          fallbackUrl={c.film.embed.fallbackUrl}
          fallbackLabel={c.film.embed.fallbackLabel}
          extraLinks={c.film.embed.extraLinks}
        />
      </CaseSection>

      <CaseSection eyebrow={c.authorship.eyebrow} title={c.authorship.title}>
        {c.authorship.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection title={c.script.title}>
        {c.script.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MediaPair>
          <ResponsiveEmbed
            inPair
            title={c.script.embed.title}
            src={c.script.embed.src}
            fallbackUrl={c.script.embed.fallbackUrl}
            fallbackLabel={c.script.embed.fallbackLabel}
            aspect="1 / 1.3"
          />
          <div className="p02-evidence-stack">
            <EvidenceFigure
              src={c.script.creditsFigure.src}
              alt={c.script.creditsFigure.alt}
              caption={c.script.creditsFigure.caption}
              tag={c.script.creditsFigure.tag}
            />
            <EvidenceFigure
              src={c.script.awardFigure.src}
              alt={c.script.awardFigure.alt}
              caption={c.script.awardFigure.caption}
              tag={c.script.awardFigure.tag}
            />
            {c.script.cameoFigure ? (
              <EvidenceFigure
                src={c.script.cameoFigure.src}
                alt={c.script.cameoFigure.alt}
                caption={c.script.cameoFigure.caption}
                tag={c.script.cameoFigure.tag}
              />
            ) : null}
          </div>
        </MediaPair>
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

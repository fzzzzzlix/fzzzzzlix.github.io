import type { Project } from "../../data";
import type { Locale } from "../../i18n";
import { inline } from "../../content/render-inline";
import { getCrisisResponse } from "../../content/cases/crisis-response";
import {
  Card,
  Cards,
  CaseArticle,
  CaseHero,
  CaseNav,
  CaseSection,
  CaseTension,
  EvidenceFigure,
  EvidencePanel,
  Lede,
  OwnershipNote,
  ResponsiveEmbed,
} from "./feature-case-primitives";

export function CrisisResponseCase({ project, previous, next, locale }: { project: Project; previous: Project; next: Project; locale: Locale }) {
  const c = getCrisisResponse(locale);
  return (
    <CaseArticle>
      <CaseHero
        locale={locale}
        project={project}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        descriptor={c.hero.descriptor}
        image={c.hero.image}
        imageFit="cover"
        strip={c.hero.strip}
        hideYear
        hideType
      />

      <CaseTension locale={locale}>{project.tension}</CaseTension>

      <CaseSection eyebrow={c.framing.eyebrow} title={c.framing.title}>
        {c.framing.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.boundary.eyebrow} title={c.boundary.title}>
        <Cards>
          <Card tag={c.boundary.realCard.tag} title={c.boundary.realCard.title}>
            <ul>{c.boundary.realCard.items.map((li, i) => <li key={i}>{inline(li)}</li>)}</ul>
          </Card>
          <Card tag={c.boundary.simulationCard.tag} title={c.boundary.simulationCard.title}>
            <ul>{c.boundary.simulationCard.items.map((li, i) => <li key={i}>{inline(li)}</li>)}</ul>
          </Card>
        </Cards>
        <OwnershipNote label={c.boundary.note.label}>{inline(c.boundary.note.body)}</OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow={c.contribution.eyebrow} title={c.contribution.title}>
        {c.contribution.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <OwnershipNote label={c.contribution.note.label}>{inline(c.contribution.note.body)}</OwnershipNote>
        <ResponsiveEmbed
          title={c.contribution.embed.title}
          src={c.contribution.embed.src}
          fallbackUrl={c.contribution.embed.fallbackUrl}
          fallbackLabel={c.contribution.embed.fallbackLabel}
          aspect="4 / 3"
          maxHeight="75vh"
        />
      </CaseSection>

      <CaseSection eyebrow={c.close.eyebrow} title={c.close.title}>
        {c.close.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <EvidenceFigure
          src={c.close.figure.src}
          alt={c.close.figure.alt}
          caption={c.close.figure.caption}
          tag={c.close.figure.tag}
        />
        <ResponsiveEmbed
          title={c.close.embed.title}
          src={c.close.embed.src}
          fallbackUrl={c.close.embed.fallbackUrl}
          fallbackLabel={c.close.embed.fallbackLabel}
        />
        <EvidencePanel locale={locale} links={c.close.links}>
          {project.evidence}
        </EvidencePanel>
      </CaseSection>

      <CaseNav previous={previous} next={next} locale={locale} />
    </CaseArticle>
  );
}

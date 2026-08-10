import type { Project } from "../../data";
import { inline } from "../../content/render-inline";
import { crisisResponse as c } from "../../content/cases/crisis-response";
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

export function CrisisResponseCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        descriptor={c.hero.descriptor}
        strip={c.hero.strip}
      />

      <CaseTension>{project.tension}</CaseTension>

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
        <EvidenceFigure
          src={c.contribution.figure.src}
          alt={c.contribution.figure.alt}
          caption={c.contribution.figure.caption}
          tag={c.contribution.figure.tag}
          href={c.contribution.figure.href}
        />
        <OwnershipNote label={c.contribution.note.label}>{inline(c.contribution.note.body)}</OwnershipNote>
        <ResponsiveEmbed
          title={c.contribution.embed.title}
          src={c.contribution.embed.src}
          fallbackUrl={c.contribution.embed.fallbackUrl}
          fallbackLabel={c.contribution.embed.fallbackLabel}
          portrait
        />
      </CaseSection>

      <CaseSection eyebrow={c.responseArc.eyebrow} title={c.responseArc.title}>
        {c.responseArc.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <Card tag={c.responseArc.card.tag} title={c.responseArc.card.title}>
          <ul>{c.responseArc.card.items.map((li, i) => <li key={i}>{inline(li)}</li>)}</ul>
        </Card>
        {c.responseArc.bodyAfter.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.preparedness.eyebrow} title={c.preparedness.title}>
        {c.preparedness.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <Cards>
          <Card tag={c.preparedness.componentsCard.tag} title={c.preparedness.componentsCard.title}>
            <ul>{c.preparedness.componentsCard.items.map((li, i) => <li key={i}>{inline(li)}</li>)}</ul>
          </Card>
          <Card tag={c.preparedness.ownershipCard.tag} title={c.preparedness.ownershipCard.title}>
            <ul>{c.preparedness.ownershipCard.items.map((li, i) => <li key={i}>{inline(li)}</li>)}</ul>
          </Card>
        </Cards>
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

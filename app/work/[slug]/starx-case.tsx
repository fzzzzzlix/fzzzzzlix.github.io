import type { Project } from "../../data";
import { inline } from "../../content/render-inline";
import { starx as c } from "../../content/cases/starx";
import {
  BarList,
  CaseArticle,
  CaseHero,
  CaseList,
  CaseNav,
  CaseSection,
  CaseTable,
  CaseTension,
  Card,
  Cards,
  ChipRow,
  EvidenceFigure,
  Lede,
  MediaPair,
  ResponsiveEmbed,
  StatGrid,
} from "./feature-case-primitives";

type Doc = { title: string; src: string; fallbackUrl: string; fallbackLabel: string };

/** Full documents stay closed behind their titles: the page reads without them. */
function Docs({ docs }: { docs: Doc[] }) {
  return (
    <>
      {docs.map((doc) => (
        <ResponsiveEmbed key={doc.src} portrait {...doc} />
      ))}
    </>
  );
}

export function StarXCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        image={c.hero.image}
        strip={c.hero.strip}
      />

      <CaseTension>{c.tension}</CaseTension>

      <CaseSection eyebrow={c.venture.eyebrow} title={c.venture.title}>
        {c.venture.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <ChipRow items={c.venture.owned} label={c.venture.ownedLabel} />
      </CaseSection>

      <CaseSection eyebrow={c.map01.eyebrow} title={c.map01.title}>
        <ChipRow items={c.map01.chips} label="Map 01 status" />
        {c.map01.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MediaPair>
          {c.map01.photos.map((photo) => (
            <EvidenceFigure key={photo.src} variant="photo" {...photo} />
          ))}
        </MediaPair>
        <ResponsiveEmbed referrerPolicy="strict-origin-when-cross-origin" {...c.map01.recap} />
        <Lede>{inline(c.map01.comms)}</Lede>
        <Docs docs={[c.map01.commsDoc]} />
      </CaseSection>

      <CaseSection eyebrow={c.mapping.eyebrow} title={c.mapping.title}>
        {c.mapping.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MediaPair>
          <EvidenceFigure {...c.mapping.answerKey} />
          <EvidenceFigure {...c.mapping.scoringSheet} />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow={c.survey.eyebrow} title={c.survey.title}>
        <ChipRow items={c.survey.chips} label="Survey method" />
        <StatGrid label="Player survey headline results" items={c.survey.stats} />
        <BarList items={c.survey.bars} max={5} label={c.survey.barsLabel} />
        {c.survey.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.fix.eyebrow} title={c.fix.title}>
        <Lede>{inline(c.fix.lede)}</Lede>
        <CaseTable label={c.fix.tableLabel} head={c.fix.tableHead} rows={c.fix.tableRows} />
        <Lede>{inline(c.fix.after)}</Lede>
        <Docs docs={[c.fix.report]} />
      </CaseSection>

      <CaseSection eyebrow={c.next.eyebrow} title={c.next.title}>
        <Lede>{inline(c.next.lede)}</Lede>
        <Cards>
          {c.next.cards.map((card) => (
            <Card key={card.title} tag={card.tag} title={card.title}>
              <p>{inline(card.text)}</p>
            </Card>
          ))}
        </Cards>
        <Docs docs={c.next.docs} />
      </CaseSection>

      <CaseSection eyebrow={c.media.eyebrow} title={c.media.title}>
        <Lede>{inline(c.media.lede)}</Lede>
        <StatGrid label="Media plan at a glance" items={c.media.stats} />
        {c.media.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <Docs docs={c.media.docs} />
      </CaseSection>

      <CaseSection eyebrow={c.brand.eyebrow} title={c.brand.title}>
        <EvidenceFigure {...c.brand.logoBoard} />
        {c.brand.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <Docs docs={c.brand.docs} />
      </CaseSection>

      <CaseSection eyebrow={c.close.eyebrow} title={c.close.title}>
        <CaseList items={c.close.lessons.map((lesson) => inline(lesson))} />
        <Lede>{inline(c.close.standing)}</Lede>
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

import Link from "next/link";
import type { Project } from "../../data";
import { inline } from "../../content/render-inline";
import { starx as c, STARX_DOCS, type StarXDocKey } from "../../content/cases/starx";
import { CV_URL, OUT_ARROW } from "../../site-shell";
import {
  BarList,
  CaseArticle,
  CaseHero,
  CaseNav,
  CaseSection,
  CaseTension,
  Card,
  Cards,
  ChipRow,
  EvidenceFigure,
  Lede,
  MediaPair,
  MoreEvidence,
  ProofLinks,
  ResponsiveEmbed,
} from "./feature-case-primitives";

/** One "See the full doc" line per chapter; the documents themselves live in the library. */
function DocLinks({ keys }: { keys: StarXDocKey[] }) {
  const links = keys.map((key) => ({ label: `${c.library.seeLabel}: ${STARX_DOCS[key].title}`, url: STARX_DOCS[key].url }));
  return <ProofLinks links={links} label="Source documents" />;
}

export function StarXCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        image={c.hero.image}
        imageAlt={c.hero.imageAlt}
        imagePosition={c.hero.imagePosition}
        strip={c.hero.strip}
      />

      <CaseTension>{c.tension}</CaseTension>

      <CaseSection eyebrow={c.role.eyebrow} title={c.role.title}>
        {c.role.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.formula.eyebrow} title={c.formula.title}>
        <Cards cols={3}>
          {c.formula.parts.map((part) => (
            <Card key={part.title} title={part.title}><p>{inline(part.text)}</p></Card>
          ))}
        </Cards>
        <Lede>{inline(c.formula.close)}</Lede>
        <DocLinks keys={c.formula.docs} />
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
        <Lede>{inline(c.map01.after)}</Lede>
        <DocLinks keys={c.map01.docs} />
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
        <ul className="p31-stats sx-break" aria-label="Player survey: overall score against the rules score">
          {c.survey.stats.map((s) => (
            <li key={s.label}><strong>{s.value}<small>{s.unit}</small></strong><span>{s.label}</span></li>
          ))}
        </ul>
        {c.survey.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <MoreEvidence label={c.survey.allScoresLabel}>
          <BarList items={c.survey.bars} max={5} label={c.survey.barsLabel} />
        </MoreEvidence>
      </CaseSection>

      <CaseSection eyebrow={c.fix.eyebrow} title={c.fix.title}>
        <Lede>{inline(c.fix.lede)}</Lede>
        <Cards>
          {c.fix.fixes.map((fix) => (
            <Card key={fix.title} title={fix.title}><p>{inline(fix.text)}</p></Card>
          ))}
        </Cards>
        <DocLinks keys={c.fix.docs} />
      </CaseSection>

      <CaseSection eyebrow={c.range.eyebrow} title={c.range.title}>
        <Lede>{inline(c.range.lede)}</Lede>
        <ul className="sx-formats">
          {c.range.formats.map((f) => (
            <li key={f.title} className="sx-format">
              <a className="sx-format-cover" href={STARX_DOCS[f.docs[0]].url} target="_blank" rel="noreferrer" aria-label={`${STARX_DOCS[f.docs[0]].title}. Opens in a new tab.`}>
                <img src={f.cover} alt="" loading="lazy" />
              </a>
              <div className="sx-format-body">
                <h3>
                  {f.gloss ? <span lang="vi">{f.title}</span> : f.title}
                  {f.gloss ? <span className="sx-gloss"> ({f.gloss})</span> : null}
                </h3>
                <p className="sx-place">{f.place}</p>
                <p>{inline(f.rule)}</p>
                <ol className="sx-ladder" aria-label={`Stage reached: ${f.tag}`}>
                  {c.range.ladder.map((step, i) => (
                    <li key={step} className={i <= f.stage ? "is-reached" : undefined} aria-current={i === f.stage ? "step" : undefined}>{step}</li>
                  ))}
                </ol>
                <p className="sx-stage">{f.tag}</p>
              </div>
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection eyebrow={c.world.eyebrow} title={c.world.title}>
        <MediaPair>
          {c.world.tiles.map((tile) => (
            <div key={tile.src}>
              <EvidenceFigure src={tile.src} alt={tile.alt} caption={tile.caption} tag={tile.tag} />
              <DocLinks keys={tile.docs} />
            </div>
          ))}
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow={c.principles.eyebrow} title={c.principles.title}>
        <Cards cols={3}>
          {c.principles.items.map((item) => (
            <Card key={item.title} title={item.title}><p>{inline(item.text)}</p></Card>
          ))}
        </Cards>
        <Lede>{inline(c.principles.close)}</Lede>
        <p className="sx-actions">
          <a className="button button-primary" href={CV_URL} target="_blank" rel="noreferrer">{c.principles.cvLabel} <span aria-hidden="true">{OUT_ARROW}</span></a>
          <Link className="button button-quiet" href="/contact">{c.principles.contactLabel}</Link>
        </p>
      </CaseSection>

      <CaseSection eyebrow={c.library.eyebrow} title={c.library.title}>
        <Lede>{inline(c.library.lede)}</Lede>
        <ul className="sx-library">
          {c.library.order.map((key) => {
            const doc: { title: string; note: string; meta: string; url: string; cover?: string } = STARX_DOCS[key];
            return (
              <li key={key}>
                <a href={doc.url} target="_blank" rel="noreferrer">
                  {doc.cover ? (
                    <span className="sx-library-cover"><img src={doc.cover} alt="" loading="lazy" /></span>
                  ) : (
                    <span className="sx-library-cover is-typographic" aria-hidden="true">{doc.meta}</span>
                  )}
                  <strong>{doc.title} <span aria-hidden="true">{OUT_ARROW}</span></strong>
                  <span>{doc.note}</span>
                  <em>{doc.meta}</em>
                </a>
              </li>
            );
          })}
        </ul>
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

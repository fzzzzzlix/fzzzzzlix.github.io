import type { Project } from "../../data";
import { inline } from "../../content/render-inline";
import { starx as c } from "../../content/cases/starx";
import {
  BarList,
  CaseArticle,
  CaseHero,
  CaseList,
  CaseNav,
  CaseQuote,
  CaseSection,
  CaseSlot,
  CaseTable,
  CaseTension,
  Card,
  Cards,
  ChipRow,
  Lede,
  ResponsiveEmbed,
  StatGrid,
  SubHead,
} from "./feature-case-primitives";

export function StarXCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        descriptor={c.hero.descriptor}
        extraMeta={c.hero.extraMeta}
        strip={c.hero.strip}
      />

      <CaseTension>{c.tension}</CaseTension>

      <CaseSection eyebrow={c.venture.eyebrow} title={c.venture.title}>
        {c.venture.standfirst.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <CaseSlot slot={c.venture.img01} />
        {c.venture.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.role.eyebrow} title={c.role.title}>
        {c.role.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.formats.eyebrow} title={c.formats.title}>
        {c.formats.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <Cards cols={3}>
          {c.formats.cards.map((card) => (
            <Card key={card.title} tag={card.tag} title={card.title}>
              <p>{inline(card.text)}</p>
            </Card>
          ))}
        </Cards>
      </CaseSection>

      <CaseSection eyebrow={c.league.eyebrow} title={c.league.title}>
        <CaseSlot slot={c.league.img02} />

        <SubHead>{c.league.rule.title}</SubHead>
        {c.league.rule.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}

        <SubHead>{c.league.scoring.title}</SubHead>
        <CaseList items={c.league.scoring.items.map((item) => inline(item))} />
        <p className="p31-note">{inline(c.league.scoring.note)}</p>

        <SubHead>{c.league.library.title}</SubHead>
        {c.league.library.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.mapping.eyebrow} title={c.mapping.title}>
        <ChipRow items={c.mapping.chips} label="Game 02 delivery context" />
        <CaseSlot slot={c.mapping.img03} />
        {c.mapping.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.map01.eyebrow} title={c.map01.title}>
        <ChipRow items={c.map01.chips} label="Map 01 status" />
        <CaseSlot slot={c.map01.img04} />
        <StatGrid label="Map 01 delivery at a glance" items={c.map01.stats} />

        <SubHead>{c.map01.recap.title}</SubHead>
        <ResponsiveEmbed
          title={c.map01.recap.embedTitle}
          src={c.map01.recap.embedSrc}
          allow={c.map01.recap.embedAllow}
          referrerPolicy="strict-origin-when-cross-origin"
          fallbackUrl={c.map01.recap.fallbackUrl}
          fallbackLabel={c.map01.recap.fallbackLabel}
        />
        <p className="p31-hero-caption">{inline(c.map01.recap.caption)}</p>

        <SubHead>{c.map01.plan.title}</SubHead>
        {c.map01.plan.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}

        <SubHead>{c.map01.changed.title}</SubHead>
        {c.map01.changed.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <CaseSlot slot={c.map01.img05} />
      </CaseSection>

      <CaseSection eyebrow={c.survey.eyebrow} title={c.survey.title}>
        <ChipRow items={c.survey.chips} label="Survey method" />
        <StatGrid label="Player survey headline results" items={c.survey.headline} />

        <SubHead>{c.survey.barsTitle}</SubHead>
        <BarList items={c.survey.bars} max={5} label={c.survey.barsLabel} />

        {c.survey.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.map02.eyebrow} title={c.map02.title}>
        <ChipRow items={c.map02.chips} label="Map 02 status" />
        <CaseSlot slot={c.map02.img06} />
        {c.map02.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <CaseList ordered items={c.map02.questions.map((q) => inline(q))} />
        {c.map02.afterQuestions.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}

        <SubHead>{c.map02.alternative.title}</SubHead>
        {c.map02.alternative.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.vibeMechanic.eyebrow} title={c.vibeMechanic.title}>
        <ChipRow items={c.vibeMechanic.chips} label="Sunday We Vibe status" />
        <CaseSlot slot={c.vibeMechanic.img07} />
        <CaseQuote>{c.vibeMechanic.quote}</CaseQuote>

        <SubHead>{c.vibeMechanic.stepsTitle}</SubHead>
        <CaseList ordered items={c.vibeMechanic.steps.map((step) => inline(step))} />

        {c.vibeMechanic.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.vibeScript.eyebrow} title={c.vibeScript.title}>
        <CaseSlot slot={c.vibeScript.img08} />
        {c.vibeScript.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <CaseTable
          caption={c.vibeScript.tableCaption}
          label={c.vibeScript.tableLabel}
          head={c.vibeScript.tableHead}
          rows={c.vibeScript.tableRows}
        />
        {c.vibeScript.quotes.map((quote) => (
          <CaseQuote key={quote.cite} cite={quote.cite}>{quote.text}</CaseQuote>
        ))}
        {c.vibeScript.closing.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.maskedNight.eyebrow} title={c.maskedNight.title}>
        <ChipRow items={c.maskedNight.chips} label="Đêm Tiệc Mặt Nạ status" />
        <CaseSlot slot={c.maskedNight.img09} />
        {c.maskedNight.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}

        <SubHead>{c.maskedNight.lawsTitle}</SubHead>
        <CaseList ordered items={c.maskedNight.laws.map((law) => inline(law))} />

        <CaseQuote cite={c.maskedNight.quote.cite}>{c.maskedNight.quote.text}</CaseQuote>
        {c.maskedNight.closing.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.brand.eyebrow} title={c.brand.title}>
        <ChipRow items={c.brand.chips} label="Brand status" />
        <CaseSlot slot={c.brand.img10} />
        {c.brand.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <CaseSlot slot={c.brand.img11} />
      </CaseSection>

      <CaseSection eyebrow={c.status.eyebrow} title={c.status.title}>
        <CaseTable
          label={c.status.tableLabel}
          head={c.status.tableHead}
          rows={c.status.tableRows}
        />
      </CaseSection>

      <CaseSection eyebrow={c.standing.eyebrow} title={c.standing.title}>
        {c.standing.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseSection eyebrow={c.differently.eyebrow} title={c.differently.title}>
        {c.differently.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

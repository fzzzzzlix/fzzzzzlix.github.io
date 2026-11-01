import type { Project } from "../../data";
import { inline } from "../../content/render-inline";
import { starx as c } from "../../content/cases/starx";
import {
  CaseArticle,
  CaseFold,
  CaseFolds,
  CaseHero,
  CaseList,
  CaseNav,
  CaseSection,
  CaseTension,
  Card,
  ChipRow,
  EvidenceFigure,
  FoldPart,
  Lede,
  LineFold,
  MediaPair,
  ResponsiveEmbed,
  SplitRow,
  StatGrid,
} from "./feature-case-primitives";

type Doc = {
  title: string;
  src: string;
  fallbackUrl: string;
  fallbackLabel: string;
  layout: "landscape" | "portrait";
  open?: boolean;
};

/** A document embed: landscape (16:9) or portrait (3:4), sized to fit one screen. */
function DocEmbed({ doc }: { doc: Doc }) {
  const { layout, open, ...rest } = doc;
  return <ResponsiveEmbed {...rest} portrait={layout === "portrait"} defaultOpen={open} fit />;
}

function Docs({ docs }: { docs: Doc[] }) {
  return (
    <>
      {docs.map((doc) => (
        <DocEmbed key={doc.src} doc={doc} />
      ))}
    </>
  );
}

/** Columns that give each image a share equal to its aspect ratio, so the row has one height. */
const ratioColumns = (photos: { ratio: string }[]) =>
  photos
    .map((p) => {
      const [w, h] = p.ratio.split("/").map((n) => Number(n.trim()));
      return `${(w / h).toFixed(3)}fr`;
    })
    .join(" ");

export function StarXCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  const m = c.map01;
  const f = c.formats;
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

      <CaseSection eyebrow={c.intro.eyebrow} title={c.intro.title}>
        {c.intro.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
        <ChipRow items={c.intro.owned} label={c.intro.ownedLabel} />
      </CaseSection>

      <CaseFolds>
        {/* Fold 1: Map 01, the planning side */}
        <CaseFold id={m.id} title={m.title} kicker={m.kicker} thumb={m.thumb}>
          <ChipRow items={m.chips} label="Map 01 status" />
          <Lede>{inline(m.intro)}</Lede>

          <FoldPart title={m.plan.title}>
            {m.plan.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
            <StatGrid label="Media plan at a glance" items={m.plan.stats} />
            <Docs docs={m.plan.docs} />
          </FoldPart>

          <FoldPart title={m.event.title}>
            {m.event.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
            <MediaPair aligned>
              {m.event.photos.map((photo) => (
                <EvidenceFigure key={photo.src} variant="photo" {...photo} />
              ))}
            </MediaPair>
            <MediaPair aligned columns={ratioColumns(m.event.gamePhotos)}>
              {m.event.gamePhotos.map((photo) => (
                <EvidenceFigure key={photo.src} variant="photo" {...photo} />
              ))}
            </MediaPair>
            <ResponsiveEmbed referrerPolicy="strict-origin-when-cross-origin" fit {...m.event.recap} />
            <Lede>{inline(m.event.comms)}</Lede>
            <DocEmbed doc={m.event.commsDoc} />
          </FoldPart>

          <FoldPart title={m.outcome.title}>
            <SplitRow media={<DocEmbed doc={m.outcome.report} />}>
              <ChipRow items={m.outcome.chips} label="Survey method" />
              <StatGrid label="Player survey headline results" items={m.outcome.stats} />
              {m.outcome.body.map((p, i) => <Lede key={i}>{inline(p)}</Lede>)}
            </SplitRow>
          </FoldPart>
        </CaseFold>

        {/* Fold 2: the formats, the creative side */}
        <CaseFold id={f.id} title={f.title} kicker={f.kicker} thumb={f.thumb}>
          <Lede>{inline(f.intro)}</Lede>
          {f.lines.map((line) => (
            <LineFold key={line.id} id={line.id} name={line.name} line={line.line} color={line.color} logo={line.logo}>
              {line.items.map((item) => (
                <SplitRow key={item.title} media={<Docs docs={item.docs} />}>
                  <Card tag={item.tag} title={item.title}>
                    <p>{inline(item.text)}</p>
                  </Card>
                </SplitRow>
              ))}
            </LineFold>
          ))}
        </CaseFold>
      </CaseFolds>

      <CaseSection eyebrow={c.brand.eyebrow} title={c.brand.title}>
        <Lede>{inline(c.brand.body)}</Lede>
        <DocEmbed doc={c.brand.guidelines} />
        <MediaPair aligned>
          <EvidenceFigure variant="photo" {...c.brand.logoBoard} />
          <ResponsiveEmbed {...c.brand.figma} open inPair />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow={c.close.eyebrow} title={c.close.title}>
        <CaseList items={c.close.lessons.map((lesson) => inline(lesson))} />
        <Lede>{inline(c.close.standing)}</Lede>
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

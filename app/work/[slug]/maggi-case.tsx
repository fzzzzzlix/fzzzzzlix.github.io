import type { Project } from "../../data";
import { asset } from "../../base-path";
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
  StatGrid,
} from "./feature-case-primitives";

const HERO = asset("/images/p13-maggi.jpg");
const COMMENT_THEMES = asset("/images/cases/p13/p13-comment-themes.png");
const SENTIMENT = asset("/images/cases/p13/p13-sentiment-volume.png");
const FRAMEWORK = asset("/images/cases/p13/p13-campaign-framework.png");
const BIG_IDEA = asset("/images/cases/p13/p13-big-idea.png");
const STORYBOARD = asset("/images/cases/p13/p13-storyboard.png");

const PROPOSAL_EMBED = "https://www.canva.com/design/DAGunqNlgh8/JNnKHfJfNM_5HLCapg8JMA/view?embed";
const PROPOSAL_LINK = "https://www.canva.com/design/DAGunqNlgh8/JNnKHfJfNM_5HLCapg8JMA/view";
const RESEARCH_REPORT = "https://drive.google.com/file/d/1yUiWotDrdeJ1-MhJaZdhPNcjmvd7VJB6/view?usp=drive_link";

export function MaggiCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        title="MAGGI Recipe Solution"
        descriptor="Research to execution"
        image={HERO}
        imageFit="cover"
        strip={[
          { value: "74", label: "Facebook posts analysed" },
          { value: "755", label: "comments coded in NVivo" },
          { value: "82", label: "e-commerce reviews" },
          { value: "2", label: "phases: research → creative" },
        ]}
      />

      <CaseTension>{project.tension}</CaseTension>

      <CaseSection eyebrow="The research question" title="When awareness does not become affinity">
        <Lede>
          The question was not whether people knew MAGGI. It was why a familiar brand could still generate a weaker kind
          of conversation than competitors, and what that gap should change in the creative work.
        </Lede>
        <Lede>
          The team analysed <strong>74 Facebook posts</strong>, coded <strong>755 comments with NVivo</strong>, and
          reviewed <strong>82 e-commerce reviews</strong> from 15 top-selling MAGGI Recipe Solution products,
          moving from social signals to a strategic decision, then testing whether that decision could survive
          translation into a seasonal campaign.
        </Lede>
        <StatGrid
          label="Research method"
          items={[
            { value: "74", label: "Facebook posts analysed" },
            { value: "755", label: "comments coded (NVivo)" },
            { value: "82", label: "e-commerce reviews" },
            { value: "15", label: "top-selling products reviewed" },
          ]}
        />
      </CaseSection>

      <CaseSection eyebrow="The insight" title="Reading the language around the category">
        <Lede>
          The useful distinction was more specific than &ldquo;one brand is rational, another emotional.&rdquo; In the
          analysed material, MAGGI discussion skewed toward product attributes, price, delivery and other transactional
          concerns. Barona generated more language around ease, recipes, usage and what consumers could make, and
          achieved stronger engagement in the compared set.
        </Lede>
        <Lede>
          That shifted the problem from &ldquo;make MAGGI more visible&rdquo; to <strong>make convenience feel credible,
          useful and culturally lived rather than merely claimed</strong>. The charts are evidence; the numbers are
          stated here so the reader never has to decode tiny screenshot labels.
        </Lede>
        <MediaPair>
          <EvidenceFigure
            src={COMMENT_THEMES}
            alt="Comment-theme comparison showing MAGGI conversation skewing to product and price versus Barona's recipe and usage language."
            caption="Theme comparison: MAGGI conversation skewed transactional; Barona skewed toward recipes and usage."
            tag="Research report visual"
          />
          <EvidenceFigure
            src={SENTIMENT}
            alt="Sentiment and comment-volume chart from the MAGGI Recipe Solution analysis of 755 coded comments."
            caption="Sentiment and comment volume across the 755-comment coded set."
            tag="Research report visual"
          />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow="From evidence to direction" title="Authentic Convenience">
        <Lede>
          The research was synthesised into <strong>Authentic Convenience</strong>: a direction intended to connect ease
          with recognisable cooking behaviour rather than treat convenience as a generic functional benefit. A two-tier
          influencer approach was proposed to balance reach with more trusted, usage-led voices.
        </Lede>
        <EvidenceFigure
          src={FRAMEWORK}
          alt="MAGGI campaign framework translating the Authentic Convenience direction into a two-tier influencer approach."
          caption="The strategic framework: Authentic Convenience translated into a two-tier influencer approach."
          tag="Proposed direction"
        />
      </CaseSection>

      <CaseSection eyebrow="Creative translation" title="Turning strategy into a Tết idea">
        <Lede>
          The second phase translated the direction into a proposed Tết 2026 campaign. Felix&rsquo;s role moved from
          research and strategy into script writing and storyboard creation. The proposal and illustrated storyboard are
          evidence of continuity: the insight did not end as a slide; it shaped how a seasonal story could be structured.
        </Lede>
        <EvidenceFigure
          src={BIG_IDEA}
          alt="MAGGI Tết 2026 big-idea concept page developed from the Authentic Convenience direction."
          caption="The big idea, developed from the strategic direction for a proposed Tết 2026 campaign."
          tag="Academic proposal"
        />
        <EvidenceFigure
          src={STORYBOARD}
          alt="Illustrated storyboard for the proposed MAGGI Tết 2026 TVC, panels shown in full."
          caption="The illustrated storyboard, the strategy carried into a concrete, structured seasonal narrative."
          tag="Proposed academic campaign"
        />
        <ResponsiveEmbed
          title="MAGGI Tết 2026 campaign proposal deck"
          src={PROPOSAL_EMBED}
          fallbackUrl={PROPOSAL_LINK}
          fallbackLabel="Open the campaign proposal (Canva)"
        />
        <OwnershipNote label="Status">
          The Tết 2026 campaign is a proposed academic concept, not launched activity. No campaign launch or commercial
          performance is claimed.
        </OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow="What this demonstrates" title="Research that points to a creative decision">
        <Lede>
          The case connects an explicit research method, an interpretable consumer-language gap, a strategic direction
          and a tangible script and storyboard output, without claiming campaign launch or commercial performance
          that did not occur.
        </Lede>
        <EvidencePanel links={[{ label: "View the research report", url: RESEARCH_REPORT }]}>
          {project.evidence}
        </EvidencePanel>
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

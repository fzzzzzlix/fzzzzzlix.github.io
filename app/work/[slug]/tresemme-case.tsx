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

const HERO = asset("/images/p20-tres.jpg");
const PLATFORM_ANALYSIS = asset("/images/cases/p20/p20-platform-analysis.png");
const PLATFORM_TABLE = asset("/images/cases/p20/p20-platform-table.png");
const KOL_DIAGNOSIS = asset("/images/cases/p20/p20-kol-diagnosis.png");
const DOOH = asset("/images/cases/p20/p20-interactive-dooh.png");
const PULSING = asset("/images/cases/p20/p20-plan-pulsing.png");

const PLAN_EMBED = "https://www.canva.com/design/DAGQebAsdjM/zwy3uAUGaSUTPJ_qI9O3vg/view?embed";
const PLAN_LINK = "https://www.canva.com/design/DAGQebAsdjM/zwy3uAUGaSUTPJ_qI9O3vg/view";
const INSIGHTS_REPORT = "https://drive.google.com/file/d/13akEXftRwsaDr0BlVrLgMSywo7eybJIg/view?usp=drive_link";
const WORKBOOK = "https://drive.google.com/file/d/1kbujPsEZT0PKqxSghcEAfsbtFY27KTQR/view?usp=drive_link";

export function TresemmeCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        title="TRESemmé Vietnam"
        descriptor="Insights to media system · July 2024"
        image={HERO}
        imageFit="cover"
        strip={[
          { value: "~60k", label: "TikTok fans (analysed snapshot)" },
          { value: <>3.3<small>%</small></>, label: "TikTok post interaction rate" },
          { value: <>16<small>%</small></>, label: "TikTok follower growth" },
          { value: "VND 7.3B", label: "modelled media-plan budget" },
        ]}
      />

      <CaseTension>{project.tension}</CaseTension>

      <CaseSection eyebrow="The diagnosis" title="Strong visibility was not the same as strong connection">
        <Lede>
          TRESemmé&rsquo;s channel picture was uneven. In the analysed period, TikTok stood out at roughly{" "}
          <strong>60k fans</strong>, a <strong>3.3% post interaction rate</strong> and <strong>16% follower growth</strong>,
          while the broader Facebook, Instagram and YouTube picture was less convincing. The planning question was not
          &ldquo;how do we get more reach?&rdquo; but how to turn visibility into a coherent path from attention to
          product relevance and trust.
        </Lede>
        <Lede>
          The team used Fanpage Karma data across TRESemmé and competitors on four platforms. These are date-specific
          social metrics, not universal measures of brand health.
        </Lede>
        <MediaPair>
          <EvidenceFigure
            src={PLATFORM_ANALYSIS}
            alt="Cross-platform analysis chart comparing TRESemmé performance across TikTok, Facebook, Instagram and YouTube."
            caption="Cross-platform analysis with source axes and labels preserved."
            tag="Insights report"
          />
          <EvidenceFigure
            src={PLATFORM_TABLE}
            alt="Platform metric table listing fan counts, interaction rates and growth for TRESemmé and competitors."
            caption="The underlying platform metric table — figures also stated in text above."
            tag="Insights report"
          />
        </MediaPair>
        <OwnershipNote label="Interpretation limit">
          A useful editorial reading is that celebrity endorsement can be visible without consumers consistently
          connecting the personality back to product value. That is treated as a diagnosed disconnect and a hypothesis,
          not a proven causal claim.
        </OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow="Creator system" title="Rebuild the creator system around roles">
        <Lede>
          The proposed plan reorganised creators by what they were meant to do in the funnel &mdash; reach, credibility
          and trust &mdash; rather than treating every KOL post as the same media unit. Different platforms received
          different formats: demonstration and challenge mechanics on TikTok, review and storytelling roles elsewhere,
          and creator or stylist participation that made product use more visible.
        </Lede>
        <EvidenceFigure
          src={KOL_DIAGNOSIS}
          alt="KOL usage diagnosis mapping creators to funnel roles of reach, credibility and trust."
          caption="Creators mapped to funnel roles rather than treated as interchangeable media units."
          tag="Proposed strategy"
        />
      </CaseSection>

      <CaseSection eyebrow="Integrated plan" title="Design media as a system, not a list">
        <Lede>
          The idea <strong>&ldquo;Step up your hair game at home&rdquo;</strong> expanded into an integrated plan: UGC,
          an interactive AI DOOH concept, offline activation, creator activity and a phased, pulsing schedule that
          concentrated pressure at the moments that mattered rather than spreading spend evenly.
        </Lede>
        <MediaPair>
          <EvidenceFigure
            src={DOOH}
            alt="Interactive AI DOOH concept board for the TRESemmé media plan proposal."
            caption="The interactive AI DOOH concept — a proposal element, not executed media."
            tag="Concept (proposal)"
          />
          <EvidenceFigure
            src={PULSING}
            alt="Pulsing and phasing media calendar showing bursts of activity across the plan period."
            caption="The pulsing schedule concentrated activity in phases across the plan period."
            tag="Planning artefact"
          />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow="The budget" title="Put a number on the proposal — without pretending it was spend">
        <Lede>
          The detailed budget totals <strong>VND 7,333,618,824 inclusive of GST</strong>. This is useful planning proof:
          it shows the strategy was translated into line items and timing. It is a modelled media-plan budget, not money
          Felix managed and not a campaign that was executed.
        </Lede>
        <StatGrid
          label="Modelled media-plan budget"
          items={[
            { value: "VND 7,333,618,824", label: "modelled plan total, incl. GST" },
            { value: "4", label: "platforms diagnosed" },
            { value: "Pulsing", label: "phased schedule" },
            { value: "Proposal", label: "academic, not executed" },
          ]}
        />
        <ResponsiveEmbed
          title="TRESemmé Vietnam media plan proposal deck"
          src={PLAN_EMBED}
          fallbackUrl={PLAN_LINK}
          fallbackLabel="Open the media plan (Canva)"
        />
        <OwnershipNote label="Boundary">
          The VND 7.3B figure is a modelled proposal. Felix did not manage, spend or control this budget.
        </OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow="What this demonstrates" title="Strategic media planning from evidence to allocation">
        <Lede>
          The project combines platform diagnosis, creator-role design, format selection, activation logic, scheduling
          and a detailed modelled budget while keeping the boundary between academic proposal and real-world execution
          explicit.
        </Lede>
        <EvidencePanel
          links={[
            { label: "View the insights report", url: INSIGHTS_REPORT },
            { label: "View the media-plan workbook", url: WORKBOOK },
          ]}
        >
          {project.evidence}
        </EvidencePanel>
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

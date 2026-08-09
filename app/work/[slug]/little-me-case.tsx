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
  StatGrid,
} from "./feature-case-primitives";

const KEY_VISUAL = asset("/images/cases/p22/p22-key-visual.jpg");
const FLOOR_PLAN = asset("/images/cases/p22/p22-floor-plan.png");
const ZONE_1 = asset("/images/cases/p22/p22-zone-1.jpg");
const CALM_JAR = asset("/images/cases/p22/p22-calm-jar.jpg");
const BUDDY = asset("/images/cases/p22/p22-buddy-pickup.jpg");

export function LittleMeCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        title="Little Me"
        descriptor="RMIT Hanoi · 3–5 April 2024"
        image={KEY_VISUAL}
        imageFit="cover"
        strip={[
          { value: "316", label: "visits across three days" },
          { value: "34,588", label: "organic reach" },
          { value: <>6.96<small>%</small></>, label: "return rate (22 visits)" },
          { value: "27", label: "person team led" },
        ]}
      />

      <CaseTension>{project.tension}</CaseTension>

      <CaseSection eyebrow="The participation problem" title="Make wellbeing feel approachable">
        <Lede>
          Little Me was designed around a simple participation problem: students can need space to reflect during a
          stressful semester without wanting a formal intervention. The response was a self-paced interactive
          exhibition, more invitation than instruction, where participants moved through small activities at
          their own pace.
        </Lede>
        <Lede>
          It ran for three days, 3&ndash;5 April 2024, at the RMIT Hanoi Industry and Innovation Hub, coordinating
          RMIT&rsquo;s Diversity &amp; Inclusion Office, Wellbeing and Student Life departments, the Current Media Club and
          independent RMIT artists.
        </Lede>
      </CaseSection>

      <CaseSection eyebrow="Experience design" title="Design a journey, not just an event schedule">
        <Lede>
          The experience combined exhibition prompts and hands-on activities: Childhood Core Memories, Drawing
          Little Me, Shower Thoughts, Accept Your Differences, Calm Jar Decoration, a Supportive Booklet and Buddy
          Pick-up. The floor plan below shows that the participant journey was spatially designed, not improvised; the
          photographs that follow show how individual zones felt on the day.
        </Lede>
        <EvidenceFigure
          src={FLOOR_PLAN}
          alt="Little Me exhibition floor plan showing the routed sequence of activity zones across the venue."
          caption="The venue was routed as a sequence of activity zones, so participants moved through a designed journey."
          tag="Planning artefact"
        />
        <MediaPair>
          <EvidenceFigure
            src={ZONE_1}
            alt="Participants at the Childhood Core Memories zone of the Little Me exhibition."
            caption="Childhood Core Memories, a low-pressure entry activity that set the reflective tone."
            tag="Event photo"
            variant="photo"
            ratio="4 / 3"
          />
          <EvidenceFigure
            src={CALM_JAR}
            alt="A participant decorating a jar at the Calm Jar activity."
            caption="Calm Jar Decoration, a hands-on activity participants completed at their own pace."
            tag="Event photo"
            variant="photo"
            ratio="4 / 3"
          />
        </MediaPair>
        <EvidenceFigure
          src={BUDDY}
          alt="Participants at the Buddy Pick-up activity of the Little Me exhibition."
          caption="Buddy Pick-up closed the journey by connecting participants rather than leaving them to exit alone."
          tag="Event photo"
          variant="photo"
          ratio="16 / 9"
        />
      </CaseSection>

      <CaseSection eyebrow="Operational leadership" title="Lead the system behind the experience">
        <Lede>
          As Head Organiser, Felix led the operating system behind the exhibition rather than authoring every
          activation. A participant-facing experience depended on back-end work: task allocation across a 27-person
          team, paperwork and approvals, partner coordination, cross-platform promotion and event-day delivery.
        </Lede>
        <Lede>
          The strongest management story is that the calm, self-paced surface only worked because the coordination
          underneath it was planned and delegated.
        </Lede>
      </CaseSection>

      <CaseSection eyebrow="Results against the plan" title="Measured against explicit KPIs">
        <Lede>
          The event report records <strong>316 visits</strong> across three days: 97 on Day 1, 115 on Day 2 and 104
          on Day 3, with <strong>22 return visits (6.96%)</strong> and <strong>34,588 organic reach</strong> across
          Facebook, Instagram and TikTok. Both stated KPIs, 300+ visits and 15,000+ organic reach, were exceeded by the
          end of the event.
        </Lede>
        <StatGrid
          label="Little Me event results"
          items={[
            { value: "316", label: "total visits (97 / 115 / 104)" },
            { value: "34,588", label: "organic reach, three platforms" },
            { value: "22", label: "return visits (6.96%)" },
            { value: "2×+", label: "the 15,000+ reach KPI" },
          ]}
        />
        <StatGrid
          label="Organic reach by platform"
          items={[
            { value: "23,900+", label: "Facebook reach" },
            { value: "7,467", label: "TikTok reach" },
            { value: "3,221", label: "Instagram reach" },
            { value: "300+", label: "visit KPI, met by event close" },
          ]}
        />
        <OwnershipNote label="Evidence boundary">
          Attendance and reach figures come from the event&rsquo;s own reporting. The 300+ visit KPI was reached by the
          close of the three-day event, not on Day 2, after two days the total was 212. Any fundraising total is
          omitted here because the supplied event report does not evidence it.
        </OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow="What this demonstrates" title="Experience design plus operational leadership">
        <Lede>
          Little Me shows how Felix can turn a sensitive communication objective into a participatory format, coordinate
          a large student team, and evaluate delivery against explicit attendance and communication KPIs, stating
          the result and the limitation with equal precision.
        </Lede>
        <EvidencePanel>{project.evidence}</EvidencePanel>
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

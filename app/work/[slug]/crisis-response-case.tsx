import type { Project } from "../../data";
import { asset } from "../../base-path";
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

const PRESS_RELEASE = asset("/images/cases/p32/p32-press-release-p1.png");

const PRESS_RELEASE_EMBED = "https://www.canva.com/design/DAHRwrlA2dU/GSf4MGzwwDCEWEIN42EnXQ/view?embed";
const PRESS_RELEASE_LINK = "https://www.canva.com/design/DAHRwrlA2dU/GSf4MGzwwDCEWEIN42EnXQ/view";
const TEAM_PLAN_LINK = "https://www.canva.com/design/DAGknih3bqQ/0O8yT2ornhGD_OLQlX88DA/view";
const VTV = "https://vtv.vn/xa-hoi/dai-hoc-bach-khoa-ha-noi-dung-hop-dong-voi-don-vi-cung-cap-suat-an-sau-phan-anh-cua-vtv-20241008070959807.htm";

export function CrisisResponseCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        eyebrow="Specialist case"
        title="HUST Food-Safety Crisis Response"
        descriptor="PR & Crisis Communication"
        strip={[
          { value: "2024", label: "real incident (context only)" },
          { value: "2025", label: "academic simulation" },
          { value: "Press release", label: "Felix-authored artefact" },
          { value: "Team", label: "wider media-kit context" },
        ]}
      />

      <CaseTension>{project.tension}</CaseTension>

      <CaseSection eyebrow="Framing" title="Communicate accountability when trust is already under pressure">
        <Lede>
          This academic capstone for Issues, Risk &amp; Crisis Communication used a real 2024 food-safety controversy
          involving Hanoi University of Science and Technology as the trigger for a crisis-response simulation. It is not
          HUST client work, and Felix did not represent the university.
        </Lede>
        <Lede>
          The professional problem was still realistic: when student safety, institutional accountability and media
          scrutiny collide, what can an organisation say credibly, and what must it be prepared to answer next?
        </Lede>
      </CaseSection>

      <CaseSection eyebrow="Keep the boundary clean" title="Separate the incident from the response scenario">
        <Cards>
          <Card tag="Verified, 2024" title="The real incident">
            <ul>
              <li>A 2024 food-safety controversy concerning meals served in a HUST programme.</li>
              <li>VTV reported the university ended its meal-provider contract after the controversy.</li>
              <li>Established here only as the historical trigger, linked to public reporting.</li>
            </ul>
          </Card>
          <Card tag="Simulation, 2025" title="The academic response">
            <ul>
              <li>A 2025 classroom simulation built on that trigger.</li>
              <li>Felix&rsquo;s assigned simulation role was Communication Manager.</li>
              <li>All response actions below are proposed simulation material, not historical events.</li>
            </ul>
          </Card>
        </Cards>
        <OwnershipNote label="Why this split matters">
          Keeping verified 2024 history separate from the 2025 simulation prevents proposed crisis actions from being
          mistaken for real institutional decisions, and keeps the case ethically clean.
        </OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow="Direct contribution" title="The press release Felix authored">
        <Lede>
          Felix&rsquo;s directly attributable artefact is the press release, written in the assigned simulation role of
          Communication Manager. It attempts several functions at once: acknowledge seriousness, communicate corrective
          action, establish a sequence of institutional response, and give journalists a usable official-style
          statement. The evidence here is the actual writing, not a dramatic crisis graphic.
        </Lede>
        <EvidenceFigure
          src={PRESS_RELEASE}
          alt="First page of the simulation press release authored by Felix Phan for the 2025 HUST food-safety crisis-communication capstone."
          caption="2025 academic simulation artefact, the Felix-authored press release, shown uncropped. Not a real HUST communication."
          tag="Team simulation · Felix-authored"
          href={PRESS_RELEASE_LINK}
        />
        <OwnershipNote label="What this is, and is not">
          This is a 2025 academic simulation document authored by Felix in an assigned role. It is not a genuine HUST
          press release, and Felix was never employed by or an official spokesperson for HUST.
        </OwnershipNote>
        <ResponsiveEmbed
          title="Felix-authored simulation press release"
          src={PRESS_RELEASE_EMBED}
          fallbackUrl={PRESS_RELEASE_LINK}
          fallbackLabel="Open the press release (Canva)"
          portrait
        />
      </CaseSection>

      <CaseSection eyebrow="The response arc" title="Crisis communication is an information system">
        <Lede>
          A crisis statement works only inside a wider preparedness system. The release was designed to move through a
          deliberate arc rather than simply express regret.
        </Lede>
        <Card tag="Response arc" title="From acknowledgement to rebuilt confidence">
          <ul>
            <li>Acknowledge the seriousness of the situation.</li>
            <li>Establish the verified facts.</li>
            <li>Prioritise affected students.</li>
            <li>Explain concrete corrective action.</li>
            <li>Prepare for media and stakeholder scrutiny.</li>
            <li>Rebuild institutional confidence.</li>
          </ul>
        </Card>
        <Lede>
          The wider team package included a backgrounder, fact sheet, FAQ, media contacts and press-conference planning.
          These are shown only as <strong>team context</strong>, the environment the press release had to work
          within, and are not attributed to Felix.
        </Lede>
      </CaseSection>

      <CaseSection eyebrow="Preparedness, not just a statement" title="A statement is not enough if the next question can&rsquo;t be answered">
        <Lede>
          The team FAQ and media-kit structure illustrate a core communications principle: a crisis statement fails if
          spokespeople cannot answer the follow-up. The scale of the team package, not any single graphic,
          is the point.
        </Lede>
        <Cards>
          <Card tag="Team simulation material" title="Media-kit components">
            <ul>
              <li>Backgrounder and fact sheet</li>
              <li>Frequently asked questions</li>
              <li>Media contacts</li>
              <li>Press-conference planning</li>
            </ul>
          </Card>
          <Card tag="Ownership boundary" title="Attributed carefully">
            <ul>
              <li>Felix-authored: the press release only.</li>
              <li>Team context: every other component above.</li>
              <li>Some team artefacts use a fictional &ldquo;Dr. Felix Phan&rdquo; label, not a real credential, and not shown here.</li>
            </ul>
          </Card>
        </Cards>
      </CaseSection>

      <CaseSection eyebrow="What this demonstrates" title="Professional crisis writing under accountability constraints">
        <Lede>
          The case adds a distinct PR capability to the portfolio: translating an issue into institutional language that
          must be clear, defensible and usable under media scrutiny, while maintaining strict boundaries between
          verified history, simulation and individual ownership.
        </Lede>
        <EvidencePanel
          links={[
            { label: "Real 2024 incident context (VTV)", url: VTV },
            { label: "Felix-authored press release (Canva)", url: PRESS_RELEASE_LINK },
            { label: "Team crisis plan, team simulation material", url: TEAM_PLAN_LINK },
          ]}
        >
          {project.evidence}
        </EvidencePanel>
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

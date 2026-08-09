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

const KEY_VISUAL = asset("/images/cases/p25/p25-key-visual.jpg");
const CANVAS = asset("/images/cases/p25/p25-business-model-canvas.png");
const EVENT = asset("/images/cases/p25/p25-event.jpg");
const ONEPAGER_1 = asset("/images/cases/p25/p25-onepager-1.png");
const ONEPAGER_2 = asset("/images/cases/p25/p25-onepager-2.png");

const WEBINAR_EMBED = "https://www.canva.com/design/DAGQH9iFMLE/BzFW4O3EQjnu0RhwIIbFtQ/view?embed";
const WEBINAR_LINK = "https://www.canva.com/design/DAGQH9iFMLE/BzFW4O3EQjnu0RhwIIbFtQ/view";
const TEMPLATE_EN_EMBED = "https://www.canva.com/design/DAGNHbeWmWc/_IW5gH1vwxOAEwPKJtrD9g/view?embed";
const TEMPLATE_EN_LINK = "https://www.canva.com/design/DAGNHbeWmWc/_IW5gH1vwxOAEwPKJtrD9g/view";
const TEMPLATE_VI_EMBED = "https://www.canva.com/design/DAGNHv7bktw/XcdKrfRZemdSuXr9Pbbqug/view?embed";
const TEMPLATE_VI_LINK = "https://www.canva.com/design/DAGNHv7bktw/XcdKrfRZemdSuXr9Pbbqug/view";

const FB = "https://www.facebook.com/empacts.org";
const LINKEDIN = "https://www.linkedin.com/company/empacts/";
const VP_POST = "https://www.facebook.com/share/18CD5aHyQN/";

export function EmpactsCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        title="EMPACTS"
        descriptor="May–December 2024"
        image={KEY_VISUAL}
        imageFit="cover"
        strip={[
          { value: "54", label: "members" },
          { value: "6", label: "departments" },
          { value: "21", label: "defined roles" },
          { value: "40+", label: "SOPs" },
        ]}
      />

      <CaseTension>{project.tension}</CaseTension>

      <CaseSection eyebrow="The verified role" title="Build the organisation, not only the idea">
        <Lede>
          EMPACTS began with an ambitious premise: create a youth-led ecosystem around SDG-focused social enterprise and
          entrepreneurship. The portfolio value is not the ambition alone, it is how the organisation was
          translated into roles, systems, templates, routines and public programming that other people could actually
          operate.
        </Lede>
        <Lede>
          The supplied proposal identifies Felix as <strong>Co-founder and Vice-President</strong>. Project records
          describe a 54-member organisation spanning six departments, 21 roles and 40+ SOPs.
        </Lede>
        <OwnershipNote label="Figure basis">
          The 54 members, six departments, 21 roles and 40+ SOPs are owner-confirmed organisational-scale indicators,
          not externally audited metrics. The case emphasises systems thinking; it does not claim Felix personally
          authored every internal document.
        </OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow="From concept to operating model" title="Turn an idea into artefacts people can run">
        <Lede>
          The business model canvas below shows the initial structuring work, how the venture was framed before it
          became an operating organisation. It then shifts from ideas to operational artefacts: bilingual general
          presentation templates that made consistency a designed property of how EMPACTS communicated.
        </Lede>
        <EvidenceFigure
          src={CANVAS}
          alt="EMPACTS business model canvas laying out value proposition, partners, activities, channels and cost structure."
          caption="The business model canvas framed the venture before it became an operating organisation."
          tag="Early system artefact"
        />
        <p className="p31-lede" style={{ marginTop: 42 }}>
          The English and Vietnamese general templates are small but concrete SOP evidence: a shared visual system so
          that anyone in the organisation could present consistently.
        </p>
        <MediaPair>
          <ResponsiveEmbed
            title="EMPACTS general presentation template, English"
            src={TEMPLATE_EN_EMBED}
            fallbackUrl={TEMPLATE_EN_LINK}
            fallbackLabel="Open English template"
            inPair
          />
          <ResponsiveEmbed
            title="EMPACTS general presentation template, Vietnamese"
            src={TEMPLATE_VI_EMBED}
            fallbackUrl={TEMPLATE_VI_LINK}
            fallbackLabel="Open Vietnamese template"
            inPair
          />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow="Public programming" title="Make the system visible through real delivery">
        <Lede>
          The public webinar <em>&ldquo;X&acirc;y Dựng Thương Hiệu Cho Startup Ph&aacute;t Triển Bền Vững&rdquo;</em>{" "}
          bridges internal operating architecture to outward delivery. Paired with the event photograph, it makes a
          simple point: the systems were not only paperwork; they supported programmes that reached an external
          audience.
        </Lede>
        <MediaPair>
          <ResponsiveEmbed
            title="EMPACTS public webinar presentation"
            src={WEBINAR_EMBED}
            fallbackUrl={WEBINAR_LINK}
            fallbackLabel="Open the webinar deck"
            inPair
          />
          <EvidenceFigure
            src={EVENT}
            alt="Photograph from an EMPACTS public webinar on brand-building for sustainable startups."
            caption="The webinar reached an external audience, evidence that the operating system supported public programming."
            tag="Event photo"
            variant="photo"
            ratio="16 / 9"
          />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow="Information discipline" title="Confidentiality is part of professional practice">
        <Lede>
          Some of EMPACTS&rsquo; strongest internal planning material is explicitly classified confidential. That
          limitation is not solved by publishing it. Detailed organisational documentation exists but is withheld; the
          capability is proven instead through public-safe templates, one-pagers and programme evidence. That decision
          itself signals information discipline.
        </Lede>
        <MediaPair>
          <EvidenceFigure
            src={ONEPAGER_1}
            alt="EMPACTS public one-pager describing the organisation and its programmes."
            caption="Public-safe organisation one-pager used for outreach."
            tag="Public context"
          />
          <EvidenceFigure
            src={ONEPAGER_2}
            alt="Second EMPACTS public one-pager describing programme structure."
            caption="A second public one-pager, outward-facing, not internal planning material."
            tag="Public context"
          />
        </MediaPair>
      </CaseSection>

      <CaseSection eyebrow="What this demonstrates" title="Organisation design and communication infrastructure">
        <Lede>
          EMPACTS shows Felix building beyond a single campaign: defining how a multi-department youth organisation
          coordinates work, documents standards, presents itself consistently and hands responsibility forward.
        </Lede>
        <StatGrid
          label="Organisation scale"
          items={[
            { value: "54", label: "members" },
            { value: "6", label: "departments" },
            { value: "21", label: "roles" },
            { value: "40+", label: "SOPs" },
          ]}
        />
        <EvidencePanel
          links={[
            { label: "EMPACTS on Facebook", url: FB },
            { label: "EMPACTS on LinkedIn", url: LINKEDIN },
            { label: "Vice-President introduction post", url: VP_POST },
          ]}
        >
          {project.evidence}
        </EvidencePanel>
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

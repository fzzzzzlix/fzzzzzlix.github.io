import Link from "next/link";
import type { Project } from "../../data";
import { EvidenceLabel, StarMark } from "../../site-shell";
import { asset } from "../../base-path";
import { CanvaEmbed } from "./canva-embed";

const HERO = asset("/images/p31-hero.jpg");
const WORKFLOW = asset("/images/p31-workflow.jpg");
const TRELLO = asset("/images/p31-trello.jpg");
const CHALLENGES = asset("/images/p31-challenges.jpg");
const RISK = asset("/images/p31-risk-heatmap.jpg");
const LESSONS = asset("/images/p31-lessons.jpg");
const MPP = asset("/evidence/p31/Be-Local-Project-Schedule.mpp");
const WBS = asset("/evidence/p31/Be-Local-WBS.xlsm");

const CRITERIA: [string, number][] = [
  ["Attendance", 4.71],
  ["Initiative", 4.67],
  ["Quality Contribution", 4.53],
  ["Collaboration", 4.67],
  ["Attitude", 4.65],
  ["Commitment & Reliability", 4.63],
  ["Adaptability", 4.65],
  ["Communication", 4.65],
];

const CHALLENGE_PAIRS: [string, string][] = [
  ["Poor deliverable quality", "set explicit quality requirements alongside deadlines"],
  ["Late or unclear updates", "immediate updates and proactive questioning"],
  ["Deliverables that did not line up", "map workflow and dependencies before setting durations"],
  ["Weakening coordination", "restore regular weekly update and reflection meetings"],
];

function Figure({ src, alt, caption, tag, full = false }: { src: string; alt: string; caption: string; tag: string; full?: boolean }) {
  return (
    <figure className="p31-figure">
      <a href={src} target="_blank" rel="noreferrer" aria-label={`${alt}. Opens full size in a new tab.`}>
        <img src={src} alt={alt} style={full ? { maxHeight: "none" } : undefined} loading="lazy" />
      </a>
      <figcaption><span>{caption}</span><em>{tag}</em></figcaption>
    </figure>
  );
}

export function BeLocalCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <article className="case-page feature-case p31-case">
      {/* Hero */}
      <header className="p31-hero section-shell">
        <div className="p31-hero-head">
          <p className="eyebrow"><StarMark size={18} /> Feature case</p>
          <h1>Be Local</h1>
          <p className="case-role">{project.role}</p>
          <div className="case-meta">
            <span>{project.id}</span>
            <span>{project.year}</span>
            <span>{project.publicType}</span>
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <a className="p31-hero-media" href={HERO} target="_blank" rel="noreferrer" aria-label={`${project.alt}. Opens full size in a new tab.`}>
          <img src={HERO} alt={project.alt} />
        </a>
        <ul className="p31-strip" aria-label="Fast evidence">
          <li><strong>PM</strong><span>Project Manager, seven-person team</span></li>
          <li><strong>7</strong><span>weekly peer-evaluation rounds</span></li>
          <li><strong>30</strong><span>risk register</span></li>
          <li><strong>4.65<small> /5</small></strong><span>peer-evaluation average</span></li>
        </ul>
      </header>

      {/* Tension */}
      <section className="case-tension section-shell">
        <p className="eyebrow">The tension</p>
        <h2>{project.tension}</h2>
      </section>

      {/* Verified role + workflow */}
      <section className="p31-section section-shell">
        <p className="eyebrow">The verified role</p>
        <h2>Project Manager of a seven-person team.</h2>
        <p className="p31-lede">Be Local was an academic project for Project Management Fundamentals at National Economics University (class EBBA 14.2, Team 5). Felix was the Project Manager. The team had seven members spanning finance and administration, tour experience, customer experience, logistics and operations, sales and partnerships, marketing, and project management.</p>
        <p className="p31-lede">That role meant owning the operating system, not writing every document. Felix set the workflow, held the schedule and integrated the team&rsquo;s work, while individual deliverables stayed with their named owners.</p>
        <Figure src={WORKFLOW} alt="Original Be Local workflow showing the Project Manager coordinating deliverable PICs, team members, double-review and weekly meetings." caption="Project Manager to deliverable PICs to team members, with double-review and weekly meetings across the system." tag="Presentation artefact" />
      </section>

      {/* Trello */}
      <section className="p31-section section-shell">
        <p className="eyebrow">How the work moved</p>
        <h2>A workflow on paper, and a board that proves it ran.</h2>
        <p className="p31-lede">The architecture is only credible if it actually operated. The team ran the project in Trello: weekly scheduling meetings, weekly peer evaluation, a review queue, and task-status columns from to-do through to-be-reviewed.</p>
        <Figure src={TRELLO} alt="Be Local Trello board with weekly meetings, peer evaluation, task-status columns and reviewer-allocation cards." caption="Weekly meetings, weekly peer evaluation, task-status columns and reviewer-allocation cards." tag="Operating screenshot" />
      </section>

      {/* Role boundary */}
      <section className="p31-section section-shell">
        <p className="eyebrow">Role boundary</p>
        <h2>What Felix owned, and what Felix reviewed.</h2>
        <p className="p31-lede">Ownership was distributed. Felix was the listed person-in-charge for a set of deliverables, and the cross-functional reviewer for many more.</p>
        <div className="p31-cols">
          <div className="p31-card">
            <span className="p31-tag">Directly owned as PIC</span>
            <h3>Four deliverables Felix led.</h3>
            <ul>
              <li>Project Charter</li>
              <li>Human Resources Plan</li>
              <li>Video recording of the team presentation</li>
              <li>Peer Evaluation</li>
            </ul>
          </div>
          <div className="p31-card">
            <span className="p31-tag">Reviewed and integrated</span>
            <h3>Fifteen reviewer-allocation rows.</h3>
            <ul>
              <li>Scope statement and stakeholders</li>
              <li>Project schedule (MPP) and risk</li>
              <li>Budget</li>
              <li>Market research, sales and marketing plans</li>
              <li>Final report and lessons learned</li>
            </ul>
          </div>
        </div>
        <p className="p31-note"><strong>Boundary:</strong> the final report, schedule, risk register, budget and marketing plan were owned by other team members. Felix reviewed and integrated that work rather than authoring it alone.</p>
      </section>

      {/* Two timelines */}
      <section className="p31-section section-shell">
        <p className="eyebrow">Two timelines</p>
        <h2>An academic cycle, and a venture plan.</h2>
        <p className="p31-lede">Two timelines run through this project and should not be read as one. The team&rsquo;s actual work is the course cycle. The venture schedule is a plan.</p>
        <div className="p31-cols p31-timelines">
          <div className="p31-card">
            <span className="p31-tag">The project cycle, actual</span>
            <h3>About twelve weeks of course work.</h3>
            <ul>
              <li>Deliverables from March to late April 2025</li>
              <li>Seven weekly peer-evaluation rounds</li>
              <li>The work the team actually did</li>
            </ul>
          </div>
          <div className="p31-card">
            <span className="p31-tag">The venture schedule, modelled</span>
            <h3>A planned launch horizon.</h3>
            <ul>
              <li>Planned horizon roughly March 2025 to March 2026</li>
              <li>Proposed soft launch 20 September 2025</li>
              <li>Proposed official launch 4 October 2025</li>
              <li>Planned milestones, not events that occurred</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Challenges to solutions */}
      <section className="p31-section section-shell">
        <p className="eyebrow">What broke, and what changed</p>
        <h2>Four problems the team hit, and the fixes that stuck.</h2>
        <p className="p31-lede">Reflection was built into the project. Four recurring problems were each mapped to a concrete process change.</p>
        <div className="p31-cols">
          {CHALLENGE_PAIRS.map(([problem, fix]) => (
            <div className="p31-card" key={problem}>
              <span className="p31-tag">Problem</span>
              <h3>{problem}</h3>
              <ul><li><span className="p31-tag">Fix</span> &nbsp;{fix}</li></ul>
            </div>
          ))}
        </div>
        <Figure src={CHALLENGES} alt="Four Be Local management problems mapped to process adjustments covering quality, communication, dependencies and weekly reflection." caption="Problems mapped to process adjustments: quality, communication, dependencies and weekly reflection." tag="Presentation artefact" />
      </section>

      {/* Schedule / WBS */}
      <section className="p31-section section-shell">
        <p className="eyebrow">Planning and dependencies</p>
        <h2>A 168-row plan, structured into five phases.</h2>
        <p className="p31-lede">The venture was scheduled in Microsoft Project and a WBS workbook: work packages with durations, dependencies, owners and dates, grouped into five planned phases.</p>
        <ul className="p31-stats" aria-label="Schedule structure">
          <li><strong>168</strong><span>WBS rows</span></li>
          <li><strong>5</strong><span>planned phases</span></li>
          <li><strong>.mpp</strong><span>Microsoft Project source</span></li>
          <li><strong>.xlsm</strong><span>WBS workbook source</span></li>
        </ul>
        <div className="p31-cols">
          <div className="p31-card">
            <span className="p31-tag">Five planned phases</span>
            <h3>Scope to post-launch.</h3>
            <ul>
              <li>Planning</li>
              <li>Execution</li>
              <li>Soft Launch</li>
              <li>Official Launch</li>
              <li>Post-Launch</li>
            </ul>
          </div>
          <div className="p31-card">
            <span className="p31-tag">Native source files</span>
            <h3>Open the originals.</h3>
            <div className="proof-links" aria-label="Schedule source downloads">
              <a href={MPP} download>Download Microsoft Project schedule (.mpp)</a>
              <a href={WBS} download>Open / download WBS source (.xlsm)</a>
            </div>
          </div>
        </div>
        <p className="p31-note"><strong>Ownership:</strong> the academic Master Plan names another team member as person-in-charge for the schedule and WBS deliverable, with Felix as reviewer. The plan above is the modelled venture schedule, not proof those future tasks were carried out. The same plan models total project cost at about VND 2.594 billion, a resource-planning scenario rather than managed or realised spend.</p>
      </section>

      {/* Risk */}
      <section className="p31-section section-shell">
        <p className="eyebrow">Risk and uncertainty</p>
        <h2>A 30-risk register, categorised and handled.</h2>
        <p className="p31-lede">Risk was managed as a system. Each risk was scored on likelihood and impact, then assigned a handling strategy. In the report&rsquo;s status summary, 21 risks were mitigated, 6 stayed open and 3 were mitigated but occurred.</p>
        <ul className="p31-stats" aria-label="Risk handling">
          <li><strong>30</strong><span>risks in the register</span></li>
          <li><strong>25</strong><span>controlled</span></li>
          <li><strong>4</strong><span>accepted</span></li>
          <li><strong>1</strong><span>transferred</span></li>
        </ul>
        <Figure src={RISK} alt="Be Local risk-management visual showing risk-category distribution and an impact-by-likelihood heatmap." caption="Risk-category distribution and an impact-by-likelihood heatmap." tag="Presentation artefact" />
        <ul className="p31-stats" aria-label="Risk categories">
          <li><strong>36.67<small>%</small></strong><span>Organisational</span></li>
          <li><strong>36.67<small>%</small></strong><span>Customer</span></li>
          <li><strong>23.33<small>%</small></strong><span>External</span></li>
          <li><strong>3.33<small>%</small></strong><span>Technical</span></li>
        </ul>
        <p className="p31-note"><strong>Data note:</strong> the master register holds 30 risks; a later heatmap narrative in the report discusses 27. The figure of 30 is the authoritative count. These are planned-project risks, not incidents from a running business.</p>
      </section>

      {/* Peer evaluation */}
      <section className="p31-section section-shell">
        <p className="eyebrow">How the team rated the work</p>
        <h2>Anonymous peer evaluation across seven rounds.</h2>
        <div className="p31-peer">
          <div className="p31-peer-head">
            <strong>4.65<small> /5</small></strong>
            <p>Felix&rsquo;s overall average, the highest of the seven team members in the final summary.</p>
            <div className="p31-peer-mini">
              <div><strong>4.44<small> /5</small></strong><span>Team average</span></div>
              <div><strong>7</strong><span>Rounds</span></div>
              <div><strong>8</strong><span>Criteria</span></div>
            </div>
          </div>
          <div className="p31-bars" aria-label="Felix criterion averages out of 5">
            {CRITERIA.map(([label, value]) => (
              <div className="p31-bar" key={label}>
                <div className="p31-bar-top"><span>{label}</span><b>{value.toFixed(2)}</b></div>
                <div className="p31-bar-track"><div className="p31-bar-fill" style={{ width: `${(value / 5) * 100}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
        <p className="p31-note"><strong>Source:</strong> anonymous academic-team peer evaluation, eight criteria on a five-point scale over seven weekly rounds. This is classmate evaluation, not client, employer or professional feedback. Individual classmate scores are not published.</p>
      </section>

      {/* Lessons learned */}
      <section className="p31-section section-shell">
        <p className="eyebrow">What the project taught</p>
        <h2>Ten lessons, grouped into three habits.</h2>
        <p className="p31-lede">The team formalised ten management lessons across quality and planning, tools and processes, and communication and teamwork.</p>
        <Figure src={LESSONS} alt="Be Local lessons learned grouped into quality and planning, tools and processes, and communication and teamwork." caption="Lessons grouped into quality and planning, tools and processes, and communication and teamwork." tag="Presentation artefact" />
      </section>

      {/* Original presentation embed */}
      <section className="p31-section section-shell">
        <p className="eyebrow">Original work</p>
        <h2>The full presentation.</h2>
        <p className="p31-lede">This is the original academic team presentation. Any future operating and financial figures inside it are project scenarios, and the deck carries some source and date inconsistencies. It is evidence of the work, not proof of a launched business.</p>
        <div className="p31-embed">
          <CanvaEmbed />
        </div>
        <div className="proof-links" aria-label="Presentation link">
          <a href="https://www.canva.com/design/DAGlkXNbHM4/OTW2amJs3KP1o6_sYLBelQ/view" target="_blank" rel="noreferrer">Open the presentation in a new tab</a>
        </div>
        <section className="evidence-panel" style={{ marginTop: 40 }}>
          <EvidenceLabel>Evidence and publication rule</EvidenceLabel>
          <p>{project.evidence}</p>
        </section>
      </section>

      {/* Nav */}
      <nav className="case-nav section-shell" aria-label="Project navigation">
        <Link href={`/work/${previous.slug}`}><span>Previous project</span><strong>{previous.title}</strong></Link>
        <Link href="/work"><span>Return to</span><strong>All work</strong></Link>
        <Link href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong></Link>
      </nav>
    </article>
  );
}

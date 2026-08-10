import { asset } from "../../base-path";

/*
 * P31 — Be Local case copy.
 * This case uses bespoke p31-* markup rather than the shared primitives, but all
 * of its words, captions, list items, links and image paths still live here.
 * `unit` renders as the small superscript (e.g. value "4.65" + unit " /5").
 */

const PRESENTATION_LINK = "https://www.canva.com/design/DAGlkXNbHM4/OTW2amJs3KP1o6_sYLBelQ/view";
const WORKFLOW_EMBED = "https://drive.google.com/file/d/1PGX1ehcoDUEkDPW-jKxOsqvQHqWwlYjC/preview";
const PROJECT_DOC = "https://docs.google.com/document/d/1EZs2BxIpLp-O6PrQ8ieF-OhGd_dnfK4o/edit?usp=drive_link&ouid=109182277280764745882&rtpof=true&sd=true";

export const beLocal = {
  images: {
    hero: asset("/images/p31-hero.jpg"),
    workflow: asset("/images/p31-workflow.jpg"),
    trello: asset("/images/p31-trello.jpg"),
    challenges: asset("/images/p31-challenges.jpg"),
    risk: asset("/images/p31-risk-heatmap.jpg"),
    lessons: asset("/images/p31-lessons.jpg"),
    mpp: asset("/evidence/p31/Be-Local-Project-Schedule.mpp"),
    wbs: asset("/evidence/p31/Be-Local-WBS.xlsm"),
  },
  urls: {
    workflowEmbed: WORKFLOW_EMBED,
    projectDoc: PROJECT_DOC,
    presentation: PRESENTATION_LINK,
  },
  hero: {
    eyebrow: "Feature case",
    title: "Be Local",
    strip: [
      { value: "PM", label: "Project Manager, seven-person team" },
      { value: "7", label: "weekly peer-evaluation rounds" },
      { value: "30", label: "risk register" },
      { value: "4.65", unit: " /5", label: "peer-evaluation average" },
    ],
  },
  tensionEyebrow: "The tension",
  verifiedRole: {
    eyebrow: "The verified role",
    title: "Project Manager of a seven-person team",
    body: [
      "Be Local was an academic project for Project Management Fundamentals at National Economics University (class EBBA 14.2, Team 5). Felix was the Project Manager. The team had seven members spanning finance and administration, tour experience, customer experience, logistics and operations, sales and partnerships, marketing, and project management.",
      "That role meant owning the operating system, not writing every document. Felix set the workflow, held the schedule and integrated the team’s work, while individual deliverables stayed with their named owners.",
    ],
    embedTitle: "Be Local workflow walkthrough",
    figure: {
      alt: "Original Be Local workflow showing the Project Manager coordinating deliverable PICs, team members, double-review and weekly meetings.",
      caption: "Project Manager to deliverable PICs to team members, with double-review and weekly meetings across the system.",
      tag: "Presentation artefact",
    },
  },
  trello: {
    eyebrow: "How the work moved",
    title: "A workflow on paper, and a board that proves it ran",
    body: "The architecture is only credible if it actually operated. The team ran the project in Trello: weekly scheduling meetings, weekly peer evaluation, a review queue, and task-status columns from to-do through to-be-reviewed.",
    figure: {
      alt: "Be Local Trello board with weekly meetings, peer evaluation, task-status columns and reviewer-allocation cards.",
      caption: "Weekly meetings, weekly peer evaluation, task-status columns and reviewer-allocation cards.",
      tag: "Operating screenshot",
    },
  },
  schedule: {
    eyebrow: "Planning and dependencies",
    title: "A 168-row plan, structured into five phases",
    body: "The venture was scheduled in Microsoft Project and a WBS workbook: work packages with durations, dependencies, owners and dates, grouped into five planned phases.",
    stats: [
      { value: "168", label: "WBS rows" },
      { value: "5", label: "planned phases" },
      { value: ".mpp", label: "Microsoft Project source" },
      { value: ".xlsm", label: "WBS workbook source" },
    ],
    phasesCard: {
      tag: "Five planned phases",
      title: "Scope to post-launch",
      items: ["Planning", "Execution", "Soft Launch", "Official Launch", "Post-Launch"],
    },
    sourcesCard: {
      tag: "Native source files",
      title: "Open the originals",
      links: [
        { label: "Download Microsoft Project schedule (.mpp)", key: "mpp" as const },
        { label: "Open / download WBS source (.xlsm)", key: "wbs" as const },
      ],
    },
    note: {
      strong: "Ownership:",
      text: "the academic Master Plan names another team member as person-in-charge for the schedule and WBS deliverable, with Felix as reviewer. The plan above is the modelled venture schedule, not proof those future tasks were carried out. The same plan models total project cost at about VND 2.594 billion, a resource-planning scenario rather than managed or realised spend.",
    },
  },
  risk: {
    eyebrow: "Risk and uncertainty",
    title: "A 30-risk register, categorised and handled",
    body: "Risk was managed as a system: each risk was scored on likelihood and impact, then given a response treatment. The 30-risk register can be read on two separate dimensions, current status and the treatment assigned.",
    byStatus: [
      { value: "21", label: "mitigated" },
      { value: "6", label: "still open" },
      { value: "3", label: "occurred despite mitigation" },
    ],
    byTreatment: [
      { value: "25", label: "controlled" },
      { value: "4", label: "accepted" },
      { value: "1", label: "transferred" },
    ],
    figure: {
      alt: "Be Local risk-management visual showing risk-category distribution and an impact-by-likelihood heatmap.",
      caption: "Risk-category distribution and an impact-by-likelihood heatmap.",
      tag: "Presentation artefact",
    },
    categories: [
      { value: "36.67", unit: "%", label: "Organisational" },
      { value: "36.67", unit: "%", label: "Customer" },
      { value: "23.33", unit: "%", label: "External" },
      { value: "3.33", unit: "%", label: "Technical" },
    ],
    note: {
      strong: "Data note:",
      text: "the master register holds 30 risks; a later heatmap narrative in the report discusses 27. The figure of 30 is the authoritative count. These are planned-project risks, not incidents from a running business.",
    },
  },
  taught: {
    eyebrow: "What the project taught",
    title: "The problems, the fixes, and the lessons",
    body: "Reflection was built into the project. Recurring problems were each mapped to a concrete process change, and the team formalised ten management lessons across quality and planning, tools and processes, and communication and teamwork.",
    challengesFigure: {
      alt: "Four Be Local management problems mapped to process adjustments covering quality, communication, dependencies and weekly reflection.",
      caption: "Problems mapped to process adjustments: quality, communication, dependencies and weekly reflection.",
      tag: "Project document",
    },
    lessonsFigure: {
      alt: "Be Local lessons learned grouped into quality and planning, tools and processes, and communication and teamwork.",
      caption: "Lessons grouped into quality and planning, tools and processes, and communication and teamwork.",
      tag: "Project document",
    },
  },
  presentation: {
    eyebrow: "Original work",
    title: "The full presentation",
    body: "This is the original academic team presentation. Any future operating and financial figures inside it are project scenarios, and the deck carries some source and date inconsistencies. It is evidence of the work, not proof of a launched business.",
    link: "Open the presentation in a new tab",
  },
  peer: {
    eyebrow: "How the team rated the work",
    title: "Anonymous peer evaluation across seven rounds",
    average: { value: "4.65", unit: " /5" },
    averageNote: "Felix’s overall average, the highest of the seven team members in the final summary.",
    mini: [
      { value: "4.44", unit: " /5", label: "Team average" },
      { value: "7", label: "Rounds" },
      { value: "8", label: "Criteria" },
    ],
    criteria: [
      { label: "Attendance", value: 4.71 },
      { label: "Initiative", value: 4.67 },
      { label: "Quality Contribution", value: 4.53 },
      { label: "Collaboration", value: 4.67 },
      { label: "Attitude", value: 4.65 },
      { label: "Commitment & Reliability", value: 4.63 },
      { label: "Adaptability", value: 4.65 },
      { label: "Communication", value: 4.65 },
    ],
    note: {
      strong: "Source:",
      text: "anonymous academic-team peer evaluation, eight criteria on a five-point scale over seven weekly rounds. This is classmate evaluation, not client, employer or professional feedback. Individual classmate scores are not published.",
    },
  },
};

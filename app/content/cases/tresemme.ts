import { asset } from "../../base-path";

/*
 * P20 — TRESemmé Vietnam case copy.
 * All words, captions, links and image paths live here; the component only
 * arranges them. Use **bold** for emphasis; `unit` is the small superscript.
 */

const PLAN_EMBED = "https://www.canva.com/design/DAGQebAsdjM/zwy3uAUGaSUTPJ_qI9O3vg/view?embed";
const PLAN_LINK = "https://www.canva.com/design/DAGQebAsdjM/zwy3uAUGaSUTPJ_qI9O3vg/view";
const INSIGHTS_REPORT = "https://drive.google.com/file/d/13akEXftRwsaDr0BlVrLgMSywo7eybJIg/view?usp=drive_link";
const WORKBOOK = "https://drive.google.com/file/d/1kbujPsEZT0PKqxSghcEAfsbtFY27KTQR/view?usp=drive_link";

export const tresemme = {
  hero: {
    image: asset("/images/p20-tres.jpg"),
    title: "TRESemmé Vietnam",
    descriptor: "Insights to media system · July 2024",
    strip: [
      { value: "~60k", label: "TikTok fans (analysed snapshot)" },
      { value: "3.3", unit: "%", label: "TikTok post interaction rate" },
      { value: "16", unit: "%", label: "TikTok follower growth" },
      { value: "VND 7.3B", label: "modelled media-plan budget" },
    ],
  },
  diagnosis: {
    eyebrow: "The diagnosis",
    title: "Strong visibility was not the same as strong connection",
    body: [
      "TRESemmé’s channel picture was uneven. In the analysed period, TikTok stood out at roughly **60k fans**, a **3.3% post interaction rate** and **16% follower growth**, while the broader Facebook, Instagram and YouTube picture was less convincing. The planning question was not “how do we get more reach?” but how to turn visibility into a coherent path from attention to product relevance and trust.",
      "The team used Fanpage Karma data across TRESemmé and competitors on four platforms. These are date-specific social metrics, not universal measures of brand health.",
    ],
    platformAnalysisFigure: {
      src: asset("/images/cases/p20/p20-platform-analysis.png"),
      alt: "Cross-platform analysis chart comparing TRESemmé performance across TikTok, Facebook, Instagram and YouTube.",
      caption: "Cross-platform analysis with source axes and labels preserved.",
      tag: "Insights report",
    },
    platformTableFigure: {
      src: asset("/images/cases/p20/p20-platform-table.png"),
      alt: "Platform metric table listing fan counts, interaction rates and growth for TRESemmé and competitors.",
      caption: "The underlying platform metric table, figures also stated in text above.",
      tag: "Insights report",
    },
    note: {
      label: "Interpretation limit",
      body: "A useful editorial reading is that celebrity endorsement can be visible without consumers consistently connecting the personality back to product value. That is treated as a diagnosed disconnect and a hypothesis, not a proven causal claim.",
    },
  },
  creatorSystem: {
    eyebrow: "Creator system",
    title: "Rebuild the creator system around roles",
    body: [
      "The proposed plan reorganised creators by what they were meant to do in the funnel, reach, credibility and trust, rather than treating every KOL post as the same media unit. Different platforms received different formats: demonstration and challenge mechanics on TikTok, review and storytelling roles elsewhere, and creator or stylist participation that made product use more visible.",
    ],
    figure: {
      src: asset("/images/cases/p20/p20-kol-diagnosis.png"),
      alt: "KOL usage diagnosis mapping creators to funnel roles of reach, credibility and trust.",
      caption: "Creators mapped to funnel roles rather than treated as interchangeable media units.",
      tag: "Proposed strategy",
    },
  },
  integratedPlan: {
    eyebrow: "Integrated plan",
    title: "Design media as a system, not a list",
    body: [
      "The idea **“Step up your hair game at home”** expanded into an integrated plan: UGC, an interactive AI DOOH concept, offline activation, creator activity and a phased, pulsing schedule that concentrated pressure at the moments that mattered rather than spreading spend evenly.",
    ],
    doohFigure: {
      src: asset("/images/cases/p20/p20-interactive-dooh.png"),
      alt: "Interactive AI DOOH concept board for the TRESemmé media plan proposal.",
      caption: "The interactive AI DOOH concept, a proposal element, not executed media.",
      tag: "Concept (proposal)",
    },
    pulsingFigure: {
      src: asset("/images/cases/p20/p20-plan-pulsing.png"),
      alt: "Pulsing and phasing media calendar showing bursts of activity across the plan period.",
      caption: "The pulsing schedule concentrated activity in phases across the plan period.",
      tag: "Planning artefact",
    },
  },
  budget: {
    eyebrow: "The budget",
    title: "Put a number on the proposal, without pretending it was spend",
    body: [
      "The detailed budget totals **VND 7,333,618,824 inclusive of GST**. This is useful planning proof: it shows the strategy was translated into line items and timing. It is a modelled media-plan budget, not money Felix managed and not a campaign that was executed.",
    ],
    stat: {
      label: "Modelled media-plan budget",
      items: [
        { value: "VND 7,333,618,824", label: "modelled plan total, incl. GST" },
        { value: "4", label: "platforms diagnosed" },
        { value: "Pulsing", label: "phased schedule" },
        { value: "Proposal", label: "academic, not executed" },
      ],
    },
    embed: {
      title: "TRESemmé Vietnam media plan proposal deck",
      src: PLAN_EMBED,
      fallbackUrl: PLAN_LINK,
      fallbackLabel: "Open the media plan (Canva)",
    },
    note: {
      label: "Boundary",
      body: "The VND 7.3B figure is a modelled proposal. Felix did not manage, spend or control this budget.",
    },
  },
  demonstrates: {
    eyebrow: "What this demonstrates",
    title: "Strategic media planning from evidence to allocation",
    body: [
      "The project combines platform diagnosis, creator-role design, format selection, activation logic, scheduling and a detailed modelled budget while keeping the boundary between academic proposal and real-world execution explicit.",
    ],
    links: [
      { label: "View the insights report", url: INSIGHTS_REPORT },
      { label: "View the media-plan workbook", url: WORKBOOK },
    ],
  },
};

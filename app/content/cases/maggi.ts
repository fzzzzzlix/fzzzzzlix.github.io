import { asset } from "../../base-path";

/*
 * P13 — MAGGI Recipe Solution case copy.
 * All words, captions, links and image paths live here; the component only
 * arranges them. Use **bold** for emphasis inside body paragraphs.
 */

const PROPOSAL_EMBED = "https://www.canva.com/design/DAGunqNlgh8/JNnKHfJfNM_5HLCapg8JMA/view?embed";
const PROPOSAL_LINK = "https://www.canva.com/design/DAGunqNlgh8/JNnKHfJfNM_5HLCapg8JMA/view";
const RESEARCH_REPORT = "https://drive.google.com/file/d/1yUiWotDrdeJ1-MhJaZdhPNcjmvd7VJB6/view?usp=drive_link";

export const maggi = {
  hero: {
    image: asset("/images/p13-maggi.jpg"),
    title: "MAGGI Recipe Solution",
    descriptor: "Research to execution",
    strip: [
      { value: "74", label: "Facebook posts analysed" },
      { value: "755", label: "comments coded in NVivo" },
      { value: "82", label: "e-commerce reviews" },
      { value: "2", label: "phases: research → creative" },
    ],
  },
  researchQuestion: {
    eyebrow: "The research question",
    title: "When awareness does not become affinity",
    body: [
      "The question was not whether people knew MAGGI. It was why a familiar brand could still generate a weaker kind of conversation than competitors, and what that gap should change in the creative work.",
      "In the research phase, Felix analysed **74 Facebook posts**, coded **755 comments with NVivo**, and reviewed **82 e-commerce reviews** from 15 top-selling MAGGI Recipe Solution products, moving from social signals to a strategic decision, then testing whether that decision could survive translation into a seasonal campaign.",
    ],
    stat: {
      label: "Research method",
      items: [
        { value: "74", label: "Facebook posts analysed" },
        { value: "755", label: "comments coded (NVivo)" },
        { value: "82", label: "e-commerce reviews" },
        { value: "15", label: "top-selling products reviewed" },
      ],
    },
  },
  insight: {
    eyebrow: "The insight",
    title: "Reading the language around the category",
    body: [
      "The useful distinction was more specific than “one brand is rational, another emotional.” In the analysed material, MAGGI discussion skewed toward product attributes, price, delivery and other transactional concerns. Barona generated more language around ease, recipes, usage and what consumers could make, and achieved stronger engagement in the compared set.",
      "That shifted the problem from “make MAGGI more visible” to **make convenience feel credible, useful and culturally lived rather than merely claimed**. The charts are evidence; the numbers are stated here so the reader never has to decode tiny screenshot labels.",
    ],
    commentThemesFigure: {
      src: asset("/images/cases/p13/p13-comment-themes.png"),
      alt: "Comment-theme comparison showing MAGGI conversation skewing to product and price versus Barona's recipe and usage language.",
      caption: "Theme comparison: MAGGI conversation skewed transactional; Barona skewed toward recipes and usage.",
      tag: "Research report visual",
    },
    sentimentFigure: {
      src: asset("/images/cases/p13/p13-sentiment-volume.png"),
      alt: "Sentiment and comment-volume chart from the MAGGI Recipe Solution analysis of 755 coded comments.",
      caption: "Sentiment and comment volume across the 755-comment coded set.",
      tag: "Research report visual",
    },
  },
  direction: {
    eyebrow: "From evidence to direction",
    title: "Authentic Convenience",
    body: [
      "The research was synthesised into **Authentic Convenience**: a direction intended to connect ease with recognisable cooking behaviour rather than treat convenience as a generic functional benefit. A two-tier influencer approach was proposed to balance reach with more trusted, usage-led voices.",
    ],
    figure: {
      src: asset("/images/cases/p13/p13-campaign-framework.png"),
      alt: "MAGGI campaign framework translating the Authentic Convenience direction into a two-tier influencer approach.",
      caption: "The strategic framework: Authentic Convenience translated into a two-tier influencer approach.",
      tag: "Proposed direction",
    },
  },
  creative: {
    eyebrow: "Creative translation",
    title: "Turning strategy into a Tết idea",
    body: [
      "The second phase translated the direction into a proposed Tết 2026 campaign. Felix’s role moved from research and strategy into script writing and storyboard creation. The proposal and illustrated storyboard are evidence of continuity: the insight did not end as a slide; it shaped how a seasonal story could be structured.",
    ],
    bigIdeaFigure: {
      src: asset("/images/cases/p13/p13-big-idea.png"),
      alt: "MAGGI Tết 2026 big-idea concept page developed from the Authentic Convenience direction.",
      caption: "The big idea, developed from the strategic direction for a proposed Tết 2026 campaign.",
      tag: "Academic proposal",
    },
    storyboardFigure: {
      src: asset("/images/cases/p13/p13-storyboard.png"),
      alt: "Illustrated storyboard for the proposed MAGGI Tết 2026 TVC, panels shown in full.",
      caption: "The illustrated storyboard, the strategy carried into a concrete, structured seasonal narrative.",
      tag: "Proposed academic campaign",
    },
    embed: {
      title: "MAGGI Tết 2026 campaign proposal deck",
      src: PROPOSAL_EMBED,
      fallbackUrl: PROPOSAL_LINK,
      fallbackLabel: "Open the campaign proposal (Canva)",
    },
    note: {
      label: "Status",
      body: "The Tết 2026 campaign is a proposed academic concept, not launched activity. No campaign launch or commercial performance is claimed.",
    },
  },
  demonstrates: {
    eyebrow: "What this demonstrates",
    title: "Research that points to a creative decision",
    body: [
      "The case connects an explicit research method, an interpretable consumer-language gap, a strategic direction and a tangible script and storyboard output, without claiming campaign launch or commercial performance that did not occur.",
    ],
    links: [{ label: "View the research report", url: RESEARCH_REPORT }],
  },
};

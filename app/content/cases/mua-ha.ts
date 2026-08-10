import { asset } from "../../base-path";

/*
 * P02 — Mùa Hạ Của Chúng Tôi case copy.
 * All words, captions, links and image paths live here; the case component
 * (app/work/[slug]/mua-ha-case.tsx) only arranges them. Use **bold** for
 * emphasis inside body paragraphs.
 */

const FILM_URL = "https://www.facebook.com/toi18k60.thamonghoanien/videos/1063462567710867/";
const FILM_EMBED =
  "https://www.facebook.com/plugins/video.php?href=" +
  encodeURIComponent(FILM_URL) +
  "&show_text=false";
const FILM_SUBTITLED = "https://drive.google.com/file/d/1ATLFyOvocWzRioit0hmyEPUE18vnoMj7/view?usp=drive_link";
const SCRIPT_SOURCE = "https://drive.google.com/file/d/14IKE5s1Kz7wRNnmiJFo-NUFwlgmV1Nx1/view?usp=drive_link";

export const muaHa = {
  hero: {
    image: asset("/images/p02-summer.jpg"),
    title: "Mùa Hạ Của Chúng Tôi",
    descriptor: "Produced short film · 2022",
    strip: [
      { value: "Sole", label: "script writer (credited)" },
      { value: "Co-", label: "director and editor" },
      { value: "1st", label: "prize, class collective D5 K60" },
      { value: "3-act", label: "structure with perspective shift" },
    ],
  },
  film: {
    eyebrow: "The final output",
    title: "The film",
    body: [
      "The completed short film, screened at the Yên Hòa graduation-season video showcase. It plays below via the original Facebook post, with a direct link as a fallback.",
    ],
    embed: {
      title: "Mùa Hạ Của Chúng Tôi, original short film",
      src: FILM_EMBED,
      fallbackUrl: FILM_URL,
      fallbackLabel: "Watch the film on Facebook",
    },
  },
  authorship: {
    eyebrow: "Authorship",
    title: "Writing a class memory without writing generic nostalgia",
    body: [
      "Graduation films can collapse into a familiar montage: uniforms, hallways, a last day, a sentimental song. The creative problem was to build a coming-of-age piece that still felt recognisable to the graduating class while giving the story enough structure to stand as a short film rather than a memory reel.",
      "Felix’s clearest individual ownership was the script. The original production credits list Felix as the sole script writer, with direction and editing shared across the team, both authorship and the ability to translate an authored narrative through collaborative production.",
    ],
  },
  structure: {
    eyebrow: "The story first",
    title: "Structure before spectacle",
    body: [
      "The script was organised around a three-act progression and a perspective shift rather than an oversized reveal, letting small, recognisable interactions accumulate into the emotional turn. The first page is shown as evidence, with the full script linked below.",
    ],
    figure: {
      src: asset("/images/cases/p02/p02-script-cover.png"),
      alt: "First page of the original Mùa Hạ Của Chúng Tôi script, text shown in full and uncropped.",
      caption: "The original script’s opening page, Felix’s sole-credited authorship, shown uncropped.",
      tag: "Script evidence",
      href: SCRIPT_SOURCE,
    },
  },
  production: {
    eyebrow: "Into production",
    title: "Taking authorship into a shared production",
    body: [
      "Felix then worked as a co-director and co-editor within the production team. Script intention had to survive performance, coverage, pacing and the final edit. This stage was collaborative execution, not sole direction or sole post-production.",
    ],
  },
  recognition: {
    eyebrow: "Produced, screened and recognised",
    title: "The credits and the award, stated exactly",
    body: [
      "The film was completed and entered into the Yên Hòa graduation-season video showcase, where the class collective D5 K60 received First Prize for audience engagement. The credits and the award image are shown together so both the collective result and Felix’s individual contribution stay exact.",
    ],
    creditsFigure: {
      src: asset("/images/cases/p02/p02-credits.jpg"),
      alt: "Production credits for Mùa Hạ Của Chúng Tôi listing Felix Phan as sole script writer with multiple directors and editors.",
      caption: "The credits: Felix as sole script writer, with direction and editing shared across the team.",
      tag: "Ownership proof",
    },
    awardFigure: {
      src: asset("/images/cases/p02/p02-award.jpg"),
      alt: "Award-ceremony photograph for the First Prize for audience engagement awarded to class collective D5 K60.",
      caption: "First Prize for audience engagement, awarded to the class collective D5 K60, not to Felix individually.",
      tag: "Outcome proof",
    },
    note: {
      label: "Award boundary",
      body: "The prize recognised the class collective D5 K60. It is valid outcome evidence but is not presented as Felix’s individual award.",
    },
  },
  demonstrates: {
    eyebrow: "What this demonstrates",
    title: "Narrative authorship that survives collaboration",
    body: [
      "Felix can originate a story, structure it for production, and work with a team to carry it through direction and editing without overstating individual ownership of the finished film.",
    ],
    links: [
      { label: "Watch the film (Facebook)", url: FILM_URL },
      { label: "English-subtitled version", url: FILM_SUBTITLED },
      { label: "Read the original script", url: SCRIPT_SOURCE },
    ],
  },
};

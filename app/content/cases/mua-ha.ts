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
const SCRIPT_ID = "14IKE5s1Kz7wRNnmiJFo-NUFwlgmV1Nx1";
const SCRIPT_SOURCE = `https://drive.google.com/file/d/${SCRIPT_ID}/view?usp=drive_link`;
const SCRIPT_EMBED = `https://drive.google.com/file/d/${SCRIPT_ID}/preview`;
// Public Drive folder for the full project (hero-image link target).
const PROJECT_FOLDER = "https://drive.google.com/drive/folders/1OHnG1MviJQ8layw7ve0h_89JdDAPdxtA?usp=drive_link";

export const muaHa = {
  hero: {
    image: asset("/images/p02-hero-kv.jpg"),
    imageHref: PROJECT_FOLDER,
    title: "Mùa Hạ Của Chúng Tôi",
    strip: [
      { value: "Leader", label: "of the project" },
      { value: "Director", label: "writer and co-editor" },
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
      extraLinks: [{ label: "English-subtitled version", url: FILM_SUBTITLED }],
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
  script: {
    // Single-line header (the old "The story first / Structure before spectacle" pair collapsed to one).
    title: "The script",
    body: [
      "The script was organised around a three-act progression and a perspective shift rather than an oversized reveal, letting small, recognisable interactions accumulate into the emotional turn. It reads below alongside the production credits and the award.",
    ],
    embed: {
      title: "Mùa Hạ Của Chúng Tôi, original script",
      src: SCRIPT_EMBED,
      fallbackUrl: SCRIPT_SOURCE,
      fallbackLabel: "Read the original script",
    },
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
    cameoFigure: {
      src: asset("/images/cases/p02/p02-cameo.jpg"),
      alt: "Felix acting in a scene from Mùa Hạ Của Chúng Tôi.",
      caption: "Felix on screen in the film, a cameo in the class's graduation short.",
      tag: "On-screen cameo",
    } as null | { src: string; alt: string; caption: string; tag: string },
  },
  demonstrates: {
    eyebrow: "What this demonstrates",
    title: "Narrative authorship that survives collaboration",
    body: [
      "Making this film taught me that a script only half exists on the page: the rest is decided in performance, coverage and the edit. Carrying my own writing through direction and editing, next to a team, showed me how much a story shifts on the way to the screen, and how to protect its intention without clinging to authorship of every frame.",
    ],
    links: [
      { label: "Watch the film (Facebook)", url: FILM_URL },
      { label: "English-subtitled version", url: FILM_SUBTITLED },
      { label: "Read the original script", url: SCRIPT_SOURCE },
    ],
  },
};

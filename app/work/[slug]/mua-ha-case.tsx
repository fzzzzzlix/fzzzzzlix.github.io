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
} from "./feature-case-primitives";

const HERO = asset("/images/p02-summer.jpg");
const SCRIPT = asset("/images/cases/p02/p02-script-cover.png");
const CREDITS = asset("/images/cases/p02/p02-credits.jpg");
const AWARD = asset("/images/cases/p02/p02-award.jpg");

const FILM_URL = "https://www.facebook.com/toi18k60.thamonghoanien/videos/1063462567710867/";
const FILM_EMBED =
  "https://www.facebook.com/plugins/video.php?href=" +
  encodeURIComponent(FILM_URL) +
  "&show_text=false";
const FILM_SUBTITLED = "https://drive.google.com/file/d/1ATLFyOvocWzRioit0hmyEPUE18vnoMj7/view?usp=drive_link";
const SCRIPT_SOURCE = "https://drive.google.com/file/d/14IKE5s1Kz7wRNnmiJFo-NUFwlgmV1Nx1/view?usp=drive_link";

export function MuaHaCase({ project, previous, next }: { project: Project; previous: Project; next: Project }) {
  return (
    <CaseArticle>
      <CaseHero
        project={project}
        title="Mùa Hạ Của Chúng Tôi"
        descriptor="Produced short film · 2022"
        image={HERO}
        imageFit="cover"
        strip={[
          { value: "Sole", label: "script writer (credited)" },
          { value: "Co-", label: "director and editor" },
          { value: "1st", label: "prize, class collective D5 K60" },
          { value: "3-act", label: "structure with perspective shift" },
        ]}
      />

      <CaseTension>{project.tension}</CaseTension>

      <CaseSection eyebrow="The final output" title="The film">
        <Lede>
          The completed short film, screened at the Yên Hòa graduation-season video showcase. It plays below via the
          original Facebook post, with a direct link as a fallback.
        </Lede>
        <ResponsiveEmbed
          title="Mùa Hạ Của Chúng Tôi, original short film"
          src={FILM_EMBED}
          fallbackUrl={FILM_URL}
          fallbackLabel="Watch the film on Facebook"
        />
      </CaseSection>

      <CaseSection eyebrow="Authorship" title="Writing a class memory without writing generic nostalgia">
        <Lede>
          Graduation films can collapse into a familiar montage: uniforms, hallways, a last day, a sentimental song. The
          creative problem was to build a coming-of-age piece that still felt recognisable to the graduating class while
          giving the story enough structure to stand as a short film rather than a memory reel.
        </Lede>
        <Lede>
          Felix&rsquo;s clearest individual ownership was the script. The original production credits list Felix as the
          sole script writer, with direction and editing shared across the team, both authorship and the ability
          to translate an authored narrative through collaborative production.
        </Lede>
      </CaseSection>

      <CaseSection eyebrow="The story first" title="Structure before spectacle">
        <Lede>
          The script was organised around a three-act progression and a perspective shift rather than an oversized
          reveal, letting small, recognisable interactions accumulate into the emotional turn. The first page is shown
          as evidence, with the full script linked below.
        </Lede>
        <EvidenceFigure
          src={SCRIPT}
          alt="First page of the original Mùa Hạ Của Chúng Tôi script, text shown in full and uncropped."
          caption="The original script&rsquo;s opening page, Felix&rsquo;s sole-credited authorship, shown uncropped."
          tag="Script evidence"
          href={SCRIPT_SOURCE}
        />
      </CaseSection>

      <CaseSection eyebrow="Into production" title="Taking authorship into a shared production">
        <Lede>
          Felix then worked as a co-director and co-editor within the production team. Script intention had to survive
          performance, coverage, pacing and the final edit. This stage was collaborative execution, not sole
          direction or sole post-production.
        </Lede>
      </CaseSection>

      <CaseSection eyebrow="Produced, screened and recognised" title="The credits and the award, stated exactly">
        <Lede>
          The film was completed and entered into the Yên Hòa graduation-season video showcase, where the class
          collective D5 K60 received First Prize for audience engagement. The credits and the award image are shown
          together so both the collective result and Felix&rsquo;s individual contribution stay exact.
        </Lede>
        <MediaPair>
          <EvidenceFigure
            src={CREDITS}
            alt="Production credits for Mùa Hạ Của Chúng Tôi listing Felix Phan as sole script writer with multiple directors and editors."
            caption="The credits: Felix as sole script writer, with direction and editing shared across the team."
            tag="Ownership proof"
          />
          <EvidenceFigure
            src={AWARD}
            alt="Award-ceremony photograph for the First Prize for audience engagement awarded to class collective D5 K60."
            caption="First Prize for audience engagement, awarded to the class collective D5 K60, not to Felix individually."
            tag="Outcome proof"
          />
        </MediaPair>
        <OwnershipNote label="Award boundary">
          The prize recognised the class collective D5 K60. It is valid outcome evidence but is not presented as
          Felix&rsquo;s individual award.
        </OwnershipNote>
      </CaseSection>

      <CaseSection eyebrow="What this demonstrates" title="Narrative authorship that survives collaboration">
        <Lede>
          Felix can originate a story, structure it for production, and work with a team to carry it through direction
          and editing without overstating individual ownership of the finished film.
        </Lede>
        <EvidencePanel
          links={[
            { label: "Watch the film (Facebook)", url: FILM_URL },
            { label: "English-subtitled version", url: FILM_SUBTITLED },
            { label: "Read the original script", url: SCRIPT_SOURCE },
          ]}
        >
          {project.evidence}
        </EvidencePanel>
      </CaseSection>

      <CaseNav previous={previous} next={next} />
    </CaseArticle>
  );
}

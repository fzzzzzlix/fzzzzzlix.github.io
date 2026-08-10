import Link from "next/link";
import type { Project } from "../../data";
import { StarMark } from "../../site-shell";
import { CanvaEmbed } from "./canva-embed";
import { beLocal as c } from "../../content/cases/be-local";

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
          <p className="eyebrow"><StarMark size={18} /> {c.hero.eyebrow}</p>
          <h1>{c.hero.title}</h1>
          <p className="case-role">{project.role}</p>
          <div className="case-meta">
            <span>{project.id}</span>
            <span>{project.year}</span>
            <span>{project.publicType}</span>
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <a className="p31-hero-media" href={c.images.hero} target="_blank" rel="noreferrer" aria-label={`${project.alt}. Opens full size in a new tab.`}>
          <img src={c.images.hero} alt={project.alt} />
        </a>
        <ul className="p31-strip" aria-label="Fast evidence">
          {c.hero.strip.map((item) => <li key={item.label}><strong>{item.value}{item.unit ? <small>{item.unit}</small> : null}</strong><span>{item.label}</span></li>)}
        </ul>
      </header>

      {/* Tension */}
      <section className="case-tension section-shell">
        <p className="eyebrow">{c.tensionEyebrow}</p>
        <h2>{project.tension}</h2>
      </section>

      {/* Verified role + workflow */}
      <section className="p31-section section-shell">
        <p className="eyebrow">{c.verifiedRole.eyebrow}</p>
        <h2>{c.verifiedRole.title}</h2>
        {c.verifiedRole.body.map((p, i) => <p className="p31-lede" key={i}>{p}</p>)}
        <div className="p31-media-pair">
          <div className="p31-embed-frame">
            <iframe title={c.verifiedRole.embedTitle} src={c.urls.workflowEmbed} allow="fullscreen" allowFullScreen loading="lazy" />
          </div>
          <Figure src={c.images.workflow} alt={c.verifiedRole.figure.alt} caption={c.verifiedRole.figure.caption} tag={c.verifiedRole.figure.tag} />
        </div>
      </section>

      {/* Trello */}
      <section className="p31-section section-shell">
        <p className="eyebrow">{c.trello.eyebrow}</p>
        <h2>{c.trello.title}</h2>
        <p className="p31-lede">{c.trello.body}</p>
        <Figure src={c.images.trello} alt={c.trello.figure.alt} caption={c.trello.figure.caption} tag={c.trello.figure.tag} />
      </section>

      {/* Schedule / WBS */}
      <section className="p31-section section-shell">
        <p className="eyebrow">{c.schedule.eyebrow}</p>
        <h2>{c.schedule.title}</h2>
        <p className="p31-lede">{c.schedule.body}</p>
        <ul className="p31-stats" aria-label="Schedule structure">
          {c.schedule.stats.map((item) => <li key={item.label}><strong>{item.value}</strong><span>{item.label}</span></li>)}
        </ul>
        <div className="p31-cols">
          <div className="p31-card">
            <span className="p31-tag">{c.schedule.phasesCard.tag}</span>
            <h3>{c.schedule.phasesCard.title}</h3>
            <ul>{c.schedule.phasesCard.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="p31-card">
            <span className="p31-tag">{c.schedule.sourcesCard.tag}</span>
            <h3>{c.schedule.sourcesCard.title}</h3>
            <div className="proof-links" aria-label="Schedule source downloads">
              {c.schedule.sourcesCard.links.map((link) => <a key={link.key} href={c.images[link.key]} download>{link.label}</a>)}
            </div>
          </div>
        </div>
        <p className="p31-note"><strong>{c.schedule.note.strong}</strong> {c.schedule.note.text}</p>
      </section>

      {/* Risk */}
      <section className="p31-section section-shell">
        <p className="eyebrow">{c.risk.eyebrow}</p>
        <h2>{c.risk.title}</h2>
        <p className="p31-lede">{c.risk.body}</p>
        <ul className="p31-stats" aria-label="Risk by status">
          {c.risk.byStatus.map((item) => <li key={item.label}><strong>{item.value}</strong><span>{item.label}</span></li>)}
        </ul>
        <ul className="p31-stats" aria-label="Risk by response treatment">
          {c.risk.byTreatment.map((item) => <li key={item.label}><strong>{item.value}</strong><span>{item.label}</span></li>)}
        </ul>
        <Figure src={c.images.risk} alt={c.risk.figure.alt} caption={c.risk.figure.caption} tag={c.risk.figure.tag} />
        <ul className="p31-stats" aria-label="Risk categories">
          {c.risk.categories.map((item) => <li key={item.label}><strong>{item.value}<small>{item.unit}</small></strong><span>{item.label}</span></li>)}
        </ul>
        <p className="p31-note"><strong>{c.risk.note.strong}</strong> {c.risk.note.text}</p>
      </section>

      {/* What the project taught (challenges + lessons merged) */}
      <section className="p31-section section-shell">
        <p className="eyebrow">{c.taught.eyebrow}</p>
        <h2>{c.taught.title}</h2>
        <p className="p31-lede">{c.taught.body}</p>
        <div className="p31-media-pair">
          <figure className="p31-figure">
            <a href={c.urls.projectDoc} target="_blank" rel="noreferrer" aria-label="Challenges mapped to process adjustments. Opens the full project document in a new tab.">
              <img src={c.images.challenges} alt={c.taught.challengesFigure.alt} loading="lazy" />
            </a>
            <figcaption><span>{c.taught.challengesFigure.caption}</span><em>{c.taught.challengesFigure.tag}</em></figcaption>
          </figure>
          <figure className="p31-figure">
            <a href={c.urls.projectDoc} target="_blank" rel="noreferrer" aria-label="Ten lessons grouped into three habits. Opens the full project document in a new tab.">
              <img src={c.images.lessons} alt={c.taught.lessonsFigure.alt} loading="lazy" />
            </a>
            <figcaption><span>{c.taught.lessonsFigure.caption}</span><em>{c.taught.lessonsFigure.tag}</em></figcaption>
          </figure>
        </div>
      </section>

      {/* Original presentation embed */}
      <section className="p31-section section-shell">
        <p className="eyebrow">{c.presentation.eyebrow}</p>
        <h2>{c.presentation.title}</h2>
        <p className="p31-lede">{c.presentation.body}</p>
        <div className="p31-embed">
          <CanvaEmbed />
        </div>
        <div className="proof-links" aria-label="Presentation link">
          <a href={c.urls.presentation} target="_blank" rel="noreferrer">{c.presentation.link}</a>
        </div>
        <section className="evidence-panel" style={{ marginTop: 40 }}>
          <p>{project.evidence}</p>
        </section>
      </section>

      {/* Peer evaluation (moved to last) */}
      <section className="p31-section section-shell">
        <p className="eyebrow">{c.peer.eyebrow}</p>
        <h2>{c.peer.title}</h2>
        <div className="p31-peer">
          <div className="p31-peer-head">
            <strong>{c.peer.average.value}<small>{c.peer.average.unit}</small></strong>
            <p>{c.peer.averageNote}</p>
            <div className="p31-peer-mini">
              {c.peer.mini.map((item) => <div key={item.label}><strong>{item.value}{item.unit ? <small>{item.unit}</small> : null}</strong><span>{item.label}</span></div>)}
            </div>
          </div>
          <div className="p31-bars" aria-label="Felix criterion averages out of 5">
            {c.peer.criteria.map(({ label, value }) => (
              <div className="p31-bar" key={label}>
                <div className="p31-bar-top"><span>{label}</span><b>{value.toFixed(2)}</b></div>
                <div className="p31-bar-track"><div className="p31-bar-fill" style={{ width: `${(value / 5) * 100}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
        <p className="p31-note"><strong>{c.peer.note.strong}</strong> {c.peer.note.text}</p>
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

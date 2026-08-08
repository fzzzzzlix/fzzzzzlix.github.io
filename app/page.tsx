import Link from "next/link";
import { SiteFooter, SiteHeader, StarMark, MediaPlaceholder } from "./site-shell";
import { projects } from "./data";
import { REAL_IMAGES } from "./project-images";

const projectsById = Object.fromEntries(projects.map((p) => [p.id, p]));

const featured = [
  {
    id: "P22",
    title: "Little Me Interactive Exhibition",
    lane: "Events & Advocacy",
    role: "Head Organiser, 27-person team",
    proof: "A self-paced mental-wellness experience with 316 visitors and evidence-controlled reporting.",
    route: "/work/little-me",
  },
  {
    id: "P25",
    title: "EMPACTS: Startup Ecosystem for SDGs",
    lane: "Organisation Design",
    role: "Founder, six departments, 54-person team",
    proof: "A startup ecosystem for SDGs built from scratch, with 40+ SOPs and a full leadership handover.",
    route: "/work/empacts",
  },
  {
    id: "P31",
    title: "Be Local",
    lane: "Project Management",
    role: "Project Manager and pitch team lead",
    proof: "30 risks, VND 2.59B modelled cost, and five key deliverables across scope to launch.",
    route: "/work/be-local",
  },
  {
    id: "P13",
    title: "MAGGI Recipe Solution Analysis",
    lane: "Research & Planning",
    role: "Researcher and strategist",
    proof: "74 posts, 755 coded comments and 82 reviews translated into an authentic-convenience direction.",
    route: "/work/maggi-recipe-solution",
  },
  {
    id: "P20",
    title: "TRESemmé Vietnam Insights Report and Media Plan",
    lane: "Research & Planning",
    role: "Researcher and media planner",
    proof: "Cross-platform TikTok/Facebook/Instagram/YouTube diagnosis and a VND 7.3B media plan proposal.",
    route: "/work/tresemme-insights-media-plan",
  },
  {
    id: "P02",
    title: "Mùa Hạ Của Chúng Tôi",
    lane: "Scriptwriting & Direction",
    role: "Writer, director and editor",
    proof: "A coming-of-age short film that earned First Prize in a graduation-season competition.",
    route: "/work/mua-ha-cua-chung-toi",
  },
];

const routes = [
  ["Creative Scriptwriting", "Treatments, scripts and story systems", "P01 · P05 · P02"],
  ["Strategic Planning", "Evidence, human tension and channel logic", "P13 · P20 · P21"],
  ["Communication & Sustainability", "Social subjects made human and usable", "P30 · P25 · P22"],
  ["Project Management", "Systems, stakeholders and delivery", "P25 · P24 · P22"],
  ["Communication Events", "Inclusive experiences with operational control", "P22 · P29 · P24"],
  ["Content Roles", "Format-aware content and channel thinking", "P28 · P23 · P01"],
];

export default function Home() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy reveal reveal-1">
            <p className="eyebrow"><StarMark size={18} /> Creative Strategist &amp; Storyteller</p>
            <h1 id="hero-title">Felix Phan.</h1>
            <div className="hero-actions">
              <Link className="button button-primary" href="/work">Explore selected work</Link>
              <Link className="button button-quiet" href="/contact#cv">View CV <span className="button-note">link pending</span></Link>
            </div>
          </div>
          <div className="hero-visual reveal reveal-2">
            <MediaPlaceholder
              label="Portrait placeholder"
              filename="felix-global-hero-portrait-4x5-v01.jpg"
              ratio="4:5 · 1600 × 2000 px"
              note="Crop to Fill, preserve eyes and hands in the central safe zone"
              portrait
            />
            <div className="orbit-note" aria-hidden="true"><StarMark size={42} /> insight · story · impact</div>
          </div>
        </section>

        <section className="proof-band" aria-label="Portfolio proof summary">
          <div className="section-shell proof-grid">
            <p><strong>{projects.length}</strong><span>project records</span></p>
            <p><strong>{featured.length}</strong><span>featured cases</span></p>
            <p><strong>6</strong><span>recruiter paths, one candidate</span></p>
            <p><strong>01</strong><span>method: tension to impact</span></p>
          </div>
        </section>

        <section className="method section-shell" aria-labelledby="method-title">
          <div className="section-intro">
            <p className="eyebrow">The operating method</p>
            <h2 id="method-title">Range is useful.<br />A repeatable method is better.</h2>
          </div>
          <ol className="method-list">
            <li><span>01</span><div><h3>Find the tension</h3><p>Locate the human, cultural or operational contradiction inside the brief.</p></div></li>
            <li><span>02</span><div><h3>Give it structure</h3><p>Turn evidence into a story, system, treatment, plan or experience people can follow.</p></div></li>
            <li><span>03</span><div><h3>Make it real</h3><p>Write, coordinate, produce and protect the idea across the work.</p></div></li>
            <li><span>04</span><div><h3>Stay for the outcome</h3><p>Track what happened, state the limitation and leave the next person a clean handover.</p></div></li>
          </ol>
        </section>

        <section className="work-preview section-shell" aria-labelledby="featured-title">
          <div className="section-intro section-intro-row">
            <div><p className="eyebrow">Selected proof</p><h2 id="featured-title">Six ways the method shows up.</h2></div>
            <Link className="text-link" href="/work">Explore selected work <span>↗</span></Link>
          </div>
          <div className="project-grid">
            {featured.map((project, index) => {
              const imgInfo = REAL_IMAGES[project.id];
              const pAlt = projectsById[project.id]?.alt ?? project.title;
              return (
                <Link className="project-card" href={project.route} key={project.id}>
                  {imgInfo ? (
                    <div className="project-img-wrap">
                      <img src={imgInfo.src} alt={pAlt} style={{ objectFit: imgInfo.fit }} />
                    </div>
                  ) : (
                    <MediaPlaceholder
                      label={`${project.id} evidence placeholder`}
                      filename={`felix-${project.id.toLowerCase()}-cover-16x9-v01.jpg`}
                      ratio="16:9 · 1600 × 900 px"
                      note="Crop to Fill, never stretch"
                      index={index + 1}
                    />
                  )}
                  <div className="project-card-copy">
                    <p className="project-meta"><span>{project.id}</span>{project.lane}</p>
                    <h3>{project.title}</h3>
                    <p>{project.proof}</p>
                    <p className="project-role">Role: {project.role}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="routes section-shell" aria-labelledby="routes-title">
          <div className="section-intro">
            <p className="eyebrow">Choose your route</p>
            <h2 id="routes-title">Same Felix. Different reason to call.</h2>
            <p className="section-deck">Tailoring changes the reading order, never the facts.</p>
          </div>
          <div className="route-list">
            {routes.map(([title, text, projects], index) => (
              <Link href={`/work?role=${encodeURIComponent(title)}`} key={title} className="route-row">
                <span className="route-index">0{index + 1}</span>
                <span><strong>{title}</strong><small>{text}</small></span>
                <span className="route-proof">{projects}</span>
                <span className="route-arrow">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="interest-callout section-shell" aria-labelledby="interest-title">
          <div className="star-field" aria-hidden="true"><StarMark size={160} /></div>
          <p className="eyebrow">What the work is for</p>
          <h2 id="interest-title">Culture with context.<br />Impact with receipts.</h2>
          <p>Projects concerning sustainability development, ESG, CSR and social enterprise support, alongside Vietnamese culture and social advocacy.</p>
          <Link className="button button-primary" href="/interests">Explore the interests</Link>
        </section>

        <section className="closing section-shell">
          <p className="eyebrow">Full-time availability, immediate</p>
          <h2>Bring me the brief<br />that refuses to behave.</h2>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:felixphan.contact@gmail.com">Email Felix</a>
            <Link className="button button-quiet" href="/about">Meet the person behind the method</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

import Link from "next/link";
import { SiteFooter, SiteHeader, StarMark, MediaPlaceholder } from "./site-shell";
import { projects } from "./data";
import { asset } from "./base-path";
import { REAL_IMAGES } from "./project-images";

const projectsById = Object.fromEntries(projects.map((p) => [p.id, p]));

const featured = [
  {
    id: "P22",
    title: "Little Me Interactive Exhibition",
    lane: "Events & Advocacy",
    role: "Founder, Head Organiser",
    proof: "A self-paced mental-wellness experience with 316 visitors and evidence-controlled reporting.",
    route: "/work/little-me",
  },
  {
    id: "P25",
    title: "EMPACTS: Startup Ecosystem for SDGs",
    lane: "Organisation Design",
    role: "Founder, Vice-president",
    proof: "A startup ecosystem for SDGs built from scratch, with 40+ SOPs and a full leadership handover.",
    route: "/work/empacts",
  },
  {
    id: "P31",
    title: "Be Local",
    lane: "Project Management",
    role: "Founder, Project Manager",
    proof: "A community-based tourism venture planned as a real project: a 30-risk register, five phases from scope to launch, and delegated ownership under weekly review.",
    route: "/work/be-local",
  },
  {
    id: "P13",
    title: "MAGGI Recipe Solution: Research to Execution",
    lane: "Research & Execution",
    role: "Researcher, Strategic Planner, and Scriptwriter",
    proof: "74 posts and 755 coded comments turned into an authentic-convenience direction, then a Tết TVC script and storyboard.",
    route: "/work/maggi-recipe-solution",
  },
  {
    id: "P20",
    title: "TRESemmé Vietnam Insights Report and Media Plan",
    lane: "Research & Planning",
    role: "Researcher and Strategic Planner",
    proof: "Cross-platform TikTok/Facebook/Instagram/YouTube diagnosis and a VND 7.3B media plan proposal.",
    route: "/work/tresemme-insights-media-plan",
  },
  {
    id: "P02",
    title: "Mùa Hạ Của Chúng Tôi",
    lane: "Scriptwriting & Direction",
    role: "Director, Writer, and Editor",
    proof: "A coming-of-age short film that won a First Prize for audience engagement in a graduation showcase.",
    route: "/work/mua-ha-cua-chung-toi",
  },
];

const routes = [
  ["Shape the strategy", "Research, insight and planning that points to a decision", "Strategy & Research", "MAGGI, TRESemmé, Scienceporium"],
  ["Build the story", "Scriptwriting, creative development and content that carries the idea", "Script & Story", "Mùa Hạ Của Chúng Tôi, BUV TVC, TH true Tea"],
  ["Lead the delivery", "Projects, events and operations that actually ship", "Project Management", "EMPACTS, Be Local, Little Me"],
];

export default function Home() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy reveal reveal-1">
            <p className="eyebrow"><StarMark size={18} /> Creative Strategist &amp; Storyteller</p>
            <h1 id="hero-title">Felix Phan</h1>
            <p className="hero-prop">A creative strategist who carries ideas all the way into execution.</p>
            <ul className="hero-chips" aria-label="Core capabilities">
              <li>Strategy</li>
              <li>Storytelling</li>
              <li>Project delivery</li>
            </ul>
            <div className="hero-actions">
              <Link className="button button-primary" href="/work">Explore selected work</Link>
              <Link className="button button-quiet" href="/contact#cv">View CV</Link>
            </div>
            <ul className="hero-facts" aria-label="Availability">
              <li>Available for full-time role</li>
              <li>Ho Chi Minh City</li>
            </ul>
          </div>
          <div className="hero-visual reveal reveal-2">
            <div className="hero-portrait-wrap">
              <img src={asset("/images/hero-portrait.jpg")} alt="Portrait of Felix Phan" width={1600} height={2000} />
            </div>
            <div className="orbit-note" aria-hidden="true"><StarMark size={42} /> insight → story → impact</div>
          </div>
        </section>

        <section className="proof-band" aria-label="Selected evidence">
          <div className="section-shell proof-grid">
            <p><strong>54</strong><span>person organisation founded</span></p>
            <p><strong>27</strong><span>person team led</span></p>
            <p><strong>755</strong><span>research comments coded</span></p>
            <p><strong>30</strong><span>risk register, full delivery plan</span></p>
          </div>
        </section>

        <section className="work-preview section-shell" aria-label="Featured works">
          <div className="section-intro section-intro-row">
            <div><p className="eyebrow">Featured works</p></div>
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
                      ratio="16:9, 1600 by 900 px"
                      note="Crop to Fill, never stretch"
                      index={index + 1}
                    />
                  )}
                  <div className="project-card-copy">
                    <p className="project-meta">{project.lane}</p>
                    <h3>{project.title}</h3>
                    <p>{project.proof}</p>
                    <p className="project-role">Role: {project.role}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="method section-shell" aria-labelledby="method-title">
          <div className="section-intro">
            <p className="eyebrow">The operating method</p>
            <h2 id="method-title">Felix&rsquo;s approach to every brief</h2>
          </div>
          <ol className="method-list">
            <li><span>01</span><div><h3>Find the tension</h3><p>Locate the human, cultural or operational contradiction inside the brief.</p></div></li>
            <li><span>02</span><div><h3>Give it structure</h3><p>Turn evidence into a story, system, treatment, plan or experience people can follow.</p></div></li>
            <li><span>03</span><div><h3>Make it real</h3><p>Write, coordinate, produce and protect the idea across the work.</p></div></li>
            <li><span>04</span><div><h3>Stay for the outcome</h3><p>Track what happened, state the limitation and leave the next person a clean handover.</p></div></li>
          </ol>
        </section>

        <section className="routes section-shell" aria-labelledby="routes-title">
          <div className="section-intro">
            <p className="eyebrow">Choose your route</p>
            <h2 id="routes-title">Same Felix. Different reason to call</h2>
          </div>
          <div className="route-list">
            {routes.map(([title, text, filter, proof], index) => (
              <Link href={`/work?role=${encodeURIComponent(filter)}`} key={title} className="route-row">
                <span className="route-index">0{index + 1}</span>
                <span><strong>{title}</strong><small>{text}</small></span>
                <span className="route-proof">{proof}</span>
                <span className="route-arrow">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="interest-callout section-shell" aria-labelledby="interest-title">
          <div className="star-field" aria-hidden="true"><StarMark size={160} /></div>
          <p className="eyebrow">Focus areas</p>
          <h2 id="interest-title">The Impact-maker</h2>
          <p>Work across sustainable development, ESG, CSR and social enterprise support, alongside Vietnamese culture and social advocacy.</p>
          <Link className="button button-primary" href="/interests">Explore the focus areas</Link>
        </section>

        <section className="closing section-shell">
          <p className="eyebrow">Available for full-time role</p>
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

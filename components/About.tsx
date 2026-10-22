import { Link } from "../router";
import { advisors, collaborators, officers } from "../data";
import type { Person } from "../data";
import { PageHead, Photo } from "./parts";

const pillars = [
  { n: "01", t: "Build", d: "Hands-on projects designed and prototyped by student teams.", img: "/images/about/girls.webp", alt: "Members assembling an EEG headset" },
  { n: "02", t: "Educate", d: "Hackathons, workshops and talks open to students from every major.", img: "/images/ant-visit/eeg-headset-demo.jpg", alt: "EEG headset demo during the ANT Neuro visit" },
  { n: "03", t: "Serve", d: "Service events that put our skills to work for the community.", img: "" },
];

export function Mission() {
  return (
    <>
      <PageHead section="About Us" sectionTo="mission" title="Our Mission" lead="Who we are and what we do at Neurotech at NC State." />
      <section>
        <div className="wrap sec-pad" style={{ paddingTop: 56, display: "flex", flexDirection: "column", gap: 56 }}>
          <div className="mission-split sr">
            <p className="lede-big">Neurotech at NC State is dedicated to educating students about neurotechnology, building hands-on projects, and serving our campus and community.</p>
            <div className="side-pic"><Photo src="/images/team/trio.webp" alt="The three club cofounders" height={290} position="center 5%" /></div>
          </div>
          <div className="pillars" style={{ paddingTop: 0 }}>
            {pillars.map((p) => (
              <div className="pillar" key={p.n}>
                <Photo src={p.img} alt={p.alt} height={220} />
                <span className="num">{p.n}</span>
                <h2>{p.t}</h2>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="wrap sec-pad">
          <div className="eyebrow" style={{ paddingBottom: 24 }}>Keep exploring</div>
          <Link className="rowl sm" to="team"><span className="t">Team</span><span className="d">Our leadership and faculty advisor.</span><span className="a">→</span></Link>
          <Link className="rowl sm last" to="collaborators"><span className="t">Collaborators</span><span className="d">Companies, partners and community groups we work with.</span><span className="a">→</span></Link>
        </div>
      </section>
    </>
  );
}

function PersonRow({ p }: { p: Person }) {
  return (
    <div className="row">
      <div className="pic"><img src={p.image} alt={p.name} loading="lazy" decoding="async" /></div>
      <div className="who"><b>{p.name}</b><span>{p.role}</span></div>
      <p className="bio">{p.bio}</p>
      <div className="links">
        <a href={`mailto:${p.email}`}>Email</a>
        <a href={`https://linkedin.com/in/${p.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <>
      <PageHead section="About Us" sectionTo="mission" title="Team" lead="The officers and advisor behind Neurotech at NC State." />
      <div className="wrap">
        <nav className="jump-nav" aria-label="On this page">
          <a className="jump" href="#leadership">Leadership</a>
          <a className="jump" href="#advisors">Advisors</a>
        </nav>
      </div>
      <section className="sr">
        <div className="wrap" style={{ paddingTop: 40 }}>
          <Photo src="/images/hero/team.webp" alt="The Neurotech team together" height={480} position="center 60%" />
        </div>
      </section>
      <section id="leadership">
        <div className="wrap" style={{ paddingTop: 40 }}>
          <div className="block">
            <div className="head"><span className="num">01</span><h2>Leadership</h2></div>
            <div className="list">{officers.map((p) => <PersonRow key={p.name} p={p} />)}</div>
          </div>
        </div>
      </section>
      <section id="advisors">
        <div className="wrap">
          <div className="block">
            <div className="head"><span className="num">02</span><h2>Advisors</h2></div>
            <div className="list">{advisors.map((p) => <PersonRow key={p.name} p={p} />)}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Collaborators() {
  return (
    <>
      <PageHead section="About Us" sectionTo="mission" title="Collaborators" lead="The companies, partners and community groups we work with." />
      <section>
        <div className="wrap" style={{ paddingTop: 80, paddingBottom: 96 }}>
          <div>
            {collaborators.map((c) => (
              <div className="row" key={c.name}>
                {c.href ? (
                  <>
                    <a className="logo-cell" href={c.href} target="_blank" rel="noopener noreferrer" aria-label={`${c.name} website`} tabIndex={-1}>
                      <img src={c.logo} alt={`${c.name} logo`} />
                    </a>
                    <span className="nm"><a className="nm-link" href={c.href} target="_blank" rel="noopener noreferrer">{c.name}</a></span>
                  </>
                ) : (
                  <>
                    <div className="logo-cell"><span className="eyebrow">Logo</span></div>
                    <span className="nm">{c.name}</span>
                  </>
                )}
                <span className="kind">{c.kind}</span>
                <span className="note">{c.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sr">
        <div className="wrap sec-pad photo-row">
          <Photo src="/images/ant-visit/eeg-headset-demo.jpg" alt="EEG headset demo during the ANT Neuro visit" height={360} flex="1 1 320px" />
          <Photo src="/images/ant-visit/eeg-output-demo.jpg" alt="EEG output on screen during the ANT Neuro visit" height={360} flex="1 1 320px" />
        </div>
      </section>
      <section className="on-dark">
        <div className="wrap cta-dark">
          <h2>Representing a lab, group or <span style={{ color: "var(--red)" }}>company?</span></h2>
          <div className="side">
            <p>We welcome research partners, sponsors, community organizations and fellow student groups.</p>
            <Link className="btn-r" to="contact#message">Collaborate with us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

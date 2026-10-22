import { useState } from "react";
import { Link } from "../router";
import { mailingListHref, meetings } from "../data";
import { Chirp, IconArrow, IconClose, IconUpRight, Photo, Words } from "./parts";

function Banner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="ban-slot">
      <div className="ban-wrap">
        <div className="ban-card">
          <span className="ban-bar" aria-hidden="true" />
          <Link className="ban" to="event-fall-hackathon">
            <span className="ban-date"><span>Nov</span><b>7–8</b></span>
            <span className="ban-txt">
              <span className="eyebrow red">Upcoming</span>
              <span className="t1">Fall Hackathon</span>
              <span className="t2">Limited to 100 participants</span>
            </span>
            <span className="ban-go">Details <IconArrow /></span>
          </Link>
          <button type="button" className="ban-x" aria-label="Dismiss announcement" onClick={() => setOpen(false)}>
            <IconClose size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

const pillars = [
  { n: "01", t: "Build", d: "Student teams design and prototype neurotechnology, from games to prosthetics.", to: "projects" },
  { n: "02", t: "Educate", d: "Hackathons, workshops and talks that teach neurotechnology to students from every major.", to: "events" },
  { n: "03", t: "Serve", d: "We put our time and skills toward our campus and community, with service events like card making.", to: "event-card-making" },
];

const perks = [
  ["Meeting reminders", "Times, rooms and what we're working on."],
  ["Hackathon announcements", "First word on dates and registration."],
  ["Neuro Snippet", "The fun neuroscience topic of the week."],
];

export function Home() {
  return (
    <>
      <Banner />

      <section>
        <div className="wrap hero-col">
          <h1 className="hero-h">
            <Words>{["Spreading", <span className="shine" key="n">Neurotechnology</span>, "Education", "and", "Interest"]}</Words>
          </h1>
        </div>
        <div className="wrap"><Chirp big /></div>
        <div className="wrap hero-foot">
          <p className="rise r2">Students at NC State building, teaching and serving through neurotechnology.</p>
          <div className="hero-ctas">
            <Link className="btn-r btn-k" to="projects">View Our Projects</Link>
            <Link className="ul" to="contact#mailing">Support Our Mission</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="statement sr">
            <div className="lbl eyebrow">Mission</div>
            <div className="body">
              <p>Neurotech at NC State is dedicated to educating students about neurotechnology, building hands-on projects, and serving our campus and community.</p>
              <Link className="ul" to="mission">About Us</Link>
            </div>
            <div className="side-pic"><Photo src="/images/hero/team.webp" alt="Neurotech members posing together after a meeting" height={520} position="center 60%" /></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap sec-pad">
          <div className="eyebrow" style={{ paddingBottom: 24 }}>Three pillars</div>
          {pillars.map((p, i) => (
            <Link key={p.n} className={`rowl${i === pillars.length - 1 ? " last" : ""}`} to={p.to}>
              <span className="n num">{p.n}</span>
              <span className="t">{p.t}</span>
              <span className="d">{p.d}</span>
              <span className="a">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="wrap sec-pad">
          <div className="eyebrow" style={{ paddingBottom: 24 }}>Come to a meeting · Every major welcome</div>
          <div className="meet-split">
            <div className="meet-list">
              {meetings.map((m) => (
                <div className="meet-row" key={m.day}>
                  <span className="day">{m.day}</span>
                  <span className="time">{m.time}</span>
                  <span className="where">{m.where}</span>
                </div>
              ))}
            </div>
            <div className="side-pic"><Photo src="/images/about/girls.webp" alt="Two members assembling a 3D-printed EEG headset" height={420} /></div>
          </div>
        </div>
      </section>

      <section id="signup" className="on-dark">
        <div className="wrap signup">
          <div className="l">
            <h2>Join the <span style={{ color: "var(--red)" }}>pack.</span></h2>
            <p>Sign up to hear about meetings, hackathons and project openings. Every major is welcome.</p>
          </div>
          <div className="r">
            <div className="perks">
              {perks.map(([a, b], i) => (
                <div className="perk" key={a}>
                  <span className="num">{`0${i + 1}`}</span><span className="a">{a}</span><span className="b">{b}</span>
                </div>
              ))}
            </div>
            <a className="btn-r" style={{ alignSelf: "flex-start" }} href={mailingListHref}>Join the Mailing List <IconUpRight /></a>
          </div>
        </div>
      </section>
    </>
  );
}

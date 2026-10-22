import { Link } from "../router";
import { events, meetings, projects } from "../data";
import type { EventInfo } from "../data";
import { PageHead, Photo } from "./parts";

export function Projects() {
  return (
    <>
      <PageHead title="Projects" lead="Student teams building hands-on neurotechnology. Choose a project to learn more." />
      <section>
        <div className="wrap" style={{ paddingTop: 80, paddingBottom: 112 }}>
          {projects.map((p, i) => (
            <Link key={p.id} className={`rowl sm${i === projects.length - 1 ? " last" : ""}`} to={`project-${p.id}`}>
              <span className="n num">{String(i + 1).padStart(2, "0")}</span>
              <div style={{ flex: "none", width: 176 }}><Photo src={p.image} alt="" label="Photo coming soon" height={108} /></div>
              <span className="t">{p.title}</span>
              <span className="d">{p.summary}</span>
              <span className="a" style={{ fontSize: 28 }}>→</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="on-dark">
        <div className="wrap cta-dark">
          <h2>Have an <span style={{ color: "var(--red)" }}>idea?</span></h2>
          <div className="side">
            <p>New project ideas from members are always welcome.</p>
            <Link className="btn-r" to="contact#message">Pitch a Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function ProjectDetail({ id }: { id: string }) {
  const p = projects.find((x) => x.id === id);
  if (!p) return <NotFound />;
  return (
    <>
      <PageHead section="Projects" sectionTo="projects" title={p.title} lead={p.summary} />
      <section>
        <div className="wrap detail">
          <div className="main">
            <Photo src={p.image} alt={p.title} label="Photo coming soon" height={420} />
            <div className="overview">
              <span className="eyebrow red">Overview</span>
              <p>{p.overview}</p>
            </div>
            {p.features && (
              <div className="steps">
                <span className="eyebrow red">What we're building</span>
                {p.features.map((f, i) => (
                  <div className="step" key={f}><span className="num">{`0${i + 1}`}</span><span className="s">{f}</span></div>
                ))}
              </div>
            )}
            {p.timeline && (
              <div className="steps">
                <span className="eyebrow red">Timeline</span>
                {p.timeline.map((t) => (
                  <div className="step dt" key={t.date + t.title}>
                    <span className="num">{t.date}</span>
                    <span className="s">{t.title}<small>{t.text}</small></span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <aside>
            <dl className="facts">
              {p.status && <div><dt>Status</dt><dd>{p.status}</dd></div>}
              {p.lead && <div><dt>Team Lead</dt><dd>{p.lead}</dd></div>}
              <div>
                <dt>Meets</dt>
                <dd>{meetings.map((m) => <span key={m.day} style={{ display: "block" }}>{m.day}, {m.time}</span>)}</dd>
              </div>
              {p.tools && <div><dt>Tools</dt><dd>{p.tools}</dd></div>}
            </dl>
            <Link className="btn-r" style={{ alignSelf: "flex-start" }} to="contact#message">Join This Project</Link>
            <Link className="ul bk" style={{ alignSelf: "flex-start" }} to="projects">← All Projects</Link>
          </aside>
        </div>
      </section>
    </>
  );
}

function EventGroup({ label, items, divider = false }: { label: string; items: EventInfo[]; divider?: boolean }) {
  if (items.length === 0) return null;
  return (
    <div className={divider ? "ev-past" : undefined}>
      <div className="eyebrow ev-label">{label}</div>
      <div>
        {items.map((e, i) => (
          <Link key={e.id} className={`rowl ev${i === items.length - 1 ? " last" : ""}`} to={`event-${e.id}`}>
            <span className="rowl-date"><span className="eyebrow red">{e.month}</span><b>{e.day}</b></span>
            <div style={{ flex: "none", width: 200 }}><Photo src={e.image} alt="" height={120} position="center 40%" /></div>
            <span className="rowl-title"><span className="t">{e.title}</span><span>{e.rowNote}</span></span>
            <span className={`eyebrow tag${e.status === "Upcoming" ? " red" : ""}`}>{e.status}</span>
            <span className="a" style={{ fontSize: 28 }}>→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Events() {
  return (
    <>
      <PageHead title="Events" lead="Hackathons and service events open to NC State students." />
      <section>
        <div className="wrap" style={{ paddingTop: 80, paddingBottom: 112 }}>
          <EventGroup label="Upcoming" items={events.filter((e) => !e.past)} />
          <EventGroup label="Past events" items={events.filter((e) => e.past)} divider />
        </div>
      </section>
    </>
  );
}

export function EventDetail({ id }: { id: string }) {
  const e = events.find((x) => x.id === id);
  if (!e) return <NotFound />;
  return (
    <>
      <PageHead section="Events" sectionTo="events" title={e.title} lead={e.summary} />
      <section>
        <div className="wrap detail">
          <div className="main">
            <Photo src={e.image} alt={e.title} label="Photo coming soon" height={420} position="center 40%" />
            <div className="big-day">
              <b>{e.day}</b>
              <span className="eyebrow red">{e.month} · {e.status}</span>
            </div>
            <div className="overview">
              <span className="eyebrow red">About this event</span>
              <p>{e.about}</p>
            </div>
            {e.schedule && (
              <div className="steps">
                <span className="eyebrow red">Schedule</span>
                {e.schedule.length > 0 ? (
                  e.schedule.map((t) => (
                    <div className="step dt" key={t.time + t.title}>
                      <span className="num">{t.time}</span>
                      <span className="s">{t.title}{t.note && <small>{t.note}</small>}</span>
                    </div>
                  ))
                ) : (
                  <div className="step"><span className="s" style={{ color: "var(--muted)" }}>{e.past ? "The schedule for this event is no longer posted." : "The schedule will be posted here closer to the event."}</span></div>
                )}
              </div>
            )}
            {e.gallery && (
              <div className="overview">
                <span className="eyebrow red">Gallery</span>
                <div className="gallery">
                  {e.gallery.length > 0
                    ? e.gallery.map((g) => <Photo key={g.src} src={g.src} alt={g.alt} height={240} />)
                    : [0, 1, 2].map((n) => <Photo key={n} label={e.past ? "Event photos coming soon" : "Photos after the event"} height={240} />)}
                </div>
              </div>
            )}
          </div>
          <aside>
            <dl className="facts">
              <div><dt>When</dt><dd>{e.when}</dd></div>
              <div><dt>Who can attend</dt><dd>{e.who}</dd></div>
            </dl>
            {e.signupHref ? (
              <a className="btn-r" style={{ alignSelf: "flex-start" }} href={e.signupHref}>Sign Up</a>
            ) : (
              <Link className="btn-r" style={{ alignSelf: "flex-start" }} to="contact#message">Request Details</Link>
            )}
            <Link className="ul bk" style={{ alignSelf: "flex-start" }} to="events">← All Events</Link>
          </aside>
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <>
      <PageHead title="Not found" lead="We couldn't find that page." />
      <div className="wrap sec-pad" style={{ paddingTop: 48 }}>
        <Link className="ul" to="home">Back home</Link>
      </div>
    </>
  );
}

import { useState } from "react";
import type { FormEvent } from "react";
import { EMAIL, mailingListHref, socials } from "../data";
import { IconUpRight, PageHead, SocialIcon } from "./parts";

export function Contact() {
  const [sent, setSent] = useState(false);

  // No backend: the form opens the visitor's email app with the message filled in.
  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n${f.get("name")}\n${f.get("email")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(String(f.get("topic")))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHead title="Contact" lead="Questions, ideas or want to get involved? Reach us here." />
      <div className="wrap">
        <nav className="jump-nav" aria-label="On this page">
          <a className="jump" href="#message">Message</a>
          <a className="jump" href="#mailing">Mailing list</a>
        </nav>
      </div>

      <section id="message">
        <div className="wrap">
          <div className="contact-block">
            <div className="l">
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="num">01</span>
                <h2>Send a message</h2>
              </div>
              <div className="socials">
                {socials.map((s) => (
                  <a key={s.name} className="soc" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}>
                    <SocialIcon name={s.name} />
                  </a>
                ))}
              </div>
              <div className="contact-line">
                <span className="eyebrow">Email</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="contact-line">
                <span className="eyebrow">Find us</span>
                <span style={{ fontSize: 20, lineHeight: "28px" }}>North Carolina State University, Raleigh, NC</span>
              </div>
            </div>
            <div className="r">
              {!sent ? (
                <form onSubmit={send}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
                    <div className="field"><label htmlFor="c-name">Name</label><input id="c-name" name="name" className="fld" type="text" placeholder="Your name" required /></div>
                    <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" name="email" className="fld" type="email" placeholder="you@ncsu.edu" required /></div>
                  </div>
                  <div className="field">
                    <label htmlFor="c-topic">Topic</label>
                    <select id="c-topic" name="topic" className="fld">
                      <option>General question</option>
                      <option>Membership</option>
                      <option>Sponsorship or collaboration</option>
                      <option>Projects</option>
                      <option>Events</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="c-msg">Message</label>
                    <textarea id="c-msg" name="message" className="fld" rows={5} placeholder="How can we help?" style={{ resize: "vertical" }} required />
                  </div>
                  <button className="btn-r" type="submit" style={{ alignSelf: "flex-start" }}>Send Message</button>
                </form>
              ) : (
                <div className="sent" role="status">
                  <h3>Almost there.</h3>
                  <p>Your email app should have opened with your message ready to send. If it didn't, write to us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="mailing" className="on-dark">
        <div className="wrap mail-band">
          <div className="t">
            <span className="num">02</span>
            <h2>Join the mailing list</h2>
            <p>Meeting reminders, hackathon announcements and project openings.</p>
          </div>
          <a className="btn-r" href={mailingListHref}>Join the Mailing List <IconUpRight /></a>
        </div>
      </section>
    </>
  );
}

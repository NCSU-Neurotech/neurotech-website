import { useState } from "react";
import { FaDiscord, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import type { IconType } from "react-icons";
import type { ReactNode } from "react";
import { Link } from "../router";
import { events, projects } from "../data";

const svgProps = {
  "aria-hidden": true,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
} as const;

export const IconArrow = ({ size = 14 }: { size?: number }) => (
  <svg {...svgProps} width={size} height={size}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
);
export const IconUpRight = () => (
  <svg {...svgProps} width={16} height={16}><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
);
export const IconChevron = () => (
  <svg {...svgProps} width={14} height={14}><path d="m6 9 6 6 6-6" /></svg>
);
export const IconMenu = () => (
  <svg {...svgProps} width={24} height={24}><path d="M4 8h16" /><path d="M4 16h16" /></svg>
);
export const IconClose = ({ size = 24 }: { size?: number }) => (
  <svg {...svgProps} width={size} height={size}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);
const SOCIAL_ICONS: Record<string, IconType> = { LinkedIn: FaLinkedinIn, Discord: FaDiscord, Instagram: FaInstagram };
export const SocialIcon = ({ name }: { name: string }) => {
  const Icon = SOCIAL_ICONS[name];
  return <Icon aria-hidden="true" size={26} />;
};

const IconImage = ({ size = 28 }: { size?: number }) => (
  <svg {...svgProps} width={size} height={size} strokeWidth={1.5}>
    <rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
  </svg>
);

/** A photo, or the design's grey placeholder when there is no picture yet. */
export function Photo({
  src, alt, label = "Photo coming soon", height, flex, position = "center",
}: { src?: string; alt?: string; label?: string; height: number; flex?: string; position?: string }) {
  const style = { height, flex, width: flex ? undefined : "100%" };
  if (src) {
    return (
      <div className="photo" style={style}>
        <img src={src} alt={alt ?? ""} style={{ objectPosition: position }} />
      </div>
    );
  }
  return (
    <div className="photo ph" role="img" aria-label={label} style={style}>
      <IconImage />
      <span className="eyebrow">{label}</span>
    </div>
  );
}

/** Swept-frequency wave line used as a divider. */
function wavePath(width: number, mid: number, amp: number, k0: number, k1: number) {
  let d = "";
  for (let x = 0; x <= width; x += 2) {
    const t = x / width;
    const phase = 2 * Math.PI * (k0 * t + ((k1 - k0) * t * t) / 2);
    d += `${x === 0 ? "M" : " L"}${x} ${(mid + amp * Math.sin(phase)).toFixed(1)}`;
  }
  return d;
}
const WAVE_MAIN = wavePath(1200, 60, 50, 2, 26);
const WAVE_FAINT = wavePath(1200, 88, 22, 1, 10);

export function Chirp({ big = false }: { big?: boolean }) {
  return (
    <div className={`chirp-box${big ? " big" : ""}`}>
      <svg className="chirp chirp-svg" aria-hidden="true" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d={WAVE_MAIN} fill="none" stroke="#cc0000" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d={WAVE_FAINT} fill="none" stroke="#000" strokeOpacity=".18" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

/** Headline words that slide up one after another. */
export function Words({ children, start = 0.15 }: { children: ReactNode[]; start?: number }) {
  return (
    <>
      {children.map((w, i) => (
        <span key={i}>
          <span className="wm">
            <span className="wd" style={{ animationDelay: `${(start + i * 0.12).toFixed(2)}s` }}>{w}</span>
          </span>{" "}
        </span>
      ))}
    </>
  );
}

export function PageHead({
  section, sectionTo, title, lead,
}: { section?: string; sectionTo?: string; title: string; lead: string }) {
  return (
    <section>
      <div className="wrap ph-section">
        <nav className="bc rise eyebrow" aria-label="Breadcrumb">
          <Link to="home">Home</Link>
          {section && sectionTo && (<><span aria-hidden="true">/</span><Link to={sectionTo}>{section}</Link></>)}
          <span aria-hidden="true">/</span>
          <span className="here">{title}</span>
        </nav>
        <h1 className="ph-h"><Words>{[title]}</Words></h1>
        <p className="ph-lead rise r2">{lead}</p>
      </div>
      <div className="wrap"><Chirp /></div>
    </section>
  );
}

export function Header({ current }: { current: string }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cls = (k: string) => `nav-a${current === k ? " cur" : ""}`;
  const close = () => { setAboutOpen(false); setMenuOpen(false); };

  return (
    <header className="hdr on-dark">
      <div className="wrap hdr-in">
        <Link to="home" className="brand" onClick={close}>
          <img src="/images/logo/logo_header.png" alt="Neurotech at NC State logo" />
          <span>Neurotech <span>at NC State</span></span>
        </Link>
        <nav className="nav-d" aria-label="Primary">
          <div className="dd" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <Link className={cls("about")} to="mission" data-open={aboutOpen} onClick={close}>
              About Us <IconChevron />
            </Link>
            {aboutOpen && (
              <div className="dd-menu">
                <Link className="menu-i" to="mission" onClick={close}>Mission</Link>
                <Link className="menu-i" to="team" onClick={close}>Team</Link>
                <Link className="menu-i" to="collaborators" onClick={close}>Collaborators</Link>
              </div>
            )}
          </div>
          <Link className={cls("projects")} to="projects">Projects</Link>
          <Link className={cls("events")} to="events">Events</Link>
          <Link className={cls("contact")} to="contact">Contact</Link>
        </nav>
        <button type="button" className="menu-b" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="wrap">
          <div className="m-menu">
            <Link to="mission" onClick={close}>Mission</Link>
            <Link to="team" onClick={close}>Team</Link>
            <Link to="collaborators" onClick={close}>Collaborators</Link>
            <Link to="projects" onClick={close}>Projects</Link>
            <Link to="events" onClick={close}>Events</Link>
            <Link to="contact" onClick={close}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="ftr on-dark">
      <div className="wrap ftr-in">
        <p className="ftr-big">Build. Educate. <span>Serve.</span></p>
        <Chirp />
        <nav aria-label="Footer">
          <div className="ftr-col">
            <span className="eyebrow">About</span>
            <Link className="fl" to="mission">Mission</Link>
            <Link className="fl" to="team">Team</Link>
            <Link className="fl" to="collaborators">Collaborators</Link>
          </div>
          <div className="ftr-col">
            <Link className="eyebrow" to="projects">Projects</Link>
            {projects.map((p) => <Link key={p.id} className="fl" to={`project-${p.id}`}>{p.title}</Link>)}
          </div>
          <div className="ftr-col">
            <Link className="eyebrow" to="events">Events</Link>
            {events.map((e) => <Link key={e.id} className="fl" to={`event-${e.id}`}>{e.title}</Link>)}
          </div>
          <div className="ftr-col">
            <Link className="eyebrow" to="contact">Contact</Link>
            <Link className="fl" to="contact#message">Contact Form</Link>
            <Link className="fl" to="contact#mailing">Mailing List</Link>
          </div>
        </nav>
        <div className="ftr-base">
          <span><img src="/images/logo/logo_header.png" alt="" />Neurotech at NC State</span>
          <span>© 2026. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

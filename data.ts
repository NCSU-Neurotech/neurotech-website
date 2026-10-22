export const EMAIL = "neurotech-org@ncsu.edu";

export const mailingListHref =
  "mailto:neurotech-org@ncsu.edu?subject=Join%20the%20Neurotech%20mailing%20list&body=Hi!%20Please%20add%20me%20to%20the%20club%20mailing%20list.%0A%0AMy%20name%3A%20%0AMy%20NCSU%20email%20(if%20applicable)%3A%20%0A";

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/neurotechatncsu/" },
  { name: "Discord", href: "https://discord.gg/duzBPkJcBB" },
  { name: "Instagram", href: "https://www.instagram.com/neurotech.ncsu/" },
];

export const meetings = [
  { day: "Wednesday", time: "7:00 – 9:00 PM", where: "Engineering Building 3, Room 2236 · Centennial Campus" },
  { day: "Friday", time: "4:00 – 6:00 PM", where: "Engineering Building 2, Room 1227 · Centennial Campus" },
];

export interface Person {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  linkedin: string;
}

export const officers: Person[] = [

  {
    name: "Armaan Raina",
    role: "Cofounder, President",
    image: "/images/team/armaani.webp",
    bio: "Armaan is a senior double majoring in Computer Science and Statistics. He cofounded the club alongside Rayan and Will, mainly focusing on decoding algorithms, general device design, and grant writing.",
    email: "araina3@ncsu.edu",
    linkedin: "armaanraina/",
  },
  {
    name: "Rayan Rao",
    role: "Cofounder, Co-President, R&D Lead",
    image: "/images/team/obama.webp",
    bio: "Rayan is a junior in Biomedical Engineering and the head of the R&D team. He is focusing on developing novel designs for affordable EEG headsets and adaptive switches to implement in Hilltop Home.",
    email: "rsrao2@ncsu.edu",
    linkedin: "rayan-rao-4737b421a/",
  },
  {
    name: "Will Sammons",
    role: "Cofounder, Treasurer, Hardware Lead",
    image: "/images/team/salmon.webp",
    bio: "Will is a junior in the Electrical and Computer Engineering dual degree program. He is a cofounder and head of hardware for Neurotech, and leads the development and use of the technology behind the club.",
    email: "twsammon@ncsu.edu",
    linkedin: "will-sammons-7196a42b5/",
  },
  {
    name: "Peter Carter",
    role: "Software Engineer Lead",
    image: "/images/team/pdcarter.jfif",
    bio: "Peter is a senior in Computer Science with a minor in Mathematics. He leads software related projects such as the EEG visualizer and maintains the club's website. ",
    email: "pdcarter@ncsu.edu",
    linkedin: "pdcarter726",
  },
];

export const advisors: Person[] = [
  {
    name: "Dr. Alper Bozkurt",
    role: "Faculty Advisor",
    image: "/images/team/boz.webp",
    bio: "Dr. Bozkurt serves as the Neurotech club advisor and guides us in project direction and idea development.",
    email: "aybozkur@ncsu.edu",
    linkedin: "alper-bozkurt-ncsu",
  },
];

export const collaborators = [
  {
    name: "ANT Neuro",
    href: "https://www.ant-neuro.com/",
    kind: "Company",
    logo: "/images/ant-visit/ant-logo.webp",
    note: "Visited on April 1, 2026 for a hands-on demo of more than $50,000 of professional EEG hardware.",
  },
  {
    name: "g.tec",
    href: "https://www.gtec.at/",
    kind: "Company",
    logo: "/images/collaborations/g-tec-logo.svg",
    note: "Biosignal and BCI company that partnered with us to host our spring hackathon.",
  },
  {
    name: "NeuroPawn",
    href: "https://www.neuropawn.tech/",
    kind: "Hardware support",
    logo: "/images/collaborations/neuropawn-logo.png",
    note: "Provided hardware that supports our projects and experiments.",
  },
  {
    name: "IDUN Technologies",
    href: "https://iduntechnologies.com/",
    kind: "Hardware support",
    logo: "/images/collaborations/idun-logo.png",
    note: "Provided hardware that supports our projects and experiments.",
  },
  {
    name: "Hilltop Home",
    href: "https://hilltophome.org",
    kind: "Community partner",
    logo: "/images/collaborations/hilltop-logo.webp",
    note: "The children and caregivers who test our assistive communication devices and shape what we build.",
  },
  {
    name: "Synaptive",
    href: "https://synaptiveltd.co.uk",
    kind: "Research partner",
    logo: "/images/collaborations/synaptive_logo.jfif",
    note: "Provided hardware for research and projects.",
  },
];

export interface Project {
  id: string;
  title: string;
  summary: string;
  overview: string;
  image?: string;
  status?: string;
  lead?: string;
  tools?: string;
  features?: string[];
  timeline?: { date: string; title: string; text: string }[];
}

export const projects: Project[] = [
  {
    id: "pong",
    title: "Pong Game",
    summary: "A classic arcade game rebuilt as a neurotechnology demo.",
    overview:
      "The Pong Game team is building a version of the classic arcade game as a hands-on way to explore neurotechnology. Full details on how it works will be posted here soon.",
  },
  {
    id: "hilltop",
    title: "Hilltop Website / Switch",
    summary: "Low-cost Arduino communication switches for children at Hilltop Home.",
    status: "Completed, in use at Hilltop Home",
    lead: "Hardware: Will Sammons",
    tools: "Arduino, custom switches, assistive communication software",
    overview:
      "This project created an affordable, easy-to-use communication device for children with severe physical and cognitive disabilities. Using Arduino microcontrollers and customizable switches that can be programmed to trigger commands, each device can be adapted to a child's specific needs and abilities.",
    features: [
      "A low-cost, reliable switch-based communication system",
      "Customizable software that can be programmed for different communication needs",
      "A device durable enough for extensive daily use, with documentation for caregivers and technicians",
    ],
    timeline: [
      { date: "August 2025", title: "Initial idea development", text: "Goals set for a smaller size, compatibility with the audio cable switch already on children's wheelchairs, changeable input types, debouncing and support for multiple switches." },
      { date: "October 2025", title: "Prototype development", text: "Completed an initial Arduino switch prototype." },
      { date: "November 2025", title: "Breadboard circuit and software integration", text: "Tested the prototype on a breadboard and integrated it with the software design." },
      { date: "December 2025", title: "Testing and feedback", text: "Debugged the software and tested the prototype with the children of Hilltop Home to gather feedback." },
      { date: "January 2026", title: "Development complete", text: "The Arduino communication switch is now used by the children of Hilltop Home to communicate their needs." },
    ],
  },
  {
    id: "prosthetic-hand",
    title: "Prosthetic Hand",
    summary: "A student-built prosthetic hand driven by neurotechnology.",
    overview:
      "The Prosthetic Hand team is designing and prototyping a hand that responds to signals from the body. Full details on the build will be posted here soon.",
  },
  {
    id: "tremor-pen",
    title: "Tremor Pen",
    summary: "A pen designed to help people write steadily despite hand tremors.",
    overview:
      "The Tremor Pen team is developing a writing tool that supports people living with hand tremors. Full details on the design will be posted here soon.",
  },
  {
    id: "eeg-visualizer",
    title: "EEG Visualizer",
    summary: "Live visualization of brain signals recorded with EEG.",
    image: "/images/ant-visit/eeg-output-demo.jpg",
    overview:
      "The EEG Visualizer team is building software that turns raw EEG recordings into something you can see and explore in real time. Full details will be posted here soon.",
  },
];

export interface EventInfo {
  id: string;
  title: string;
  summary: string;
  status: string;
  past?: boolean;
  month: string;
  day: string;
  when: string;
  who: string;
  image?: string;
  about: string;
  rowNote: string;
  /** When set, the event page shows a "Sign Up" button linking here instead of "Request Details". */
  signupHref?: string;
  /** Add entries to fill in the schedule section; `[]` shows a "coming soon" state, leave undefined to hide it. */
  schedule?: { time: string; title: string; note?: string }[];
  /** Photos from the event, e.g. { src: "/images/events/fall-hackathon/1.jpg", alt: "..." }; `[]` shows placeholders. */
  gallery?: { src: string; alt: string }[];
}

export const events: EventInfo[] = [
  {
    id: "fall-hackathon",
    title: "Fall Hackathon",
    summary: "The Neurotech at NCSU Hackathon: two days of building with neurotechnology.",
    status: "Upcoming",
    month: "Nov 2026",
    day: "7–8",
    when: "November 7–8, 2026",
    who: "Limited to 100 participants",
    image: "/images/hero/team.webp",
    about:
      "Two days of building, learning and collaboration around biosignals, brain-computer interfaces and neurotechnology. Whether you are new to EEG or already experimenting with decoders and interfaces, it is a chance to meet peers, work on projects and learn from mentors.",
    rowNote: "Neurotech at NCSU Hackathon · Limited to 100 participants",
    signupHref:
      "mailto:neurotech-org@ncsu.edu?subject=Fall%20Hackathon%20sign%20up&body=Hi!%20I%27d%20like%20to%20sign%20up%20for%20the%20Fall%20Hackathon.%0A%0AMy%20name%3A%20%0AMy%20NCSU%20email%3A%20%0AMajor%20and%20year%3A%20",
    schedule: [],
    gallery: [],
  },
  {
    id: "spring-hackathon",
    title: "Spring Hackathon",
    summary: "Our annual spring hackathon, held in partnership with g.tec.",
    status: "Past",
    past: true,
    month: "Apr 2026",
    day: "25–26",
    when: "April 25–26, 2026",
    who: "NC State students",
    image: "/images/about/girls.webp",
    about:
      "We hosted a hackathon in partnership with g.tec, a company known for biosignal recording and analysis tools used in research and education worldwide. The weekend put those ideas into practice at NC State with two days of building and learning.",
    rowNote: "In partnership with g.tec",
    schedule: [],
    gallery: [],
  },
  {
    id: "card-making",
    title: "Card Making Event",
    summary: "A service event where members make cards for the community.",
    status: "Future",
    month: "Date TBA",
    day: "TBA",
    when: "Date to be announced",
    who: "Open to all NC State students",
    about:
      "A service event that puts our time toward our campus and community. Join the mailing list to hear when we schedule it.",
    rowNote: "A future service event",
  },
];

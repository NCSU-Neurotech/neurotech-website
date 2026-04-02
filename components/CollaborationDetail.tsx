import { Image } from "./Image";
import { ArrowLeft, Calendar } from "lucide-react";

interface CollaborationDetailProps {
  collaborationId: string;
  onNavigate: (page: string) => void;
}

type CollaborationEntry = {
  title: string;
  meta: string;
  badge: string;
  logo: { src: string; alt: string };
  lede: string;
  paragraphs: string[];
  images?: { src: string; alt: string }[];
};

const collaborations: Record<string, CollaborationEntry> = {
  "ant-neuro": {
    title: "ANT Neuro visit",
    meta: "April 1, 2026",
    badge: "Demo day",
    logo: {
      src: "/images/ant-visit/ant-logo.webp",
      alt: "ANT Neuro logo",
    },
    lede:
      "Representatives from ANT Neuro joined Neurotech at NC State for an in-person demo featuring professional EEG systems—more than $50,000 worth of hardware on display for our members to explore.",
    paragraphs: [
      "The session gave students hands-on exposure to high-quality acquisition setups, electrodes, and software workflows used in research and clinical contexts. It was a rare chance to connect classroom concepts with equipment many teams only read about in papers.",
      "We are grateful to ANT Neuro for taking the time to visit, answer questions, and show what is possible when industry and student orgs work together. Partnerships like this strengthen our EEG and neurotech projects across the club.",
    ],
    images: [
      {
        src: "/images/ant-visit/eeg-headset-demo.jpg",
        alt: "EEG headset demo during the ANT Neuro visit",
      },
      {
        src: "/images/ant-visit/eeg-output-demo.jpg",
        alt: "EEG output and software on display during the ANT Neuro visit",
      },
    ],
  },
  "g-tec-hackathon": {
    title: "g.tec Hackathon",
    meta: "April 25–26, 2026",
    badge: "Upcoming event",
    logo: {
      src: "/images/collaborations/g-tec-logo.svg",
      alt: "g.tec medical engineering logo",
    },
    lede:
      "We are hosting a hackathon in partnership with g.tec—two days of building, learning, and collaboration focused on biosignals, BCI, and neurotechnology.",
    paragraphs: [
      "Whether you are new to EEG or already experimenting with decoders and interfaces, the weekend is a chance to meet peers, work on projects, and learn from mentors. Details on registration, venue, and schedule will be shared through our usual channels and on this site as we get closer to the event.",
      "g.tec is known for biosignal recording and analysis tools used in research and education worldwide. We are excited to team up for an event that puts those ideas into practice at NC State.",
    ],
  },
  neuropawn: {
    title: "Neuropawn hardware support",
    meta: "Ongoing partnership",
    badge: "Hardware",
    logo: {
      src: "/images/collaborations/neuropawn-logo.png",
      alt: "NeuroPawn logo",
    },
    lede:
      "Neuropawn has provided hardware to Neurotech at NC State, directly supporting our lab work, prototypes, and experiments.",
    paragraphs: [
      "Having reliable components on hand lets our project teams iterate faster and try ideas that would be harder to pursue without sponsor support. We are thankful for Neuropawn’s contribution to our mission—building assistive technology and growing neurotech skills on campus.",
      "If your organization is interested in similar support—equipment, expertise, or co-designed initiatives—visit our Collaborations page or contact us to start a conversation.",
    ],
  },
  idun: {
    title: "IDUN hardware support",
    meta: "Ongoing partnership",
    badge: "Hardware",
    logo: {
      src: "/images/collaborations/idun-logo.png",
      alt: "IDUN Technologies logo",
    },
    lede:
      "IDUN Technologies has provided hardware to Neurotech at NC State, supporting our experiments and projects with professional-grade brain-sensing tools.",
    paragraphs: [
      "Access to quality hardware accelerates learning and prototyping for our members. We are thankful to IDUN for helping equip our lab and expand what we can build and test as a student organization.",
      "If your organization is interested in similar support—equipment, expertise, or co-designed initiatives—visit our Collaborations page or contact us to start a conversation.",
    ],
  },
};

export function CollaborationDetail({
  collaborationId,
  onNavigate,
}: CollaborationDetailProps) {
  const entry = collaborations[collaborationId];

  if (!entry) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="mb-4">Collaboration not found</h2>
        <button
          type="button"
          className="mb-8 inline-flex items-center justify-center rounded-md bg-transparent px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => onNavigate("collaborations")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Collaborations
        </button>
      </div>
    );
  }

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <button
          type="button"
          className="mb-8 inline-flex items-center justify-center rounded-md bg-transparent px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => onNavigate("collaborations")}
        >
          <ArrowLeft className="mr-3 h-4 w-4" />
          Back to Collaborations
        </button>

        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
              {entry.badge}
            </span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {entry.meta}
            </div>
          </div>

          <h1 className="mb-6 text-3xl md:text-4xl">{entry.title}</h1>

          <div className="mb-8 flex justify-center rounded-lg border bg-white px-8 py-10 shadow-sm">
            <Image
              src={entry.logo.src}
              alt={entry.logo.alt}
              className="max-h-28 w-auto max-w-full object-contain object-center"
            />
          </div>

          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">{entry.lede}</p>

          {entry.images && entry.images.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-4 text-xl">Photos from the visit</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {entry.images.map((img) => (
                  <div
                    key={img.src}
                    className="overflow-hidden rounded-lg border bg-card shadow-sm"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover object-center max-h-[min(520px,70vh)]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-6 rounded-lg border-2 border-primary/20 bg-white p-8 shadow-sm md:p-10">
            {entry.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Handshake,
  FlaskConical,
  Building2,
  HeartHandshake,
  Users,
  CalendarDays,
  Presentation,
  Package,
  ArrowRight,
} from "lucide-react";

interface CollaborationsProps {
  onNavigate: (page: string) => void;
}

export function Collaborations({ onNavigate }: CollaborationsProps) {
  const ways = [
    {
      icon: FlaskConical,
      title: "Research & labs",
      description:
        "Partner with us on assistive technology research, capstone projects, or shared instrumentation. We welcome faculty, graduate students, and interdisciplinary teams aligned with our mission.",
    },
    {
      icon: Building2,
      title: "Industry & sponsors",
      description:
        "Sponsor hardware, software, or events; mentor student teams; or explore pilots that bring neurotech and accessibility expertise to real-world products and services.",
    },
    {
      icon: HeartHandshake,
      title: "Community organizations",
      description:
        "Schools, clinics, and nonprofits can collaborate on user feedback, field testing, and outreach so our devices and programs meet the people they are meant to serve.",
    },
    {
      icon: Users,
      title: "Student organizations",
      description:
        "We love working with other clubs and chapters on campus—joint workshops, hackathons, and awareness campaigns that grow the neurotech and accessibility community at NC State.",
    },
  ];

  const highlights = [
    {
      page: "collaboration-ant-neuro",
      icon: Presentation,
      title: "ANT Neuro",
      meta: "April 1, 2026",
      description:
        "ANT Neuro joined us for a hands-on demo, showcasing over $50,000 worth of EEG hardware and giving our members a close look at professional-grade neuroimaging equipment.",
    },
    {
      page: "collaboration-g-tec-hackathon",
      icon: CalendarDays,
      title: "g.tec Hackathon",
      meta: "April 25–26, 2026",
      description:
        "We are hosting a hackathon in partnership with g.tec. Save the date for a weekend of building, learning, and collaboration.",
    },
    {
      page: "collaboration-neuropawn",
      icon: Package,
      title: "Neuropawn",
      meta: "Hardware support",
      description:
        "We have received hardware from Neuropawn to support our projects and experiments—thank you for helping power our lab work.",
    },
    {
      page: "collaboration-idun",
      icon: Package,
      title: "IDUN",
      meta: "Hardware support",
      description:
        "IDUN Technologies has provided hardware to support our lab work and brain-sensing projects—thank you for helping us build and experiment.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Handshake className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl">Collaborations</h2>
          <div className="mx-auto h-1 w-24 bg-primary mb-6"></div>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Meaningful assistive technology takes a village. We partner with researchers,
            companies, community groups, and fellow students to design, build, and deploy
            solutions that improve communication and quality of life.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-center">Partners & highlights</h3>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <button
                key={item.page}
                type="button"
                onClick={() => onNavigate(item.page)}
                className="flex flex-col rounded-lg border-2 border-primary/30 bg-white p-6 text-left shadow-sm transition-all hover:border-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0 text-left">
                    <h4 className="text-lg leading-tight">{item.title}</h4>
                    <p className="text-sm font-medium text-primary">{item.meta}</p>
                  </div>
                </div>
                <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  View full page
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border-2 border-primary bg-white shadow-sm">
              <div className="p-8 md:p-12">
                <h3 className="mb-6 text-center">Why work with us</h3>
                <p className="mb-4 text-muted-foreground">
                  Neurotech at NC State is a student-led organization focused on education and
                  practical assistive devices for children with severe communication challenges.
                  Collaboration lets us combine rigorous engineering with lived experience and
                  professional expertise—so projects stay grounded, ethical, and impactful.
                </p>
                <p className="text-muted-foreground">
                  Whether you bring technical skills, funding, user connections, or simply a
                  shared commitment to accessibility, we are excited to explore how we can work
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-center">Ways to collaborate</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {ways.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all hover:border-primary"
              >
                <div className="p-6">
                  <div className="mb-4 flex justify-center md:justify-start">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-105 transition-all">
                      <item.icon className="h-7 w-7 text-primary group-hover:text-white" />
                    </div>
                  </div>
                  <h4 className="mb-3 text-center md:text-left">{item.title}</h4>
                  <p className="text-sm text-muted-foreground text-center md:text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
            Have an idea for a partnership or want to start a conversation? Reach out and we
            will get back to you.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}

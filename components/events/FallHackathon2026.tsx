import { ArrowLeft, Calendar, Clock, Users, Utensils, Brain, ClipboardList, ArrowRight, MapPin, CalendarClock } from "lucide-react";
import { Image } from "../Image";

interface FallHackathon2026Props {
  onNavigate: (page: string) => void;
}

const REGISTRATION_URL = "https://forms.gle/KGfL9VwsXpeescR27";

export function FallHackathon2026({ onNavigate }: FallHackathon2026Props) {
  const details = [
    { icon: Calendar, label: "When", value: "Nov 7 – Nov 8, 2026" },
    { icon: Clock, label: "Hours", value: "Sat 9:00 AM → Sun 2:00 PM" },
    { icon: MapPin, label: "Where", value: "NC State, Raleigh, NC · Exact location to be announced" },
    { icon: Users, label: "Capacity", value: "Limited to 100 participants" },
  ];

  const highlights = [
    {
      icon: Brain,
      title: "Hands-On EEG Experience",
      description: "Work with real EEG headsets and live brain data using headsets provided by IDUN Technologies.",
    },
    {
      icon: Utensils,
      title: "Food Provided",
      description: "Meals throughout the event, so you can stay focused on building.",
    },
    {
      icon: Clock,
      title: "Continuous Overnight Event",
      description: "Hack straight through from Saturday morning to Sunday afternoon.",
    },
  ];

  const sponsors = [
    {
      name: "IDUN Technologies",
      logo: "/images/collaborations/idun-logo.webp",
      url: "https://iduntechnologies.com",
      description: "Providing the EEG headsets participants will use throughout the hackathon.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <button
          onClick={() => onNavigate("events")}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </button>

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Upcoming Event · Fall 2026
          </div>
          <h1 className="mb-4 text-4xl md:text-5xl">Neurotech NCSU Hackathon</h1>
          <div className="mx-auto mb-6 h-1 w-24 bg-primary" />
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Hands-on with real EEG headsets and live brain data using headsets provided by
            IDUN Technologies.
          </p>
        </div>

        {/* Poster + Details */}
        <div className="mx-auto mb-16 grid max-w-5xl items-start gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border shadow-sm">
            <Image
              src="/images/hackathonFA26/Fall-Hack-26.png"
              alt="Neurotech NCSU Hackathon poster — Nov 7 to Nov 8"
              className="h-auto w-full"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid gap-4">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-center gap-4 rounded-xl border bg-card p-5 shadow-sm"
                >
                  <detail.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-sm text-muted-foreground">{detail.label}</p>
                    <p className="font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Registration */}
            <div className="flex flex-col items-center rounded-xl border-2 border-primary/30 bg-card p-8 text-center shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <ClipboardList className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mb-2 text-xl">Register Now</h2>
              <p className="mb-6 text-muted-foreground">
                Spots are limited to 100 participants, sign up early to secure your place.
              </p>
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Sign Up
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mx-auto mb-16 max-w-5xl">
          <h2 className="mb-8 text-center text-2xl">What to Expect</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="flex flex-col items-center rounded-xl border bg-card p-6 text-center shadow-sm">
                <item.icon className="mb-3 h-8 w-8 text-primary" aria-hidden />
                <h3 className="mb-2 font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors */}
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-3 text-center text-xl">Sponsored By</h2>
          <div className="flex justify-center">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex max-w-sm flex-col items-center rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-20 w-full items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="max-h-16 max-w-[180px] object-contain"
                  />
                </div>
                <h3 className="mb-2 text-center text-lg font-medium">{sponsor.name}</h3>
                <p className="text-center text-sm text-muted-foreground">{sponsor.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="mx-auto mb-16 max-w-3xl">
          <h2 className="mb-8 text-center text-2xl">Schedule</h2>
          <div className="flex flex-col items-center gap-3 rounded-xl border-2 border-dashed bg-muted/30 p-8 text-center text-muted-foreground">
            <CalendarClock className="h-8 w-8" aria-hidden />
            <p>
              The event runs continuously from Saturday 9:00 AM to Sunday 2:00 PM. A detailed
              schedule, including kickoff, meals, workshops, and judging, is coming soon.
            </p>
          </div>
        </div>

        <p className="text-center text-muted-foreground">
          Details on the exact location and a full schedule are coming soon. Check back here
          for updates.
        </p>
      </div>
    </section>
  );
}

import { Calendar, Clock, MapPin, Youtube, ExternalLink, ArrowLeft, Users } from "lucide-react";
import { Image } from "./Image";

interface GtecHackathonProps {
  onNavigate: (page: string) => void;
}

export function GtecHackathon({ onNavigate }: GtecHackathonProps) {
  const details = [
    {
      icon: Calendar,
      label: "Date",
      value: "April 25 - April 26",
    },
    {
      icon: Clock,
      label: "Time",
      value: "10:00 AM - 10:00 AM (24 hours)",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Entrepreneurship Garage, NC State University, Raleigh, NC",
    },
    {
      icon: Users,
      label: "Hosted by",
      value: "BR41N.IO & g.tec medical engineering",
    },
  ];

  const sponsors = [
    {
      name: "g.tec medical engineering",
      logo: "/images/collaborations/g-tec-logo.svg",
      url: "https://www.gtec.at",
      description: "Pioneer in brain-computer interface technology and neurotechnology research.",
    },
    {
      name: "Neuropawn",
      logo: "/images/collaborations/neuropawn-logo.png",
      url: "https://www.neuropawn.tech",
      description: "Advancing accessible neurotechnology solutions for researchers and developers.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Spring School 2026
          </div>
          <h1 className="mb-4 text-4xl md:text-5xl">BR41N.IO Hackathon</h1>
          <div className="mx-auto mb-6 h-1 w-24 bg-primary" />
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Join us for the Spring School 2026 hackathon, hosted in partnership with BR41N.IO
            and g.tec medical engineering — a weekend of building, learning, and innovation
            at the intersection of neurotechnology and engineering.
          </p>
        </div>

        {/* Poster + Event Details side by side */}
        <div className="mx-auto mb-16 max-w-5xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

            {/* Flyer */}
            <div className="w-full overflow-hidden rounded-xl border shadow-md lg:w-2/5 lg:shrink-0">
              <Image
                src="/images/collaborations/actual_hackathon_poster.png"
                alt="BR41N.IO Spring School 2026 Hackathon Flyer"
                className="w-full object-contain"
              />
            </div>

            {/* Event Details */}
            <div className="flex-1">
              <h2 className="mb-6 text-2xl">Event Details</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex gap-4 rounded-xl border bg-card p-5 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="mb-0.5 text-sm text-muted-foreground">{detail.label}</p>
                      <p className="font-medium">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Registration */}
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-2 text-center text-2xl">Register</h2>
          <p className="mb-8 text-center text-muted-foreground">
            Please register with the official BR41N.IO Spring School 2026 registration portal, and let us know you're coming by signing up through our club as well!
          </p>
          <div className="grid gap-6 md:grid-cols-2">

            {/* Club registration */}
            <div className="flex flex-col rounded-xl border-2 border-primary/30 bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <img
                    src="/images/logo/icon.svg"
                    alt="Club logo"
                    className="h-8 w-8 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg">Neurotech at NC State</h3>
                  <p className="text-sm text-muted-foreground">Club registration</p>
                </div>
              </div>
              <p className="mb-6 flex-1 text-sm text-muted-foreground">
                Please let us know if you plan on attending by registering through our club. You must also register through the official BR41N.IO portal to attend, but this helps us with headcount and planning for the event!
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfYfMbOuBtzDOgKNuOXRXXfw5xHIO3bTuWET4tketcOb94aIg/viewform?usp=sharing&ouid=107303216005536299321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Register with Club
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Host registration */}
            <div className="flex flex-col rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                  <img
                    src="/images/collaborations/g-tec-logo.svg"
                    alt="g.tec logo"
                    className="h-8 w-8 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg">BR41N.IO / g.tec</h3>
                  <p className="text-sm text-muted-foreground">Official registration</p>
                </div>
              </div>
              <p className="mb-6 flex-1 text-sm text-muted-foreground">
                Register directly with the hosting organization through the official BR41N.IO
                Spring School 2026 registration portal.
              </p>
              <a
                href="https://www.gtec.at/register-for-spring-school-2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Register with BR41N.IO
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-2 text-center text-2xl">Sponsors</h2>
          <p className="mb-8 text-center text-muted-foreground">
            Thank you to our generous sponsors who make this event possible.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-20 w-full items-center justify-center">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="max-h-16 max-w-[180px] object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  {/* Fallback if logo fails to load */}
                  <div
                    className="hidden h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-medium text-primary"
                    style={{ display: "none" }}
                  >
                    {sponsor.name.charAt(0)}
                  </div>
                </div>
                <h3 className="mb-2 text-center text-lg font-medium">{sponsor.name}</h3>
                <p className="text-center text-sm text-muted-foreground">{sponsor.description}</p>
              </a>
            ))}
          </div>
        </div>


        {/* YouTube */}
        <div className="mx-auto max-w-2xl rounded-xl border bg-card p-8 text-center shadow-sm">
          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
              <Youtube className="h-7 w-7 text-red-500" />
            </div>
          </div>
          <h3 className="mb-2 text-xl">Watch on YouTube</h3>
          <p className="mb-6 text-muted-foreground">
            Check out past BR41N.IO hackathons, tutorials, and neurotech content on the
            g.tec medical engineering YouTube channel.
          </p>
          <a
            href="https://www.youtube.com/@gtecmedicalengineering"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-red-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <Youtube className="h-4 w-4" />
            Visit YouTube Channel
          </a>
        </div>

      </div>
    </section>
  );
}
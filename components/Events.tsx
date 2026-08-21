import { Image } from "./Image";
import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";

interface EventsProps {
  onNavigate: (page: string) => void;
}

const UPCOMING_EVENTS = [
  {
    id: "fall-2026-hackathon",
    title: "Neurotech Hackathon — Fall 2026",
    description:
      "Details for our next local BCI hackathon are still being finalized. Check back soon or join the mailing list to be the first to know.",
    date: "Coming Soon",
    location: "NC State, Raleigh, NC",
  },
] as const;

const PAST_EVENTS = [
  {
    id: "spring-2026-hackathon",
    title: "BR41N.IO Hackathon — Spring School 2026",
    description:
      "Our local NC State chapter of the BR41N.IO Spring School 2026 hackathon, hosted in partnership with g.tec medical engineering — a weekend of building, learning, and innovation at the intersection of neurotechnology and engineering.",
    image: "/images/collaborations/actual_actual_hackathon_poster.PNG",
    status: "Past Event",
    date: "April 25 – 26, 2026",
    location: "Albright Entrepreneurship Garage, Raleigh, NC",
  },
] as const;

export function Events({ onNavigate }: EventsProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Events</h2>
          <div className="mx-auto h-1 w-24 bg-primary mb-6"></div>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Workshops, hackathons, and gatherings we've hosted or taken part in.
          </p>
        </div>

        {UPCOMING_EVENTS.length > 0 && (
          <div className="mx-auto mb-16 max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <h3 className="text-xl md:text-2xl whitespace-nowrap">Upcoming &amp; Current Events</h3>
              <div className="h-px flex-1 bg-border"></div>
            </div>

            <div className="grid gap-8">
              {UPCOMING_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="rounded-lg border-2 border-dashed bg-muted/30 text-card-foreground overflow-hidden opacity-60"
                >
                  <div className="relative flex h-64 items-center justify-center bg-muted/50">
                    <Sparkles className="h-12 w-12 text-muted-foreground" aria-hidden />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-sm bg-muted-foreground/70 text-white">
                        Coming Soon
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 text-muted-foreground">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>

                    <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                    </div>

                    <button
                      className="w-full inline-flex items-center justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground cursor-not-allowed"
                      disabled
                    >
                      Details Coming Soon
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {PAST_EVENTS.length > 0 && (
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <h3 className="text-xl md:text-2xl whitespace-nowrap">Past Events</h3>
              <div className="h-px flex-1 bg-border"></div>
            </div>

            <div className="grid gap-8">
              {PAST_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="group rounded-lg border-2 bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-primary"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-sm bg-secondary text-white">
                        {event.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>

                    <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                    </div>

                    <button
                      className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group/btn"
                      onClick={() => onNavigate(`event-${event.id}`)}
                    >
                      View Recap
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

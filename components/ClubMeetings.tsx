import {
  Brain,
  CalendarClock,
  Mail,
  Newspaper,
  Rocket,
} from "lucide-react";

const MEETING_SLOTS = [
  {
    day: "Wednesday",
    time: "7:00 PM – 9:00 PM",
    venue: "Engineering Building 3, Room 2236",
    campus: "Centennial Campus, NC State",
  },
  {
    day: "Friday",
    time: "4:00 PM – 6:00 PM",
    venue: "Engineering Building 2, Room 1227",
    campus: "Centennial Campus, NC State",
  },
] as const;

const CLUB_FLOW = [
  {
    icon: Newspaper,
    title: "Neurotech Snippets",
    description:
      "We start with a quick introductory slideshow each week with news on recent neurotech breakthroughs, cool project updates, and club announcements.",
  },

  {
    icon: Rocket,
    title: "Project Work Time",
    description:
      "We spend most of our meeting time working on team projects. We have Software, Hardware, and Outreach teams, so there’s a place for everyone to contribute.",
  },
] as const;

const mailingListHref =
  "https://docs.google.com/forms/d/e/1FAIpQLScnaXyUwomTewNEz4ICqiH-6BddPI9zJFx6KPWanWD3fPyiTg/viewform?usp=dialog";

export function ClubMeetings() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-gradient-to-b from-muted/50 via-background to-background py-20">
      <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Brain className="h-4 w-4" aria-hidden />
            USE YOUR BRAIN
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl">Meetings that Build Connections</h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-primary" />
          <p className="text-lg text-muted-foreground">
            We're a community here at NC State. Everyone is welcome regardless of experience, and our meetings are designed to be
            a place to learn, collaborate, and have fun.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 md:items-center">
          <div className="rounded-xl border bg-card p-6 shadow-sm md:flex md:flex-col md:justify-center">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CalendarClock className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="text-xl">Meeting Times</h3>
                <p className="text-sm text-muted-foreground"></p>
              </div>
            </div>
            <ul className="space-y-4">
              {MEETING_SLOTS.map((slot) => (
                <li
                  key={slot.day}
                  className="rounded-lg border border-border/80 bg-muted/30 px-4 py-3"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="font-medium">{slot.day}</span>
                    <span className="text-sm text-muted-foreground">{slot.time}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{slot.venue}</p>
                  <p className="text-sm text-muted-foreground">{slot.campus}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
             
            </p>
          </div>

          <div className="space-y-4">
            {CLUB_FLOW.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h4 className="mb-1 font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border-2 border-primary/30 bg-primary/5 p-8 text-center">
          <h3 className="mb-2 text-xl">Join the Mailing List</h3>
          <p className="mb-6 text-muted-foreground">
            Sign up for meeting reminders, project updates, and all the latest news from the club.
          </p>
          <a
            href={mailingListHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Join the mailing list
          </a>
        </div>
      </div>
    </section>
  );
}

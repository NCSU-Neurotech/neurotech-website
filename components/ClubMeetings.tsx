import {
  Brain,
  CalendarClock,
  Mail,
  Newspaper,
  PartyPopper,
  Rocket,
  UtensilsCrossed,
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
    title: "Neurotech in the news",
    description:
      "We open with a quick slideshow: breakthrough papers, wild demos, and the stories that are reshaping brain–computer interfaces and neurotech.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fuel for the night",
    description:
      "Bring your ideas—we’ll often have snacks or food when we can. It’s low-key, friendly, and a great way to debrief before we dive in.",
  },
  {
    icon: Rocket,
    title: "Build time",
    description:
      "The rest of the meeting is for project work: wiring, prototyping, software, research, and whatever your team needs to move forward.",
  },
] as const;

const mailingListHref =
  "mailto:neurotech-org@ncsu.edu?subject=Join%20the%20Neurotech%20mailing%20list&body=Hi!%20Please%20add%20me%20to%20the%20club%20mailing%20list.%0A%0AMy%20name%3A%20%0AMy%20NCSU%20email%20(if%20applicable)%3A%20%0A";

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
          <h2 className="mb-4 text-3xl md:text-4xl">Meetings that build connections (neural connections :D)</h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-primary" />
          <p className="text-lg text-muted-foreground">
            We’re a neurotech community at NC State—curious, experimental, and genuinely fun. Show up as you
            are: no gatekeeping, just good people working on hard problems together.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6 shadow-sm md:row-span-2 md:flex md:flex-col md:justify-center">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CalendarClock className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="text-xl">When we meet</h3>
                <p className="text-sm text-muted-foreground">Drop in for either session—or both!</p>
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
              Last-minute room or schedule changes go out on the mailing list—sign up so you never miss a week.
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
          <h3 className="mb-2 text-xl">Get on the mailing list</h3>
          <p className="mb-6 text-muted-foreground">
            One email gets you meeting reminders, room changes, event invites, and the occasional “you have
            to see this” neurotech link from someone on the team.
          </p>
          <a
            href={mailingListHref}
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

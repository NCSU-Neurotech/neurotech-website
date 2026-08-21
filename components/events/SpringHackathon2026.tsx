import { ArrowLeft, Trophy, Camera, Youtube, Users, Sparkles } from "lucide-react";
import { Image } from "../Image";

interface SpringHackathon2026Props {
  onNavigate: (page: string) => void;
}

interface Winner {
  place: 1 | 2 | 3;
  team: string;
  project: string;
  description: string;
  image?: string;
}

interface Photo {
  src?: string;
  caption?: string;
}

const PLACE_STYLES: Record<
  1 | 2 | 3,
  { label: string; border: string; badge: string; icon: string }
> = {
  1: {
    label: "1st Place",
    border: "border-amber-300 dark:border-amber-500/40",
    badge: "bg-amber-400 text-amber-950",
    icon: "text-amber-500",
  },
  2: {
    label: "2nd Place",
    border: "border-slate-300 dark:border-slate-500/40",
    badge: "bg-slate-300 text-slate-900",
    icon: "text-slate-400",
  },
  3: {
    label: "3rd Place",
    border: "border-orange-300 dark:border-orange-500/40",
    badge: "bg-orange-300 text-orange-950",
    icon: "text-orange-500",
  },
};

export function SpringHackathon2026({ onNavigate }: SpringHackathon2026Props) {
  const summaryStats = [
    { icon: Users, label: "Attendees", value: "42" },
    { icon: Trophy, label: "Teams", value: "8" },
  ];

  // TODO: fill in real winners once results are finalized.
  const winners: Winner[] = [
    {
      place: 1,
      team: "Team Name TBA",
      project: "SSVP Controlled Car",
      description: "A toy car was controlled using SSVP. Different SSVP frequencies were associated with different directions.",
      image: "/images/hackathonSP26/1stplace.JPG",
    },
    {
      place: 2,
      team: "Team Name TBA",
      project: "Jaw Controlled Robot Sphere",
      description: "A robot sphere was controlled using jaw EEG waves. Differing clenches were used to control rotation and movement.",
      image: "/images/hackathonSP26/2ndplace.JPG",
    },
    {
      place: 3,
      team: "Team Name TBA",
      project: "Emotion Controlled Music",
      description: "EEG was used to determine emotion while listening to music, and play similar music to what was enjoyed by the user.",
      image: "/images/hackathonSP26/3rdplace.JPG",
    },
  ];

  const photos: Photo[] = [
    { src: "/images/hackathonSP26/IMG_3944.jpg" },
    { src: "/images/hackathonSP26/IMG_3952.jpg" },
    { src: "/images/hackathonSP26/IMG_3958.jpg" },
    { src: "/images/hackathonSP26/IMG_3979.jpg" },
    { src: "/images/hackathonSP26/IMG_3986.jpg" },
    { src: "/images/hackathonSP26/IMG_3987.jpg" },
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
    {
      name: "Hilltop Home",
      logo: "/images/collaborations/hilltop-logo.svg",
      url: "https://hilltophome.org",
      description: "Intermediate care facility",
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
            Past Event · Spring School 2026
          </div>
          <h1 className="mb-4 text-4xl md:text-5xl">BR41N.IO Hackathon</h1>
          <div className="mx-auto mb-6 h-1 w-24 bg-primary" />
        </div>

        {/* Event Summary */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-2xl">A Weekend to Remember</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The Spring School 2026 hackathon was a huge success! We saw a fantastic turnout
            from students eager to dive into brain-computer interfaces, with teams
            collaborating late into the night to design, build, and demo creative
            neurotech projects. Thank you to everyone who participated, mentored, and helped
            make this weekend possible, we can't wait to do it again!
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {summaryStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 rounded-xl border bg-card p-5 shadow-sm"
              >
                <stat.icon className="h-6 w-6 text-primary" aria-hidden />
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Winning Projects */}
        <div className="mx-auto mb-16 max-w-5xl">
          <h2 className="mb-2 text-center text-2xl">Winning Projects</h2>
          <p className="mb-8 text-center text-muted-foreground">
            Congratulations to the teams recognized at the local prize ceremony.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {winners.map((winner) => {
              const style = PLACE_STYLES[winner.place];
              return (
                <div
                  key={winner.place}
                  className={`flex flex-col overflow-hidden rounded-xl border-2 bg-card shadow-sm ${style.border}`}
                >
                  <div className="relative flex h-40 items-center justify-center bg-muted/40">
                    {winner.image ? (
                      <Image
                        src={winner.image}
                        alt={`${winner.team} project photo`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Trophy className={`h-10 w-10 ${style.icon}`} aria-hidden />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span
                      className={`mb-2 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}
                    >
                      {style.label}
                    </span>
                    <h3 className="mb-1 font-medium">{winner.project}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">{winner.team}</p>
                    <p className="text-sm text-muted-foreground">{winner.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mx-auto mb-16 max-w-5xl">
          <h2 className="mb-2 text-center text-2xl">Photo Gallery</h2>
          <p className="mb-8 text-center text-muted-foreground">
            Moments from the weekend — more photos coming soon.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {photos.map((photo, i) =>
              photo.src ? (
                <div key={i} className="aspect-square overflow-hidden rounded-xl border shadow-sm">
                  <Image
                    src={photo.src}
                    alt={photo.caption ?? `Hackathon photo ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ) : (
                <div
                  key={i}
                  className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed bg-muted/30 text-muted-foreground"
                >
                  <Camera className="h-6 w-6" aria-hidden />
                  <span className="text-xs">Photo coming soon</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Sponsors */}
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-3 text-center text-xl">Sponsors</h2>
          <p className="mb-8 text-center text-muted-foreground">
            Thank you to our generous sponsors who made this event possible.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
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

        {/* Recap / Resources */}
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-center text-2xl">Watch the Recap</h2>
          <p className="mb-8 text-center text-muted-foreground">
            Catch highlights from the hackathon and browse past g.tec Spring School content.
          </p>
          <div className="flex flex-col items-center rounded-xl border bg-card p-8 text-center shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
              <Youtube className="h-7 w-7 text-red-500" />
            </div>
            <h3 className="mb-2 text-xl">g.tec YouTube Channel</h3>
            <p className="mb-6 text-muted-foreground">
              Check out the BR41N.IO Spring School 2026 hackathon, tutorials, and neurotech
              content on the g.tec medical engineering YouTube channel.
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
      </div>
    </section>
  );
}

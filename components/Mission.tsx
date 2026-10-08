import { MessageSquare, Zap, HandHelping, Globe } from "lucide-react";
import { Image } from "./Image";

export function Mission() {
  const goals = [
    {
      icon: MessageSquare,
      title: "Educate Students",
      description:
        "Share knowledge about neurotechnology and inspire students to pursue careers in neuroscience, biomedical engineering, and related fields.",
    },
    {
      icon: Zap,
      title: "Advance Innovation",
      description:
        "Develop cutting-edge neurotechnology solutions through collaborative research and hands-on student projects.",
    },
    {
      icon: HandHelping,
      title: "Build Community",
      description:
        "Foster collaboration between students, faculty, and industry partners to create a vibrant neurotechnology community in the Research Triangle Park.",
    },
    {
      icon: Globe,
      title: "Expand Reach",
      description:
        "Share our research and knowledge with the broader community through outreach events, workshops, and partnerships.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Our Mission</h2>
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/team/trio.webp"
              alt="Founding trio"            
              className="max-w-md w-full h-auto rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="mx-auto h-1 w-24 bg-primary mb-6"></div>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Grow neurotech education in the Research Triangle Park and advance innovative neurotechnology research and development through collaborative student projects and community outreach.
          </p>
        </div>

        <div className="mb-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border-2 border-primary bg-white shadow-sm">
              <div className="p-8 md:p-12">
                <h3 className="mb-6 text-center">What Drives Us</h3>
                <p className="mb-4 text-muted-foreground">
                  Neurotechnology is one of the most exciting and rapidly evolving fields in science and engineering today.
                  It has the potential to revolutionize how we understand and interact with the brain, leading to breakthroughs
                  in medicine, human enhancement, and our understanding of consciousness itself.
                </p>
                <p className="mb-4 text-muted-foreground">
                  At Neurotech at NC State, we're passionate about introducing students to this field and empowering them to become
                  the next generation of neurotechnology innovators. Through hands-on projects, research opportunities, and collaborative
                  learning, we're building the foundation for future breakthroughs.
                </p>
                <p className="text-muted-foreground">
                  By expanding our outreach and encouraging neurotechnology education in the Research Triangle Park, we hope to create a community
                  that is passionate about pushing the boundaries of what's possible in neuroscience and technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-center">Our Goals</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal) => (
              <div key={goal.title} className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all hover:border-primary">
                <div className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <goal.icon className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                  </div>
                  <h4 className="mb-3">{goal.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Image } from "./Image";
import { ArrowRight, Calendar } from "lucide-react";

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

export function Projects({ onNavigate }: ProjectsProps) {
  const projects = [
    {
      id: "epilepsy-decoder",
      title: "Epilepsy / Seizure State Decoder",
      description:
        "Deep learning classification of seizure states from EEG using the Bonn dataset drive by ANN and RNN models.",
      image:
        "https://www.neurocenternj.com/wp-content/uploads/2021/01/purple-brain-scans-epilepsy-800x400.jpg",
      status: "Completed",
      started: "January 2026",
    },
    {
      id: "arduino-switch",
      title: "Arduino Communication Switch",
      description:
        "Our flagship project developing a specialized Arduino-based switch system that enables children with severe disabilities to communicate their needs through simple, accessible button presses.",
      image: "https://images.unsplash.com/photo-1634452021892-eaabbdc4a0bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmR1aW5vJTIwZWxlY3Ryb25pY3MlMjBoYXJkd2FyZXxlbnwxfHx8fDE3NjM2MDA0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "In Testing",
      started: "October 2025",
    },
    {
      id: "eeg-headset",
      title: "EEG Communication Headset",
      description:
        "An upcoming project focused on expanding our assistive technology portfolio with the goal of improving communication for children with sever disabilities by developing an EEG headset that can read brain signals and translate them into actionable communication outputs.",
      image: "https://plus.unsplash.com/premium_photo-1681426643645-77d6b5130b50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "Planned",
      started: "November 2025",
    },
    {
      id: "eeg-decoder",
      title: "EEG Movement Decoder",
      description:
        "A planned project to map brain signals to specific physical movements using EEG data.",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1080&q=80&auto=format&fit=crop",
      status: "Planned",
      started: "TBD",
    },
    {
      id: "neural-3d-model",
      title: "Neural-Driven 3D Model",
      description:
        "An initiative to drive a 3D avatar or scene from live neural input so movement in the model reflects the user’s brain activity",
      image:
        "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1080&q=80&auto=format&fit=crop",
      status: "Planned",
      started: "TBD",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Our Projects</h2>
          <div className="mx-auto h-1 w-24 bg-primary mb-6"></div>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our innovative assistive technology projects designed to empower 
            children with disabilities and enhance their communication abilities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg border-2 bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-primary"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === "Active" 
                      ? "bg-primary text-white" 
                      : "bg-secondary text-white"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {project.started}
                  </div>
                </div>

                <button
                  className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group/btn"
                  onClick={() => onNavigate(`project-${project.id}`)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Mission } from "./components/Mission";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import { Contact } from "./components/Contact";
import { MeetTheTeam } from "./components/MeetTheTeam";
import { ClubMeetings } from "./components/ClubMeetings";
import { Collaborations } from "./components/Collaborations";
 // import { GtecHackathonBanner } from "./components/GtecHackathonBanner";
 // import { GtecHackathon } from "./components/g-tec-hackathon";
import { SiInstagram, SiDiscord } from "react-icons/si";
import { Linkedin } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "home";
  });

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setCurrentPage(params.get("page") || "home");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("page", page);
    window.history.pushState({}, "", newUrl);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
      return (
          <>
            {/* <GtecHackathonBanner onNavigate={handleNavigate} /> */}
            <Hero onNavigate={handleNavigate} />
            <ClubMeetings />
          </>
        );
      case "about":
        return <AboutUs />;
      case "team":
        return <MeetTheTeam onNavigate={handleNavigate} />;
      case "mission":
        return <Mission />;
      case "collaborations":
        return <Collaborations onNavigate={handleNavigate} />;
      // case "collaboration-g-tec-hackathon":
      // case "hackathon":
         //return <GtecHackathon onNavigate={handleNavigate} />;
      case "projects":
        return <Projects onNavigate={handleNavigate} />;
      case "project-arduino-switch":
        return (
          <ProjectDetail
            key="arduino-switch"
            projectId="arduino-switch"
            onNavigate={handleNavigate}
          />
        );
      case "project-eeg-headset":
        return (
          <ProjectDetail
            key="eeg-headset"
            projectId="eeg-headset"
            onNavigate={handleNavigate}
          />
        );
      case "project-epilepsy-decoder":
        return (
          <ProjectDetail
            key="epilepsy-decoder"
            projectId="epilepsy-decoder"
            onNavigate={handleNavigate}
          />
        );
      case "project-eeg-decoder":
        return (
          <ProjectDetail
            key="eeg-decoder"
            projectId="eeg-decoder"
            onNavigate={handleNavigate}
          />
        );
      case "project-neural-3d-model":
        return (
          <ProjectDetail
            key="neural-3d-model"
            projectId="neural-3d-model"
            onNavigate={handleNavigate}
          />
        );
      case "contact":
        return <Contact />;
      default:
      /*  
      return (
          <>
            {<GtecHackathonBanner onNavigate={handleNavigate} />}
            <Hero onNavigate={handleNavigate} />
            <ClubMeetings />
          </>
        );
        */
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <footer className="border-t bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="mb-4 text-white">Neurotech at NC State</h4>
              <p className="mb-4 text-sm text-white/80">
                Empowering communication through innovative assistive technology
                for children with disabilities.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/neurotechatncsu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/neurotech.ncsu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <SiInstagram size={20} />
                </a>
                <a
                  href="https://discord.gg/duzBPkJcBB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Discord"
                >
                  <SiDiscord size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-white">Quick Links</h4>
              <div className="flex flex-col gap-2 text-sm">
                <button
                  onClick={() => handleNavigate("about")}
                  className="text-left text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNavigate("projects")}
                  className="text-left text-white/80 hover:text-white transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => handleNavigate("collaborations")}
                  className="text-left text-white/80 hover:text-white transition-colors"
                >
                  Collaborations
                </button>
                <button
                  onClick={() => handleNavigate("contact")}
                  className="text-left text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-white">Contact</h4>
              <div className="text-sm text-white/80">
                <p>North Carolina State University</p>
                <p>Raleigh, NC</p>
                <p className="mt-2">neurotech-org@ncsu.edu</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2026 Neurotech at NC State. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
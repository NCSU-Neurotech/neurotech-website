import { Router } from "./router";
import { Footer, Header } from "./components/parts";
import { Home } from "./components/Home";
import { Collaborators, Mission, Team } from "./components/About";
import { EventDetail, Events, NotFound, ProjectDetail, Projects } from "./components/Listings";
import { Contact } from "./components/Contact";

function renderPage(page: string) {
  if (page === "home") return <Home />;
  if (page === "mission") return <Mission />;
  if (page === "team") return <Team />;
  if (page === "collaborators") return <Collaborators />;
  if (page === "projects") return <Projects />;
  if (page === "events") return <Events />;
  if (page === "contact") return <Contact />;
  if (page.startsWith("project-")) return <ProjectDetail key={page} id={page.slice(8)} />;
  if (page.startsWith("event-")) return <EventDetail key={page} id={page.slice(6)} />;
  return <NotFound />;
}

const navSection = (page: string) => {
  if (["mission", "team", "collaborators"].includes(page)) return "about";
  if (page.startsWith("project")) return "projects";
  if (page.startsWith("event")) return "events";
  return page;
};

export default function App() {
  return (
    <Router>
      {(page) => (
        <div className="page">
          <Header current={navSection(page)} />
          <main>{renderPage(page)}</main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

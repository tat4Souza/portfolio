import HomeSection from "./components/home-section";
import ProjectsSection from "./components/projects-section";
import SkillsSection from "./components/skills-section";

function App() {
  return (
    <>
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <section
        id="about"
        className="h-min-screen h-screen flex flex-col pt-25 w-[75%] gap-10"
      >
        <h3 className="h3-title mb-6">Sobre</h3>
      </section>
      <section
        id="contact"
        className="h-min-screen h-screen flex flex-col pt-25 w-[75%] gap-10"
      >
        <h3 className="h3-title mb-6">Contato</h3>
      </section>
    </>
  );
}

export default App;

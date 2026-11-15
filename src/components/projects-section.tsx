import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import CustomBadge from "./custom-badge";
import ProjectItem, { type ProjectProps } from "./project-item";
function ProjectsSection() {
  const data: ProjectProps[] = [
    {
      tituloVideo: "Editor de histórias",
      videoUrl: "/storiaVideo.mp4",
      inicio: new Date(),
      fim: new Date(),
      tecnologias: ["tailwind css", "react", "next.js", "sass"],
      githubUrl: "/",
      demoUrl: "/",

      tituloProjeto: "Storia Editor",
      papeis: ["scrum master", "dev frontend", "designer UIX/UX"],
      descProblema:
        "Texto para a descrição do problema, falando sobre as dores do cliente cuidadosamente.",
      descSolucao:
        "Texto para falar sobre a solução desenvolvida. Citando quais são as funcionalidades que a plataforma possui.",
      descConhecimentos:
        "Texto para falar sobre habilidades e conhecimentos técnicos adquiridos e conhecimentos pessoais e sociais exercitados.",
    },
    {
      tituloVideo: "AAAAAAAA",
      inicio: new Date(),
      fim: new Date(),
      tecnologias: ["tailwind css", "react", "next.js", "sass"],
      githubUrl: "/",
      demoUrl: "/",

      tituloProjeto: "Storia Editor",
      papeis: ["scrum master", "dev frontend", "designer UIX/UX"],
      descProblema: "Descrição do problema",
      descSolucao: "Descrição do problema",
      descConhecimentos: "Conhecimentos adquiridos",
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen bg-[radial-gradient(37.94%_37.94%_at_50%_0%,rgba(255,78,68,0.50)_0%,rgba(59,4,12,0)_90%)] dark:bg-[radial-gradient(37.94%_37.94%_at_50%_0%,rgba(184,56,49,0.26)_0%,rgba(59,4,12,0)_90%)] w-[75%] flex flex-col justify-center pt-15"
    >
      <Carousel className="h-[80vh] items-center ">
        <CarouselContent className=" h-full flex  items-center">
          {data.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>

      <div className="flex gap-5 *:text-base!">
        <CustomBadge>Acadêmicos</CustomBadge>
        <CustomBadge>Pessoais</CustomBadge>
      </div>
    </section>
  );
}

export default ProjectsSection;

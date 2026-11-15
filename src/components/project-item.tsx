import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
import { CarouselItem } from "./ui/carousel";

export interface ProjectProps {
  tituloVideo: string;
  videoUrl?: string;
  inicio: Date;
  fim: Date;
  tecnologias: string[];
  githubUrl: string;
  demoUrl: string;

  tituloProjeto: string;
  papeis: string[];
  descProblema: string;
  descSolucao: string;
  descConhecimentos: string;
}

interface ProjectItemProps {
  project: ProjectProps;
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <CarouselItem>
      <div className="p-1 flex  h-min-content gap-8">
        <Card className="flex-1 pt-0 bg-card">
          <video
            src={project.videoUrl}
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
            className="relative z-20 aspect-video w-full object-cover "
          />
          <CardTitle className="text-center -mt-15 z-30 bg-card font-mono max-w-max mx-auto px-20 py-5 rounded-tl-full rounded-tr-full text-foreground dark:text-primary-foreground">
            <h4 className="text-sm">{project.tituloVideo}</h4>
            <span className="font-serif text-xs ">
              {project.inicio.toDateString()} -{project.fim.toDateString()}
            </span>
          </CardTitle>
          <CardContent className="h-full flex flex-col gap-5  -mt-5">
            <div className="flex gap-2 flex-wrap">
              {project.tecnologias.map((tech) => (
                <Badge className="p-3 capitalize" key={tech}>
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="w-full flex justify-end gap-5">
              <Button variant="secondary" className="font-medium ">
                <FaGithub /> <span>Github</span>
              </Button>
              <Button variant="secondary" className="font-medium">
                <FaExternalLinkAlt />
                <span>Demo</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="flex-1 flex flex-col gap-10 justify-center">
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-primary text-3xl">
              {project.tituloProjeto}
            </h3>
            <span className="bg-card border p-3 text-primary rounded-xl capitalize">
              {project.papeis.map(
                (role, index) =>
                  `${role} ${index !== project.papeis.length - 1 ? " • " : ""}`,
              )}
            </span>
          </div>
          <div className="flex flex-col gap-3 leading-8 text-foreground dark:text-primary-foreground">
            <p>{project.descProblema}</p>
            <div className="border-b border-popover/50 my-2"></div>
            <p>{project.descSolucao}</p>
            <div className="border-b border-popover/50 my-2"></div>
            <p>{project.descConhecimentos}</p>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}

export default ProjectItem;

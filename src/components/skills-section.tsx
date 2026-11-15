import TechStackRow from "./tech-stack-row";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function SkillsSection() {
  const frontTechs: string[] = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "Shadcn/ui",
    "JavaFX",
  ];

  const backTechs: string[] = [
    "Node.js",
    "Fastify",
    "Python",
    "Flask",
    "Java",
    "API RESTful",
  ];

  const dataTechs: string[] = ["PostgreeSQL", "MySQL", "Prisma", "Docker"];

  return (
    <section
      id="skills"
      className="h-min-screen h-screen flex flex-col pt-25 w-[75%] gap-10"
    >
      <div className="flex flex-col w-full">
        <h3 className="h3-title mb-6">Stack de Habilidades</h3>
        <div className="flex gap-6 ">
          <TechStackRow
            title="Desenvolvimetno Frontend"
            techsList={frontTechs}
          />
          <TechStackRow title="Desenvolvimento Backend" techsList={backTechs} />
          <TechStackRow
            title="Database/Arquiteturas Software"
            techsList={dataTechs}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <Card className="rounded-xl flex-1">
          <CardTitle className="pl-8 text-[18px] font-semibold text-primary">
            Soft Skills
          </CardTitle>
          <CardContent className="flex flex-col gap-6 px-8 ">
            <div className="flex text-base">
              <p>
                Desenvolvi tais habilidades sendo product owner. Fui alguém
                mucho interessante, trabalhei pa carai, foi bem legal, descobri
                as coisas eba eba eba.
              </p>
              <div className="border-r mx-3"></div>
              <p>
                Desenvolvi tais habilidades sendo Scrum Master. Fui alguém mucho
                interessante, trabalhei pa carai, foi bem legal, descobri as
                coisas eba eba eba.
              </p>
            </div>
            <p className="text-base">
              Desenvolvi tais e tais habilidades trabalhando como dev team e
              tendo que trabalhar em grupo. Foi bem legal, eba eba eba. Muito
              interessante tudo isso, sabia?
            </p>
            <ul className="flex gap-2 flex-wrap">
              <li>
                <Badge>Trabalho em Equipe</Badge>
              </li>
              <li>
                <Badge>Proatividade</Badge>
              </li>
              <li>
                <Badge>Aprendizado Rápido</Badge>
              </li>
              <li>
                <Badge>Comunicação</Badge>
              </li>
              <li>
                <Badge>Inglês Avançado</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="flex-1 rounded-xl">
          <CardTitle className="pl-8 ">
            <h4 className="text-[18px] font-semibold  text-primary">
              Figma Designs
            </h4>
            <p>
              Clique nas imagens para poder saber mais sobre o intuito dos
              designs.
            </p>
          </CardTitle>
          <CardContent className="flex justify-center">
            <Carousel className="w-[80%]">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 flex flex-col gap-4 items-center">
                      <figure className="relative overflow-hidden rounded-xl w-full aspect-video">
                        <img
                          src="/muralPuma.png"
                          alt="login"
                          className="w-full h-full object-cover object-top z-10"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/30 to-transparent z-20 pointer-events-none" />
                      </figure>
                      <span className="bg-background px-5 text-foreground rounded-full border max-w-max -mt-10 p-2   font-mono z-30 top-[70%] ">
                        Puma
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default SkillsSection;

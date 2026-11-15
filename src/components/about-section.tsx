import CertificateCard from "./certificate-card";
import DegreesCard from "./degrees-card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-min h-screen flex flex-col pt-35 w-[75%] bg-[radial-gradient(52.78%_52.78%_at_50%_90.58%,rgba(184,56,49,0.26)_0%,rgba(59,4,12,0.00)_100%)] pb-20"
    >
      <div className="flex gap-15 mb-30">
        <div className="w-[40%]">
          <h4 className="dark:text-primary-foreground text-5xl mb-6 font-serif">
            Sobre mim
          </h4>
          <div>
            <p className="text-foreground leading-8">
              Falar um pouco mais sobre mim. Dar foco no desenvolvimento
              frontend, falar sobre o design UI/UX e como minha paixão pela arte
              interfere no meu aproveitamento disso.
            </p>
            <p className="text-foreground leading-8 mt-5">
              Falar um pouco sobre como eu trabalho. Qual o meu perfil pessoal,
              indicando aspectos positivos da minha personalidade.
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-6 flex-1">
          <DegreesCard />
          <DegreesCard />
          <DegreesCard />
        </ul>
      </div>

      <div className="flex gap-6 ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className=" py-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <CertificateCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default AboutSection;

import { Badge } from "./ui/badge";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { FaGraduationCap } from "react-icons/fa";

function DegreesCard() {
  return (
    <Card className="rounded-xl bg-card/80">
      <CardTitle className="px-8 flex flex-col gap-4">
        <CardDescription className="text-primary font-bold text-base  ">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center ">
              <FaGraduationCap
                size={20}
                className="bg-secondary/30 p-2 size-10 rounded-xl text-primary"
              />
              FATEC São José dos Campos - Prof Jessen Vidal
            </div>
            <Badge className="text-base font-serif p-4 text-primary bg-primary/10 border-primary/20">
              2025 à 2028
            </Badge>
          </div>
        </CardDescription>

        <h3 className="text-foreground text-base font-bold">
          Desenvolvimento de Software Multiplataforma
        </h3>
      </CardTitle>
    </Card>
  );
}

export default DegreesCard;

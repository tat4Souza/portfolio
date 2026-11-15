import TechCard from "./tech-card";
import { Card, CardContent, CardTitle } from "./ui/card";

function TechStackRow({
  title,
  techsList,
}: {
  title: string;
  techsList: string[];
}) {
  return (
    // <div className="flex flex-col gap-4 my-4 items-center w-[80%]">
    //   <span className="bg-card max-w-max border p-3 text-primary rounded-xl capitalize">
    //     {title}
    //   </span>
    //   <ul className="flex flex-wrap gap-y-6 gap-x-3 justify-center">
    //     {techsList.map((item, i) => (
    //       <TechCard title={item} key={i} />
    //     ))}
    //   </ul>
    // </div>
    <Card className="rounded-xl flex-1 bg-linear-to-t from-primary/10 to-transparent">
      <CardTitle className="pl-8 text-[18px] font-semibold text-foreground ">
        {title}
      </CardTitle>
      <CardContent>
        <ul className="flex flex-wrap gap-2">
          {techsList.map((item, i) => (
            <TechCard title={item} key={i} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default TechStackRow;

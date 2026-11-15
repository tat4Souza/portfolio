import { FaReact } from "react-icons/fa";
// import { Card, CardContent, CardHeader } from "./ui/card";

function TechCard({ title }: { title: string }) {
  return (
    // <li className="flex flex-col justify-center gap-3 items-center max-w-min">
    //   <Card className="rounded-xl border-t-3 border-sky-400 p-0 flex flex-row-reverse">
    //     <CardHeader className="pt-2 flex justify-center">
    //       <h4 className="capitalize font-medium text-sm text-sky-400">
    //         {title}
    //       </h4>
    //     </CardHeader>
    //     <CardContent className="pt-2 pb-4 flex justify-center">
    //       <div className="bg-popover/50 p-3 rounded-full border">
    //         <FaReact size={30} className="text-sky-400" />
    //       </div>
    //     </CardContent>
    //   </Card>
    // </li>
    <li className="bg-popover/70 p-2 rounded-full border border-foreground/15 flex items-center gap-2 text-foreground font-semibold hover:-translate-y-1 hover:bg-primary/30 hover:border-primary hover:scale-102 cursor-pointer transtiion-all ease-in duration-150">
      <FaReact />
      {title}
    </li>
  );
}

export default TechCard;

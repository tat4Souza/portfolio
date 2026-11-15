import type { ReactNode } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  children: ReactNode;
  className?: string;
  link?: boolean;
}

function CustomButton({ children, className, link }: CustomButtonProps) {
  return (
    <Button
      variant={!link ? "outline" : "ghost"}
      className={cn(
        { "bg-popover/50! cursor-pointer w-auto h-auto p-3": !link },
        className,
        { "bg-transparent p-0": link },
      )}
    >
      {link ? (
        <a
          href="#projects"
          className="bg-popover/50 cursor-pointer w-auto h-auto p-3 rounded-full border"
        >
          {children}
        </a>
      ) : (
        children
      )}
    </Button>
  );
}

export default CustomButton;

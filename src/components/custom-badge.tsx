import type { ReactNode } from "react";

function CustomBadge({ children }: { children: ReactNode }) {
  return (
    <span className="bg-primary text-primary-foreground py-2 px-6 rounded-full text-xs rounded-tl-none  font-semibold">
      {children}
    </span>
  );
}

export default CustomBadge;

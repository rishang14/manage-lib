import { cn } from "@/lib/utils";
import React from "react";

export const DesignedCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "container max-w-260 px-4 opacity-95 backdrop-blur-md",
        "md:mx-auto md:flex md:gap-4 md:rounded-2xl md:p-3",
        "md:from-neutral-700/40 md:to-neutral-900/50",
        "md:inset-ring md:inset-ring-[rgba(255,255,255,0.2)]",
        className,
      )}
    >
      {children}
    </div>
  );
};

"use client";

import { cn } from "@/lib/utils";

type PatternBackgroundProps = {
  variant?: "grid" | "brackets" | "dots";
  className?: string;
  children: React.ReactNode;
};

export function PatternBackground({
  variant = "grid",
  className,
  children,
}: PatternBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            variant === "grid"
              ? `linear-gradient(to right, currentColor 1px, transparent 1px),
                 linear-gradient(to bottom, currentColor 1px, transparent 1px)`
              : variant === "dots"
                ? "radial-gradient(circle, currentColor 1px, transparent 1px)"
                : "none",
          backgroundSize: variant === "grid" ? "48px 48px" : "24px 24px",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type PatternBackgroundProps = {
  variant?: "grid" | "mesh" | "dots";
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
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            variant === "grid"
              ? `linear-gradient(to right, currentColor 1px, transparent 1px),
                 linear-gradient(to bottom, currentColor 1px, transparent 1px)`
              : variant === "dots"
                ? "radial-gradient(circle, currentColor 1.5px, transparent 1.5px)"
                : "none",
          backgroundSize: variant === "grid" ? "64px 64px" : "32px 32px",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />
      {variant === "grid" && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 0%, currentColor 50%, transparent 100%)`,
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          aria-hidden
        />
      )}
      {variant === "mesh" && (
        <>
          <div className="pointer-events-none absolute -left-1/2 -top-1/2 h-full w-full rounded-full bg-primary/5 blur-[100px] dark:bg-primary/10" />
          <div className="pointer-events-none absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-primary/3 blur-[120px] dark:bg-primary/5" />
        </>
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

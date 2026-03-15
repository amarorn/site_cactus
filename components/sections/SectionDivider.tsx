"use client";

type SectionDividerProps = {
  variant?: "wave" | "organic" | "cactus-curve";
  flip?: boolean;
  className?: string;
};

export function SectionDivider({
  variant = "organic",
  flip = false,
  className = "",
}: SectionDividerProps) {
  const transform = flip ? "scaleY(-1)" : undefined;

  if (variant === "wave") {
    return (
      <div className={`w-full overflow-hidden ${className}`} aria-hidden>
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="block h-12 w-full sm:h-16"
          style={{ transform }}
        >
          <path
            fill="currentColor"
            d="M0,40 Q300,0 600,40 T1200,40 L1200,80 L0,80 Z"
            opacity={0.03}
          />
          <path
            fill="currentColor"
            className="text-primary"
            d="M0,50 Q300,10 600,50 T1200,50 L1200,80 L0,80 Z"
            opacity={0.08}
          />
        </svg>
      </div>
    );
  }

  if (variant === "cactus-curve") {
    return (
      <div className={`w-full overflow-hidden ${className}`} aria-hidden>
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="block h-10 w-full sm:h-14"
          style={{ transform }}
        >
          <path
            fill="currentColor"
            className="text-primary"
            d="M0,40 C200,0 400,60 600,30 C800,0 1000,50 1200,25 L1200,60 L0,60 Z"
            opacity={0.06}
          />
          <path
            fill="currentColor"
            className="text-graphite dark:text-white"
            d="M0,45 C250,5 450,55 600,35 C750,15 950,45 1200,30 L1200,60 L0,60 Z"
            opacity={0.04}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-20"
        style={{ transform }}
      >
        <path
          fill="currentColor"
          className="text-primary"
          d="M0,60 C150,20 350,80 600,40 C850,0 1050,60 1200,40 L1200,100 L0,100 Z"
          opacity={0.05}
        />
        <path
          fill="currentColor"
          className="text-graphite dark:text-white"
          d="M0,70 Q300,30 600,70 T1200,70 L1200,100 L0,100 Z"
          opacity={0.03}
        />
      </svg>
    </div>
  );
}

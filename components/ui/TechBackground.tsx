"use client";

type TechBackgroundProps = {
  className?: string;
};

export function TechBackground({ className = "" }: TechBackgroundProps) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
      aria-hidden
      style={{
        backgroundColor: "#020617",
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 100% 80% at 70% 20%,
              rgba(34, 197, 94, 0.12) 0%,
              rgba(22, 163, 74, 0.06) 35%,
              transparent 60%
            )
          `,
          filter: "blur(180px)",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `
            radial-gradient(
              circle at 50% 40%,
              rgba(34, 197, 94, 0.08) 0%,
              transparent 50%
            )
          `,
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}

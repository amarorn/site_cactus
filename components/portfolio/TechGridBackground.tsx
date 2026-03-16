"use client";

export function TechGridBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#0f172a",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 60% at 50% 40%,
              rgba(34, 197, 94, 0.12) 0%,
              rgba(22, 163, 74, 0.06) 40%,
              transparent 70%
            )
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%,
              rgba(34, 197, 94, 0.08) 0%,
              transparent 50%
            )
          `,
        }}
      />
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute inset-0 animate-portfolio-glow"
        style={{
          background: `
            radial-gradient(
              ellipse 100% 80% at 50% 30%,
              rgba(34, 197, 94, 0.06) 0%,
              transparent 60%
            )
          `,
        }}
      />
    </div>
  );
}

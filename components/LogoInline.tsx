"use client";

/**
 * Logo em texto/SVG inline para evitar 404 quando /brand/ nao existe.
 * Substitua por next/image quando tiver logo-primary.svg e logo-primary-dark.svg em public/brand/.
 */
export function LogoInline({
  className = "h-9",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const color = light ? "#ffffff" : "currentColor";
  return (
    <svg
      viewBox="0 0 220 50"
      className={className}
      aria-hidden
      fill="none"
    >
      <text
        x="0"
        y="36"
        fill={color}
        className="font-semibold text-[28px] tracking-tight"
        style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 600 }}
      >
        Cactus System
      </text>
    </svg>
  );
}

"use client";

/**
 * Logo em texto para evitar 404 quando /brand/ nao existe.
 * Substitua por next/image quando tiver logo-primary.svg e logo-primary-dark.svg em public/brand/.
 */
export function LogoInline({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={`font-semibold tracking-tight text-xl sm:text-2xl ${light ? "text-white" : "text-graphite dark:text-white"} ${className}`}
    >
      Cactus System
    </span>
  );
}

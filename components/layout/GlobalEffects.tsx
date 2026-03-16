"use client";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { TechBackground } from "@/components/ui/TechBackground";

const Particles = dynamic(
  () => import("@/components/effects/Particles").then((m) => ({ default: m.Particles })),
  { ssr: false }
);

const CursorGlow = dynamic(
  () => import("@/components/effects/CursorGlow").then((m) => ({ default: m.CursorGlow })),
  { ssr: false }
);

export function GlobalEffects() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const isPortfolio = pathname?.startsWith("/portfolio") ?? false;
  const isDark = resolvedTheme === "dark";

  if (!isPortfolio || !isDark) return null;

  return (
    <>
      <TechBackground />
      <Particles />
      <CursorGlow />
    </>
  );
}

"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  /** Para uso sobre fundo escuro (ex.: header com video) */
  variant?: "default" | "dark-bg";
};

export function ThemeToggle({ variant = "default" }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-graphite",
        variant === "dark-bg"
          ? "text-white/90 hover:bg-white/10"
          : "text-graphite hover:bg-graphite/10 dark:text-white dark:hover:bg-white/10"
      )}
      aria-label="Alternar tema"
      suppressHydrationWarning
    >
      {mounted ? (isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />) : <span className="h-5 w-5" />}
    </button>
  );
}

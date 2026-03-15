"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
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
      className="flex h-10 w-10 items-center justify-center rounded-lg text-graphite transition-colors hover:bg-graphite/10 dark:text-white dark:hover:bg-white/10"
      aria-label="Alternar tema"
      suppressHydrationWarning
    >
      {mounted ? (isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />) : <span className="h-5 w-5" />}
    </button>
  );
}

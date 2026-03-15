"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const logoSrc = isDark ? "/brand/logo-primary.svg" : "/brand/logo-primary-dark.svg";

  return (
    <Link
      href="/"
      className="relative flex items-center rounded-md px-2 -mx-2 py-1 -my-1 bg-white/80 dark:bg-graphite/90 supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-graphite/80"
      aria-label="Cactus System - início"
    >
      <Image
        src={logoSrc}
        alt="Cactus System"
        width={220}
        height={50}
        className="h-9 w-auto"
        priority
      />
    </Link>
  );
}

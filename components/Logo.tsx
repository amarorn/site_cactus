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
  const logoSrc = isDark ? "/brand/logo-primary-dark.png" : "/brand/logo-primary-light.png";

  return (
    <Link
      href="/"
      className="relative flex items-center"
      aria-label="Cactus System - início"
    >
      <Image
        src={logoSrc}
        alt="Cactus System"
        width={140}
        height={40}
        className="h-9 w-auto"
        priority
      />
    </Link>
  );
}

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
  // Versoes monocromaticas com fundo transparente para evitar caixa escura no header
  const logoSrc = isDark ? "/brand/logo-monochrome-white.png" : "/brand/logo-monochrome-black.png";

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

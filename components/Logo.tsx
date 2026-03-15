"use client";

import Link from "next/link";
import { LogoInline } from "@/components/LogoInline";

export function Logo() {
  return (
    <Link
      href="/"
      className="relative flex items-center rounded-md px-2 -mx-2 py-1 -my-1 bg-white/80 dark:bg-graphite/90 supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-graphite/80"
      aria-label="Cactus System - início"
    >
      <LogoInline className="h-9" />
    </Link>
  );
}

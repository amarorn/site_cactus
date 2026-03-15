"use client";

import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/"
      className="relative flex items-center rounded-md px-2 -mx-2 py-1 -my-1 bg-white/80 dark:bg-graphite/90 supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-graphite/80"
      aria-label="Cactus System - início"
    >
      <Image
        src="/brand/logo-primary-dark.svg"
        alt="Cactus System"
        width={220}
        height={50}
        className="h-9 w-auto block dark:hidden"
        priority
      />
      <Image
        src="/brand/logo-primary.svg"
        alt="Cactus System"
        width={220}
        height={50}
        className="h-9 w-auto hidden dark:block"
        priority
      />
    </Link>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  /** Quando true, usa sempre a logo clara (para fundo escuro, ex.: header com video) */
  onDark?: boolean;
};

export function Logo({ onDark = false }: LogoProps) {
  if (onDark) {
    return (
      <Link
        href="/"
        className="relative flex items-center rounded-md px-2 -mx-2 py-1 -my-1"
        aria-label="Cactus System - início"
      >
        <Image
          src="/brand/logo-primary.svg"
          alt="Cactus System"
          width={220}
          height={50}
          className="h-9 w-auto"
          priority
        />
      </Link>
    );
  }
  return (
    <Link
      href="/"
      className="relative flex items-center rounded-md px-2 -mx-2 py-1 -my-1"
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

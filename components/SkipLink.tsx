"use client";

import Link from "next/link";

const SKIP_TARGET_ID = "main-content";

export function SkipLink() {
  return (
    <Link
      href={`#${SKIP_TARGET_ID}`}
      className="fixed left-4 top-4 z-[100] rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-lg outline-none opacity-0 transition-opacity focus:opacity-100 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-graphite focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-graphite"
    >
      Pular para o conteúdo principal
    </Link>
  );
}

export { SKIP_TARGET_ID };

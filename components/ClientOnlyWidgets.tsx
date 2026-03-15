"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("@/components/CustomCursor").then((m) => ({ default: m.CustomCursor })),
  { ssr: false }
);

const WhatsAppFab = dynamic(
  () => import("@/components/WhatsAppFab").then((m) => ({ default: m.WhatsAppFab })),
  { ssr: false }
);

export function ClientOnlyWidgets() {
  return (
    <>
      <CustomCursor />
      <WhatsAppFab />
    </>
  );
}

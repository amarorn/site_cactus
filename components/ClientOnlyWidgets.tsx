"use client";

import dynamic from "next/dynamic";
import { A11yWidget } from "@/components/A11yWidget";

const CustomCursor = dynamic(
  () => import("@/components/CustomCursor").then((m) => ({ default: m.CustomCursor })),
  { ssr: false }
);

const WhatsAppFab = dynamic(
  () => import("@/components/WhatsAppFab").then((m) => ({ default: m.WhatsAppFab })),
  { ssr: false }
);

const ScrollProgress = dynamic(
  () => import("@/components/ui/ScrollProgress").then((m) => ({ default: m.ScrollProgress })),
  { ssr: false }
);

const ChatWidget = dynamic(
  () => import("@/components/chat/ChatWidget").then((m) => ({ default: m.ChatWidget })),
  { ssr: false }
);

export function ClientOnlyWidgets() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <WhatsAppFab />
      <ChatWidget />
      <A11yWidget />
    </>
  );
}

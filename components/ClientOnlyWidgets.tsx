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

// Habilitado se explicito ou quando build e na Vercel (API /api/chat disponivel)
const chatEnabled =
  process.env.NEXT_PUBLIC_CHAT_ENABLED === "true" ||
  process.env.NEXT_PUBLIC_VERCEL === "1";

export function ClientOnlyWidgets() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <WhatsAppFab />
      {chatEnabled && <ChatWidget />}
      <A11yWidget />
    </>
  );
}

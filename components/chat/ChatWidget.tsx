"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatPanel } from "./ChatPanel";
import { contact } from "@/content/contact";
import { cn } from "@/lib/utils";

const PANEL_HEIGHT = "min(90vh, 560px)";
const PANEL_WIDTH = "min(100vw - 2rem, 400px)";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-4 right-4 z-[90] flex flex-col rounded-2xl border border-graphite/10 dark:border-white/10 bg-white dark:bg-graphite overflow-hidden"
            style={{ height: PANEL_HEIGHT, width: PANEL_WIDTH }}
          >
            <ChatPanel
              onClose={() => setOpen(false)}
              whatsappNumber={contact.whatsapp}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed bottom-4 right-4 z-[89] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          open && "invisible"
        )}
        aria-label={open ? "Fechar chat" : "Abrir chat"}
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </>
  );
}

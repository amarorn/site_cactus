"use client";

import { cn } from "@/lib/utils";

type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
};

export function ChatMessage({ role, content, isStreaming }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex w-full",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm",
          isUser
            ? "bg-primary text-white"
            : "bg-graphite/10 dark:bg-graphite/30 text-graphite dark:text-white"
        )}
      >
        <p className="whitespace-pre-wrap break-words">{content || " "}</p>
        {isStreaming && (
          <span className="inline-block h-3 w-0.5 animate-pulse bg-current align-middle" />
        )}
      </div>
    </div>
  );
}

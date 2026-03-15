"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string };

type ChatPanelProps = {
  onClose: () => void;
  whatsappNumber?: string;
};

export function ChatPanel({ onClose, whatsappNumber }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streamingContent, setStreamingContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingContent]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;

    setInput("");
    setError(null);
    const newUserMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, newUserMessage]);
    setStreamingContent("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, newUserMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `Erro ${res.status}`);
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error("No response body");

      let full = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        full += chunk;
        setStreamingContent(full);
      }

      setMessages((prev) => [...prev, { role: "assistant", content: full }]);
      setStreamingContent("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro ao enviar mensagem.");
    } finally {
      setIsLoading(false);
    }
  }

  const showWelcome = messages.length === 0 && !streamingContent;

  return (
    <div className="flex h-full flex-col bg-white dark:bg-graphite shadow-xl">
      <div className="flex items-center justify-between border-b border-graphite/10 dark:border-white/10 px-4 py-3">
        <h2 className="text-sm font-semibold text-graphite dark:text-white">
          Assistente Cactus
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-2 text-graphite/70 hover:bg-graphite/10 dark:text-white/70 dark:hover:bg-white/10"
          aria-label="Fechar chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={listRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {showWelcome && (
          <div className="text-sm text-graphite/70 dark:text-white/70">
            <p>Olá! Sou o assistente da Cactus System.</p>
            <p className="mt-2">
              Posso tirar dúvidas sobre nossos serviços (mobile, web, dados, IA) e
              sugerir o melhor para o seu projeto. Como posso ajudar?
            </p>
            {whatsappNumber && (
              <p className="mt-3">
                Prefere falar direto?{" "}
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Abrir WhatsApp
                </a>
              </p>
            )}
          </div>
        )}
        {messages.map((m, i) => (
          <ChatMessage key={i} role={m.role} content={m.content} />
        ))}
        {streamingContent && (
          <ChatMessage
            role="assistant"
            content={streamingContent}
            isStreaming
          />
        )}
        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t border-graphite/10 dark:border-white/10 p-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 rounded-xl border border-graphite/20 dark:border-white/20 bg-white dark:bg-graphite/50 px-4 py-2.5 text-sm text-graphite dark:text-white placeholder:text-graphite/50 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white hover:bg-primary-hover disabled:opacity-50"
            aria-label="Enviar"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

import { NextRequest } from "next/server";
import { runRAGStream, seedVectorStore } from "@/lib/rag/pipeline";
import { getDefaultVectorStore } from "@/lib/rag/vector-store";
import { openAIStreamToTextStream } from "@/lib/rag/stream-transform";
import { knowledgeChunks } from "@/content/knowledge";

export const runtime = "nodejs";
export const maxDuration = 30;

type Message = { role: "user" | "assistant"; content: string };

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "OPENAI_API_KEY not configured" }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: { messages?: Message[] };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  const lastUser = messages.filter((m) => m.role === "user").pop();
  const userMessage = lastUser?.content?.trim();
  if (!userMessage) {
    return new Response(JSON.stringify({ error: "Missing user message" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const history = messages.slice(0, -1).map((m) => ({
    role: m.role as "user" | "assistant",
    content: m.content,
  }));

  try {
    const { getPineconeStoreIfConfigured } = await import("@/lib/rag/pinecone-store");
    const pinecone = getPineconeStoreIfConfigured();
    const store = pinecone ?? getDefaultVectorStore();
    if (!pinecone) {
      const mem = getDefaultVectorStore();
      if (mem.size() === 0) {
        await seedVectorStore(knowledgeChunks, { apiKey, vectorStore: mem });
      }
    }
    const openAIStream = await runRAGStream(userMessage, history, {
      apiKey,
      vectorStore: store,
      topK: 5,
    });
    const stream = openAIStreamToTextStream(openAIStream);

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "RAG failed";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

import type { VectorStore } from "./types";
import { getDefaultVectorStore } from "./vector-store";
import { embedText, embedTexts } from "./embed";

const OPENAI_CHAT_API = "https://api.openai.com/v1/chat/completions";
const CHAT_MODEL = "gpt-4o-mini";

const SYSTEM_PROMPT = `Você é o assistente virtual da Cactus System, uma empresa de tecnologia em Natal/RN que oferece desenvolvimento de software, engenharia de dados e IA.

Suas funções:
- Responder dúvidas sobre os serviços da empresa (mobile, web, sistemas, arquitetura de dados, engenharia de dados, analytics, ciência de dados, IA, LLMs).
- Sugerir serviços com base no que o usuário precisa.
- Ser cordial e objetivo; se não souber, indique que a equipe pode ajudar pelo contato ou WhatsApp.

Use o contexto abaixo (retirado da base de conhecimento) para basear suas respostas. Se o contexto não tiver a informação, responda de forma genérica e sugira falar com um especialista.

Quando o usuário demonstrar interesse em falar com a equipe, ofereça o contato por WhatsApp ou o formulário do site e, se ele quiser, peça nome e e-mail para qualificação.`;

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

export type RAGOptions = {
  apiKey: string;
  vectorStore?: VectorStore;
  topK?: number;
};

function buildContext(contextChunks: { text: string }[]): string {
  if (contextChunks.length === 0) return "(Nenhum contexto recuperado.)";
  return contextChunks.map((c) => c.text.trim()).join("\n\n---\n\n");
}

/**
 * RAG: embed query, search, build messages with context, call LLM.
 * Returns the full assistant message (no stream).
 */
export async function runRAG(
  userMessage: string,
  history: ChatMessage[],
  options: RAGOptions
): Promise<string> {
  const store = options.vectorStore ?? getDefaultVectorStore();
  const topK = options.topK ?? 5;

  const queryEmbedding = await embedText(userMessage, options.apiKey);
  const results = await store.search(queryEmbedding, topK);
  const context = buildContext(results.map((r) => r.chunk));

  const systemWithContext = `${SYSTEM_PROMPT}\n\n## Contexto\n${context}`;
  const messages: ChatMessage[] = [
    { role: "system", content: systemWithContext },
    ...history.filter((m) => m.role !== "system"),
    { role: "user", content: userMessage },
  ];

  const res = await fetch(OPENAI_CHAT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${options.apiKey}`,
    },
    body: JSON.stringify({
      model: CHAT_MODEL,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
      max_tokens: 1024,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Chat failed: ${res.status} ${err}`);
  }

  const data = (await res.json()) as { choices: { message?: { content?: string } }[] };
  const content = data.choices[0]?.message?.content ?? "";
  return content;
}

/**
 * RAG with streaming: same as runRAG but streams the assistant reply.
 */
export async function runRAGStream(
  userMessage: string,
  history: ChatMessage[],
  options: RAGOptions
): Promise<ReadableStream<Uint8Array>> {
  const store = options.vectorStore ?? getDefaultVectorStore();
  const topK = options.topK ?? 5;

  const queryEmbedding = await embedText(userMessage, options.apiKey);
  const results = await store.search(queryEmbedding, topK);
  const context = buildContext(results.map((r) => r.chunk));

  const systemWithContext = `${SYSTEM_PROMPT}\n\n## Contexto\n${context}`;
  const messages: ChatMessage[] = [
    { role: "system", content: systemWithContext },
    ...history.filter((m) => m.role !== "system"),
    { role: "user", content: userMessage },
  ];

  const res = await fetch(OPENAI_CHAT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${options.apiKey}`,
    },
    body: JSON.stringify({
      model: CHAT_MODEL,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
      max_tokens: 1024,
      temperature: 0.7,
      stream: true,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Chat stream failed: ${res.status} ${err}`);
  }

  const body = res.body;
  if (!body) throw new Error("No response body");

  return body;
}

export type SeedOptions = {
  apiKey: string;
  vectorStore?: VectorStore;
};

/**
 * Seed vector store with knowledge chunks. Call once at startup or via script.
 */
export async function seedVectorStore(
  chunks: { id: string; text: string; metadata?: Record<string, string> }[],
  options: SeedOptions
): Promise<void> {
  const store = options.vectorStore ?? getDefaultVectorStore();
  const texts = chunks.map((c) => c.text);
  const embeddings = await embedTexts(texts, options.apiKey);
  const docs = chunks.map((chunk, i) => ({
    ...chunk,
    embedding: embeddings[i],
  }));
  await store.add(docs);
}

import type { VectorStore, VectorDocument, VectorStoreResult } from "./types";

/**
 * Pinecone vector store adapter. Implements VectorStore for use in the RAG pipeline.
 *
 * Env: PINECONE_API_KEY, PINECONE_INDEX, PINECONE_HOST (index host, e.g. https://xxx.svc.region.pinecone.io)
 * See: https://docs.pinecone.io/reference/api/data-plane
 */
export type PineconeStoreOptions = {
  apiKey: string;
  indexName: string;
  host: string;
  namespace?: string;
};

async function pineconeFetch(
  host: string,
  path: string,
  options: RequestInit & { apiKey: string }
): Promise<Response> {
  const { apiKey, ...init } = options;
  return fetch(`${host}${path}`, {
    ...init,
    headers: {
      "Api-Key": apiKey,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
}

/**
 * Returns a Pinecone-backed VectorStore. Requires PINECONE_API_KEY and PINECONE_INDEX.
 * Index must use dimension 1536 (OpenAI text-embedding-3-small) and cosine metric.
 */
export function createPineconeStore(options: PineconeStoreOptions): VectorStore {
  const { apiKey, host, namespace = "cactus" } = options;

  return {
    async add(docs: VectorDocument[]): Promise<void> {
      const vectors = docs.map((d) => ({
        id: d.id,
        values: d.embedding,
        metadata: {
          text: d.text,
          ...(d.metadata ?? {}),
        },
      }));
      const res = await pineconeFetch(
        host,
        "/vectors/upsert",
        {
          apiKey,
          method: "POST",
          body: JSON.stringify({ vectors, namespace }),
        }
      );
      if (!res.ok) throw new Error(`Pinecone upsert failed: ${res.status}`);
    },

    async search(embedding: number[], topK: number = 5): Promise<VectorStoreResult[]> {
      const res = await pineconeFetch(
        host,
        "/query",
        {
          apiKey,
          method: "POST",
          body: JSON.stringify({
            vector: embedding,
            topK,
            namespace,
            includeMetadata: true,
          }),
        }
      );
      if (!res.ok) throw new Error(`Pinecone query failed: ${res.status}`);
      const data = (await res.json()) as {
        matches?: { id: string; score?: number; metadata?: { text?: string } }[];
      };
      const matches = data.matches ?? [];
      return matches.map((m) => ({
        chunk: {
          id: m.id,
          text: (m.metadata?.text as string) ?? "",
          metadata: m.metadata as VectorDocument["metadata"],
        },
        score: m.score,
      }));
    },
  };
}

/**
 * Use when env PINECONE_API_KEY, PINECONE_INDEX and PINECONE_HOST are set; otherwise returns null.
 */
export function getPineconeStoreIfConfigured(): VectorStore | null {
  const apiKey = process.env.PINECONE_API_KEY;
  const indexName = process.env.PINECONE_INDEX;
  const host = process.env.PINECONE_HOST;
  if (!apiKey || !indexName || !host) return null;
  return createPineconeStore({ apiKey, indexName, host });
}

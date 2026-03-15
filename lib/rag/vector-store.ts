import type { VectorStore, VectorDocument, VectorStoreResult } from "./types";

function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom === 0 ? 0 : dot / denom;
}

/**
 * In-memory vector store for development. Replace with Pinecone/Weaviate in production.
 */
export class InMemoryVectorStore implements VectorStore {
  private docs: VectorDocument[] = [];

  async add(documents: VectorDocument[]): Promise<void> {
    this.docs.push(...documents);
  }

  async search(embedding: number[], topK: number = 5): Promise<VectorStoreResult[]> {
    const withScore = this.docs.map((d) => ({
      chunk: { id: d.id, text: d.text, metadata: d.metadata },
      score: cosineSimilarity(d.embedding, embedding),
    }));
    withScore.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
    return withScore.slice(0, topK);
  }

  size(): number {
    return this.docs.length;
  }
}

let defaultStore: InMemoryVectorStore | null = null;

export function getDefaultVectorStore(): InMemoryVectorStore {
  if (!defaultStore) defaultStore = new InMemoryVectorStore();
  return defaultStore;
}

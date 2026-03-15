export type DocumentChunk = {
  id: string;
  text: string;
  metadata?: {
    source?: string;
    serviceId?: string;
    title?: string;
  };
};

export type VectorDocument = DocumentChunk & {
  embedding: number[];
};

export type VectorStoreResult = {
  chunk: DocumentChunk;
  score?: number;
};

export interface VectorStore {
  add(docs: VectorDocument[]): Promise<void>;
  search(embedding: number[], topK?: number): Promise<VectorStoreResult[]>;
}

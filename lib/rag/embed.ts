const OPENAI_EMBED_API = "https://api.openai.com/v1/embeddings";
const EMBED_MODEL = "text-embedding-3-small";

export async function embedText(text: string, apiKey: string): Promise<number[]> {
  const res = await fetch(OPENAI_EMBED_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ input: text.slice(0, 8192), model: EMBED_MODEL }),
  });
  if (!res.ok) {
    const errText = await res.text();
    if (res.status === 401) {
      throw new Error(
        "OpenAI API key invalid or revoked. Set a valid OPENAI_API_KEY (see https://platform.openai.com/account/api-keys)."
      );
    }
    throw new Error(`Embedding failed: ${res.status} ${errText.slice(0, 200)}`);
  }
  const data = (await res.json()) as { data: { embedding: number[] }[] };
  return data.data[0].embedding;
}

export async function embedTexts(texts: string[], apiKey: string): Promise<number[][]> {
  const res = await fetch(OPENAI_EMBED_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ input: texts.map((t) => t.slice(0, 8192)), model: EMBED_MODEL }),
  });
  if (!res.ok) {
    const errText = await res.text();
    if (res.status === 401) {
      throw new Error(
        "OpenAI API key invalid or revoked. Set a valid OPENAI_API_KEY (see https://platform.openai.com/account/api-keys)."
      );
    }
    throw new Error(`Embedding failed: ${res.status} ${errText.slice(0, 200)}`);
  }
  const data = (await res.json()) as { data: { embedding: number[] }[] };
  return data.data.map((d) => d.embedding);
}

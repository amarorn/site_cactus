const encoder = new TextEncoder();

/**
 * Consumes OpenAI SSE stream and yields plain text content chunks.
 */
export async function* readOpenAIStream(
  stream: ReadableStream<Uint8Array>
): AsyncGenerator<string, void, unknown> {
  const decoder = new TextDecoder();
  const reader = stream.getReader();
  let buffer = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        if (line.startsWith("data: ") && line !== "data: [DONE]") {
          try {
            const json = JSON.parse(line.slice(6)) as {
              choices?: { delta?: { content?: string } }[];
            };
            const content = json.choices?.[0]?.delta?.content;
            if (typeof content === "string" && content) yield content;
          } catch {
            // ignore
          }
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}

/**
 * Wraps OpenAI stream as a ReadableStream of UTF-8 text chunks (content only).
 */
export function openAIStreamToTextStream(stream: ReadableStream<Uint8Array>): ReadableStream<Uint8Array> {
  return new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of readOpenAIStream(stream)) {
          controller.enqueue(encoder.encode(chunk));
        }
      } catch (e) {
        controller.error(e);
      } finally {
        controller.close();
      }
    },
  });
}

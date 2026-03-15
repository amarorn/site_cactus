# Arquitetura do assistente conversacional

Assistente para qualificação de leads e respostas sobre serviços, com RAG e integração WhatsApp.

## Stack

- **Next.js** – App Router, API Routes.
- **LLM / Embeddings** – OpenAI (`text-embedding-3-small`, `gpt-4o-mini`). Substituível por Claude via mesma interface.
- **Vector DB** – Interface `VectorStore`; implementações: **InMemoryVectorStore** (dev), **Pinecone** (`lib/rag/pinecone-store.ts`). Weaviate: implementar mesmo contrato e injetar no pipeline.
- **LangChain** – Opcional: pode orquestrar o mesmo fluxo (retriever + prompt + LLM) em `lib/rag`; o pipeline atual é explícito (embed → search → context → LLM) e compatível com LangChain retriever/chain ao migrar.
- **WhatsApp** – Link `wa.me` no widget; API Business (webhook) para receber/enviar mensagens em fases futuras.

## Visão geral

```
[Usuário] → Chat Widget (frontend)
                ↓
            POST /api/chat (mensagem + histórico)
                ↓
            RAG Pipeline
                ├── Embedding da pergunta (OpenAI)
                ├── Busca vetorial (Pinecone / Weaviate / in-memory)
                ├── Recuperação de contexto (top-k chunks)
                ├── LLM (OpenAI/Claude) com contexto + system prompt
                └── Resposta em streaming
                ↓
            [Opcional] Detecção de lead → POST /api/lead
                ↓
            [Opcional] CTA WhatsApp com pré-preenchimento
```

## Frontend

- **ChatWidget:** botão flutuante (canto inferior direito) que abre o painel de chat.
- **Conversation UI:** lista de mensagens (user/assistant), input de texto, indicador de “digitando” durante streaming.
- **Streaming:** `fetch` com `ReadableStream`; leitura de chunks (SSE ou newline-delimited JSON) e atualização incremental da mensagem do assistente.
- **Lead capture:** quando o usuário demonstra interesse (ex.: “quero falar com um especialista”), o assistente pode pedir nome/e-mail ou exibir CTA para WhatsApp.

## Backend

### API Routes

| Rota | Método | Uso |
|------|--------|-----|
| `/api/chat` | POST | Recebe `{ messages: { role, content }[] }`, executa RAG, retorna stream de texto. |
| `/api/lead` | POST | Recebe `{ name?, email?, phone?, message?, source }`, persiste lead (DB/CRM/webhook). |
| `/api/chat` (opcional) | GET | Health check ou status do pipeline. |

### RAG Pipeline

1. **Embedding da pergunta:** modelo de embeddings (ex.: OpenAI `text-embedding-3-small`) gera vetor da última mensagem do usuário.
2. **Busca vetorial:** consulta ao vector store com o vetor; retorno dos top-k documentos/chunks mais similares (ex.: k=5).
3. **Contexto:** concatenação dos textos recuperados em um bloco “contexto” para o prompt.
4. **LLM:** system prompt com instruções (tom, foco em serviços Cactus, qualificação de lead, sugestão de WhatsApp) + contexto RAG + histórico da conversa; resposta em streaming (OpenAI `stream: true`).
5. **Pós-processamento (opcional):** parsing da resposta para detectar intenção de lead e acionar `/api/lead` ou sugerir link do WhatsApp.

### Vector store

- **Desenvolvimento:** `InMemoryVectorStore` (`lib/rag/vector-store.ts`); seed automático na primeira requisição a partir de `content/knowledge.ts`.
- **Produção:** `lib/rag/pinecone-store.ts` – `createPineconeStore()`, `getPineconeStoreIfConfigured()`. Env: `PINECONE_API_KEY`, `PINECONE_INDEX`, `PINECONE_HOST` (host do index). Weaviate: criar adapter que implemente `VectorStore` e usar em `RAGOptions.vectorStore`.
- **Base de conhecimento:** `content/knowledge.ts` – chunks de empresa, serviços (`homeServices`), FAQ.

### Lead capture

- Dados: nome, e-mail, telefone (opcional), mensagem livre, source (ex.: `chat_widget`).
- Fluxo: frontend envia para `/api/lead` quando o usuário preenche formulário ou quando o assistente identifica interesse e o usuário confirma.
- Integração: salvar em DB, enviar para CRM ou webhook (Zapier, Make, etc.).

### WhatsApp

- **Link direto:** `https://wa.me/<número>?text=<mensagem codificada>` com texto pré-preenchido (ex.: “Olá, vim pelo site e gostaria de…”).
- **API WhatsApp Business:** webhook para receber mensagens e enviar respostas; opcional para fases posteriores.

## Pipeline (código RAG)

Fluxo implementado em `lib/rag/pipeline.ts` e usado em `app/api/chat/route.ts`:

1. **Embedding:** `lib/rag/embed.ts` – `embedText(userMessage)` via OpenAI Embeddings.
2. **Busca:** `vectorStore.search(embedding, topK)` – retorna chunks mais similares (cosseno no in-memory; Pinecone usa índice configurado).
3. **Contexto:** `buildContext(results)` – concatena `chunk.text` dos resultados.
4. **LLM:** system prompt fixo + “## Contexto\n” + contexto + histórico + última mensagem; `POST` para OpenAI Chat Completions com `stream: true`.
5. **Stream:** `lib/rag/stream-transform.ts` – lê SSE da OpenAI, extrai `choices[0].delta.content`, reexpõe como `ReadableStream` de texto UTF-8.

Troca por **LangChain:** usar `OpenAIEmbeddings`, retriever sobre o mesmo `VectorStore`, `ChatPromptTemplate` com variável `context`, `ChatOpenAI` com `.stream()` e encadear com `.pipe()`; a API route continuaria consumindo o stream e enviando ao cliente.

## Segurança e limites

- Validar e sanitizar entrada em `/api/chat` e `/api/lead`.
- Rate limit por IP ou por sessionId em `/api/chat`.
- `OPENAI_API_KEY` apenas no servidor; nunca expor no client.
- Dados de lead tratados conforme LGPD (aviso, consentimento, armazenamento seguro).

# Secrets do GitHub (Actions)

Criar em: **Repositorio** > **Settings** > **Secrets and variables** > **Actions** > **New repository secret**.

Use o **nome** exato abaixo; o **valor** e o que voce cola (copie do seu `.env.local` ou das fontes indicadas).

---

## Obrigatorios para o deploy (GitHub Pages)

Usados no job **build** para o site estatico ter Firebase e verificacao Google.

| Nome do secret | Onde pegar o valor |
|----------------|--------------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase Console > Project settings > General > Your apps > apiKey |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Console > mesmo lugar > authDomain (ex.: `seu-projeto.firebaseapp.com`) |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Console > mesmo lugar > projectId |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase Console > mesmo lugar > storageBucket (ex.: `seu-projeto.firebasestorage.app`) |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase Console > mesmo lugar > messagingSenderId |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase Console > mesmo lugar > appId |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Firebase Console > mesmo lugar > measurementId (ex.: `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console > Verificacao de propriedade > meta tag > valor do `content="AQUI"` (pode ser vazio) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 > Admin > Fluxos de dados > ID de medicao (ex.: `G-KEE4D49L62`). Pode ser o mesmo do Firebase measurementId. Vazio = GA desativado. |

---

## Opcional: Chromatic (Storybook)

So precisa se quiser que o job **chromatic** rode e publique no Chromatic.

| Nome do secret | Onde pegar o valor |
|----------------|--------------------|
| `CHROMATIC_PROJECT_TOKEN` | chromatic.com > seu projeto > Manage > Configure > Project token |

---

## Nao usados no deploy estatico (GitHub Pages)

Estes sao usados em **API routes** (chat, lead, RAG). No deploy estatico (Pages) as APIs nao rodam; so use se futuramente fizer deploy em Vercel/Node.

| Nome do secret | Uso |
|----------------|-----|
| `OPENAI_API_KEY` | Assistente conversacional (API route `/api/chat`) |
| `LEAD_WEBHOOK_URL` | Envio de leads (API route `/api/lead`) |
| `PINECONE_API_KEY` | Vector store do RAG (opcional) |
| `PINECONE_INDEX` | Nome do indice Pinecone |
| `PINECONE_HOST` | URL do host (ex.: `https://xxx.svc.region.pinecone.io`) |

---

## Resumo rapido

1. Abra o repo no GitHub > **Settings** > **Secrets and variables** > **Actions**.
2. **New repository secret** para cada linha da tabela "Obrigatorios para o deploy".
3. Copie os valores do seu `.env.local` (ou do Firebase Console) e cole no campo **Value** (um secret por vez).
4. Opcional: crie `CHROMATIC_PROJECT_TOKEN` se for usar Chromatic.

Os valores nunca aparecem nos logs das Actions.

# Personalização dinâmica (B2B)

Segmentação de visitantes e conteúdo dinâmico na home (hero, serviços, cases, depoimentos).

## Segmentos

| Segmento     | Detecção |
|-------------|----------|
| **new**     | Primeira visita (sem cookie de sessão ou visitCount <= 1). |
| **returning** | visitCount > 1, sem sinal de enterprise/startup. |
| **enterprise** | UTM/campaign com "enterprise", "corporativo", "escala"; ou páginas como data-arch, governança. |
| **startup** | UTM/campaign com "startup", "mvp", "produto"; ou páginas mobile/mvp/produto. |
| **default** | Fallback quando não há sinal. |

## Fontes de dados

- **Cookies:** `cactus_session` (sessão: firstVisit, visitCount, paths, UTM) e `cactus_segment` (segmento atual). Middleware atualiza a cada request.
- **UTM:** `utm_campaign`, `utm_source`, `utm_medium`, `utm_content` na URL para campanhas e audience.
- **Comportamento:** paths visitados (últimos N) para inferir enterprise vs startup.
- **Geo:** `request.geo` (Vercel) ou header `x-vercel-ip-country` para uso futuro (ex.: conteúdo por região).
- **Referrer:** disponível no request para listas de domínios enterprise (não usado na lógica atual).

## Middleware

`middleware.ts` na raiz:

1. Lê cookie `cactus_session` e `cactus_segment`.
2. Monta `PersonalizationInput` (session, UTM, pathname, country, referrer).
3. Chama `inferAudience` e `computeSegment`.
4. Atualiza sessão com `updateSession` e grava cookies.
5. Define headers `x-segment` e `x-audience` na response (úteis para logs/analytics).

O matcher exclui estáticos e API para não rodar em todo request.

## Lógica de segmentação

- **lib/personalization/segment.ts:** `inferAudience()` (enterprise | startup | default), `computeSegment()` (new | returning | enterprise | startup | default), `updateSession()` (payload para cookie).
- **lib/personalization/cookies.ts:** nomes de cookies, parse/serialize, atributos (path, maxAge, sameSite).

## Conteúdo dinâmico

- **content/personalization.ts:** `heroBySegment` (overline, headline, subheadline por segmento), `caseStudyFocus` (clientes em destaque), `serviceFocus` (IDs de serviços na ordem desejada), `testimonialsBySegment`.
- **Hero:** `HeroSection` usa `usePersonalization()` e `heroBySegment[segment]`.
- **Serviços:** `ServiceGrid` reordena `homeServices` com `serviceFocus[segment]` e mostra os 6 primeiros.
- **Cases:** `DynamicCaseStudies` filtra `cases` por `caseStudyFocus[segment]`.
- **Depoimentos:** `DynamicTestimonials` renderiza `testimonialsBySegment[segment]`.

## Provider e leitura do segmento

- **Layout (RSC):** `await cookies()` e `cookieStore.get(getSegmentCookieName())?.value`; valida e passa para `PersonalizationProvider(segment)`.
- **Client:** `usePersonalization()` retorna o segmento atual (default se fora do provider).

## Redis (sessão persistente)

Hoje a sessão vive só em cookie. Para memória entre dispositivos ou servidor:

1. Criar **lib/personalization/redis.ts** (ou usar Vercel KV) com `getSession(sessionId)`, `setSession(sessionId, payload)`.
2. Gerar um `sessionId` estável (ex.: cookie `cactus_sid` com UUID) no primeiro request.
3. No middleware: se tiver Redis, ler sessão por `sessionId`; senão, usar cookie `cactus_session` como hoje. Ao final, escrever em Redis e manter cookie de sessão para fallback.
4. TTL sugerido: 365 dias para o payload de segmentação.

Exemplo de interface:

```ts
// lib/personalization/session-store.ts
export type SessionStore = {
  get(sessionId: string): Promise<SessionPayload | null>;
  set(sessionId: string, payload: SessionPayload, ttlSeconds?: number): Promise<void>;
};
// Implementar com Redis/Vercel KV e injetar no middleware (via env).
```

## Teste rápido

- **Enterprise:** `/?utm_campaign=enterprise` ou `/?utm_content=corporativo` → hero “Arquitetura de dados para escala enterprise”.
- **Startup:** `/?utm_campaign=startup` → hero “Construa seu produto com engenharia de alto nível”.
- **Returning:** visitar a home duas vezes (mesmo browser) → segmento “returning” e subheadline de volta.

# SEO e estrutura de páginas

Otimização para motores de busca e citação por LLMs: dados estruturados, hierarquia de headings e performance.

## 1. Dados estruturados (schema.org)

O layout raiz injeta um único `application/ld+json` com `@graph` contendo:

### Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://cactussystems.com.br/#organization",
  "name": "Cactus System",
  "description": "...",
  "url": "https://cactussystems.com.br",
  "logo": "https://cactussystems.com.br/brand/logo-primary.svg",
  "email": "contato@cactussystems.com.br",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Natal",
    "addressRegion": "RN",
    "addressCountry": "BR"
  },
  "areaServed": { "@type": "Country", "name": "Brasil" }
}
```

Gerado em `lib/seo/schema.ts` → `buildOrganizationSchema()`.

### Product (ItemList de serviços)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Serviços Cactus System",
  "numberOfItems": 9,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "@id": "https://cactussystems.com.br/servicos#mobile",
        "name": "Aplicativos mobile",
        "description": "...",
        "provider": { "@id": "https://cactussystems.com.br/#organization" }
      }
    }
  ]
}
```

Gerado em `lib/seo/schema.ts` → `buildProductSchema()` (usa `content/services.ts`).

### FAQ

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quais são os principais serviços da Cactus System?",
      "acceptedAnswer": { "@type": "Answer", "text": "..." }
    }
  ]
}
```

Gerado em `lib/seo/schema.ts` → `buildFAQSchema()`; conteúdo em `content/faq.ts`.

### Article (páginas de conteúdo/blog)

Para páginas de artigo ou case como artigo, use `buildArticleSchema()` e injete no `<head>` da página:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título do artigo",
  "description": "Resumo",
  "url": "https://cactussystems.com.br/...",
  "datePublished": "2026-01-15",
  "dateModified": "2026-01-15",
  "author": { "@type": "Organization", "name": "Cactus System" },
  "publisher": { "@id": "https://cactussystems.com.br/#organization" }
}
```

### Review (depoimentos)

Para depoimentos qualificados como avaliação, use `buildReviewSchema()`:

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": { "@type": "Product", "name": "Serviços Cactus" },
  "author": { "@type": "Person", "name": "Nome" },
  "reviewBody": "Texto do depoimento.",
  "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
}
```

---

## 2. Estrutura da home (page structure)

Ordem das seções para SEO e leitura por LLMs:

| Ordem | Seção              | Componente          | Conteúdo principal                          |
|-------|--------------------|---------------------|---------------------------------------------|
| 1     | Hero               | HeroSection         | Título, subtítulo, CTA                      |
| 2     | Clientes           | ClientStrip         | Logos de clientes                           |
| 3     | Serviços           | ServiceGrid         | Lista de serviços (Product schema)         |
| 4     | Use cases          | ProcessTimeline     | Metodologia / casos de uso                  |
| 5     | Technical stack    | TechStack           | Tecnologias e ferramentas                   |
| 6     | Case studies       | DynamicCaseStudies  | Cases por segmento                          |
| 7     | Depoimentos        | DynamicTestimonials | Citações (Review schema se aplicável)       |
| 8     | Diferenciais       | WhyCactus           | Por que a Cactus                            |
| 9     | Localização        | LocationSection     | Sede e cobertura                           |
| 10    | FAQ                | FAQSection          | Perguntas em H2 + respostas + tabela        |
| 11    | CTA final          | CTASection          | Contato / próximos passos                   |

Cada seção deve ter um **H2** (ou H1 no hero) claro; subsections com **H3** quando fizer sentido. O FAQ usa **H3 por pergunta** e respostas curtas para facilitar citação.

---

## 3. Otimização para citação (LLM)

- **Headings em forma de pergunta:** na FAQ, cada pergunta é um H3 (`content/faq.ts` + `FAQSection`).
- **Respostas curtas:** parágrafo único por pergunta; evite blocos longos sem quebra.
- **Tabela técnica:** `FAQSection` inclui uma tabela (tópico × resposta resumida) para resumos rápidos.
- **Schema FAQPage:** mesmo conteúdo da FAQ em JSON-LD para rich results e uso por assistentes.

---

## 4. Performance (LCP & assets)

- **LCP < 1,5s:** Hero sem imagem pesada (vídeo em background é lazy/controlado); fontes com `next/font` (Poppins) para evitar FOIT. Manter conteúdo above-the-fold enxuto.
- **Imagens:** `next.config.ts` → `images.formats: ["image/webp", "image/avif"]` para servir WebP/AVIF quando o Next Image Optimization estiver disponível. Em `output: "export"`, o export estático gera os formatos configurados para imaguras locais.
- **Code splitting:** seções da home carregadas com `dynamic(..., { ssr: true })` para chunks separados; reduz JS inicial.
- **CDN:** em deploy (Vercel, Cloudflare Pages, etc.), usar CDN do provedor para estáticos e cache de headers adequados. Domínio customizado e HTTPS já configurados.

---

## 5. Arquivos envolvidos

| Arquivo | Uso |
|---------|-----|
| `lib/seo/schema.ts` | Organization, Product (ItemList), FAQ, Article, Review |
| `components/JsonLd.tsx` | Injeção do @graph no layout |
| `content/faq.ts` | Perguntas e respostas da FAQ |
| `components/sections/FAQSection.tsx` | Bloco FAQ com H2/H3, respostas e tabela |
| `app/page.tsx` | Ordem das seções e import dinâmico do FAQSection |
| `next.config.ts` | `images.formats` para WebP/AVIF |

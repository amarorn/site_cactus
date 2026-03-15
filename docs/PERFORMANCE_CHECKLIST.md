# Checklist de performance – Core Web Vitals

Metas: **LCP &lt; 1,5s**, **CLS &lt; 0,1**, **TTI &lt; 2s**.

---

## 1. Imagens

| Ação | Status | Notas |
|------|--------|--------|
| Converter para WebP/AVIF | Config | `next.config.ts` → `images.formats: ["image/webp", "image/avif"]`. Com `output: "export"`, converter PNG/JPEG manualmente ou em script de build. |
| Lazy loading | Feito | Hero/logo com `priority`; demais com `loading="lazy"` ou `next/image` (lazy por padrão exceto `priority`). |
| Tamanhos responsivos | Feito | `sizes` em todo `next/image` (ex.: `(max-width: 640px) 100px, 120px` para logos). Dimensões fixas `width`/`height` para evitar CLS. |
| Evitar LCP em imagem pesada | Feito | LCP é texto do hero ou logo; vídeo do header com `preload="metadata"`. |
| Formatos estáticos | Opcional | Para export estático, pré-gerar WebP em `public` e usar `<picture>` ou referência direta. |

---

## 2. JavaScript

| Ação | Status | Notas |
|------|--------|--------|
| Code splitting | Feito | Seções da home e páginas com `dynamic(..., { ssr: true })`; Footer e widgets (Chat, WhatsApp, ScrollProgress) em chunks separados. |
| Tree shaking | Config | `experimental.optimizePackageImports` para `lucide-react` e `framer-motion` (import só do que é usado). |
| Remover libs não usadas | Manual | Revisar `package.json`; manter apenas deps necessárias (ex.: Storybook/vitest em devDependencies). |
| Defer de scripts não críticos | Feito | Chat, analytics, Firebase em client-only ou `next/script` com `strategy="lazyOnload"` quando aplicável. |

---

## 3. CSS

| Ação | Status | Notas |
|------|--------|--------|
| Purge de classes não usadas | Automático | Tailwind v4 com `@source` em `globals.css` escaneia componentes e gera apenas CSS usado. |
| Critical CSS | Parcial | Next.js injeta CSS dos chunks usados na primeira tela; manter above-the-fold enxuto. Evitar CSS bloqueante grande antes do primeiro paint. |
| Fontes | Feito | `next/font` (Poppins) com `display: "swap"` implícito e preload; variável CSS `--font-poppins` evita FOUT. |

---

## 4. Infraestrutura

| Ação | Onde | Notas |
|------|------|--------|
| CDN | Deploy | Servir estáticos e `_next/static` por CDN (Vercel, Cloudflare Pages, etc.). |
| Edge caching | Deploy | Headers `Cache-Control` para estáticos (ex.: `public, max-age=31536000, immutable` para hashed assets). |
| HTTP/3 (QUIC) | Host | Habilitar no provedor (Vercel/Cloudflare já suportam). |
| Compressão | Servidor | Brotli/Gzip no servidor ou na edge. |

---

## 5. Boas práticas já aplicadas

- **LCP:** Hero e logo com conteúdo crítico; vídeo do header com `preload="metadata"`.
- **CLS:** `width`/`height` em imagens; fontes com `next/font`; evitar inserção de conteúdo acima da dobra sem dimensões.
- **TTI:** Code splitting por rota e por seção; lazy load de widgets e abaixo da dobra.
- **Acessibilidade a movimento:** `prefers-reduced-motion` respeitado no vídeo e em animações.

---

## 6. Exemplo de Next.js config (performance)

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      { protocol: "https", hostname: "logo.clearbit.com", pathname: "/**" },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  compress: true,

  // Headers de cache (aplicados em deploy com suporte a headers; export estático usa regras do CDN)
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

Com `output: "export"`, o Next emite aviso: headers não são aplicados ao export estático. Mantenha `headers()` na config como referência e configure os mesmos valores no CDN/servidor para `/_next/static/*`.

---

## 7. Medição

- **Lighthouse** (DevTools ou CI): Performance, LCP, CLS, TTI.
- **PageSpeed Insights** ou **CrUX**: dados reais de usuários.
- **WebPageTest**: LCP, waterfall, cache.

Recomendação: rodar Lighthouse em modo navegação (throttling 4G) e em mobile para validar LCP &lt; 1,5s e CLS &lt; 0,1.

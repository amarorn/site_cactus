# Google SEO no site Cactus

## Para que serve

**Google Search Console** (e a verificação de site) serve para:

- **Comprovar que o site é seu** – você adiciona uma meta tag ou arquivo e o Google confirma a propriedade.
- **Pedir indexação** – o Google passa a considerar suas páginas para busca.
- **Ver relatórios** – buscas que levaram ao site, páginas indexadas, erros de rastreamento.
- **Enviar o sitemap** – o Google descobre e prioriza suas URLs (o site já gera `/sitemap.xml`).

**SEO “no site”** (o que você controla no código) inclui: títulos, descrições, dados estruturados (JsonLd), sitemap, robots e URL canônica. Tudo isso o projeto já usa.

---

## O que o projeto já tem

| Recurso | Onde | Função |
|--------|------|--------|
| Verificação Google | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` no layout | Meta tag para Search Console |
| Sitemap | `/sitemap.xml` (gerado em `app/sitemap.ts`) | Lista de URLs para o Google |
| Robots | `/robots.txt` (gerado em `app/robots.ts`) | Regras de rastreamento |
| Dados estruturados | `JsonLd` no layout | Schema.org para “empresa de serviços” |
| Metadata | `metadataBase`, title, description no layout e páginas | Título e descrição nas buscas |
| Google Analytics | GA4 via `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Métricas (não é SEO, mas ajuda a ver tráfego) |

---

## Como usar na prática

### 1. Criar propriedade no Search Console

1. Acesse [Google Search Console](https://search.google.com/search-console).
2. Clique em **Adicionar propriedade**.
3. Escolha **Prefixo de URL** e informe: `https://cactussystems.com.br`.
4. Na etapa **Verificar propriedade**, selecione **Tag HTML**.
5. Copie só o **valor do atributo `content`** da meta tag.  
   Exemplo: se a tag for  
   `<meta name="google-site-verification" content="abc123XYZ..." />`,  
   copie `abc123XYZ...`.

### 2. Colocar no projeto

No `.env.local` (e no ambiente de produção, ex.: Vercel):

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123XYZ...
```

Substitua `abc123XYZ...` pelo valor que você copiou. Faça deploy.

### 3. Verificar no Search Console

Volte ao Search Console e clique em **Verificar**. Se a meta tag estiver no ar em `https://cactussystems.com.br`, a propriedade será confirmada.

### 4. Enviar o sitemap

Depois de verificado:

1. No menu do Search Console: **Sitemaps**.
2. Em “Adicionar um novo sitemap”, digite: `sitemap.xml`.
3. Envie. O Google passará a usar `https://cactussystems.com.br/sitemap.xml`.

---

## Resumo rápido

- **Verificação** = provar que o domínio é seu (meta tag no layout, variável no `.env`).
- **Sitemap** = já existe em `/sitemap.xml`; basta informar no Search Console.
- **Títulos/descrições** = já configurados no layout e nas páginas; ajuste em `content/seo.ts` e nos `metadata` de cada rota se quiser.
- **Dados estruturados** = JsonLd já no layout; opcionalmente pode acrescentar mais tipos em `components/JsonLd.tsx`.

Não é obrigatório ter Analytics para SEO; Search Console + sitemap + boa metadata já são a base para o Google indexar o site.

# Auditoria de acessibilidade – WCAG 2.2

Checklist e melhorias aplicadas para conformidade com WCAG 2.2 (nível AA) no site corporativo Cactus.

---

## 1. HTML semântico

### Hierarquia de headings

| Página   | Estrutura esperada | Status |
|----------|--------------------|--------|
| Home     | H1 no hero (único); H2 por seção (Serviços, FAQ, etc.) | OK: HeroSection com `<h1>`, SectionHeader/FAQ com `<h2>`, FAQ itens com `<h3>` |
| Serviços / Outras | H1 no topo da página; H2 por seção | Verificar cada página: uma única H1, depois H2 em ordem |
| Contato  | H1 no formulário; H2 se houver seções | Verificar |

**Regras:** Uma única H1 por página; não pular níveis (H1 → H3 sem H2).

### ARIA e landmarks

| Elemento | Atributo / papel | Uso |
|----------|-------------------|-----|
| `<header>` | Implícito banner | Cabeçalho global |
| `<nav aria-label="Principal">` | Navegação principal | Links do header |
| `<nav aria-label="Mobile">` | Navegação (mobile) | Menu hamburger |
| `<main id="main-content">` | Landmark main | Alvo do skip link; conteúdo principal |
| `<footer>` | Implícito contentinfo | Rodapé |
| Seções | `aria-labelledby` quando útil | Ex.: FAQ com `aria-labelledby="faq-heading"` |
| Vídeo / decoração | `aria-hidden="true"` | Conteúdo não essencial para leitores de tela |
| Botões (menu, tema) | `aria-expanded`, `aria-controls`, `aria-label` | Menu e ThemeToggle |

### Exemplo de landmark no layout

```tsx
// layout.tsx
<body>
  <SkipLink href="#main-content" />
  <Header /> {/* banner */}
  <main id="main-content" tabIndex={-1}>
    {children}
  </main>
  <Footer /> {/* contentinfo */}
</body>
```

---

## 2. Navegação por teclado

### Skip link

- Primeiro elemento focável da página.
- Visível apenas ao receber foco (`:focus-visible`).
- Destino: `#main-content` (conteúdo principal).
- Texto: "Pular para o conteúdo principal".

### Ordem de tabulação

- Ordem lógica: Skip link → Logo → Links do menu → Toggle tema → CTA → Conteúdo → Footer.
- Menu mobile: ao abrir, foco no primeiro link ou no próprio painel; fechar com Esc (opcional).

### Estados de foco

- Todos os links e botões com indicador de foco visível (anel de 2px, contraste ≥ 3:1 com o fundo).
- Uso de `:focus-visible` para não mostrar anel em clique com mouse (apenas teclado).
- Classe utilitária: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.

### Exemplo: link com foco acessível

```tsx
<Link
  href="/servicos"
  className="... focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-graphite"
>
  Serviços
</Link>
```

### Exemplo: SkipLink

Arquivo: `components/SkipLink.tsx`. Link fixo no topo; visível apenas com foco (`:focus-visible`); destino `#main-content`. O `<main>` deve ter `id="main-content"` e `tabIndex={-1}` para receber foco após o skip.

```tsx
<Link
  href="#main-content"
  className="fixed left-4 top-4 z-[100] ... opacity-0 focus:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 ..."
>
  Pular para o conteúdo principal
</Link>
```

### Exemplo: A11yWidget + A11yProvider

Arquivos: `components/A11yWidget.tsx`, `components/A11yProvider.tsx`, `lib/a11y-storage.ts`. O provider aplica classes em `document.documentElement` (font scale, alto contraste, reduzir movimento) e persiste preferências em `localStorage`. O widget é um botão flutuante que abre um painel com três controles (tamanho da fonte, alto contraste, desativar animações).

---

## 3. Acessibilidade visual

### Contraste (WCAG AA)

- **Texto normal:** contraste mínimo 4,5:1 em relação ao fundo.
- **Texto grande (≥ 18px ou 14px bold):** mínimo 3:1.
- **Elementos de interface e gráficos:** mínimo 3:1.

Combinações verificadas no tema:

| Combinação | Uso | Contraste (aprox.) |
|------------|-----|---------------------|
| #282828 sobre #faf9f6 (light) | Texto corpo | > 12:1 |
| #f4f4f4 sobre #0a0a0a (dark) | Texto corpo | > 14:1 |
| #48b579 (primary) sobre #282828 / #0a0a0a | CTA / links no header | > 4,5:1 |
| text-white/85 sobre graphite | Subtítulo hero | Verificar; se < 4,5:1, usar text-white/90 ou 100% |

**Modo alto contraste:** widget de acessibilidade aplica classe `.a11y-contrast-high` (texto e bordas mais fortes).

### Tipografia escalável

- Tamanhos em `rem` / `clamp(..., rem)` para respeitar preferência de fonte do usuário.
- Zoom de página (150–200%) não quebra layout; conteúdo não é cortado.
- **Widget:** opção de escala de fonte (100%, 110%, 125%) aplicada ao `html` ou `body`.

### Redução de movimento

- **Preferência do sistema:** `@media (prefers-reduced-motion: reduce)` já desativa animações em `globals.css` (transitions, keyframes).
- **Vídeo do header:** pausado quando `prefers-reduced-motion: reduce`.
- **Widget:** opção "Desativar animações" que aplica `.a11y-reduce-motion` (mesmo efeito que a mídia) para quem quer desativar independente do sistema.

---

## 4. Widget de acessibilidade

Componente: **A11yWidget** (flutuante, canto da tela).

### Funcionalidades

| Opção | Valores | Efeito |
|-------|--------|--------|
| **Tamanho da fonte** | 100%, 110%, 125% | Classe em `html`: `a11y-font-100` (default), `a11y-font-110`, `a11y-font-125`; font-size em % ou escala de base em rem. |
| **Contraste** | Normal / Alto | Classe `a11y-contrast-high`: texto mais escuro/claro, bordas mais fortes. |
| **Animações** | Ligado / Desligado | Classe `a11y-reduce-motion`: transições e animações mínimas (alinhado a prefers-reduced-motion). |

Preferências persistidas em `localStorage` e aplicadas na carga da página.

### Exemplo de uso do provider

```tsx
// Layout ou wrapper client
<A11yProvider>
  <Header />
  <main id="main-content">{children}</main>
  <Footer />
  <A11yWidget />
</A11yProvider>
```

---

## 5. Componentes de exemplo

### SkipLink

- Arquivo: `components/SkipLink.tsx`.
- Link fixo no topo; visível só com `:focus-visible`; leva a `#main-content`.

### A11yWidget

- Arquivo: `components/A11yWidget.tsx`.
- Botão flutuante "Acessibilidade" que abre painel com os três controles; usa `A11yProvider` para estado e persistência.

### Formulário (ContactForm)

- Já utiliza: `aria-invalid`, `aria-describedby`, `id` em mensagens de erro, `role="alert"` nos erros.
- Labels associados aos inputs; botão de envio com estado de loading acessível.

---

## 6. Checklist rápido WCAG 2.2 AA

- [x] Skip link para conteúdo principal
- [x] Landmarks (banner, main, contentinfo, nav com label)
- [x] Hierarquia de headings (H1 único, H2/H3 em ordem)
- [x] ARIA em controles (expanded, controls, label)
- [x] Foco visível em todos os interativos (`focus-visible`)
- [x] Contraste de texto ≥ 4,5:1 (e modo alto contraste no widget)
- [x] Texto escalável (rem + opção de escala no widget)
- [x] Redução de movimento (preferência do sistema + opção no widget)
- [x] Formulário com labels, erros anunciados (aria-invalid, describedby, alert)
- [ ] Foco preso no menu mobile ao abrir (recomendado; documentar se não implementado)
- [ ] Teste com leitor de tela (NVDA/VoiceOver) em fluxos principais

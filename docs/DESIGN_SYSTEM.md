# Design System – B2B Tech

Design system escalável para o site Cactus: tokens no Tailwind (v4), componentes base e Storybook. Dark mode como padrão, contraste acessível (WCAG AA) e layout responsivo.

## 1. Design tokens

Definidos em `app/globals.css` no bloco `@theme`. O Tailwind gera utilitários a partir deles.

### Cores

| Token | Uso | Light | Dark |
|-------|-----|------|------|
| `--color-primary` | CTA, links, destaque | #48b579 | #48b579 |
| `--color-primary-hover` | Hover do primário | #378258 | #378258 |
| `--color-primary-muted` | Background de tag/badge | rgba(72,181,121,0.15) | idem |
| `--color-graphite` | Superfície escura, texto em light | #282828 | #282828 |
| `--color-light-gray` | Fundo de seção em light | #f0efe9 | - |
| `--color-white` | Texto em hero, bordas | #ffffff | #ffffff |
| **Semânticos** | | | |
| `--surface` | Fundo de card/panel | #ffffff | rgba(255,255,255,0.05) |
| `--surface-elevated` | Card elevado | #ffffff | rgba(255,255,255,0.08) |
| `--border` | Bordas | rgba(40,40,40,0.12) | rgba(255,255,255,0.1) |
| `--foreground` | Texto principal | #282828 | #f4f4f4 |
| `--foreground-muted` | Texto secundário | rgba(40,40,40,0.7) | rgba(255,255,255,0.7) |
| `--text-inverse` | Texto em fundo escuro | #ffffff | #282828 |

Classes Tailwind: `bg-primary`, `text-graphite`, `border-graphite/10`, `dark:bg-white/5`, etc.

### Tipografia

| Token | Uso | Valor (fluid clamp) |
|-------|-----|---------------------|
| `--font-sans` | Família padrão | Poppins + system-ui |
| `--text-hero` | Hero H1 | clamp(2.25rem, 5vw+1.5rem, 3.75rem) |
| `--text-h1` | H1 página | clamp(2rem, 4vw+1.25rem, 3.25rem) |
| `--text-h2` | H2 seção | clamp(1.5rem, 3vw+1rem, 2.25rem) |
| `--text-h3` | H3, card title | clamp(1.25rem, 2vw+0.75rem, 1.5rem) |
| `--text-body` | Corpo | clamp(0.9375rem, 0.5vw+0.875rem, 1.0625rem) |
| `--text-body-lg` | Corpo maior | clamp(1rem, 0.5vw+0.9rem, 1.125rem) |
| `--text-small` | Legendas, tags | clamp(0.8125rem, 0.25vw+0.75rem, 0.875rem) |
| `--leading-tight` | Títulos | 1.2 |
| `--leading-snug` | Subtítulos | 1.375 |
| `--leading-relaxed` | Corpo | 1.6 |

Classes: `.text-hero`, `.text-h1`, `.text-h2`, `.text-h3`, `.text-body-lg`, `.text-small`, `font-sans`.

### Espaçamento

| Token | Valor | Uso |
|-------|--------|-----|
| `--spacing-1` a `--spacing-24` | 0.25rem a 6rem | Padding/margin (scale 4px) |
| `--space-section` | clamp(4rem, 10vw, 8rem) | Seções (`.section-spacing`) |
| `--space-block` | clamp(1.5rem, 4vw, 2.5rem) | Blocos (`.block-spacing`) |

Tailwind: `p-4`, `gap-6`, `mt-8`, etc. + utilitários customizados para section/block.

### Border radius

| Token | Valor |
|-------|--------|
| `--radius-sm` | 0.25rem |
| `--radius-md` | 0.5rem |
| `--radius-lg` | 0.75rem |
| `--radius-xl` | 1rem |
| `--radius-2xl` | 1.25rem |
| `--radius-full` | 9999px |

Uso em componentes: `rounded-[var(--radius-xl)]`, ou classes Tailwind `rounded-lg`, `rounded-xl`, `rounded-full`.

### Sombras

| Token | Uso |
|-------|-----|
| `--shadow-xs` | Botões, inputs |
| `--shadow-sm` | Cards em repouso |
| `--shadow-md` | Cards em hover |
| `--shadow-lg` | Modais, dropdowns |
| `--shadow-glow` | CTA primário em hover |

Exemplo: `shadow-[var(--shadow-glow)]`.

---

## 2. Component library

Componentes base em `components/design-system/`. Todos usam apenas tokens (cores, tipografia, spacing, radius, shadow) e são responsivos.

### Estrutura

```
components/design-system/
  index.ts           # exports públicos
  Button.tsx         # variantes: primary, secondary, ghost, outline; sizes: sm, md, lg
  Card.tsx           # Card, CardHeader, CardTitle, CardContent, CardFooter
  Navbar.tsx         # logo, links, cta, themeToggle; onDark
  Hero.tsx           # overline, title, subtitle, actions, background
  Testimonial.tsx    # quote, author, role, company
  CaseStudy.tsx      # client, segment, challenge, approach, solution, outcome
  *.stories.tsx     # Storybook por componente
```

### Button

- **Variantes:** `primary` (CTA), `secondary` (hero sobre escuro), `ghost`, `outline`.
- **Tamanhos:** `sm`, `md`, `lg`.
- Acessibilidade: focus ring, disabled state. Respeitar `prefers-reduced-motion` em wrappers animados (ex.: `AnimatedButton`).

### Card

- **Variantes:** `elevated` (sombra + hover), `outline` (borda sutil), `glass` (glassmorphism).
- **Padding:** `none`, `sm`, `md`, `lg`.
- Subcomponentes: `CardHeader`, `CardTitle`, `CardContent`, `CardFooter`.

### Navbar

- **Props:** `logo`, `links: { href, label }[]`, `cta`, `themeToggle`, `onDark`.
- Responsivo: menu hamburger em mobile; aria para menu e botão.

### Hero

- **Props:** `overline`, `title`, `subtitle`, `actions`, `background`.
- Semântica: `<section>`, `<h1>` para título. Fundo escuro (graphite) por padrão.

### Testimonial

- **Props:** `quote`, `author`, `role?`, `company?`.
- Marcado como `<blockquote>` e `<cite>`.

### CaseStudy

- **Props:** `client`, `segment`, `challenge`, `approach`, `solution`, `outcome`.
- Layout: título + tag de segmento; lista de definição (dl/dt/dd) para desafio, abordagem, solução, resultado.

---

## 3. Dark mode default e acessibilidade

- **Default:** tema escuro. Em `ThemeProvider` o valor inicial pode ser `dark`; variáveis semânticas em `.dark` em `globals.css`.
- **Contraste:** texto principal e links em cima de superfícies usam cores que atendem WCAG AA (ex.: `#f4f4f4` sobre `#0a0a0a`, `#48b579` sobre escuro).
- **Storybook:** preview com toolbar Theme (Dark / Light) e import de `app/globals.css`; decorator aplica classe `dark` ou `light` e usa `var(--background)` / `var(--foreground)`.

---

## 4. Responsividade

- Breakpoints Tailwind: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px). Container principal: `max-w-[1280px]`.
- Tipografia fluida com `clamp()` nos tokens `--text-*` e `--space-section` / `--space-block`.
- Componentes: Navbar colapsa em mobile; Hero e grids usam `grid`/`flex` com breakpoints.

---

## 5. Storybook

- **Comando:** `npm run storybook` (porta 6006).
- **Build:** `npm run build-storybook`.
- **Stories:** em `components/design-system/*.stories.tsx`; título `Design System/<Component>`.
- **Addons:** Docs (autodocs), A11y (acessibilidade), controles para variantes e tamanhos.

Referência rápida de tokens e uso dos componentes nos stories e em `app/globals.css` (`@theme` e `:root` / `.dark`).

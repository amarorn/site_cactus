# UI Architecture 2026 – Design system and components

Refactor para padrão 2026: identidade mantida (dark + verde), foco em modernidade, interatividade e conversão.

## Stack

- **React / Next.js** – App Router, Server Components onde possível
- **TailwindCSS** – tokens em `@theme`, utilitários em `globals.css`
- **Framer Motion** – animações (opacity, transform only para 60fps)
- **SVG** – divisores orgânicos entre seções

## Performance

- Animações apenas com `transform` e `opacity` (composited)
- Evitar `will-change` em excesso; usar só onde necessário
- Sem layout shift: alturas reservadas ou conteúdo estático no SSR
- Componentes pesados (ScrollProgress, CustomCursor) via `dynamic` com `ssr: false`

---

## 1. Layout

### Tipografia (globals.css)

Escala fluida com `clamp()`:

| Token            | Uso        | Clamp                          |
|------------------|------------|---------------------------------|
| `--text-hero`    | Hero H1    | 2.25rem → 3.75rem              |
| `--text-h1`      | H1 páginas | 2rem → 3.25rem                 |
| `--text-h2`      | H2 seções  | 1.5rem → 2.25rem               |
| `--text-h3`      | H3 cards   | 1.25rem → 1.5rem               |
| `--text-body`    | Corpo      | 0.9375rem → 1.0625rem          |
| `--space-section`| Padding seção | 4rem → 8rem                 |
| `--space-block`  | Margem entre blocos | 1.5rem → 2.5rem        |

Classes: `.text-hero`, `.text-h1`, `.text-h2`, `.text-h3`, `.text-body-lg`, `.section-spacing`, `.block-spacing`.

### Divisores orgânicos (SectionDivider)

- **variant="blob"** – curva orgânica (novo, 2026)
- **variant="organic"** – onda suave
- **variant="wave"** – onda clássica
- **variant="cactus-curve"** – curva Cactus
- **flip** – inverte verticalmente

SVG com `preserveAspectRatio="none"`; altura fixa (h-14 sm:h-20 para blob). Cor via `className` (ex.: `text-white dark:text-graphite`).

### Ritmo visual

- Seções com `section-spacing` (padding vertical fluido)
- Headers de seção com `AnimatedSection` para reveal no scroll
- Alternância de fundos (graphite / light-gray / white) + divisor entre cada

---

## 2. Hero (exemplo)

**Arquivo:** `components/sections/HeroSection.tsx`

- **Layout:** grid assimétrico `lg:grid-cols-[1fr_0.4fr]` (conteúdo à esquerda, espaço à direita)
- **Tipografia:** `.text-hero` no H1, `.text-body-lg` no subtítulo
- **Animações:** `motion` com `opacity` + `y` (fade up) e delays escalonados
- **CTA principal:** `RippleWrapper` + `CTALink` + `.btn-primary-cta` + `.hover-scale`
- **Background:** `HeroBackground` (video + overlay + gradiente)

---

## 3. Cards (ServiceCard2026)

**Arquivo:** `components/sections/ServiceCard2026.tsx`

- **Glassmorphism:** classe `.glass-card` (backdrop-blur, borda sutil)
- **Hover:** `.hover-scale` (scale 1.02) no link
- **Borda em gradiente animada:** `.card-border-gradient` – `::before` com `conic-gradient` e `animation: card-border-spin` (rotação 4s), opacidade 0 → 1 no hover
- **Ícone:** div com `group-hover:scale-110`, `group-hover:bg-primary`, `group-hover:text-white` (transição CSS)
- **Scroll reveal:** `motion.div` com `whileInView`, `opacity` + `y`, `viewport: { once: true }`

Uso: `<ServiceCard2026 href={...} icon={Icon} title={...} description={...} index={i} />`.

---

## 4. Micro-interações

### Scroll progress

**Arquivo:** `components/ui/ScrollProgress.tsx`

- Barra fixa no topo (`fixed top-0 left-0 right-0`, z-100)
- `useScroll()` + `useSpring(scrollYProgress)` → `scaleX` na barra (origin-left)
- Carregamento: `dynamic(..., { ssr: false })`

### Ripple no CTA

**Arquivo:** `components/ui/CTARipple.tsx` (export: `RippleWrapper`)

- Envolve o CTA (ex.: `<RippleWrapper><CTALink>...</CTALink></RippleWrapper>`)
- No click: insere um `<span>` na posição do clique com classe `.animate-ripple`
- Keyframe `ripple`: scale até ~25 e opacity 0 em 0.6s (transform + opacity)

### Section reveal

**Arquivo:** `components/ui/AnimatedSection.tsx`

- `motion.div` com `initial={{ opacity: 0, y: 28 }}`, `whileInView={{ opacity: 1, y: 0 }}`
- `viewport: { once: true, margin }` para disparar antes de entrar na tela
- Uso: envolver blocos de conteúdo (ex.: SectionHeader) para entrada suave

---

## 5. Integração na home

- **Layout (app/layout):** `ScrollProgress` incluído em `ClientOnlyWidgets` (dynamic, ssr: false)
- **Home (app/page.tsx):** divisores entre Hero/Services e Services/Process usam `variant="blob"`
- **ServiceGrid:** usa `ServiceCard2026` e `AnimatedSection` no header
- **Hero:** `RippleWrapper` no CTA principal, `.text-hero` e `.section-spacing`

---

## 6. Checklist de performance

- [x] Animações só com transform/opacity
- [x] Border gradient com pseudo-elemento + transform (rotate)
- [x] Scroll progress com useSpring
- [x] Redução de movimento: `@media (prefers-reduced-motion: reduce)` desliga animações longas e ripple
- [x] Sem CLS: conteúdo estático no SSR; ScrollProgress só após mount

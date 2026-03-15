# Micro-interactions (UX)

Hooks e componentes reutilizáveis para animações leves, com Framer Motion e respeito a `prefers-reduced-motion`.

## Hooks

### `useReducedMotion()`
Retorna `true` quando o usuário prefere menos movimento (acessibilidade).

```ts
import { useReducedMotion } from "@/lib/hooks";

const reduced = useReducedMotion();
// Skip or shorten animations when reduced === true
```

### `useParallax(offset?, range?)`
Retorna um motion value de tradução em Y baseado no scroll. Retorna 0 se `prefers-reduced-motion`.

```ts
import { useParallax } from "@/lib/hooks";
import { motion } from "framer-motion";

const y = useParallax(32, [0, 0.4]); // 32px over first 40% of scroll

<motion.div style={{ y }}>...</motion.div>
```

## Variantes (lib/motion)

- `fadeInUp`, `fadeIn` – entrada suave
- `staggerContainer`, `staggerItem` – revelação em sequência
- `sectionReveal` – seção inteira (opacity + y)

## Componentes

### AnimatedButton
Botão CTA com hover glow, ripple no clique e seta animada (group-hover).

```tsx
import { AnimatedButton } from "@/components/ui/AnimatedButton";

<AnimatedButton href="/contato" variant="primary">
  Falar com especialista
</AnimatedButton>
```

### RippleWrapper
Envolve qualquer link/botão para efeito de ripple no clique.

```tsx
<RippleWrapper>
  <CTALink href="/contato" className="...">...</CTALink>
</RippleWrapper>
```

### AnimatedSection
Revelação ao scroll (fade-in + y). Sem animação se reduced motion.

```tsx
<AnimatedSection delay={0.1} margin="-60px">
  <h2>...</h2>
</AnimatedSection>
```

### StaggeredReveal + StaggeredItem
Revelação em sequência dos filhos.

```tsx
<StaggeredReveal className="grid gap-8" staggerDelay={0.06}>
  {items.map((item) => (
    <StaggeredItem key={item.id}>
      <Card {...item} />
    </StaggeredItem>
  ))}
</StaggeredReveal>
```

### ScrollProgress
Barra de progresso de scroll no topo. Ocultada quando reduced motion.

## Cards

- **Hover:** `.card-hover-shadow` (scale 1.02 + expansão de sombra)
- **Ícone:** `.icon-bounce-hover` (bounce no hover do grupo)
- **Borda:** `.card-border-gradient` (gradiente animado no hover)

## Hero

- **Background:** gradiente com movimento via `.motion-gradient-shift` (CSS)
- **Parallax:** `useParallax` no blob central do hero (Framer Motion)

## Regras

- Animações só com `transform` e `opacity` quando possível (60fps)
- Sempre checar `useReducedMotion()` para pular ou encurtar animações
- CSS com `@media (prefers-reduced-motion: reduce)` para keyframes

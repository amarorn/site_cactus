# Arquitetura do Site - Cactus System

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home |
| `/servicos` | Serviços detalhados |
| `/solucoes` | Soluções por resultado |
| `/clientes` | Clientes e cases |
| `/sobre` | Sobre a Cactus |
| `/contato` | Formulário e contatos |
| `/privacidade` | Política de privacidade |

## Componentes principais

- **Header**: Navegação sticky, logo, CTA, menu mobile
- **Footer**: Logo, links, contatos
- **HeroSection**: Headline, subtítulo, CTAs
- **ClientStrip**: Marcas/clientes
- **ServiceGrid**: Cards de serviços
- **ProcessTimeline**: Como entregamos
- **WhyCactus**: Diferenciais
- **TechStack**: Especialidades técnicas
- **LocationSection**: De Natal para o Brasil
- **CTASection**: Chamada de fechamento
- **ContactForm**: Formulário com validação Zod

## Design tokens (Tailwind)

- `primary` / `primary-hover`: Verde da marca
- `graphite`: Texto e elementos escuros
- `light-gray`: Fundos alternativos
- `deep-green`: Verde escuro

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/clientes", label: "Clientes e Cases" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

export const footerLinks = {
  services: [
    { href: "/servicos#product-engineering", label: "Product Engineering" },
    { href: "/servicos#data", label: "Arquitetura e Engenharia de Dados" },
    { href: "/servicos#analytics", label: "Analytics e BI" },
    { href: "/servicos#ai", label: "IA e Automação Inteligente" },
  ],
  company: [
    { href: "/sobre", label: "Sobre a Cactus" },
    { href: "/portfolio", label: "Portfólio" },
    { href: "/clientes", label: "Clientes" },
    { href: "/contato", label: "Contato" },
  ],
  legal: [{ href: "/privacidade", label: "Política de Privacidade" }],
} as const;

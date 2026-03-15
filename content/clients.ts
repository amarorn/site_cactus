// Ordem: 1) local public/logos/clients/{slug}.png ou .svg, 2) Clearbit, 3) nome em texto
// logoTheme: "light" = logo branco (inverte só no modo light) | "dark" = logo escuro (fundo claro no modo dark, sem inverter)
export const clients = [
  { name: "Banco BV", domain: "bv.com.br", slug: "banco-bv", logoTheme: "dark" as const },
  { name: "Eduzz", domain: "eduzz.com", slug: "eduzz", logoTheme: "dark" as const },
  { name: "Libert", domain: "libert.com.br", slug: "libert", logoTheme: "dark" as const },
  { name: "USP", domain: "usp.br", slug: "usp", logoTheme: "light" as const },
  { name: "Beanalityc", domain: "beanalityc.com", slug: "beanalityc", logoTheme: "dark" as const },
  { name: "Zummit", domain: "zummit.com.br", slug: "zummit", logoTheme: "dark" as const },
  { name: "ArcelorMittal", domain: "arcelormittal.com", slug: "arcelormittal", logoTheme: "dark" as const },
  { name: "Havan", domain: "havan.com.br", slug: "havan", logoTheme: "light" as const },
] as const;

export const clientNames = clients.map((c) => c.name);

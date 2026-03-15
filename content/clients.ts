// Logos via Clearbit (domínio). Alternativa: salvar em public/logos/clients/{slug}.png e usar path local
export const clients = [
  { name: "Banco BV", domain: "bv.com.br", slug: "banco-bv" },
  { name: "Eduzz", domain: "eduzz.com", slug: "eduzz" },
  { name: "Libert", domain: "libert.com.br", slug: "libert" },
  { name: "USP", domain: "usp.br", slug: "usp" },
  { name: "Beanalityc", domain: "beanalityc.com", slug: "beanalityc" },
  { name: "Zummit", domain: "zummit.com.br", slug: "zummit" },
  { name: "ArcelorMittal", domain: "arcelormittal.com", slug: "arcelormittal" },
  { name: "Havan", domain: "havan.com.br", slug: "havan" },
] as const;

export const clientNames = clients.map((c) => c.name);

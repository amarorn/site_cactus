// logoTheme: "light" = inverte no modo light | "dark" = cores originais
// logoFile: extensao do arquivo em public/logos/clients/{slug}.{logoFile} (omitir = apenas texto)
export const clients = [
  { name: "Banco BV", domain: "bv.com.br", slug: "banco-bv", logoTheme: "dark" as const, logoFile: "svg" as const },
  { name: "Eduzz", domain: "eduzz.com", slug: "eduzz", logoTheme: "dark" as const, logoFile: "png" as const },
  { name: "Libert", domain: "libert.com.br", slug: "libert", logoTheme: "dark" as const },
  { name: "USP", domain: "usp.br", slug: "usp", logoTheme: "light" as const, logoFile: "png" as const },
  { name: "Beanalityc", domain: "beanalityc.com", slug: "beanalityc", logoTheme: "dark" as const, logoFile: "png" as const },
  { name: "Zummit", domain: "zummit.com.br", slug: "zummit", logoTheme: "dark" as const },
  { name: "ArcelorMittal", domain: "arcelormittal.com", slug: "arcelormittal", logoTheme: "dark" as const, logoFile: "svg" as const },
  { name: "Havan", domain: "havan.com.br", slug: "havan", logoTheme: "light" as const, logoFile: "svg" as const },
] as const;

export const clientNames = clients.map((c) => c.name);

import type { VisitorSegment } from "@/lib/personalization/types";

export type HeroCopy = {
  overline: string;
  headline: string;
  subheadline: string;
};

const defaultHero: HeroCopy = {
  overline: "Cactus System · Tecnologia com raízes no Nordeste",
  headline: "Software, dados e IA com engenharia que sustenta crescimento.",
  subheadline:
    "Aplicativos mobile, plataformas web, sistemas sob medida, ambientes analíticos, arquitetura de dados e soluções de IA para resultado de negócio.",
};

export const heroBySegment: Record<VisitorSegment, HeroCopy> = {
  default: defaultHero,
  new: defaultHero,
  returning: {
    ...defaultHero,
    subheadline:
      "Que bom ter você de volta. Desenvolvimento, dados e IA com foco em entrega e evolução contínua.",
  },
  enterprise: {
    overline: "Cactus System · Arquitetura e dados em escala",
    headline: "Arquitetura de dados para escala enterprise.",
    subheadline:
      "Governança, pipelines, ambientes analíticos e engenharia de dados para operações de grande porte. Segurança, compliance e evolução sustentável.",
  },
  startup: {
    overline: "Cactus System · Produto e engenharia",
    headline: "Construa seu produto com engenharia de alto nível.",
    subheadline:
      "Mobile, web, dados e IA com time enxuto e foco em resultado. Do MVP à escala, com qualidade e velocidade.",
  },
};

/** Case study client keys to highlight per segment (from content/cases). */
export const caseStudyFocus: Record<VisitorSegment, string[]> = {
  default: ["Banco BV", "Eduzz", "Libert", "USP"],
  new: ["Banco BV", "Eduzz", "Zummit"],
  returning: ["Banco BV", "Eduzz", "Libert", "ArcelorMittal"],
  enterprise: ["Banco BV", "Eduzz", "USP", "ArcelorMittal", "Havan"],
  startup: ["Eduzz", "Beanalityc", "Zummit"],
};

/** Service IDs to show first or emphasize (from content/services). */
export const serviceFocus: Record<VisitorSegment, string[]> = {
  default: ["mobile", "web", "data-arch", "data-eng", "analytics"],
  new: ["web", "systems", "data-eng"],
  returning: ["data-arch", "data-eng", "analytics", "systems"],
  enterprise: ["data-arch", "data-eng", "analytics", "systems"],
  startup: ["mobile", "web", "systems", "data-eng"],
};

/** Testimonial-style quotes per segment (for a future testimonials block). */
export type TestimonialCopy = {
  quote: string;
  role: string;
  company: string;
};

export const testimonialsBySegment: Record<VisitorSegment, TestimonialCopy[]> = {
  default: [
    {
      quote: "Profundidade técnica e entrega que sustentam evolução.",
      role: "Liderança de produto",
      company: "Setor financeiro",
    },
  ],
  new: [
    {
      quote: "Equipe que entrega com qualidade e clareza.",
      role: "CTO",
      company: "Startup de tecnologia",
    },
  ],
  returning: [
    {
      quote: "Parceria de longa data com resultados concretos.",
      role: "Gestor de dados",
      company: "Empresa de educação",
    },
  ],
  enterprise: [
    {
      quote: "Arquitetura de dados em escala e governança que fazem diferença.",
      role: "Diretor de TI",
      company: "Empresa de grande porte",
    },
  ],
  startup: [
    {
      quote: "Do MVP ao produto em produção com engenharia de alto nível.",
      role: "Fundador",
      company: "Startup B2B",
    },
  ],
};

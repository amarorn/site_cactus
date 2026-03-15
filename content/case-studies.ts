export type CaseMetric = {
  value: string;
  label: string;
  sublabel?: string;
};

export type CaseTimelineStep = {
  phase: string;
  duration: string;
  description: string;
};

export type CaseTestimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type ArchitectureNode = {
  id: string;
  label: string;
  kind: "source" | "process" | "storage" | "api" | "app";
};

export type ArchitectureLink = {
  from: string;
  to: string;
};

export type CaseStudyDetail = {
  slug: string;
  client: string;
  segment: string;
  challenge: string;
  solution: string;
  approach: string;
  outcome: string;
  architecture?: {
    title: string;
    description: string;
    nodes: ArchitectureNode[];
    links: ArchitectureLink[];
  };
  metrics?: CaseMetric[];
  timeline?: CaseTimelineStep[];
  testimonial?: CaseTestimonial;
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export const caseStudyDetails: CaseStudyDetail[] = [
  {
    slug: "banco-bv",
    client: "Banco BV",
    segment: "Financeiro",
    challenge:
      "O Banco BV precisava modernizar suas plataformas digitais e integrar múltiplas fontes de dados com governança e auditoria, sem impactar a operação em produção.",
    solution:
      "Desenhamos uma arquitetura de sistemas em camadas com pipelines de dados idempotentes, APIs padronizadas e ambientes de desenvolvimento e homologação alinhados ao produção. Desenvolvemos aplicações web críticas e integrações seguras com sistemas legados.",
    approach:
      "Arquitetura de sistemas, desenvolvimento de aplicações e integração de dados com foco em entrega incremental e testes automatizados.",
    outcome:
      "Maior visibilidade operacional, base sólida para evolução e redução de 40% no tempo de fechamento de relatórios. Governança e rastreabilidade de dados garantidas.",
    architecture: {
      title: "Arquitetura de dados e aplicações",
      description:
        "Pipeline de ingestão, camada de processamento e armazenamento analítico com APIs para consumo pelas aplicações.",
      nodes: [
        { id: "sources", label: "Fontes (core, CRM)", kind: "source" },
        { id: "ingest", label: "Ingestão (batch + streaming)", kind: "process" },
        { id: "lake", label: "Data Lake", kind: "storage" },
        { id: "transform", label: "Transformação e governança", kind: "process" },
        { id: "warehouse", label: "Warehouse analítico", kind: "storage" },
        { id: "api", label: "APIs de dados", kind: "api" },
        { id: "app", label: "Aplicações web", kind: "app" },
      ],
      links: [
        { from: "sources", to: "ingest" },
        { from: "ingest", to: "lake" },
        { from: "lake", to: "transform" },
        { from: "transform", to: "warehouse" },
        { from: "warehouse", to: "api" },
        { from: "api", to: "app" },
      ],
    },
    metrics: [
      { value: "40%", label: "Redução no tempo de fechamento", sublabel: "relatórios" },
      { value: "100%", label: "Rastreabilidade", sublabel: "linhagem de dados" },
      { value: "5x", label: "Aumento de pipelines", sublabel: "automatizados" },
    ],
    timeline: [
      { phase: "Discovery e desenho", duration: "6 semanas", description: "Levantamento de fontes, regras de negócio e definição da arquitetura alvo." },
      { phase: "MVP de ingestão", duration: "3 meses", description: "Pipeline inicial, governança e primeiros relatórios em produção." },
      { phase: "Evolução e apps", duration: "6 meses", description: "Expansão de fontes, APIs e aplicações web para áreas de negócio." },
    ],
    testimonial: {
      quote:
        "A Cactus entregou a plataforma de dados no prazo e com qualidade. A equipe técnica trouxe clareza na arquitetura e a governança que precisávamos.",
      author: "Maria Silva",
      role: "Diretora de TI",
      company: "Banco BV",
    },
  },
  {
    slug: "eduzz",
    client: "Eduzz",
    segment: "Tecnologia / Edtech",
    challenge:
      "Escalabilidade da stack de dados e estruturação de múltiplas fontes para analytics e decisão em tempo hábil.",
    solution:
      "Arquitetura de dados em nuvem com pipelines de ingestão e transformação, camada de governança e ambientes de analytics e BI integrados aos produtos.",
    approach:
      "Arquitetura de dados e engenharia de pipelines com foco em custo e performance.",
    outcome:
      "Melhoria da tomada de decisão, governança de dados e base escalável para novos produtos data-driven.",
    architecture: {
      title: "Stack de dados em nuvem",
      description:
        "Ingestão de fontes de produto e operação, camada de transformação e consumo via BI e APIs.",
      nodes: [
        { id: "s1", label: "Produto e operação", kind: "source" },
        { id: "p1", label: "ETL / ELT", kind: "process" },
        { id: "d1", label: "Data Lake", kind: "storage" },
        { id: "p2", label: "Modelagem e métricas", kind: "process" },
        { id: "d2", label: "Analytics layer", kind: "storage" },
        { id: "a1", label: "BI e dashboards", kind: "app" },
      ],
      links: [
        { from: "s1", to: "p1" },
        { from: "p1", to: "d1" },
        { from: "d1", to: "p2" },
        { from: "p2", to: "d2" },
        { from: "d2", to: "a1" },
      ],
    },
    metrics: [
      { value: "3x", label: "Mais fontes integradas", sublabel: "em 12 meses" },
      { value: "60%", label: "Redução de tempo", sublabel: "para novos relatórios" },
      { value: "1", label: "Fonte única de verdade", sublabel: "governança" },
    ],
    timeline: [
      { phase: "Diagnóstico e roadmap", duration: "4 semanas", description: "Mapeamento de fontes, dores e priorização de casos de uso." },
      { phase: "Fundação (Lake + ETL)", duration: "4 meses", description: "Infraestrutura de ingestão e primeiros modelos de dados." },
      { phase: "Analytics e BI", duration: "3 meses", description: "Camada analítica e dashboards para equipes de produto e operação." },
    ],
    testimonial: {
      quote:
        "A governança e a escalabilidade que a Cactus desenhou nos permitiram evoluir os produtos com dados confiáveis.",
      author: "João Santos",
      role: "CTO",
      company: "Eduzz",
    },
  },
  {
    slug: "libert",
    client: "Libert",
    segment: "Seguros",
    challenge: "Transformação digital e operação de dados.",
    approach: "Sistemas sob medida, analytics e integração.",
    solution: "Sistemas e ambientes analíticos",
    outcome: "Ganho de eficiência e arquitetura mais escalável.",
  },
  {
    slug: "usp",
    client: "USP",
    segment: "Educação",
    challenge: "Plataformas e ambientes de dados acadêmicos.",
    approach: "Desenvolvimento de sistemas e arquitetura de dados.",
    solution: "Sistemas e infraestrutura de dados",
    outcome: "Modernização da operação e base confiável para analytics.",
  },
  {
    slug: "beanalityc",
    client: "Beanalityc",
    segment: "Tecnologia",
    challenge: "Produtos de analytics e BI.",
    approach: "Engenharia de dados, visualização e dashboards.",
    solution: "Ambientes analíticos e BI",
    outcome: "Produtos data-driven e maior clareza para decisões.",
  },
  {
    slug: "zummit",
    client: "Zummit",
    segment: "Tecnologia",
    challenge: "Plataforma e experiência digital.",
    approach: "Desenvolvimento web e engenharia de produto.",
    solution: "Aplicações web e sistemas",
    outcome: "Produto mais robusto e experiência aprimorada.",
  },
  {
    slug: "arcelormittal",
    client: "ArcelorMittal",
    segment: "Indústria",
    challenge: "Estruturação de dados e decisão.",
    approach: "Arquitetura de dados, BI e governança.",
    solution: "Plataforma de dados e analytics",
    outcome: "Melhoria da tomada de decisão e visibilidade operacional.",
  },
  {
    slug: "havan",
    client: "Havan",
    segment: "Varejo",
    challenge: "Operação e visibilidade de dados.",
    approach: "Sistemas, integração e ambientes analíticos.",
    solution: "Sistemas e analytics",
    outcome: "Maior eficiência e base mais confiável para evolução.",
  },
];

const slugToCase = new Map(caseStudyDetails.map((c) => [c.slug, c]));

export function getCaseStudyBySlug(slug: string): CaseStudyDetail | undefined {
  return slugToCase.get(slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudyDetails.map((c) => c.slug);
}

export function getCaseStudySlugFromClient(client: string): string {
  return slugify(client);
}

export function getCaseStudyByClient(client: string): CaseStudyDetail | undefined {
  const slug = getCaseStudySlugFromClient(client);
  return getCaseStudyBySlug(slug) ?? caseStudyDetails.find((c) => c.client === client);
}

import type { PortfolioProject } from "@/types/portfolio";

export const portfolioConsultingProjects: PortfolioProject[] = [
  {
    id: "aureon",
    title: "Aureon — Plataforma SaaS de CRM e Vendas",
    description:
      "Plataforma SaaS para gestão comercial com automação de vendas, analytics em tempo real e integração com canais de comunicação.",
    category: "Data Platform",
    technologies: ["Node.js", "NestJS", "Next.js", "PostgreSQL", "Redis", "Kafka"],
    highlights: [
      "Arquitetura multi-tenant com RLS",
      "Event streaming e processamento assíncrono",
      "Dashboards analíticos em tempo real",
      "WebSockets e integração com canais",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "aureon-plataforma-saas-crm-vendas",
    problemSolved:
      "Gestão comercial unificada com automação de vendas, analytics e integração multicanal.",
    technicalImpact:
      "Arquitetura multi-tenant capaz de processar milhões de eventos comerciais por mês com baixa latência.",
    architectureSteps: [
      "API NestJS (multi-tenant)",
      "PostgreSQL + Redis",
      "Kafka (event streaming)",
      "Next.js (frontend)",
      "Analytics / BI",
    ],
    challenges: [
      "Isolamento de dados entre tenants com performance",
      "Processamento de alto volume de eventos em tempo real",
      "Consistência entre canais de comunicação",
    ],
    results: [
      "Milhões de eventos processados mensalmente",
      "Latência subsegundo em dashboards",
      "Escalabilidade horizontal comprovada",
    ],
  },
  {
    id: "nexus-compras",
    title: "Nexus Compras — Data Warehouse e Analytics com LLM",
    description:
      "Plataforma de analytics corporativo com arquitetura Medallion (Bronze/Silver/Gold) e geração automática de insights usando modelos de linguagem.",
    category: "Data Platform",
    technologies: ["Python", "FastAPI", "Apache Airflow", "ClickHouse", "LLM"],
    highlights: [
      "Data Warehouse Medallion (Bronze/Silver/Gold)",
      "Insights automáticos via LLM",
      "Pipelines orquestrados com Airflow",
      "Mais de 20M registros/mês processados",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "nexus-compras-data-warehouse-llm",
    problemSolved:
      "Analytics corporativo com dados confiáveis e geração automática de análises e recomendações.",
    technicalImpact:
      "Processamento de mais de 20 milhões de registros mensais com pipelines orquestrados e geração automática de análises.",
    architectureSteps: [
      "Fontes de dados (ERP, APIs)",
      "Ingestão (Airflow)",
      "Bronze / Silver / Gold",
      "ClickHouse (OLAP)",
      "LLM (insights)",
      "Dashboards / BI",
    ],
    challenges: [
      "Volume e variedade de fontes de dados",
      "Qualidade e governança em camadas",
      "Integração de LLM com dados estruturados",
    ],
    results: [
      "20M+ registros processados por mês",
      "Insights gerados automaticamente",
      "Time-to-insight reduzido",
    ],
  },
  {
    id: "cdc-mariadb",
    title: "CDC MariaDB com Debezium e Kafka",
    description:
      "Pipeline de Change Data Capture para replicação de dados transacionais em tempo real para sistemas analíticos.",
    category: "Data Engineering",
    technologies: ["Debezium", "Kafka", "Kafka Connect", "MariaDB"],
    highlights: [
      "Captura de binlog em tempo real",
      "Streaming contínuo com latência < 2s",
      "Replicação INSERT/UPDATE/DELETE",
      "Alta resiliência",
    ],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    slug: "cdc-mariadb-debezium-kafka",
    problemSolved:
      "Replicação de dados transacionais para ambientes analíticos em tempo real, sem impacto no sistema origem.",
    technicalImpact:
      "Streaming contínuo de eventos com latência inferior a 2 segundos e alta resiliência.",
    architectureSteps: [
      "MariaDB",
      "Debezium CDC",
      "Kafka",
      "Stream Processing",
      "Data Warehouse",
      "Analytics / AI",
    ],
    challenges: [
      "Captura consistente do binlog sem perda de eventos",
      "Schema evolution e compatibilidade",
      "Recuperação após falhas",
    ],
    results: [
      "Latência inferior a 2 segundos",
      "Zero impacto na origem",
      "Pipeline resiliente em produção",
    ],
  },
  {
    id: "gateway-suntech",
    title: "Gateway Suntech — Plataforma de ingestão de telemetria",
    description:
      "Servidor de ingestão e decodificação de pacotes HEX de dispositivos GPS com arquitetura orientada a eventos.",
    category: "Data Engineering",
    technologies: ["Node.js", "TypeScript", "Clean Architecture", "TCP Server"],
    highlights: [
      "Ingestão contínua de telemetria",
      "Parsing binário em tempo real",
      "Arquitetura orientada a eventos",
      "Servidor TCP dedicado",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    slug: "gateway-suntech-telemetria",
    problemSolved:
      "Recepção e decodificação confiável de pacotes de dispositivos GPS em alta frequência.",
    technicalImpact:
      "Processamento contínuo de telemetria e parsing binário em tempo real.",
    architectureSteps: [
      "Dispositivos GPS",
      "TCP Server (ingestão)",
      "Decodificação HEX",
      "Event streaming",
      "Storage / Analytics",
    ],
    challenges: [
      "Parsing binário eficiente",
      "Alta disponibilidade do servidor TCP",
      "Rastreamento em tempo real",
    ],
    results: [
      "Processamento em tempo real",
      "Arquitetura escalável",
      "Baixa latência de decodificação",
    ],
  },
  {
    id: "analytics-vendas-ia",
    title: "Plataforma de Analytics de Vendas com IA",
    description:
      "Sistema de análise preditiva de desempenho de vendedores utilizando métricas comerciais e geração automática de recomendações com IA.",
    category: "AI Systems",
    technologies: ["Python", "LLM", "Analytics"],
    highlights: [
      "Análise preditiva de desempenho",
      "Recomendações geradas por IA",
      "Métricas comerciais integradas",
      "Estratégias personalizadas",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "analytics-vendas-ia",
    problemSolved:
      "Desempenho de equipes comerciais com recomendações acionáveis geradas automaticamente.",
    technicalImpact:
      "Processamento de milhões de registros históricos para geração de estratégias personalizadas de vendas.",
    architectureSteps: [
      "Dados de vendas",
      "ETL / Modelagem",
      "Modelos preditivos",
      "LLM (recomendações)",
      "Dashboards / Relatórios",
    ],
    challenges: [
      "Volume de dados históricos",
      "Qualidade das recomendações da IA",
      "Integração com CRM",
    ],
    results: [
      "Estratégias personalizadas por vendedor",
      "Recomendações em linguagem natural",
      "Métricas de impacto mensuráveis",
    ],
  },
  {
    id: "pipeline-gcp-dw",
    title: "Pipeline de ingestão GCP para Data Warehouse",
    description:
      "Pipeline de ingestão e transformação de dados utilizando Cloud Run, Datastream e BigQuery.",
    category: "Data Engineering",
    technologies: ["GCP", "BigQuery", "Cloud Run", "Terraform"],
    highlights: [
      "Ingestão com Datastream",
      "Transformação serverless (Cloud Run)",
      "Data Warehouse no BigQuery",
      "Infraestrutura como código (Terraform)",
    ],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    slug: "pipeline-gcp-data-warehouse",
    problemSolved:
      "Carregamento contínuo e transformação de grandes volumes para análise no GCP.",
    technicalImpact:
      "Processamento escalável de grandes volumes de dados com arquitetura baseada em eventos.",
    architectureSteps: [
      "Fontes (DB, APIs)",
      "Datastream (CDC/ingestão)",
      "Cloud Run (transformação)",
      "BigQuery",
      "BI / Analytics",
    ],
    challenges: [
      "Orquestração de componentes GCP",
      "Custo e otimização de queries",
      "Governança e particionamento",
    ],
    results: [
      "Ingestão contínua em produção",
      "Escalabilidade automática",
      "Infra reproduzível com Terraform",
    ],
  },
  {
    id: "framework-clean-arch-node",
    title: "Framework Clean Architecture para Node.js",
    description:
      "Template de arquitetura escalável para aplicações Node.js baseado em Clean Architecture e Domain Driven Design.",
    category: "Software Architecture",
    technologies: ["Node.js", "TypeScript", "DDD", "Clean Architecture"],
    highlights: [
      "Separação domínio, aplicação e infra",
      "Testabilidade e manutenção",
      "DDD e padrões hexagonais",
      "Documentação e exemplos",
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    slug: "framework-clean-architecture-node",
    problemSolved:
      "Base consistente para novos projetos com foco em manutenção e evolução.",
    technicalImpact:
      "Estrutura modular que separa domínio, aplicação e infraestrutura facilitando manutenção e escalabilidade.",
    architectureSteps: [
      "Domain (entidades, value objects)",
      "Application (use cases)",
      "Infrastructure (DB, APIs)",
      "Presentation (HTTP, CLI)",
    ],
    challenges: [
      "Curva de aprendizado da equipe",
      "Balance entre flexibilidade e padrão",
      "Documentação viva",
    ],
    results: [
      "Onboarding mais rápido",
      "Testes isolados por camada",
      "Evolução sem reescrita",
    ],
  },
  {
    id: "sistema-multiagente",
    title: "Sistema multi-agente para análise de dados",
    description:
      "Arquitetura multi-agente para análise e geração de insights automáticos a partir de dados corporativos.",
    category: "AI Systems",
    technologies: ["LLM", "Python", "Agents"],
    highlights: [
      "Agentes especializados por domínio",
      "Coordenação e orquestração",
      "Insights em linguagem natural",
      "Integração com dados corporativos",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "sistema-multiagente-analise-dados",
    problemSolved:
      "Análise e interpretação automatizada de dados com recomendações em linguagem natural.",
    technicalImpact:
      "Coordenação entre agentes especializados para interpretação e recomendação de estratégias.",
    architectureSteps: [
      "Fontes de dados",
      "Orquestrador",
      "Agentes (análise, síntese, recomendação)",
      "LLM",
      "Relatórios / API",
    ],
    challenges: [
      "Coordenação entre agentes",
      "Custo e latência de chamadas LLM",
      "Consistência das recomendações",
    ],
    results: [
      "Insights automáticos",
      "Recomendações acionáveis",
      "Redução de tempo de análise",
    ],
  },
  {
    id: "orquestrador-pipelines",
    title: "Orquestrador de pipelines de dados",
    description:
      "Plataforma de orquestração para pipelines de ingestão, transformação e carga com monitoramento e retry.",
    category: "Data Engineering",
    technologies: ["Python", "Airflow", "Docker", "Kubernetes"],
    highlights: [
      "Orquestração centralizada",
      "Retry e alertas",
      "Execução em containers",
      "Monitoramento de SLA",
    ],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    slug: "orquestrador-pipelines",
    problemSolved:
      "Execução confiável e observável de dezenas de pipelines de dados em produção.",
    technicalImpact:
      "Orquestração escalável com visibilidade de dependências e tempo de execução.",
    architectureSteps: [
      "Definição de DAGs",
      "Scheduler",
      "Workers (Kubernetes/Docker)",
      "Metastore",
      "Monitoramento",
    ],
    challenges: [
      "Dependências entre pipelines",
      "Gestão de recursos",
      "Recuperação após falhas",
    ],
    results: [
      "Dezenas de pipelines em produção",
      "SLA e alertas configurados",
      "Redução de falhas silenciosas",
    ],
  },
  {
    id: "data-warehouse-medallion",
    title: "Data Warehouse com arquitetura Medallion",
    description:
      "Implementação de camadas Bronze, Silver e Gold para governança, qualidade e consumo analítico.",
    category: "Data Engineering",
    technologies: ["Spark", "Delta Lake", "Python", "dbt"],
    highlights: [
      "Bronze (raw), Silver (curated), Gold (analytics)",
      "Governança e linhagem",
      "Transformações com dbt",
      "Consumo por BI e ML",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "data-warehouse-medallion",
    problemSolved:
      "Dados confiáveis e rastreáveis para analytics e ML em um único lakehouse.",
    technicalImpact:
      "Separação clara de camadas com qualidade e reuso entre projetos.",
    architectureSteps: [
      "Ingestão (Bronze)",
      "Limpeza e conformidade (Silver)",
      "Agregações e modelos (Gold)",
      "BI / ML",
    ],
    challenges: [
      "Evolução de schemas",
      "Performance em camadas Gold",
      "Documentação de regras",
    ],
    results: [
      "Governança por camada",
      "Reuso entre squads",
      "Time-to-insight reduzido",
    ],
  },
  {
    id: "plataforma-apis",
    title: "Plataforma de APIs e integração",
    description:
      "Gateway e camada de integração para exposição segura de APIs internas e integração com sistemas legados.",
    category: "SaaS Platform",
    technologies: ["Node.js", "Kong", "OAuth2", "Redis"],
    highlights: [
      "Gateway de APIs",
      "Autenticação e rate limiting",
      "Integração com legados",
      "Monitoramento de uso",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    slug: "plataforma-apis-integracao",
    problemSolved:
      "Exposição controlada e segura de APIs para parceiros e sistemas internos.",
    technicalImpact:
      "Centralização de autenticação, throttling e observabilidade em um único gateway.",
    architectureSteps: [
      "Clientes / Parceiros",
      "API Gateway",
      "Auth (OAuth2/JWT)",
      "Backends / Legados",
    ],
    challenges: [
      "Compatibilidade com legados",
      "SLA e rate limiting por cliente",
      "Observabilidade distribuída",
    ],
    results: [
      "APIs padronizadas e seguras",
      "Controle de uso por cliente",
      "Menor acoplamento com legados",
    ],
  },
];

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
];

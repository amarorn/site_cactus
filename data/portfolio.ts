import type { PortfolioProject } from "@/types/portfolio";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "aureon",
    title: "Aureon – Plataforma SaaS de CRM e Vendas",
    description:
      "Plataforma SaaS para gestão de relacionamento, comunicação, automação e análise de vendas. Backend NestJS, frontend Next.js, arquitetura multi-tenant com PostgreSQL, event streaming (Kafka) e banco analítico (ClickHouse).",
    category: "Data Platform",
    technologies: [
      "Node.js",
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Kafka",
      "ClickHouse",
      "OpenSearch",
      "Redis",
      "BullMQ",
    ],
    highlights: [
      "Arquitetura multi-tenant com RLS",
      "Event streaming e processamento assíncrono",
      "Dashboards analíticos (ECharts)",
      "WebSockets em tempo real",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "aureon-plataforma-saas-crm-vendas",
  },
  {
    id: "nexus-compras",
    title: "Nexus Compras – Data Warehouse e Analytics com LLM",
    description:
      "Sistema de Data Warehouse com arquitetura medallion (Bronze/Silver/Gold), pipelines ETL, análise por LLM (LangChain + OpenAI) e pipeline de ML para previsão de demanda. Orquestração com Airflow, MLOps com MLflow.",
    category: "Data Platform",
    technologies: [
      "Python",
      "FastAPI",
      "Apache Airflow",
      "ClickHouse",
      "Trino",
      "MLflow",
      "LangChain",
      "XGBoost",
      "LightGBM",
    ],
    highlights: [
      "Data Warehouse OLAP em ClickHouse",
      "Análise e recomendações via LLM",
      "Previsão de demanda (ML)",
      "Monitoramento Prometheus/Grafana",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "nexus-compras-data-warehouse-llm",
  },
  {
    id: "cdc-linx",
    title: "CDC MariaDB com Debezium e Kafka",
    description:
      "Replicação Change Data Capture (CDC) de MariaDB origem para MariaDB destino usando Debezium e Kafka Connect. Carga inicial via dump/Parquet; replicação contínua a partir do binlog.",
    category: "Data Engineering",
    technologies: ["Debezium", "Kafka", "Kafka Connect", "MariaDB", "JDBC Sink"],
    highlights: [
      "Captura de binlog em tempo real",
      "Pipeline CDC completo",
      "Replicação INSERT/UPDATE/DELETE",
    ],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    slug: "cdc-mariadb-debezium-kafka",
  },
  {
    id: "axiom-data",
    title: "AXIOM DATA – Site Institucional",
    description:
      "Site institucional para a AXIOM DATA, empresa de terceirização de profissionais de inteligência de dados. Next.js 14, TypeScript, Tailwind CSS e animações com Framer Motion.",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide"],
    highlights: [
      "Layout responsivo e acessível",
      "Animações e performance",
      "SEO e métricas",
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    slug: "axiom-data-site-institucional",
  },
  {
    id: "site-artecor",
    title: "Artecor – Site Institucional",
    description:
      "Site institucional para empresa de pintura predial, residencial, condomínios e limpeza de fachadas. Next.js 16 (App Router), TypeScript, Tailwind e Framer Motion, preparado para GA/GTM e deploy Vercel ou Cloudflare.",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "App Router e boas práticas Next.js",
      "Integração WhatsApp e analytics",
      "Deploy moderno (Vercel/Cloudflare)",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    slug: "artecor-site-institucional",
  },
  {
    id: "homecare",
    title: "Homecare – Plataforma de Cuidados Domiciliares",
    description:
      "Aplicativo e API para gestão de cuidados domiciliares: onboarding de pacientes e profissionais, autenticação, assinaturas e pagamentos (Mercado Pago), fluxos clínicos e conformidade LGPD.",
    category: "Mobile",
    technologies: [
      "Flutter",
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Mercado Pago",
      "Firebase",
      "JWT",
    ],
    highlights: [
      "App mobile multiplataforma (Flutter)",
      "API REST com pagamentos e assinaturas",
      "Onboarding paciente e profissional",
      "Segurança, rate limit e auditoria",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    slug: "homecare-plataforma-cuidados-domiciliares",
  },
  {
    id: "orion",
    title: "Orion – Contratos de Dados, Lineage e Qualidade",
    description:
      "Plugin Cursor para arquitetura de dados: descoberta de contratos a partir de SQL, dbt, pandas e PySpark, detecção de breaking changes em PRs, sugestão de testes de qualidade e análise de impacto em lineage (upstream/downstream).",
    category: "Developer Tools",
    technologies: [
      "Cursor Plugin",
      "SQL",
      "dbt",
      "pandas",
      "PySpark",
      "Data Contracts",
      "Lineage",
    ],
    highlights: [
      "Descoberta de contratos a partir de código",
      "Detecção de breaking changes em diff/PR",
      "Sugestão automática de testes de qualidade",
      "Impacto de mudanças em lineage",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    slug: "orion-contratos-dados-lineage-qualidade",
  },
  {
    id: "medinfo",
    title: "Medinfo – Plataforma Clínica e Prontuários",
    description:
      "Plataforma clínica modular com dashboards, prontuários eletrônicos e analytics em tempo real. Monorepo com backend FastAPI (Clean Architecture) e frontend React + Vite + TypeScript. PostgreSQL, Redis, S3, autenticação JWT e RBAC.",
    category: "Data Platform",
    technologies: [
      "FastAPI",
      "React",
      "TypeScript",
      "Vite",
      "PostgreSQL",
      "Redis",
      "SQLAlchemy",
      "ApexCharts",
      "React Query",
      "Zustand",
    ],
    highlights: [
      "Clean Architecture e SOLID no backend",
      "Dashboards interativos com drag-and-drop",
      "Prontuário com autocompletar SNOMED/CID-10",
      "Agenda integrada e analytics em tempo real",
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    slug: "medinfo-plataforma-clinica-prontuarios",
  },
  {
    id: "leitura-notas",
    title: "Análise de Boletim Escolar com LLM e OCR",
    description:
      "Sistema web para análise de boletins escolares: extração automática com OCR (Ollama/LLaVA, PaddleOCR ou Tesseract) e LlamaIndex para dados estruturados, cálculo de médias, projeção de desempenho e dashboard. LLM OpenAI ou Ollama local.",
    category: "AI",
    technologies: [
      "Python",
      "FastAPI",
      "LlamaIndex",
      "Ollama",
      "OpenAI",
      "React",
      "Tailwind",
    ],
    highlights: [
      "OCR com modelos de visão (LLaVA/Llama) via Ollama",
      "Extração estruturada com LLM (LlamaIndex)",
      "Cálculo de médias e projeção de desempenho",
      "Dashboard com status e métricas",
    ],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    slug: "analise-boletim-escolar-llm-ocr",
  },
  {
    id: "evofit-ai",
    title: "EvoFit-AI – Personal Trainer com IA",
    description:
      "App de treino pessoal que utiliza IA para gerar planos personalizados. Monorepo com backend NestJS (Clean Architecture) e frontend React + Vite + TypeScript, PostgreSQL e Docker.",
    category: "Web",
    technologies: ["NestJS", "React", "TypeScript", "Vite", "PostgreSQL", "Docker"],
    highlights: [
      "Planos de treino personalizados com IA",
      "Backend NestJS em Clean Architecture",
      "Frontend React + Vite + TypeScript",
      "Monorepo e CI/CD",
    ],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    slug: "evofit-ai-personal-trainer-ia",
  },
  {
    id: "siliconeview",
    title: "SiliconeView – Simulação Estética com IA",
    description:
      "App mobile para simulação estética de silicone com IA, qualificação de pacientes e agendamento de consultas. Flutter, BLoC, GoRouter, Firebase e pagamentos com Stripe.",
    category: "Mobile",
    technologies: ["Flutter", "BLoC", "GoRouter", "Firebase", "Stripe"],
    highlights: [
      "Simulação estética com inteligência artificial",
      "Questionário e upload de fotos guiado",
      "Relatório premium e agendamento médico",
      "Pagamentos Pix e cartão",
    ],
    image: "https://images.unsplash.com/photo-1594489570354-605a965a3eec?w=800&q=80",
    slug: "siliconeview-simulacao-estetica-ia",
  },
  {
    id: "arcello-commodities",
    title: "Arcello – Pipeline de Notícias de Commodities",
    description:
      "Projeto Kedro para ingestão, transformação e exposição de notícias de commodities (Platts, Fastmarkets). Arquitetura Bronze-Silver-Gold, Delta Lake e Databricks, com observabilidade por pipeline e hooks.",
    category: "Data Engineering",
    technologies: [
      "Python",
      "Kedro",
      "Apache Spark",
      "Delta Lake",
      "Databricks",
    ],
    highlights: [
      "Arquitetura Bronze-Silver-Gold (Lakehouse)",
      "Ingestão incremental e normalização avançada",
      "Observabilidade automatizada (hooks)",
      "Deploy Databricks com governança",
    ],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    slug: "arcello-pipeline-noticias-commodities",
  },
  {
    id: "beazap",
    title: "BeaZap – Automação e Gestão WhatsApp",
    description:
      "Plataforma de automação e gestão para WhatsApp: API FastAPI com webhooks, métricas, instâncias, dashboard, equipes, respostas rápidas, relatórios e integração Databricks. Frontend Vue (WPPConnect), suporte a OpenAI e Anthropic para tradução e contexto.",
    category: "Data Platform",
    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Vue.js",
      "OpenAI",
      "Anthropic",
    ],
    highlights: [
      "Webhooks e gestão de instâncias WhatsApp",
      "Dashboard, métricas e relatórios",
      "Integração Databricks e tradução com IA",
      "Respostas rápidas e equipes",
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    slug: "beazap-automacao-gestao-whatsapp",
  },
  {
    id: "beinsight",
    title: "BeInsight – BI com IA e Insights em Linguagem Natural",
    description:
      "Plataforma de Business Intelligence orientada a texto: upload de datasets (CSV), análise exploratória automatizada com DuckDB/Polars, geração de insights estatísticos, recomendações com LLM, dashboards drag-and-drop e assistente de IA contextual. Clean Architecture, FastAPI e Next.js.",
    category: "Data Platform",
    technologies: [
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "DuckDB",
      "Polars",
      "OpenAI",
      "MinIO/S3",
    ],
    highlights: [
      "Análise exploratória e profiling automatizado",
      "Insights e recomendações com LLM",
      "Dashboards interativos drag-and-drop",
      "Chat contextual sobre dados e dashboards",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "beinsight-bi-ia-insights-linguagem-natural",
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return portfolioProjects.map((p) => p.slug);
}

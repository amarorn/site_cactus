# Análise dos repositórios para o portfólio Cactus

Repositórios encontrados em `Documents/Cactus` e indicação de uso no portfólio.

---

## Recomendados para o portfólio

| Repo | Categoria sugerida | Motivo |
|------|--------------------|--------|
| **Aureon** | Data Platform / SaaS | Plataforma SaaS completa: NestJS, Next.js, PostgreSQL, Kafka, ClickHouse, OpenSearch, Redis/BullMQ. Alta capacidade técnica. |
| **Nexus Compras** | Data Platform / Engenharia de Dados | Data Warehouse (Bronze/Silver/Gold), Airflow, ClickHouse, Trino, LLM (LangChain), MLflow, FastAPI. Muito alinhado ao posicionamento da Cactus. |
| **cdc_linx** | Data Engineering | CDC com Debezium, Kafka, MariaDB. Projeto focado em engenharia de dados e integração. |
| **site da AXIOM DATA** | Web | Site institucional Next.js 14, TypeScript, Tailwind, Framer Motion. Cliente de dados/BI. |
| **site_artecor** | Web | Site institucional Next.js 16, TypeScript, Tailwind, Framer Motion. Empresa de pintura e limpeza de fachadas. |
| **homecare** | Mobile | Plataforma de cuidados domiciliares: app Flutter + API Node/Express, pagamentos (Mercado Pago), onboarding, LGPD. |
| **Orion** (plugins/orion) | Developer Tools | Plugin Cursor: contratos de dados, lineage, detecção de breaking changes, testes de qualidade (SQL, dbt, pandas, PySpark). |
| **Medinfo** (Projetos/Medinfo) | Data Platform | Plataforma clínica: FastAPI + React, prontuários, dashboards, agenda, analytics, Clean Architecture, PostgreSQL, Redis, S3. |
| **Leitura de Notas** (Projetos/leitura_de_notas) | AI | Análise de boletim escolar com LLM (LlamaIndex, OpenAI/Ollama) e OCR (Ollama/LLaVA, PaddleOCR). |
| **EvoFit-AI** (Projetos/EvoFit-AI) | Web | Personal trainer com IA, NestJS + React + Vite, Clean Architecture. |
| **SiliconeView** (Projetos/SiliconeView) | Mobile | Simulação estética com IA, Flutter, BLoC, Firebase, Stripe. |
| **Arcello – Commodities News** (Documents/Arcello) | Data Engineering | Pipeline Kedro Bronze-Silver-Gold, notícias Platts/Fastmarkets, Databricks, Delta Lake. |
| **BeaZap** (BeAnaityc/BeaZap) | Data Platform | Automação e gestão WhatsApp: FastAPI, webhooks, dashboard, métricas, integração Databricks, OpenAI/Anthropic. |
| **BeInsight** (BeAnaityc/Be-Quick-Insights) | Data Platform | BI com IA: upload de datasets, análise DuckDB/Polars, insights com LLM, dashboards drag-and-drop, chat contextual. FastAPI + Next.js. |

**ITA:** Nenhum repositório específico do ITA (Instituto Tecnológico de Aeronáutica) foi encontrado em `Cactus` ou `Documents`. Se existir em outro caminho, incluir manualmente em `data/portfolio.ts`.

---

## Não recomendados (ou com ressalvas)

| Repo | Motivo |
|------|--------|
| **site_cactus** | É o próprio site/portfólio; não listar como projeto. |
| **plugins** (outros) | Outros plugins Cursor (Teaching, etc.). Orion já está no portfólio. |
| **site_sa6_realty** | Site estático HTML + tema WordPress; menos representativo de “software house” que os outros. |
| **output** / **Projetos** | Não foram analisados em detalhe; verificar conteúdo antes de incluir. |

---

## Resumo

- **Incluir no portfólio:** Aureon, Nexus Compras, cdc_linx, site AXIOM DATA, site_artecor, homecare, Orion, Medinfo, Leitura de Notas, EvoFit-AI, SiliconeView, Arcello Commodities, BeaZap, BeInsight (14 projetos).
- **Imagens:** usar placeholders (Unsplash) por tema ou screenshots reais quando disponíveis.
- **Links:** opcional adicionar `repositoryUrl` ou `liveUrl` no tipo e exibir no card/detalhe do projeto.

Os 14 projetos estão em `data/portfolio.ts` (incluindo BeaZap e BeInsight).

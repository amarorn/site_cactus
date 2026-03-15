import { company } from "./company";
import { homeServices } from "./services";

/**
 * Chunks of company knowledge for RAG. Each entry is a document chunk to be embedded and stored.
 */
export const knowledgeChunks = [
  {
    id: "company-1",
    text: `${company.name} é uma empresa de tecnologia com sede em ${company.location.full} e atendimento ${company.coverage}. ${company.shortDescription}`,
    metadata: { source: "company", title: "Sobre a empresa" },
  },
  {
    id: "company-2",
    text: company.longDescription,
    metadata: { source: "company", title: "Descrição" },
  },
  {
    id: "company-3",
    text: `Tagline: ${company.tagline}. Foco em desenvolvimento de software, dados e IA com engenharia que sustenta crescimento.`,
    metadata: { source: "company", title: "Tagline" },
  },
  ...homeServices.map((s) => ({
    id: `service-${s.id}`,
    text: `${s.title}: ${s.description}`,
    metadata: { source: "services", serviceId: s.id, title: s.title },
  })),
  {
    id: "faq-contato",
    text: "Para falar com a equipe comercial ou técnica, use o formulário de contato no site, o e-mail disponível na página de contato ou o WhatsApp. A Cactus responde em até 24h úteis.",
    metadata: { source: "faq", title: "Contato" },
  },
  {
    id: "faq-servicos",
    text: "Serviços oferecidos: aplicativos mobile, aplicações web, sistemas sob medida, arquitetura de dados, engenharia de dados, ambientes analíticos e BI, ciência de dados, IA aplicada, LLMs e automações. Podemos sugerir o melhor serviço conforme o seu objetivo.",
    metadata: { source: "faq", title: "Serviços" },
  },
];

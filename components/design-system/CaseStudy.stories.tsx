import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CaseStudy } from "./CaseStudy";

const meta: Meta<typeof CaseStudy> = {
  title: "Design System/CaseStudy",
  component: CaseStudy,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CaseStudy>;

export const Default: Story = {
  args: {
    client: "Banco BV",
    segment: "Financeiro",
    challenge: "Integrar múltiplas fontes de dados com governança e auditoria.",
    approach: "Arquitetura de dados em camadas com pipelines idempotentes.",
    solution: "Plataforma centralizada com qualidade e rastreabilidade.",
    outcome: "Redução de 40% no tempo de fechamento e relatórios confiáveis.",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2">
      <CaseStudy
        client="Banco BV"
        segment="Financeiro"
        challenge="Integrar múltiplas fontes com governança."
        approach="Arquitetura em camadas e pipelines idempotentes."
        solution="Plataforma centralizada com qualidade."
        outcome="Redução de 40% no tempo de fechamento."
      />
      <CaseStudy
        client="Varejo Nacional"
        segment="Varejo"
        challenge="Analytics em tempo real para decisão."
        approach="Data lake + streaming e modelos de recomendação."
        solution="Dashboard e alertas com latência baixa."
        outcome="Aumento de conversão e estoque otimizado."
      />
    </div>
  ),
};

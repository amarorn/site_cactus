import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Testimonial } from "./Testimonial";

const meta: Meta<typeof Testimonial> = {
  title: "Design System/Testimonial",
  component: Testimonial,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Testimonial>;

export const Default: Story = {
  args: {
    quote:
      "A Cactus entregou a plataforma de dados no prazo e com qualidade. Equipe técnica de alto nível.",
    author: "Maria Silva",
    role: "Diretora de TI",
    company: "Empresa X",
  },
};

export const Short: Story = {
  args: {
    quote: "Parceria recomendada para projetos de tecnologia.",
    author: "João Santos",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Testimonial
        quote="A Cactus entregou a plataforma de dados no prazo e com qualidade."
        author="Maria Silva"
        role="Diretora de TI"
        company="Empresa X"
      />
      <Testimonial
        quote="Parceria recomendada para projetos de tecnologia e dados."
        author="João Santos"
        role="CTO"
        company="Startup Y"
      />
      <Testimonial
        quote="Suporte técnico excelente e entregas consistentes."
        author="Ana Costa"
        company="Indústria Z"
      />
    </div>
  ),
};

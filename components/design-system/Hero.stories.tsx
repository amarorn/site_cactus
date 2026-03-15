import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Hero } from "./Hero";
import { Button } from "./Button";

const meta: Meta<typeof Hero> = {
  title: "Design System/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    overline: "Tecnologia e dados",
    title: "Soluções que escalam com o seu negócio",
    subtitle:
      "Desenvolvimento de software, engenharia de dados e IA aplicada. Do diagnóstico à operação.",
    actions: (
      <>
        <Button variant="primary" size="lg">
          Falar com especialista
        </Button>
        <Button variant="secondary" size="lg">
          Ver serviços
        </Button>
      </>
    ),
  },
};

export const Minimal: Story = {
  args: {
    title: "Título principal",
    subtitle: "Uma linha de apoio.",
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "outline"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", size: "md", children: "Contratar" },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    children: "Ver serviços",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Ghost: Story = {
  args: { variant: "ghost", size: "md", children: "Saiba mais" },
};

export const Outline: Story = {
  args: { variant: "outline", size: "md", children: "Documentação" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Pequeno</Button>
      <Button size="md">Médio</Button>
      <Button size="lg">Grande</Button>
    </div>
  ),
};

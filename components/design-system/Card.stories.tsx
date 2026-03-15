import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./Card";

const meta: Meta<typeof Card> = {
  title: "Design System/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outline", "glass"],
    },
    padding: { control: "select", options: ["none", "sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    variant: "elevated",
    padding: "md",
    children: (
      <>
        <CardHeader>
          <CardTitle>Título do card</CardTitle>
        </CardHeader>
        <CardContent>
          Conteúdo do card usando tokens de tipografia e cor. Acessível em dark e light.
        </CardContent>
        <CardFooter>Ação ou rodapé</CardFooter>
      </>
    ),
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    padding: "md",
    children: (
      <>
        <CardTitle>Card outline</CardTitle>
        <CardContent>Borda sutil, bom para listas e grids.</CardContent>
      </>
    ),
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    padding: "md",
    children: (
      <>
        <CardTitle>Glass card</CardTitle>
        <CardContent>Efeito glassmorphism com backdrop blur.</CardContent>
      </>
    ),
  },
};

export const PaddingVariants: Story = {
  render: () => (
    <div className="grid gap-4 sm:grid-cols-3">
      <Card padding="sm">
        <CardTitle>Sm</CardTitle>
        <CardContent>Padding pequeno</CardContent>
      </Card>
      <Card padding="md">
        <CardTitle>Md</CardTitle>
        <CardContent>Padding médio (default)</CardContent>
      </Card>
      <Card padding="lg">
        <CardTitle>Lg</CardTitle>
        <CardContent>Padding grande</CardContent>
      </Card>
    </div>
  ),
};

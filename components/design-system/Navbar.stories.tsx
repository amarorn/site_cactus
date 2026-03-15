import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { Button } from "./Button";

const logo = (
  <Link href="/" className="text-lg font-bold text-white">
    Cactus
  </Link>
);

const links = [
  { href: "/servicos", label: "Serviços" },
  { href: "/cases", label: "Cases" },
  { href: "/contato", label: "Contato" },
];

const meta: Meta<typeof Navbar> = {
  title: "Design System/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    logo,
    links,
    onDark: true,
    cta: (
      <Button variant="primary" size="sm">
        Contratar
      </Button>
    ),
  },
  decorators: [
    (Story) => (
      <div className="bg-graphite">
        <Story />
      </div>
    ),
  ],
};

export const LightContext: Story = {
  args: {
    logo: <Link href="/" className="text-lg font-bold text-graphite dark:text-white">Cactus</Link>,
    links,
    onDark: false,
    cta: (
      <Button variant="primary" size="sm">
        Contratar
      </Button>
    ),
  },
};

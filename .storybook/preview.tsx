import React from "react";
import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "var(--background)", default: true },
        { name: "light", value: "#faf9f6" },
      ],
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Dark (default) / Light",
      defaultValue: "dark",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "dark", icon: "circle", title: "Dark" },
          { value: "light", icon: "circle", title: "Light" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals?.theme ?? "dark";
      return (
        <div
          className={theme}
          style={{
            minHeight: "100vh",
            padding: "1rem",
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;

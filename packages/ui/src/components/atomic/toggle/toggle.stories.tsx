import { Meta, StoryObj } from "@storybook/react-vite";
import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "./toggle";

const meta = {
  title: "Toggle",
  tags: ["autodocs"],
  component: Toggle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Toggle defaultPressed aria-label="Toggle bold">
        <Bold />
        Bold
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic />
        Italic
      </Toggle>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Toggle size="sm" aria-label="Small toggle" defaultPressed>
        <Underline />
        Small
      </Toggle>
      <Toggle size="default" aria-label="Default toggle">
        Default
      </Toggle>
      <Toggle size="lg" aria-label="Large toggle">
        Large
      </Toggle>
    </div>
  ),
};

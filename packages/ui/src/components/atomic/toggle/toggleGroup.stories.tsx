import type { CSSProperties } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./toggleGroup";

const meta = {
  title: "ToggleGroup",
  tags: ["autodocs"],
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    type: "single",
    defaultValue: "bold",
  },
  render: (args) => (
    <ToggleGroup
      {...args}
    >
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold />
        Bold
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic />
        Italic
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline />
        Underline
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  args: {
    type: "multiple",
    defaultValue: ["bold", "italic"],
    size: "sm",
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold />
        Bold
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic />
        Italic
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline />
        Underline
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

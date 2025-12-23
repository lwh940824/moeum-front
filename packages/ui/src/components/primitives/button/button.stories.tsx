import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
    title: "Button",
    tags: ['autodocs'],
    component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Button",
        variant: "default",
        ariaLabel: false,
        asChild: false,
    },
    render: (args) => (
        <div style={{ display: 'flex', gap: 12 }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="default">Default</Button>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="icon" aria-label="Settings"></Button>
      <Button asChild><a href="/save">링크</a></Button>
    </div>
    )
}

export const Submit: Story = {
    args: {
        children: "Button", 
        variant: "submit", 
        ariaLabel: false},
}

export const Danger: Story = {
    args: {
        children: "Button", 
        variant: "danger", 
        ariaLabel: false},
}
import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import { ButtonProps } from "./button.type";
import { Settings } from "lucide-react";

const meta = {
    title: "Button",
    tags: ['autodocs'],
    component: Button,
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {
    args: {
        variant: "default",
        asChild: false,
    },
    render: ({asChild, ...args}) => (
        <div style={{ display: 'flex', gap: 4 }}>
            <Button {...args} size="default" aria-label="Settings">TEST<Settings /></Button>
            <Button variant="default"><Settings/>Default</Button>
            <Button {...args} size="sm" aria-label="Settings"><Settings />TEST</Button>
            <Button {...args} size="lg" aria-label="Settings">TEST LG<Settings /></Button>
            <Button {...args} size="icon" aria-label="Settings"><Settings /></Button>

            <div className="flex gap-2">
        <Button variant="default"><Settings/>Default</Button>
      </div>
        </div>
    )
}

export const Primary: Story = {
    args: {
        variant: "default",
        asChild: false
    },
    render: ({asChild, ...args}) => (
    <div style={{ display: 'flex', gap: 12 }}>
        <Button {...args} size="sm">Small</Button>
        <Button {...args} size="default">Default</Button>
        <Button {...args} size="lg">Large</Button>
        <Button {...args} size="icon" aria-label="Settings"><Settings /></Button>
        <Button asChild><a href="/save">링크</a></Button>
    </div>
    )
}

export const Submit: Story = {
    args: {
        children: "Button", 
        variant: "submit", },
}

export const Danger: Story = {
    args: {
        children: "Button", 
        variant: "danger",
    }
}
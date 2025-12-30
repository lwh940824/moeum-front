import { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

const meta = {
    parameters: {
        layout: 'centered',
     },
    title: "Input",
    tags: ['autodocs'],
    component: Input,
} satisfies Meta<React.ComponentProps<"input">>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { 
    args: {
        type: "password",
        placeholder: "비밀번호를 입력해주요"
    },
}

export const Invalid: Story = { 
    args: {
        type: "text",
        placeholder: "test",
        "aria-invalid": true,
    },
}

export const Disabled: Story = { 
    args: {
        type: "text",
        placeholder: "test",
        disabled: true,
    },
}
import { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordInput } from "./passwordInput";

const meta = {
    parameters: {
        layout: 'centered',
     },
    title: "PasswordInput",
    tags: ['autodocs'],
    component: PasswordInput,
} satisfies Meta<React.ComponentProps<"input">>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { 
    args: {
    },
}
import { Meta, StoryObj } from "@storybook/react-vite";
import { InputGroup, InputGroupAddon } from "./inputGroup";
import { Input } from "../../atomic/input";

const meta = {
    parameters: {
        layout: 'centered',
    },
    title: "InputGroup",
    tags: ['autodocs'],
    component: InputGroup,
} satisfies Meta<React.ComponentProps<"div">>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <InputGroup {...args}>
        <InputGroupAddon>4</InputGroupAddon>
        <Input />

    </InputGroup>,
};

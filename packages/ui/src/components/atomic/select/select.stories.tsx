
import { Meta, StoryObj } from "@storybook/react-vite";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const meta = {
    parameters: {
        layout: 'centered',
    },
    title: "Select",
    tags: ['autodocs'],
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) =>
        <Select {...args}>
            <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent className="flex">
                <SelectItem className="border border-border w-10 h-10" value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
        </Select>,
}
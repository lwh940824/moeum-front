import { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Input } from "@/components/atomic/input";
import { PasswordInput } from "@/components/atomic/passwordInput/passwordInput";

const meta = {
    parameters: {
        layout: 'centered',
    },
    title: "Card",
    tags: ['autodocs'],
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <Card {...args}>
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <Input />
            <PasswordInput />
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>,
};
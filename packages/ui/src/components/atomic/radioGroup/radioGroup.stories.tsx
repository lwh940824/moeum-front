import { StoryObj } from "@storybook/react-vite"
import { RadioGroup, RadioGroupItem } from "../radioGroup"


const meta = {
    title: "Components/RadioGroup",
    component: RadioGroup,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
}
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    render: () => (
        <RadioGroup className="flex space-x-2">
            <RadioGroupItem
                value="apple"
                id="apple"
                className="w-auto h-10 rounded-md px-3 py-1 border-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            >
                Apple
            </RadioGroupItem>
            <RadioGroupItem
                value="banana"
                id="banana"
                className="w-auto h-10 rounded-md px-3 py-1 border-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            >
                Banana
            </RadioGroupItem>
            <RadioGroupItem
                value="grape"
                id="grape"
                className="w-auto h-10 rounded-md px-3 py-1 border-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            >
                Grape
            </RadioGroupItem>
            <RadioGroupItem
                value="orange"
                id="orange"
                className="w-auto h-10 rounded-md px-3 py-1 border-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            >
                Orange
            </RadioGroupItem>
        </RadioGroup>
    )
}
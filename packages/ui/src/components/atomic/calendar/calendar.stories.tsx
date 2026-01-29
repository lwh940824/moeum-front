import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Calendar } from "./calendar";

const meta = {
    parameters: {
        layout: "centered",
    },
    title: "Calendar",
    tags: ["autodocs"],
    component: Calendar,
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());

        return (
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
                captionLayout="dropdown"
                endMonth={new Date(2027, 12, 1)}
            />
        );
    },
};

export const Range: Story = {
    args: {
        mode: "range",
        selected: { from: new Date(2026, 0, 10), to: new Date(2026, 0, 15) },
        showOutsideDays: true,
    },
};

export const DropdownCaption: Story = {
    args: {
        mode: "single",
        captionLayout: "dropdown",
        selected: new Date(2026, 0, 26),
        showOutsideDays: true,
    },
};

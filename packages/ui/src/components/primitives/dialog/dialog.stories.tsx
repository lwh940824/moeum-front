import { StoryObj } from "@storybook/react-vite"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "../dialog"
import { Button } from "../../atomic/button"

const meta = {
    title: "Components/Dialog",
    component: Dialog,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
}
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    render: () => (

        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose variant="ghost">
                        Cancel
                    </DialogClose>
                    <DialogClose>
                        Continue
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
};

import { Button } from "@moeum/ui";

export default function LeftMenu({ setOpen }: { setOpen: (open: boolean) => void }) {
    return (
        <div>
            <Button onClick={() => setOpen(!open)}>LEFT MENU</Button>
        </div>
    )
}
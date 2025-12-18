import { useState } from "react";
import { Outlet } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import { Button } from "@moeum/ui";

export default function DefaultLayout() {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
            <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <LeftMenu setOpen={setOpen} />
            </aside>
            <main className="w-full">
                <Button>
                    TEST
                </Button>
                <Button variant="outline">TEST</Button>
                <br />
                <div className="p-10 bg-blue-500">BOX</div>
                <div className="test-tailwind">TEST</div>
                <Outlet />
            </main>
        </div>
    )
}

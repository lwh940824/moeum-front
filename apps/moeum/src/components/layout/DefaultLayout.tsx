import { useState } from "react";
import LeftMenu from "./LeftMenu";

export default function DefaultLayout() {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
            <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <LeftMenu setOpen={setOpen} />
            </aside>
            <main>
                <div className="text-2xl font-bold text-red-500">TEST</div>
            </main>
        </div>
    )
}
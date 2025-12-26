import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Button, Input, Sidebar, SidebarProvider } from "@moeum/ui";
import {AArrowDown, Settings} from "lucide-react"

export default function DefaultLayout() {
    const [open, setOpen] = useState(true);

    return (
        <div>
            {/* <SidebarProvider>
                <Sidebar></Sidebar>
            </SidebarProvider> */}
            
            <main className="">
                <Button size="default">
                    <div>테스트</div>
                </Button>
                <Button variant="submit" size="sm">
                    SUBMIT
                </Button>
                <Button variant="danger" size="sm">
                    DANGER
                </Button>
                <Button size="lg"><Settings/>TsEST</Button>
                <button className="flex items-center justify-center gap-2 h-20 w-20">
    <Settings/>
    TEST
</button>
                <br />
                <Input />
                <div className="p-10 bg-blue-500">BOX</div>
                <div className="test-tailwind">TEST</div>
                <Outlet />
            </main>
        </div>
    )
}

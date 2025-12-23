import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Button, Sidebar, SidebarProvider } from "@moeum/ui";
import {AArrowDown} from "lucide-react"

export default function DefaultLayout() {
    const [open, setOpen] = useState(true);

    return (
        <div>
            <SidebarProvider>
                <Sidebar>{/* 사이드바 내용 */}</Sidebar>
            </SidebarProvider>
            
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
                <Button size="lg"><AArrowDown/>TsEST</Button>
                <br />

                <div className="p-10 bg-blue-500">BOX</div>
                <div className="test-tailwind">TEST</div>
                <Outlet />
            </main>
        </div>
    )
}

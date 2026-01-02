import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@moeum/ui";
import PageHeader from "./PageHeader";
import AppSidebar from "./AppSidebar";
import { useState } from "react";

export default function DefaultLayout() {
    const [pageName, setPageName] = useState("Home");

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-col flex-1">
                <PageHeader pageName={pageName} />
                <div className="overflow-y-auto m-auto py-4">
                    <Outlet />
                </div>
            </main>
        </SidebarProvider>
    )
}
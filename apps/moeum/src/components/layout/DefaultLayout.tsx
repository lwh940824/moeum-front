import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarSeparator } from "@moeum/ui";
import { AArrowDown, Settings } from "lucide-react"

export default function DefaultLayout() {
    const [open, setOpen] = useState(true);

    // Menu items.
    const items = [
        {
            title: "계산기",
            url: "/rate-calculator",
            icon: Settings,
        },
        {
            title: "Inbox",
            url: "#",
            icon: AArrowDown,
        },
        {
            title: "Calendar",
            url: "#",
            icon: AArrowDown,
        },
        {
            title: "Search",
            url: "#",
            icon: AArrowDown,
        },
        {
            title: "Settings",
            url: "#",
            icon: AArrowDown,
        },
    ]

    return (
        <SidebarProvider>
            <Sidebar side="left">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <div className="flex gap-2">
                                <div>
                                    <div>lwh940824</div>
                                </div>
                                <Button variant="ghost"><Settings /></Button>
                            </div>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarSeparator />
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link to={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <main>
                <Outlet />
            </main>
        </SidebarProvider>
    )
}

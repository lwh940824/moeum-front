import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarSeparator } from "@moeum/ui";
import { File, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@moeum/ui";

export default function AppSidebar() {
    const items = [
        {
            title: "카테고리",
            url: "/category",
            icon: File,
        },
        {
            title: "계산기",
            url: "/rate-calculator",
            icon: Settings,
        },
        {
            title: "Calendar",
            url: "#",
            icon: Settings,
        },
        {
            title: "Search",
            url: "#",
            icon: Settings,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ]
    return (
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
    )
}
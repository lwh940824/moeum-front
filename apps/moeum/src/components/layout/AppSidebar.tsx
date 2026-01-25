import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@moeum/ui";
import {
  Calendar,
  FileText,
  FolderTree,
  Image,
  ListChecks,
  Settings,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@moeum/ui";

export default function AppSidebar() {
  const items = [
    { title: "Categories", url: "/category", icon: FolderTree },
    { title: "Payments", url: "/payment", icon: Wallet },
    { title: "Items", url: "/item", icon: ListChecks },
    { title: "Calendar", url: "/calendar", icon: Calendar },
    { title: "Item Plans", url: "/item-plan", icon: FileText },
    { title: "Invest Settings", url: "/invest-setting", icon: Settings },
    { title: "Invest Summary", url: "/invest-summary", icon: FileText },
    { title: "Icons", url: "/icon", icon: Image },
    { title: "Rate Calculator", url: "/rate-calculator", icon: Settings },
  ];

  return (
    <Sidebar side="left">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex gap-2">
              <div>
                <div>lwh940824</div>
              </div>
              <Button variant="ghost">
                <Settings />
              </Button>
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
  );
}


import { ShoppingBasket, List, BarChart3 } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Produtos", url: "/produtos", icon: List },
  { title: "Vendas", url: "/vendas", icon: ShoppingBasket },
];

export function AppSidebar() {
  // Não existe collapsed/defaultOpen. Sidebar sempre largura padrão (w-60)
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-muted text-primary font-medium"
      : "hover:bg-muted/50 transition";

  return (
    <Sidebar className="w-60">
      <SidebarTrigger className="m-2 self-end" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Micten</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
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

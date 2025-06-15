
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Produtos from "./pages/Produtos";
import Vendas from "./pages/Vendas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <SidebarProvider>
    <header className="h-14 flex items-center border-b bg-card px-6 shadow">
      <SidebarTrigger className="mr-2" />
      <span className="text-2xl font-semibold tracking-tight">
        Mercearia Micten
      </span>
    </header>
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      <main className="flex-1 px-4 sm:px-8 py-4">{children}</main>
    </div>
  </SidebarProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/produtos"
            element={
              <Layout>
                <Produtos />
              </Layout>
            }
          />
          <Route
            path="/vendas"
            element={
              <Layout>
                <Vendas />
              </Layout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

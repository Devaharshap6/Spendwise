
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Recurring from "./pages/Recurring";
import Reports from "./pages/Reports";
import Categories from "./pages/Categories";
import Family from "./pages/Family";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
              <AppLayout>
                <Dashboard />
              </AppLayout>
            } 
          />
          <Route 
            path="/expenses" 
            element={
              <AppLayout>
                <Expenses />
              </AppLayout>
            } 
          />
          <Route 
            path="/recurring" 
            element={
              <AppLayout>
                <Recurring />
              </AppLayout>
            } 
          />
          <Route 
            path="/reports" 
            element={
              <AppLayout>
                <Reports />
              </AppLayout>
            } 
          />
          <Route 
            path="/categories" 
            element={
              <AppLayout>
                <Categories />
              </AppLayout>
            } 
          />
          <Route 
            path="/family" 
            element={
              <AppLayout>
                <Family />
              </AppLayout>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <AppLayout>
                <Settings />
              </AppLayout>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

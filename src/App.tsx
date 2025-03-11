
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Rimborso from "./pages/Rimborso";
import TerminieCondizioni from "./pages/TerminieCondizioni";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/comprare-visualizzazioni-youtube" element={<Index />} />
          <Route path="/contattaci" element={<Contact />} />
          <Route path="/informativa-sulla-privacy" element={<Privacy />} />
          <Route path="/politica-di-rimborso" element={<Rimborso />} />
          <Route path="/termini-di-servizio" element={<TerminieCondizioni />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

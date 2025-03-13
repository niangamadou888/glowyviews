
import { Toaster } from "@/youtube-views-components/ui/toaster";
import { Toaster as Sonner } from "@/youtube-views-components/ui/sonner";
import { TooltipProvider } from "@/youtube-views-components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Rimborso from "./pages/Rimborso";
import TerminieCondizioni from "./pages/TerminieCondizioni";
import YoutubeViews from "./pages/youtube-views";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/comprare-visualizzazioni-youtube" element={<YoutubeViews />} />
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

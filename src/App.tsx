
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { usePageTracking } from "./hooks/usePageTracking";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import About from "./pages/About";
import Workshops from "./pages/Workshops";
import ApplicationDevelopment from "./pages/ApplicationDevelopment";
import ProductManagementTraining from "./pages/ProductManagementTraining";
import AgileTraining from "./pages/AgileTraining";
import UserResearch from "./pages/UserResearch";
import TechnicalTraining from "./pages/TechnicalTraining";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  usePageTracking();

  return (
    <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/workshops" element={<Workshops />} />
          <Route path="/services/application-development" element={<ApplicationDevelopment />} />
          <Route path="/services/product-management-training" element={<ProductManagementTraining />} />
          <Route path="/services/agile-training" element={<AgileTraining />} />
          <Route path="/services/user-research" element={<UserResearch />} />
          <Route path="/services/technical-training" element={<TechnicalTraining />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

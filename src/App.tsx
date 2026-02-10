import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudyMath4Kids from "./pages/CaseStudyMath4Kids";
import CaseStudyStickyNotes from "./pages/CaseStudyStickyNotes";
import CaseStudy3D from "./pages/CaseStudy3D";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const CaseStudyWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    {children}
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/math4kids" element={<CaseStudyWrapper><CaseStudyMath4Kids /></CaseStudyWrapper>} />
          <Route path="/case-study/sticky-notes" element={<CaseStudyWrapper><CaseStudyStickyNotes /></CaseStudyWrapper>} />
          <Route path="/case-study/3d-interactive" element={<CaseStudyWrapper><CaseStudy3D /></CaseStudyWrapper>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

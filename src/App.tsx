import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import HowItWorks from "./pages/HowItWorks";
import MoralFiber from "./pages/MoralFiber";
import WheresTheHunger from "./pages/WheresTheHunger";
import MealsServed from "./pages/MealsServed";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/moral-fiber" element={<MoralFiber />} />
          <Route path="/wheres-the-hunger" element={<WheresTheHunger />} />
          <Route path="/meals-served" element={<MealsServed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

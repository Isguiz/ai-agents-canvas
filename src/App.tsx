
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ConsultoriaEstrategica from "./pages/services/ConsultoriaEstrategica";
import AutomatizacionProcesos from "./pages/services/AutomatizacionProcesos";
import MachineLearning from "./pages/services/MachineLearning";
import AnalisisPredictivo from "./pages/services/AnalisisPredictivo";
import ChatbotsAsistentes from "./pages/services/ChatbotsAsistentes";
import FormacionCapacitacion from "./pages/services/FormacionCapacitacion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/servicios/consultoria-estrategica" element={<ConsultoriaEstrategica />} />
            <Route path="/servicios/automatizacion-procesos" element={<AutomatizacionProcesos />} />
            <Route path="/servicios/machine-learning" element={<MachineLearning />} />
            <Route path="/servicios/analisis-predictivo" element={<AnalisisPredictivo />} />
            <Route path="/servicios/chatbots-asistentes" element={<ChatbotsAsistentes />} />
            <Route path="/servicios/formacion-capacitacion" element={<FormacionCapacitacion />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

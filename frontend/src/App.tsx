
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Programs from "./pages/Programs";
import Gallery from "./pages/Gallery";
import Donation from "./pages/Donation";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AdminRedirect from "./components/ui/AdminRedirect";
import "leaflet/dist/leaflet.css";
import BeritaIndex from "./pages/Berita";
import BeritaDetail from "./pages/BeritaDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/donation" element={<Donation />} /> */}
            {/* <Route path="/registration" element={<Registration />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminRedirect />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/berita" element={<BeritaIndex />} />
            <Route path="/berita/:id" element={<BeritaDetail />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

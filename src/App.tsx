import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ImagePreloader from "@/components/ImagePreloader";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Gurukuls from "./pages/Gurukuls";
import GurukulDetails from "./pages/GurukulDetails";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Donate from "./pages/Donate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Get critical images based on current route for better performance
const getCriticalImages = (pathname: string) => {
  const baseImages = [
    "/lovable-uploads/2592abeb-26bc-471f-ac6d-a82fef17285f.png", // Founder image
  ];
  
  switch (pathname) {
    case '/':
      return [
        ...baseImages,
        "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png", // Blog images
        "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3.webp?fit=286%2C573&ssl=1", // First gurukul
        "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-4.webp?fit=286%2C268&ssl=1", // Second gurukul
        "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-5.webp?fit=260%2C300&ssl=1" // Third gurukul
      ];
    case '/gurukuls':
      return [
        ...baseImages,
        "/lovable-uploads/c80419db-2fe7-46e7-9f73-3adde620f598.png", // Map image
        "https://subhanustaging.com/wp-content/uploads/2025/06/hero-gurukul-students.webp", // Hero background
        "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3.webp?fit=286%2C573&ssl=1",
        "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-4.webp?fit=286%2C268&ssl=1"
      ];
    default:
      return baseImages;
  }
};

// Component to handle route-based image preloading
const AppContent = () => {
  const location = useLocation();
  const criticalImages = getCriticalImages(location.pathname);

  return (
    <>
      <ImagePreloader images={criticalImages} priority={true} />
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gurukuls" element={<Gurukuls />} />
        <Route path="/gurukuls/:gurukul" element={<GurukulDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

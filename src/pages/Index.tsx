import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GurukulSection from "@/components/GurukulSection";
import FounderSection from "@/components/FounderSection";
import BlogSection from "@/components/BlogSection";
import TestimonialSection from "@/components/TestimonialSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Main Content with top padding to account for fixed navbar */}
      <div className="pt-20">
        <HeroSection />
      <AboutSection />
      <GurukulSection />
      <FounderSection />
      <BlogSection />
      
        <DonationSection />
        <TestimonialSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

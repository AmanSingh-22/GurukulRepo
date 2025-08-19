import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-gurukul-students.webp";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Empower a child 
            <span className="block text-primary">with Vedic wisdom</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed max-w-2xl">
            Help sustain Sri Sri Gurukuls where young minds are nurtured with Vedic knowledge, 
            discipline and timeless Indian values. Your support today becomes their foundation for life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="hero" className="group" asChild>
              <Link to="/donate">
                Donate Now
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </Button>
{/*             <Button variant="outline" size="hero">
              Learn More
            </Button> */}
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 opacity-20">
{/*         <div className="text-6xl text-primary">ॐ</div> */}
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DonationSection = () => {
  return (
    <section className="py-20 bg-gradient-wisdom relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-8xl text-white/10">ॐ</div>
      <div className="absolute bottom-10 right-10 text-6xl text-white/10">🕉</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="text-2xl mb-4 font-sanskrit">॥ Vidhya Dhaanam Param Dhanam ॥</div>
            <p className="text-xl italic opacity-90">
              "The gift of education is the highest gift"
            </p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Participate in conserving and spreading the vast knowledge of the Vedas!
          </h2>
          
          <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Your generous contribution helps sustain these ancient centers of learning, 
            ensuring that the timeless wisdom of the Vedas continues to illuminate young minds 
            and preserve our cultural heritage for future generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="wisdom" size="hero" className="group shadow-xl hover:shadow-3xl transition-shadow duration-300" asChild>
                 <Link to="/donate">
                     Donate Now
                     <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </Button>

            <Button variant="outline" size="hero" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/blog">
                Learn About Impact
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;

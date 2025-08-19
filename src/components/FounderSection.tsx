import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";

const FounderSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute top-4 left-4 text-6xl text-primary/20">❝</div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-warm">
              <blockquote className="text-xl md:text-2xl text-foreground font-medium italic mb-6 leading-relaxed">
                "True knowledge is that which brings innocence in the heart, 
                clarity in the mind, and strength in action"
              </blockquote>
              <cite className="text-lg text-primary font-semibold">
                — Gurudev Sri Sri Ravi Shankar ji
              </cite>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="text-center lg:text-left">

              <img 
                src="/lovable-uploads/2592abeb-26bc-471f-ac6d-a82fef17285f.png"
                alt="Gurudev Sri Sri Ravi Shankar"
                className="w-48 h-48 rounded-full shadow-glow border-4 border-primary/20 mb-6 object-cover object-[90%_60%]"    
              />
                          {/* <OptimizedImage 
                                  src="/lovable-uploads/2592abeb-26bc-471f-ac6d-a82fef17285f.png"
                                  alt="Gurudev Sri Sri Ravi Shankar"
                                  className="w-48 h-48 mx-auto lg:mx-0 rounded-full shadow-glow border-4 border-primary/20 mb-6 object-cover object-[90%_60%]"
                                  priority={true}
                              />
                          */}



              <h3 className="text-3xl font-bold text-foreground mb-2">
                Gurudev Sri Sri Ravi Shankar
              </h3>
              <p className="text-lg text-primary font-semibold mb-6">Founder</p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Gurudev Sri Sri Ravi Shankar is a humanitarian leader, spiritual teacher, 
              and an ambassador of peace. His vision of a stress-free, violence-free society 
              has united millions of people around the world through service projects and 
              programs offered by The Art of Living.
            </p>
            
            <Button variant="outline" size="lg">
              <Link to="/blog">
                  Learn More
                </Link>
              
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

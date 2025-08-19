import { Card } from "@/components/ui/card";
import OptimizedImage from "./OptimizedImage";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({ name, role, testimonial, image }: TestimonialCardProps) => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-8 hover:shadow-warm transition-all duration-300">
      <div className="flex items-center mb-6">
        <OptimizedImage 
          src={image} 
          alt={name}
          className="w-16 h-16 rounded-full mr-4 border-2 border-primary/20"
        />
        <div>
          <h4 className="text-lg font-semibold text-foreground">{name}</h4>
          <p className="text-primary font-medium">{role}</p>
        </div>
      </div>
      
      <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
        "{testimonial}"
      </blockquote>
    </Card>
  );
};

export default TestimonialCard;
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import FastImage from "./FastImage";

interface GurukulCardProps {
  name: string;
  image: string;
  location: string;
  link?: string;
  priority?: boolean;
}

const GurukulCard = ({ name, image, location, link, priority = false }: GurukulCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(`/gurukuls/${link}`);
    }
  };

  return (
    <Card 
      className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-warm cursor-pointer h-full flex flex-col"
      onClick={handleClick}
    >
      <div className="aspect-[4/5] overflow-hidden flex-shrink-0">
        <FastImage 
           src={image} 
           alt={name}
           className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
           priority={priority}
           timeout={2500}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">{name}</h3>
          <p className="text-muted-foreground line-clamp-1">{location}</p>
        </div>
      </div>
    </Card>
  );
};

export default GurukulCard;

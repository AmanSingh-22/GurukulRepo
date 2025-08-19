import { Button } from "@/components/ui/button";
import GurukulCard from "./GurukulCard";
import { Link } from "react-router-dom";


const GurukulSection = () => {
  const gurukuls = [
    {
      name: "Sri Sri Gurukul Bangalore",
      location: "Bangalore, Karnataka",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3.webp?fit=286%2C573&ssl=1",
      link: "bangalore"
    },
    {
      name: "Sri Sri Gurukul Rishikesh",
      location: "Rishikesh, Uttarakhand",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-4.webp?fit=286%2C268&ssl=1",
      link: "rishikesh"
    },
    {
      name: "Sri Sri Gurukul Omkareshwar",
      location: "Omkareshwar, Madhya Pradesh",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-5.webp?fit=260%2C300&ssl=1",
      link: "omkareshwar"
    },
    {
      name: "Sri Sri Gurukul Vasad",
      location: "Vasad, Gujarat",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/Mask-Group-8.webp?fit=286%2C330&ssl=1",
      link: "vasad"
    },
    {
      name: "Sri Sri Gurukul Cuttack",
      location: "Cuttack, Odisha",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/1664144239_vedicc.jpg?fit=900%2C506&ssl=1",
      link: "cuttack"
    },
    {
      name: "Sri Sri Gurukul Pune",
      location: "Pune, Maharashtra",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/Mask-Group.webp?fit=286%2C630&ssl=1",
      link: "pune"
    }
  ];

  return (
    <section id="gurukuls" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gurukuls
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sustaining our rich heritage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {gurukuls.map((gurukul, index) => (
            <GurukulCard 
              key={index}
              name={gurukul.name}
              location={gurukul.location}
              image={gurukul.image}
              link={gurukul.link}
              priority={index < 3} // Prioritize first 3 cards for faster loading
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            
              <Link to="/gurukuls">
                  View All Locations
                </Link>
              
            
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GurukulSection;

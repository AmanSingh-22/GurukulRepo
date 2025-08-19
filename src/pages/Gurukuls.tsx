import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import FastImage from "@/components/FastImage";

const Gurukuls = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const gurukuls = [
    {
      id: 1,
      name: "Sri Sri Gurukul Bangalore",
      location: "Bangalore, Karnataka",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3.webp?fit=286%2C573&ssl=1",
      link: "bangalore"
    },
    {
      id: 2,
      name: "Sri Sri Gurukul Rishikesh", 
      location: "Rishikesh, Uttarakhand",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-4.webp?fit=286%2C268&ssl=1",
      link: "rishikesh"
    },
    {
      id: 3,
      name: "Sri Sri Gurukul Bodhgaya",
      location: "Bodhgaya, Bihar", 
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-5.webp?fit=285%2C329&ssl=1",
      link: "bodhgaya"
    },
    {
      id: 4,
      name: "Sri Sri Gurukul Chamba", 
      location: "Chamba, Himachal Pradesh",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-4.webp?fit=286%2C268&ssl=1",
      link: "chamba"
    },
    {
      id: 5,
      name: "Sri Sri Gurukul Cuttack",
      location: "Cuttack, Odisha", 
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-5.webp?fit=285%2C329&ssl=1",
      link: "cuttack"
    },
    {
      id: 6,
      name: "Sri Sri Gurukul Dhubri",
      location: "Dhubri, Assam",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/Mask-Group-8.webp?fit=286%2C330&ssl=1",
      link: "dhubri"
    },
    {
      id: 7,
      name: "Sri Sri Gurukul Farukhabad",
      location: "Farukhabad, Uttar Pradesh",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-5.webp?fit=285%2C329&ssl=1",
      link: "farukhabad"
    },
    {
      id: 8,
      name: "Sri Sri Gurukul Jabalpur",
      location: "Jabalpur, Madhya Pradesh",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/Mask-Group.webp?fit=286%2C630&ssl=1",
      link: "jabalpur"
    },
    {
      id: 9,
      name: "Sri Sri Gurukul Nagpur",
      location: "Nagpur, Maharashtra",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-4.webp?fit=286%2C268&ssl=1",
      link: "nagpur"
    },
    {
      id: 10,
      name: "Sri Sri Gurukul Omkareshwar",
      location: "Omkareshwar, Madhya Pradesh",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-5.webp?fit=285%2C329&ssl=1",
      link: "omkareshwar"
    },
    {
      id: 11,
      name: "Sri Sri Gurukul Pune",
      location: "Pune, Maharashtra",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/1664144239_vedicc.jpg?fit=900%2C506&ssl=1",
      link: "pune"
    },
    {
      id: 12,
      name: "Sri Sri Gurukul Vasad",
      location: "Vasad, Gujarat",
      image: "https://i0.wp.com/subhanustaging.com/wp-content/uploads/2025/06/image-3-4.webp?fit=286%2C268&ssl=1",
      link: "vasad"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Main Content with top padding to account for fixed navbar */}
      <div className="pt-20">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://subhanustaging.com/wp-content/uploads/2025/06/hero-gurukul-students.webp')"
          }}
        />
        <div className="relative z-20 text-white px-4">
           <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Our Gurukuls</h1>

           <p className="text-left text-xl md:text-2xl mb-8 max-w-2xl">
               From the serene Himalayas to the riverbanks of Odisha, from the heartland of Uttar Pradesh to the sacred confluences of Maharashtra—each Sri Sri Gurukul carries the same spirit of ancient learning, rooted in the timeless Vedas. Select a Gurukul to discover its story, students, daily life, and how you can support.
           </p>

           <div className="text-center">
               <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg rounded-full">
                 <Link to="/donate">
                  Donate Now
                </Link>
              </Button>
           </div>
        </div>
      </section>

      {/* Gurukuls Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Gurukuls
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our centers across the country
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gurukuls.map((gurukul) => (
  <Card 
    key={gurukul.id}
    className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-warm cursor-pointer h-full flex flex-col"
    onMouseEnter={() => setHoveredCard(gurukul.id)}
    onMouseLeave={() => setHoveredCard(null)}
    onClick={() => navigate(`/gurukuls/${gurukul.link}`)}
  >
    <div className="aspect-[4/5] overflow-hidden relative w-full">
      <FastImage 
        src={gurukul.image} 
        alt={gurukul.name}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
        priority={gurukul.id <= 4}
        timeout={2500}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 ${
        hoveredCard === gurukul.id ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{gurukul.name}</h3>
        <p className="text-white/90 line-clamp-1">{gurukul.location}</p>
      </div>
    </div>

    <div className={`p-6 transition-all duration-500 flex-grow flex flex-col justify-between ${
      hoveredCard === gurukul.id ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
    }`}>
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">{gurukul.name}</h3>
        <p className="text-muted-foreground line-clamp-1">{gurukul.location}</p>
      </div>
    </div>
  </Card>
))}

          </div>
        </div>
      </section>

      {/* Find a Gurukul Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find a Gurukul
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Across the hills of Himachal, the plains of Uttar Pradesh, the deltas of Odisha, and the sacred rivers of the south, 12 Sri Sri Gurukuls preserve and nurture the ancient oral tradition of Vedic learning
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <FastImage 
                src="/lovable-uploads/c80419db-2fe7-46e7-9f73-3adde620f598.png" 
                alt="Gurukul Locations Map of India" 
                className="w-full h-auto rounded-lg shadow-lg"
                priority={true}
                timeout={2000}
              />
            </div>
          </div>
        </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Gurukuls;

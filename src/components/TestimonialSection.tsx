import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Pratham",
      role: "Student",
      testimonial: "I am from a moderate family, Vedic Heritage education at Sri Sri Gurukul has inspired me and empowered me to carry forward and support my family at the same time.",
      image: "/lovable-uploads/1be6be3d-a4b3-4f6b-8875-39d0f7ee4bbb.png"
    },
    {
      name: "Jagan", 
      role: "Parent, Pune Gurukul",
      testimonial: "We couldn’t afford his books. Now, he’s top in his chanting group. We’re thankful to those who supported him.",
      image: "/lovable-uploads/c5f67e5a-5645-4257-a18b-fbd94c1bb72e.png"
    },
    {
      name: "Akash",
      role: "Student", 
      testimonial: "Clearing my mind seemed a very hard thing for me. But this has been a godsend. I can quiet my mind. It's worked miracles for me.",
      image: "/lovable-uploads/1cc1e91d-faae-4cad-8f17-1053b98ab5e4.png"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-muted-foreground">
            Life transformations through Vedic wisdom
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

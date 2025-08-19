import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogs = [
    {
      title: "Lord Krishna – Birth of knowledge, love and mischief",
      author: "Sri Sri Ravi Shankar",
      readTime: "4 min read",
      image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      slug: "lord-krishna-birth-knowledge-love-mischief"
    },
    {
      title: "The Path of Dharma in Modern Times",
      author: "Sri Sri Ravi Shankar", 
      readTime: "6 min read",
      image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      slug: "path-dharma-modern-times"
    },
    {
      title: "Meditation: The Gateway to Inner Peace",
      author: "Sri Sri Ravi Shankar",
      readTime: "5 min read", 
      image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      slug: "meditation-gateway-inner-peace"
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blogs on Wisdom
          </h2>
{/*           <p className="text-xl text-muted-foreground">
            Vidhya Dhaanam Param Dhanam
          </p> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <BlogCard 
              key={index}
              title={blog.title}
              author={blog.author}
              readTime={blog.readTime}
              image={blog.image}
              slug={blog.slug}
              priority={index < 3} // Prioritize first 3 blog cards
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            <Link to="/donate">
                  View All Blogs
                </Link>
            
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import FastImage from "@/components/FastImage";

const Blog = () => {
  const blogPosts = [
    {
      title: "Lord Krishna – Birth of knowledge, love and mischief",
      author: "Sri Sri Ravi Shankar",
      readTime: "4 min read",
      image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      date: "June 15, 2024",
      excerpt: "Explore the divine teachings and timeless wisdom of Lord Krishna through the lens of spiritual understanding.",
      slug: "lord-krishna-birth-knowledge-love-mischief"
    },
    {
      title: "The Path of Dharma in Modern Times",
      author: "Sri Sri Ravi Shankar",
      readTime: "6 min read",
      image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      date: "June 10, 2024",
      excerpt: "Understanding how ancient dharmic principles can guide us through contemporary challenges.",
      slug: "path-dharma-modern-times"
    },
    {
      title: "Meditation: The Gateway to Inner Peace",
      author: "Sri Sri Ravi Shankar",
      readTime: "5 min read",
      image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      date: "June 5, 2024",
      excerpt: "How meditation can bring profound peace, clarity, and spiritual awakening to your daily life.",
      slug: "meditation-gateway-inner-peace"
    },
    {
      title: "Vedic Wisdom for Contemporary Life",
      author: "Sri Sri Ravi Shankar",
      readTime: "7 min read",
      image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      date: "May 28, 2024",
      excerpt: "Understanding how ancient Vedic principles provide practical solutions for modern living.",
      slug: "vedic-wisdom-contemporary-life"
    },
    {
      title: "Yoga: Philosophy and Practice United",
      author: "Sri Sri Ravi Shankar",
      readTime: "6 min read",
      image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      date: "May 20, 2024",
      excerpt: "Exploring the deeper dimensions of yoga beyond physical postures and its transformative potential.",
      slug: "yoga-philosophy-practice"
    },
    {
      title: "Ancient Mantras for Modern Healing",
      author: "Sri Sri Ravi Shankar",
      readTime: "5 min read",
      image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      date: "May 15, 2024",
      excerpt: "Discovering the healing power of sacred sounds and how ancient mantras can transform contemporary life.",
      slug: "ancient-mantras-modern-healing"
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
      
      {/* Hero Section with Background Image */}
  <section className="relative h-[80vh] w-full">
  {/* Background image */}
  <img 
    src="/lovable-uploads/3aef331c-5f7d-4c02-ac0c-28e1e495e231.png" 
    alt="Sri Sri Ravi Shankar" 
    className="absolute inset-0 w-full h-full object-cover object-center z-0" 
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/80 z-10" />

  {/* CONTENT */}
  <div className="relative z-20 container mx-auto px-4 h-full flex items-center justify-end text-left">
    <div className="w-full max-w-xl pr-16 text-white"> 
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
        Stories That Keep the Wisdom Alive
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
        There’s more to these Gurukuls than meets the eye. Behind every mantra, every tradition, every smiling student—there’s a story waiting to be told.
      </p>
      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
        <a
          href="https://www.instagram.com/artofliving?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-lg font-semibold"
        >
          Explore Latest Posts
        </a>
      </Button>
    </div>
  </div>
</section>



      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our blog is where these stories live
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Read about how Veda connects with modern science. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div key={index} className="group">
                <BlogCard 
                  title={post.title}
                  author={post.author}
                  readTime={post.readTime}
                  image={post.image}
                  slug={post.slug}
                  priority={index < 3} // Prioritize first 3 images
                />
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Blog;

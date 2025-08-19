import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  readTime: string;
  date: string;
  image: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}

const blogPosts: Record<string, BlogPost> = {
  "lord-krishna-birth-knowledge-love-mischief": {
    id: "lord-krishna-birth-knowledge-love-mischief",
    title: "Lord Krishna – Birth of knowledge, love and mischief",
    author: "Sri Sri Ravi Shankar",
    readTime: "4 min read",
    date: "December 15, 2024",
    image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
    content: {
      introduction: "Lord Krishna, the eighth avatar of Lord Vishnu, represents the perfect balance of divine wisdom, unconditional love, and playful mischief. His life teachings continue to guide millions on the path of dharma and spiritual awakening.",
      sections: [
        {
          title: "The Divine Birth",
          content: "Krishna's birth in Mathura represents the descent of divine consciousness into the material world. Born to Devaki and Vasudeva in a prison cell, his arrival was marked by divine miracles that signified the triumph of good over evil. The very circumstances of his birth teach us that divinity can manifest even in the most challenging situations."
        },
        {
          title: "Knowledge Through the Bhagavad Gita",
          content: "The Bhagavad Gita, Krishna's discourse to Arjuna on the battlefield of Kurukshetra, remains one of the most profound spiritual texts ever revealed. Through 700 verses, Krishna elucidates the paths of karma yoga, bhakti yoga, and jnana yoga, providing a comprehensive guide for spiritual seekers to attain liberation while fulfilling their worldly duties."
        },
        {
          title: "The Expression of Divine Love",
          content: "Krishna's love manifests in various forms - as a child with his mother Yashoda, as a friend with the cowherd boys, and as the beloved with the gopis. This teaches us that divine love transcends all boundaries and can be experienced in every relationship when we approach it with purity and devotion."
        },
        {
          title: "Sacred Mischief and Leela",
          content: "Krishna's playful nature and mischievous activities, known as leela, represent the spontaneous joy that emerges from spiritual realization. His butter-stealing episodes and playful pranks remind us that the spiritual path need not be solemn - it can be filled with joy, laughter, and spontaneous celebration."
        }
      ]
    }
  },
  "path-dharma-modern-times": {
    id: "path-dharma-modern-times",
    title: "The Path of Dharma in Modern Times",
    author: "Sri Sri Ravi Shankar",
    readTime: "6 min read",
    date: "December 10, 2024",
    image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
    content: {
      introduction: "In our rapidly changing world, the ancient concept of dharma remains as relevant as ever. Understanding and living dharma in modern times requires wisdom, adaptability, and deep spiritual insight.",
      sections: [
        {
          title: "Understanding Dharma",
          content: "Dharma is not merely religious duty or moral obligation. It is the natural law that sustains the universe and guides righteous living. In modern context, dharma means living in alignment with universal principles while adapting to contemporary challenges and opportunities."
        },
        {
          title: "Dharma in Professional Life",
          content: "In today's professional world, dharma manifests as ethical business practices, honest work, and service to society. Whether you're an entrepreneur, employee, or leader, your dharma involves contributing positively to the world while maintaining integrity and compassion in all dealings."
        },
        {
          title: "Family and Social Dharma",
          content: "Modern family structures may have evolved, but the dharma of love, care, and support remains constant. In our interconnected world, our social dharma extends beyond family to include environmental responsibility and global consciousness."
        },
        {
          title: "Technology and Dharma",
          content: "The digital age presents new dharmic challenges. How we use technology, social media, and artificial intelligence reflects our dharmic choices. Using technology to spread knowledge, connect hearts, and serve humanity aligns with dharmic principles."
        }
      ]
    }
  },
  "meditation-gateway-inner-peace": {
    id: "meditation-gateway-inner-peace",
    title: "Meditation: The Gateway to Inner Peace",
    author: "Sri Sri Ravi Shankar",
    readTime: "5 min read",
    date: "December 5, 2024",
    image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
    content: {
      introduction: "Meditation is not just a practice; it's a state of being that connects us to our true nature. In the silence of meditation, we discover the peace that is our birthright and the wisdom that guides us through life's journey.",
      sections: [
        {
          title: "The Science of Meditation",
          content: "Modern neuroscience confirms what ancient sages knew: meditation physically changes the brain. Regular practice increases gray matter in areas associated with learning, memory, and emotional regulation while reducing activity in the amygdala, the brain's fear center."
        },
        {
          title: "Types of Meditation",
          content: "From mindfulness and loving-kindness to transcendental and movement meditation, there are many paths to inner stillness. Each technique serves different temperaments and life situations, but all lead to the same destination: the discovery of our peaceful, unchanging essence."
        },
        {
          title: "Establishing a Daily Practice",
          content: "Consistency is more important than duration. Even five minutes of daily meditation creates positive changes. Start with breath awareness, gradually deepening your practice. The key is regularity - meditation is like tending a garden; daily care yields the most beautiful flowers."
        },
        {
          title: "Meditation in Daily Life",
          content: "True meditation extends beyond formal sitting practice. Bringing meditative awareness to daily activities - eating, walking, working - transforms ordinary moments into opportunities for presence and peace. This is the art of living meditation."
        }
      ]
    }
  },
  "vedic-wisdom-contemporary-life": {
    id: "vedic-wisdom-contemporary-life",
    title: "Vedic Wisdom for Contemporary Life",
    author: "Sri Sri Ravi Shankar",
    readTime: "7 min read",
    date: "November 30, 2024",
    image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
    content: {
      introduction: "The Vedas, humanity's oldest spiritual texts, contain timeless wisdom that remains profoundly relevant to contemporary life. These ancient teachings offer practical guidance for modern challenges.",
      sections: [
        {
          title: "Vedic Principles of Well-being",
          content: "The Vedas present a holistic view of health encompassing body, mind, and spirit. Ayurveda, yoga, and meditation are Vedic sciences that promote complete well-being. In our stress-filled modern world, these practices offer proven methods for maintaining balance and vitality."
        },
        {
          title: "Sustainable Living",
          content: "Long before environmental consciousness became mainstream, the Vedas taught reverence for nature. The principle of 'Vasudhaiva Kutumbakam' - the world is one family - extends to our relationship with the environment, advocating for sustainable and conscious living practices."
        },
        {
          title: "Leadership and Governance",
          content: "Vedic texts like the Arthashastra provide insights into ethical leadership and governance. The concept of 'Raj Dharma' emphasizes that true leadership involves serving the people with wisdom, compassion, and integrity - principles desperately needed in modern governance."
        },
        {
          title: "Education and Knowledge",
          content: "The Vedic approach to education emphasizes not just intellectual development but character formation and spiritual growth. The guru-shishya tradition shows how knowledge transmission involves personal transformation, not mere information transfer."
        }
      ]
    }
  },
  "yoga-philosophy-practice": {
    id: "yoga-philosophy-practice",
    title: "Yoga: Philosophy and Practice United",
    author: "Sri Sri Ravi Shankar",
    readTime: "6 min read",
    date: "November 25, 2024",
    image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
    content: {
      introduction: "Yoga is much more than physical postures. It is a complete science of self-realization that unites philosophy with practice, leading to the integration of body, mind, and spirit.",
      sections: [
        {
          title: "The Eight Limbs of Yoga",
          content: "Patanjali's Yoga Sutras outline the eight-fold path: Yamas (ethical restraints), Niyamas (observances), Asana (postures), Pranayama (breath control), Pratyahara (withdrawal of senses), Dharana (concentration), Dhyana (meditation), and Samadhi (union). This comprehensive system addresses all aspects of human development."
        },
        {
          title: "Asana: More Than Physical Exercise",
          content: "While yoga postures provide physical benefits, their deeper purpose is to prepare the body for meditation. Each asana teaches patience, concentration, and surrender. The physical practice becomes a moving meditation that harmonizes the body's energy."
        },
        {
          title: "Pranayama: The Bridge to Higher Consciousness",
          content: "Breath is the bridge between body and mind. Pranayama practices regulate life force energy, calm the nervous system, and prepare consciousness for higher states. Advanced pranayama techniques can lead to profound spiritual experiences and enhanced vitality."
        },
        {
          title: "Living Yoga Off the Mat",
          content: "True yoga extends beyond the practice mat into daily life. The principles of ahimsa (non-violence), satya (truthfulness), and santosha (contentment) transform how we interact with the world. Living yoga means bringing awareness, compassion, and wisdom to every moment."
        }
      ]
    }
  },
  "ancient-mantras-modern-healing": {
    id: "ancient-mantras-modern-healing",
    title: "Ancient Mantras for Modern Healing",
    author: "Sri Sri Ravi Shankar",
    readTime: "5 min read",
    date: "November 20, 2024",
    image: "/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
    content: {
      introduction: "Mantras are powerful sound vibrations that have been used for thousands of years to heal, transform, and elevate consciousness. Modern science is discovering what ancient sages always knew about the therapeutic power of sacred sounds.",
      sections: [
        {
          title: "The Science of Sound Healing",
          content: "Recent research shows that mantra chanting affects brainwave patterns, reduces stress hormones, and activates the parasympathetic nervous system. The vibrations created by mantras have measurable effects on physical and mental health, validating ancient wisdom through modern science."
        },
        {
          title: "Universal Mantras for Daily Practice",
          content: "Mantras like 'Om', 'So Hum', and 'Om Namah Shivaya' are universal in their appeal and application. These sacred sounds can be practiced by anyone, regardless of religious background. They help center the mind, open the heart, and connect us to universal consciousness."
        },
        {
          title: "Healing Specific Conditions",
          content: "Different mantras are traditionally used for specific healing purposes. For anxiety, the Gayatri Mantra brings peace and clarity. For emotional healing, heart-centered mantras like 'Om Mani Padme Hum' cultivate compassion. For physical vitality, the Mahamrityunjaya Mantra is particularly powerful."
        },
        {
          title: "Incorporating Mantras in Modern Life",
          content: "Mantras can be seamlessly integrated into busy modern lifestyles. Chanting during commutes, before important meetings, or during exercise transforms routine activities into spiritual practices. The key is consistency and devotion, not perfect pronunciation or lengthy sessions."
        }
      ]
    }
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-20 pb-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="outline">Back to All Blogs</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-r from-primary/20 to-primary/5">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Blogs
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg mb-8"
              style={{ objectPosition: "center 20%" }}
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                {post.content.introduction}
              </p>
              
              {post.content.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    {section.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Share Section */}
            <div className="border-t border-border pt-8 mt-16">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Enjoyed this article?</h3>
                  <p className="text-muted-foreground">Share it with others who might benefit from this wisdom.</p>
                </div>
                <Link to="/blog">
                  <Button variant="outline" className="w-full md:w-auto">
                    Read More Articles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost;

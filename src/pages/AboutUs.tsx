import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <section className="relative py-7 flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="relative z-10 container mx-auto px-2 py-7 pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Founder
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Gurudev Sri Sri Ravi Shankar
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Gurudev is a humanitarian leader, spiritual teacher, and an ambassador of peace.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-card p-2 rounded-2xl shadow-2xl border max-w-3xl mx-auto transform scale-[1.05]">
                   <img 
                     src="/lovable-uploads/1205daa0-d832-422d-a108-1a94bf59d6bf.png"
                     alt="Gurudev Sri Sri Ravi Shankar ji" 
                     className="w-full h-auto rounded-xl transform scale-[1.05]"
                   />
              </div>



            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-7 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/lovable-uploads/8269a946-8aae-4c6d-a7e7-1e19bf112af2.png"
                alt="Ved Vignan Maha Vidya Peeth Logo" 
                className="w-16 h-16 object-contain mr-4"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ved Vignan Maha Vidya Peeth
              </h2>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg border">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "To preserve, promote, and propagate the timeless wisdom of the Vedas by nurturing scholarly excellence, spiritual growth, and cultural heritage for the betterment of humanity."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Gurukuls Section */}
      <section className="py-7">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Why These Gurukuls
          </h2>

          {/* Gurudev's Vision */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Gurudev's Vision for Preserving Vedic Knowledge
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>It began not with a plan, but with a prayer.</p>
                  <p>When Gurudev Sri Sri Ravi Shankar ji first envisioned the revival of Gurukul education, he wasn't responding to a trend. He was responding to a quiet but pressing truth—India's ancient knowledge, once passed down from Guru to disciple in vibrant oral tradition, was slowly fading from daily life.</p>
                  <p>What stirred him was not nostalgia. It was responsibility.</p>
                  <p>Gurudev Sri Sri Ravi Shankar ji knew that the Vedas are not just scriptures. They are vibrations— living, breathing experiences meant to be imbibed and shared. And he knew that the only way to truly preserve this knowledge was to keep it alive where it naturally belonged—in the hearts of children.</p>
                  <p>So, the Sri Sri Gurukul's were born.</p>
                  <p>From a small home in Bangalore to 12 Gurukuls spread across Eight states today, the Sri Sri Veda Pathashala movement continues to offer children—especially those from tribal, rural, or economically challenged backgrounds—a sacred space to learn, grow, and live with dignity.</p>
                </div>
                <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                  <p className="text-foreground font-medium italic">
                    "True knowledge is that which brings innocence in the heart, clarity in the mind, and strength in action."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Gurudev Sri Sri Ravi Shankar ji</p>
                </div>
                <p className="mt-6 text-muted-foreground">
                  Each chant, each Sandhya prayer, each homa, each joyful recitation of the Vedas—echoes this vision. And with your support, these echoes become a legacy.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/ae42370c-8b23-46df-880f-9643f98a9168.png"
                  alt="Gurudev Sri Sri Ravi Shankar ji" 
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Where Knowledge is Lived */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Where Knowledge is Lived, Not Just Learned
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>Step into a Gurukul and you'll notice—it's not like any other school.</p>
                  <p>There's no ringing bell. No noisy classrooms. What you'll find instead is the soft rhythm of Vedic chanting, the quiet discipline of early morning yoga, the focus in a young student's eyes as he learns Sanskrit word by word—sometimes even syllable by syllable.</p>
                  <p>These Gurukuls, managed by the Sri Sri Veda Pathashala under Ved Vignan Maha Vidya Peeth (VVMVP), are not remnants of a forgotten era. They are living sanctuaries of education, built on the timeless foundation of the guru-shishya tradition.</p>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground mb-3">Each Gurukul provides:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Residential, fully free education for children from underprivileged or tribal backgrounds</li>
                    <li>• Training in 8 Veda Shakhas, Sanskrit grammar, and Agama traditions</li>
                    <li>• Modern subjects such as English, Mathematics, and Social Sciences</li>
                    <li>• A clean, nurturing environment where students and vedacharyas live together like family</li>
                  </ul>
                </div>
                <p className="mt-6 text-muted-foreground">
                  And yes, the basics are beautifully taken care of. Every child receives nutritious Satvik meals, traditional clothing, clean living spaces, and even a warm glass of cow's milk daily.
                </p>
                <div className="mt-6 p-6 bg-muted/50 rounded-lg">
                  <p className="text-foreground italic">
                    "I once visited the Gurukul in Dhubri, Assam. A young boy—barely twelve—stood up and began reciting the Shukla Yajurveda. His voice was steady. His eyes sparkled. And something in me knew —this is not just education, this is a blessing being passed forward."
                  </p>
                </div>
                <p className="mt-4 text-muted-foreground font-medium">
                  This is what a Sri Sri Gurukul nurtures—not just students, but the soul of a civilization.
                </p>
              </div>
              <div className="md:order-1 flex justify-center">
                <img 
                  src="/lovable-uploads/3aef331c-5f7d-4c02-ac0c-28e1e495e231.png"
                  alt="Gurudev Sri Sri Ravi Shankar in meditation" 
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Why These Sacred Schools */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Why These Sacred Schools Were Born
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>Sometimes, the answers we seek lie not in creating something new, but in returning to what once worked—profoundly, beautifully, and sustainably.</p>
                  <p>Gurudev Sri Sri Ravi Shankar ji didn't start the Gurukuls as an experiment. He started them as a commitment. A commitment to reviving India's most ancient gift to the world—Vedic wisdom— through the purity of tradition and the innocence of childhood.</p>
                  <p>He saw something the rest of us were beginning to forget: that Vedic knowledge wasn't merely about rituals or philosophy. It was a complete way of life—designed to cultivate inner strength, social harmony, and ecological balance. And the only way to preserve this was to teach it the way it was always meant to be taught—through the heart of a Guru to the soul of a student.</p>
                </div>
                <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                  <p className="text-foreground font-medium italic">
                    "The purpose of education is to bring clarity in mind, purity in heart, and sincerity in action."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Gurudev Sri Sri Ravi Shankar ji</p>
                </div>
                <p className="mt-6 text-muted-foreground">
                  And so, the Gurukuls were quietly established—one by one. Some on the banks of sacred rivers like the Ganga or the Narmada. Others in the remote hills of Himachal or the spiritual corridors of Odisha.
                </p>
                <p className="mt-4 text-muted-foreground font-medium">
                  All united by one vision: to awaken brilliance with simplicity, to offer free, holistic education to children who might never have had the chance otherwise, and to ensure that the Vedas are not just preserved—but lived.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/c80419db-2fe7-46e7-9f73-3adde620f598.png"
                  alt="Gurukul campus view" 
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Curriculum Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  A Curriculum That Builds Character, Not Just Memory
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>What does a child truly need to flourish? Not just information—but a foundation. Not just skill— but strength. That's exactly what the Gurukuls aim to offer.</p>
                  <p>The education at Sri Sri Veda Pathashalas is intentionally holistic. Rooted in the Vedas, structured by discipline, and enriched with modern essentials. It's not unusual for a student here to begin the day with mantra chanting, dive into Sanskrit grammar mid-morning, and later revise math tables or learn about river systems of India—all before the sun sets.</p>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground mb-3">Across the 12 Gurukuls, students are trained in:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Four Vedas • Eight Veda Shakhas</li>
                    <li>• Sanskrit language, grammar, and poetic meters (chandas)</li>
                    <li>• Agama Shastras, rituals, and preparation for Pujas and Homas</li>
                    <li>• Yoga and Meditation, practiced daily</li>
                    <li>• English, Mathematics, and Social Sciences to bridge tradition with today's world</li>
                  </ul>
                </div>
                <p className="mt-6 text-muted-foreground">
                  Each Gurukul adapts its rhythm to the needs of its students. But the essence remains the same—a day structured with discipline, silence, seva, and joy.
                </p>
                <div className="mt-6 p-6 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                  <p className="text-foreground font-medium italic">
                    "Education is not just for making a living. It is to make life."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Gurudev Sri Sri Ravi Shankar ji</p>
                </div>
                <p className="mt-6 text-muted-foreground">
                  And yes, values are not taught as subjects here. They are absorbed—through the presence of the vedacharyas, the shared meals, the discipline of sandhyavandana, and the laughter that rings through open courtyards during games.
                </p>
                <p className="mt-4 text-muted-foreground font-medium">
                  This is what it means to receive vidya—the kind that shapes the whole being.
                </p>
              </div>
              <div className="md:order-1 flex justify-center">
                <img 
                  src="/lovable-uploads/013f8120-2cc7-438e-b24a-cbf4f6324124.png"
                  alt="Students in Gurukul classroom" 
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Gurukuls Offer */}
      <section className="py-7 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              What All Gurukuls Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold text-primary mb-4">Comprehensive Education</h3>
                <p className="text-muted-foreground">Vedas, Vedanga, Sanskrit, Ganitam, Yoga, English</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold text-primary mb-4">Complete Care</h3>
                <p className="text-muted-foreground">Free boarding, clothing, books, and meals</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold text-primary mb-4">Community Focus</h3>
                <p className="text-muted-foreground">Children from nearby rural areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-7">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
        Witness the Tradition Come Alive
      </h2>

      <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
        Step inside a day at the Gurukul—where every sunrise begins with devotion, and every chant carries centuries of wisdom.
        Watch how young lives are being transformed through the power of Vedic learning.
      </p>

      <div className="bg-card p-8 rounded-lg shadow-lg border">
        <div className="aspect-video mb-6 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/75qgodb15FM"

            title="A Day in the Life at a Sri Sri Gurukul"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-center">
          <Link to="/donate">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                 Support a Gurukul Today
           </button>

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

export default AboutUs;

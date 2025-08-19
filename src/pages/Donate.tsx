import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import FastImage from "@/components/FastImage";

const Donate = () => {
  const donationItems = [
    {
      title: "Vedic Education",
      amount: "Rs 20,000",
      description: "will support Vedic education, nurturing young minds in the age-old traditions of culture"
    },
    {
      title: "Vedic Library",
      amount: "Rs 10,000", 
      description: "will help expand the Vedic library, making valuable resources accessible to students and scholars."
    },
    {
      title: "Anna Daan for Vedic Students",
      amount: "Rs 5,000",
      description: "you can provide nutritious meals to Vedic students, ensuring their well-being and focus on their studies."
    },
    {
      title: "Vedic Scholars",
      amount: "Rs 25,000",
      description: "will aid in the sustenance of Vedic scholars, enabling them to delve deeper into the ancient wisdom of the Vedas."
    },
    {
      title: "Veda Pathashala",
      amount: "Rs 100,000",
      description: "will help sustain and expand the Veda Pathashala, a sacred place of learning."
    },
    {
      title: "Clothes for Vedic Students",
      amount: "Rs 2,000",
      description: "you can provide two sets of clothing to Vedic students, ensuring their comfort and dignity."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-orange-100 to-yellow-100 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image */}
            <div className="lg:w-1/2">
              <FastImage 
                src="/lovable-uploads/d245ccba-aa6a-406c-8218-87766a7e2b40.png" 
                alt="Vedic Student" 
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                priority={true}
                timeout={2000}
              />
            </div>
            
            {/* Right side - Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Sri Sri Gurukul - Donate
              </h1>
              <div className="mb-6">
                <p className="text-lg text-gray-700 italic mb-2">
                  "Vidya Daanam Param Daanam" –
                </p>
                <p className="text-xl text-gray-800 font-semibold">
                  The gift of education is the highest gift.
                </p>
              </div>
              <Button 
                variant="default" 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full"
                asChild
              >
                <a href="https://online.vvmvp.org/home/donate?Dtype=5" target="_blank" rel="noopener noreferrer">
                  Donate Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Sri Sri Gurukul - Donate
          </h2>
          
          <div className="mb-8 text-gray-700 leading-relaxed">
            <p className="mb-6">
              At Sri Sri Gurukul, the mission is to preserve and promote the rich heritage of Vedic education, 
              fostering the growth of students and supporting the broader community.
            </p>
            <p className="mb-6">
              Your generous contributions play a pivotal role in this mission. Your support is invaluable, 
              and together, we can make a difference. Below, you will find various areas where your donations 
              can make a significant impact:
            </p>
          </div>

          {/* Donation Items */}
          <div className="space-y-4 mb-12">
            {donationItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="text-orange-500 text-xl mt-1">●</div>
                <div>
                  <span className="font-semibold text-gray-800">{item.title}:</span>
                  <span className="ml-2">
                    Your contribution of <span className="font-bold text-orange-600">{item.amount}</span> {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CSR Information */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-4">
              For corporate social responsibility (CSR) donations, kindly contact us at{" "}
              <a href="mailto:directorops.ssvp@vvmvp.org" className="text-blue-600 hover:underline">
                directorops.ssvp@vvmvp.org
              </a>{" "}
              or call{" "}
              <a href="tel:9405070710" className="text-blue-600 hover:underline">
                9405070710
              </a>
              . We will be pleased to assist you in aligning your CSR initiatives with this noble cause.
            </p>
          </div>

          {/* Closing Message */}
          <div className="text-center">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Your contributions have the power to make a lasting impact on Vedic education and the community. 
              Together, let's uphold and nurture this sacred tradition for generations to come. 
              Thank you for being a part of Sri Sri Gurukul's journey.
            </p>
            
            <div className="mb-6">
              <p className="text-sm text-gray-600 italic">
                <strong>Note:</strong> All donations are tax-deductible under relevant tax laws.
              </p>
            </div>

            <p className="text-lg font-semibold text-gray-800 mb-8">
              Thank you for your kind support!
            </p>

            <Button 
              variant="default" 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-12 py-3 rounded-full"
              asChild
            >
              <a href="https://online.vvmvp.org/home/donate?Dtype=5" target="_blank" rel="noopener noreferrer">
                Donate Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;

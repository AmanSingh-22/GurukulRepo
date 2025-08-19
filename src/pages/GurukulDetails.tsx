import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FastImage from "@/components/FastImage";
import ImagePreloader from "@/components/ImagePreloader";

interface GurukulData {
  [key: string]: {
    name: string;
    fullName: string;
    location: string;
    heroImage: string;
    contentImage: string;
    description: string;
    history: string;
    whatIsTaught: string;
    whoStudies: string;
    currentNeeds: string;
    supportAmount: string;
    whyImportant: string;
    gallery: string[];
  };
}

// Gallery images for each gurukul
const galleryImages = {
  bangalore: [
    "/lovable-uploads/6596ee92-8afb-4c1b-9499-8b74a6521868.png",
    "/lovable-uploads/ef96984b-0e2f-4df8-9e6f-ae576d1c573c.png",
    "/lovable-uploads/80d334a2-8b6d-4917-b210-67e4d6bd6d49.png",
    "/lovable-uploads/fd8d3849-8e98-4cb7-b7ff-b33df0fc08e1.png",
    "/lovable-uploads/675a6424-85da-466a-8474-14f6662537f7.png",
    "/lovable-uploads/58376ec6-857c-46eb-9afa-f98a4c641dd6.png",
    "/lovable-uploads/24ace4da-7a0d-4697-a1b6-8642d747fd69.png",
    "/lovable-uploads/43277aff-ef6b-41a8-8ed4-d522b1d0ddba.png"
  ],
  bodhgaya: [
    "/lovable-uploads/8fb3306e-71ab-4784-9cab-c51116946b7f.png",
    "/lovable-uploads/5198e6db-592f-465c-b256-12ba9afaa907.png",
    "/lovable-uploads/abb028f3-aa0b-4119-8261-c5b8b94732ba.png",
    "/lovable-uploads/0bf7518d-fdda-4de3-b801-7df8eba222c8.png",
    "/lovable-uploads/8cd8a310-eec7-4e77-9ed2-42555886cf5b.png",
    "/lovable-uploads/31d7ac38-63a2-4433-b385-ce7a0741f290.png",
    "/lovable-uploads/4d19d34c-8c3a-49e0-a4e1-fc9627fa68f4.png",
    "/lovable-uploads/ae42370c-8b23-46df-880f-9643f98a9168.png"
  ],
  chamba: [
    "/lovable-uploads/072e8078-225a-4987-9ad0-016be817f766.png",
    "/lovable-uploads/c6b64ab7-9980-4ee6-9d1f-38bb0b78ce74.png",
    "/lovable-uploads/6596ee92-8afb-4c1b-9499-8b74a6521868.png",
    "/lovable-uploads/ef96984b-0e2f-4df8-9e6f-ae576d1c573c.png",
    "/lovable-uploads/675a6424-85da-466a-8474-14f6662537f7.png",
    "/lovable-uploads/58376ec6-857c-46eb-9afa-f98a4c641dd6.png",
    "/lovable-uploads/24ace4da-7a0d-4697-a1b6-8642d747fd69.png",
    "/lovable-uploads/43277aff-ef6b-41a8-8ed4-d522b1d0ddba.png"
  ],
  cuttack: [
    "/lovable-uploads/8fb3306e-71ab-4784-9cab-c51116946b7f.png",
    "/lovable-uploads/5198e6db-592f-465c-b256-12ba9afaa907.png",
    "/lovable-uploads/80d334a2-8b6d-4917-b210-67e4d6bd6d49.png",
    "/lovable-uploads/fd8d3849-8e98-4cb7-b7ff-b33df0fc08e1.png",
    "/lovable-uploads/31d7ac38-63a2-4433-b385-ce7a0741f290.png",
    "/lovable-uploads/abb028f3-aa0b-4119-8261-c5b8b94732ba.png",
    "/lovable-uploads/0bf7518d-fdda-4de3-b801-7df8eba222c8.png",
    "/lovable-uploads/8cd8a310-eec7-4e77-9ed2-42555886cf5b.png"
  ],
  dhubri: [
    "/lovable-uploads/4d19d34c-8c3a-49e0-a4e1-fc9627fa68f4.png",
    "/lovable-uploads/ae42370c-8b23-46df-880f-9643f98a9168.png",
    "/lovable-uploads/072e8078-225a-4987-9ad0-016be817f766.png",
    "/lovable-uploads/c6b64ab7-9980-4ee6-9d1f-38bb0b78ce74.png",
    "/lovable-uploads/6596ee92-8afb-4c1b-9499-8b74a6521868.png",
    "/lovable-uploads/ef96984b-0e2f-4df8-9e6f-ae576d1c573c.png",
    "/lovable-uploads/675a6424-85da-466a-8474-14f6662537f7.png",
    "/lovable-uploads/58376ec6-857c-46eb-9afa-f98a4c641dd6.png"
  ],
  farukhabad: [
    "/lovable-uploads/24ace4da-7a0d-4697-a1b6-8642d747fd69.png",
    "/lovable-uploads/43277aff-ef6b-41a8-8ed4-d522b1d0ddba.png",
    "/lovable-uploads/8fb3306e-71ab-4784-9cab-c51116946b7f.png",
    "/lovable-uploads/5198e6db-592f-465c-b256-12ba9afaa907.png",
    "/lovable-uploads/80d334a2-8b6d-4917-b210-67e4d6bd6d49.png",
    "/lovable-uploads/fd8d3849-8e98-4cb7-b7ff-b33df0fc08e1.png",
    "/lovable-uploads/31d7ac38-63a2-4433-b385-ce7a0741f290.png",
    "/lovable-uploads/abb028f3-aa0b-4119-8261-c5b8b94732ba.png"
  ],
  jabalpur: [
    "/lovable-uploads/0bf7518d-fdda-4de3-b801-7df8eba222c8.png",
    "/lovable-uploads/8cd8a310-eec7-4e77-9ed2-42555886cf5b.png",
    "/lovable-uploads/4d19d34c-8c3a-49e0-a4e1-fc9627fa68f4.png",
    "/lovable-uploads/ae42370c-8b23-46df-880f-9643f98a9168.png",
    "/lovable-uploads/072e8078-225a-4987-9ad0-016be817f766.png",
    "/lovable-uploads/c6b64ab7-9980-4ee6-9d1f-38bb0b78ce74.png",
    "/lovable-uploads/6596ee92-8afb-4c1b-9499-8b74a6521868.png",
    "/lovable-uploads/ef96984b-0e2f-4df8-9e6f-ae576d1c573c.png"
  ],
  nagpur: [
    "/lovable-uploads/675a6424-85da-466a-8474-14f6662537f7.png",
    "/lovable-uploads/58376ec6-857c-46eb-9afa-f98a4c641dd6.png",
    "/lovable-uploads/24ace4da-7a0d-4697-a1b6-8642d747fd69.png",
    "/lovable-uploads/43277aff-ef6b-41a8-8ed4-d522b1d0ddba.png",
    "/lovable-uploads/8fb3306e-71ab-4784-9cab-c51116946b7f.png",
    "/lovable-uploads/5198e6db-592f-465c-b256-12ba9afaa907.png",
    "/lovable-uploads/80d334a2-8b6d-4917-b210-67e4d6bd6d49.png",
    "/lovable-uploads/fd8d3849-8e98-4cb7-b7ff-b33df0fc08e1.png"
  ],
  omkareshwar: [
    "/lovable-uploads/31d7ac38-63a2-4433-b385-ce7a0741f290.png",
    "/lovable-uploads/abb028f3-aa0b-4119-8261-c5b8b94732ba.png",
    "/lovable-uploads/0bf7518d-fdda-4de3-b801-7df8eba222c8.png",
    "/lovable-uploads/8cd8a310-eec7-4e77-9ed2-42555886cf5b.png",
    "/lovable-uploads/4d19d34c-8c3a-49e0-a4e1-fc9627fa68f4.png",
    "/lovable-uploads/ae42370c-8b23-46df-880f-9643f98a9168.png",
    "/lovable-uploads/072e8078-225a-4987-9ad0-016be817f766.png",
    "/lovable-uploads/c6b64ab7-9980-4ee6-9d1f-38bb0b78ce74.png"
  ],
  pune: [
    "/lovable-uploads/6596ee92-8afb-4c1b-9499-8b74a6521868.png",
    "/lovable-uploads/ef96984b-0e2f-4df8-9e6f-ae576d1c573c.png",
    "/lovable-uploads/675a6424-85da-466a-8474-14f6662537f7.png",
    "/lovable-uploads/58376ec6-857c-46eb-9afa-f98a4c641dd6.png",
    "/lovable-uploads/24ace4da-7a0d-4697-a1b6-8642d747fd69.png",
    "/lovable-uploads/43277aff-ef6b-41a8-8ed4-d522b1d0ddba.png",
    "/lovable-uploads/8fb3306e-71ab-4784-9cab-c51116946b7f.png",
    "/lovable-uploads/5198e6db-592f-465c-b256-12ba9afaa907.png"
  ],
  rishikesh: [
    "/lovable-uploads/80d334a2-8b6d-4917-b210-67e4d6bd6d49.png",
    "/lovable-uploads/fd8d3849-8e98-4cb7-b7ff-b33df0fc08e1.png",
    "/lovable-uploads/31d7ac38-63a2-4433-b385-ce7a0741f290.png",
    "/lovable-uploads/abb028f3-aa0b-4119-8261-c5b8b94732ba.png",
    "/lovable-uploads/0bf7518d-fdda-4de3-b801-7df8eba222c8.png",
    "/lovable-uploads/8cd8a310-eec7-4e77-9ed2-42555886cf5b.png",
    "/lovable-uploads/4d19d34c-8c3a-49e0-a4e1-fc9627fa68f4.png",
    "/lovable-uploads/ae42370c-8b23-46df-880f-9643f98a9168.png"
  ],
  vasad: [
    "/lovable-uploads/072e8078-225a-4987-9ad0-016be817f766.png",
    "/lovable-uploads/c6b64ab7-9980-4ee6-9d1f-38bb0b78ce74.png",
    "/lovable-uploads/6596ee92-8afb-4c1b-9499-8b74a6521868.png",
    "/lovable-uploads/ef96984b-0e2f-4df8-9e6f-ae576d1c573c.png",
    "/lovable-uploads/675a6424-85da-466a-8474-14f6662537f7.png",
    "/lovable-uploads/58376ec6-857c-46eb-9afa-f98a4c641dd6.png",
    "/lovable-uploads/24ace4da-7a0d-4697-a1b6-8642d747fd69.png",
    "/lovable-uploads/43277aff-ef6b-41a8-8ed4-d522b1d0ddba.png"
  ]
};

const gurukulData: GurukulData = {
  bangalore: {
    name: "Our Gurukul Bangalore",
    fullName: "Sri Sri Gurukul Bangalore, Karnataka",
    location: "Bangalore, Karnataka",
    heroImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    contentImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    description: "The first Gurukul where our mission began.",
    history: "The very first Gurukul began humbly—in Gurudev Sri Sri Ravi Shankar ji's own home in Jayanagar, Bangalore. It wasn't long before it grew in strength, purpose, and space, finding its rightful home within the serene premises of the Art of Living International Center on Kanakapura Road. It remains a vibrant center for Vedic learning to this day.\n\nStudents here receive structured training in the Vedas and Sanskrit under the guidance of experienced vedacharyas. The peaceful environment, disciplined lifestyle, and access to spiritual satsangs at the ashram create a deeply nurturing space for young seekers.",
    whatIsTaught: "Five different Veda Shakhas are taught here, guided by eight dedicated Vedacharyas. Students also learn Sanskrit grammar, daily rituals, and chanting with precise pronunciation—building both knowledge and inner refinement.",
    whoStudies: "Boys from across India—especially from under-resourced backgrounds—live and study at this Gurukul full-time. They are provided with traditional clothing, nutritious satvik meals, and a spiritually immersive routine.",
    currentNeeds: "With a steady increase in student enrollment, there is a growing need for support in daily maintenance, including books, dhotis, bedding, and food supplies.",
    supportAmount: "₹25,000",
    whyImportant: "This Gurukul laid the foundation for all future Sri Sri Gurukuls. Its spirit continues to inspire the revival of ancient knowledge across India.\n\nContribute to the roots of this revival.Help the very first Gurukul flourish and carry forward its unmatched legacy.",
    gallery: galleryImages.bangalore
  },
  bodhgaya: {
    name: "Our Gurukul Bodhgaya",
    fullName: "Sri Sri Gurukul Bodhgaya, Bihar",
    location: "Bodhgaya, Bihar",
    heroImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    contentImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    description: "Near the Bodhi Tree, a young batch chants their way into clarity",
    history: "Just nine kilometers from the sacred Bodhi Tree—where Gautama Buddha attained enlightenment —stands the Sri Sri Gurukul in Bodhgaya. In a land known for spiritual awakening, young students here begin their own journey, steeped in the sacred chants of the Vedas.\n\nEstablished in 2018, this Gurukul is housed within the Art of Living Ashram and continues to be a beacon of learning for children from nearby villages and underserved communities. The energy of this place is both peaceful and powerfully focused.",
    whatIsTaught: "Traditional Vedic studies, Sanskrit grammar, meditation practices, and interfaith spiritual wisdom in the enlightened atmosphere of Bodhgaya.",
    whoStudies: "Students seeking spiritual growth in one of the world's most sacred locations, combining Vedic education with the profound peace of Buddha's enlightenment site.",
    currentNeeds: "Support needed for maintaining the sacred learning environment, student accommodation, and educational materials.",
    supportAmount: "₹25,000",
    whyImportant: "Here in Bodhgaya, where ancient silence still lingers in the air, the voices of young Vedic scholars rise with confidence—and that is nothing short of sacred.\n\nBe part of their journey.Support a child. Sustain a tradition.",
    gallery: galleryImages.bodhgaya
  },
  chamba: {
    name: "Our Gurukul Chamba",
    fullName: "Sri Sri Gurukul Chamba, Himachal Pradesh",
    location: "Chamba, Himachal Pradesh",
    heroImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    contentImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    description: "Vedic verses meet mountain winds in this elevated Gurukul.",
    history: "Perched amidst the serene Himalayan peaks, the Chamba Gurukul offers more than just a classroom —it offers an atmosphere of silence, elevation, and sacred study. Established in 2015, it currently operates from a rented premise while awaiting its permanent home in the region.\n\nThe climate is crisp, the mornings misty, and the students—bright and dedicated. This Gurukul is quietly shaping young lives through the living tradition of the Vedas.",
    whatIsTaught: "Comprehensive Vedic curriculum including chanting, Sanskrit studies, philosophy, and mountain-inspired spiritual practices.",
    whoStudies: "Students from northern India who seek traditional education in the pure environment of the Himalayas.",
    currentNeeds: "Support required for winter heating, warm clothing, educational materials, and maintaining facilities in the mountain environment.",
    supportAmount: "₹25,000",
    whyImportant: "To hear Vedic chants echo through Himalayan valleys is no small thing. It's culture breathing again —on its own terms.\n\nBe the warmth that sustains them.Sponsor a child. Uplift a lineage.",
    gallery: galleryImages.chamba
  },
  cuttack: {
    name: "Our Gurukul Cuttack",
    fullName: "Sri Sri Gurukul Cuttack, Odisha",
    location: "Cuttack, Odisha",
    heroImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    contentImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    description: "By the Ganga, Vedic voices blend with Himalayan silence.",
    history: "In Odisha the lush, expansive campus of Sri Sri University—set near the delta of the mighty Mahanadi River—lies a unique Gurukul that blends traditional Vedic education with a deeply contemporary setting. Surrounded by academic vibrancy and spiritual stillness, this Gurukul stands as a quiet, sacred space within a modern institution.\n\nHere, Vedic knowledge is not isolated—it is integrated, flowing side by side with today's world.",
    whatIsTaught: "Comprehensive Vedic education including traditional chanting methods, Sanskrit studies, regional cultural traditions, and spiritual practices specific to the Odishan tradition.",
    whoStudies: "Students from Odisha and eastern India who seek to combine traditional Vedic learning with appreciation for their regional cultural heritage.",
    currentNeeds: "Support needed for facility maintenance, educational materials, traditional clothing, and nutritious meals for the growing student community.",
    supportAmount: "₹25,000",
    whyImportant: "This Gurukul preserves both Vedic wisdom and Odishan cultural traditions, ensuring that the rich heritage of eastern India continues to flourish.",
    gallery: galleryImages.cuttack
  },
  dhubri: {
    name: "Our Gurukul Dhubri",
    fullName: "Sri Sri Gurukul Dhubri, Assam",
    location: "Dhubri, Assam",
    heroImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    contentImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    description: "By the Brahmaputra's banks, the youngest Gurukul quietly thrives.",
    history: "On the tranquil banks of the mighty Brahmaputra, nestled within 15 acres of peace and purpose, stands the Sri Sri Gurukul in Dhubri. Established in 2019, it is the youngest among the 12—but what it lacks in age, it more than makes up for in devotion.The natural silence of the land, the vast skies above, and the grounded humility of the students make this Gurukul a place where learning flows with grace.",
    whatIsTaught: "Traditional Vedic studies adapted to the northeastern context, including Sanskrit grammar, regional spiritual practices, and cultural integration.",
    whoStudies: "Students from Northeast India and other regions who seek Vedic education in a culturally diverse environment.",
    currentNeeds: "Support needed for infrastructure development, educational resources, and maintaining the unique cultural learning environment.",
    supportAmount: "₹25,000",
    whyImportant: "This Dhubri Gurukul may be far from India's cities—but it's close to something deeper. When a student here chants from the Vedas, he bridges centuries in a single breath.",
    gallery: galleryImages.dhubri
  },
  farukhabad: {
    name: "Our Gurukul Farukhabad",
    fullName: "Sri Sri Gurukul Farukhabad, Uttar Pradesh",
    location: "Farukhabad, Uttar Pradesh",
    heroImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    contentImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    description: "Sacred chants rise where the Ganga flows endlessly.",
    history: "On the fertile plains along the sacred Ganga, the Farrukhabad Gurukul quietly thrives. Situated on a 4.5-acre ashram campus, it carries a sense of rootedness—both in geography and tradition. The sound of flowing mantras often mingles with the soft rush of the river, creating an atmosphere that feels both grounded and divine. Here, learning is not rushed. It's rhythmical, just like the Ganga that flows nearby.",
    whatIsTaught: "Comprehensive Vedic curriculum including multiple Shakhas, Sanskrit grammar, philosophy, and traditional northern Indian scholarly methods.",
    whoStudies: "Students primarily from Uttar Pradesh and surrounding states who seek authentic Vedic education in the traditional heartland.",
    currentNeeds: "Support required for student accommodation, educational materials, daily meals, and maintaining the traditional learning infrastructure.",
    supportAmount: "₹25,000",
    whyImportant: "This Gurukul preserves the classical North Indian tradition of Vedic scholarship in its historical homeland.",
    gallery: galleryImages.farukhabad
  },
  jabalpur: {
    name: "Our Gurukul Jabalpur",
    fullName: "Sri Sri Gurukul Jabalpur, Madhya Pradesh",
    location: "Jabalpur, Madhya Pradesh",
    heroImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    contentImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    description: "Vedic learning in the heart of India.",
    history: "Located in Jabalpur, Madhya Pradesh, our Gurukul serves as a central hub for Vedic education in the geographical heart of India. This strategic location allows students from all regions to access quality traditional education.\n\nThe Gurukul combines the ancient gurukul system with modern facilities, providing students with the best of both traditional wisdom and contemporary comfort.",
    whatIsTaught: "Traditional Vedic studies including comprehensive Sanskrit education, ritual practices, and philosophical studies in a structured residential program.",
    whoStudies: "Students from across central India who seek authentic Vedic education in a centrally located, well-equipped facility.",
    currentNeeds: "Support needed for expanding student capacity, educational resources, and maintaining high-quality facilities.",
    supportAmount: "₹25,000",
    whyImportant: "This Gurukul serves as a central hub for Vedic education, making traditional learning accessible to students from all regions of India.",
    gallery: galleryImages.jabalpur
  },
  nagpur: {
    name: "Our Gurukul Nagpur",
    fullName: "Sri Sri Gurukul Nagpur, Maharashtra",
    location: "Nagpur, Maharashtra",
    heroImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    contentImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    description: "Four Shakhas. One vision. An expanding centre of learning",
    history: "Established in Nagpur, Surrounded by ancient temples and spiritual landmarks, the Nagpur Gurukul stands on sacred ground. This Gurukul carries forward an unbroken tradition of scriptural learning. Established in 2015, it has become a confluence of multiple Vedic streams under one roof.",
    whatIsTaught: "Comprehensive Vedic curriculum including Sanskrit studies, traditional chanting, philosophy, and practical applications of ancient wisdom.",
    whoStudies: "Students from Maharashtra and neighboring states who seek quality Vedic education with excellent connectivity and modern amenities.",
    currentNeeds: "Support required for student accommodation, educational materials, technology integration, and daily operational expenses.",
    supportAmount: "₹25,000",
    whyImportant: "This Gurukul leverages its central location to make traditional Vedic education accessible to students from across India.",
    gallery: galleryImages.nagpur
  },
  omkareshwar: {
    name: "Our Gurukul Omkareshwar",
    fullName: "Sri Sri Gurukul Omkareshwar, Madhya Pradesh",
    location: "Omkareshwar, Madhya Pradesh",
    heroImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    contentImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    description: "Between two Jyotirlingas, a sacred rhythm continues.",
    history: "Situated on the banks of the sacred Narmada River, between two of India's revered Jyotirlingas— Omkareshwar and Mahakaleshwar—the Sri Sri Gurukul in Omkareshwar holds a powerful spiritual presence. Here, the vibration of the mantras seems to blend effortlessly with the gentle current of the river. This Gurukul is a quiet sanctuary where ancient teachings are preserved in their purest form, far from the distractions of city life.",
    whatIsTaught: "Comprehensive Vedic studies including multiple Veda Shakhas, Sanskrit grammar, traditional rituals, and spiritual practices are taught by experienced vedacharyas in this sacred environment.",
    whoStudies: "Students from across India come to study in this spiritually charged location, benefiting from both traditional education and the sacred atmosphere of Omkareshwar.",
    currentNeeds: "Support needed for student accommodation, daily meals, educational materials, and maintenance of the traditional learning environment.",
    supportAmount: "₹25,000",
    whyImportant: "Located in one of India's most sacred sites, this Gurukul provides students with unparalleled spiritual growth opportunities while preserving ancient Vedic traditions.",
    gallery: galleryImages.omkareshwar
  },
  pune: {
    name: "Our Gurukul Pune",
    fullName: "Sri Sri Gurukul Pune, Maharashtra",
    location: "Pune, Maharashtra",
    heroImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    contentImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    description: "Where Bhima, Bhrama, and Indrayani meet, mantras rise.",
    history: "Set on the sacred confluence of three rivers—the Bhima, Bhama, and Indrayani—the Pune Ashram is home to a small but spiritually vibrant Gurukul. Known as the Triveni Ashram, this 40- acre campus breathes silence, serenity, and a deep sense of purpose. It's a place where the ancient and the natural meet. Here, the sound of flowing water often merges with the cadence of Vedic chanting—forming a space that is both peaceful and alive.",
    whatIsTaught: "Traditional Vedic studies including multiple Shakhas, Sanskrit grammar, philosophy, yoga, and meditation practices, taught by experienced acharyas in a structured curriculum.",
    whoStudies: "Students from Maharashtra and across India who seek quality Vedic education in an academically rich environment, combining traditional learning with modern amenities.",
    currentNeeds: "Support required for expanding facilities, modern educational aids while maintaining traditional methods, and providing complete care for residential students.",
    supportAmount: "₹25,000",
    whyImportant: "This Gurukul demonstrates how ancient Vedic education can thrive in a modern educational hub, creating scholars who are rooted in tradition yet relevant to contemporary times.",
    gallery: galleryImages.pune
  },
  rishikesh: {
    name: "Our Gurukul Rishikesh",
    fullName: "Sri Sri Gurukul Rishikesh, Uttarakhand",
    location: "Rishikesh, Uttarakhand",
    heroImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    contentImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    description: "By the Ganga, Vedic voices blend with Himalayan silence.",
    history: "Along the sacred banks of the Ganga, in the heart of the spiritual capital of India, the Rishikesh Gurukul stands as a bridge between tradition and transformation. Originally started in Tehri, the Gurukul was relocated to Rishikesh during the pandemic and now operates from a peaceful riverside setting across two simple premises. Here, surrounded by the chanting of mantras and the timeless presence of sages, young voices carry forward a legacy that has shaped India's soul for millennia.",
    whatIsTaught: "Traditional Vedic studies including chanting, Sanskrit grammar, and spiritual practices are taught by experienced teachers in this sacred location.",
    whoStudies: "Students from across India come to study in this spiritually charged environment, benefiting from the sacred vibrations of Rishikesh.",
    currentNeeds: "Support needed for student accommodation, food, and educational materials in this growing center of learning.",
    supportAmount: "₹25,000",
    whyImportant: "Located in the yoga capital of the world, this Gurukul provides students with unparalleled spiritual growth opportunities.",
    gallery: galleryImages.rishikesh
  },
  vasad: {
    name: "Our Gurukul Vasad",
    fullName: "Sri Sri Gurukul Vasad, Gujarat",
    location: "Vasad, Gujarat",
    heroImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    contentImage: "/lovable-uploads/404b10cd-14fe-4e22-97f3-40ff6a16267c.png",
    description: "Quietly flowing like the Mahisagar river simple, strong, and sacred.",
    history: "Tucked away on the tranquil banks of the Mahisagar river, just 25 km from Vadodara, the Vasad Sri Sri Gurukul is enveloped in a calm that feels timeless. Surrounded by nature and nourished by silence, this Gurukul is a haven for focused Vedic study—where students live close to the land and even closer to the wisdom of the scriptures. The environment is simple, sattvic, and deeply conducive to traditional learning.",
    whatIsTaught: "Traditional Vedic curriculum including chanting, Sanskrit literature, philosophy, and practical applications of ancient wisdom in daily life, guided by qualified teachers.",
    whoStudies: "Young students primarily from Gujarat and neighboring states who seek authentic Vedic education in a supportive, family-like environment.",
    currentNeeds: "Growing enrollment requires support for infrastructure development, educational resources, and daily operational expenses including food and accommodation.",
    supportAmount: "₹25,000",
    whyImportant: "This Gurukul serves as a vital link between Gujarat's progressive spirit and ancient Indian wisdom, ensuring cultural continuity for future generations.",
    gallery: galleryImages.vasad
  }
};

const GurukulDetails = () => {
  const { gurukul } = useParams();

  if (!gurukul || !gurukulData[gurukul]) {
    return (
      <div className="min-h-screen bg-background">
        {/* Fixed Navbar Container */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        
        {/* Main Content with top padding to account for fixed navbar */}
        <div className="pt-24">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Gurukul Not Found</h1>
            <p className="text-muted-foreground">The requested gurukul page could not be found.</p>
          </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  const data = gurukulData[gurukul];

  // Scroll to top when component mounts or gurukul changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [gurukul]);

  // Preload critical images for faster loading
  const criticalImages = [
    data.heroImage,
    data.contentImage,
    ...data.gallery.slice(0, 4) // Preload first 4 gallery images
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Preload critical images */}
      <ImagePreloader images={criticalImages} priority={true} />
      
      {/* Fixed Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Main Content with top padding to account for fixed navbar */}
      <div className="pt-20">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <FastImage
            src={data.contentImage}
            alt={`${data.name} hero background`}
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center 60%'
            }}
            priority={true}
            timeout={2000}
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 0.4) 100%, rgba(255, 255, 255, 0) 60%)' }} />
        <div className="absolute top-0 bottom-0 right-0 w-[45%] bg-gradient-to-l from-background/90 via-background/70 to-transparent hidden md:block" />
        
        {/* Content Container */}
        <div className="relative h-full flex items-center justify-center md:justify-end z-20">
          <div className="text-center md:text-left px-4 md:px-8 lg:px-16 md:w-1/2 lg:w-2/5">
            <h1 className="font-bold mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl" style={{ color: '#392013' }}>
              {data.name}
            </h1>
            <p className="text-lg font-semibold md:font-medium md:text-lg lg:text-xl mb-6 md:mb-8" style={{ color: '#392013' }}>
              {data.description}
            </p>
            <Button 
              size="lg" 
              className="font-semibold px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl rounded-full border-0"
              style={{
                background: 'linear-gradient(135deg, #F5CB62 0%, #F1B75E 100%)',
                color: '#333333'
              }}
            >
              <Link to="/donate">
                  Donate Now
                </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          
          {/* Content starts directly without background image */}



          {/* Gurukul Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {data.name}
              </h2>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{data.fullName}</h3>
              <p className="text-paragraph-dark leading-relaxed whitespace-pre-line">
                {data.history}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">What is taught here?</h4>
              <p className="text-paragraph-dark leading-relaxed">
                {data.whatIsTaught}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">Who studies here?</h4>
              <p className="text-paragraph-dark leading-relaxed">
                {data.whoStudies}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">What is currently needed?</h4>
              <p className="text-paragraph-dark leading-relaxed mb-4">
                {data.currentNeeds}
              </p>
              <p className="text-foreground font-semibold">
                Support <span style={{ color: '#ECA55A' }}>{data.supportAmount}</span> per child/month to help sustain this Gurukul's daily functioning.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">Why it matters</h4>
              <p className="text-paragraph-dark leading-relaxed">
                {data.whyImportant}
              </p>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Gallery</h3>
              <p className="text-paragraph-dark text-lg">Explore our gurukul</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.gallery.map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden group">
                  <FastImage
                    src={image} 
                    alt={`${data.name} gallery image ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={index < 4} // First 4 images are priority
                    timeout={3000}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16 p-8 bg-muted/30 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">Support Our Mission</h3>
            <p className="text-paragraph-dark mb-6">
              Your contribution helps preserve ancient wisdom for future generations
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full">
              <Link to="/donate">
                  Donate Now
                </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default GurukulDetails;

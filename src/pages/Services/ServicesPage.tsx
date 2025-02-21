import {
  Code,
  Smartphone,
  Megaphone,
  Gauge,
  Users,
  Clapperboard,
  ShoppingBag,
  Rss,
  ArrowRight,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

import FeaturedWork from "../../components/FeaturedWork";
import Stats from "../../components/Stats";
import Testimonials from "../../components/Testimonials";

// const services = [
//   {
//     icon: Code,
//     title: "Web Development",
//     description:
//       "Custom web applications built with modern technologies for optimal performance.",
//     link: "/services/web-development",
//   },
//   {
//     icon: Smartphone,
//     title: "Mobile Apps",
//     description:
//       "Native and cross-platform mobile solutions for iOS and Android.",
//     link: "/services/mobile-apps",
//   },
//   {
//     icon: ShoppingBag,
//     title: "E-Commerce",
//     description:
//       "Scalable online stores with seamless payment integration and optimization.",
//     link: "/services/ecommerce",
//   },
//   {
//     icon: Megaphone,
//     title: "Digital Marketing",
//     description:
//       "Data-driven strategies across search, social, and paid channels.",
//     link: "/services/digital-marketing",
//   },
//   {
//     icon: Palette,
//     title: "Custom Software Solutions",
//     description:
//       "User-centered design that creates engaging digital experiences.",
//     link: "/services/custom-software",
//   },
//   {
//     icon: Trophy,
//     title: "Social Marketing",
//     description:
//       "Technical optimization and content strategy to improve rankings.",
//     link: "/services/social-marketing",
//   },
//   {
//     icon: Gauge,
//     title: "Video Marketing",
//     description:
//       "Speed optimization and technical improvements for peak performance.",
//     link: "/services/video-marketing",
//   },
//   {
//     icon: Users,
//     title: "Email Marketing",
//     description:
//       "Digital transformation and growth strategies for your business.",
//     link: "/services/email-marketing",
//   },
// ];

const services = [
  {
    icon: Code,
    title: `Web Development`,
    description:
      "Build high-performance, responsive websites tailored to your business needs, providing seamless user experiences and secure platforms.",
    li1: "Custom Web Development",
    li2: "E-Commerce Development",
    li3: "WordPress Development",
    li4: "Shopify Store Setup",
    li5: "Website Redesign",
    link: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Develop innovative, user-friendly mobile apps for iOS and Android that engage users and enhance your business presence on mobile.",
    li1: "Custom Mobile App Development",
    li2: "Cross-Platform Development",
    li3: "App Maintenance & Updates",
    li4: "Mobile App UI/UX Design",
    li5: "App Optimization",
    link: "/services/mobile-apps",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description:
      "Create scalable, secure, and conversion-optimized online stores that provide a seamless shopping experience and drive sales.",
    li1: "Custom E-Commerce Platforms",
    li2: "Payment Gateway Integration",
    li3: "E-Commerce App Development",
    li4: "Product Management Systems",
    li5: "E-Commerce Analytics",
    link: "/services/ecommerce",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    description:
      "Increase visibility, drive traffic, and improve rankings with targeted SEO strategies and digital marketing campaigns that bring high.",
    li1: "On-Page & Off-Page SEO",
    li2: "Local SEO",
    li3: "PPC Management (Google Ads)",
    li4: "Content Marketing & Strategy",
    li5: "SEO Audits",
    link: "/services/digital-marketing",
  },
  {
    icon: Rss,
    title: "Social Media Marketing",
    description:
      "Boost your brand’s presence with targeted social media campaigns, content creation, and community engagement across key platforms.",
    li1: "Social Media Strategy Development",
    li2: "Social Media Advertising",
    li3: "Content Creation & Scheduling",
    li4: "Community Management",
    li5: "Influencer Marketing",
    link: "/services/social-marketing",
  },
  {
    icon: Clapperboard,
    title: "Video Marketing & Branding",
    description:
      "Create engaging video content that drives brand awareness, builds trust, and enhances customer conversions.",
    li1: "Explainer Videos",
    li2: "Brand Storytelling",
    li3: "Product Demos & Tutorials",
    li4: "Video Ads & Social Media Clips",
    li5: "Video SEO",
    link: "/services/video-marketing",
  },
  {
    icon: Gauge,
    title: "Email Marketing & Automation",
    description:
      "Engage and convert your audience with personalized, automated email campaigns and lead generation strategies.",
    li1: "Email Campaign Management",
    li2: "Marketing Automation",
    li3: "Lead Generation Campaigns",
    li4: "List Segmentation",
    li5: "A/B Testing & Optimization",
    link: "/services/email-marketing",
  },
  {
    icon: Users,
    title: "Custom Software Solutions",
    description:
      "Develop tailored software solutions to automate business processes, integrate systems, and enhance operational efficiency.",
    li1: "Bespoke Business Software",
    li2: "CRM Development",
    li3: "ERP Systems",
    li4: "API Integrations",
    li5: "Cloud-Based Software",
    link: "/services/custom-software",
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <main className="bg-gradient-primary">
      <section className="relative h-[95vh] bg- bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20240328/pngtree-flat-lay-top-view-office-table-desk-image_15644935.jpg')] bg-center bg-cover">
        <div className="absolute  bg-gradient-primary w-[100%] h-[95vh] opacity-80"></div>
        <section className="relative pt-20">
          <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-28">
            <div className="text-center">
              <span className="text-2xl font-bold tracking-wide uppercase font-orbitron text-yellow">
                Our Services
              </span>
              <h1 className="mt-4 mb-8 text-3xl font-bold font-orbitron text-[#FFFFFF] md:text-6xl">
                Transform{" "}
                <span className="text-yellow">Your Digital Presence</span>
              </h1>
              <p className="max-w-3xl mx-auto mb-4 text-xl text-[#FFFFFF]">
                At AAA Digital, we understand that every business has unique
                needs. That's why we offer a wide range of tailored digital
                services to help your business thrive online. From stunning
                websites to powerful mobile apps, our solutions are designed to
                drive growth, boost engagement, and increase conversions.
              </p>

              <Button
                variant="primary"
                size="md"
                className="px-4 py-2 rounded-full group"
                onClick={() => handleNavigation("/contact")}
              >
                Let's Get Started
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div> */}
        </section>
      </section>

      <section id="services" className="py-10 bg-gradient-primary ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 transition duration-300 border border-gray-200 bg-primary rounded-xl hover:border-primary hover:shadow-lg"
              >
                <div className="flex justify-center text-center ">
                <service.icon className="w-12 h-12 mb-4 text-yellow" />
                </div>
                <h3 className="mb-2 text-xl font-semibold font-orbitron text-center text-[#FFFFFF]">
                  {service.title}
                </h3>
                <p className="leading-8 text-gray-200">{service.description}</p>
                <button
                  className="pb-2 mt-4 btn text-yellow"
                  onClick={() => handleNavigation(service.link)}
                >
                  <span className="font-semibold text-yellow font-orbitron">See more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="15px"
                    className="pt-1 text-[#FFFFFF]"
                  >
                    <path
                    className="text-yellow"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      stroke="#292D32"
                      d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                    ></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedWork />
      <Stats />
      <Testimonials />
    </main>
  );
}

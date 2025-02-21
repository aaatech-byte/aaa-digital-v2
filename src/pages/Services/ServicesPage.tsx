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
  X
} from "lucide-react";

import { useState } from "react";
import Modal from "react-modal";
import { Button } from "../../components/ui/Button";
// import { useNavigate } from "react-router-dom";

interface Service {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
  li5: string;
}
import Contact from '../../components/ContactCTA'
import Testimonials from "../../components/Testimonials";


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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalService, setModalService] = useState<Service | null>(null);
  // const navigate = useNavigate();
  // const handleNavigation = (path: string) => {
  //   navigate(path);
  //   window.scrollTo(0, 0);
  // };

  const openModal = (service: Service) => {
    setModalService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalService(null);
  };

  return (
    <main className="bg-gradient-primary">
<<<<<<< HEAD
      <section className="relative h-[90vh] bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20240328/pngtree-flat-lay-top-view-office-table-desk-image_15644935.jpg')] bg-cover bg-center">
        <div className="absolute z-10 w-[100%] h-[100%] bg-gradient-primary opacity-80"></div>
        <div className="relative z-30 px-4 py-20 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 md:pt-60">

          <h1 className="my-3 text-2xl md:my-4  sm:text-4xl md:text-5xl font-orbitron font-semibold tracking-wide leading-6 text-white">
            Transform{" "} Your <br />
            <span className="text-yellow text-2xl md:text-5xl">  Digital Presence</span>
          </h1>
          <p className="max-w-5xl mx-auto mt-10 mb-8 text-base text-[#FFFFFF] sm:text-lg font-clashDisplay">
            At AAA Digital, we understand that every business has unique
            needs. That's why we offer a wide range of tailored digital
            services to help your business thrive online. From stunning
            websites to powerful mobile apps, our solutions are designed to
            drive growth, boost engagement, and increase conversions.
          </p>
          <div className="flex flex-col justify-center gap-4 font-clashDisplay sm:flex-row">

            <Button variant="primary" size="md" className="group px-4 py-4 font-bold">
              Get Your Free Consultation
              <ArrowRight className="ml-3 h-7 w-7 bg-yellow text-black rounded-full p-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div>
      </section>



      <section id="services" className="py-12 bg-gradient-primary ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden group transition-transform transform hover:scale-105 cursor-pointer h-[16rem] bg-[url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg')] bg-cover bg-center"
                onClick={() => openModal(service)}
              >
                <div className="absolute bg-primary w-full h-full opacity-50"></div>
                <div className="p-4 flex justify-center items-center flex-col relative z-10 ">
                  <service.icon className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl text-center font-bold text-white font-orbitron pt-2 sm:pt-3 md:pt-4 mb-2">{service.title} <br /> <span className="text-yellow">{service.subtitle}</span>
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-white p-3  text-center z-20">
                  <h3 className="text-xl font-bold mb-3 font-orbitron">{service.title}<br /> <span className="text-yellow">{service.subtitle}</span>
                  </h3>
                  <p className="text-white text-sm">{service.description}</p>
                  <Button variant="primary" size="md" className="group px-3 py-2 font-bold mt-4">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Service Modal"
            className="inset-0 bg-white p-8 rounded-2xl shadow-xl max-w-xl backdrop-blur-sm w-full relative flex md:translate-y-32 justify-center items-center mx-auto z-50">
            <div className="relative">
              <button
                className="absolute top-2 right-1 text-gray-500 text-2xl hover:text-gray-700 hover:scale-105"
                onClick={closeModal}
              >
                <X className="text-gray-600" />
              </button>
              {modalService && (
                <>
                  <div className="flex items-center justify-center mb-4">
                    <modalService.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold font-orbitron text-primary my-2">{modalService.title}
                    <br /> <span className="text-yellow">{modalService.subtitle}</span>
                  </h3>
                  <p className="text-primary  my-4 text-base">{modalService.description}</p>
                  <ul className="text-left text-primary space-y-3 pt-4">
                    {[modalService.li1, modalService.li2, modalService.li3, modalService.li4, modalService.li5].map((item, index) => (
                      <li key={index} className="flex items-center font-orbitron text-sm ">
                        <span className="w-2 h-2 bg-yellow font-medium rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </Modal>

          {/* <Services/> */}
          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 transition duration-300 border border-gray-200 bg-primary rounded-xl hover:border-primary hover:shadow-lg"
              >
                <div className="flex justify-center text-center ">
                  <service.icon className="w-12 h-12 mb-4 text-yellow" />
=======
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
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
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
<<<<<<< HEAD
                      className="text-yellow"
=======
                    className="text-yellow"
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
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
          </div> */}
        </div>
      </section>


      {/* <FeaturedWork /> */}
      {/* <Stats /> */}
      <Testimonials />
      <Contact/>
    </main>
  );
}

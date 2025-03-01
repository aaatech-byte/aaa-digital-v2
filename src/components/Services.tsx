import React, { useState } from "react";
import Modal from "react-modal";
import {
  Code,
  Smartphone,
  Megaphone,
  Gauge,
  Users,
  Clapperboard,
  ShoppingBag,
  Rss,
  X
} from "lucide-react";

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

import { Button } from './ui/Button'


const services: Service[] = [
  {
    icon: Code,
    title: "Web",
    subtitle: " Development",
    description:
      "Build high-performance, responsive websites tailored to your business needs, providing seamless user experiences and secure platforms.",
    li1: "Custom Web Development",
    li2: "E-Commerce Development",
    li3: "WordPress Development",
    li4: "Shopify Store Setup",
    li5: "Website Redesign",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    subtitle: " Development",
    description:
      "Develop innovative, user-friendly mobile apps for iOS and Android that engage users and enhance your business presence on mobile platforms.",
    li1: "Custom Mobile App Development",
    li2: "Cross-Platform Development",
    li3: "App Maintenance & Updates",
    li4: "Mobile App UI/UX Design",
    li5: "App Optimization",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    subtitle: " Solutions",
    description:
      "Create scalable, secure, and conversion-optimized online stores that provide a seamless shopping experience and drive sales.",
    li1: "Custom E-Commerce Platforms",
    li2: "Payment Gateway Integration",
    li3: "E-Commerce App Development",
    li4: "Product Management Systems",
    li5: "E-Commerce Analytics",
  },
  {
    icon: Users,
    title: "Custom Software ",
    subtitle: " Solutions",
    description:
      "Develop tailored software solutions to automate business processes, integrate systems, and enhance operational efficiency.",
    li1: "Bespoke Business Software",
    li2: "CRM Development",
    li3: "ERP Systems",
    li4: "API Integrations",
    li5: "Cloud-Based Software",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing &",
    subtitle: " SEO",
    description:
      "Increase visibility, drive traffic, and improve rankings with targeted SEO strategies and digital marketing campaigns that bring high ROI.",
    li1: "On-Page & Off-Page SEO",
    li2: "Local SEO",
    li3: "PPC Management (Google Ads)",
    li4: "Content Marketing & Strategy",
    li5: "SEO Audits",
  },
  {
    icon: Rss,
    title: "Social Media",
    subtitle: " Marketing",
    description:
      "Boost your brand’s presence with targeted social media campaigns, content creation, and community engagement across key platforms.",
    li1: "Social Media Strategy Development",
    li2: "Social Media Advertising",
    li3: "Content Creation & Scheduling",
    li4: "Community Management",
    li5: "Influencer Marketing",
  },
  {
    icon: Clapperboard,
    title: "Video Marketing &",
    subtitle: " Branding",
    description:
      "Create engaging video content that drives brand awareness, builds trust, and enhances customer conversions.",
    li1: "Explainer Videos",
    li2: "Brand Storytelling",
    li3: "Product Demos & Tutorials",
    li4: "Video Ads & Social Media Clips",
    li5: "Video SEO",
  },
  {
    icon: Gauge,
    title: "Email Marketing &",
    subtitle: " Automation",
    description:
      "Engage and convert your audience with personalized, automated email campaigns and lead generation strategies.",
    li1: "Email Campaign Management",
    li2: "Marketing Automation",
    li3: "Lead Generation Campaigns",
    li4: "List Segmentation",
    li5: "A/B Testing & Optimization",
  }
];

const Services: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalService, setModalService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setModalService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalService(null);
  };

  return (
    <section id="services" className="pb-12 pt-7 bg-gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mt-4 text-2xl md:text-5xl font-orbitron font-semibold text-white mb-4">
            Our <span className="text-yellow">Services</span>
          </h2>
          <p className="text-base sm:textlg text-[#FFFFFF] max-w-3xl mx-auto">
            Revolutionize your business with innovative digital solutions that drive growth, enhance efficiency, and unlock limitless potential in the evolving digital landscape.
          </p>
        </div>

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
    </section>
  );
};

export default Services;
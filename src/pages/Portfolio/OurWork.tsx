import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/Button";

import Testimonials from "../../components/Testimonials";
import Stats from "../../components/Stats";
import ContactForm from "../../components/ContactCTA";
import OurMission from "../../components/OurMission";

const truncateDescription = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + " "
    : text;
};

const projects = [
  {
    title: "E-Commerce Website for MountWorks Outdoors",
    category: "Web Development",
    description:
      "MountWorks Outdoors faced challenges with their sluggish and difficult-to-navigate online store, which led to a frustrating shopping experience for customers. Users found it hard to explore products and make purchases, resulting in lower engagement and sales.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    features: [
      "Advanced product categorization",
      "Mobile optimization",
      "Secure payment gateways",
    ],
    challenge: "A sluggish, difficult-to-navigate online store.",
    solution:
      "We created a custom Shopify e-commerce store with advanced product categorization, mobile optimization, and secure payment gateways.",
    result:
      "Increased sales, improved user engagement, and a streamlined shopping experience.",
    technologiesUsed: "Shopify, HTML5, CSS3, JavaScript",
  },
  {
    title: "Corporate Website for Kinetic Systems",
    category: "Web Development",
    description:
      "Kinetic Systems struggled with a static website that failed to attract leads and engage visitors effectively. The lack of dynamic content and interactive elements meant potential clients were not engaging with the brand, leading to low conversions and missed opportunities.",
    image:
      "https://media.istockphoto.com/id/1305999733/photo/web-design-desktop.jpg?s=612x612&w=0&k=20&c=mdGnzSrhUGijPuXHR3vA_hrQyshToudcJc8A50L0a9I=",
    features: [
      "Lead-generation forms",
      "Responsive design",
      "Clean and professional design",
    ],
    challenge: "A lack of leads from a static website.",
    solution:
      "Developed a modern WordPress website, with a clean, professional design, lead-generation forms, and responsive design.",
    result:
      "Boosted lead generation and improved user experience across devices.",
    technologiesUsed: "WordPress, PHP, MySQL, Custom Theme",
  },
  {
    title: "Portfolio Website for ArtHouse Collective",
    category: "Web Development",
    description:
      "ArtHouse Collective needed an online presence that could effectively showcase their creative work. Their previous portfolio lacked visibility and interactive features, resulting in low engagement and limited exposure for their unique projects.",
    image:
      "https://www.wsiworld.com/hubfs/2019/Digital-Marketing-Map-System.png",
    features: ["Fast load times", "Smooth animations", "Engaging features"],
    challenge: "Low visibility of creative work.",
    solution:
      "Built a React.js-powered portfolio with fast load times, smooth animations, and engaging features to showcase their work.",
    result:
      "Increased visibility, improved brand reputation, and client engagement.",
    technologiesUsed: "React.js, Node.js, CSS3, JavaScript",
  },
  {
    title: "On-Demand Delivery App for QuickDrop Logistics",
    category: "Mobile App Development",
    description:
      "QuickDrop Logistics faced challenges with managing and tracking deliveries effectively. The system was disorganized, resulting in delayed shipments and confusion for both customers and the logistics team.",
    image:
      "https://plus.unsplash.com/premium_photo-1664910033852-f1639b57cd9b?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Real-time tracking",
      "Automated delivery management",
      "Customer notifications",
    ],
    challenge: "Disorganized delivery management and tracking.",
    solution:
      "Developed a cross-platform mobile app with real-time tracking, automated delivery management, and customer notifications.",
    result:
      "Enhanced operational efficiency and a smoother user experience for customers.",
    technologiesUsed: "React Native, Firebase, Google Maps API",
  },
  {
    title: "Fitness App for MotionFit",
    category: "Mobile App Development",
    description:
      "MotionFit's existing fitness app lacked effective engagement tools, making it difficult for users to track their fitness progress and stay motivated. Users were leaving the app due to a lack of features that helped them achieve their goals.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    features: ["Goal-setting", "Workout tracking", "Social sharing"],
    challenge: "Ineffective engagement with fitness tracking.",
    solution:
      "Created a user-friendly fitness tracking app with goal-setting, workout tracking, and social sharing.",
    result: "Boosted app retention and user engagement across iOS and Android.",
    technologiesUsed: "Flutter, Dart, Firebase, REST APIs",
  },
  {
    title: "Shopify Store for EchoCycle Sports",
    category: "E-Commerce Solutions",
    description:
      "EchoCycle Sports faced challenges with their previous e-commerce store due to low conversion rates and a poor mobile shopping experience. Customers found it difficult to complete purchases, leading to abandoned carts and lost sales.",
    image:
      "https://riseuplabs.com/wp-content/uploads/2021/03/all-in-one-ecommerce-solution.jpg",
    features: [
      "Mobile optimization",
      "Integrated with inventory management",
      "Streamlined order processing",
    ],
    challenge: "Low conversion rates and poor mobile shopping experience.",
    solution:
      "Designed and developed a custom Shopify store optimized for mobile devices, integrated with inventory management, and streamlined order processing.",
    result: "Increased conversion rates and boosted sales.",
    technologiesUsed: "Shopify, Liquid, HTML5, CSS3, JavaScript",
  },
  {
    title: "WooCommerce Store for UrbanRoots Apparel",
    category: "E-Commerce Solutions",
    description:
      "UrbanRoots Apparel was struggling with a poor user experience on their previous WooCommerce store. Customers found the site difficult to navigate and the checkout process slow, which led to frustration and lost sales.",
    image:
      "https://cdn.dribbble.com/userupload/9089332/file/original-0f288efd42599c346a8f54adf8cde8ff.png?resize=400x0",
    features: ["Responsive design", "Secure checkout", "Easy navigation"],
    challenge: "Difficult navigation and slow checkout process.",
    solution:
      "Built a fully responsive WooCommerce store with secure checkout and easy navigation, leading to higher customer retention.",
    result: "Increased conversions and repeat customer visits.",
    technologiesUsed: "WooCommerce, WordPress, PHP, MySQL",
  },
  {
    title: "SEO Strategy for LuxeFit Wellness",
    category: "Digital Marketing & SEO",
    description:
      "LuxeFit Wellness was facing issues with low visibility in search engine results, which made it difficult for potential clients to find their website. Despite offering great services, they were not getting enough organic traffic.",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202406/666095d3dda47-top-features-to-look-for-in-learning-management-systems-054402379-16x9.jpeg?size=1200:675",
    features: ["On-page SEO", "Content creation", "Local SEO"],
    challenge: "Low visibility in search engines.",
    solution:
      "Implemented an extensive SEO strategy, including on-page SEO, content creation, and local SEO for better search engine rankings.",
    result: "40% increase in organic traffic, improved search rankings.",
    technologiesUsed:
      "Google Analytics, SEMrush, Yoast SEO, Google Search Console",
  },
  {
    title: "PPC Campaign for GreenStar Farms",
    category: "Digital Marketing & SEO",
    description:
      "GreenStar Farms was struggling with ineffective online advertising that resulted in low lead generation. Their existing campaigns weren’t optimized for their target audience, which made it difficult to generate quality leads.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUubJ9F7OdmNGNRhZDlSZqxjZNvm0J46pFQ&s",
    features: [
      "Targeted Google Ads campaign",
      "Optimized ads for maximum reach and conversions",
    ],
    challenge: "Ineffective online advertising and low lead generation.",
    solution:
      "Managed a targeted Google Ads campaign, optimizing ads for maximum reach and conversions.",
    result: "30% increase in leads and better ad performance.",
    technologiesUsed: "Google Ads, Google Analytics, Keyword Research Tools",
  },
  {
    title: "Instagram Campaign for PureVibe Supplements",
    category: "Social Media Marketing",
    description:
      "PureVibe Supplements had minimal brand visibility on Instagram, which hindered their ability to connect with potential customers. The brand lacked a social media strategy that could drive engagement and promote their products effectively.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPow6UFHtIMa1u_1WQ3fo82O5xXAnEfJtoA&s",
    features: ["Influencer partnerships", "Visually appealing content"],
    challenge: "Lack of brand exposure on social media.",
    solution:
      "Launched an engaging Instagram campaign that used influencer partnerships and visually appealing content to boost brand visibility.",
    result: "Increased followers, engagement, and brand awareness.",
    technologiesUsed: "Instagram Ads, Influencer Partnerships, Analytics Tools",
  },
  {
    title: "Explainer Video for CleanTech Solutions",
    category: "Video Marketing & Branding",
    description:
      "CleanTech Solutions was having trouble explaining their complex range of services to potential clients. Their website lacked clarity, which led to confusion and a low conversion rate.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRh_lcabBw83Z0WlosNURPvwmAJ0p3_kp0eQ&s",
    features: ["Simplified offerings", "Attracted more leads"],
    challenge: "Difficulty explaining complex services to potential customers.",
    solution:
      "Produced an engaging explainer video that simplified CleanTech Solutions’ offerings and attracted more leads.",
    result: "Increased conversions and enhanced brand awareness.",
    technologiesUsed:
      "Adobe Premiere Pro, After Effects, Video Hosting Platforms",
  },
  {
    title: "Promotional Video for UrbanVibes Clothing",
    category: "Video Marketing & Branding",
    description:
      "UrbanVibes Clothing had low engagement on their social media platforms, particularly Instagram. Their marketing efforts lacked a dynamic approach to attracting followers and engaging with their audience.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYPzGQWOrfy0Uo-aN3RFQ3TQm8jCtH7rJOw&s",
    features: ["Dynamic promotional video", "Showcased latest clothing line"],
    challenge: "Low social media engagement.",
    solution:
      "Created a dynamic promotional video showcasing UrbanVibes’ latest clothing line, driving social media interaction.",
    result: "Boosted product sales and social media engagement.",
    technologiesUsed:
      "Adobe Premiere Pro, Final Cut Pro, Social Media Marketing",
  },
];

export default function OurWork() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCaseStudyClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

    const navigate = useNavigate();
    const handleNavigation = (path: string) => {
      navigate(path);
      window.scrollTo(0, 0);
    };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedProject(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main>
      <section className="relative h-[95vh] bg-white bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230801/pngtree-top-tips-to-make-money-blogging-image_12958761.jpg')] bg-center bg-cover">
        <div className="absolute  bg-gray-100 w-[100%] h-[95vh] opacity-60"></div>
        <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-22 md:py-24 ">
          <div className="text-center pt-32">
            <h1 className="mt-4 text-3xl md:text-6xl font-bold text-gray-800 mb-6">
              Projects We've <span className="text-primary">Delivered</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl py-2 mx-auto">
              Explore our recent projects to discover how we've empowered
              businesses to achieve their digital goals, enhance their online
              presence, and drive long-term growth.
            </p>
            <Button
                variant="primary"
                size="md"
                className="group"
                onClick={() => navigate("/contact")}
              >
                Let's Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h2 className="mb-12 w-fit inline-block text-gray-800 text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide uppercase">
            Our <span className="text-primary">Work</span>
          </h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => handleCaseStudyClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="flex justify-between flex-col">
                  <div className="p-6">
                    <span className="text-primary my-3 font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 my-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 my-3">
                      {truncateDescription(project.description, 18)}
                      {/* Button to show more details */}
                      <button
                        className=" text-black font-semibold"
                        onClick={() => setSelectedProject(project)}
                      >
                        <span className="text-primary font-bold text-xl">
                          ..... {" "}
                        </span>
                      </button>
                    </p>
                  </div>
                  <code className="text-gray-600 text-sm sticky p-6 bottom-0">
                    Technologies:
                    <br />
                    <span className="text-primary font-semibold">
                      {project.technologiesUsed}
                    </span>
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            ref={modalRef}
            className="max-w-7xl w-full bg-white shadow-xl rounded-lg p-6"
          >
            {/* <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            /> */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-gray-600 mb-4">{selectedProject.description}</p>
            <ul className="text-left text-gray-800 space-y-2">
              {selectedProject.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="text-gray-800 font-semibold">Challenge</h4>
              <p className="text-gray-600">{selectedProject.challenge}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-gray-800 font-semibold">Solution</h4>
              <p className="text-gray-600">{selectedProject.solution}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-gray-800 font-semibold">Result</h4>
              <p className="text-gray-600">{selectedProject.result}</p>
            </div>

            <p className="text-gray-500 mt-4">
              Technologies Used: {selectedProject.technologiesUsed}
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-6 bg-primary text-white px-4 py-2 cursor-pointer rounded-md hover:bg-primary-dark transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Testimonials />
      <OurMission />
      <Stats />
      <ContactForm />
    </main>
  );
}

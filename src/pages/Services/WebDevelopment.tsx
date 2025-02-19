import ServiceHero from "./ServiceHero";
import ProcessTimeline from "../../components/ProcessTimeline";
// import TechStack from "../../components/TechStack";
// import ProjectShowcase from "../../components/ProjectShowcase"; 
import ContactCTA from "../../components/ContactCTA";
import { Code, Zap, Store, PackagePlus } from "lucide-react";


const features = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Unique, high-performance websites tailored specifically for your brand.'
  },
  {
    icon: Store,
    title: 'WordPress & Shopify Development',
    description: 'Simple, customizable solutions with powerful functionalities.'
  },
  {
    icon: PackagePlus,
    title: 'Website Redesign  ',
    description: 'Modernize your site to enhance user experience and increase conversions.'
  },
  {
    icon: Zap,
    title: 'SEO Optimization',
    description: 'Get noticed with SEO-friendly designs that rank higher and drive organic traffic.'
  },
];

const process = [
  {
    title: 'Discovery',
    description: 'We start by understanding your unique business goals, target audience, and technical requirements, ensuring every aspect is aligned with your vision.'
  },
  {
    title: 'Planning',
    description: 'We create a comprehensive strategy with detailed specifications, timelines, and a clear roadmap to ensure your project’s success from start to finish.'
  },
  {
    title: 'Development',
    description: 'Our team builds your solution using agile methodologies, ensuring rapid development cycles, flexibility, and a high-quality, scalable product.'
  },
  {
    title: 'Testing',
    description: 'Rigorous testing ensures your website performs flawlessly—optimized for speed, security, and user experience, with thorough QA checks.'
  },
  {
    title: 'Launch',
    description: 'We ensure a smooth and seamless deployment, followed by ongoing support to ensure your website remains up-to-date and fully optimized.'
  }
];

export default function WebDevelopment() {
  return (
    <main >
      <div className="bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
      relative h-[94vh] bg-cover bg-center pt-20 ">
        <div className="absolute bg-[#434343] z-10 w-[100%] h-[88%] opacity-80"></div>
      {/* <div className="relative h-[90vh]  pt-20 bg-[url('https://thumbs.wbm.im/pw/medium/34950f1f017647cd3f8484485b040686.avif')] bg-cover bg-center"> */}
      <ServiceHero 
        title="Web Development"
        subtitle="Custom Web Applications Built for Growth"
        description="Unlock the full potential of your online presence with high-performance, responsive websites designed to engage visitors and convert them into loyal customers. Whether you're looking for a simple website or a complex, custom-built solution, we've got you covered."
        />
        </div>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl cursor-pointer bg-white border border-gray-200  hover:border-primary hover:shadow-lg transition duration-300">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline steps={process} />
      {/* <TechStack />  */}
      {/* <ProjectShowcase projects={projects} /> */}
      <ContactCTA />
    </main>
  );
}
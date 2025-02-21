import React from 'react';
import { Layout, Users, Eye, Cloud } from 'lucide-react';
import ServiceHero from './ServiceHero';
import ProcessTimeline from '../../components/ProcessTimeline';
import ContactCTA from '../../components/ContactCTA';

const features = [
  // {
  //   icon: Palette,
  //   title: 'Bespoke Business Software',
  //   description: 'Get customized software designed to streamline your business operations, improve efficiency, and drive productivity with tailored solutions.'
  // },
  {
    icon: Users,
    title: 'CRM Development',
    description: 'Build a customer relationship management system that enhances engagement, improves customer retention, and boosts sales growth.'
  },
  {
    icon: Layout,
    title: 'ERP Systems',
    description: 'Manage resources, finances, and processes efficiently with our bespoke ERP solutions, offering seamless integration across your business operations.'
  },
  {
    icon: Eye,
    title: 'API Integrations',
    description: 'Seamlessly integrate your software with other systems to enhance functionality, streamline workflows, and ensure consistent data flow across platforms.'
  },
  {
    icon: Cloud,
    title: 'Cloud-Based Software',
    description: 'Utilize cloud solutions to improve scalability, security, and accessibility, ensuring your business is always connected and ready for growth.'
  }
];



const process = [
  {
    title: 'Discovery & Analysis',
    description: 'We begin by thoroughly understanding your business goals, challenges, and target audience. Through in-depth research and analysis, we define the software requirements to ensure we deliver a tailored solution that meets your needs.'
  },
  {
    title: 'Solution Design',
    description: 'Our team creates the blueprint of your custom software solution, focusing on system architecture, user interfaces, and core functionalities. We ensure the design is scalable, secure, and optimized for performance.'
  },
  {
    title: 'Development',
    description: 'Using agile development practices, we build your software solution, incorporating feedback along the way. Our developers use the latest technologies to ensure high-quality, efficient code, and seamless integration with existing systems.'
  },
  {
    title: 'Testing & Quality Assurance',
    description: 'We rigorously test the solution across multiple environments, ensuring functionality, security, and usability. Our QA team identifies any potential issues and ensures everything works perfectly before deployment.'
  },
  {
    title: 'Deployment & Support',
    description: 'Once your software is fully tested and refined, we deploy it to the production environment. We offer ongoing support and maintenance to ensure the system remains up-to-date, secure, and performs at its best as your business evolves.'
  }
];


export default function CustomSoftware() {
  return (
    <main className="bg-white">
      <div className="bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            relative h-[94vh] bg-cover bg-center pt-20 ">
              <div className="absolute bg-[#434343] z-10 w-[100%] h-[88%] opacity-80"></div>
            {/* <div className="relative h-[90vh]  pt-20 bg-[url('https://thumbs.wbm.im/pw/medium/34950f1f017647cd3f8484485b040686.avif')] bg-cover bg-center"> */}
            <ServiceHero 
              title="Custom Software Solutions"
              subtitle="Innovative Software Tailored to Your Business Needs"
              description="Optimize your business operations with tailored software solutions that automate processes, integrate systems, and enhance efficiency. From CRM and ERP systems to cloud-based solutions, we offer customized software to meet your needs."
              />
              </div>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition duration-300">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline steps={process} />
      <ContactCTA />
    </main>
  );
}
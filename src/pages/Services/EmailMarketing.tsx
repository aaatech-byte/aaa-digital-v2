import { Video, Zap , Megaphone, Clapperboard } from "lucide-react";
import ServiceHero from "./ServiceHero";
import ProcessTimeline from "../../components/ProcessTimeline";
import ContactCTA from "../../components/ContactCTA";

const features = [
  {
    icon: Video,
    title: "Email Campaign Management",
    description:
      "Create targeted email campaigns that resonate with your audience.",
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description:
      "Automate your marketing to save time and increase efficiency.",
  },
  {
    icon: Clapperboard,
    title: "Lead Generation Campaigns",
    description:
      "Build a strong email list and generate high-quality leads.",
  },
  {
    icon: Zap,
    title: "List Segmentation",
    description: "Segment your audience for more personalized and effective campaigns.",
  },
];

const process = [
  {
    title: "Email Strategy",
    description:
      "Developing a tailored email marketing strategy that aligns with your business goals, target audience, and messaging. This includes segmenting your audience, crafting personalized email content, and choosing the right automation tools.",
  },
  {
    title: "Content Creation",
    description:
      "Designing engaging email content that speaks to your audience. From compelling subject lines to persuasive copy and call-to-actions, we ensure your emails are crafted to boost open rates, engagement, and conversions.",
  },
  {
    title: "Automation Setup",
    description:
      "Setting up automated email workflows to nurture leads, onboard new customers, and re-engage dormant subscribers. We configure triggers, timed sequences, and personalized messages to optimize efficiency and impact.",
  },
  {
    title: "Performance Tracking",
    description:
      "Tracking email campaign performance through analytics to measure open rates, click-through rates, conversions, and more. We use these insights to refine strategies, improve engagement, and drive better results over time.",
  },
];


export default function EmailMarketing() {
  return (
    <main className="bg-white">
      <div
        className="bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            relative h-[94vh] bg-cover bg-center pt-20 "
      >
        <div className="absolute bg-[#434343] z-10 w-[100%] h-[88%] opacity-80"></div>
        {/* <div className="relative h-[90vh]  pt-20 bg-[url('https://thumbs.wbm.im/pw/medium/34950f1f017647cd3f8484485b040686.avif')] bg-cover bg-center"> */}
        <ServiceHero
          title="Email Marketing & Automation"
          subtitle="Craft Engaging Videos that Strengthen Your Brand"
          description="Convert leads into loyal customers with personalized, automated email campaigns that engage and nurture your audience."
        />
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition duration-300"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
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

import {
  // Code,
  // Smartphone,
  // Megaphone,
  // Gauge,
  // Users,
  // Clapperboard,
  // ShoppingBag,
  Rss,
  ArrowRight,
} from "lucide-react";

export default function App() {
  const heroData = {
    title: "Empowering Businesses,",
    subtitle: "Transforming Futures",
    missionStatement:
      "Our mission is to empower businesses with innovative, results-driven digital solutions that drive growth, enhance user experiences, and deliver measurable success. We strive to be more than just a service provider—we’re your long-term partner in navigating the digital world with confidence, creativity, and cutting-edge technology.",
    features: [
      {
        icon: Rss,
        title: "Build Success Stories",
        description:
          "Crafting custom websites, apps, and marketing strategies that meet and exceed business goals.",
      },
      {
        icon: ArrowRight,
        title: "Inspire Innovation",
        description:
          "Leveraging the latest tools and frameworks to stay ahead of the competition.",
      },
      {
        icon: ArrowRight,
        title: "Foster Growth",
        description:
          "Delivering scalable solutions that adapt to your business needs.",
      },
      {
        icon: ArrowRight,
        title: "Simplify the Complex",
        description:
          "Providing clear communication, transparent processes, and ongoing support for a seamless journey.",
      },
    ],
  };

  return (
    <main className="bg-white">
      <section className="relative mb-36 md:mb-28 lg:mb-24 z-0 h-[88vh] bg-white bg-[url('https://t3.ftcdn.net/jpg/09/33/83/82/360_F_933838289_TS8PCfgl9RFC1Z6dRwkpxpsG9gSgObnB.jpg')] bg-cover bg-center">
        <div className="absolute z-0 bg-gray-800 w-[100%] h-[100%] opacity-70"></div>
        <div className="mx-auto max-w-7xl">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
            <div className="relative text-center z-30">
              <h1 className="text-2xl  md:text-4xl font-bold text-emerald-600">
                {heroData.title}
                <span className="text-gray-200"> {heroData.subtitle}</span>
              </h1>
              <p className="text-base md:text-lg  text-gray-300 my-5 pb-5 max-w-3xl mx-auto">
                {heroData.missionStatement}
              </p>
            </div>

            <div className="absolute -bottom-72 sm:-bottom-28 xl:-bottom-44">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4 lg:pr-0 pr-6">
                {heroData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 scale-100 hover:scale-105 duration-300 p-2 md:p-3 lg:p-5 rounded-lg shadow-md hover:shadow-xl"
                  >
                    {/* <feature.icon className="h-12 w-12 text-primary mb-4" /> */}
                    <h3 className="text-[17px] lg:text-base 2xl:text-lg font-bold text-gray-700 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-[13px]  sm:text-sm xl:text-base font-semibold">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { Link } from "react-router-dom";

import { Button } from "../../components/ui/Button";
import { ArrowRight } from "lucide-react";

const AboutHero = () => {
  return (
    <>
      <section className="relative h-[93vh]  bg-[url('https://thumbs.wbm.im/pw/medium/34950f1f017647cd3f8484485b040686.avif')] bg-cover bg-center">
      <div className="absolute z-10 w-[100%] h-[100%] bg-gradient-primary opacity-80"></div>
<<<<<<< HEAD
        <div className="relative z-30  px-4 py-20 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 md:pt-60">
            <h1 className="my-3 md:my-4 text-3xl sm:text-4xl md:text-5xl font-semibold font-orbitron  tracking-wide leading-6 text-white">
            Your Trusted Partner in <br /> 
              <span className="text-yellow text-2xl sm:text-3xl md:text-5xl">Digital Transformation</span>
            </h1>
            <p className="text-base sm:text-lg text-white mt-11 md:mt-12 mb-4 md:mb-7 mx-auto max-w-5xl">
=======
        <div className="relative z-30 px-4 py-20 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 md:pt-48">
            <h1 className="mt-4 mb-6 text-3xl font-bold text-[#FFFFFF] md:text-5xl font-orbitron">
              Your Trusted Partner in <br />
              <span className="text-3xl text- md:text-6xl text-yellow">
                Digital Transformation
              </span>
            </h1>
            <p className="max-w-5xl mx-auto mt-10 mb-8 text-base text-[#FFFFFF] sm:text-lg font-clashDisplay">
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
              At AAA Digital, we specialize in solving your most pressing
              digital challenges with innovative IT solutions. Whether you need
              a user-friendly website, a mobile app that engages users, or a
              data-driven marketing strategy, we’re here to provide the right
              solutions that help your business grow, thrive, and succeed in
              today’s competitive landscape.
            </p>
            <div className="flex flex-col justify-center gap-4 font-clashDisplay sm:flex-row">
              <Link to="/contact">
<<<<<<< HEAD
                <Button variant="primary" className="group px-4 py-3 font-bold">Get In Touch
                <ArrowRight className="ml-3 h-7 w-7 bg-yellow text-black rounded-full p-1 group-hover:translate-x-1 transition-transform" />
=======
                <Button variant="primary" className="px-4 py-2 rounded-full font-clashDisplay">Get In Touch
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
                </Button>
              </Link>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div>
      </section>
    </>
  );
};

export default AboutHero;
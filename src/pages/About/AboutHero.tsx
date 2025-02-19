import { Link } from "react-router-dom";

import { Button } from "../../components/ui/Button";

const AboutHero = () => {
  return (
    <>
      <section className="relative h-[93vh]  bg-[url('https://thumbs.wbm.im/pw/medium/34950f1f017647cd3f8484485b040686.avif')] bg-cover bg-center">
      <div className="absolute bg-gray-100 z-10 w-[100%] h-[100%] opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:pt-48 text-center z-30">
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in <br />
              <span className="text-primary text-3xl md:text-6xl">
                Digital Transformation
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 mt-10 max-w-5xl mx-auto">
              At AAA Digital, we specialize in solving your most pressing
              digital challenges with innovative IT solutions. Whether you need
              a user-friendly website, a mobile app that engages users, or a
              data-driven marketing strategy, we’re here to provide the right
              solutions that help your business grow, thrive, and succeed in
              today’s competitive landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="primary">Get In Touch</Button>
              </Link>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </>
  );
};

export default AboutHero;

import {
  ArrowRight,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <main className="bg-white">
      <section className="relative h-[95vh] bg-white bg-[url('https://img.freepik.com/premium-photo/office-white-desk-laptop-accessories-top-view-free-space-your-text-flat-lay_187166-36073.jpg')] bg-cover bg-center">
        <div className="absolute z-10 bg-gradient-primary w-[100%] h-[100%] opacity-80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-52 z-20">
          <div className="text-center pt-24 sm:pt-0">
            <span className="text-yellow text-2xl my-5 font-semibold  tracking-wide uppercase">
              Your Partner in Digital Growth
            </span>
            <h1 className="my-5 text-2xl md:text-4xl font-orbitron font-bold text-white">
              Let’s Build
              <span className=" text-yellow">
                {" "}
                Something Extraordinary Together{" "}
              </span>
            </h1>
            <p className="text-base sm:textlg text-gray-300 my-5 pb-5 max-w-2xl mx-auto">
              We create stunning websites, build next-gen mobile apps, and
              deliver custom software solutions to transform your business. With
              data-driven digital marketing strategies, we help you connect,
              engage, and grow in the digital age.
            </p>
            {/* <div className="flex flex-col sm:flex-row justify-center gap-4"> */}
            <Link to="/contact">
              <Button variant="primary" size="lg" className="group px-4 py-3 font-bold">
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-80 bg-gradient-to-t from-primary to-transparent"></div>
      </section>
    </main>
  );
}

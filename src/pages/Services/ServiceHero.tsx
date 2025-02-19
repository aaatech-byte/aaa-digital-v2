import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
}: ServiceHeroProps) {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    // <div className="relative bg-gradient-to-br from-gray-50 to-green-50 pt-20">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-20 relative">
      <div className="text-center">
        <span className="text-primary text-xl font-semibold tracking-wide uppercase">
          {title}
        </span>
        <h1 className="py-2 text-xl md:text-3xl font-bold text-gray-200 ">
          {subtitle}
        </h1>
        <p className="text-gray-300 mb-2 text-base py-2 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
          <Button
            onClick={() => handleNavigation("/contact")}
            variant="outline"
            size="md"
          >
            Get Started
          </Button>
          <Button variant="outline" size="md">
            View Portfolio
          </Button>
        </div>
      </div>
    </div>
    // <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"></div>
    // </div>
  );
}

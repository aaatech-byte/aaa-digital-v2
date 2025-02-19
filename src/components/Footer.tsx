import { Facebook, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  const footerData = {
    logoSrc: "src/assets/images/aaatech.png",
    description: "Revolutionizing your business with bold, innovative digital solutions that drive exponential growth, ignite operational efficiency, and unlock limitless potential—empowering you to thrive in an ever-evolving digital world.",
    socialLinks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61566395171281",
        icon: <Facebook size={24} />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/aaa-digital-marketing/posts/?feedView=all",
        icon: <Linkedin size={24} />,
      },
    ],
    services: [
      { name: "Web Development", path: "/services/web-development" },
      { name: "App Developoment", path: "/services/mobile-apps" },
      { name: "Custom Software Development", path: "/services/custom-software" },
      { name: "E-Commerce Solutions", path: "/services/ecommerce" },
      { name: "Digital Marketing", path: "/services/digital-marketing" },
      { name: "Social Media Marketing", path: "/services/social-marketing" },
      { name: "Email Marketing", path: "/services/email-marketing" },
      { name: "Video Marketing & Branding", path: "/services/video-marketing" },
    ],
    companyLinks: [
      { name: "Portfolio", path: "/work" },
      { name: "About", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Contact Us", path: "/contact" },
    ],
    contactInfo: {
      email: "Business@aaa-digitalmarketing.com",
      addressLink: "https://www.google.com/maps/place/Pennsylvania,+USA",
    },
    address: "Headquarter: Pennsylvania, USA",
  };

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  console.log(footerData);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src={footerData.logoSrc}
              alt="Logo"
              className="pt-2 pl-2 h-20 w-auto object-cover"
            />
            <p className="text-gray-200 sm:pr-6 tracking-wider  mt-8 text-sm">
              {footerData.description}
            </p>
            <div className="flex space-x-6 mt-6">
              {footerData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-primary transition-transform transform hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-gray-200">
              Services
            </h4>
            <ul className="space-y-2">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(service.path)}
                    className="text-gray-400 hover:text-primary transition duration-300 transform hover:translate-x-2"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Pages</h4>
            <ul className="space-y-2">
              {footerData.companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-400 hover:text-primary transition duration-300 transform hover:translate-x-2"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-gray-200">
              Contact
            </h4>
            <div className="flex items-center cursor-pointer text-gray-400 transition-transform transform hover:scale-105 hover:text-primary">
              <EmailIcon
                className="mr-2 cursor-pointer hover:text-primary "
                onClick={() =>
                  (window.location.href = `mailto:${footerData.contactInfo.email}`)
                }
              />
              <span className="text-sm">{footerData.contactInfo.email}</span>
            </div>

            <div
              className="flex items-center text-gray-400 mt-4 cursor-pointer hover:text-primary transition-transform transform hover:scale-105 "
              onClick={() =>
                window.open(footerData.contactInfo.addressLink, "_blank")
              }
            >
              <LocationOnIcon className="mr-2" />
              <span className="text-sm">{footerData.address}</span>
            </div>

          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              {footerData.companyLinks[0]?.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



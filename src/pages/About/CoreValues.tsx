import { useState } from "react";
import { FaHandshake, FaLightbulb, FaStar } from "react-icons/fa";

const CoreValues = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const values = [
    {
      icon: <FaHandshake className="text-4xl text-emerald-500" />,
      title: "Integrity",
      description:
        "We are committed to transparency, honesty, and always acting in your best interest.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-emerald-500" />,
      title: "Innovation",
      description:
        "We embrace the latest trends and technologies to ensure your business is always at the forefront of digital transformation.",
    },
    {
      icon: <FaStar className="text-4xl text-emerald-500" />,
      title: "Excellence",
      description:
        "Our attention to detail and dedication to high-quality work guarantees the best results for every project.",
    },
  ];

  return (
    <section className="py-7 mb-10 max-w-7xl mx-auto">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Our <span className="text-emerald-500">Core Values</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "filter blur-sm"
                  : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-50 p-4 rounded-full">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-500">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

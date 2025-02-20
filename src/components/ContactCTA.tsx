

import { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    interestedIn: "",
    name: "",
    phoneNumber: "",
    email: "",
    designation: "",
    budget: "",
    heardAboutUs: "",
  });

  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.companyName || !formData.name || !formData.phoneNumber || !formData.email) {
      setModalMessage("Please fill all required fields!");
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5012/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalMessage("Message sent successfully!");
        setIsSuccess(true);
      } else {
        setModalMessage("Failed to send message. Please try again!");
        setIsSuccess(false);
      }
    } catch (error) {
      setModalMessage("Network error. Please check your connection.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="bg-[#301275] flex items-center justify-center min-h-screen  p-4">
      {/* Modal */}
      {modalMessage && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75">
          <div className={`p-6 rounded-lg shadow-lg text-center w-full max-w-md ${isSuccess ? "bg-green-500" : "bg-red-500"}`}>
            <h2 className="mb-4 text-xl font-bold text-white">{modalMessage}</h2>
            <button onClick={() => setModalMessage(null)} className="px-6 py-2 text-black bg-white rounded-md hover:bg-gray-200">
              OK
            </button>

    <section className=" py-7 flex items-center justify-center">
      <div className="min-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-primary">Ready to Boost </span>Your Business
          </h2>

          {/* <p className="mt-4 text-xl text-gray-600"> */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-5">
            Contact us for tailored IT solutions to enhance your digital
            presence, optimize performance, or craft a winning strategy. 
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contact
              </label>
              <input
                type="text"
                name="contact"
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>

          </div>
        </div>
      )}

      {/* Contact Form */}
      <div className="p-8 rounded-2xl shadow-lg w-full bg-[#23096E] max-w-2xl ">
        <h1 className="text-3xl text-[#F4D000] italic font-bold mb-4 text-center font-orbitron">Let's Boost Your Business</h1>
        <p className="mb-6 text-center text-white">Contact us for IT solutions to enhance your digital presence, optimize performance, and craft a winning strategy.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input name="companyName" type="text" placeholder="Company Name *" className="bg-[#FFFFFF] w-full p-3 border rounded-md" onChange={handleChange} />
          <input name="interestedIn" type="text" placeholder="Interested In" className="bg-[#FFFFFF] w-full p-3 border rounded-md" onChange={handleChange} />
          <input name="name" type="text" placeholder="Your Name *" className="w-full p-3 bg-[#FFFFFF] border rounded-md" onChange={handleChange} />

          {/* Mobile Responsive Flexbox */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <input name="phoneNumber" type="text" placeholder="Contact No *" className="w-full bg-[#FFFFFF] sm:w-1/2 p-3 border rounded-md" onChange={handleChange} />
            <input name="email" type="email" placeholder="Email *" className="w-full sm:w-1/2 bg-[#FFFFFF] p-3 border rounded-md" onChange={handleChange} />
          </div>

          <input name="designation" type="text" placeholder="Designation" className="w-full bg-[#FFFFFF] p-3 border rounded-md" onChange={handleChange} />

          {/* Responsive Flexbox for Budget & Heard About Us */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <input name="budget" type="text" placeholder="Budget" className="w-full bg-[#FFFFFF] sm:w-1/2 p-3 border rounded-md" onChange={handleChange} />
            <input name="heardAboutUs" type="text" placeholder="How did you hear about us?" className="w-full bg-[#FFFFFF] sm:w-1/2 p-3 border rounded-md" onChange={handleChange} />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="w-full px-6 py-2 font-semibold text-yellow-400 transition bg-purple-800 sm:w-auto rounded-2xl hover:bg-yellow-600">
              Let's Connect
            </button>
          </div>
        </form>

        {/* WhatsApp Floating Button */}
        {/* <a href="https://wa.me/+923054282100" className="fixed bottom-5 right-5 w-14 h-14 animate-bounce" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-full h-full" />
        </a> */}
      </div>
    </div>
  );
};

export default ContactForm;


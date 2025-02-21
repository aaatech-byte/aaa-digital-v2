<<<<<<< HEAD
import { useState } from "react";
import { Button } from "../../components/ui/Button";

=======


import { useState } from "react";

>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
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
<<<<<<< HEAD
    <div className="flex items-center justify-center min-h-screen p-4 pt-20 bg-gradient-primary">
=======
    <div className="flex items-center justify-center min-h-screen p-4 pt-32 bg-gradient-primary">


>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
      {/* Modal */}
      {modalMessage && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75">
          <div className={`p-6 rounded-lg shadow-lg text-center w-full max-w-md ${isSuccess ? "bg-green-500" : "bg-red-500"}`}>
            <h2 className="mb-4 text-xl font-bold text-white">{modalMessage}</h2>
            <button onClick={() => setModalMessage(null)} className="px-6 py-2 text-black bg-white rounded-md hover:bg-gray-200">
              OK
            </button>
          </div>
        </div>
      )}

      {/* Contact Form */}
<<<<<<< HEAD
      <div className="w-full max-w-2xl p-8 shadow-lg rounded-2xl bg-primary">
        <h1 className="text-3xl text-[#F4D000] font-bold mb-4 text-center font-orbitron">Let's Boost Your Business</h1>
        <p className="mb-6 text-center text-white">Contact us for IT solutions to enhance your digital presence, optimize performance, and craft a winning strategy.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input name="companyName" type="text" placeholder="Company Name *" className="bg-[#FFFFFF] w-full p-3 border rounded-md" onChange={handleChange} value={formData.companyName} />
          <input name="interestedIn" value={formData.interestedIn} type="text" placeholder="Website" className="bg-[#FFFFFF] w-full p-3 border rounded-md" onChange={handleChange} />

          {/* Mobile Responsive Flexbox */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <input name="name" type="text" placeholder="Your Name *" className="w-full bg-[#FFFFFF] sm:w-1/2 p-3 border rounded-md" onChange={handleChange} value={formData.name} />
            <input name="phoneNumber" type="number" placeholder="Contact *" className="w-full sm:w-1/2 bg-[#FFFFFF] p-3 border rounded-md" onChange={handleChange} value={formData.phoneNumber} />
          </div>
          <input name="email" type="email" placeholder="Email *" className="w-full p-3 bg-[#FFFFFF] border rounded-md" onChange={handleChange} value={formData.email} />

          <input name="designation" type="text" placeholder="Project Details" className="w-full bg-[#FFFFFF] p-3 border rounded-md" onChange={handleChange} value={formData.designation} />

          {/* Responsive Flexbox for Budget & Heard About Us */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <input name="budget" type="text" placeholder="Budget" className="w-full bg-[#FFFFFF] sm:w-1/2 p-3 border rounded-md" onChange={handleChange} value={formData.budget} />
            <input name="heardAboutUs" type="text" placeholder="How did you hear about us?" className="w-full bg-[#FFFFFF] sm:w-1/2 p-3 border rounded-md" onChange={handleChange} value={formData.heardAboutUs} />
          </div>

          <div className="flex justify-center">
            <Button variant="primary" className="px-4 py-2 rounded-full bg-primary font-clashDisplay">
              Let's Talk
            </Button>
=======
      
      <div className="p-8 rounded-2xl shadow-lg w-full bg-[#23096E] max-w-2xl ">
        <h1 className="mb-4 text-3xl font-bold text-center text-yellow font-orbitron">Let's Boost Your Business</h1>
        <p className="mb-6 text-center text-white">Contact us for IT solutions to enhance your digital presence, optimize performance, and craft a winning strategy.</p>

        <form className="space-y-4 bg-primary" onSubmit={handleSubmit}>
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
            <button type="submit" className="w-full px-4 py-2 font-semibold transition font-orbitron bg-primary hover:text-primary text-yellow sm:w-auto rounded-2xl hover:bg-yellow">
              Let's Connect
            </button>
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
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

<<<<<<< HEAD
export default ContactForm;
=======
export default ContactForm;

>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c

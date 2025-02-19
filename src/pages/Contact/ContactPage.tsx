import React, { useState } from "react";
import { Button } from "../../components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    projectDescription: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "9b25c86e-31b7-4534-9c65-76ae753385ee",
        ...formData,
      }),
    });
    console.log(response)

    const result = await response.json();
    if (result.success) {
      alert("Thank you for your submission!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        projectDescription: "",
        budget: "",
      });
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-green-50 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-22">
          <div className="text-center">
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
            We’d love to hear from you! Fill out the form below with your details and message, and our team will get back to you promptly.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      <section className="bg-white py-2 flex items-center justify-center">
        <div className="min-w-6xl px-4 sm:px-6 lg:px-8 w-full">
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
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Project Description
              </label>
              <textarea
                name="projectDescription"
                id="projectDescription"
                rows={4}
                value={formData.projectDescription}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700"
              >
                Budget
              </label>
              <select
                name="budget"
                id="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              >
                <option value="">Select your budget</option>
                <option value="<$5,000">Less than $5,000</option>
                <option value="$5,000-$10,000">$5,000 - $10,000</option>
                <option value="$10,000-$20,000">$10,000 - $20,000</option>
                <option value=">$20,000">More than $20,000</option>
              </select>
            </div>
            <div className="text-center">
              <Button type="submit" variant="primary" size="md">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>

  );
}

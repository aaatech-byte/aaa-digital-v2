import React, { useState } from "react";
import { Button } from "../../components/ui/Button";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
    upload: "",
    currentSalary: "",
    expectedSalary: "",
    lastQualification: "",
    jobPosition: "",
    graduationYear: "",
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

    // Additional basic validation if needed
    if (Number(formData.age) <= 0) {
      alert("Please enter a valid age.");
      return;
    }
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

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
    console.log(response);

    const result = await response.json();
    if (result.success) {
      alert("Thank you for your submission!");
      setFormData({
        name: "",
        age: "",
        email: "",
        contact: "",
        upload: "",
        currentSalary: "",
        expectedSalary: "",
        lastQualification: "",
        jobPosition: "",
        graduationYear: "",
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
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-primary mb-6">
              Careers
            </h1>
            <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
              Could you specify the career you're interested in, or are you
              looking for general career guidance? I'd love to help!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 flex items-center justify-center">
        <div className="min-w-6xl px-4 sm:px-6 lg:px-8 w-full">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="name py-4">
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
                <div className="name py-4">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="18"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <div className="py-4">
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
                <div className="py-4">
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Number
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
                <div className="py-4">
                  <label
                    htmlFor="currentSalary"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Current Salary
                  </label>
                  <input
                    type="number"
                    name="currentSalary"
                    id="currentSalary"
                    value={formData.currentSalary}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="py-4">
                  <label
                    htmlFor="expectedSalary"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expected Salary
                  </label>
                  <input
                    type="number"
                    name="expectedSalary"
                    id="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <div className="py-4">
                  <label
                    htmlFor="lastQualification"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Qualification
                  </label>
                  <input
                    type="text"
                    name="lastQualification"
                    id="lastQualification"
                    value={formData.lastQualification}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="py-4">
                  <label
                    htmlFor="jobOptions"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Position
                  </label>
                  <input
                    type="text"
                    name="jobPosition"
                    id="jobPosition"
                    value={formData.jobPosition}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <div className="">
                  <label
                    htmlFor="graduationYear"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Graduation Year
                  </label>
                  <input
                    type="date"
                    name="graduationYear"
                    id="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div className="">
                <div className="">
                  <label
                    htmlFor="upload"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload your Resume
                  </label>
                  <input
                    type="file"
                    name="upload"
                    id="upload"
                    value={formData.upload}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
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

// enhance thier design and data pass dynamically

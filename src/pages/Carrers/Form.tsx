'use client';

import { useState } from 'react';

const JobApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    about: '',
    cv: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-purple-900 to-indigo-900 sm:p-8 md:p-12">
      <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg sm:p-8 md:p-10">
        <h2 className="mb-6 text-2xl font-bold text-center text-yellow-400">Job Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fullName" placeholder="Full Name*" className="w-full bg-[#FFFFFF] p-2 rounded" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email*" className="w-full p-2 rounded bg-[#FFFFFF]" required onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone*" className="w-full p-2 rounded bg-[#FFFFFF] " required onChange={handleChange} />
          <select name="position" className="w-full p-2 text-white bg-gray-700 rounded" required onChange={handleChange}>
            <option value="">Position Applying For*</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
          <input type="number" name="experience" placeholder="Years of Experience*" className="w-full p-2 rounded bg-[#FFFFFF] " required onChange={handleChange} />
          <textarea name="about" placeholder="About Yourself" className="w-full p-2 rounded bg-[#FFFFFF]" onChange={handleChange}></textarea>
          <label className="text-yellow-400">Upload CV*</label>
          <input type="file" name="cv" className="w-full p-2 bg-[#FFFFFF]" required onChange={handleFileChange} />
          <button type="submit" className="w-full p-2 text-black transition bg-yellow-500 rounded hover:bg-yellow-600">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;

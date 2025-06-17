import React, { useState } from "react";
import { useForm } from "@formspree/react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, handleSubmit] = useForm("xpwrrbnj");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="max-w-[1500px] mx-auto pt-[100px] sm:pt-[200px] md:pt-[400px] pb-[100px] sm:pb-[250px] md:pb-[450px] flex flex-col md:flex-row items-center px-4 sm:px-6"
    >
      {/* Form */}
      <div className="flex-1 w-full max-w-[700px] mb-12 md:mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFA500] mb-12 sm:mb-24 md:mb-36">
          Contact
        </h2>
        <form className="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mb-8 sm:mb-12 px-4 py-2 bg-transparent border-b border-l border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#FFA500] transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-6 sm:mb-8 px-4 py-2 bg-transparent border-b border-l border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#FFA500] transition-colors"
          />
          <textarea
            name="message"
            placeholder="Message*"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full mt-4 sm:mt-6 px-4 py-2 bg-transparent border-b border-l border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#FFA500] transition-colors resize-none"
          />
          <button
            type="submit"
            className="bg-[#FFA500] text-white font-bold px-6 sm:px-8 py-2 rounded-full mt-12 sm:mt-16 md:mt-24 hover:bg-[#ffb733] transition-colors float-right"
          >
            SEND
          </button>
          {state.succeeded && (
            <div className="text-[#FFA500] mt-2">
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
      {/* Image placeholder */}
      <div className="flex-1 flex-col justify-center mb-12 mt-8 md:mb-20 md:ml-[100px]">
        <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[500px] sm:h-[700px] md:h-[900px] bg-gray-300 rounded-md flex items-center justify-center">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
          </svg>
        </div>
        <p className="text-xs text-white/70 mt-2">Photo: Ines Kjelbye</p>
      </div>
    </section>
  );
};

export default Contact;

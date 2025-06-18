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
      className="w-full max-w-[1500px] md:ml-[875px] mx-auto pt-[100px] sm:pt-[200px] md:pt-[300px] pb-[100px] sm:pb-[250px] md:pb-[450px] flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-12 gap-12"
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
      {/* Image  */}
      <div className="flex-1 flex-col justify-center mb-12 mt-8 md:mb-20 md:ml-[100px]">
        <div className="w-[300px] sm:w-[400px] md:w-[600px] h-[500px] sm:h-[700px] md:h-[900px] bg-gray-300 rounded-md flex items-center justify-center">
          <img
            src="/images/NimaSafai_OnSet.jpg"
            alt="Nima Safai on filming location"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[10px] text-white/70 mt-2">Photo: Emil Agrell</p>
      </div>
    </section>
  );
};

export default Contact;

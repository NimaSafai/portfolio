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
    <section className="w-full mt-20 mb-32" id="contact">
      <div className="flex flex-col lg:flex-row lg:gap-2 xxl:gap-12 w-full max-w-6xl xxl:max-w-7xl mx-auto items-center">
        {/* Form */}
        <div className="w-full px-16 pb-8">
          <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFA500] mb-8 md:my-16">
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
              className="bg-[#FFA500] text-white font-bold px-6 sm:px-8 py-2 rounded-full mt-12 hover:bg-[#ffb733] transition-colors float-right"
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
        <div className="mt-8 lg:mt-20 w-full lg:pr-16 flex flex-col items-center lg:items-end">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md flex items-center justify-center">
            <img
              src="/images/NimaSafai_OnSet.jpg"
              alt="Nima Safai on filming location"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md text-[8px] text-white/40 mt-2 text-right">
            Photo: Emil Agrell
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

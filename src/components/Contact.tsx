import React, { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-12 mt-16 flex flex-col md:flex-row items-center gap-12"
    >
      {/* Left: Image placeholder */}
      <div className="flex-1 flex-col justify-center mb-20">
        <div className="w-[400px] h-[600px] bg-gray-300 rounded-md flex items-center justify-center">
          <svg
            className="w-24 h-24 text-gray-400"
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
      {/* Right: Form */}
      <div className="flex-1 w-full max-w-xl mb-20">
        <h2 className="text-6xl font-bold text-[#FFA500] mb-20">Contact</h2>
        <form className="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mb-12 px-4 py-2 bg-transparent border-b border-l border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#FFA500] transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-8 px-4 py-2 bg-transparent border-b border-l border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#FFA500] transition-colors"
          />
          <textarea
            name="message"
            placeholder="Message*"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full mt-6 px-4 py-2 bg-transparent border-b border-l border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#FFA500] transition-colors resize-none"
          />
          <button
            type="submit"
            className="bg-[#FFA500] text-white font-bold px-8 py-2 rounded-full mt-12 hover:bg-[#ffb733] transition-colors float-right"
          >
            SEND
          </button>
          {submitted && (
            <div className="text-[#FFA500] mt-2">Message sent!</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

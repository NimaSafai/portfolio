import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="mt-16 mb-28 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6"
      id="hero"
    >
      {/* Left: Name and subtitle */}
      <div className="flex-1 text-center ml-[-100px]">
        <h1 className="text-[275px] font-extrabold clash-display text-[#FFA500] tracking-wider ml-8">
          NIMA
        </h1>
        <h1 className="text-[275px] font-extrabold clash-display text-[#FFA500] mt-[-170px] mb-[-50px] tracking-tighter">
          SAFAI
        </h1>
        <div className="text-3xl font-medium text-white tracking-widest">
          WRITER | DIRECTOR | EDITOR
        </div>
      </div>
      {/* Right: Profile image placeholder */}
      <div className="flex-1 flex-col justify-center md:justify-end mt-10 ml-20 md:mt-0">
        <div className="w-[400px] h-[600px] bg-gray-300 rounded-md flex items-center justify-center mt-40">
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
        <p className="text-xs mt-2 text-white/70">Photo: Ines Kjelbye</p>
      </div>
    </section>
  );
};

export default Hero;

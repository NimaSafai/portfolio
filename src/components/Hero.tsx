import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center w-full gap-10 my-20"
      id="hero"
    >
      {/* Name and subtitle */}
      <div className="flex-1 w-full text-center mt-3">
        <h1 className="text-[100px] sm:text-[200px] md:text-[220px] ml-3 sm:ml-5 font-extrabold clash-display text-[#FFA500] tracking-wider">
          NIMA
        </h1>
        <h1 className="text-[100px] sm:text-[200px] md:text-[220px] mt-[-50px] sm:mt-[-100px] md:mt-[-120px] font-extrabold clash-display text-[#FFA500] tracking-tighter">
          SAFAI
        </h1>
        <div className="text-xl sm:text-3xl md:text-4xl font-medium text-white tracking-widest">
          WRITER | DIRECTOR | EDITOR
        </div>
      </div>
      {/* Profile image */}
      <div className="flex-1 flex-col justify-end">
        <div className="w-[300px] sm:w-[550px] md:w-[600px] h-[420px] sm:h-[750px] md:h-[1000px] bg-gray-300 rounded-md flex items-center justify-center">
          <img
            src="/images/NimaSafai_Headshot.JPG"
            alt="Nima Safai headshot"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[8px] text-white/40 mt-2">Photo: Ines Kjelbye</p>
      </div>
    </section>
  );
};

export default Hero;

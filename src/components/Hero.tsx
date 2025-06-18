import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="pt-[80px] sm:pt-[150px] md:pt-[200px] pb-[120px] sm:pb-[150px] md:pb-[250px] max-w-2xl md:ml-[450px] flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-6"
      id="hero"
    >
      {/* Name and subtitle */}
      <div className="flex-1 text-center md:ml-[250px] lg:ml-[250px]">
        <h1 className="text-[100px] sm:text-[200px] md:text-[350px] font-extrabold clash-display text-[#FFA500] tracking-wider md:ml-8">
          NIMA
        </h1>
        <h1 className="text-[100px] sm:text-[200px] md:text-[350px] font-extrabold clash-display text-[#FFA500] mt-[-50px] sm:mt-[-100px] md:mt-[-170px] mb-[-20px] sm:mb-[-30px] md:mb-[-50px] tracking-tighter">
          SAFAI
        </h1>
        <div className="text-xl sm:text-3xl md:text-4xl pt-6 font-medium text-white tracking-widest">
          WRITER | DIRECTOR | EDITOR
        </div>
      </div>
      {/* Profile image */}
      <div className="flex-1 flex-col justify-end mt-0 md:ml-20">
        <div className="w-[300px] sm:w-[400px] md:w-[600px] h-[420px] sm:h-[700px] md:h-[1000px] bg-gray-300 rounded-md flex items-center justify-center mt-0 md:mt-40">
          <img
            src="/images/NimaSafai_Headshot.JPG"
            alt="Nima Safai headshot"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[10px] mt-2 text-white/70">Photo: Ines Kjelbye</p>
      </div>
    </section>
  );
};

export default Hero;

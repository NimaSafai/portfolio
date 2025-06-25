import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full my-44" id="hero">
      <div className="flex flex-col lg:flex-row lg:gap-16 w-full max-w-6xl mx-auto items-center">
        {/* Name and subtitle */}
        <div className="w-full text-center items-center lg:items-start lg:pl-16 max-w-3xl lg:text-left">
          <h1 className="text-center text-[100px] sm:text-[150px] md:text-[175px] xxl:text-[200px] xxxl:text-[225px] ml-3 sm:ml-5 font-extrabold clash-display text-[#FFA500] tracking-wider">
            NIMA
          </h1>
          <h1 className="text-center text-[100px] sm:text-[150px] md:text-[175px] xxl:text-[200px] xxxl:text-[225px] mt-[-65px] sm:mt-[-100px] xxl:mt-[-140px] font-extrabold clash-display text-[#FFA500] tracking-tighter">
            SAFAI
          </h1>
          <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-center font-medium text-white tracking-widest">
            WRITER | DIRECTOR | EDITOR
          </div>
        </div>

        {/* Profile image */}
        <div className="w-full mt-8 lg:items-end lg:pr-16 max-w-md flex flex-col items-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md aspect-[3/4] flex items-center justify-center">
            <img
              src="/images/NimaSafai_Headshot.JPG"
              alt="Nima Safai headshot"
              className="w-full h-auto object-cover"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <p className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md text-[8px] text-white/40 mt-2 text-right">
            Photo: Ines Kjelbye
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

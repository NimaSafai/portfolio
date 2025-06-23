import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="flex flex-col lg:flex-row items-center w-full gap-10 lg:gap-0 my-20 lg:mt-44 lg:mb-24 xl:mt-48 xl:mb-28 xxl:mt-52 xxl:mb-36 xxxl:mt-64 xxxl:mb-52"
      id="hero"
    >
      {/* Name and subtitle */}
      <div className="flex-1 w-full text-center items-center lg:ml-14 xl:ml-20 xxl:ml-24 xxxl:ml-28">
        <h1 className="text-[100px] sm:text-[150px] md:text-[175px] lg:text-[150px] xl:text-[175px] xxl:text-[200px] xxxl:text-[250px] ml-3 sm:ml-5 font-extrabold clash-display text-[#FFA500] tracking-wider">
          NIMA
        </h1>
        <h1 className="text-[100px] sm:text-[150px] md:text-[175px] lg:text-[150px] xl:text-[175px] xxl:text-[200px] xxxl:text-[250px] mt-[-65px] sm:mt-[-100px] xxl:mt-[-140px] font-extrabold clash-display text-[#FFA500] tracking-tighter">
          SAFAI
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-widest">
          WRITER | DIRECTOR | EDITOR
        </div>
      </div>

      {/* Profile image */}
      <div className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md xxl:max-w-lg xxxl:max-w-xl aspect-[3/4] flex items-center justify-center">
          <img
            src="/images/NimaSafai_Headshot.JPG"
            alt="Nima Safai headshot"
            className="w-full h-full object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <p className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm text-[8px] text-white/40 mt-2 text-right">
          Photo: Ines Kjelbye
        </p>
      </div>
    </section>
  );
};

export default Hero;

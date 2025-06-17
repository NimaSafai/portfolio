import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-[1200px] sm:max-w-[560px] md:mx-[800px] pt-[75px] sm:pt-[150px] md:pt-[200px] pb-[50px] sm:pb-[200px] md:pb-[330px] flex flex-col md:flex-row items-center gap-8 md:gap-36 mb-20 px-4 sm:px-6"
    >
      {/* Left: Text */}
      <div className="flex-1 text-white mt-8 md:mt-24">
        <h2 className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-[#FFA500] mb-8 md:mb-8">
          About
        </h2>
        <div className="w-full md:w-[610px] text-lg sm:text-xl md:text-2xl">
          <p className="font-extralight mb-4">
            Nima Safai is an award-winning director and writer from Gothenburg,
            Sweden. After nearly a decade in London, where he built a diverse
            background in the arts, he has returned to his hometown to work in
            the Swedish film industry.
          </p>
          <p className="font-extralight mb-4">
            Starting out in the music industry – as both a musician and working
            at record labels – Nima naturally transitioned into filmmaking
            through the art of music videos. His deep-rooted passion for
            storytelling and writing, spanning fiction, poetry, and everything
            in between, naturally evolved into a seamless blend of writing and
            directing.
          </p>
          <p className="font-extralight mb-4">
            Driven by concept and collaboration, Nima takes a hands-on approach,
            crafting video work tailored to each project's unique needs. His
            multicultural background, self-taught skillset, and collaborations
            with both emerging and established Swedish talent inform a directing
            style that ranges from immersive world-building to raw, humanistic
            DIY aesthetics.
          </p>
          <p className="font-extralight mb-4">
            Whether crafting tight narratives or embracing a more intuitive,
            freeform process, Nima's work stands out for its naturalistic tone,
            eye for detail, and grounded execution of simple yet compelling
            ideas.
          </p>
        </div>
      </div>
      {/* Right: Image placeholder */}
      <div className="flex-1 flex flex-col justify-center mt-2 md:mt-[120px]">
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
        <p className="text-[10px] text-white/70 mt-2">Photo: Emil Agrell</p>
      </div>
    </section>
  );
};

export default About;

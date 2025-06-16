import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-20 mb-20"
    >
      {/* Left: Text */}
      <div className="flex-1 text-white text-lg mt-24 ml-7">
        <h2 className="text-6xl font-bold text-[#FFA500] mb-8">About</h2>
        <div className="w-[610px]">
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
            crafting video work tailored to each project’s unique needs. His
            multicultural background, self-taught skillset, and collaborations
            with both emerging and established Swedish talent inform a directing
            style that ranges from immersive world-building to raw, humanistic
            DIY aesthetics.
          </p>
          <p className="font-extralight mb-4">
            Whether crafting tight narratives or embracing a more intuitive,
            freeform process, Nima’s work stands out for its naturalistic tone,
            eye for detail, and grounded execution of simple yet compelling
            ideas.
          </p>
        </div>
      </div>
      {/* Right: Image placeholder */}
      <div className="flex-1 flex flex-col justify-center mt-[120px]">
        <div className="w-[400px] h-[650px] bg-gray-300 rounded-md flex items-center justify-center">
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
        <p className="text-xs text-white/70 mt-2">Photo: Emil Agrell</p>
      </div>
    </section>
  );
};

export default About;

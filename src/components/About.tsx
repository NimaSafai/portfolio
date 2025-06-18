import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="flex flex-col items-center mx-10 mt-16">
      {/* Text */}
      <div className="flex-1 text-white mt-8 md:mt-24">
        <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-[#FFA500] mb-8 md:mb-8">
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
      {/* Image  */}
      <div className="flex-1 flex flex-col justify-center mt-12 mb-20 md:mt-[120px]">
        <div className="w-[350px] sm:w-[400px] md:w-[600px] h-[500px] sm:h-[700px] md:h-[900px] bg-gray-300 rounded-md flex items-center justify-center">
          <img
            src="/images/NimaSafai_Frame.jpg"
            alt="Nima Safai"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[8px] text-white/40 mt-2">
          Photo: Ann-Charlotte Rugfelt Ferm
        </p>
      </div>
    </section>
  );
};

export default About;

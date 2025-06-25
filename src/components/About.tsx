import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="w-full lg:mb-20 xxl:mb-32 my-20">
      <div className="flex flex-col lg:flex-row lg:gap-12 w-full max-w-6xl xxl:max-w-7xl mx-auto items-center">
        {/* Text */}
        <div className="text-white mt-8 md:mt-12 px-10 lg:pl-16 w-full lg:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-[#FFA500] mb-8">
            About
          </h2>
          <div className="w-full text-base sm:text-lg xl:text-xl xxl:text-2xl">
            <p className="font-extralight mb-4">
              Nima Safai is an award-winning director and writer from
              Gothenburg, Sweden. After nearly a decade in London, where he
              built a diverse background in the arts, he has returned to his
              hometown to work in the Swedish film industry.
            </p>
            <p className="font-extralight mb-4">
              Starting out in the music industry – as both a musician and
              working at record labels – Nima naturally transitioned into
              filmmaking through the art of music videos. His deep-rooted
              passion for storytelling and writing, spanning fiction, poetry,
              and everything in between, naturally evolved into a seamless blend
              of writing and directing.
            </p>
            <p className="font-extralight mb-4">
              Driven by concept and collaboration, Nima takes a hands-on
              approach, crafting video work tailored to each project's unique
              needs. His multicultural background, self-taught skillset, and
              collaborations with both emerging and established Swedish talent
              inform a directing style that ranges from immersive world-building
              to raw, humanistic DIY aesthetics.
            </p>
            <p className="font-extralight mb-4">
              Whether crafting tight narratives or embracing a more intuitive,
              freeform process, Nima's work stands out for its naturalistic
              tone, eye for detail, and grounded execution of simple yet
              compelling ideas.
            </p>
          </div>
        </div>
        {/* Image  */}
        <div className="mt-16 lg:mt-52 mb-20 w-full lg:pr-16 max-w-md flex flex-col items-center lg:items-end">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md flex items-center justify-center">
            <img
              src="/images/NimaSafai_Frame.jpg"
              alt="Nima Safai holding award at Frame Filmfestival"
              className="w-full h-full object-cover"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <p className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md text-[8px] text-white/40 mt-2 text-right">
            Photo: Ann-Charlotte Rugfelt Ferm
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

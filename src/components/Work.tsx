import React from "react";

const Work: React.FC = () => {
  return (
    <section
      id="work"
      className="max-w-full mx-auto px-4 sm:px-6 py-12 flex flex-col items-center justify-center min-h-screen"
    >
      {/* <h2 className="text-6xl mt-20 mb-16 font-bold text-[#FFA500] text-center">
        Work
      </h2> */}
      <div className="flex flex-col items-center justify-center w-full">
        {/* Vimeo Video */}
        <div className="flex-1 w-full max-w-[2000px] aspect-video mx-auto flex items-center justify-center">
          <iframe
            src="https://player.vimeo.com/video/950872992?h=a728ca6211"
            title="Vimeo video player"
            className="w-full h-[300px] sm:h-[500px] md:h-[800px] lg:h-[1200px] rounded-lg shadow-lg border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Info */}
        <div className="flex-1 w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center mt-8 sm:mt-12">
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-2 text-[#FFA500]">
            GHORME SABZI
          </h3>
          <h2 className="text-xl sm:text-2xl font-regular my-2">
            DRAMA | 2024 | 15 MIN
          </h2>
          <a
            href="/GhormeSabzi_Script.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5496ED] text-lg sm:text-xl underline my-2 inline-block"
          >
            SCRIPT
          </a>
          <p className="text-white text-sm sm:text-lg md:text-xl mt-2 w-full max-w-[800px] px-4">
            As is tradition, brothers Arian and Navid meet up one late night to
            cook a special meal together, but this time their meeting is going
            to revolve around something completely different, as Navid asks his
            brother a favour that will change his life forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;

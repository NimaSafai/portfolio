import React from "react";

const Work: React.FC = () => {
  return (
    <section
      className="flex flex-col max-w-4xl lg:max-w-4xl xl:max-w-5xl xxl:max-w-6xl xxxl:max-w-7xl mx-auto px-8 sm:px-10 md:px-12 my-28 lg:my-26 xl:my-40 xxl:my-32 xxxl:my-44 items-center justify-center"
      id="work"
    >
      <div className="w-full">
        {/* Vimeo Video */}
        <div className="flex-1 aspect-video">
          <iframe
            src="https://player.vimeo.com/video/950872992"
            title="Vimeo video player"
            className="w-full h-full rounded-lg shadow-lg border-0"
            allowFullScreen
          ></iframe>
        </div>
        {/* Info */}
        <div className="flex-1 flex flex-col items-center justify-center text-center mt-12">
          <h3 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-[#FFA500] mb-2">
            GHORME SABZI
          </h3>
          <h2 className="text-base sm:text-lg md:text-xl font-regular my-2">
            DRAMA | 2024 | 15 MIN
          </h2>
          <a
            href="/GhormeSabzi_Script.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5496ED] text-base sm:text-lg underline inline-block"
          >
            SCRIPT
          </a>
          <p className="max-w-[1100px] lg:mx-10 text-white text-[13px] sm:text-base xl:text-lg mt-4">
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

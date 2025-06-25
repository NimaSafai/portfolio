import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -50;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1A1A1A] z-50 border-b border-white/40">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 xl:px-18 py-3">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-white text-4xl sm:text-4xl md:text-6xl mt-2 md:mt-4 mb-[-8px] md:ml-4 libre-barcode-128-regular tracking-wide select-none cursor-pointer focus:outline-none"
          aria-label="Scroll to top"
        >
          NIMASAFAI
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 md:mr-4">
          <button
            onClick={() => handleNavClick("work")}
            className="text-white hover:text-[#FFA500] font-light transition-colors duration-200 text-md tracking-widest bg-transparent border-none cursor-pointer p-0 m-0"
            style={{ background: "none" }}
          >
            WORK
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="text-white hover:text-[#FFA500] font-light transition-colors duration-200 text-md tracking-widest bg-transparent border-none cursor-pointer p-0 m-0"
            style={{ background: "none" }}
          >
            ABOUT
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="text-white hover:text-[#FFA500] font-light transition-colors duration-200 text-md tracking-widest bg-transparent border-none cursor-pointer p-0 m-0"
            style={{ background: "none" }}
          >
            CONTACT
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div
          className={`
            absolute top-full left-0 w-full bg-[#1A1A1A] border-b border-white/40 flex-col items-center py-4 space-y-4
            transition-all duration-300 ease-in-out
            ${
              isMenuOpen
                ? "flex opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
        >
          <button
            onClick={() => {
              handleNavClick("work");
              setIsMenuOpen(false);
            }}
            className="text-white hover:text-[#FFA500] font-light transition-colors duration-200 text-sm tracking-widest bg-transparent border-none cursor-pointer p-0 m-0"
            style={{ background: "none" }}
          >
            WORK
          </button>
          <button
            onClick={() => {
              handleNavClick("about");
              setIsMenuOpen(false);
            }}
            className="text-white hover:text-[#FFA500] font-light transition-colors duration-200 text-sm tracking-widest bg-transparent border-none cursor-pointer p-0 m-0"
            style={{ background: "none" }}
          >
            ABOUT
          </button>
          <button
            onClick={() => {
              handleNavClick("contact");
              setIsMenuOpen(false);
            }}
            className="text-white hover:text-[#FFA500] font-light transition-colors duration-200 text-sm tracking-widest bg-transparent border-none cursor-pointer p-0 m-0"
            style={{ background: "none" }}
          >
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1A1A1A] z-50 border-b border-white/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 mb-[-8px] libre-barcode-128-regular tracking-widest select-none cursor-pointer focus:outline-none"
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
        <div className="hidden md:flex space-x-8">
          <a
            href="#work"
            className="text-white hover:text-[#FFA500] font-light transition-colors duration-200 text-sm tracking-widest"
          >
            WORK
          </a>
          <a
            href="#about"
            className="text-white hover:text-[#FFA500] font-light transition-colors duration-200 text-sm tracking-widest"
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="text-white hover:text-[#FFA500] font-light transition-colors duration-200 text-sm tracking-widest"
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Nav Links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden absolute top-full left-0 w-full bg-[#1A1A1A] border-b border-white/40 flex-col items-center py-4 space-y-4`}
        >
          <a
            href="#work"
            className="text-white hover:text-[#FFA500] font-light transition-colors duration-200 text-sm tracking-widest"
            onClick={() => setIsMenuOpen(false)}
          >
            WORK
          </a>
          <a
            href="#about"
            className="text-white hover:text-[#FFA500] font-light transition-colors duration-200 text-sm tracking-widest"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="text-white hover:text-[#FFA500] font-light transition-colors duration-200 text-sm tracking-widest"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

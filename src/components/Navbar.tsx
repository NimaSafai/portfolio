import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1A1A1A] z-50 border-b border-white/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-white text-6xl mt-3 mb-[-8px] libre-barcode-128-regular tracking-widest select-none cursor-pointer focus:outline-none"
          aria-label="Scroll to top"
        >
          NIMASAFAI
        </a>
        {/* Nav Links */}
        <div className="space-x-8">
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
      </div>
    </nav>
  );
};

export default Navbar;

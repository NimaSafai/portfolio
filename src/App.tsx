import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#1A1A1A] text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <div className="border-t border-white/40 my-8 w-4/5 mx-auto" />
      <Work />
      <div className="border-t border-white/40 my-8 w-4/5 mx-auto" />
      <About />
      <div className="border-t border-white/40 my-8 w-4/5 mx-auto" />
      <Contact />
    </div>
  );
}

export default App;

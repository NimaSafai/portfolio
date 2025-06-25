import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-[2000px]">
          <Hero />
          <div className="border-t border-white/0 w-4/5 mx-auto" />
          <Work />
          <div className="border-t border-white/0 w-4/5 mx-auto" />
          <About />
          <div className="border-t border-white/0 w-4/5 mx-auto" />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;

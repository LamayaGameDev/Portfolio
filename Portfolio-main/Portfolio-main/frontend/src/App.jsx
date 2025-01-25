import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeTech from "./components/MarqueeTech"; // Import Marquee Component
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      {/* Marquee Tech Stack Section */}
      <MarqueeTech />

      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

import React, { useRef, useState } from "react";
import Loader from "./components/Loader";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [loading, isLoading] = useState(true);

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  React.useEffect(() => {
    const timer = setTimeout(() => isLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (ref) => {
    const offset = -68;
    const sectionTop = ref.current.offsetTop + offset;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="w-screen min-h-screen bg-stone-950 overflow-x-hidden">
      <nav className="fixed w-full h-16 bg-gray-600 shadow-lg shadow-gray-600 bg-opacity-40 flex justify-between items-center px-6 py-3 grid grid-cols-2 md:grid-cols-3 z-50">
        <h2 className="text-2xl font-bold text-white">
          Vinit Solanki<span className="text-red-500">.</span>
        </h2>
        <div className="hidden md:flex justify-around gap-x-3">
          <p
            className="cursor-pointer text-xl text-white font-bold underline-animation"
            onClick={() => handleScroll(homeRef)}
          >
            Home
          </p>
          <p
            className="cursor-pointer text-xl text-white font-bold underline-animation"
            onClick={() => handleScroll(projectsRef)}
          >
            Projects
          </p>
          <p
            className="cursor-pointer text-xl text-white font-bold underline-animation"
            onClick={() => handleScroll(aboutRef)}
          >
            About
          </p>
          <p
            className="cursor-pointer text-xl text-white font-bold underline-animation"
            onClick={() => handleScroll(contactRef)}
          >
            Contact
          </p>
        </div>
        <div className="flex justify-end">
          <a href="https://drive.google.com/file/d/1zYOPFXfZHCua16EbqxJ4h80tzh93Fe5L/view?usp=sharing">
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300">
            Get my Resume
          </button>
          </a>
        </div>
      </nav>
      <div className="relative h-full pt-16">
        <section
          ref={homeRef}
          className="w-screen min-h-screen flex items-center justify-center"
        >
          <Home />
        </section>
        <section
          ref={projectsRef}
          className="w-screen min-h-screen flex items-center justify-center"
        >
          <Projects />
        </section>
        <section
          ref={aboutRef}
          className="w-screen min-h-screen flex items-center justify-center"
        >
          <About />
        </section>
        <section
          ref={contactRef}
          className="w-screen flex items-center justify-center"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;

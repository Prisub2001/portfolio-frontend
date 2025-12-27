import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Your developer is here😄";
      } else {
        document.title = originalTitle;
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
};

export default App;

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LogoMarquee from "../components/LogoMarquee";
import ServicesHome from "../components/ServicesHome";
import Projects from "../components/Projects";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensuring DOM is ready
    } else {
        window.scrollTo(0, 0);
    }
  }, [hash]);
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="grow">
        <Hero />
        <About />
        <LogoMarquee />
        <ServicesHome />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

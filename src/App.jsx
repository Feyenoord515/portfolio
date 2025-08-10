import React from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Experience from "./components/Experience.jsx";
import Integrations from "./components/Integrations.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Ticker from "./components/Ticker.jsx";

export default function App() {
  return (
    <>
  <Navbar />
  <Ticker />
      <main className="text-gray-400 bg-gray-900 body-font">
  <About />
  <Experience />
  <Integrations />
  <CaseStudies />
  <Skills />
  <Projects />
        <Testimonials />
        <Contact />
      </main>
      <footer className="text-center text-xs text-gray-500 py-6 bg-gray-900">
        © {new Date().getFullYear()} Nahuel Enrique Molinari
      </footer>
    </>
  );
}

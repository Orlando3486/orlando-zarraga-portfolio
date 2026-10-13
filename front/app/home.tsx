"use client";

import InteractiveNetwork from "../components/background/InteractiveNetwork";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Experience from "../components/sections/experience";
import Hero from "../components/sections/hero";
import Navbar from "../components/sections/navbar";
import Projects from "../components/sections/projects";
import Tecnologies from "../components/sections/tecnologies";

export default function Home() {
  return (
    <>
      <InteractiveNetwork />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Tecnologies />
        <Contact />
      </main>
    </>
  );
}

import InteractiveNetwork from "../components/background/InteractiveNetwork";
import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects";
import About from "../components/sections/about";
import Tecnologies from "../components/sections/tecnologies";
import Contact from "../components/sections/contact";
import Navbar from "../components/sections/navbar";

export default function Home() {
  return (
    <>
      <InteractiveNetwork />
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Tecnologies />
        <Contact />
      </main>
    </>
  );
}

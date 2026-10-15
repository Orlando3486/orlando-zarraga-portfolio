import InteractiveNetwork from "./background/InteractiveNetwork";
import About from "./sections/about";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Hero from "./sections/hero";
import IntroScreen from "./sections/introScreen";
import Navbar from "./sections/navbar";
import Projects from "./sections/projects";
import Tecnologies from "./sections/tecnologies";
import { getContent } from "../data";
import { getDictionary } from "../i18n";
import type { Locale } from "../lib/i18n";

export default function Home({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const content = getContent(locale);

  return (
    <>
      <IntroScreen subtitle={dict.intro.subtitle} />
      <InteractiveNetwork />
      <Navbar locale={locale} dict={dict.nav} />

      <main>
        <Hero locale={locale} dict={dict} profile={content.profile} />
        <About dict={dict.about} profile={content.profile} education={content.education} />
        <Experience dict={dict.experience} experience={content.experience} />
        <Projects dict={dict.projects} projects={content.projects} />
        <Tecnologies locale={locale} dict={dict.skills} />
        <Contact locale={locale} dict={dict} profile={content.profile} />
      </main>
    </>
  );
}

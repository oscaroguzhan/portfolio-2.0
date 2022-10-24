import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import WorkExperiences from "../components/WorkExperiences";

export default function Home() {
  return (
    <div className="bg-[#1c1f33] h-screen text-white snap-y snap-mandatory z-0 overflow-scroll">
      <Header />
      <section id="hero" className="snap-start ">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* // Experience section */}
      <section id="experience" className="snap-center">
        <WorkExperiences />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* // Skill section */}
      <section id="projects" className="snap-start">
        <Project />
      </section>
      {/* //Contact section */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}

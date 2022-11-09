import { GetStaticProps } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProject } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";

// type definitions
type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

// Now we can pass these as props into Home.tsx (we can even destructure )
const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[#1c1f33] h-screen text-white snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden">
      <Header socials={socials} />
      <section id="hero" className="snap-start ">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* // Experience section */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* // Skill section */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* //Contact section */}
      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo}/>
      </section>
    </div>
  );
};
export default Home;
// ? IMPLEMENTATION
// be aware of create Props type
// When we use getStaticProps function, Next.js will pre-render this page at build time using props returned by getStaticProps
export const getStaticProps: GetStaticProps<Props> = async () => {
  // we call the utility function we create to fetch data
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocial();
  const projects: Project[] = await fetchProject();

  // return as props
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
      projects,
    },
    //Next.js will attempt to re-generate the page: when a req comes in
    // we can do that by adding revalidate flag
    revalidate: 10,
    // at most once every 10 sec
  };
};

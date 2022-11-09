import React from "react";
import project1 from "../public/project1.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
  max-w-full mx-auto items-center z-0 justify-center
  "
    >
      <h3 className="subtitle">Projects</h3>

      <div className="flex relative w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden z-20 mt-20">
        {projects?.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
        p-20 md:p-44 h-screen
        "
            key={i}
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              src={urlFor(project?.image).url()}
              className="h-120"
            />

            <div className="space-y-5">
              <p className="text-2xl text-center tracking-wide text-slate-400 ">
                {project.summary}
              </p>
              <span className="flex justify-center text-1xl tracking-widest text-blue-300 ">
                {project.link}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute bg-slate-500/20 left-0 h-[600px] top-[30%] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;

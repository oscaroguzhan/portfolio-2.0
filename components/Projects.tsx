import React from "react";
import project1 from "../public/project1.png";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

function Project({}: Props) {
  const projects = [1, 2, 3];
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
      <div className="flex relative w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden z-20">
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen
          "
            key={i}
          >
            <motion.div initial={{opacity:0, y:-300}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:1.2}}
            >
              <Image src={project1} alt="project1" />
            </motion.div>
            <div className="space-y-5">
              <h4 className="text-2xl tracking-widest text-slate-300 text-center">
                Project {i + 1}{" "}
              </h4>
              <p className="text-lg text-center tracking-wide ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt ad illum!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute bg-slate-500/20 left-0 h-[600px] top-[30%] -skew-y-12"></div>
    </motion.div>
  );
}

export default Project;

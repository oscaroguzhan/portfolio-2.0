import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex flex-col text-center 
  md:text-left max-w-[2000px] justify-center items-center mx-auto
  xl:flex-row xl:px-10
  "
    >
      <h3 className="subtitle">Skills</h3>
      <h3 className="tracking-[3px] absolute uppercase text-gray-400 top-60 text-sm">
        Hover over a skill to see proficiency
      </h3>

      <div className="grid grid-cols-4 gap-6">
        <Skill directionLeft/>
        <Skill directionLeft/>
        <Skill directionLeft/>
        <Skill directionLeft/>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;

import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen relative flex flex-col text-center
  md:text-left max-w-[2000px] justify-center items-center mx-auto
  xl:flex-row xl:px-10  xl:space-y-0 
  "
    >
      <h3 className="subtitle -mb-5">Skills</h3>
      <h3 className="tracking-[3px] absolute uppercase text-gray-400 top-60 text-sm ">
        Hover over a skill to see proficiency
      </h3>

      <div className="grid grid-cols-4 gap-6">
        {skills?.map((skill) => (
          <Skill directionLeft key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;

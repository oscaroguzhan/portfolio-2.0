import { motion } from "framer-motion";
import { Experience } from "../typings";
import EducationCard from "./EducationCard";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="subtitle">Experience / Education</h3>
      <div className="flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory ">
        {/* go through and render experience card for each experiences */}

        {experiences?.map((experience,i) => (
          <EducationCard key={i} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
export default WorkExperience;

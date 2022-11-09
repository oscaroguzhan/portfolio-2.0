import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

//? Pass prop to render conditionally
type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative cursor-pointer flex">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        src={urlFor(skill.image).url()}
        alt="typescript logo"
        className="rounded-full object-cover w-24 md:w-28 xl:w-32
        filter group-hover:grayscale duration-300 ease-in-out 
        "
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-500 easy-in-out
      group-hover:bg-white w-24 md:w-28 xl:w-32 rounded-full h-full z-0
      "
      >
        <div className="flex justify-center items-center h-full">
          <p className="font-bold text-3xl text-black opacity-100">
            {skill?.progress}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

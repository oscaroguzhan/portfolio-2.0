import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import Image from "next/image";
import { Experience } from "../typings";
type Props = {
  //singular type
  experience: Experience;
};

function EducationCard({ experience }: Props) {
  return (
    <article
      className=" flex flex-col rounded-lg items-center space-y-8 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-gray-700 
    opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden mt-20"
    >
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(experience?.logo).url()}
        alt="EC utbildning logo"
        className="w-32 h-32 rounded-[20px] object-top 
        md:w-[150px] md:h-[150px]
        xl:w-[200px] xl:h-[200px]
        "
      />
      <div className="px-0 md:px-10 mt-3">
        <h3 className="text-3xl uppercase font-light tracking-wide">
          Frontend Developer
        </h3>
        <div className="flex space-x-2 my-2">
          {/* tech used */}

          {experience.technologies?.map((technology) => (
            <img
              src={urlFor(technology?.image).url()}
              key={technology._id}
              className="w-10 h-10 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase text-gray-400 mt-1 py-5">
          {new Date(experience.dateStarted).toDateString()} -
          {/* conditional rendering  */}
          {experience.isCurrentlyHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-none space-y-4 text-lg ml-5">
          {experience.points.map((point, i) => (
            <li key={i}> ⭐️ {point} </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
export default EducationCard;

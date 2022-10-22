import { motion } from "framer-motion";
import Image from 'next/image'
type Props = {};

export default function EducationCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-gray-700 
    opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="https://media-exp1.licdn.com/dms/image/C4E0BAQENiDFdWI4fvw/company-logo_200_200/0/1519911390700?e=1674086400&v=beta&t=MW7SQfPLq3HUCXlPBWwWg7GbzU1ouK4mCejkF7a9Wg8"
        alt="EC utbildning logo"
        className="w-32 h-32 rounded-[20px] object-top 
        md:w-[150px] md:h-[150px]
        xl:w-[200px] xl:h-[200px]
        "
      />
      <div className="px-0 md:px-10 mt-3">
        <h3 className="text-3xl uppercase font-light tracking-wide">Front End Developer</h3>
        <div className="flex space-x-2 my-2">{/* tech used */}
          <img src="https://logodix.com/logo/1658345.png" alt="ts-logo" className="h-10 rounded-full"/>
          <img src="https://logodix.com/logo/374732.png" alt="ts-logo" className="h-10 rounded-full"/>
          <img src="https://logodix.com/logo/374728.png" alt="ts-logo" className="h-10 "/>
        </div>
        <p className="text-2xl text-gray-400 mt-1 py-3">
          Started at ... Ended at ...
        </p>
        
        <ul className="list-disc space-y-4 text-lg ml-5">
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
        </ul>
      </div>
    </article>
  );
}

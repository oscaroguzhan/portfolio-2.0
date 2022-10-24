import { motion } from "framer-motion";
type Props = {};

function  About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-10xl px-3 justify-evenly items-center mx-auto tracking-widest"
    >
      <h3 className="subtitle">Who am i ? </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        // happen just once
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src="https://scontent.farn1-2.fna.fbcdn.net/v/t1.6435-9/71897782_1389460091228007_8841843597960544256_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VY6MFz34mfkAX_hd013&_nc_ht=scontent.farn1-2.fna&oh=00_AT_9gT-1czBAm-5szHrFAazUe_qOoW2g-mtuFo4F8J7J2A&oe=6379D161"
        alt="profile picture"
        className=" -mb-0 w-60 h-60 rounded-full object-cover flex-shrink-0 md:mb-20 
        md:rounded-lg md:w-[400px] md:h-[400px] 
        xl:w-[500px] xl:h-[600px]
        "
      />

      <div className="md:px-10">
        <p className="text-xl  md:text-[sm] xl:text-[sm] tracking-wider">
          My name is Oscar. Beside spending time with my family i am fascinated
          in web development and have been practicing both frontend and backend
          operations. I am recently studying at EC Education as a frontend
          developer. Building user-friendly, responsive and scalable websites/
          applications is a true passion for me. Aside my education as frontend
          developer i have been working in food industry as a team leader who
          can motivate other people and used to work with different tasks. I am looking for a new challenge 
        </p>
      </div>
    </motion.div>
  );
}

export default About;

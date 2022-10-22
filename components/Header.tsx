import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {

  return (
    <header className="p-10 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-10 xl:items-center">
      <motion.div
        className="flex flex-row items-center gap-5"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* social icons and logo */}
        
        <SocialIcon
          url={`https://linkedin.com/jaketrent`}
          bgColor="blue"
          fgColor="#fff"
        />
        <SocialIcon
          url={`https://github.com/oscaroguzhan`}
          bgColor="black"
          fgColor="white"
        />
        <SocialIcon
          url={`https://facebook.com/jaketrent`}
          bgColor="blue"
          fgColor="#fff"
        />
        <SocialIcon
          url={`https://instagram.com/jaketrent`}
          bgColor="red"
          fgColor="#fff"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        
      >
        {/* contact */}
        <SocialIcon className="cursor-pointer " network="email" />
        <p className="uppercase hidden md:inline-flex text-sm text-white md:px-3">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}

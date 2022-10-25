import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import {HomeIcon} from '@heroicons/react/24/solid'
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
        <Link href="#hero" className="cursor-pointer">
        <div className="sticky">
            <HomeIcon className="h-10 text-gray-400 hover:text-white "/>
          </div>
          </Link>
        {/* social icons and logo */}

        <SocialIcon
          url={`https://www.linkedin.com/in/oscar-wihlborg-erg%C3%BCn/`}
          bgColor="blue"
          fgColor="#fff"
        />
        <SocialIcon
          url={`https://github.com/oscaroguzhan`}
          bgColor="black"
          fgColor="white"
        />
        <SocialIcon
          url={`https://www.facebook.com/oscaroguzhan/`}
          bgColor="blue"
          fgColor="#fff"
        />
        <SocialIcon
          url={`https://www.instagram.com/ergunoguzhan/`}
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
        <Link href="#contact">
          <SocialIcon className="cursor-pointer " network="email" />
        </Link>
        <p className="uppercase hidden md:inline-flex text-sm text-white md:px-3">
          Get in touch
        </p>
        
      </motion.div>
    </header>
  );
}

import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import profileImg from "../public/oscar1.png";
import { motion } from "framer-motion";
type Props = {};
export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, This is Oscar",
      "Developer-LovesTo-Code.tsx",
      "<ButWantsToLearnMore />",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="h-screen flex items-center justify-center flex-col space-y-7">
      {/* Background circle */}
      <div className="relative flex justify-center items-center">
        <div className="absolute border [#333333] rounded-full h-[400px] w-[400px] mt-50 top-[30px] animate-ping opacity-50">
          
        </div>
      </div>
      <Image
        src={profileImg}
        alt="profileImg"
        className="relative rounded-full mx-auto object-cover"
      />
      <h2 className="text-lg uppercase text-gray-400 tracking-[10px]">
        FrontEnd Developer
      </h2>
      <div>
        <h1 className="text-5xl px-10">
          <span className="">{text}</span>
          <Cursor cursorColor="white" />
        </h1>
      </div>
        <div>
          <button className="buttonHero">Skills</button>
          <button className="buttonHero">About</button>
          <button className="buttonHero">Experiences</button>
          <button className="buttonHero">Projects</button>
        </div>
    </div>
  );
}

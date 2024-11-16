import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/ui/Button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Boxes } from "./ui/background-boxes";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <Boxes />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Random ahh text
          </p>

          <TextGenerateEffect
            words="Hey! Welcome to my Portfolio"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl color: text-white-200">
            Hi! I&apos;m Amogh, a Student and Full-Stack developer based in
            Melbourne, Australia.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

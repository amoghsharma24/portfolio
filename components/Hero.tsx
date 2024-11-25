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
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            {/* Title */}
            <TextGenerateEffect
              words={"Hello! Welcome to My Portfolio"}
            ></TextGenerateEffect>

            {/* Subtitle */}
            <h2 className="text-lg md:text-xl lg:text-3xl font-medium tracking-wide text-white max-w-2xl">
              Hi! I&apos;m Amogh, a Student and Full-Stack Developer based in
              Melbourne, Australia.
            </h2>
          </div>

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

import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[75vw]">
          Professional & <span className="text-purple">Confident</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Looking for a skilled full-stack developer with expertise in React,
          TypeScript, Next.js, TailwindCSS, .NET, and Azure?. Let’s connect and
          explore how I can contribute to your team.
        </p>
        <a href="mailto:shakanajamal3@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 flex-col items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Shakana Jamal Moalin
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import ImageSlider from "./ImageSlider";

const RecentProjects = () => {
  return (
    <div className="py-20 w-full" id="projects">
      <h1 className="heading mb-10 text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-28 xl:gap-y-32 px-4 max-w-7xl mx-auto justify-items-center">
        {projects.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center sm:w-[570px] w-[90vw] min-h-[30rem] sm:min-h-[35rem] relative"
          >
            <PinContainer title={item.title}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] sm:w-[570px] h-full z-10"
              >
                <div className="relative flex items-center justify-center w-full overflow-hidden aspect-[16/9] mb-6 rounded-xl">
                  <div className="absolute inset-0 z-0 w-full h-full bg-[#13162D] overflow-hidden">
                    <img
                      src="/bg.png"
                      alt="bgimg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <ImageSlider images={item.img} />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                  {item.title}
                </h1>

                <p
                  className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2 mt-2"
                  style={{ color: "#BEC1DD" }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </a>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

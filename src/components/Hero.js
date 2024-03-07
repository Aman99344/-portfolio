import React from "react";
import profileImg from "../assets/profileImg.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div className="my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center items-center">
        <div className="flex flex-col my-auto mx-auto">
          <p className="md:text-5xl sm:text-4xl text-3xl font-bold text-gray-200 ">
            Hi! I am Aman
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 my-2">
            <TypeAnimation
              sequence={[
                "Frontend Dev",
              //  1000,
              //   "Web designer",
              //   1000,
              //   "Consultant",
              //   1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div className="my-2">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">With a 2+ years experience
            </p>
          </div>

          <div className="text-5xl flex justify-start gap-16 my-5 text-purple-600">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillInstagram />
          </div>

          <div class="relative inline-flex group my-3">
            <div
              className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                  from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100
                  group-hover:-inset-1 group-hover:duration-200"
            ></div>
            <a
              href="/"
              title="Download CV"
              role="button"
              class="w-[180px] h-[40px] relative inline-flex items-center justify-center
              px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="my-auto">
          <img
            className="w-[300px] sm:w-[500px] mx-auto h-auto"
            src={profileImg}
            alt="profile-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;




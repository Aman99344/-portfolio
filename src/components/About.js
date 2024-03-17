import React from "react";
import aboutImg from "../assets/aboutImg.jpeg";

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto mt-10" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutImg}
              alt=""
              className="object-cover rounded-xl w-[400px] h-[300px] filter grayscale 
                                    brightness-50"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-6 w-11/12 mx-auto">
                I am a frontend
                developer with a passion for creating beautiful and functional
                websites. With expertise in HTML, CSS, JavaScript, React, and
                Tailwind CSS, I enjoy turning design concepts into responsive
                and user-friendly interfaces. I am constantly learning and
                staying updated with the latest technologies to enhance my
                skills and bring innovative solutions to projects. My goal is to
                create engaging web experiences that delight users and meet the
                needs of clients.
              </p>
            </div>
          </div>

          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                11
                <span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">Projects</span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                2<span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">years experience</span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                30
                <span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">happy clients</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

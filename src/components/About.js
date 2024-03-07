import React from "react";
import aboutImg from "../assets/about.jpeg";

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              className="object-cover rounded-xl h-[220px] grayscale brightness-50"
              src={aboutImg}
              alt="About-img"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w11/12 mx-auto">
                Lorem ipsum, dolor amet consectetur adipisicing elit.
                Consequatur, reiciendis, nulla eos quidem eveniet necessitatibus
                error earum laborum veritatis nam minus possimus animi? Ab
                debitis omnis officiis vero at dignissimos deserunt.
              </p>
            </div>
          </div>

                 <div className="flex mt-10 items-center gap-7">

                      <div className="bg-[#333333]/40 p-5 rounded-xl">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">11
                        <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">Projects</span></p>
                      </div>

                      <div className="bg-[#333333]/40 p-5 rounded-xl">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">2
                        <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">Year experience</span></p>
                      </div>


                      <div className="bg-[#333333]/40 p-5 rounded-xl">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">10
                        <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">Happy Client</span></p>
                      </div>



                 </div>



        </div>


      </div>
    </div>
  );
};

export default About;

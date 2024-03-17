// import React from 'react'
// import profileImg1 from '../assets/profileImg1.png'
// import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
// import { TypeAnimation } from 'react-type-animation'

// const Hero = () => {
//   return (
//     <div className='h-[82vh]'>
//         <div className='my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row
//                         justify-center items-center' id='home'>

//         <div className='flex flex-col my-auto mx-auto'>
//             <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>Hi! I am Aman</p>
//             <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
//             <TypeAnimation
//               sequence={[
//                 "Frontend Dev",
//                 1000,
//                 // "Webdesigner",
//                 // 1000,
//                 // "Consultant",
//                 // 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//             </h1>
//             <div>
//                 <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>with a 2+ years experience</p>
//             </div>
//             <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600 ">
//                 <AiFillLinkedin/>
//                 <AiFillGithub/>
//                 <AiFillInstagram/>
//             </div>
//             <div class="relative inline-flex my-3">
//                 <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
//                  from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100
//                  group-hover:-inset-1 group-hover:duration-200">
//                 </div>
//                 <a href="../assets/Aman Gupta Resume.pdf" title="Download CV" role="button"
//                     class="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg
//                         font-bold text-white transition-all duration-200 bg-primary-color rounded-xl
//                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Download CV
//                 </a>
//             </div>
//         </div>

//         <div className='my-auto'>
//           <img className='w-[300px] sm:w-[500px] mx-auto h-auto' src={profileImg1} alt="profile pic" />
//         </div>

//         </div>
//     </div>
//   )
// }

// export default Hero


import React from "react";
import profileImg1 from "../assets/profileImg1.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { saveAs } from "file-saver";
import pdf from "../assets/AmanGuptaResume.pdf";

const Hero = () => {
  const handleDownload = () => {
    saveAs(pdf, "Aman Gupta Resume.pdf");
  };

  return (
    <div className="h-[82vh]">
      <div
        className="my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center items-center"
        id="home"
      >
        <div className="flex flex-col my-auto mx-auto text-center sm:text-left">
          <p className="md:text-5xl sm:text-4xl text-2xl font-bold text-gray-200">
            Hi! I am Aman
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 tracking-wider">
            <TypeAnimation
              sequence={["Frontend Dev", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">
              with 2+ years of experience
            </p>
          </div>
          <div className="text-5xl flex justify-center sm:justify-start gap-16 my-7 text-purple-600">
            <a href="https://www.linkedin.com/in/aman99344/" target="_blank" rel="noopener noreferrer" className="social-icon-link"><AiFillLinkedin /></a>
            <a href="https://github.com/Aman99344" target="_blank" rel="noopener noreferrer" className="social-icon-link"><AiFillGithub /></a>
            <a href="https://www.instagram.com/amangupta7782/" target="_blank" rel="noopener noreferrer" className="social-icon-link"><AiFillInstagram /></a>
          </div>
          <div className="relative inline-flex my-3">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
            <a
              onClick={handleDownload}
              href={pdf}
              download="Aman Gupta Resume.pdf"
              className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="my-auto">
          <img
            className="w-[300px] sm:w-[500px] mx-auto h-auto"
            src={profileImg1}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;







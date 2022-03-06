import React from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Element } from "react-scroll";
import Dyanamic from "../assets/type_effect/Dyanamic";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailSharp,
} from "react-icons/io5";
import { bubble } from "react-burger-menu";

const Section = () => {
  return (
    <Element name="main" className="element h-screen">
      <div className="relative top-52 left-0 z-10 pl-10">
        <Dyanamic />
        <h3 className="md:w-[550px] pt-10 text-gray-300">
          I'm a <span className="text-white font-medium">React.JS</span>{" "}
          Front-End Developer from India who is passionate about making sure
          that performance of the Web App is{" "}
          <span className="text-white font-medium">Optimized</span>,{" "}
          <span className="text-white font-medium">Smooth</span> and{" "}
          <span className="text-white font-medium">Attractive</span>.
        </h3>
        <div className="flex space-x-5 py-5">
          <div className="p-2 hover:bg-[#242424] cursor-pointer border rounded-full">
            <IoLogoGithub size={30} />
          </div>
          <div className="p-2 hover:bg-blue-600 cursor-pointer border rounded-full">
            <IoLogoLinkedin size={30} />
          </div>
          <div className="p-2 hover:bg-red-600 cursor-pointer border rounded-full">
            <IoMailSharp size={30} />
          </div>
          <div className="p-2 hover:bg-blue-500 cursor-pointer border rounded-full">
            <IoLogoTwitter size={30} />
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-md flex space-x-2 items-center">
          <FaDownload />
          <p>Download Resume</p>
        </button>
      </div>
    </Element>
  );
};

export default Section;

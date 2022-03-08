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
          <div className="p-2 cursor-pointer rounded-full btn_social">
            <IoLogoGithub size={30} />
          </div>
          <div className="p-2 cursor-pointer rounded-full btn_social">
            <IoLogoLinkedin size={30} />
          </div>
          <div className="p-2 cursor-pointer rounded-full btn_social">
            <IoMailSharp size={30} />
          </div>
          <div className="p-2 cursor-pointer rounded-full btn_social">
            <IoLogoTwitter size={30} />
          </div>
        </div>
        {/* <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-md flex space-x-2 items-center"> */}
        {/* <FaDownload /> */}
        <button className="btn_download font-bold px-6 py-3 rounded-full">
          Download Resume
        </button>
      </div>
    </Element>
  );
};

export default Section;

import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaBookReader,
  FaHome,
  FaLaptopCode,
  FaMailBulk,
  FaProjectDiagram,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between sticky top-0 bg-[#404040] text-[#FFFFFF] bg-blend-darken w-full z-[999] group shadow-white sachin">
      <div className="w-2 h-full bg-orange-500 absolute flex justify-center items-center z-[1]" />
      <div className="w-2 h-full bg-orange-500 absolute flex justify-center items-center z-[1] right-0" />
      <h3 className="py-4 pl-5 z-10 font-saira font-medium text-2xl">
        SACHIN SHELKE
      </h3>
      <div className="hidden sm:flex items-center sm:space-x-5 px-5 z-10">
        <Link
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1500}
          delay={500}
          className="cursor-pointer font-medium select-none"
        >
          <div className="w-full flex justify-center items-center">
            <FaHome />
          </div>
          Home
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1500}
          delay={500}
          className="cursor-pointer font-medium select-none"
        >
          <div className="w-full flex justify-center items-center">
            <FaLaptopCode />
          </div>
          Skill
        </Link>
        {/* <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1500}
          delay={500}
          className="cursor-pointer font-medium select-none"
        >
          <div className="w-full flex justify-center items-center">
            <FaBookReader />
          </div>
          Education
        </Link> */}
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1500}
          delay={500}
          className="cursor-pointer font-medium select-none"
        >
          <div className="w-full flex justify-center items-center">
            <FaProjectDiagram />
          </div>
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1500}
          delay={500}
          className="cursor-pointer font-medium select-none"
        >
          <div className="w-full flex justify-center items-center">
            <FaMailBulk />
          </div>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;

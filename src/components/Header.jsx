import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="flex justify-between sticky top-0 bg-[#1D1D1D] text-[#FFFFFF] w-full z-[999]">
      <h3 className="py-4 pl-5">LOGO</h3>
      <div className="flex sm:space-x-5 py-4 pr-5">
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
          Skill
        </Link>
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1500}
          delay={500}
          className="cursor-pointer font-medium select-none"
        >
          Education
        </Link>
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
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;

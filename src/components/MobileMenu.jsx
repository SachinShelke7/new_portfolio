import { Link } from "react-scroll";
import {
  FaHome,
  FaLaptopCode,
  FaMailBulk,
  FaProjectDiagram,
} from "react-icons/fa";

function Sidebar({ toggle, setToggle }) {
  return (
    <div className="flex justify-center items-center flex-col absolute right-0 top-[64px] left-0 w-full overflow-hidden">
      <div
        className={`text-white relative z-[1] ease-in-out duration-500 p-10 w-full mx-auto bg-[#505050] ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full flex md:hidden flex-col justify-center items-center space-y-5 z-10">
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1500}
            delay={500}
            className="cursor-pointer font-medium select-none active:scale-95"
            onClick={() => setToggle(!toggle)}
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
            className="cursor-pointer font-medium select-none active:scale-95"
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
            className="cursor-pointer font-medium select-none active:scale-95"
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
            className="cursor-pointer font-medium select-none active:scale-95"
          >
            <div className="w-full flex justify-center items-center">
              <FaMailBulk />
            </div>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import { Link } from "react-scroll";
import {
  FaHome,
  FaLaptopCode,
  FaMailBulk,
  FaProjectDiagram,
} from "react-icons/fa";
import menu from "../../assets/images/menu.png";
import close from "../../assets/images/close.png";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = ({ toggle, setToggle }) => {
  const [active, setActive] = useState("Home");
  const [popup, setPopup] = useState(false);
  const [pin, setPin] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["pin"]);
  const navigate = useNavigate();
  const handleLogin = () => {
    setPopup(!popup);
  };

  const handleSubmit = () => {
    if (pin === "2306") {
      navigate("/login");
      setPopup(false);
      setCookie("pin", "2306");
    } else {
      setPopup(false);
    }
  };

  const handlePin = (e) => {
    setPin(e.target.value);
  };

  return (
    <div className="flex justify-between items-center sticky top-0 bg-[#404040] text-[#FFFFFF] bg-blend-darken w-full z-[999] shadow-white sachin">
      {popup ? (
        <>
          <div className="max-w-[200px] bg-white text-black absolute z-10 rounded-md left-60">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={pin}
                placeholder="Enter Pin"
                onChange={handlePin}
                className="h-10 outline-none"
              />
              <button
                type="submit"
                className="bg-green-500 text-white w-full rounded-b-md"
              >
                Submit
              </button>
            </form>
          </div>
        </>
      ) : null}
      <div className="w-2 h-full bg-orange-500 absolute flex justify-center items-center z-[100]" />
      <div className="w-2 h-full bg-orange-500 absolute flex justify-center items-center z-[100] right-0" />
      <h3
        className="py-4 pl-5 z-10 font-saira font-medium text-2xl"
        onDoubleClick={handleLogin}
      >
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
          className={`cursor-pointer font-medium select-none active:scale-95 ${
            active === "Home"
              ? "text-white border-b-2 border-orange-500"
              : "text-gray-400"
          }`}
          onClick={() => setActive("Home")}
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
          className={`cursor-pointer font-medium select-none active:scale-95 ${
            active === "Skill"
              ? "text-white border-b-2 border-orange-500"
              : "text-gray-400"
          }`}
          onClick={() => setActive("Skill")}
        >
          <div className="w-full flex justify-center items-center">
            <FaLaptopCode />
          </div>
          Skill
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1500}
          delay={500}
          className={`cursor-pointer font-medium select-none active:scale-95 ${
            active === "Projects"
              ? "text-white border-b-2 border-orange-500"
              : "text-gray-400"
          }`}
          onClick={() => setActive("Projects")}
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
          className={`cursor-pointer font-medium select-none active:scale-95 ${
            active === "Contact"
              ? "text-white border-b-2 border-orange-500"
              : "text-gray-400"
          }`}
          onClick={() => setActive("Contact")}
        >
          <div className="w-full flex justify-center items-center">
            <FaMailBulk />
          </div>
          Contact
        </Link>
      </div>
      <div className="block sm:hidden pr-5">
        {toggle ? (
          <p
            onClick={() => setToggle(!toggle)}
            className="flex text-white items-center cursor-pointer"
          >
            <img src={close} alt="close" className="w-5 h-5" />
          </p>
        ) : (
          <p
            onClick={() => setToggle(!toggle)}
            className="flex text-white items-center cursor-pointer"
          >
            <img src={menu} alt="menu" className="w-6 h-6" />
          </p>
        )}
      </div>
      <MobileMenu toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default Header;

import React from "react";
import { Element } from "react-scroll";
import Dyanamic from "../assets/type_effect/Dyanamic";

const Section = () => {
  return (
    <Element
      name="main"
      className="element h-screen text-white relative top-52 left-10 z-10"
    >
      <Dyanamic />
      <h3 className="w-[550px] pt-10">
        I'm a <span className="text-blue-500">React.JS</span> Front-End
        Developer from India who is passionate about making sure that
        performance of the Web App is{" "}
        <span className="text-red-500">Optimized</span>,{" "}
        <span className="text-red-500">Smooth</span> and{" "}
        <span className="text-red-500">Attractive</span>.
      </h3>
      <p className="my-5">SOCIAL LINKS</p>
      <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md">
        Download Resume
      </button>
    </Element>
  );
};

export default Section;

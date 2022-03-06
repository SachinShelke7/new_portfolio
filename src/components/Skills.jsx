import React from "react";
import { Element } from "react-scroll";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiVisualstudiocode,
  SiChakraui,
  SiBootstrap,
  SiAntdesign,
} from "react-icons/si";

const Card = () => {
  return (
    <div className="relative flex justify-center w-full cursor-pointer">
      <div className="group">
        <div className="w-[300px] h-[400px] p-[20px] bg-[#1D1D1D] border rounded-md overflow-hidden group-hover:bg-white transform transition-all duration-[2000ms]">
          <h1 className="text-base font-medium text-center text-orange-500">
            REACT-JS
          </h1>

          <div>
            <div className="flex w-full justify-center transform transition-all duration-1000 group-hover:py-2">
              <div className="z-10 h-10 opacity-0 group-hover:opacity-100 w-[100px] group-hover:h-[100px] transition-all duration-1000 object-cover group rounded-full">
                <SiReact size={100} color="#2D2D2D" />
              </div>
            </div>
            <p className="overflow-hidden group-hover:text-black transform transition-all duration-[2000ms]">
              React is a Frontend JavaScript UI library. Facebook and
              open-source developer community run it. React is widely used in
              web development. The library first appeared in May 2013 and is now
              one of the most commonly used frontend libraries for web
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Card1 = () => {
  return (
    <div className="relative flex justify-center w-full cursor-pointer">
      <div className="group">
        <div className="w-[300px] h-[400px] p-[20px] bg-[#1D1D1D] border rounded-md overflow-hidden group-hover:bg-white transform transition-all duration-[2000ms]">
          <h1 className="text-base font-medium text-center text-orange-500">
            NEXT-JS
          </h1>

          <div>
            <div className="flex w-full justify-center transform transition-all duration-1000 group-hover:py-2">
              <div className="z-10 h-10 opacity-0 group-hover:opacity-100 w-[100px] group-hover:h-[100px] transition-all duration-1000 object-cover group rounded-full">
                <SiNextdotjs size={100} color="#2D2D2D" />
              </div>
            </div>
            <p className="overflow-hidden group-hover:text-black transform transition-all duration-[2000ms]">
              Next.js is an open-source development framework built on top of
              Node.js enabling React based web applications functionalities such
              as server-side rendering and generating static websites.Next.js
              was first released as an open-source project on GitHub on October
              25, 2016.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Card2 = () => {
  return (
    <div className="relative flex justify-center w-full cursor-pointer">
      <div className="group">
        <div className="w-[300px] h-[400px] p-[20px] bg-[#1D1D1D] border rounded-md overflow-hidden group-hover:bg-white transform transition-all duration-[2000ms]">
          <h1 className="text-base font-medium text-center text-orange-500">
            TAILWIND CSS
          </h1>

          <div>
            <div className="flex w-full justify-center transform transition-all duration-1000 group-hover:py-2">
              <div className="z-10 h-10 opacity-0 group-hover:opacity-100 w-[100px] group-hover:h-[100px] transition-all duration-1000 object-cover group rounded-full">
                <SiTailwindcss size={100} color="#2D2D2D" />
              </div>
            </div>
            <p className="overflow-hidden group-hover:text-black transform transition-all duration-[2000ms]">
              Tailwind CSS is basically a utility-first CSS framework for
              rapidly building custom user interfaces. It is a highly
              customizable, low-level CSS framework that gives you all of the
              building blocks you need to build bespoke designs without any
              annoying opinionated styles you have to fight to override.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = () => {
  return (
    <Element name="skill" className="element">
      <h1 className="text-2xl font-medium text-center pt-5">SKILLS</h1>
      <div className="flex flex-col md:flex-row space-y-20 md:space-y-0 md:space-x-20 p-20">
        <Card />
        <Card1 />
        <Card2 />
      </div>
      <div className="flex justify-between w-full flex-wrap md:px-[100px] gap-5">
        <div className="p-5 flex justify-center items-center border rounded-[10px] hover:bg-white transform transition-all duration-[1500ms]">
          <SiHtml5 size={100} color="#2D2D2D" />
        </div>
        <div className="p-5 flex justify-center items-center border rounded-[10px] hover:bg-white transform transition-all duration-[1500ms]">
          <SiCss3 size={100} color="#2D2D2D" />
        </div>
        <div className="p-5 flex justify-center items-center border rounded-[10px] hover:bg-white transform transition-all duration-[1500ms]">
          <SiJavascript size={100} color="#2D2D2D" />
        </div>
        <div className="p-5 flex justify-center items-center border rounded-[10px] hover:bg-white transform transition-all duration-[1500ms]">
          <SiFirebase size={100} color="#2D2D2D" />
        </div>
        <div className="p-5 flex justify-center items-center border rounded-[10px] hover:bg-white transform transition-all duration-[1500ms]">
          <SiVisualstudiocode size={100} color="#2D2D2D" />
        </div>
        <div className="p-5 flex justify-center items-center border rounded-[10px] hover:bg-white transform transition-all duration-[1500ms]">
          <SiChakraui size={100} color="#2D2D2D" />
        </div>
        <div className="p-5 flex justify-center items-center border rounded-[10px] hover:bg-white transform transition-all duration-[1500ms]">
          <SiBootstrap size={100} color="#2D2D2D" />
        </div>
        <div className="p-5 flex justify-center items-center border rounded-[10px] hover:bg-white transform transition-all duration-[1500ms]">
          <SiAntdesign size={100} color="#2D2D2D" />
        </div>
      </div>
    </Element>
  );
};

export default Section;

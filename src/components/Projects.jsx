import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { SiElectron } from "react-icons/si";
import { Element } from "react-scroll";
import "../animation.css";
import dreamhome from "../assets/images/dreamhome.png";

const Projects = () => {
  return (
    <Element
      name="projects"
      className="element flex flex-col gap-5 py-10 overflow-hidden"
    >
      {/* /////////////////// */}

      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <h1 className="text-center py-10 text-4xl font-medium">PROJECTS</h1>
      </ScrollAnimation>
      {/* //////////// */}
      <div className="grid md:grid-cols-3 gap-20 mx-5 md:mx-[100px]">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p>Project Name</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, vitae, doloribus hic molestiae ullam.
            </p>
            <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
              Live Preview
            </button>
            <button className="btn_download px-4 py-2 rounded-md">
              Source Code
            </button>
          </div>
        </ScrollAnimation>{" "}
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p>Project Name</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, vitae, doloribus hic molestiae ullam.
            </p>
            <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
              Live Preview
            </button>
            <button className="btn_download px-4 py-2 rounded-md">
              Source Code
            </button>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p>Project Name</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, vitae, doloribus hic molestiae ullam.
            </p>
            <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
              Live Preview
            </button>
            <button className="btn_download px-4 py-2 rounded-md">
              Source Code
            </button>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p>Project Name</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, vitae, doloribus hic molestiae ullam.
            </p>
            <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
              Live Preview
            </button>
            <button className="btn_download px-4 py-2 rounded-md">
              Source Code
            </button>
          </div>
        </ScrollAnimation>{" "}
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p>Project Name</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, vitae, doloribus hic molestiae ullam.
            </p>
            <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
              Live Preview
            </button>
            <button className="btn_download px-4 py-2 rounded-md">
              Source Code
            </button>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p>Project Name</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, vitae, doloribus hic molestiae ullam.
            </p>
            <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
              Live Preview
            </button>
            <button className="btn_download px-4 py-2 rounded-md">
              Source Code
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </Element>
  );
};

export default Projects;

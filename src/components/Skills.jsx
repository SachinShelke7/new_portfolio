import React from "react";
import { Element } from "react-scroll";
import profile from "../assets/images/SACHIN.jpg";

const Card = () => {
  return (
    <div className="relative flex justify-center w-full">
      <div>
        <div className="relative top-0 bg-[#FFF] w-[300px] h-[400px] blur-[12px] rounded-[20px]"></div>
        <div className="absolute top-0 w-[300px] h-[400px] shadow-white bg-[#121212] border-white rounded-[20px]"></div>
        <div className="absolute top-0 w-[300px] p-[20px]">
          <h1 className="text-base font-medium text-center text-red-600">
            React FrontEnd Developer
          </h1>

          <div className="h-[290px] overflow-hidden">
            <div>
              <img
                src={profile}
                alt=""
                className="z-10 h-10 opacity-0 hover:opacity-100 w-full hover:h-[150px] transition-all duration-1000 object-cover group"
              />
            </div>
            <p className="overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              consequatur obcaecati eveniet nostrum quibusdam repellendus eaque
              minus illum! Animi temporibus quos eos, minus velit ut quisquam
              nulla repellendus quo similique!
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
      <h1>My Skills</h1>
      <div className="flex space-x-20 overflow-x-auto p-20">
        <Card />
        <Card />
        <Card />
      </div>
    </Element>
  );
};

export default Section;

import React from "react";
import { FaDownload } from "react-icons/fa";
import { Element } from "react-scroll";
import Dynamic from "../../assets/type_effect/Dyanamic";
import ScrollAnimation from "react-animate-on-scroll";
import resume from "../../assets/pdf/Sachin_Shelke_Resume.pdf";

import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailSharp,
} from "react-icons/io5";

const Section = () => {
  return (
    <Element name="main" className="element">
      <div className="px-10 w-full py-40 flex justify-between items-center overflow-hidden">
        <div>
          <Dynamic />
          <div className="md:w-1/2 pr-10 pt-10 text-gray-300">
            I'm a <span className="text-white font-medium">React.JS</span>
            Front-End Developer from India who is passionate about making sure
            that performance of the Web App is
            <span className="text-white font-medium"> Optimized</span>,
            <span className="text-white font-medium"> Smooth</span> and
            <span className="text-white font-medium"> Attractive</span>.
          </div>
          <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut">
            <div className="flex space-x-5 py-5">
              <div className="p-2 rounded-full btn_social">
                <a
                  href="http://github.com/sachinshelke7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoGithub size={30} />
                </a>
              </div>
              <div className="p-2 rounded-full btn_social">
                <a
                  href="https://www.linkedin.com/in/sachin-shelke1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoLinkedin size={30} />
                </a>
              </div>
              <div className="p-2 rounded-full btn_social">
                <a href="mailto:shelkesp1@gmail.com">
                  <IoMailSharp size={30} />
                </a>
              </div>
              <div className="p-2 rounded-full btn_social">
                <a
                  href="https://twitter.com/s2editz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoTwitter size={30} />
                </a>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <button className="btn_download font-bold px-6 py-3 rounded-full flex space-x-2 items-center">
              <FaDownload />
              <a href={resume} target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </button>
          </ScrollAnimation>
        </div>
      </div>
    </Element>
  );
};

export default Section;

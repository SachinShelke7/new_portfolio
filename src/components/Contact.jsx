import React, { useState } from "react";
import { Element } from "react-scroll";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailSharp,
} from "react-icons/io5";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  const [error, setError] = useState(false);
  return (
    <Element name="contact" className="element">
      <div className="w-full min-h-screen flex justify-center items-center py-20 overflow-hidden">
        <div className="p-14 max-w-md sachin">
          <div className="flex flex-col space-y-10 justify-center items-center">
            <h4 className="font-medium">CONTACT FORM</h4>
            <input
              type="text"
              className="input bg-transparent py-2 max-w-sm mx-20 rounded-sm pl-5 focus:outline-none"
              placeholder="Enter Your Name"
              required
            />
            <input
              type="text"
              className="input bg-transparent py-2 max-w-sm mx-20 rounded-sm pl-5 focus:outline-none"
              placeholder="Enter Your Surname"
              required
            />
            <textarea
              type="text"
              className="input bg-transparent pt-5 max-w-sm mx-20 rounded-sm pl-5 focus:outline-none"
              placeholder="Massage"
              required
            />
            <button
              className="btn_download px-3 py-2 rounded-full w-[180px]"
              onClick={() => setError(true)}
            >
              Send Massage
            </button>
            <div>
              {error && (
                <p className="text-red-600 font-medium">
                  Currently Not Working Use Social Media
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="p-14 relative right-[4.8rem]">
          <div className="flex flex-col space-y-10 justify-center items-center">
            <div className="flex flex-col space-y-5">
              <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
                <a
                  href="http://github.com/sachinshelke7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex space-x-5 items-center cursor-pointer">
                    <div className="p-2 rounded-full btn_social bg-[#404040] z-10">
                      <IoLogoGithub size={30} />
                    </div>
                    <p className="sachin absolute pl-10 w-[125px]">Github</p>
                  </div>
                </a>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
                <a
                  href="https://www.linkedin.com/in/sachin-shelke1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex space-x-5 items-center cursor-pointer">
                    <div className="p-2 rounded-full btn_social bg-[#404040] z-10">
                      <IoLogoLinkedin size={30} />
                    </div>
                    <p className="sachin absolute pl-10 w-[125px]">Linkedin</p>
                  </div>
                </a>
              </ScrollAnimation>

              <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
                <a href="mailto:shelkesp1@gmail.com">
                  <div className="flex space-x-5 items-center cursor-pointer">
                    <div className="p-2 rounded-full btn_social bg-[#404040] z-10">
                      <IoMailSharp size={30} />
                    </div>
                    <p className="sachin absolute pl-10 w-[125px]">Mail</p>
                  </div>
                </a>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
                <a
                  href="https://twitter.com/s2editz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex space-x-5 items-center cursor-pointer">
                    <div className="p-2 rounded-full btn_social bg-[#404040] z-10">
                      <IoLogoTwitter size={30} />
                    </div>
                    <p className="sachin absolute pl-10 w-[125px]">Twitter</p>
                  </div>
                </a>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;

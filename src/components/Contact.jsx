import React, { useState } from "react";
import { Element } from "react-scroll";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailSharp,
} from "react-icons/io5";

const Contact = () => {
  const [error, setError] = useState(false);
  return (
    <Element name="contact" className="element">
      <div className="w-full min-h-screen flex justify-center items-center py-20">
        <div className="p-14 max-w-md sachin">
          <div className="flex flex-col space-y-10 justify-center items-center">
            <h4 className="font-medium">CONTACT FORM</h4>
            <input
              type="text"
              className="input bg-transparent py-2 max-w-sm mx-20 rounded-full pl-5 "
              placeholder="Enter Your Name"
              required
            />
            <input
              type="text"
              className="input bg-transparent py-2 max-w-sm mx-20 rounded-full pl-5 "
              placeholder="Enter Your Surname"
              required
            />
            <textarea
              type="text"
              className="input bg-transparent pt-5 max-w-sm mx-20 rounded-full pl-5 "
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
                <p className="text-sm text-red-600 font-medium">
                  Currently Not Working Use Social Media
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="p-14 sachin relative right-5 bg-[#404040]">
          <div className="flex flex-col space-y-10 justify-center items-center">
            <div className="flex flex-col space-y-5">
              <div className="flex space-x-5 items-center">
                <div className="p-2 cursor-pointer rounded-full btn_social">
                  <IoLogoGithub size={30} />
                </div>
                <p>Github</p>
              </div>
              <div className="flex space-x-5 items-center">
                <div className="p-2 cursor-pointer rounded-full btn_social">
                  <IoLogoLinkedin size={30} />
                </div>
                <p>Linkedin</p>
              </div>
              <div className="flex space-x-5 items-center">
                <div className="p-2 cursor-pointer rounded-full btn_social">
                  <IoMailSharp size={30} />
                </div>
                <p>G-Mail</p>
              </div>
              <div className="flex space-x-5 items-center">
                <div className="p-2 cursor-pointer rounded-full btn_social">
                  <IoLogoTwitter size={30} />
                </div>
                <p>Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;

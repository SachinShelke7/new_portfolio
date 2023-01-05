import React, { useState } from "react";
import { Element } from "react-scroll";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailSharp,
} from "react-icons/io5";
import ScrollAnimation from "react-animate-on-scroll";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [contactData, setContactData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "messages"), {
        name: contactData.name,
        lastName: contactData.email,
        message: contactData.message,
        time: new Date(),
      });
      setSuccess(true);
      setLoading(false);
      setTimeout(() => {
        setSuccess(false);
        setContactData({});
      }, 3000);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  return (
    <Element name="contact" className="element overflow-hidden">
      <div className="w-full flex flex-col sm:flex-row justify-center items-center py-20 overflow-hidden">
        <div className="p-14 max-w-md sachin mx-5 sm:mx-0">
          <form
            className="flex flex-col space-y-10 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <h4 className="font-medium text-2xl">CONTACT FORM</h4>
            <input
              type="text"
              className="input bg-transparent py-2 max-w-sm mx-20 rounded-sm pl-5 focus:outline-none"
              placeholder="Enter Your Name"
              required
              value={contactData.name || ""}
              name="name"
              onChange={handleChange}
            />
            <input
              type="email"
              className="input bg-transparent py-2 max-w-sm mx-20 rounded-sm pl-5 focus:outline-none"
              placeholder="Enter Your Email"
              required
              value={contactData.email || ""}
              name="email"
              onChange={handleChange}
            />
            <textarea
              type="text"
              className="input bg-transparent pt-5 max-w-sm mx-20 rounded-sm pl-5 focus:outline-none"
              placeholder="Massage"
              required
              value={contactData.message || ""}
              name="message"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn_download px-3 py-2 rounded-full w-[180px]"
            >
              Send Massage
            </button>
            <div>
              {success && (
                <p className="text-green-600 font-medium">
                  Success , Thank You ❤
                </p>
              )}
              {loading && (
                <p className="text-green-600 font-medium">Sending data ❤</p>
              )}
            </div>
          </form>
        </div>

        <div className="pr-0 p-14 relative right-[4.8rem]">
          <div className="flex flex-col justify-center items-center">
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

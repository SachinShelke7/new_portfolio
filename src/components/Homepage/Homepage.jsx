import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import Skills from "../skills/Skills";
import Header from "../Header/Header";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Footer from "../Footer/Footer";
import Intro from "../intro/Intro";
import { useCookies } from "react-cookie";

const Homepage = () => {
  const [toggle, setToggle] = useState(false);
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies([
    "pin",
    "access_token",
    "cookies",
  ]);
  useEffect(() => {
    if (cookies.cookies === "accepted") {
      setAcceptedCookies(true);
    } else {
      setAcceptedCookies(false);
    }
  }, [cookies.cookies]);

  const handleCookies = () => {
    setCookie("cookies", "accepted");
  };

  return (
    <div className="container_bg relative">
      <div className="mx-auto max-w-[1500px] main_bg">
        <Intro />
        <Header
          toggle={toggle}
          setToggle={setToggle}
          acceptedCookies={acceptedCookies}
        />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      {!cookies.cookies ? (
        <div className="fixed z-10 bottom-0 left-0 right-0 w-full bg-gray-500 text-white bg-opacity-50 text-sm text-center">
          <p>
            Site uses cookies , accept it to use all features which uses
            cookies.
            <button
              className="text-white bg-green-700 py-1 px-2 rounded-md"
              onClick={handleCookies}
            >
              Accept
            </button>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Homepage;

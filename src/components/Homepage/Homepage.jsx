import React, { useState } from "react";
import Home from "../Home/Home";
import Skills from "../skills/Skills";
import Header from "../Header/Header";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Footer from "../Footer/Footer";
import Intro from "../intro/Intro";

const Homepage = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container_bg">
      <div className="mx-auto max-w-[1500px] main_bg">
        <Intro />
        <Header toggle={toggle} setToggle={setToggle} />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

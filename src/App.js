import React, { useState } from "react";
import "./components/styles/App.css";
import Home from "./components/Home/Home";
import Skills from "./components/skills/Skills";
import Header from "./components/Header/Header";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/intro/Intro";

function App() {
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
}

export default App;

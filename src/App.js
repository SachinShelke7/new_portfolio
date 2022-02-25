import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="font-sachin w-full bg-[#1D1D1D] text-white">
        <Intro />
        <div className="mx-auto max-w-[1500px]">
          <Header />
          <Home />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;

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
    <div className="font-sachin w-full overflow-hidden bg-[#121212]">
      <Intro />
      <Header />
      <Home />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

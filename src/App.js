import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Intro from "./components/Intro";
// import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="font-sachin w-full bg-[#404040] text-white select-none scroll-smooth">
        <Intro />
        <div className="mx-auto max-w-[1500px]">
          <Header />
          <Home />
          <Skills />
          {/* <Education /> */}
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

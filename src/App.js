import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container_bg">
      <div className="mx-auto max-w-[1500px] main_bg">
        <Intro />
        <Header />
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

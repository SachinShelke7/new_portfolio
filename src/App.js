import "./App.css";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div>
      <Intro />
      <Header />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;

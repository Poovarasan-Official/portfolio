import "./App.css";
import About from "./components/About";
import Copyrights from "./components/Copyrights";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Copyrights />
    </>
  );
}

export default App;

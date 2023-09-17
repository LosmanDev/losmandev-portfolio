import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </>
  );
}

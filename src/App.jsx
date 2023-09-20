import "./App.css";
import VisibilitySensor from "react-visibility-sensor";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate-fadeIn" : ""}>
            <Home />
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate-fadeIn" : ""}>
            <About />
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate-fadeIn" : ""}>
            <Projects />
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate-fadeIn" : ""}>
            <Contact />
            <Footer />
          </div>
        )}
      </VisibilitySensor>
    </>
  );
}

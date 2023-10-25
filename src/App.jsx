import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {  useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() =>{
    AOS.init();
  },[])

return (
  <>
    <Navbar />
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <Home />
    </div>
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <About />
    </div>
    <div data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1500">
      <Projects />
    </div>
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <Contact />
      <Footer />
    </div>
  </>
);
}

import "./App.css";
import { motion} from "framer-motion";

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
      <motion.div
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
      >
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}

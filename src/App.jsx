import { React,useEffect } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Work from "./Component/Work/Work";
import Skill from "./Component/Skill/Skill"
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  },[]);
  return (
    <>
    <Navbar/>
    <Home />
    <Work/>
    <Skill/>
    <About />
    <Footer/>
    </>
  )
}

export default App

import React from "react";
import "./assets/css/style.css"; 
import "./assets/css/timeline.css"
import About from "./components/about";
import Footer from "./components/footer";
import Homepage from "./components/hompage";
import Skills from "./components/skills";
import Timeline from "./components/timeline";

const App = () => {
  return (
    <>
    <Homepage/>
    <About/>
    <Skills/>
    <Timeline/>
    <Footer/>
    </>
    
  );
};

export default App;


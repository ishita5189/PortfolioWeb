import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
     <div className="bg-white dark:bg-gray-900 dark:text-white">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </div>
    
    </>
  )
}
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Blog from './components/Blog'
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Background />
      <Hero/>
      <Navbar />
      {/* <About /> */}
      {/* <Resume /> */}
      {/* <Work /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}

export default App;

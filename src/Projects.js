import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Projects.css";
import "./App.css";
import ProjectSection from "./ProjectSection";
function Projects() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (

        <div style={{padding:"20px"}}>
          <ProjectSection />
        </div>
  
  );
}

export default Projects;

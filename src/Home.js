import React from "react";


import "./App.css";
import Section from "./Section";
import Bio from "./Bio";
import ProfilePic from "./ProfilePic";

function Home() {

  return (
<>
     <div>
        <ProfilePic />
        <Bio />
        <Section />
        </div>
    </>
  );
}

export default Home;

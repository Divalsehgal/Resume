import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

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

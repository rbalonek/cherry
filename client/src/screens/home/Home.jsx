import React from "react";

import Header from "../../components/header/Header";
// import Header from "../../components/header/Header";
// import ProjectScroll from "../../components/projectScroll/ProjectScroll";
import ScrollSnapContainer from "../../components/ScrollSnapContainer/ScrollSnapContainer";
// import IntroVid from "../IntroVid/IntroVid";
import "./Home.css";
// import testSnap from "./testSnap";

export default function Home() {
  return (
    <div className="home-container">
      <ScrollSnapContainer />
    </div>
  );
}

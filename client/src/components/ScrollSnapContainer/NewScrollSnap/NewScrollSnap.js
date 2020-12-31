import React, { useState } from "react";
import Header from "../../header/Header";
import "./NewScrollSnap.css";
import { Fade } from "react-awesome-reveal";

import StickyHeader from "../../StickyHeader/StickyHeader";
import HamburgerSticky from "../../StickyHeader/HamburgerSticky";
import ProjectsBody from "../../ProjectsBody/ProjectsBody";

export default function NewScrollSnap() {
  const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");

  const toggleHamb = () => {
    if (hamburgerClosed === "hamburger-closed") {
      hamburgerToggle("hamburger-opened-sticky");
    } else {
      hamburgerToggle("hamburger-closed");
    }
  };
  return (
    <div className="new-scrollsnap-container">
      <div className={hamburgerClosed}>
        <div className="hamburger-text-container">
          <Fade>
            <h1 className="hamburger-open-text hover-animation">About</h1>
            <h1 className="hamburger-open-text hover-animation">Say Hi</h1>
            <h1 className="hamburger-open-text hover-animation">LinkedIn</h1>
            <h1 className="hamburger-open-text hover-animation">Instagram</h1>
            <h1 className="hamburger-open-text hover-animation">Twitter</h1>
          </Fade>
        </div>
      </div>

      <div className="hamburger-div" onClick={toggleHamb}>
        <HamburgerSticky />
      </div>

      <div id="header" className="new-header-container">
        <Header />
      </div>
      <StickyHeader />
      <ProjectsBody></ProjectsBody>
    </div>
  );
}

import React, { useState } from "react";
import Header from "../../header/Header";
import "./NewScrollSnap.css";
import { Fade } from "react-awesome-reveal";

import StickyHeader from "../../StickyHeader/StickyHeader";
import HamburgerSticky from "../../StickyHeader/HamburgerSticky";
import ProjectsBody from "../../ProjectsBody/ProjectsBody";
import OpenedMenu from "../../OpenedMenu/OpenedMenu";
import NewHeader from "../../header/NewHeader/NewHeader";

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
            <OpenedMenu />
          </Fade>
        </div>
      </div>
      <StickyHeader />
      <div className="hamburger-div" onClick={toggleHamb}>
        <HamburgerSticky />
      </div>

      <div id="header" className="new-header-container">
        <NewHeader />
      </div>

      <ProjectsBody></ProjectsBody>
    </div>
  );
}

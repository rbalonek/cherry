import React, { useState } from "react";
import "./StickyHeader.css";

import { Bounce, Rotate, Zoom, Fade } from "react-awesome-reveal";
import { Animated } from "react-animated-css";

import Logo from "../../assets/logo/Cherry-Logo.png";
import Hamburger from "../Hamburger/Hamburger";
import OpenedMenu from "../OpenedMenu/OpenedMenu";

export default function StickyHeader({ toggle }) {
  // const [IsVis, setIsVis] = useState(true);
  const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");
  // const [logo, logoToggle] = useState('logo-sticky')

  const toggleHamb = () => {
    if (hamburgerClosed === "hamburger-closed") {
      hamburgerToggle("hamburger-opened-sticky");
    } else {
      hamburgerToggle("hamburger-closed");
    }
  };

  const logoClick = () => {
    window.scrollTo(0, 0);
    // setIsVis(false);
    // setTimeout(() => {
    //   setIsVis(true);
    // }, 1000);
  };

  return (
    <div className="sticky-header-container">
      <div className={hamburgerClosed}>
        <div className="hamburger-text-container">
          <Fade>
            <OpenedMenu />
          </Fade>
        </div>
      </div>
      <Fade fraction={1} delay={1000}>
        <img
          className="logo-sticky"
          src={Logo}
          alt="logo"
          onClick={logoClick}
        />
      </Fade>
      <div onClick={toggleHamb}>
        <Hamburger />
      </div>
    </div>
  );
}

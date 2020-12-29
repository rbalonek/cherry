import React, { useState } from "react";
import "./StickyHeader.css";

import { Bounce, Rotate, Zoom, Fade } from "react-awesome-reveal";
import { Animated } from "react-animated-css";

import Logo from "../../assets/logo/Cherry-Logo.png";
import hamburger from "../../assets/logo/Website-Asset_Hamburger.png";
import hamburgerX from "../../assets/logo/Website-Asset_X.png";
import Hamburger from "../Hamburger/Hamburger";

export default function StickyHeader() {
  const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");
  // const [IsVis, setIsVis] = useState(true);

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
      <Zoom fraction={1}>
        <img
          className="logo-sticky"
          src={Logo}
          alt="logo"
          onClick={logoClick}
        />
      </Zoom>

      <div className="hamburger-sticky-container">
        <Zoom fraction={0.8}>
          <div className="z-index-999" onClick={toggleHamb}>
            <Hamburger />
          </div>
        </Zoom>
      </div>

      <div className={hamburgerClosed}>
        <div className="hamburger-text-container">
          <Fade>
            <h1 className="hamburger-open-text">About</h1>
            <h1 className="hamburger-open-text">Say Hi</h1>
            <h1 className="hamburger-open-text">LinkedIn</h1>
            <h1 className="hamburger-open-text">Instagram</h1>
            <h1 className="hamburger-open-text">Twitter</h1>
          </Fade>
        </div>
      </div>
    </div>
  );
}

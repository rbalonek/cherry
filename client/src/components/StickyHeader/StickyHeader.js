import React, { useState } from "react";
import "./StickyHeader.css";

import { Bounce, Rotate, Zoom, Fade } from "react-awesome-reveal";
import { Animated } from "react-animated-css";

import Logo from "../../assets/logo/Cherry-Logo.png";
import hamburger from "../../assets/logo/Website-Asset_Hamburger.png";
import hamburgerX from "../../assets/logo/Website-Asset_X.png";

export default function StickyHeader() {
  const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");
  const [IsVis, setIsVis] = useState(true);

  const toggleHamb = () => {
    hamburgerToggle("hamburger-opened");
  };

  const hambClose = () => {
    hamburgerToggle("hamburger-closed");
  };

  const logoClick = () => {
    window.scrollTo(0, 0);
    setIsVis(false);
    setTimeout(() => {
      setIsVis(true);
    }, 1000);
  };

  return (
    <div className="sticky-header-container">
      <Bounce delay={200} fraction={0.8}>
        <Animated isVisible={IsVis} animationOut="fadeOut">
          <img
            className="logo-sticky"
            src={Logo}
            alt="logo"
            onClick={logoClick}
          />
        </Animated>
      </Bounce>

      <div className="hamburger-sticky-container">
        <Zoom fraction={0.8}>
          <img
            className="hamburger-sticky"
            src={hamburger}
            onClick={toggleHamb}
            alt="hamburger"
          />
        </Zoom>
      </div>

      <div className={hamburgerClosed}>
        <div className="hamburger-x-container">
          <Rotate>
            <img
              className="hamburger-x"
              alt="hamClose"
              src={hamburgerX}
              onClick={hambClose}
            />
          </Rotate>
        </div>

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

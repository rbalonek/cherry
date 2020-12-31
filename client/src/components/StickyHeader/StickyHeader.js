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
    </div>
  );
}

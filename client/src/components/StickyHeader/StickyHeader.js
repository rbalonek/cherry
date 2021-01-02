import React, { useState } from "react";
import "./StickyHeader.css";

import { Bounce, Rotate, Zoom, Fade } from "react-awesome-reveal";
import { Animated } from "react-animated-css";

import Logo from "../../assets/logo/Cherry-Logo.png";

export default function StickyHeader() {
  const [IsVis, setIsVis] = useState(true);

  const logoClick = () => {
    window.scrollTo(0, 0);
    setIsVis(false);
    setTimeout(() => {
      setIsVis(true);
    }, 1000);
  };

  return (
    <div className="sticky-header-container">
      <Zoom fraction={1}>
        <Animated
          animationOut="fadeOut"
          animationOutDuration={1000}
          isVisible={IsVis}
        >
          <img
            className="logo-sticky"
            src={Logo}
            alt="logo"
            onClick={logoClick}
          />
        </Animated>
      </Zoom>
    </div>
  );
}

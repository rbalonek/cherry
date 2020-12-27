import React, { useState } from "react";
import "./header.css";
import { Animated } from "react-animated-css";

import Logo from "../../assets/logo/Cherry-Logo.png";
import DownArrow from "../../assets/logo/Website-Asset_DownArrow.png";
import hamburger from "../../assets/logo/Website-Asset_Hamburger.png";

export default function Header() {
  const [visible, setVisible] = useState(true);

  const arrowClick = () => {
    setVisible(false);
    window.scrollBy(0, 300);
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  };

  return (
    <div className="header-container">
      <div className="header-text-container">
        <p className="header-text">
          Design, illustration, strong opinions and wannabe do-gooders. Say hi
        </p>
        <div className="header-hamburger-container">
          <img className="hamburger-header" src={hamburger} alt="hamburger" />
        </div>
      </div>
      <Animated
        animationOut="zoomOutDown"
        animationOutDuration={300}
        isVisible={visible}
      >
        <div className="logo-container">
          <Animated
            animationOut="zoomOutLeft"
            animationOutDuration={500}
            isVisible={visible}
          >
            <img className="logo" src={Logo} alt="logo"></img>
          </Animated>
        </div>
      </Animated>
      <div className="down-arrow-container">
        <img
          className="down-arrow"
          src={DownArrow}
          alt="logo"
          onClick={arrowClick}
        ></img>
      </div>
    </div>
  );
}

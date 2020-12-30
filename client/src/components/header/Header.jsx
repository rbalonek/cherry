import React, { useState } from "react";
import "./header.css";
import { Animated } from "react-animated-css";
import { Rotate, Fade } from "react-awesome-reveal";

import Logo from "../../assets/logo/Cherry-Logo.png";
import DownArrow from "../../assets/logo/Website-Asset_DownArrow.png";
import hamburger from "../../assets/logo/Website-Asset_Hamburger.png";
import hamburgerX from "../../assets/logo/Website-Asset_X.png";
import Hamburger from "../Hamburger/Hamburger";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");

  const toggleHamb = () => {
    if (hamburgerClosed === "hamburger-closed") {
      hamburgerToggle("hamburger-opened");
    } else {
      hamburgerToggle("hamburger-closed");
    }
  };

  const arrowClick = () => {
    setVisible(false);
    // window.scrollBy(0, 800);
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  };
  // const arrowClick = () => {
  //   setVisible(false);
  //   window.scrollBy(0, 1000);
  //   setTimeout(() => {
  //     setVisible(true);
  //   }, 2000);
  // };

  return (
    <div className="header-container">
      <div className="header-text-container">
        <Fade delay={1000}>
          <p className="header-text">
            Design, illustration, strong opinions and wannabe do-gooders.
            <span> </span>
            <span class="underline">Say hi</span>
          </p>
        </Fade>
        <div className="header-hamburger-container">
          <Fade>
            <div className="z-index-999" onClick={toggleHamb}>
              <Hamburger />
            </div>
          </Fade>
        </div>
      </div>

      <div className="logo-container">
        <Animated
          animationIn="fadeIn"
          animationOut="zoomOutDown"
          animationOutDuration={300}
          isVisible={visible}
        >
          <Animated
            animationOut="zoomOutLeft"
            animationOutDuration={500}
            isVisible={visible}
          >
            <img className="logo" src={Logo} alt="logo" />
          </Animated>
        </Animated>
      </div>
      <div className="down-arrow-container">
        <Fade delay={1000}>
          <a href="#chi">
            <img
              className="down-arrow"
              src={DownArrow}
              alt="logo"
              onClick={arrowClick}
            />
          </a>
        </Fade>
      </div>
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
    </div>
  );
}

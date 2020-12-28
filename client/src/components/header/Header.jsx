import React, { useState } from "react";
import "./header.css";
import { Animated } from "react-animated-css";
import { Rotate, Fade } from "react-awesome-reveal";

import Logo from "../../assets/logo/Cherry-Logo.png";
import DownArrow from "../../assets/logo/Website-Asset_DownArrow.png";
import hamburger from "../../assets/logo/Website-Asset_Hamburger.png";
import hamburgerX from "../../assets/logo/Website-Asset_X.png";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");

  const toggleHamb = () => {
    hamburgerToggle("hamburger-opened");
    console.log("opened!");
  };

  const hambClose = () => {
    hamburgerToggle("hamburger-closed");
    console.log("Closed!");
  };

  // if (window.innerWidth < 960) {
  // window.innerHeight
  // }
  const arrowClick = () => {
    setVisible(false);
    window.scrollBy(0, 900);
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
            <span class="underline">Say hi</span>
          </p>
        </Fade>
        <div className="header-hamburger-container">
          <Fade>
            <img
              className="hamburger-header"
              src={hamburger}
              alt="hamburger"
              onClick={toggleHamb}
            />
          </Fade>
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
        <Fade delay={1000}>
          <img
            className="down-arrow"
            src={DownArrow}
            alt="logo"
            onClick={arrowClick}
          />
        </Fade>
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

import React, { useState } from "react";

import { Fade } from "react-awesome-reveal";
import Hamburger from "../Hamburger/Hamburger";
import "./LogoSticky.css";

import Logo from "../../assets/logo/Cherry-Logo.png";

export default function HamburgerSticky(props) {
  // const [showElement, toggleElement] = useState("logo-sticky");
  // const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");

  const clickedLogo = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // const toggleHamb = () => {
  //   if (hamburgerClosed === "hamburger-closed") {
  //     hamburgerToggle("hamburger-opened-sticky");
  //   } else {
  //     hamburgerToggle("hamburger-closed");
  //   }
  // };
  const logoClick = () => {
    window.scrollTo(0, 0);
    // setIsVis(false);
    // setTimeout(() => {
    //   setIsVis(true);
    // }, 1000);
  };
  // console.log(props.click);

  return (
    <div className="sticky-logo-container">
      <Fade fraction={1} delay={1000}>
        <img
          className={props.showLogo}
          src={Logo}
          alt="logo"
          onClick={clickedLogo}
        />
      </Fade>
    </div>
  );
}

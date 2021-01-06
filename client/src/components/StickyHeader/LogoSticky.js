import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Hamburger from "../Hamburger/Hamburger";
import "./LogoSticky.css";

import Logo from "../../assets/logo/Cherry-Logo.png";

export default function HamburgerSticky() {
  // const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");

  // const toggleHamb = () => {
  //   if (hamburgerClosed === "hamburger-closed") {
  //     hamburgerToggle("hamburger-opened-sticky");
  //   } else {
  //     hamburgerToggle("hamburger-closed");
  //   }
  // };
  // const logoClick = () => {
  //   window.scrollTo(0, 0);
  //   // setIsVis(false);
  //   // setTimeout(() => {
  //   //   setIsVis(true);
  //   // }, 1000);
  // };

  return (
    <div className="sticky-logo-container">
      {window.innerWidth > 770 ? (
        <Fade fraction={1} delay={1000}>
          <img
            className="logo-sticky"
            src={Logo}
            alt="logo"
            // onClick={logoClick}
          />
        </Fade>
      ) : (
        <img
          className="logo-sticky"
          src={Logo}
          alt="logo"
          // onClick={logoClick}
        />
      )}
    </div>
  );
}

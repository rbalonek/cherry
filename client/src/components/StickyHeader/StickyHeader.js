import React from "react";
import "./StickyHeader.css";

import { Bounce } from "react-awesome-reveal";
// import { Animated } from "react-animated-css";

import Logo from "../../assets/logo/Cherry-Logo.png";
import hamburger from "../../assets/logo/Website-Asset_Hamburger.png";

export default function StickyHeader() {
  return (
    <div className="sticky-header-container">
      <Bounce fraction={0.8}>
        <img className="logo-sticky" src={Logo} delay={3000} alt="logo" />
      </Bounce>
      <img className="hamburger-sticky" src={hamburger} alt="hamburger" />
    </div>
  );
}

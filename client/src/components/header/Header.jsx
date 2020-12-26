import React from "react";
import "./header.css";

import Logo from "../../assets/logo/Cherry-Logo.png";
import DownArrow from "../../assets/logo/Website-Asset_DownArrow.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-text-container">
        <p className="header-text">
          Design, illustration, strong opinions and wannabe do-gooders. Say hi
        </p>
      </div>
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo"></img>
      </div>
      <div className="down-arrow-container">
        <img className="down-arrow" src={DownArrow} alt="logo"></img>
      </div>
    </div>
  );
}

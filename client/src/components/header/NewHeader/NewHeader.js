import React, { useState } from "react";
import "./NewHeader.css";

import { Animated } from "react-animated-css";
import logo from "../../../assets/logo/Cherry-Logo.png";

export default function NewHeader() {
  const [inView, setInView] = useState(true);
  const [imgHeight, newImgHeight] = useState("new-header-logo");

  // const Chi = document.getElementById("chi");

  const DownArrowClick = () => {
    document.getElementById("chi").scrollIntoView();
    setInView(false);
    newImgHeight("new-header-logo-clicked");
    setTimeout(() => {
      setInView(true);
      newImgHeight("new-header-logo");
    }, 1000);
  };

  return (
    <div className="new-header-container" onClick={DownArrowClick}>
      <div className="new-header-logo-container">
        <img className={imgHeight} alt="logo" src={logo} />
      </div>
      <div className="new-header-text-container">
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={100}
          isVisible={inView}
        >
          <p className="new-header-text">
            We're Cherry and this is a short intro that changes. This version
            has a small logo at the top that slides into position as a person
            scrolls down. Here's an email link :{" "}
            <span style={{ textDecoration: "underline" }}>Say hi.</span>
          </p>
        </Animated>
      </div>
    </div>
  );
}

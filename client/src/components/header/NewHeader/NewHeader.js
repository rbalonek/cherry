import React, { useState } from "react";
import "./NewHeader.css";

import { Animated } from "react-animated-css";
import logo from "../../../assets/logo/Cherry-Logo.png";

export default function NewHeader() {
  const [inView, setInView] = useState(true);
  const Chi = document.getElementById("chi");

  const DownArrowClick = () => {
    Chi.scrollIntoView();
    setInView(false);
    setTimeout(() => {
      setInView(true);
    }, 1000);
  };

  return (
    <div className="new-header-container" onClick={DownArrowClick}>
      <div className="new-header-logo-container">
        <img style={{ height: 50 }} alt="logo" src={logo} />
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

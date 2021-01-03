import React, { useState } from "react";
import "./NewHeader.css";

import { Animated } from "react-animated-css";
import logo from "../../../assets/logo/Cherry-Logo.png";
import downArrow from "../../../assets/logo/Website-Asset_DownArrow.png";

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
  var w = window.innerWidth;

  return (
    <>
      {window.innerWidth > 770 ? (
        <div>
          <div className="new-header-container" onClick={DownArrowClick}>
            <div className="new-header-text-container">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={100}
                isVisible={inView}
              >
                <p className="new-header-text">
                  We're Cherry and this is a short intro that changes. This
                  version has a small logo at the top that slides into position
                  as a person scrolls down. Here's an email link :{" "}
                  <span className="hi-email">Say hi.</span>
                </p>
              </Animated>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="new-header-container">
            <div className="new-header-text-container">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={100}
                isVisible={inView}
              >
                <p className="new-header-text">
                  We're Cherry and this is a short intro that changes. This
                  version has a small logo at the top that slides into position
                  as a person scrolls down. Here's an email link :{" "}
                  <span className="hi-email">Say hi.</span>
                </p>
              </Animated>
            </div>
            <div className="cell-down-arrow-container" onClick={DownArrowClick}>
              <img
                className="cell-down-arrow"
                src={downArrow}
                alt="cell-down"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

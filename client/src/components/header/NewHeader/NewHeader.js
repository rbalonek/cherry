import React, { useState } from "react";
import "./NewHeader.css";
import zenscroll from "zenscroll";

import { Animated } from "react-animated-css";
import logo from "../../../assets/logo/Cherry-Logo.png";
import downArrow from "../../../assets/logo/Website-Asset_DownArrow.png";

export default function NewHeader() {
  const [inView, setInView] = useState(true);
  // const [imgHeight, newImgHeight] = useState("new-header-logo");

  var chi = document.getElementById("chi");

  //

  // const Chi = document.getElementById("chi");

  let pageHeight = window.innerHeight;

  const DownArrowCell = () => {
    zenscroll.toY(pageHeight);
    // zenscroll.intoView(chi);
    // zenscroll.to(chi);
    // window.scrollBy(0, pageHeight);
    console.log(pageHeight);
  };

  const DownArrowClick = () => {
    document.getElementById("chi").scrollIntoView();
    setInView(false);
    // newImgHeight("new-header-logo-clicked");
    // setTimeout(() => {
    //   setInView(true);
    //   newImgHeight("new-header-logo");
    // }, 1000);
  };

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
                  We're Cherry. <br />
                  <br /> A multi-disciplinary design studio based in Austin and
                  New York. This is a short intro that cycles through several
                  versions on refresh and we can update as we see fit.
                  <br /> <br />
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
            <div className="cell-down-arrow-container" onClick={DownArrowCell}>
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

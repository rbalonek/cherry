import React, { useState, useEffect } from "react";
import "./NewHeader.css";
import zenscroll from "zenscroll";

import { Animated } from "react-animated-css";
import { Fade } from "react-awesome-reveal";
import { FiChevronDown } from "react-icons/fi";
// import axios from "axios";

export default function NewHeader(props) {
  const [inView, setInView] = useState(true);
  console.log(props);

  const DownArrowCell = () => {
    let pageHeight = window.innerHeight;
    zenscroll.toY(pageHeight);
    setInView(false);
    setTimeout(() => {
      setInView(true);
    }, 1000);
    // zenscroll.intoView(chi);
    // zenscroll.to(chi);
    // window.scrollBy(0, pageHeight);
    // console.log(pageHeight);
  };

  const DownArrowClick = () => {
    let pageHeight = window.innerHeight;
    zenscroll.toY(pageHeight);
    // document.getElementById("chi").scrollIntoView();
    setInView(false);
    setTimeout(() => {
      setInView(true);
    }, 1000);
  };

  return (
    <>
      {window.innerWidth > 770 ? (
        <div>
          <div className="new-header-container" onClick={DownArrowClick}>
            <div>
              {props.headerText.length ? (
                <Animated
                  animationInDelay={2000}
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  animationInDuration={1000}
                  animationOutDuration={500}
                  isVisible={inView}
                >
                  <div style={{ height: "100vh" }}>
                    <p className="airtable-header-text">
                      {props.headerText[0].fields.paragraph1}
                      <span> </span>
                      <span className="airtable-header-text-underlined">
                        {" "}
                        {props.headerText[0].fields.underlined}
                      </span>
                    </p>
                  </div>
                </Animated>
              ) : (
                <Animated
                  animationInDelay={2000}
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  animationInDuration={1000}
                  animationOutDuration={500}
                  isVisible={inView}
                >
                  <p className="airtable-header-text">
                    Design, illustration, strong opinions and wannabe
                    do-gooders.
                    <span> </span>
                    <span className="airtable-header-text-underlined">
                      Say Hi
                    </span>
                  </p>
                </Animated>
              )}
            </div>
            <div className="vid-logo-container">
              <Animated
                animationInDelay={1000}
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={1000}
                animationOutDuration={500}
                isVisible={inView}
              >
                <video
                  className="vid-about"
                  autoPlay
                  loop
                  muted
                  src="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1609886317/Cherry/Cherry%20Clients/Logos/AdobeStock_326483459_Video_HD_Preview_vahjce.mp4"
                />
              </Animated>
              <img
                alt="logo"
                src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1609959569/Cherry/Cherry%20Clients/Logos/Cherry_Logo_KO4_z46it6.png"
                className="about-logo"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="new-header-container">
            <div className="vid-logo-container">
              <Fade delay={1000}>
                <div className="vid-about-mobile"></div>
              </Fade>
              <img
                alt="logo"
                src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1609959569/Cherry/Cherry%20Clients/Logos/Cherry_Logo_KO4_z46it6.png"
                className="about-logo"
              />
            </div>
            <div className="cell-down-arrow-container" onClick={DownArrowCell}>
              <FiChevronDown
                className="cell-down-arrow"
                color="white"
                opacity=".5"
                alt="cell-down"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState, useEffect } from "react";
import "./NewHeader.css";
import zenscroll from "zenscroll";
import { Animated } from "react-animated-css";
import { Fade } from "react-awesome-reveal";
import { FiChevronDown } from "react-icons/fi";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
// import axios from "axios";

export default function NewHeader(props) {
  // console.log(props);
  // const [inView, setInView] = useState(true);
  // console.log("Try 1", props.videoBackground);

  // setTimeout(() => {
  //   console.log("Try TWO", props.videoBackground);
  // }, 2000);

  const DownArrowCell = () => {
    // zenscroll.intoView(document.getElementById("cell-text-block"));
    let pageHeight = window.innerHeight;
    zenscroll.toY(pageHeight);
  };

  const DownArrowClick = () => {
    zenscroll.center(document.getElementById("chi"));
    // let pageHeight = window.innerHeight;
    // zenscroll.toY(pageHeight);
    // document.getElementById("chi").scrollIntoView();
    // setInView(false);
    // setTimeout(() => {
    //   setInView(true);
    // }, 1000);
  };

  return (
    <>
      {isBrowser ? (
        <div>
          <div
            // id="header"
            className="new-header-container"
            onClick={DownArrowClick}
          >
            <div>
              {props.headerText.length ? (
                <Fade
                  delay={1500}
                  // animationIn="fadeIn"
                  // animationOut="fadeOut"
                  duration={2000}
                  triggerOnce={true}
                  // animationInDuration={5000}
                  // animationOutDuration={500}
                  // isVisible={inView}
                  className="airtable-header-text"
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
                </Fade>
              ) : (
                <Animated
                  animationInDelay={2000}
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  animationInDuration={1000}
                  animationOutDuration={500}
                  // isVisible={inView}
                  triggerOnce={true}
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
                animationInDelay={3000}
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={2000}
                animationOutDuration={500}
                triggerOnce={true}
                // isVisible={inView}
              >
                <video
                  className="vid-about"
                  autoPlay
                  loop
                  muted
                  src={props.videoBackground}
                  //"https://res.cloudinary.com/bobalobbadingdong/video/upload/v1609886317/Cherry/Cherry%20Clients/Logos/AdobeStock_326483459_Video_HD_Preview_vahjce.mp4"
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
          <div
            onClick={DownArrowCell}
            // id="header"
            className="new-header-container-cell"
          >
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
          </div>
          <div
            style={{
              position: "relative",
              bottom: "37vh",
              textAlign: "center",
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <p style={{ color: "white" }}>
              We're an art & design studio specializing in branding for film &
              television.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

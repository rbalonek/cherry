import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Animated } from "react-animated-css";
import "./Hamburger.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export default function Hamburger(props) {
  const [menu, menuToggle] = useState(false);
  const [open, setOpen] = useState("");
  // const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");

  // const toggleHamb = () => {
  //   if (hamburgerClosed === "hamburger-closed") {
  //     hamburgerToggle("hamburger-opened-sticky");
  //   } else {
  //     hamburgerToggle("hamburger-closed");
  //   }
  // };

  const menuHide = props.showHamburger;

  const clicked = () => {
    if (menu === true) {
      menuToggle(false);
      setOpen("");
      // hamburgerToggle("hamburger-closed");
      // console.log("closed");
    } else {
      menuToggle(true);
      setOpen("  open leftIsh");
      // hamburgerToggle("hamburger-opened-sticky");
      // console.log("Open");
    }
  };

  // console.log(props.showHamburger);
  return (
    <div>
      <div className="hamburger-helper">
        <div className={menuHide + open} onClick={clicked}>
          {isBrowser ? (
            <div style={{ position: "absolute", right: "0" }}>
              <Animated
                // delay={1500}
                // duration={2000}
                // triggerOnce={true}
                animationIn="fadeInDownBig"
                // animationInDelay={800}
                animationInDuration={2000}
                // isVisible={true}
              >
                <div className="menu-btn__burger">
                  <div className="menu-btn-cursor-container"></div>
                </div>
              </Animated>
            </div>
          ) : (
            <div>
              <Animated
                // delay={1500}
                // duration={2000}
                // triggerOnce={true}
                animationIn="fadeInDownBig"
                animationInDelay={1000}
                animationInDuration={1400}
                // isVisible={true}
                // className="menu-btn__burger"
              >
                <div className="menu-btn__burger">
                  <div className="menu-btn-cursor-container"></div>
                </div>
              </Animated>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./StickyHeader.css";
import { Bounce, Rotate, Zoom, Fade } from "react-awesome-reveal";
import { Animated } from "react-animated-css";
// import Logo from "../../assets/logo/Cherry-Logo.png";
import Hamburger from "../Hamburger/Hamburger";
import OpenedMenu from "../OpenedMenu/OpenedMenu";
import { useLockBodyScroll, useToggle } from "react-use";

export default function StickyHeader(props) {
  // const [IsVis, setIsVis] = useState(true);
  const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");
  // const [childState, setChildState] = useState("input-hidden");
  const [locked, toggleLocked] = useToggle(false);
  useLockBodyScroll(locked);

  const toggleHamb = () => {
    if (hamburgerClosed === "hamburger-closed") {
      hamburgerToggle("hamburger-opened-sticky");
      toggleLocked();
    } else {
      hamburgerToggle("hamburger-closed");
      toggleLocked();
      // setChildState("input-hidden");
      // var inputForm = document.getElementById("form-opened-menu");
      // inputForm.classList.add("input-hidden");
      // inputForm.classList.remove("show");

      // var bSidesToggle = document.getElementById("b-sides");
      // bSidesToggle.classList.add("hover-animation");
      // bSidesToggle.classList.remove("hide-b-sides");
    }
  };

  // const logoClick = () => {
  //   window.scrollTo(0, 0);
  //   // setIsVis(false);
  //   // setTimeout(() => {
  //   //   setIsVis(true);
  //   // }, 1000);
  // };

  return (
    <div className="sticky-header-container">
      <div className={hamburgerClosed}>
        <div className="hamburger-text-container">
          <Fade>
            <OpenedMenu
              // childState={childState}
              videoBackground={props.videoBackground}
            />
          </Fade>
        </div>
      </div>
      <div className="burger-menu-position-main">
        <div onClick={toggleHamb}>
          <Hamburger showHamburger={props.showHamburger} />
        </div>
      </div>
    </div>
  );
}

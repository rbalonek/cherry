import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Animated } from "react-animated-css";
import "./Hamburger.css";

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
      setOpen(" open");
      // hamburgerToggle("hamburger-opened-sticky");
      // console.log("Open");
    }
  };

  // console.log(props.showHamburger);
  return (
    <div>
      <div className={menuHide + open} onClick={clicked}>
        {window.innerWidth > 770 ? (
          <Animated
            animationIn="fadeInDownBig"
            animationInDelay={1000}
            animationInDuration={1500}
            triggerOnce={true}
            // isVisible={true}
          >
            <div className="menu-btn__burger"></div>
          </Animated>
        ) : (
          <div className="menu-btn__burger"></div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Hamburger.css";

export default function Hamburger() {
  const [menu, menuToggle] = useState(false);
  const [open, setOpen] = useState("menu-btn");
  // const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");

  // const toggleHamb = () => {
  //   if (hamburgerClosed === "hamburger-closed") {
  //     hamburgerToggle("hamburger-opened-sticky");
  //   } else {
  //     hamburgerToggle("hamburger-closed");
  //   }
  // };

  const clicked = () => {
    if (menu === true) {
      menuToggle(false);
      setOpen("menu-btn");
      // hamburgerToggle("hamburger-closed");
      // console.log("closed");
    } else {
      menuToggle(true);
      setOpen("menu-btn open");
      // hamburgerToggle("hamburger-opened-sticky");
      // console.log("Open");
    }
  };
  return (
    <div>
      <div className={open} onClick={clicked}>
        <Fade fraction={1} delay={1000}>
          <div className="menu-btn__burger"></div>
        </Fade>
      </div>
    </div>
  );
}

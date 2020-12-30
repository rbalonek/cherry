import React, { useState } from "react";
import "./Hamburger.css";

export default function Hamburger() {
  const [menu, menuToggle] = useState(false);
  const [open, setOpen] = useState("menu-btn");

  const clicked = () => {
    if (menu === true) {
      menuToggle(false);
      setOpen("menu-btn");
      // console.log("closed");
    } else {
      menuToggle(true);
      setOpen("menu-btn open");
      // console.log("Open");
    }
  };
  return (
    <div className={open} onClick={clicked}>
      <div className="menu-btn__burger"></div>
    </div>
  );
}

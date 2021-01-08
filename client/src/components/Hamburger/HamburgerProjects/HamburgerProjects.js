import React, { useState } from "react";
import "./HamburgerProjects.css";
import OpenedMenu from "../../OpenedMenu/OpenedMenu";
import OpenedMenuProj from "../../OpenedMenu/OpenedMenuProj/OpenedMenuProj";

export default function HamburgerProjects() {
  const [hambClosed, hambToggle] = useState("menu-btn");
  const [menuClosed, toggleMenu] = useState("closed-menu");

  const toggleHamb = () => {
    if (hambClosed === "menu-btn") {
      hambToggle("menu-btn open");
      toggleMenu("open-menu");
    } else {
      hambToggle("menu-btn");
      toggleMenu("closed-menu");
    }
  };

  return (
    <>
      <div className={menuClosed}>
        <OpenedMenuProj />
      </div>
      <div className={hambClosed} onClick={toggleHamb}>
        <div className="menu-btn__burger" />
      </div>
    </>
  );
}

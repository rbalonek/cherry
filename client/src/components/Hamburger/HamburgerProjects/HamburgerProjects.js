import React, { useState } from "react";
import "./HamburgerProjects.css";
import OpenedMenu from "../../OpenedMenu/OpenedMenu";
import OpenedMenuProj from "../../OpenedMenu/OpenedMenuProj/OpenedMenuProj";

import { useLockBodyScroll, useToggle } from "react-use";

export default function HamburgerProjects() {
  const [hambClosed, hambToggle] = useState("menu-btn proj-menu");
  const [menuClosed, toggleMenu] = useState("closed-menu");
  const [locked, toggleLocked] = useToggle(false);
  useLockBodyScroll(locked);

  const toggleHamb = () => {
    if (hambClosed === "menu-btn proj-menu") {
      hambToggle("menu-btn open proj-menu");
      toggleMenu("open-menu");
      toggleLocked();
    } else {
      hambToggle("menu-btn proj-menu");
      toggleMenu("closed-menu");
      toggleLocked();
    }
  };

  return (
    <div>
      <div className={menuClosed}>
        <OpenedMenuProj />
      </div>
      <div className={hambClosed} onClick={toggleHamb}>
        <div className="menu-btn__burger" />
      </div>
    </div>
  );
}

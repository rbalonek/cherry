import React, { useState } from "react";

export default function HamburgerProjects() {
  const [hambClosed, hambToggle] = useState("menu-btn");

  const toggleHamb = () => {
    if (hambClosed === "menu-btn") {
      hambToggle("menu-btn open");
    } else {
      hambToggle("menu-btn");
    }
  };

  return (
    <div className={hambClosed} onClick={toggleHamb}>
      <div className="menu-btn__burger" />
    </div>
  );
}

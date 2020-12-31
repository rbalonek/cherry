import React from "react";
import "./OpenedMenu.css";

export default function OpenedMenu() {
  return (
    <div className="opened-menu-container">
      <h1 className="hamburger-open-text hover-animation">About</h1>
      <h1 className="hamburger-open-text hover-animation">Say Hi</h1>
      <h1 className="hamburger-open-text hover-animation">LinkedIn</h1>
      <h1 className="hamburger-open-text hover-animation">Instagram</h1>
      <h1 className="hamburger-open-text hover-animation">Twitter</h1>
    </div>
  );
}

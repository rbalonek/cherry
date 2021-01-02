import React from "react";
import { useHistory } from "react-router-dom";

import "./OpenedMenu.css";

export default function OpenedMenu() {
  const history = useHistory();

  return (
    <div className="opened-menu-container">
      <h1
        className="hamburger-open-text hover-animation"
        onClick={() => history.push("/about")}
      >
        About
      </h1>
      <h1 className="hamburger-open-text hover-animation">Say Hi</h1>
      <h1 className="hamburger-open-text hover-animation LinkedIn">LinkedIn</h1>
      <h1 className="hamburger-open-text hover-animation Instagram">
        Just Cuz
      </h1>
      <h1 className="hamburger-open-text hover-animation">Twitter</h1>
    </div>
  );
}

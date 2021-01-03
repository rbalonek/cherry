import React from "react";
import { useHistory } from "react-router-dom";

import "./OpenedMenu.css";

export default function OpenedMenu() {
  const history = useHistory();

  return (
    <div className="opened-menu-container">
      <h1
        className=" hover-animation about"
        onClick={() => history.push("/about")}
      >
        About
      </h1>
      <h1 className=" hover-animation about">Say Hi</h1>
      <h1 className=" hover-animation ">LinkedIn</h1>
      <h1 className=" hover-animation ">Just Cuz</h1>
      <h1 className=" hover-animation about">Twitter</h1>
    </div>
  );
}

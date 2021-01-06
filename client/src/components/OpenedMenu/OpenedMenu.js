import React from "react";
import { useHistory } from "react-router-dom";

import "./OpenedMenu.css";

export default function OpenedMenu() {
  const history = useHistory();

  const clickedAbout = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    setTimeout(() => {
      history.push("/about");
    }, 400);
  };

  return (
    <div className="opened-menu-container">
      <h1 className=" hover-animation about" onClick={clickedAbout}>
        About
      </h1>
      <h1 className=" hover-animation identity">Key Art</h1>
      <h1 className=" hover-animation identity">Identity</h1>
      <h1 className=" hover-animation ">Package</h1>
      <h1 className=" hover-animation about">Ideas</h1>
      <h1 className=" hover-animation about">Say Hi</h1>
    </div>
  );
}

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
      <video
        className="vid-about-opened-menu"
        autoPlay
        loop
        muted
        src="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1609886317/Cherry/Cherry%20Clients/Logos/AdobeStock_326483459_Video_HD_Preview_vahjce.mp4"
      />
      <h1 className=" hover-animation about" onClick={clickedAbout}>
        About
      </h1>
      <h1 className=" hover-animation keyart">Key Art</h1>
      <h1 className=" hover-animation identity">Identity</h1>
      <h1 className=" hover-animation ">Package</h1>
      <h1 className=" hover-animation ideas">Ideas</h1>
      <h1 className=" hover-animation about">Say Hi</h1>
    </div>
  );
}

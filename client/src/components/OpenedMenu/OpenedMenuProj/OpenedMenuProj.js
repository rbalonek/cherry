import React from "react";
import { useHistory } from "react-router-dom";
import "./OpenedMenuProj.css";

export default function OpenedMenuProj() {
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
    <div className="opened-menu-container-proj">
      <video
        className="vid-about-opened-menu-proj"
        autoPlay
        loop
        muted
        src="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1609886317/Cherry/Cherry%20Clients/Logos/AdobeStock_326483459_Video_HD_Preview_vahjce.mp4"
      />
      <h1 className=" hover-animation-proj about-proj" onClick={clickedAbout}>
        About
      </h1>
      <h1 className=" hover-animation-proj keyart-proj">Key Art</h1>
      <h1 className=" hover-animation-proj branding-proj">Branding</h1>
      <h1 className=" hover-animation-proj packaging-proj">Packaging</h1>
      <h1 className=" hover-animation-proj ideas-proj">Ideas</h1>
      <h1 className=" hover-animation-proj about-proj sayhi-proj">Say Hi</h1>
    </div>
  );
}

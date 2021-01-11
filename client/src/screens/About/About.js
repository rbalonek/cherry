import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./About.css";

import xOut from "../../assets/logo/Website-Asset_X.png";

// <img
// alt="logo"
// src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1609886302/Cherry/Cherry%20Clients/Logos/Cherry_Logo_KO3_gfxqdi.png"
// className="about-logo"
// />

export default function About() {
  const [background, changeBackground] = useState("vid-about-hov-menu ");
  const [davidBio, changeDavidBio] = useState("david-bio");
  const [gregBio, changeGregBio] = useState("greg-bio");
  const history = useHistory();

  const hovDavid = () => {
    changeBackground("vid-about-hovered-menu");
    changeDavidBio("david-bio-hovered");
    changeGregBio("greg-bio");
    // changeBackground("vid-about-hov-menu")
  };
  const hovGreg = () => {
    changeBackground("vid-about-hovered-menu");
    changeGregBio("greg-bio-hovered");
    changeDavidBio("david-bio");
  };
  // style={{ height: "100vh" }}
  return (
    <div className="about-container">
      {window.innerWidth > 770 ? (
        <video
          className={background}
          autoPlay
          loop
          muted
          src="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1610303314/Cherry/Cherry%20Clients/Verical_Color_Cherry3_zhtrxp.mp4"
          // src="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1609886317/Cherry/Cherry%20Clients/Logos/AdobeStock_326483459_Video_HD_Preview_vahjce.mp4"
        />
      ) : (
        <div></div>
      )}

      <div className="about-x-container">
        <img
          alt="xOut"
          src={xOut}
          className="about-xOut"
          onClick={() => history.push("/")}
        />
      </div>

      <div className="about-text-container">
        <p className="about-text">
          We're Cherry.
          <br />
          <br /> We are an independent design and communications studio that
          combines creativity and craft into ideas and experiences that improve
          people’s lives. We are an independent design and communications studio
          that combine creativity, craft and technology into ideas and
          experiences that improve people’s lives.
          <br />
          <br /> To make brands that can’t be ignored.
          <br />
          <br /> To accelerate growth.
          <br />
          <br /> To build better futures at scale.
        </p>
      </div>
      <div className="bios-container">
        <div
          className={davidBio}
          onMouseEnter={hovDavid}
          onMouseLeave={() => changeBackground("vid-about-hov-menu")}
        >
          <p className="white title">PARTNER/CREATIVE DIRECTOR</p>
          <h2 className="white name">David Irlanda</h2>
          <p className="white bio-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="white bio-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div
          className={gregBio}
          onMouseEnter={hovGreg}
          onMouseLeave={() => changeBackground("vid-about-hov-menu")}
        >
          <p className="white title">PARTNER/CREATIVE DIRECTOR</p>
          <h2 className="white name">Greg Zadrozny</h2>
          <p className="white bio-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="white bio-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}

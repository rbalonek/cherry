import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Animated } from "react-animated-css";
import "./About.css";

import xOut from "../../assets/logo/Website-Asset_X.png";

// <img
// alt="logo"
// src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1609886302/Cherry/Cherry%20Clients/Logos/Cherry_Logo_KO3_gfxqdi.png"
// className="about-logo"
// />

export default function About() {
  // const [background, changeBackground] = useState("vid-about-hov-menu ");
  // const [davidBio, changeDavidBio] = useState("david-bio");
  // const [gregBio, changeGregBio] = useState("greg-bio");
  const [visible, setVisible] = useState(true);
  const history = useHistory();

  const xClicked = () => {
    setVisible(false);
    setTimeout(() => {
      history.push("/");
    }, 500);
  };

  // const hovDavid = () => {
  //   changeBackground("vid-about-hovered-menu");
  //   changeDavidBio("david-bio-hovered");
  //   changeGregBio("greg-bio");
  //   // changeBackground("vid-about-hov-menu")
  // };
  // const hovGreg = () => {
  //   changeBackground("vid-about-hovered-menu");
  //   changeGregBio("greg-bio-hovered");
  //   changeDavidBio("david-bio");
  // };
  // style={{ height: "100vh" }}
  return (
    <div className="about-container">
      <div className="about-x-container">
        <Animated
          className="about-xOut"
          animationIn="rotateIn"
          animationOut="rotateOut"
          animationInDuration={500}
          animationOutDuration={1000}
          isVisible={visible}
        >
          <img
            alt="xOut"
            src={xOut}
            className="about-xOut"
            onClick={xClicked}
          />
        </Animated>
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
          className="david-bio"
          // onMouseEnter={hovDavid}
          // onMouseLeave={() => changeBackground("vid-about-hov-menu")}
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
          className="greg-bio"
          // onMouseEnter={hovGreg}
          // onMouseLeave={() => changeBackground("vid-about-hov-menu")}
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

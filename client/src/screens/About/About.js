import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./About.css";

import xOut from "../../assets/logo/Website-Asset_X.png";

// <img
// alt="logo"
// src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1609886302/Cherry/Cherry%20Clients/Logos/Cherry_Logo_KO3_gfxqdi.png"
// className="about-logo"
// />

export default function About() {
  const history = useHistory();
  return (
    <div>
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
          people’s lives.
          <br />
          <br />​ We are an independent design and communications studio that
          combine creativity, craft and technology into ideas and experiences
          that improve people’s lives.
          <br />
          <br /> To make brands that can’t be ignored.
          <br />
          <br /> To accelerate growth.
          <br />
          <br /> To build better futures at scale.
        </p>
      </div>
      <div className="bios-container">
        <div className="david-bio">
          <p className="white">PARTNER/CREATIVE DIRECTOR</p>
          <h2 className="white">David Irlanda</h2>
          <p className="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="greg-bio">
          <p className="white">PARTNER/CREATIVE DIRECTOR</p>
          <h2 className="white">Greg Zadrozny</h2>
          <p className="white">
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

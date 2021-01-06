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
    </div>
  );
}

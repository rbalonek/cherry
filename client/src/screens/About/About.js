import React from "react";
import { useHistory } from "react-router-dom";
import "./About.css";
import Footer from "../../components/Footer/Footer";
import AboutHamburger from "../../components/Hamburger/AboutHamburger/AboutHamburger";

export default function About() {
  const history = useHistory();

  const xClicked = () => {
    history.goBack();
  };

  return (
    <div className="about-container">
      <div className="about-x-container" onClick={xClicked}>
        <AboutHamburger />
      </div>

      <div className="about-text-container">
        <p className="about-text">
          This is Cherry.
          <br />
          <br /> We are an independent design and communications studio that
          combines creativity and craft into ideas and experiences that improve
          people’s lives. We are an independent design and communications studio
          that combine creativity, craft and technology into ideas and
          experiences that improve people’s lives.
          <br />
          <br /> To make brands that can’t be ignored.
        </p>
      </div>
      <div className="bios-container">
        <div className="david-bio">
          <h2 className="white name">DAVID IRLANDA</h2>
          <p className="white title">PARTNER/CREATIVE DIRECTOR</p>

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
        <div className="greg-bio">
          <h2 className="white name">GREG ZADROZNY</h2>
          <p className="white title">PARTNER/CREATIVE DIRECTOR</p>

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
      <Footer />
    </div>
  );
}

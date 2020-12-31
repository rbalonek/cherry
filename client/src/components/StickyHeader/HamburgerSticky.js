import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Hamburger from "../Hamburger/Hamburger";
import "./HamburgerSticky.css";

export default function HamburgerSticky() {
  // const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");

  // const toggleHamb = () => {
  //   if (hamburgerClosed === "hamburger-closed") {
  //     hamburgerToggle("hamburger-opened-sticky");
  //   } else {
  //     hamburgerToggle("hamburger-closed");
  //   }
  // };

  return (
    <div>
      <div className="z-index-990  fixed">
        <div className="hamburger-sticky-container">
          <Fade fraction={0.8}>
            <div className="z-index-999 container-hamburger">
              <Hamburger />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

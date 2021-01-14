import React, { useState } from "react";
import "./ProjectsStickyHeader.css";
import Logo from "../../../assets/logo/Cherry-Logo.png";
import { useHistory } from "react-router-dom";
import HamburgerProjects from "../../../components/Hamburger/HamburgerProjects/HamburgerProjects";

// import Hamburger from "../../../components/Hamburger/Hamburger";
// import OpenedMenu from "../../../components/OpenedMenu/OpenedMenu";

export default function ProjectsStickyHeader() {
  // const [hamburgerClosed, hamburgerToggle] = useState("hamburger-closed");
  const history = useHistory();

  // const toggleHamb = () => {
  //   if (hamburgerClosed === "hamburger-closed") {
  //     hamburgerToggle("hamburger-opened-sticky");
  //   } else {
  //     hamburgerToggle("hamburger-closed");
  //   }
  // };

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        marginBottom: "50px",
        zIndex: "999",
      }}
    >
      <img
        onClick={() => history.push("/")}
        style={{
          // width: "150px",
          position: "relative",
          left: "20px",
          top: "20px",
          height: " calc(15px + 7vw)",
          cursor: "pointer",
        }}
        src={Logo}
        alt="logo"
      />

      <div className="hamburger-holder-project">
        <HamburgerProjects />
      </div>
    </div>
  );
}

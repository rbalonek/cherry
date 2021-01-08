import React, { useState } from "react";
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
    <div style={{ position: "sticky", top: "0" }}>
      <img
        onClick={() => history.push("/")}
        style={{ width: "150px" }}
        src={Logo}
        alt="logo"
      />
      <div
        style={{
          position: "relative",
          right: "30px",
          top: "-40px",
          zIndex: "999",
          // backgroundColor: "blue",
        }}
      >
        <HamburgerProjects />
      </div>
    </div>
  );
}

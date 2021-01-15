import React, { useState } from "react";
import "./ProjectsStickyHeader.css";
import Logo from "../../../assets/logo/Cherry-Logo.png";
import { useHistory } from "react-router-dom";
import HamburgerProjects from "../../../components/Hamburger/HamburgerProjects/HamburgerProjects";
import zenscroll from "zenscroll";
// import Hamburger from "../../../components/Hamburger/Hamburger";
// import OpenedMenu from "../../../components/OpenedMenu/OpenedMenu";

export default function ProjectsStickyHeader(props) {
  const history = useHistory();

  const backToFirstProj = () => {
    let pageHeight = window.innerHeight;
    history.push("/");

    setTimeout(() => {
      zenscroll.toY(pageHeight);
    }, 900);
    // zenscroll.intoView(chi);
    // zenscroll.to(chi);
    // window.scrollBy(0, pageHeight);
    // console.log(pageHeight);
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        marginBottom: "5%",
        zIndex: "999",
      }}
    >
      <img
        onClick={backToFirstProj}
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
        <HamburgerProjects videoBackground={props.videoBackground} />
      </div>
    </div>
  );
}

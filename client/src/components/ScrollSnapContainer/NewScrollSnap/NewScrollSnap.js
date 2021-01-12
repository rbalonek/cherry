import React, { useState, useEffect } from "react";
import "./NewScrollSnap.css";
import axios from "axios";
import { Animated } from "react-animated-css";
import StickyHeader from "../../StickyHeader/StickyHeader";
import ProjectsBody from "../../ProjectsBody/ProjectsBody";
import NewHeader from "../../header/NewHeader/NewHeader";
import LogoSticky from "../../StickyHeader/LogoSticky";
import CellTextBlock from "../../CellTextBlock/CellTextBlock";

export default function NewScrollSnap() {
  const [showLogo, toggleShowLogo] = useState("logo-sticky");
  const [showHamburger, toggleShowHamburger] = useState("menu-btn");
  const [headerText, invokeHeaderText] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const apiCall = async () => {
        const data = await axios.get(
          "https://api.airtable.com/v0/appVey7bH2bLRXZsC/headertext?view=Grid%20view",
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
            },
          }
        );
        invokeHeaderText(data.data.records);
        // console.log(headerText);
      };
      apiCall();
    }, 1000);
  }, []);

  const handleClick = () => {
    if (showLogo == "logo-sticky") {
      toggleShowLogo("show-none");
    } else {
      toggleShowLogo("logo-sticky");
    }
  };

  const handleClickHamburger = () => {
    if (showHamburger === "menu-btn") {
      toggleShowHamburger("show-none");
    } else {
      toggleShowHamburger("menu-btn");
    }
  };

  return (
    <div className="new-scrollsnap-container">
      <StickyHeader showHamburger={showHamburger} />

      <div id="header" className="new-header-container">
        <NewHeader headerText={headerText} />
      </div>

      {window.innerWidth < 770 && <CellTextBlock headerText={headerText} />}

      <LogoSticky showLogo={showLogo} />
      <ProjectsBody
        handleClick={handleClick}
        handleClickHamburger={handleClickHamburger}
      ></ProjectsBody>
    </div>
  );
}

// {window.innerWidth > 770 && <StickyHeader />}

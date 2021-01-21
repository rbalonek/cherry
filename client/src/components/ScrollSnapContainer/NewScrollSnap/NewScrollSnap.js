import React, { useState } from "react";
import "./NewScrollSnap.css";
import StickyHeader from "../../StickyHeader/StickyHeader";
import ProjectsBody from "../../ProjectsBody/ProjectsBody";
import NewHeader from "../../header/NewHeader/NewHeader";
import LogoSticky from "../../StickyHeader/LogoSticky";
import CellTextBlock from "../../CellTextBlock/CellTextBlock";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isChrome,
  isFirefox,
  isSafari,
} from "react-device-detect";

export default function NewScrollSnap(props) {
  const [showLogo, toggleShowLogo] = useState("logo-sticky");
  const [showHamburger, toggleShowHamburger] = useState("menu-btn");

  const handleClick = () => {
    if (showLogo === "logo-sticky") {
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
      <StickyHeader
        showHamburger={showHamburger}
        videoBackground={props.videoBackground}
      />

      <div id="header" className="new-header-container">
        <NewHeader
          headerText={props.headerText}
          videoBackground={props.videoBackground}
        />
      </div>

      {isMobile && <CellTextBlock headerText={props.headerText} />}

      {isChrome | isFirefox && <LogoSticky showLogo={showLogo} />}

      <ProjectsBody
        handleClick={handleClick}
        handleClickHamburger={handleClickHamburger}
      ></ProjectsBody>
    </div>
  );
}

// {window.innerWidth > 770 && <StickyHeader />}

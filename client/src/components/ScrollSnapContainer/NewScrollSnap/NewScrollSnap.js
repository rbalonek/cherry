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

  // function detectMouseWheelDirection(e) {
  //   var delta = null,
  //     direction = false;
  //   if (!e) {
  //     // if the event is not provided, we get it from the window object
  //     e = window.event;
  //   }
  //   if (e.wheelDelta) {
  //     // will work in most cases
  //     delta = e.wheelDelta / 60;
  //   } else if (e.detail) {
  //     // fallback for Firefox
  //     delta = -e.detail / 2;
  //   }
  //   if (delta !== null) {
  //     direction = delta > 0 ? "up" : "down";
  //   }

  //   return direction;
  // }
  // function handleMouseWheelDirection(direction) {
  //   console.log(direction); // see the direction in the console
  //   if (direction == "down") {
  //     // do something, like show the next page
  //     let pageHeight = window.innerHeight;
  //     window.scrollBy(0, pageHeight);
  //   } else if (direction == "up") {
  //     // do something, like show the previous page
  //   } else {
  //     // this means the direction of the mouse wheel could not be determined
  //   }
  // }
  // document.onmousewheel = function (e) {
  //   handleMouseWheelDirection(detectMouseWheelDirection(e));
  // };
  // if (window.addEventListener) {
  //   document.addEventListener("DOMMouseScroll", function (e) {
  //     handleMouseWheelDirection(detectMouseWheelDirection(e));
  //   });
  // }

  return (
    <>
      <BrowserView>
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

          {isChrome | isFirefox && <LogoSticky showLogo={showLogo} />}

          <ProjectsBody
            handleClick={handleClick}
            handleClickHamburger={handleClickHamburger}
          ></ProjectsBody>
        </div>
      </BrowserView>

      <MobileView>
        <div className="new-scrollsnap-container">
          <StickyHeader
            showHamburger={showHamburger}
            videoBackground={props.videoBackground}
          />
          <NewHeader
            headerText={props.headerText}
            videoBackground={props.videoBackground}
          />
          <CellTextBlock headerText={props.headerText} />

          <LogoSticky showLogo={showLogo} />

          <ProjectsBody
            handleClick={handleClick}
            handleClickHamburger={handleClickHamburger}
          ></ProjectsBody>
        </div>
      </MobileView>
    </>
  );
}

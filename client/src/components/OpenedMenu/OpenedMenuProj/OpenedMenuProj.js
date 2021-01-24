import React from "react";
import { useHistory } from "react-router-dom";
import "./OpenedMenuProj.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export default function OpenedMenuProj(props) {
  const history = useHistory();

  function handleClick() {
    props.onChildClick();
  }

  const bsidePress = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    setTimeout(() => {
      history.push("/bsides");
      handleClick();
    }, 500);
  };

  const clickedAbout = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    setTimeout(() => {
      history.push("/about");
    }, 400);
  };

  const clickedKeyArt = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    setTimeout(() => {
      history.push("/keyart");
      handleClick();
    }, 400);
  };

  const clickedBranding = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    setTimeout(() => {
      history.push("/branding");
      handleClick();
    }, 400);
  };

  const clickedDesign = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    setTimeout(() => {
      history.push("/design");
      handleClick();
    }, 400);
  };

  return (
    <>
      {isBrowser ? (
        <div className="opened-menu-container-proj">
          <video
            className="vid-about-opened-menu-proj"
            autoPlay
            loop
            muted
            src={props.videoBackground}
            // "https://res.cloudinary.com/bobalobbadingdong/video/upload/v1610664010/Cherry/Videos/vidTurned_rrnxeo.mov"
          />
          <h1
            className=" hover-animation-proj about-proj"
            onClick={clickedAbout}
          >
            ABOUT
          </h1>
          <h1
            className=" hover-animation-proj keyart-proj"
            onClick={clickedKeyArt}
          >
            KEY ART
          </h1>
          <h1
            className=" hover-animation-proj branding-proj"
            onClick={clickedBranding}
          >
            BRANDING
          </h1>
          <h1
            className=" hover-animation-proj packaging-proj"
            onClick={clickedDesign}
          >
            DESIGN
          </h1>
          <h1 className=" hover-animation-proj ideas-proj" onClick={bsidePress}>
            B-SIDES
          </h1>
          <h1 className=" hover-animation-proj about-proj sayhi-proj">
            SAY HI
          </h1>
        </div>
      ) : (
        <div className="opened-menu-container-proj-cell">
          <h1
            className=" hover-animation-proj-mobile about-proj"
            onClick={clickedAbout}
          >
            ABOUT
          </h1>
          <h1
            className=" hover-animation-proj-mobile keyart-proj"
            onClick={clickedKeyArt}
          >
            KEY ART
          </h1>
          <h1
            className=" hover-animation-proj-mobile branding-proj"
            onClick={clickedBranding}
          >
            BRANDING
          </h1>
          <h1
            className=" hover-animation-proj-mobile packaging-proj"
            onClick={clickedDesign}
          >
            DESIGN
          </h1>
          <h1
            className=" hover-animation-proj-mobile ideas-proj"
            onClick={bsidePress}
          >
            B-SIDES
          </h1>
          <h1 className=" hover-animation-proj-mobile about-proj sayhi-proj-mobile">
            SAY HI
          </h1>
        </div>
      )}
    </>
  );
}

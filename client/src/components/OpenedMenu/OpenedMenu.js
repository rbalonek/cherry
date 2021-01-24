import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./OpenedMenu.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export default function OpenedMenu(props) {
  const history = useHistory();
  const [inputHidden, toggleInputHidden] = useState("input-hidden");
  const [showBsides, toggleShowBsides] = useState("hover-animation ideas");
  const [password, confirmPassword] = useState("");

  const confirm = (e) => {
    e.preventDefault();
    (password === "cherry") | (password === "Cherry")
      ? history.push("/bsides")
      : toggleInputHidden("input-hidden");
    toggleShowBsides("hover-animation ideas");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  };

  const bSidePress = () => {
    toggleInputHidden("show");
    toggleShowBsides("hide-b-sides ideas");
    setTimeout(() => {
      document.getElementById("password-field").focus();
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
      toggleInputHidden("input-hidden");
      toggleShowBsides("hover-animation ideas");
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
      toggleInputHidden("input-hidden");
      toggleShowBsides("hover-animation ideas");
    }, 400);
  };

  const brandingClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    setTimeout(() => {
      history.push("/branding");
      toggleInputHidden("input-hidden");
      toggleShowBsides("hover-animation ideas");
    }, 400);
  };

  const designClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    setTimeout(() => {
      history.push("/design");
      toggleInputHidden("input-hidden");
      toggleShowBsides("hover-animation ideas");
    }, 400);
  };

  const clickAway = () => {
    toggleInputHidden("input-hidden");
    toggleShowBsides("hover-animation ideas");
    // console.log("clicked!");
  };

  return (
    <div className="opened-menu-container">
      <div
        onMouseEnter={clickAway}
        style={{
          height: "10%",
          width: "10%",
          // backgroundColor: "red",
          position: "absolute",
          top: ".5%",
          right: ".5%",
          zIndex: "999",
        }}
      />
      {isBrowser ? (
        <video
          // onPlay={myFunction()}
          className="vid-about-opened-menu"
          autoPlay
          loop
          muted
          src={props.videoBackground}
          //"https://res.cloudinary.com/bobalobbadingdong/video/upload/v1610664010/Cherry/Videos/vidTurned_rrnxeo.mov"
        />
      ) : (
        <div></div>
      )}
      <div className="opened-menu-text-container">
        <h1
          id="about"
          className=" hover-animation about"
          onClick={clickedAbout}
        >
          ABOUT
        </h1>
        <h1 className=" hover-animation keyart" onClick={clickedKeyArt}>
          KEY ART
        </h1>
        <h1 className=" hover-animation branding" onClick={brandingClick}>
          BRANDING
        </h1>
        <h1 className=" hover-animation packaging" onClick={designClick}>
          DESIGN
        </h1>
        <h1 id="b-sides" className={showBsides} onClick={bSidePress}>
          B-SIDES
        </h1>
        <form
          id="form-opened-menu"
          className={inputHidden}
          onSubmit={(e) => confirm(e)}
        >
          <input
            id="password-field"
            className="input"
            type="text"
            style={{ textTransform: "uppercase" }}
            onChange={(e) => {
              confirmPassword(e.target.value);
            }}
          />
        </form>

        <h1 className=" hover-animation about sayhi">SAY HI</h1>
      </div>
    </div>
  );
}

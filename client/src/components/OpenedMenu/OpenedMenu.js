import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./OpenedMenu.css";

export default function OpenedMenu(props) {
  const history = useHistory();
  const [inputHidden, toggleInputHidden] = useState("input-hidden");
  const [showBsides, toggleShowBsides] = useState("hover-animation ideas");
  // console.log("VID for HAMB", props.videoBackground);

  const bSidePress = () => {
    toggleInputHidden("input");
    toggleShowBsides("hide-b-sides");

    setTimeout(() => {
      document.getElementById("password-field").focus();
    }, 500);

    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: "auto",
    // });
    // setTimeout(() => {
    //   history.push("/projectsscreen");
    // }, 500);
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

  return (
    <div className="opened-menu-container">
      {window.innerWidth > 770 ? (
        <video
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
        <h1 className=" hover-animation about" onClick={clickedAbout}>
          ABOUT
        </h1>
        <h1
          className=" hover-animation keyart"
          onClick={() => history.push("/keyart")}
        >
          KEY ART
        </h1>
        <h1 className=" hover-animation branding">BRANDING</h1>
        <h1 className=" hover-animation packaging ">DESIGN</h1>
        <h1 id="b-sides" className={showBsides} onClick={bSidePress}>
          B-SIDES
        </h1>

        <input id="password-field" className={inputHidden} type="text" />

        <h1 className=" hover-animation about sayhi">SAY HI</h1>
      </div>
    </div>
  );
}

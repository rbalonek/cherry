import React from "react";
import { useHistory } from "react-router-dom";
import "./OpenedMenu.css";

export default function OpenedMenu(props) {
  const history = useHistory();
  // console.log("VID for HAMB", props.videoBackground);

  const bSidePress = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    setTimeout(() => {
      history.push("/projectsscreen");
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

      <h1 className=" hover-animation about" onClick={clickedAbout}>
        About
      </h1>
      <h1
        className=" hover-animation keyart"
        onClick={() => history.push("/keyart")}
      >
        Key Art
      </h1>
      <h1 className=" hover-animation branding">Branding</h1>
      <h1 className=" hover-animation packaging ">Packaging</h1>
      <h1 className=" hover-animation ideas" onClick={bSidePress}>
        B-Side
      </h1>
      <h1 className=" hover-animation about sayhi">Say Hi</h1>
    </div>
  );
}

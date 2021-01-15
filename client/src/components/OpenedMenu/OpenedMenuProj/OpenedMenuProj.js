import React from "react";
import { useHistory } from "react-router-dom";
import "./OpenedMenuProj.css";

export default function OpenedMenuProj(props) {
  const history = useHistory();
  const bsidePress = () => {
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
    <>
      {window.innerWidth > 770 ? (
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
            About
          </h1>
          <h1
            className=" hover-animation-proj keyart-proj"
            onClick={() => history.push("/keyart")}
          >
            Key Art
          </h1>
          <h1 className=" hover-animation-proj branding-proj">Branding</h1>
          <h1 className=" hover-animation-proj packaging-proj">Packaging</h1>
          <h1 className=" hover-animation-proj ideas-proj" onClick={bsidePress}>
            B-Side
          </h1>
          <h1 className=" hover-animation-proj about-proj sayhi-proj">
            Say Hi
          </h1>
        </div>
      ) : (
        <div className="opened-menu-container-proj-cell">
          <h1
            className=" hover-animation-proj-mobile about-proj"
            onClick={clickedAbout}
          >
            About
          </h1>
          <h1
            className=" hover-animation-proj-mobile keyart-proj"
            onClick={() => history.push("/keyart")}
          >
            Key Art
          </h1>
          <h1 className=" hover-animation-proj branding-proj">Branding</h1>
          <h1 className=" hover-animation-proj packaging-proj">Packaging</h1>
          <h1 className=" hover-animation-proj ideas-proj" onClick={bsidePress}>
            B-Side
          </h1>
          <h1 className=" hover-animation-proj about-proj sayhi-proj-mobile">
            Say Hi
          </h1>
        </div>
      )}
    </>
  );
}

import React from "react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import Video from "../../assets/introVid/VIDEO_Intro 2.mp4";
import "./IntroVid.css";

export default function IntroVid() {
  const VidStyle = {
    contain: "size",
  };
  const history = useHistory();

  setTimeout(() => {
    history.push("/home");
  }, 28000);

  // const closeIntro = () => {

  // }

  return (
    <div
      className="video-intro-container"
      onClick={() => history.push("/home")}
    >
      <ReactPlayer
        playing={true}
        // className="video-player"
        url={Video}
        width={"100vw"}
        height={"120%"}
        style={VidStyle}
      />
    </div>
  );
}

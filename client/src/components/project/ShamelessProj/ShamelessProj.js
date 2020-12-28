import React from "react";
import "./ShamelessProj.css";

import CroppedImg from "../../../assets/shameless/ShamelessCenterImg.png";

export default function Project(props) {
  return (
    <div className="shameless-project-container">
      <div className="shameless-img-container">
        <img className="proj-img" src={CroppedImg} alt={props.img}></img>
      </div>
    </div>
  );
}

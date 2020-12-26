import React from "react";
import "./Project.css";

export default function Project(props) {
  return (
    <div className="project-container">
      <img className="proj-img" src={props.img} alt={props.img}></img>
    </div>
  );
}

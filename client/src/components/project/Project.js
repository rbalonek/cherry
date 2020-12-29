import React from "react";
import "./Project.css";

export default function Project(props) {
  return (
    <div className="project-container">
      <a href={`#${props.scrollToUp}`}>
        <div className="arrow-up-container">
          <div className="arrow-up" />
        </div>
      </a>
      <a href={`#${props.scrollToDown}`}>
        <div className="arrow-down-container" />
      </a>
      <div className="img-container">
        <img className="proj-img" src={props.img} alt={props.img} />
      </div>
    </div>
  );
}

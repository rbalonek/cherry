import React from "react";
import ProjectsStickyHeader from "../Projects/ProjectsStickyHeader/ProjectsStickyHeader";
import "./Bsides.css";
export default function BSides(props) {
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <ProjectsStickyHeader videoBackground={props.videoBackground} />
      <h1 style={{ color: "white", textAlign: "center" }}>B-Sides Screen</h1>
    </div>
  );
}

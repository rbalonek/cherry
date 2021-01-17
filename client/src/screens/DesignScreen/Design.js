import React from "react";
import ProjectsStickyHeader from "../Projects/ProjectsStickyHeader/ProjectsStickyHeader";
import "./Design.css";

export default function Design(props) {
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <ProjectsStickyHeader videoBackground={props.videoBackground} />
      <h1 style={{ color: "white", textAlign: "center" }}>Design Screen</h1>
    </div>
  );
}

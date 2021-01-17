import React from "react";
import ProjectsStickyHeader from "../Projects/ProjectsStickyHeader/ProjectsStickyHeader";
import "./Branding.css";

export default function Branding(props) {
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <ProjectsStickyHeader videoBackground={props.videoBackground} />
      <h1 style={{ color: "white", textAlign: "center" }}>Branding Screen</h1>
    </div>
  );
}

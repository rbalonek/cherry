import React from "react";
import NewScrollSnap from "../../components/ScrollSnapContainer/NewScrollSnap/NewScrollSnap";
import ScrollSnapContainer from "../../components/ScrollSnapContainer/ScrollSnapContainer"; //Find where missing CSS is hiding...

import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-container">
      <NewScrollSnap
        projects={props.projects}
        headerText={props.headerText}
        videoBackground={props.videoBackground}
        highlightedProjects={props.highlightedProjects}
      />
    </div>
  );
}

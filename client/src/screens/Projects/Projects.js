import React from "react";
import "./Projects.css";

import ProjectsNavBar from "./ProjectsNavBar/ProjectsNavBar";
import ProjectsStickyHeader from "./ProjectsStickyHeader/ProjectsStickyHeader";

export default function Projects(props) {
  const projects = props.projects;

  return (
    <div style={{ width: "100vw" }}>
      <ProjectsStickyHeader />
      <ProjectsNavBar />
      <div className="masonry">
        <div className="masonry-brick" />
        <div className="masonry-brick" />
        <div className="masonry-brick" />
        <div className="masonry-brick" />
        <div className="masonry-brick" />
        <div className="masonry-brick" />
      </div>
      {projects.map((project) => (
        <>
          {project.fields.MainProjectPhoto === true && (
            <>
              <p style={{ color: "white" }}>{project.fields.copy}</p>
              <img
                style={{ width: "400px" }}
                alt={project.fields.img1}
                src={project.fields.img1}
              />
            </>
          )}
        </>
      ))}
    </div>
  );
}

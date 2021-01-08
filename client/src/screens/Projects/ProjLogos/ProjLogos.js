import React from "react";
import ProjectsNavBar from "../ProjectsNavBar/ProjectsNavBar";
import ProjectsStickyHeader from "../ProjectsStickyHeader/ProjectsStickyHeader";
import "./ProjLogos.css";

export default function ProjLogos(props) {
  return (
    <div style={{ width: "100vw" }}>
      <ProjectsStickyHeader />
      <ProjectsNavBar />
      {props.projects.map((project) => (
        <>
          {project.fields.logo && (
            <>
              <p style={{ color: "white" }}>{project.fields.logo}</p>
              <img
                style={{ width: "200px" }}
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

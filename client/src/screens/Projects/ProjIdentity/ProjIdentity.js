import React from "react";
import ProjectsNavBar from "../ProjectsNavBar/ProjectsNavBar";
import ProjectsStickyHeader from "../ProjectsStickyHeader/ProjectsStickyHeader";
import "./ProjIdentity.css";

export default function ProjIdentity(props) {
  return (
    <div style={{ width: "100vw" }}>
      <ProjectsStickyHeader />
      <ProjectsNavBar />
      {props.projects.map((project) => (
        <>
          {project.fields.identity && (
            <>
              <p style={{ color: "white" }}>{project.fields.identity}</p>
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

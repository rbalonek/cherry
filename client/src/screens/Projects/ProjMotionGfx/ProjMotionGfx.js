import React from "react";
import ProjectsNavBar from "../ProjectsNavBar/ProjectsNavBar";
import ProjectsStickyHeader from "../ProjectsStickyHeader/ProjectsStickyHeader";
import "./ProjMotionGfx.css";

export default function ProjMotionGfx(props) {
  return (
    <div style={{ height: "100vh" }}>
      <ProjectsStickyHeader />
      <ProjectsNavBar />
      {props.projects.map((project) => (
        <>
          {project.fields.motiongfx && (
            <>
              <p style={{ color: "white" }}>{project.fields.motiongfx}</p>
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

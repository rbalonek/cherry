import React from "react";
import ProjectsNavBar from "../ProjectsNavBar/ProjectsNavBar";
import ProjectsStickyHeader from "../ProjectsStickyHeader/ProjectsStickyHeader";
import "./ProjLogos.css";

export default function ProjLogos(props) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ProjectsStickyHeader />
      <ProjectsNavBar />
      {props.projects.map((project) => (
        <>
          {project.fields.logo && (
            <>
              <img
                style={{ width: "200px", padding: "20px" }}
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

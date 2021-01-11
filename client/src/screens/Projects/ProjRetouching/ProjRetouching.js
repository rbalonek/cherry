import React from "react";
import ProjectsNavBar from "../ProjectsNavBar/ProjectsNavBar";
import ProjectsStickyHeader from "../ProjectsStickyHeader/ProjectsStickyHeader";

export default function ProjRetouching(props) {
  return (
    <div style={{ height: "100vh" }}>
      <ProjectsStickyHeader />
      <ProjectsNavBar />
      {props.projects.map((project) => (
        <>
          {project.fields.retouching && (
            <>
              <p style={{ color: "white" }}>{project.fields.retouching}</p>
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

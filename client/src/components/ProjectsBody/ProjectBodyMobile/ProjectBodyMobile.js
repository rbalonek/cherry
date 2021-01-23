import React from "react";
import "./ProjectBodyMobile.css";

export default function ProjectBodyMobile(props) {
  return (
    <>
      {props.highlightedProjects.map((project) => (
        <div>
          <img
            className="mobile-highlighted-proj-img"
            id={project.fields.idname}
            alt={project.fields.idname}
            src={project.fields.cellimg1}
          />
        </div>
      ))}
    </>
  );
}

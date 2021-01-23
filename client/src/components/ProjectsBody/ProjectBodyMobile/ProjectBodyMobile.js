import React from "react";
import "./ProjectBodyMobile.css";

export default function ProjectBodyMobile(props) {
  return (
    <>
      {props.highlightedProjects.map((project) => (
        <div>
          <img
            style={{ height: "300px", width: "100%" }}
            id={project.fields.idname}
            alt={project.fields.idname}
            src={project.fields.cellimg1}
          />
        </div>
      ))}
    </>
  );
}

import React from "react";
import "./ProjCopy.css";

export default function ProjCopy(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <>
          {project.fields.copy && (
            <>
              <p style={{ color: "white" }}>{project.fields.copy}</p>
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

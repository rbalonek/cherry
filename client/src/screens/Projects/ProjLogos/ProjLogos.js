import React from "react";
import "./ProjLogos.css";

export default function ProjLogos(props) {
  return (
    <div>
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

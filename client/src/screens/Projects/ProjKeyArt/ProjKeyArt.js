import React from "react";
import "./ProjKeyArt.css";

export default function ProjKeyArt(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <>
          {project.fields.keyart && (
            <>
              <p style={{ color: "white" }}>{project.fields.keyart}</p>
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

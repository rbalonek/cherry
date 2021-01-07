import React from "react";
import "./ProjMotionGfx.css";

export default function ProjMotionGfx(props) {
  return (
    <div>
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

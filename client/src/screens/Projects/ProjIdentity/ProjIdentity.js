import React from "react";

export default function ProjIdentity(props) {
  return (
    <div>
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

import React from "react";

export default function ProjPhotoArtDirection(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <>
          {project.fields.photoartdirection && (
            <>
              <p style={{ color: "white" }}>
                {project.fields.photoartdirection}
              </p>
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

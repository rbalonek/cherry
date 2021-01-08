import React from "react";
import "./Projects.css";
import { Fade } from "react-awesome-reveal";

import ProjectsNavBar from "./ProjectsNavBar/ProjectsNavBar";
import ProjectsStickyHeader from "./ProjectsStickyHeader/ProjectsStickyHeader";

export default function Projects(props) {
  const projects = props.projects;

  return (
    <div style={{ width: "100vw" }}>
      <ProjectsStickyHeader />
      <ProjectsNavBar />

      <div className="masonry">
        {projects.map((project) => (
          <>
            {project.fields.MainProjectPhoto === true && (
              <>
                <div className="masonry-brick">
                  <img
                    style={{
                      // height: " -webkit-fill-available",
                      // height: "250px",
                      // width: "unset",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      // overflow: "hidden",
                    }}
                    alt={project.fields.img1}
                    src={project.fields.img1}
                  />
                </div>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

// <div
//                     style={{
//                       backgroundImage: `url( ${project.fields.img1} )`,
//                       height: "100%",
//                       width: "auto",
//                       backgroundPosition: "center",
//                       backgroundSize: "cover",
//                       backgroundRepeat: "no-repeat",
//                     }}
//                   />

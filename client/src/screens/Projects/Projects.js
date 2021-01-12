import React from "react";
import "./Projects.css";
import { Fade } from "react-awesome-reveal";
import { Animated } from "react-animated-css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import ProjectsNavBar from "./ProjectsNavBar/ProjectsNavBar";
import ProjectsStickyHeader from "./ProjectsStickyHeader/ProjectsStickyHeader";

export default function Projects(props) {
  const projects = props.projects;

  return (
    <div className="projects-screen-container">
      <ProjectsStickyHeader />
      <ProjectsNavBar />
      <div className="project-list-container">
        <div className="project-container-split">
          <div className="project-list-left">
            {projects.map((project) => (
              <>
                {project.fields.leftColumn === true && (
                  <>
                    {project.fields.MainProjectPhoto === true && (
                      <>
                        {project.fields.mainPhotoLarge === true && (
                          <div
                            className="projects-screen-projects-large"
                            style={{
                              backgroundImage: `url(${project.fields.img1})`,
                              backgroundSize: "100% 100%",
                              backgroundPosition: "center",
                            }}
                          />
                        )}
                        {project.fields.mainPhotoSmall === true && (
                          <div
                            className="projects-screen-projects-small"
                            style={{
                              backgroundImage: `url(${project.fields.img1})`,
                              backgroundSize: "100% 100%",
                              backgroundPosition: "center",
                            }}
                          />
                        )}
                        {project.fields.mainPhotoWide === true && (
                          <div
                            className="projects-screen-projects-wide"
                            style={{
                              backgroundImage: `url(${project.fields.img1})`,
                              backgroundSize: "70% 100%",
                              backgroundPosition: "center",
                            }}
                          />
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            ))}
          </div>

          <div className="project-list-right">
            {projects.map((project) => (
              <>
                {project.fields.rightColumn === true && (
                  <>
                    {project.fields.MainProjectPhoto === true && (
                      <>
                        {project.fields.mainPhotoLarge === true && (
                          <div
                            className="projects-screen-projects-large"
                            style={{
                              backgroundImage: `url(${project.fields.img1})`,
                              backgroundSize: "100% 100%",
                              backgroundPosition: "center",
                            }}
                          />
                        )}
                        {project.fields.mainPhotoSmall === true && (
                          <div
                            className="projects-screen-projects-small"
                            style={{
                              backgroundImage: `url(${project.fields.img1})`,
                              backgroundSize: "100% 100%",
                              backgroundPosition: "center",
                            }}
                          />
                        )}
                        {project.fields.mainPhotoWide === true && (
                          <div
                            className="projects-screen-projects-wide"
                            style={{
                              backgroundImage: `url(${project.fields.img1})`,
                              backgroundSize: "100% 100%",
                              backgroundPosition: "center",
                            }}
                          />
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="masonry">
//         {projects.map((project) => (
//           <>
// {project.fields.MainProjectPhoto === true && (
//   <>
//     {project.fields.mainPhotoLarge === true && (
//       <Animated animationIn="fadeInUp">
//         <div
//           className="projects-screen-projects-large"
//           style={{
//             backgroundImage: `url(${project.fields.img1})`,
//             backgroundSize: "100% 100%",
//             backgroundPosition: "center",
//           }}
//         ></div>
//       </Animated>
//     )}
//     {project.fields.mainPhotoSmall === true && (
//       <Fade>
//         <img
//           className="projects-screen-projects-small"
//           alt={project.fields.img1}
//           src={project.fields.img1}
//         />
//       </Fade>
//     )}
//     {project.fields.mainPhotoWide === true && (
//       <Fade>
//         <img
//           className="projects-screen-projects-wide"
//           alt={project.fields.img1}
//           src={project.fields.img1}
//         />
//       </Fade>
//     )}
//   </>
// )}
//           </>
//         ))}
//       </div>

///////////////////////////////////////////////////////

// {project.fields.MainProjectPhoto === true && (
//   <>
//     {project.fields.mainPhotoLarge === true && (
//       <Animated animationIn="fadeInUp">
//         <div
//           className="projects-screen-projects-large"
//           style={{
//             backgroundImage: `url(${project.fields.img1})`,
//             backgroundSize: "100% 100%",
//             backgroundPosition: "center",
//           }}
//         ></div>
//       </Animated>
//     )}
//     {project.fields.mainPhotoSmall === true && (
//       <Fade>
// <img
//   className="projects-screen-projects-small"
//   alt={project.fields.img1}
//   src={project.fields.img1}
// />
//       </Fade>
//     )}
//     {project.fields.mainPhotoWide === true && (
//       <Fade>
//         <img
//           className="projects-screen-projects-wide"
//           alt={project.fields.img1}
//           src={project.fields.img1}
//         />
//       </Fade>
//     )}
//   </>
// )}

///////////////////////////////////////////////////
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

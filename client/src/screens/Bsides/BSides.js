import React from "react";
import ProjectsStickyHeader from "../Projects/ProjectsStickyHeader/ProjectsStickyHeader";
import "./Bsides.css";
import { Fade } from "react-awesome-reveal";
import { useHistory } from "react-router-dom";

export default function BSides(props) {
  const history = useHistory();
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <ProjectsStickyHeader videoBackground={props.videoBackground} />
      <div className="project-full-width" />
      <div className="list-container">
        <div className="container-split">
          <div className="list-left">
            <div class="masonry-img">
              {props.projects.map((project) => (
                <>
                  {project.fields.mainPhotoWide === true && (
                    <Fade
                      direction={"up"}
                      duration={2000}
                      fraction={Math.random()}
                      triggerOnce={true}
                      className="project-left-large"
                    >
                      <div
                        onMouseEnter={() => {
                          var el = document.getElementById(project.fields.id);
                          el.classList.toggle("show-proj-info");
                          el.classList.toggle("hide-element");
                        }}
                        onMouseLeave={() => {
                          var el = document.getElementById(project.fields.id);
                          el.classList.toggle("show-proj-info");
                          el.classList.toggle("hide-element");
                        }}
                        class="project-left-large"
                        style={{
                          backgroundImage: `url(${project.fields.img1})`,
                        }}
                      >
                        <div
                          id={project.fields.id}
                          className="hide-element"
                          // onClick={() =>
                          //   history.push(
                          //     `/project/${project.fields.projectname}`
                          //   )
                          // }
                        >
                          <Fade direction={"up"} duration={500} cascade={true}>
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Rubik",
                                fontWeight: "900",
                                fontSize: "calc(15px + 1vw)",
                              }}
                            >
                              {project.fields.projectname}
                            </p>

                            <p
                              style={{
                                color: "white",
                                fontFamily: "Rubik",
                                fontWeight: "300",
                                fontSize: "calc(5px + 1vw)",
                                marginTop: "-30%",
                              }}
                            >
                              {project.fields.client}
                            </p>
                          </Fade>
                        </div>
                      </div>
                    </Fade>
                  )}

                  {project.fields.mainPhotoSmall === true && (
                    <Fade
                      direction={"up"}
                      duration={2000}
                      fraction={Math.random()}
                      triggerOnce={true}
                      className="project-left-small"
                    >
                      <div
                        onMouseEnter={() => {
                          var el = document.getElementById(project.fields.id);
                          el.classList.toggle("show-proj-info");
                          el.classList.toggle("hide-element");
                        }}
                        onMouseLeave={() => {
                          var el = document.getElementById(project.fields.id);
                          el.classList.toggle("show-proj-info");
                          el.classList.toggle("hide-element");
                        }}
                        class="project-left-small"
                        style={{
                          backgroundImage: `url(${project.fields.img1})`,
                        }}
                      >
                        <div
                          id={project.fields.id}
                          className="hide-element"
                          // onClick={() =>
                          //   history.push(
                          //     `/project/${project.fields.projectname}`
                          //   )
                          // }
                        >
                          <Fade direction={"up"} duration={500} cascade={true}>
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Rubik",
                                fontWeight: "900",
                                fontSize: "calc(15px + 1vw)",
                              }}
                            >
                              {project.fields.projectname}
                            </p>

                            <p
                              style={{
                                color: "white",
                                fontFamily: "Rubik",
                                fontWeight: "300",
                                fontSize: "calc(5px + 1vw)",
                                marginTop: "-30%",
                              }}
                            >
                              {project.fields.client}
                            </p>
                          </Fade>
                        </div>
                      </div>
                    </Fade>
                  )}
                </>
              ))}
            </div>
          </div>

          <div className="list-right">
            <div className="project-right-small" />
            <div className="project-right-tall" />
            <div className="project-right-small" />
            <div className="project-right-small" />
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="project-full-width" />
// <div className="list-container">
//   <div className="container-split">
//     <div className="list-left">
//       <div className="project-left-small" />
//       <div className="project-left-small" />
//       <div className="project-left-small" />
//       <div className="project-left-small" />
//       <div className="project-left-large" />
//     </div>

//     <div className="list-right">
// <div className="project-right-small" />
// <div className="project-right-tall" />
// <div className="project-right-small" />
// <div className="project-right-small" />
//     </div>
//   </div>
// </div>

////////////////////////===================================
// {props.projects.map((project) => (
//   <>
//     {project.fields.BsidesPage === true && (
//       <>
//         {project.fields.FullWidth === true && (
//           <Fade
//             direction={"up"}
//             duration={2000}
//             fraction={Math.random()}
//             triggerOnce={true}
//             className="project-full-width"
//           >
//             <div
//               onMouseEnter={() => {
//                 var el = document.getElementById(project.fields.id);
//                 el.classList.toggle("show-proj-info");
//                 el.classList.toggle("hide-element");
//               }}
//               onMouseLeave={() => {
//                 var el = document.getElementById(project.fields.id);
//                 el.classList.toggle("show-proj-info");
//                 el.classList.toggle("hide-element");
//               }}
//               class="project-full-width"
//               style={{
//                 backgroundImage: `url(${project.fields.img1})`,
//               }}
//             >
//               <div id={project.fields.id} className="hide-element">
//                 <Fade direction={"up"} duration={500} cascade={true}>
//                   <p
//                     style={{
//                       color: "white",
//                       fontFamily: "Rubik",
//                       fontWeight: "900",
//                       fontSize: "calc(15px + 1vw)",
//                     }}
//                   >
//                     {project.fields.projectname}
//                   </p>

//                   <p
//                     style={{
//                       color: "white",
//                       fontFamily: "Rubik",
//                       fontWeight: "300",
//                       fontSize: "calc(5px + 1vw)",
//                       marginTop: "-30%",
//                     }}
//                   >
//                     {project.fields.client}
//                   </p>
//                 </Fade>
//               </div>
//             </div>
//           </Fade>
//         )}
//       </>
//     )}
//   </>
// ))}
// {props.projects.map((project) => (
//   <>
//     <div className="list-container">
//       <div className="container-split">
//         <div className="list-left">
// {project.fields.SmallLeftBox === true && (
//   <Fade
//     direction={"up"}
//     duration={2000}
//     fraction={Math.random()}
//     triggerOnce={true}
//     className="project-left-small"
//   >
//     <div
//       onMouseEnter={() => {
//         var el = document.getElementById(project.fields.id);
//         el.classList.toggle("show-proj-info");
//         el.classList.toggle("hide-element");
//       }}
//       onMouseLeave={() => {
//         var el = document.getElementById(project.fields.id);
//         el.classList.toggle("show-proj-info");
//         el.classList.toggle("hide-element");
//       }}
//       class="project-left-small"
//       style={{
//         backgroundImage: `url(${project.fields.img1})`,
//       }}
//     >
//       <div id={project.fields.id} className="hide-element">
//         <Fade direction={"up"} duration={500} cascade={true}>
//           <p
//             style={{
//               color: "white",
//               fontFamily: "Rubik",
//               fontWeight: "900",
//               fontSize: "calc(15px + 1vw)",
//             }}
//           >
//             {project.fields.projectname}
//           </p>

//           <p
//             style={{
//               color: "white",
//               fontFamily: "Rubik",
//               fontWeight: "300",
//               fontSize: "calc(5px + 1vw)",
//               marginTop: "-30%",
//             }}
//           >
//             {project.fields.client}
//           </p>
//         </Fade>
//       </div>
//     </div>
//   </Fade>
// )}
//         </div>

//         <div className="list-right"></div>
//       </div>
//     </div>
//   </>
// ))}

////////////////////////===================================

// <h1 style={{ color: "white", textAlign: "center" }}>B-Sides Screen</h1>
//       <div>
// {props.projects.map((project) => (
//   <>
//     {project.fields.BsidesPage === true && (
// <Fade
//   direction={"up"}
//   duration={2000}
//   fraction={Math.random()}
//   triggerOnce={true}
//   className="masonry-brick-img-full"
// >
//   <div
//     onMouseEnter={() => {
//       var el = document.getElementById(project.fields.id);
//       el.classList.toggle("show-proj-info");
//       el.classList.toggle("hide-element");
//     }}
//     onMouseLeave={() => {
//       var el = document.getElementById(project.fields.id);
//       el.classList.toggle("show-proj-info");
//       el.classList.toggle("hide-element");
//     }}
//     class="masonry-brick-img-full"
//     style={{
//       backgroundImage: `url(${project.fields.img1})`,
//     }}
//   >
//     <div id={project.fields.id} className="hide-element">
//       <Fade direction={"up"} duration={500} cascade={true}>
//         <p
//           style={{
//             color: "white",
//             fontFamily: "Rubik",
//             fontWeight: "900",
//             fontSize: "calc(15px + 1vw)",
//           }}
//         >
//           {project.fields.projectname}
//         </p>

//         <p
//           style={{
//             color: "white",
//             fontFamily: "Rubik",
//             fontWeight: "300",
//             fontSize: "calc(5px + 1vw)",
//             marginTop: "-30%",
//           }}
//         >
//           {project.fields.client}
//         </p>
//       </Fade>
//     </div>
//   </div>
// </Fade>
//     )}
//   </>
// ))}
//       </div>

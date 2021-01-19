import React from "react";
import { Fade } from "react-awesome-reveal";
import ProjectsStickyHeader from "../Projects/ProjectsStickyHeader/ProjectsStickyHeader";
import "./Branding.css";
import { useHistory } from "react-router-dom";

export default function Branding(props) {
  // console.log(props);
  const history = useHistory();

  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <ProjectsStickyHeader videoBackground={props.videoBackground} />

      <div className="masonry-img">
        {props.projects.map((project) => (
          <>
            {(project.fields.Branding === true) |
              (project.fields.Logo === true) && (
              <>
                {project.fields.mainPhotoLarge === true && (
                  <>
                    <Fade
                      direction={"up"}
                      duration={2000}
                      fraction={Math.random()}
                      triggerOnce={true}
                      className=" masonry-brick-img-full-key-art"
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
                        className=" masonry-brick-img-full-key-art"
                        style={{
                          backgroundImage: `url(${project.fields.img1})`,
                          // backgroundSize: "100% 100%",
                          // backgroundPosition: "center",
                          // objectFit: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div
                          id={project.fields.id}
                          className="hide-element"
                          onClick={() =>
                            history.push(
                              `/project/${project.fields.projectname}`
                            )
                          }
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
                  </>
                )}

                {project.fields.mainPhotoWide === true && (
                  <>
                    <Fade
                      direction={"up"}
                      duration={2000}
                      fraction={Math.random()}
                      triggerOnce={true}
                      className="masonry-brick-img-wide-key-art"
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
                        onClick={() =>
                          history.push(`/project/${project.fields.projectname}`)
                        }
                        className="masonry-brick-img-wide-key-art"
                        style={{
                          backgroundImage: `url(${project.fields.img1})`,
                          backgroundSize: "100% 100%",
                          backgroundPosition: "center",
                          objectFit: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div id={project.fields.id} className="hide-element">
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
                  </>
                )}

                {project.fields.mainPhotoSmall === true && (
                  <>
                    <Fade
                      direction={"up"}
                      duration={2000}
                      fraction={Math.random()}
                      triggerOnce={true}
                      className="masonry-brick-img-sm-key-art"
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
                        onClick={() =>
                          history.push(`/project/${project.fields.projectname}`)
                        }
                        className="masonry-brick-img-sm-key-art"
                        style={{
                          backgroundImage: `url(${project.fields.img1})`,
                          // backgroundSize: "100% 100%",
                          backgroundPosition: "center",
                          objectFit: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div id={project.fields.id} className="hide-element">
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
                  </>
                )}
              </>
            )}
            )}
          </>
        ))}
      </div>
    </div>
  );
}

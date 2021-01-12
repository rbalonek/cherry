import React, { useState } from "react";
import "./Projects.css";
import { Fade } from "react-awesome-reveal";
import { Animated } from "react-animated-css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import ProjectsNavBar from "./ProjectsNavBar/ProjectsNavBar";
import ProjectsStickyHeader from "./ProjectsStickyHeader/ProjectsStickyHeader";
import ClickableSliderCell from "../../slider/ClickableSlider/ClickableSliderCell/ClickableSliderCell";
import ClickableSlider from "../../slider/ClickableSlider/ClickableSlider";
import Slider from "../../slider/Slider";
import { useHistory } from "react-router-dom";

export default function Projects(props) {
  const [hiddenCarousel, setHiddenCarousel] = useState("hide-element");
  const projects = props.projects;
  const history = useHistory();

  const toggleCarousel = () => {
    if (hiddenCarousel === "hide-element") {
      setHiddenCarousel("full-screen-carousel");
    } else {
      setHiddenCarousel("hide-element");
    }
  };

  return (
    <div className="projects-screen-container">
      <ProjectsStickyHeader />
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
                          <>
                            <Fade
                              direction={"up"}
                              fraction={0.2}
                              triggerOnce={true}
                              className="projects-screen-projects-large"
                            >
                              <div
                                onMouseEnter={() => {
                                  var el = document.getElementById(
                                    project.fields.id
                                  );
                                  el.classList.toggle("show-proj-info");
                                  el.classList.toggle("hide-element");
                                }}
                                onMouseLeave={() => {
                                  var el = document.getElementById(
                                    project.fields.id
                                  );
                                  el.classList.toggle("show-proj-info");
                                  el.classList.toggle("hide-element");
                                }}
                                className="projects-screen-projects-large"
                                style={{
                                  backgroundImage: `url(${project.fields.img1})`,
                                  backgroundSize: "100% 90%",
                                  backgroundPosition: "center",
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
                                  <Animated
                                    animationIn="fadeInUp"
                                    animationInDuration={500}
                                  >
                                    <p
                                      style={{
                                        color: "white",
                                        fontFamily: "AkzidenzGroteskBE-BoldEx",
                                        fontSize: "calc(15px + 1vw)",
                                      }}
                                    >
                                      {project.fields.projectname}
                                    </p>

                                    <p
                                      style={{
                                        color: "white",
                                        fontFamily: "degular",
                                        fontSize: "calc(15px + 1vw)",
                                      }}
                                    >
                                      {project.fields.client}
                                    </p>
                                  </Animated>
                                </div>
                              </div>
                            </Fade>
                          </>
                        )}
                        {project.fields.mainPhotoSmall === true && (
                          <>
                            <Fade
                              direction={"up"}
                              fraction={0.2}
                              triggerOnce={true}
                              className="projects-screen-projects-small"
                            >
                              <div
                                onMouseEnter={() => {
                                  var el = document.getElementById(
                                    project.fields.id
                                  );
                                  el.classList.toggle("show-proj-info");
                                  el.classList.toggle("hide-element");
                                }}
                                onMouseLeave={() => {
                                  var el = document.getElementById(
                                    project.fields.id
                                  );
                                  el.classList.toggle("show-proj-info");
                                  el.classList.toggle("hide-element");
                                }}
                                className="projects-screen-projects-small"
                                style={{
                                  backgroundImage: `url(${project.fields.img1})`,
                                  backgroundSize: "100% 100%",
                                  backgroundPosition: "center",
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
                                  <Animated
                                    animationIn="fadeInUp"
                                    animationInDuration={500}
                                    cascade
                                  >
                                    <p
                                      style={{
                                        color: "white",
                                        fontFamily: "AkzidenzGroteskBE-BoldEx",
                                        fontSize: "calc(15px + 1vw)",
                                      }}
                                    >
                                      {project.fields.projectname}
                                    </p>

                                    <p
                                      style={{
                                        color: "white",
                                        fontFamily: "degular",
                                        fontSize: "calc(15px + 1vw)",
                                      }}
                                    >
                                      {project.fields.client}
                                    </p>
                                  </Animated>
                                </div>
                              </div>
                            </Fade>
                          </>
                        )}
                        {project.fields.mainPhotoWide === true && (
                          <Fade
                            direction={"up"}
                            fraction={0.2}
                            triggerOnce={true}
                            className="projects-screen-projects-wide"
                          >
                            <div
                              onMouseEnter={() => {
                                var el = document.getElementById(
                                  project.fields.id
                                );
                                el.classList.toggle("show-proj-info");
                                el.classList.toggle("hide-element");
                              }}
                              onMouseLeave={() => {
                                var el = document.getElementById(
                                  project.fields.id
                                );
                                el.classList.toggle("show-proj-info");
                                el.classList.toggle("hide-element");
                              }}
                              className="projects-screen-projects-wide"
                              style={{
                                backgroundImage: `url(${project.fields.img1})`,
                                backgroundSize: "100% 95%",
                                backgroundPosition: "center",
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
                                <Animated
                                  animationIn="fadeInUp"
                                  animationInDuration={500}
                                  cascade
                                >
                                  <p
                                    style={{
                                      color: "white",
                                      fontFamily: "AkzidenzGroteskBE-BoldEx",
                                      fontSize: "calc(15px + 1vw)",
                                    }}
                                  >
                                    {project.fields.projectname}
                                  </p>

                                  <p
                                    style={{
                                      color: "white",
                                      fontFamily: "degular",
                                      fontSize: "calc(15px + 1vw)",
                                    }}
                                  >
                                    {project.fields.client}
                                  </p>
                                </Animated>
                              </div>
                            </div>
                          </Fade>
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
                          <Fade
                            direction={"up"}
                            fraction={0.2}
                            triggerOnce={true}
                            className="projects-screen-projects-large"
                          >
                            <div
                              onMouseEnter={() => {
                                var el = document.getElementById(
                                  project.fields.id
                                );
                                el.classList.toggle("show-proj-info");
                                el.classList.toggle("hide-element");
                              }}
                              onMouseLeave={() => {
                                var el = document.getElementById(
                                  project.fields.id
                                );
                                el.classList.toggle("show-proj-info");
                                el.classList.toggle("hide-element");
                              }}
                              className="projects-screen-projects-large"
                              style={{
                                backgroundImage: `url(${project.fields.img1})`,
                                backgroundSize: "100% 90%",
                                backgroundPosition: "center",
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
                                <Animated
                                  animationIn="fadeInUp"
                                  animationInDuration={500}
                                  cascade
                                >
                                  <p
                                    style={{
                                      color: "white",
                                      fontFamily: "AkzidenzGroteskBE-BoldEx",
                                      fontSize: "calc(15px + 1vw)",
                                    }}
                                  >
                                    {project.fields.projectname}
                                  </p>

                                  <p
                                    style={{
                                      color: "white",
                                      fontFamily: "degular",
                                      fontSize: "calc(15px + 1vw)",
                                    }}
                                  >
                                    {project.fields.client}
                                  </p>
                                </Animated>
                              </div>
                            </div>
                          </Fade>
                        )}
                        {project.fields.mainPhotoSmall === true && (
                          <Fade
                            direction={"up"}
                            fraction={0.2}
                            triggerOnce={true}
                            className="projects-screen-projects-small"
                          >
                            <div
                              onMouseEnter={() => {
                                var el = document.getElementById(
                                  project.fields.id
                                );
                                el.classList.toggle("show-proj-info");
                                el.classList.toggle("hide-element");
                              }}
                              onMouseLeave={() => {
                                var el = document.getElementById(
                                  project.fields.id
                                );
                                el.classList.toggle("show-proj-info");
                                el.classList.toggle("hide-element");
                              }}
                              className="projects-screen-projects-small"
                              style={{
                                backgroundImage: `url(${project.fields.img1})`,
                                backgroundSize: "100% 100%",
                                backgroundPosition: "center",
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
                                <Animated
                                  animationIn="fadeInUp"
                                  animationInDuration={500}
                                  cascade
                                >
                                  <p
                                    style={{
                                      color: "white",
                                      fontFamily: "AkzidenzGroteskBE-BoldEx",
                                      fontSize: "calc(15px + 1vw)",
                                    }}
                                  >
                                    {project.fields.projectname}
                                  </p>

                                  <p
                                    style={{
                                      color: "white",
                                      fontFamily: "degular",
                                      fontSize: "calc(15px + 1vw)",
                                    }}
                                  >
                                    {project.fields.client}
                                  </p>
                                </Animated>
                              </div>
                            </div>
                          </Fade>
                        )}
                        {project.fields.mainPhotoWide === true && (
                          <Fade
                            direction={"up"}
                            fraction={0.2}
                            triggerOnce={true}
                            className="projects-screen-projects-wide"
                          >
                            <div
                              onMouseEnter={() => {
                                var el = document.getElementById(
                                  project.fields.id
                                );
                                el.classList.toggle("show-proj-info");
                                el.classList.toggle("hide-element");
                              }}
                              onMouseLeave={() => {
                                var el = document.getElementById(
                                  project.fields.id
                                );
                                el.classList.toggle("show-proj-info");
                                el.classList.toggle("hide-element");
                              }}
                              className="projects-screen-projects-wide"
                              style={{
                                backgroundImage: `url(${project.fields.img1})`,
                                backgroundSize: "100% 90%",
                                backgroundPosition: "center",
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
                                <Animated
                                  animationIn="fadeInUp"
                                  animationInDuration={500}
                                  cascade
                                >
                                  <p
                                    style={{
                                      color: "white",
                                      fontFamily: "AkzidenzGroteskBE-BoldEx",
                                      fontSize: "calc(15px + 1vw)",
                                    }}
                                  >
                                    {project.fields.projectname}
                                  </p>

                                  <p
                                    style={{
                                      color: "white",
                                      fontFamily: "degular",
                                      fontSize: "calc(15px + 1vw)",
                                    }}
                                  >
                                    {project.fields.client}
                                  </p>
                                </Animated>
                              </div>
                            </div>
                          </Fade>
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

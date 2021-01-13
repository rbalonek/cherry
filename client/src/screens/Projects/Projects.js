import React from "react";
import "./Projects.css";
import { Fade } from "react-awesome-reveal";
import ProjectsStickyHeader from "./ProjectsStickyHeader/ProjectsStickyHeader";
import { useHistory } from "react-router-dom";

export default function Projects(props) {
  const projects = props.projects;
  const history = useHistory();

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
                                  <Fade
                                    direction={"up"}
                                    duration={500}
                                    cascade={true}
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
                                  <Fade
                                    direction={"up"}
                                    duration={500}
                                    cascade={true}
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
                                  </Fade>
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
                                <Fade
                                  direction={"up"}
                                  duration={500}
                                  cascade={true}
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
                                </Fade>
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
                                <Fade
                                  direction={"up"}
                                  duration={500}
                                  cascade={true}
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
                                </Fade>
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
                                <Fade
                                  direction={"up"}
                                  duration={500}
                                  cascade={true}
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
                                </Fade>
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
                                <Fade
                                  direction={"up"}
                                  duration={500}
                                  cascade={true}
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
                                </Fade>
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

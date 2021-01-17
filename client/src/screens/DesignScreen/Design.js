import React from "react";
import ProjectsStickyHeader from "../Projects/ProjectsStickyHeader/ProjectsStickyHeader";
import "./Design.css";
import { Fade } from "react-awesome-reveal";

export default function Design(props) {
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <ProjectsStickyHeader videoBackground={props.videoBackground} />
      <h1 style={{ color: "white", textAlign: "center" }}>Design Screen</h1>
      <div>
        {props.projects.map((project) => (
          <>
            {project.fields.design === true && (
              <Fade
                direction={"up"}
                duration={2000}
                fraction={Math.random()}
                triggerOnce={true}
                className="masonry-brick-img-full"
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
                  class="masonry-brick-img-full"
                  style={{
                    backgroundImage: `url(${project.fields.img1})`,
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
            )}
          </>
        ))}
      </div>
    </div>
  );
}

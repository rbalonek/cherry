import React from "react";
import { Fade } from "react-awesome-reveal";
import ProjectsStickyHeader from "../Projects/ProjectsStickyHeader/ProjectsStickyHeader";
import "./Branding.css";

export default function Branding(props) {
  // console.log(props);

  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <ProjectsStickyHeader videoBackground={props.videoBackground} />
      <h1 style={{ color: "white", textAlign: "center" }}>Branding Screen</h1>
      <div>
        {props.projects.map((project) => (
          <>
            {(project.fields.branding === true) |
              (project.fields.logo === true) && (
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
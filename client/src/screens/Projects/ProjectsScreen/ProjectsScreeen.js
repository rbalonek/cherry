import React from "react";
import ProjectsStickyHeader from "../ProjectsStickyHeader/ProjectsStickyHeader";
import "./ProjectsScreen.css";
import { Fade } from "react-awesome-reveal";
import { useHistory } from "react-router-dom";

export default function ProjectsScreeen(props) {
  const history = useHistory();
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <ProjectsStickyHeader videoBackground={props.videoBackground} />

      <div class="masonry-img">
        {props.projects.map((project) => (
          <>
            <Fade
              direction={"up"}
              duration={2000}
              fraction={Math.random()}
              triggerOnce={true}
              className="masonry-brick-img"
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
                class="masonry-brick-img"
                style={{
                  backgroundImage: `url(${project.fields.img1})`,
                }}
              >
                <div
                  id={project.fields.id}
                  className="hide-element"
                  onClick={() =>
                    history.push(`/project/${project.fields.projectname}`)
                  }
                >
                  <Fade direction={"up"} duration={500} cascade={true}>
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
                        fontFamily: "Rubik",
                        fontSize: "calc(15px + 1vw)",
                        marginTop: "-20%",
                      }}
                    >
                      {project.fields.client}
                    </p>
                  </Fade>
                </div>
              </div>
            </Fade>
          </>
        ))}
      </div>
    </div>
  );
}

// <div style={{ maxWidth: "100vw" }}>
//       <ProjectsStickyHeader />
//       <div className="proj-div-split">
//         <div className="big" />
//         <div className="small" />
//         <div className="small" />
//         <div className="long" />
//         <div className="small" />
//         <div className="small" />
//       </div>
//     </div>

import React from "react";
import { Fade } from "react-awesome-reveal";
import ModalCarousel from "../../components/ModalCarousel/ModalCarousel";
import ProjectsStickyHeader from "../Projects/ProjectsStickyHeader/ProjectsStickyHeader";
import "./KeyArt.css";

export default function KeyArt(props) {
  console.log(props);
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <ProjectsStickyHeader videoBackground={props.videoBackground} />

      <div class="masonry-img">
        {props.projects.map((project) => (
          <>
            {project.fields.mainPhotoLarge === true && (
              <>
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
                    <div
                      id={project.fields.id}
                      className="hide-element"
                      onClick={() => {
                        var el = document.getElementById(
                          "full-screen-car-holder"
                        );
                        el.classList.toggle("modal-carousel-holder");
                        el.classList.toggle("hide-element");
                      }}
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
                <div id="full-screen-car-holder" className="hide-element">
                  <h1
                    onClick={() => {
                      var el = document.getElementById(
                        "full-screen-car-holder"
                      );
                      el.classList.toggle("modal-carousel-holder");
                      el.classList.toggle("hide-element");
                    }}
                    style={{ color: "white" }}
                  >
                    X
                  </h1>
                  <ModalCarousel />
                </div>
              </>
            )}

            {project.fields.mainPhotoWide === true && (
              <>
                <Fade
                  direction={"up"}
                  duration={2000}
                  fraction={Math.random()}
                  triggerOnce={true}
                  className="masonry-brick-img-wide"
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
                    class="masonry-brick-img-wide"
                    style={{
                      backgroundImage: `url(${project.fields.img1})`,
                    }}
                  >
                    <div
                      id={project.fields.id}
                      className="hide-element"
                      onClick={() => {
                        var el = document.getElementById("wide-car-holder");
                        el.classList.toggle("modal-carousel-holder");
                        el.classList.toggle("hide-element");
                      }}
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
                <div id="wide-car-holder" className="hide-element">
                  <h1
                    onClick={() => {
                      var el = document.getElementById("wide-car-holder");
                      el.classList.toggle("modal-carousel-holder");
                      el.classList.toggle("hide-element");
                    }}
                    style={{ color: "white" }}
                  >
                    X
                  </h1>
                  <ModalCarousel />
                </div>
              </>
            )}

            {project.fields.mainPhotoSmall === true && (
              <Fade
                direction={"up"}
                duration={2000}
                fraction={Math.random()}
                triggerOnce={true}
                className="masonry-brick-img-sm"
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
                  class="masonry-brick-img-sm"
                  style={{
                    backgroundImage: `url(${project.fields.img1})`,
                  }}
                >
                  <div
                    id={project.fields.id}
                    className="hide-element"
                    // onClick={() =>
                    //   history.push(`/project/${project.fields.projectname}`)
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
  );
}

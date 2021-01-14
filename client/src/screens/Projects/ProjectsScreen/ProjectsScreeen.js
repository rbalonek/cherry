import React from "react";
import ProjectsStickyHeader from "../ProjectsStickyHeader/ProjectsStickyHeader";
import "./ProjectsScreen.css";
import { Fade } from "react-awesome-reveal";

export default function ProjectsScreeen(props) {
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <ProjectsStickyHeader />
      <div class="masonry">
        <Fade
          direction={"up"}
          fraction={Math.random()}
          triggerOnce={true}
          className="masonry-brick centered-text"
        >
          <div className="masonry-brick centered-text">Masonry Fixed 1</div>
        </Fade>

        <Fade
          direction={"up"}
          fraction={Math.random()}
          triggerOnce={true}
          className="masonry-brick centered-text"
        >
          <div className="masonry-brick centered-text">Masonry Fixed 1</div>
        </Fade>
        <Fade
          direction={"up"}
          fraction={Math.random()}
          triggerOnce={true}
          className="masonry-brick centered-text"
        >
          <div className="masonry-brick centered-text">Masonry Fixed 1</div>
        </Fade>
        <Fade
          direction={"up"}
          fraction={Math.random()}
          triggerOnce={true}
          className="masonry-brick centered-text"
        >
          <div className="masonry-brick centered-text">Masonry Fixed 1</div>
        </Fade>
        <Fade
          direction={"up"}
          fraction={Math.random()}
          triggerOnce={true}
          className="masonry-brick centered-text"
        >
          <div className="masonry-brick centered-text">Masonry Fixed 1</div>
        </Fade>
        <Fade
          direction={"up"}
          fraction={Math.random()}
          triggerOnce={true}
          className="masonry-brick centered-text"
        >
          <div className="masonry-brick centered-text">Masonry Fixed 1</div>
        </Fade>
        <Fade
          direction={"up"}
          fraction={Math.random()}
          triggerOnce={true}
          className="masonry-brick centered-text"
        >
          <div className="masonry-brick centered-text">Masonry Fixed 1</div>
        </Fade>
        <Fade
          direction={"up"}
          fraction={Math.random()}
          triggerOnce={true}
          className="masonry-brick centered-text"
        >
          <div className="masonry-brick centered-text">Masonry Fixed 1</div>
        </Fade>
      </div>

      <div class="masonry">
        {props.projects.map((project) => (
          <Fade
            direction={"up"}
            fraction={Math.random()}
            triggerOnce={true}
            className="masonry-brick-img"
            x
          >
            <div
              class="masonry-brick-img "
              style={{
                // backgroundSize: "100% 100%",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${project.fields.img1})`,
              }}
            />
          </Fade>
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

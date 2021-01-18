import React from "react";
import ProjectsStickyHeader from "../ProjectsStickyHeader/ProjectsStickyHeader";
import "./ProjName.css";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { AttentionSeeker } from "react-awesome-reveal";

import arrow from "../../../assets/logo/Website-Asset_ProjectSlideshow_ArrowLeft.png";

export default function ProjName(props) {
  const history = useHistory();

  let projName = window.location.pathname;
  let n = 9;
  projName = projName.substring(n);
  console.log(projName);

  return (
    <div style={{ height: "100%", width: "100vw" }}>
      <div style={{ marginBottom: "7%" }}>
        <ProjectsStickyHeader videoBackground={props.videoBackground} />
      </div>
      <div className="holder">
        <Carousel>
          {props.projects.map((project) => (
            <>
              {project.fields.projectname === projName && (
                <>
                  <div>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "20px",
                        textAlign: "center",
                        backgroundSize: "cover",
                        backgroundPosition: "50% 50%",
                        backgroundRepeat: "no-repeat",
                        // textAlign: "-webkit-center",
                        // display: "flex",
                        // justifyContent: "center",
                      }}
                      alt={project.fields.img1}
                      src={project.fields.img1}
                    />
                  </div>
                </>
              )}
            </>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

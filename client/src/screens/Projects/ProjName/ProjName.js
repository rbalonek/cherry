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
  console.log(props.projects);

  return (
    <div>
      <Carousel>
        {props.projects.map((project) => (
          <>
            {project.fields.projectname === projName && (
              <>
                <div>
                  <img
                    style={{
                      width: "600px",
                      height: "600px",
                      padding: "20px",
                      textAlign: "center",
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
  );
}

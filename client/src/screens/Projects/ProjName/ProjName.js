import React from "react";
import ProjectsStickyHeader from "../ProjectsStickyHeader/ProjectsStickyHeader";
import "./ProjName.css";
import { useHistory } from "react-router-dom";
import { AttentionSeeker } from "react-awesome-reveal";

import arrow from "../../../assets/logo/Website-Asset_ProjectSlideshow_ArrowLeft.png";

export default function ProjName(props) {
  const history = useHistory();

  let projName = window.location.pathname;
  let n = 9;
  projName = projName.substring(n);
  // console.log(props.projects);

  return (
    <div style={{ height: "200vh" }}>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          position: "sticky",
          top: "20px",
        }}
      >
        <AttentionSeeker
          effect={"jello"}
          delay={1000}
          className="back-arrow-proj-name"
        >
          <img
            className="back-arrow-proj-name"
            onClick={() => history.push("/projects")}
            src={arrow}
            alt="back-arrow"
          />
        </AttentionSeeker>
      </div>

      <ProjectsStickyHeader />
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1 style={{ color: "white", fontFamily: "AkzidenzGroteskBE-BoldEx" }}>
          {projName}
        </h1>
      </div>
      <div style={{ textAlign: "center" }}>
        {props.projects.map((project) => (
          <>
            {project.fields.projectname === projName && (
              <>
                <img
                  style={{
                    width: "600px",
                    padding: "20px",
                    textAlign: "center",
                  }}
                  alt={project.fields.img1}
                  src={project.fields.img1}
                />
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

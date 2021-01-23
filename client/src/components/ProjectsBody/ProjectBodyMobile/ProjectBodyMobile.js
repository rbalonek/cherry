import React from "react";
import "./ProjectBodyMobile.css";
import { useHistory } from "react-router-dom";

export default function ProjectBodyMobile(props) {
  const history = useHistory();

  // const clickedImg = () => {
  //   {
  //     props.highlightedProjects.map((project) => console.log(project));
  //   }
  // };

  return (
    <>
      {props.highlightedProjects.map((project) => (
        <div>
          <img
            // onClick={() => console.log(project.fields.name)}
            onClick={() => history.push(`/highlight/${project.fields.idname}`)}
            className="mobile-highlighted-proj-img"
            id={project.fields.idname}
            alt={project.fields.idname}
            src={project.fields.cellimg1}
          />
        </div>
      ))}
    </>
  );
}

import React, { useState, useEffect } from "react";
import "./ProjectsBody.css";
import axios from "axios";

import ClickableSlider from "../../slider/ClickableSlider/ClickableSlider";

export default function ProjectsBody() {
  const [fetchFullScreenProjects, invokeFetch] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/appVey7bH2bLRXZsC/FullScreenProjects?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      invokeFetch(data.data.records);
      // console.log(fetchFullScreenProjects);
    };
    apiCall();
  }, [fetchFullScreenProjects]);

  return (
    <div>
      {fetchFullScreenProjects.map((project) => (
        <div id={project.fields.idname} className="non-sticky-section">
          <ClickableSlider
            scrollToUp={project.fields.scrollUp}
            scrollToDown={project.fields.scrollDown}
            img1={project.fields.img1}
            img2={project.fields.img2}
            img3={project.fields.img3}
            img4={project.fields.img4}
            cellimg1={project.fields.cellimg1}
            cellimg2={project.fields.cellimg2}
            cellimg3={project.fields.cellimg3}
            cellimg4={project.fields.cellimg4}
            name={project.fields.name}
            client={project.fields.client}
            description={project.fields.description}
            descriptionTwo={project.fields.descriptionTwo}
            keyart={project.fields.keyart}
            identity={project.fields.identity}
            motiongfx={project.fields.motiongfx}
            copy={project.fields.copy}
            retouching={project.fields.retouching}
            photoartdirection={project.fields.photoartdirection}
          />
        </div>
      ))}
    </div>
  );
}

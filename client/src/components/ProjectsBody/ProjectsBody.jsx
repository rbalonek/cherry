import React, { useState, useEffect } from "react";
import "./ProjectsBody.css";
import axios from "axios";

import ClickableSlider from "../../slider/ClickableSlider/ClickableSlider";
// import ChiOne from "../../assets/chi/chi-carousel-1.jpg";
// import ChiTwo from "../../assets/chi/chi-carousel-2.jpg";
// import Common from "../../assets/theCommon/Common-01.jpg";
// import Shameless from "../../assets/shameless/Portfolio-2019-FILMTV+281.jpg";
// import Affair from "../../assets/theAffair/TheAffair-S1PressKit-01.jpg";
// import Billions from "../../assets/billions/1st-carousel-Portfolio-2018-FILMTV174.jpg";
// import BillionsTwo from "../../assets/billions/onClick-Portfolio-2018-FILMTV179.jpg";
// import commonx from "../../assets/commonx/CommonX-01.gif";

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
      console.log(fetchFullScreenProjects);
    };
    apiCall();
  }, [invokeFetch]);

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
            name={project.fields.name}
            client={project.fields.client}
            description={project.fields.description}
            descriptionTwo={project.fields.descriptionTwo}
          />
        </div>
      ))}
    </div>
  );
}

// <div id="chi" className="non-sticky-section">

// </div>

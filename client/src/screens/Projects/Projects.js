import React, { useEffect, useState } from "react";
import "./Projects.css";
import axios from "axios";
import ProjLogos from "./ProjLogos/ProjLogos";
import ProjKeyArt from "./ProjKeyArt/ProjKeyArt";
import ProjIdentity from "./ProjIdentity/ProjIdentity";
import ProjMotionGfx from "./ProjMotionGfx/ProjMotionGfx";
import ProjCopy from "./ProjCopy/ProjCopy";
import ProjRetouching from "./ProjRetouching/ProjRetouching";
import ProjPhotoArtDirection from "./ProjPhotoArtDirection/ProjPhotoArtDirection";

export default function Projects() {
  const [projects, inVokeProjects] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/appVey7bH2bLRXZsC/items?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      inVokeProjects(data.data.records);
      console.log(projects);
    };
    apiCall();
  }, []);

  return (
    <div style={{ width: "100vw" }}>
      <h1 style={{ color: "white" }}>Projects</h1>

      <ProjLogos projects={projects} />
      <ProjKeyArt projects={projects} />
      <ProjIdentity projects={projects} />
      <ProjMotionGfx projects={projects} />
      <ProjCopy projects={projects} />
      <ProjRetouching projects={projects} />
      <ProjPhotoArtDirection projects={projects} />
    </div>
  );
}

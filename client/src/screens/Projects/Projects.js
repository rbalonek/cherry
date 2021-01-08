import React, { useEffect, useState } from "react";
import "./Projects.css";
import { useHistory } from "react-router-dom";

import axios from "axios";
import ProjLogos from "./ProjLogos/ProjLogos";
import ProjKeyArt from "./ProjKeyArt/ProjKeyArt";
import ProjIdentity from "./ProjIdentity/ProjIdentity";
import ProjMotionGfx from "./ProjMotionGfx/ProjMotionGfx";
import ProjCopy from "./ProjCopy/ProjCopy";
import ProjRetouching from "./ProjRetouching/ProjRetouching";
import ProjPhotoArtDirection from "./ProjPhotoArtDirection/ProjPhotoArtDirection";

export default function Projects() {
  const history = useHistory();

  const [projects, inVokeProjects] = useState([]);
  const [logo, toggleLogo] = useState("hide");
  const [keyArt, toggleKeyArt] = useState("hide");
  // const [client, toggleClient] = useState("hide");
  const [identity, toggleIdentity] = useState("hide");
  const [motionGfx, toggleMotionGfx] = useState("hide");
  const [copy, toggleCopy] = useState("hide");
  const [retouching, toggleRetouching] = useState("hide");
  const [photoArtDirection, togglePhotoArtDirection] = useState("hide");

  const logoToggle = () => {
    toggleLogo("show");
    toggleKeyArt("hide");
    // toggleClient("hide");
    toggleIdentity("hide");
    toggleMotionGfx("hide");
    toggleCopy("hide");
    toggleRetouching("hide");
    togglePhotoArtDirection("hide");
    history.push("/logos");
  };

  const keyArtToggle = () => {
    toggleKeyArt("show");
    toggleLogo("hide");
    // toggleClient("hide");
    toggleIdentity("hide");
    toggleMotionGfx("hide");
    toggleCopy("hide");
    toggleRetouching("hide");
    togglePhotoArtDirection("hide");
  };

  // const clientToggle = () => {
  //   toggleKeyArt("hide");
  //   toggleLogo("hide");
  //   toggleClient("show");
  //   toggleIdentity("hide");
  //   toggleMotionGfx("hide");
  //   toggleCopy("hide");
  //   toggleRetouching("hide");
  //   togglePhotoArtDirection("hide");
  // };

  const identityToggle = () => {
    toggleKeyArt("hide");
    toggleLogo("hide");
    // toggleClient("hide");
    toggleIdentity("show");
    toggleMotionGfx("hide");
    toggleCopy("hide");
    toggleRetouching("hide");
    togglePhotoArtDirection("hide");
  };

  const motionGfxToggle = () => {
    toggleKeyArt("hide");
    toggleLogo("hide");
    // toggleClient("hide");
    toggleIdentity("hide");
    toggleMotionGfx("show");
    toggleCopy("hide");
    toggleRetouching("hide");
    togglePhotoArtDirection("hide");
  };

  const copyToggle = () => {
    toggleKeyArt("hide");
    toggleLogo("hide");
    // toggleClient("hide");
    toggleIdentity("hide");
    toggleMotionGfx("hide");
    toggleCopy("show");
    toggleRetouching("hide");
    togglePhotoArtDirection("hide");
  };

  const retouchingToggle = () => {
    toggleKeyArt("hide");
    toggleLogo("hide");
    // toggleClient("hide");
    toggleIdentity("hide");
    toggleMotionGfx("hide");
    toggleCopy("hide");
    toggleRetouching("show");
    togglePhotoArtDirection("hide");
  };

  const photoArtDirectionToggle = () => {
    toggleKeyArt("hide");
    toggleLogo("hide");
    // toggleClient("hide");
    toggleIdentity("hide");
    toggleMotionGfx("hide");
    toggleCopy("hide");
    toggleRetouching("hide");
    togglePhotoArtDirection("show");
  };

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
      <div className="projects-keyword-menu">
        <h2 style={{ color: "white" }} onClick={logoToggle}>
          LOGO
        </h2>
        <h2 style={{ color: "white" }} onClick={keyArtToggle}>
          Key Art
        </h2>
        <h2 style={{ color: "white" }} onClick={identityToggle}>
          Identity
        </h2>
        <h2 style={{ color: "white" }} onClick={motionGfxToggle}>
          Motion GFX
        </h2>
        <h2 style={{ color: "white" }} onClick={copyToggle}>
          Copy
        </h2>
        <h2 style={{ color: "white" }} onClick={retouchingToggle}>
          Retouching
        </h2>
        <h2 style={{ color: "white" }} onClick={photoArtDirectionToggle}>
          Photo Art Direction
        </h2>
      </div>

      <div className={logo}>
        <ProjLogos projects={projects} />
      </div>
      <div className={keyArt}>
        <ProjKeyArt projects={projects} />
      </div>

      <div className={identity}>
        <ProjIdentity projects={projects} />
      </div>

      <div className={motionGfx}>
        <ProjMotionGfx projects={projects} />
      </div>

      <div className={copy}>
        <ProjCopy projects={projects} />
      </div>

      <div className={retouching}>
        <ProjRetouching projects={projects} />
      </div>

      <div className={photoArtDirection}>
        <ProjPhotoArtDirection projects={projects} />
      </div>
      {projects.map((project) => (
        <>
          {project.fields.MainProjectPhoto === true && (
            <>
              <p style={{ color: "white" }}>{project.fields.copy}</p>
              <img
                style={{ width: "200px" }}
                alt={project.fields.img1}
                src={project.fields.img1}
              />
            </>
          )}
        </>
      ))}
    </div>
  );
}

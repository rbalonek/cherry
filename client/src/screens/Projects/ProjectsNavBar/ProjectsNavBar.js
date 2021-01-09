import React from "react";
import "./ProjectsNavBar.css";
import { useHistory } from "react-router-dom";

export default function ProjectsNavBar() {
  const history = useHistory();
  return (
    <div style={{ width: "100vw", marginBottom: "20px", marginTop: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <h3
          className="projects-nav-text"
          onClick={() => history.push("/projects")}
        >
          All Projects
        </h3>
        <h3
          className="projects-nav-text"
          onClick={() => history.push("/logos")}
        >
          LOGO
        </h3>
        <h3
          className="projects-nav-text"
          onClick={() => history.push("/keyart")}
        >
          Key Art
        </h3>
        <h3
          className="projects-nav-text"
          onClick={() => history.push("/identity")}
        >
          Identity
        </h3>
        <h3
          className="projects-nav-text"
          onClick={() => history.push("/motiongfx")}
        >
          Motion GFX
        </h3>
        <h3 className="projects-nav-text" onClick={() => history.push("/copy")}>
          Copy
        </h3>
        <h3
          className="projects-nav-text"
          onClick={() => history.push("/retouching")}
        >
          Retouching
        </h3>
        <h3
          className="projects-nav-text"
          onClick={() => history.push("/photoartdirection")}
        >
          Photo Art Direction
        </h3>
      </div>
    </div>
  );
}

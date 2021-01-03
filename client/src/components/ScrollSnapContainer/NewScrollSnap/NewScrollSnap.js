import React from "react";
import "./NewScrollSnap.css";

import StickyHeader from "../../StickyHeader/StickyHeader";
import ProjectsBody from "../../ProjectsBody/ProjectsBody";
import NewHeader from "../../header/NewHeader/NewHeader";

export default function NewScrollSnap() {
  return (
    <div className="new-scrollsnap-container">
      <div id="header" className="new-header-container">
        <NewHeader />
      </div>

      <StickyHeader />

      <ProjectsBody></ProjectsBody>
    </div>
  );
}

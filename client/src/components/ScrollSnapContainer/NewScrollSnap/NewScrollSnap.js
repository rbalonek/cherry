import React from "react";
import "./NewScrollSnap.css";

import StickyHeader from "../../StickyHeader/StickyHeader";
import ProjectsBody from "../../ProjectsBody/ProjectsBody";
import NewHeader from "../../header/NewHeader/NewHeader";
import LogoSticky from "../../StickyHeader/LogoSticky";

export default function NewScrollSnap() {
  return (
    <div className="new-scrollsnap-container">
      <StickyHeader />
      <div id="header" className="new-header-container">
        <NewHeader />
      </div>
      <LogoSticky />
      <ProjectsBody></ProjectsBody>
    </div>
  );
}

// {window.innerWidth > 770 && <StickyHeader />}

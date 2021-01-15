import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screens/About/About";
import Home from "../screens/home/Home";
import Projects from "../screens/Projects/Projects";
import ProjLogos from "../screens/Projects/ProjLogos/ProjLogos";

import ProjPhotoArtDirection from "../screens/Projects/ProjPhotoArtDirection/ProjPhotoArtDirection";
import ProjRetouching from "../screens/Projects/ProjRetouching/ProjRetouching";
import ProjCopy from "../screens/Projects/ProjCopy/ProjCopy";
import ProjMotionGfx from "../screens/Projects/ProjMotionGfx/ProjMotionGfx";
import ProjIdentity from "../screens/Projects/ProjIdentity/ProjIdentity";
import ProjKeyArt from "../screens/Projects/ProjKeyArt/ProjKeyArt";
import ProjName from "../screens/Projects/ProjName/ProjName";
import ProjectsScreeen from "../screens/Projects/ProjectsScreen/ProjectsScreeen";

export default function MainContainer(props) {
  // console.log("PROPS", props.headerText);
  const arr = [];
  props.headerText.map((vid) => arr.push(vid.fields.Video));
  var videoForSession = arr[Math.floor(Math.random() * arr.length)];
  // console.log("VIDEO", videoForSession);

  return (
    <Switch>
      <Route exact path="/" component={Home}>
        <Home headerText={props.headerText} videoBackground={videoForSession} />
      </Route>
      <Route path="/about" component={About}>
        <About />
      </Route>
      <Route path="/projects" component={Projects}>
        <Projects projects={props.projects} />
      </Route>
      <Route path="/projectsscreen" component={ProjectsScreeen}>
        <ProjectsScreeen
          projects={props.projects}
          videoBackground={videoForSession}
        />
      </Route>
      <Route path={"/project"} component={ProjName}>
        <ProjName projects={props.projects} />
      </Route>
      <Route path="/logos" component={ProjLogos}>
        <ProjLogos projects={props.projects} />
      </Route>
      <Route path="/keyart" component={ProjKeyArt}>
        <ProjKeyArt projects={props.projects} />
      </Route>
      <Route path="/identity" component={ProjIdentity}>
        <ProjIdentity projects={props.projects} />
      </Route>
      <Route path="/motiongfx" component={ProjMotionGfx}>
        <ProjMotionGfx projects={props.projects} />
      </Route>
      <Route path="/copy" component={ProjCopy}>
        <ProjCopy projects={props.projects} />
      </Route>
      <Route path="/retouching" component={ProjRetouching}>
        <ProjRetouching projects={props.projects} />
      </Route>
      <Route path="/photoartdirection" component={ProjPhotoArtDirection}>
        <ProjPhotoArtDirection projects={props.projects} />
      </Route>
    </Switch>
  );
}

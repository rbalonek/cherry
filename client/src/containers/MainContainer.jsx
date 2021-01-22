import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screens/About/About";
import Home from "../screens/home/Home";
import Projects from "../screens/Projects/Projects";
import ProjLogos from "../screens/Projects/ProjLogos/ProjLogos";

import ProjName from "../screens/Projects/ProjName/ProjName";
import KeyArt from "../screens/KeyArt/KeyArt";
import Branding from "../screens/Branding/Branding";
import Design from "../screens/DesignScreen/Design";
import BSides from "../screens/Bsides/BSides";

export default function MainContainer(props) {
  // console.log("PROPS", props.headerText);
  const VideoArr = [];
  props.headerText.map((vid) => VideoArr.push(vid.fields.Video));
  var videoForSession = VideoArr[Math.floor(Math.random() * VideoArr.length)];
  // console.log("VIDEO", videoForSession);

  return (
    <Switch>
      <Route exact path="/" component={Home}>
        <Home headerText={props.headerText} videoBackground={videoForSession} />
      </Route>
      <Route path="/about" component={About}>
        <About />
      </Route>

      <Route path="/logos" component={ProjLogos}>
        <ProjLogos projects={props.projects} />
      </Route>
      <Route path="/keyart" component={KeyArt}>
        <KeyArt
          projects={props.projects}
          videoBackground={props.videoBackground}
        />
      </Route>
      <Route path="/bsides" component={BSides}>
        <BSides projects={props.projects} videoBackground={videoForSession} />
      </Route>
      <Route path="/branding" component={Branding}>
        <Branding projects={props.projects} videoBackground={videoForSession} />
      </Route>
      <Route path="/design" component={Design}>
        <Design projects={props.projects} videoBackground={videoForSession} />
      </Route>
      <Route path="/project" component={ProjName}>
        <ProjName projects={props.projects} videoBackground={videoForSession} />
      </Route>
      <Route path="/projects" component={Projects}>
        <Projects projects={props.projects} />
      </Route>
    </Switch>
  );
}

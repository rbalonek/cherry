import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screens/About/About";
import Home from "../screens/home/Home";
import Projects from "../screens/Projects/Projects";
import ProjLogos from "../screens/Projects/ProjLogos/ProjLogos";
import axios from "axios";
import ProjPhotoArtDirection from "../screens/Projects/ProjPhotoArtDirection/ProjPhotoArtDirection";
import ProjRetouching from "../screens/Projects/ProjRetouching/ProjRetouching";
import ProjCopy from "../screens/Projects/ProjCopy/ProjCopy";
import ProjMotionGfx from "../screens/Projects/ProjMotionGfx/ProjMotionGfx";
import ProjIdentity from "../screens/Projects/ProjIdentity/ProjIdentity";
import ProjKeyArt from "../screens/Projects/ProjKeyArt/ProjKeyArt";

export default function MainContainer() {
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
      // console.log(projects);
    };
    apiCall();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home}>
        <Home />
      </Route>
      <Route path="/about" component={About}>
        <About />
      </Route>
      <Route path="/projects" component={Projects}>
        <Projects projects={projects} />
      </Route>
      <Route path="/logos" component={ProjLogos}>
        <ProjLogos projects={projects} />
      </Route>
      <Route path="/keyart" component={ProjKeyArt}>
        <ProjKeyArt projects={projects} />
      </Route>
      <Route path="/identity" component={ProjIdentity}>
        <ProjIdentity projects={projects} />
      </Route>
      <Route path="/motiongfx" component={ProjMotionGfx}>
        <ProjMotionGfx projects={projects} />
      </Route>
      <Route path="/copy" component={ProjCopy}>
        <ProjCopy projects={projects} />
      </Route>
      <Route path="/retouching" component={ProjRetouching}>
        <ProjRetouching projects={projects} />
      </Route>
      <Route path="/photoartdirection" component={ProjPhotoArtDirection}>
        <ProjPhotoArtDirection projects={projects} />
      </Route>
    </Switch>
  );
}

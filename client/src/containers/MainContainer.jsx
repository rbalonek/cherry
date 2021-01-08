import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screens/About/About";
import Home from "../screens/home/Home";
import Projects from "../screens/Projects/Projects";
import ProjLogos from "../screens/Projects/ProjLogos/ProjLogos";

export default function MainContainer() {
  return (
    <Switch>
      <Route exact path="/" component={Home}>
        <Home />
      </Route>
      <Route path="/about" component={About}>
        <About />
      </Route>
      <Route path="/projects" component={Projects}>
        <Projects />
      </Route>
      <Route path="/logos" component={ProjLogos}>
        <ProjLogos />
      </Route>
    </Switch>
  );
}

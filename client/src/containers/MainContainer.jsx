import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screens/About/About";
import Home from "../screens/home/Home";
import Projects from "../screens/Projects/Projects";

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
    </Switch>
  );
}

import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screens/About/About";
import Home from "../screens/home/Home";

export default function MainContainer() {
  return (
    <Switch>
      <Route exact path="/" component={Home}>
        <Home />
      </Route>
      <Route path="/about" component={About}>
        <About />
      </Route>
    </Switch>
  );
}

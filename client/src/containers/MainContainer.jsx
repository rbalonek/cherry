import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screens/About/About";
import Home from "../screens/home/Home";

export default function MainContainer() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

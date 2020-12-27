import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import IntroVid from "../screens/IntroVid/IntroVid";

export default function MainContainer() {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <IntroVid />
      </Route>
    </Switch>
  );
}

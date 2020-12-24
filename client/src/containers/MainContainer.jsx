import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "../screens/home/Home";

export default function MainContainer() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

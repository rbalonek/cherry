import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainContainer from "./containers/MainContainer";
import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <MainContainer />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

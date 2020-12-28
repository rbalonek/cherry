import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainContainer from "./containers/MainContainer";
import "./App.css";
import IntroVid from "./screens/IntroVid/IntroVid";
import "./assets/fonts/HelveticaNeue-RomanOTF.otf";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/home">
          <MainContainer />
        </Route>
        <Route path="/">
          <IntroVid />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

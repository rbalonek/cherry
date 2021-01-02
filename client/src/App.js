import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainContainer from "./containers/MainContainer";
import "./App.css";
import IntroVid from "./screens/IntroVid/IntroVid";
import "./assets/fonts/HelveticaNeue-RomanOTF.otf";
import About from "./screens/About/About";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <MainContainer />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

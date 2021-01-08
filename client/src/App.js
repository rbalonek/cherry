import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainContainer from "./containers/MainContainer";
import "./App.css";
import "./assets/fonts/HelveticaNeue-RomanOTF.otf";
import About from "./screens/About/About";
import Home from "./screens/home/Home.jsx";
import Projects from "./screens/Projects/Projects";
import ProjLogos from "./screens/Projects/ProjLogos/ProjLogos";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home}>
          <MainContainer />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

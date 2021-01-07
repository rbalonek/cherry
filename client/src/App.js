import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainContainer from "./containers/MainContainer";
import "./App.css";
import "./assets/fonts/HelveticaNeue-RomanOTF.otf";
import About from "./screens/About/About";
import Home from "./screens/home/Home.jsx";
import Projects from "./screens/Projects/Projects";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}>
          <MainContainer />
        </Route>
        <Route path="/about" component={About}>
          <About />
        </Route>
        <Route path="/projects" component={Projects}>
          <Projects />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

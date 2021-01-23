import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainContainer from "./containers/MainContainer";
import "./App.css";
import "./assets/fonts/HelveticaNeue-RomanOTF.otf";
import About from "./screens/About/About";
import Home from "./screens/home/Home.jsx";
import Projects from "./screens/Projects/Projects";
import ProjLogos from "./screens/Projects/ProjLogos/ProjLogos";
import axios from "axios";

function App() {
  const [projects, inVokeProjects] = useState([]);
  const [headerText, invokeHeaderText] = useState([]);
  const [videoBackground, setVideoBackground] = useState([]);
  const [fetchHighlightedProjects, invokeFetch] = useState([]);

  useEffect(() => {
    const apiCallText = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/appVey7bH2bLRXZsC/headertext?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      invokeHeaderText(data.data.records);
      setVideoBackground(
        "https://res.cloudinary.com/bobalobbadingdong/video/upload/v1610505964/Cherry/Videos/trees_dw5jim.mov"
      );
    };

    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/appVey7bH2bLRXZsC/items?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      inVokeProjects(data.data.records);
      // console.log(projects);
    };

    const apiCallHighlightedProjects = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/appVey7bH2bLRXZsC/HighlightedProjects?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      invokeFetch(data.data.records);
      // console.log(fetchFullScreenProjects);
    };

    apiCallText();
    apiCall();
    apiCallHighlightedProjects();
  }, []);

  // console.log(fetchHighlightedProjects);
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home}>
          <MainContainer
            highlightedProjects={fetchHighlightedProjects}
            headerText={headerText}
            projects={projects}
            videoBackground={videoBackground}
          />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

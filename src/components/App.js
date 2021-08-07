import React from "react";
import { Helmet } from "react-helmet";
import { Route, HashRouter } from "react-router-dom";

import AboutMe from "./aboutme/AboutMe";
import Projects from "./projects/Projects";
import Navbar from "./Navbar";
import CV from "./cv/CV";

import SourcehutLogo from "../img/sourcehut.svg";

const App = () => {
  return (
    <div>
      <Helmet>
        {" "}
        <body className="h-screen bg-gray-800 text-white"></body>
      </Helmet>
      <div className="md:container md:mx-auto">
        <HashRouter>
          <Navbar />
          <div className="content">
            <Route exact path="/" component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route path="/cv" component={CV} />
          </div>
        </HashRouter>
      </div>
    </div>
  );
};

export default App;

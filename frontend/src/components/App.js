import React from "react";
import { Helmet } from "react-helmet";
import { Route, HashRouter } from "react-router-dom";

import nightwind from "nightwind/helper";
import AboutMe from "./aboutme/AboutMe";
import Projects from "./projects/Projects";
import Navbar from "./Navbar";
import CV from "./cv/CV";

const App = () => {
  return (
    <div>
      <Helmet>
        {" "}
        <script>{nightwind.init()}</script>
        <body className="h-screen bg-white dark:bg-gray-800 text-black"></body>
      </Helmet>
      <div className="md:container md:mx-auto">
        <HashRouter>
          <Navbar />
          <div className="content">
            <Route exact path="/" component={AboutMe} />
            <Route
              path="/projects/:forge/:style?"
              render={(props) => (
                <Projects
                  key={`${props.match.params.forge}+${
                    props.match.params.style !== undefined
                      ? props.match.params.style
                      : ""
                  }`}
                  forge={props.match.params.forge}
                  style={
                    props.match.params.style !== undefined
                      ? props.match.params.style
                      : ""
                  }
                />
              )}
            />
            <Route path="/cv" component={CV} />
          </div>
        </HashRouter>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import AboutMe from "./aboutme/AboutMe";
import Projects from "./projects/Projects";
import CV from "./cv/CV";

const App = () => {
  return (
    <div className="container">
      <HashRouter>
        <nav>
          <ul>
            <li>
              <strong>Daniel Rose</strong>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink exact to="/">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/cv">CV</NavLink>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Route exact path="/" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/cv" component={CV} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;

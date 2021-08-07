import React, { Component } from "react";
import { Helmet } from "react-helmet";

import ProjectsList from "./ProjectsList";
import retrieveProjects from "./ProjectsAPI";

class Projects extends Component {
  state = { projects: retrieveProjects() };

  render() {
    const { projects } = this.state;

    const projectEntries = projects
      .filter((entry, index) => {
        return entry.visibility === "public";
      })
      .map((entry, index) => {
        return (
          <div
            key={entry.name}
            className="box-border border-2 w-full md:max-w-xs lg:max-w-sm xl:max-w-lg p-4"
          >
            <div className="flex flex-col flex-wrap gap-2">
              <p>{entry.name}</p>
              <p>{entry.description}</p>
            </div>
          </div>
        );
      });

    return (
      <div>
        <Helmet>
          {" "}
          <title>Projects - Daniel Rose</title>
        </Helmet>
        <h1 className="text-4xl text-center pb-4">Projects</h1>
        <ProjectsList projects={projectEntries} />
      </div>
    );
  }
}

export default Projects;

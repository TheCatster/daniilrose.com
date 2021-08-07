import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Projects extends Component {
  state = {
    projects: [],
  };

  render() {
    const { projects } = this.state;

    const result = projects.map((entry, index) => {
      console.log(entry);
      return (
        <div>
          {entry} - {index}
        </div>
      );
    });

    return (
      <div className="container">
        <Helmet>
          {" "}
          <title>Projects - Daniel Rose</title>
        </Helmet>
        <h1 className="projects-title">Projects</h1>
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-4 projects">
          <div>
            <p>1</p>
          </div>
          <div>
            <p>2</p>
          </div>
          <div>
            <p>3</p>
          </div>
          <div>
            <p>4</p>
          </div>
          <div>
            <p>5</p>
          </div>
          <div>
            <p>6</p>
          </div>
          <div>
            <p>7</p>
          </div>
          <div>
            <p>8</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

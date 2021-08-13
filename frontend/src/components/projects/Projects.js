import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { NavLink } from "react-router-dom";
import ProjectsList from "./ProjectsList";
import LazyLoad from "react-lazyload";

import srhtLogo from "../../img/sourcehut.svg";
import ghLogo from "../../img/github.svg";

const ForgeMenu = () => {
  return (
    <div className="flex flex-wrap place-items-center justify-center gap-4">
      <NavLink
        to="/projects/srht"
        className="hover:bg-gray-200 dark:hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        <LazyLoad once>
          <div className="content-center">
            <img
              src={srhtLogo}
              alt="Sourcehut Logo"
              className="rounded-lg object-scale logo-color"
            />
          </div>
        </LazyLoad>
      </NavLink>
      <NavLink
        to="/projects/gh/commit"
        className="hover:bg-gray-200 dark:hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        <LazyLoad once>
          <div className="content-center">
            <img
              src={ghLogo}
              alt="GitHub Logo"
              className="rounded-lg object-scale logo-color"
            />
          </div>
        </LazyLoad>
      </NavLink>
    </div>
  );
};

const GHContributionMenu = () => {
  return (
    <div className="flex flex-wrap place-items-center justify-center gap-4 text-base font-medium interests-title">
      <p className="text-black dark:text-white">Sort by:</p>
      <NavLink
        to="/projects/gh/commit"
        className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md"
      >
        <div className="content-center">Commit/PR</div>
      </NavLink>
      <NavLink
        to="/projects/gh/issue"
        className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md"
      >
        <div className="content-center">Issue</div>
      </NavLink>
    </div>
  );
};

const ForgeDescription = (props) => {
  return (
    <div className="container place-items-center justify-center text-center text-xl overflow-clip p-4">
      {props.forge === "srht" ? (
        <div>
          {" "}
          All of my original projects and personal configurations are kept on
          Sourcehut. I prefer the git email workflow, and the freedom and ease
          of use of Sourcehut.
        </div>
      ) : (
        <div>
          My public contributions are mostly made on GitHub. Some of my projects
          are also mirrored to GitHub.
        </div>
      )}
    </div>
  );
};

class Projects extends Component {
  state = { projects: [] };

  componentDidMount() {
    const url = `/api/${this.props.forge}/${this.props.style}`;
    fetch(url, { method: "GET" })
      .then((result) => result.json())
      .then((data) => this.setState({ projects: data.projects }));
  }

  render() {
    const projectEntries =
      this.props.forge === "srht"
        ? this.state.projects.map((entry, index) => {
            return (
              <a
                href={
                  "https://git.sr.ht/" +
                  entry.owner.canonical_name +
                  "/" +
                  entry.name +
                  "/"
                }
                className="box-border border-2 w-full md:max-w-xs lg:max-w-sm xl:max-w-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <div className="flex flex-col flex-wrap gap-2">
                  <p>{entry.name}</p>
                  <p>{entry.description}</p>
                </div>
              </a>
            );
          })
        : this.state.projects.map((entry, index) => {
            return (
              <a
                href={"https://github.com/" + entry.nameWithOwner + "/"}
                className="box-border border-2 w-full md:max-w-xs lg:max-w-sm xl:max-w-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <div className="flex flex-col flex-wrap gap-2">
                  <p>{entry.nameWithOwner}</p>
                  <p>{entry.description}</p>
                </div>
              </a>
            );
          });

    return (
      <div>
        <Helmet>
          {" "}
          <title>Projects - Daniel Rose</title>
        </Helmet>
        <h1 className="text-4xl text-center pb-4">Projects</h1>
        <ForgeMenu />
        {this.props.forge === "gh" ? <GHContributionMenu /> : <div />}
        <ForgeDescription forge={this.props.forge} />
        <ProjectsList projects={projectEntries} />
      </div>
    );
  }
}

export default Projects;

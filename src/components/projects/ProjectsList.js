import React, { Component } from "react";

class ProjectsList extends Component {
  render() {
    return (
      <div>
        {" "}
        <div className="flex flex-wrap p-4 gap-4 justify-center">
          {this.props.projects}
        </div>{" "}
      </div>
    );
  }
}

export default ProjectsList;

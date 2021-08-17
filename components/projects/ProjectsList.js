import React, { Component } from "react";

class ProjectsList extends Component {
  render() {
    return (
      <div>
        {" "}
        <div className="flex flex-wrap p-2 gap-2 justify-center">
          {this.props.projects}
        </div>{" "}
      </div>
    );
  }
}

export default ProjectsList;

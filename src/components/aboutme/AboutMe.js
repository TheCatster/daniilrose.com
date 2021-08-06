import React, { Component } from "react";
import Intro from "./Intro";
import Interests from "./Interests";

class AboutMe extends Component {
  render() {
    return (
      <div className="container">
        <Intro />
        <Interests />
      </div>
    );
  }
}

export default AboutMe;

import React, { Component } from "react";
import Nav from "../common/Nav";
import Intro from "./Intro";
import Interests from "./Interests";

class AboutMe extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Intro />
        <Interests />
      </div>
    );
  }
}

export default AboutMe;

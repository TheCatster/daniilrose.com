import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Intro from "./Intro";
import Interests from "./Interests";

class AboutMe extends Component {
  render() {
    return (
      <div className="md:container md:mx-auto">
        <Helmet>
          {" "}
          <title>Daniel Rose</title>
        </Helmet>
        <Intro />
        <Interests />
      </div>
    );
  }
}

export default AboutMe;

import React, { Component } from "react";
import Nav from "./Nav";
import Intro from "./Intro";
import Interests from "./Interests";

class App extends Component {
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

export default App;

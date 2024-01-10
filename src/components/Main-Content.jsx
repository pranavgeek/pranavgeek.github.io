import React, { Component } from "react";
import "../App";
import ProjectContainer from "./Projects-Container";
import Diamond from "./Diamond";

class MainContent extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="main-content">
          <Diamond />
          <div className="content-text">
            <h1 className="hello">Hello!</h1>
            <p className="content-child">
              I'm Pranav, a software developer beyond the ordinary.
            </p>
          </div>
        </div>
        <hr
          style={{
            background: "#47B5FF",
            height: "2px",
            margin: 75,
            opacity: .6,
            border: "none",
          }}
        />
      <ProjectContainer/>
      </>
    );
  }
}

export default MainContent;

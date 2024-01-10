import React, { Component } from "react";
import "../App";

class ProjectsContainer extends Component {
  render() {
    return (
      <>
        <h1 className="workTitle">Work</h1>
        <div className="some-page-wrapper">
          <div className="row">
            <div className="column">
              <div className="blue-column">
                <div className="inline-content">
                  <span
                    style={{
                      backgroundColor: "rgb(0, 117, 190)",
                      display: "inline-block",
                      width: "2.0rem",
                      height: "2.0rem",
                      marginTop: "-2.5rem",
                    }}
                  ></span>
                  <h1
                    style={{
                      display: "inline",
                      fontSize: "3rem",
                      marginLeft: "1.8rem",
                      marginTop: "0rem",
                    }}
                  >
                    Ridbuter
                  </h1>
                </div>
                <p
                  style={{
                    fontSize: "1.2rem",
                    marginLeft: "4rem",
                    marginTop: "-1rem",
                    lineHeight: "2rem",
                  }}
                >
                  React Native <br></br>WebApp using ReactJS, TypeScript, VueJS
                </p>
              </div>
            </div>
            <div className="column">
              <div className="green-column">
                <p
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    lineHeight: "2rem",
                  }}
                >
                  The Ridbuter application provides users with a seamless
                  experience to manage their ride-related activities. Users can
                  effortlessly signIn, signOut, submit ride requests, and book
                  rides. The application simplifies the process of searching for
                  specific rides.
                </p>
                <a
                  href="https://github.com/yourusername/ridbuter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="viewBtn"
                >
                  View Code ⇒
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Swift Project */}
        <div className="some-page-wrapper">
          <div className="row">
            <div className="column">
              <div className="blue-column">
                <div className="inline-content">
                  <span className="static-dot"></span>
                  <h1
                    style={{
                      display: "inline",
                      fontSize: "3rem",
                      marginLeft: "1.8rem",
                      marginTop: "0rem",
                    }}
                  >
                    Weather App
                  </h1>
                </div>
                <p
                  style={{
                    fontSize: "1.2rem",
                    marginLeft: "4rem",
                    marginTop: "-1rem",
                  }}
                >
                  SwiftUI
                </p>
              </div>
            </div>
            <div className="column">
              <div className="green-column">
                <p
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    lineHeight: "2rem",
                  }}
                >
                  WeatherApp is a meticulously crafted iOS application designed
                  to provide users with accurate and up-to-date weather
                  information at their fingertips. Developed using Swift and
                  integrated with the OpenWeatherMap API, this app offers an
                  intuitive user interface, real-time weather updates, and a
                  range of features to enhance the user experience.
                </p>
                <a
                  href="https://github.com/yourusername/ridbuter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="viewBtn"
                >
                  View Code ⇒
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ------------- */}
        <div className="some-page-wrapper">
          <div className="row">
            <div className="column">
              <div className="blue-column">
                <div className="inline-content">
                  <span
                    style={{
                      backgroundColor: "rgb(0, 117, 190)",
                      display: "inline-block",
                      width: "2.0rem",
                      height: "2.0rem",
                      marginTop: "-2.5rem",
                    }}
                  ></span>
                  <h1
                    style={{
                      display: "inline",
                      fontSize: "3rem",
                      marginLeft: "1.8rem",
                      marginTop: "0rem",
                    }}
                  >
                    Shopping list App
                  </h1>
                </div>
                <p
                  style={{
                    fontSize: "1.2rem",
                    marginLeft: "4rem",
                    marginTop: "-1rem",
                  }}
                >
                  SwiftUI
                </p>
              </div>
            </div>
            <div className="column">
              <div className="green-column">
                <p
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    lineHeight: "2rem",
                  }}
                >
                  The Shopping List Application is a sophisticated mobile app
                  developed using Swift, tailored to cater to users who desire a
                  comprehensive platform to manage their shopping lists with
                  detailed item information. This application not only allows
                  users to create and manage their shopping lists but also
                  enables them to associate shopping items with specific prices
                  and their user names for enhanced tracking and management.
                </p>
                <a
                  href="https://github.com/yourusername/ridbuter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="viewBtn"
                >
                  View Code ⇒
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProjectsContainer;

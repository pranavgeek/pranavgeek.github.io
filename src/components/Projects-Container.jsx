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
                  <span className="box"></span>
                  <h1 className="projectTitle">Ridbuter</h1>
                </div>
                <p className="project-p">
                  React Native <br></br>WebApp using ReactJS, TypeScript, VueJS
                </p>
              </div>
            </div>
            <div className="column">
              <div className="green-column">
                <p className="project-desc">
                  The Ridbuter application provides users with a seamless
                  experience to manage their ride-related activities. Users can
                  effortlessly signIn, signOut, submit ride requests, and book
                  rides. The application simplifies the process of searching for
                  specific rides.
                </p>
                <a
                  href="https://github.com/pranavgeek/RidbuterApp"
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
                  <h1 className="projectTitle">Weather App</h1>
                </div>
                <p className="project-p">SwiftUI</p>
              </div>
            </div>
            <div className="column">
              <div className="green-column">
                <p className="project-desc">
                  WeatherApp is a meticulously crafted iOS application designed
                  to provide users with accurate and up-to-date weather
                  information at their fingertips. Developed using Swift and
                  integrated with the OpenWeatherMap API, this app offers an
                  intuitive user interface, real-time weather updates, and a
                  range of features to enhance the user experience.
                </p>
                <a
                  href="https://github.com/pranavgeek/WeatherApp"
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
                  <span className="box"></span>
                  <h1 className="projectTitle">Shopping list App</h1>
                </div>
                <p className="project-p">SwiftUI</p>
              </div>
            </div>
            <div className="column">
              <div className="green-column">
                <p className="project-desc">
                  The Shopping List Application is a sophisticated mobile app
                  developed using Swift, tailored to cater to users who desire a
                  comprehensive platform to manage their shopping lists with
                  detailed item information. This application not only allows
                  users to create and manage their shopping lists but also
                  enables them to associate shopping items with specific prices
                  and their user names for enhanced tracking and management.
                </p>
                <a
                  href="https://github.com/pranavgeek/ShoppingListApp"
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
                  <span className="static-dot"></span>
                  <h1 className="projectTitle">Hangman App</h1>
                </div>
                <p className="project-p">SwiftUI</p>
              </div>
            </div>
            <div className="column">
              <div className="green-column">
                <p className="project-desc">
                  A captivating word-guessing game that challenges your
                  vocabulary and strategic thinking. Guess letters to unravel
                  the mystery word before the stick figure completes. With a
                  sleek design, engaging gameplay, and varying difficulty
                  levels, it's the perfect blend of fun and mental agility.
                  Elevate your wordplay experience today!
                </p>
                <a
                  href="https://github.com/pranavgeek/HangMan-App"
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
                  <span className="box"></span>
                  <h1 className="projectTitle">Birthday reminder App</h1>
                </div>
                <p className="project-p">Kotlin</p>
              </div>
            </div>
            <div className="column">
              <div className="green-column">
                <p className="project-desc">
                  Never miss a birthday again with our intuitive Birthday
                  Reminder app! Stay organized effortlessly as it sends timely
                  notifications for upcoming birthdays, ensuring you celebrate
                  every special moment. Easily import contacts, set customizable
                  reminders, and add personalized messages. Make every birthday
                  memorable with this user-friendly app designed to keep your
                  social calendar in check.
                </p>
                <a
                  href="https://github.com/pranavgeek/BirthdayReminderApp"
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

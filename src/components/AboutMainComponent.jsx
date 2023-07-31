import React, { Component } from "react";
import myImages from '../Images/icons8-apple-50.png.webp';

class AboutMainContainer extends Component {
  state = {};
  render() {
    return (
      <div id="information">
        <div className="about-info">
          <span className="sqr"></span>
          <p className="info-child">
            A software developer based in London, ON.
          </p>
          <p className="info-child">
            Welcome to the portfolio of Pranav, a highly skilled software developer
            based in London, ON <img className="apple" src={myImages} alt="" /> with
            a strong passion for crafting engaging user experiences, I'm
            specializes in design operations and creating organized systems to
            simplify complexities. My dedication to delivering seamless and
            delightful user interactions is evident in my work. Currently, I am a student at Fanshawe College 
            (London, ON), pursuing postgraduate program in Mobile Application Development. 
            Thank you for visiting my portfolio.
          </p>
        </div>
        <div id="hobbies-section">
          <ul className="listOfHobbies">
            <h1 className="like">What I like</h1>
            <li>Listing Music</li>
            <li>Travelling</li>
            <li>Photography</li>
            <li>Graphic Design</li>
            <li>Film-making</li>
            <li>Robotics</li>
            <li>Food Blogging</li>
            <li>Modeling</li>
          </ul>
          <ul className="listOfLearning">
            <h1 className="like">What I'm learning</h1>
            <li>iOS development</li>
            <li>Andriod development</li>
            <li>React JS</li>
            <li>UI/UX design</li>
            <li>Artifical Intelligence</li>
            <li>Acting</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AboutMainContainer;

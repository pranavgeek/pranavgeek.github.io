import React, { Component } from "react";
import myResume from '../Pranav.pdf'
import "../App"

class FooterContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer>
          <span class="traingle"></span>
          <h1 class="contact">Contact</h1>
          <ul class="contact-list">
            <li>
              <a href="https://www.instagram.com/praanaav__/">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pranavgotawala20010821/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={myResume}>Resume</a>
            </li>
            <li>
              <a href="https://github.com/pranavgeek/">Git</a>
            </li>
            <li>
              <a href="https://codepen.io/praanaav__">CodePen</a>
            </li>
          </ul>
        </footer>
        <marquee direction="right" width="100%">
          <p>© Copyright 2023 Pranav Gotawala. Developed with ReactJS, NextJS, TypeScript.</p>
        </marquee>
      </>
    );
  }
}

export default FooterContainer;

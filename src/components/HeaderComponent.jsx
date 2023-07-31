import React, { Component } from "react";
import "../App";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <span className="dot"></span>
        <h1 className="title">
          <Link className="name" to="/">
            Pranav Geek
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Connect</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

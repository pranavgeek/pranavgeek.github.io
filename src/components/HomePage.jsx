import '../App.css';
import React, { Component } from "react";
import Header from "./HeaderComponent";
import MainContent from "./Main-Content";
import FooterContainer from "./FooterComponent";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <FooterContainer />
      </div>
    );
  }
}

export default HomePage;

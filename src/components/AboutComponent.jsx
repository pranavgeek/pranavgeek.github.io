import React, { Component } from "react";
import Header from "./HeaderComponent";
import "../App";
import AboutMainContainer from "./AboutMainComponent";
import FooterContainer from "./FooterComponent";

class AboutPage extends Component {
  state = {};
  render() {
    return (
        <>
        <Header />
        <AboutMainContainer/>
        <FooterContainer/>
        </>
    );
  }
}

export default AboutPage;

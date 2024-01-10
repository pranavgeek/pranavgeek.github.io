import React, { Component } from "react";
import myImages from "../Images/Snapchat-1127437690.jpg";
import ContactForm from "./ContactForm";

class ContactMainContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="contact-info">
          <img class="me" src={myImages} alt="" />
          <div class="contact-option">
            <h1>Pranav Geek</h1>
            <p>London, Ontario, Canada</p>
            <p>+1 519-280-4167</p>
            <a href="mailto: pranavgotawala@gmail.com">pranavgeek@gmail.com</a>
          </div>
        </div>
        <hr
          style={{
            background: "#47B5FF",
            height: "2px",
            margin: 75,
            opacity: 0.6,
            border: "none",
          }}
        />
        <ContactForm />
      </>
    );
  }
}

export default ContactMainContainer;

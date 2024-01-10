import React, { useState, useEffect } from "react";
import "../App";

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = true;
      valid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = true;
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = true;
      valid = false;
    } else {
      // Validate email format
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = true;
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const baseUrl = "http://localhost:8000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch(`${baseUrl}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        console.log("Form data after clearing:", formData);
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

  useEffect(() => {
    console.log("Form data after clearing:", formData);
  }, [formData]);

  return (
    <div className="container">
      <h2 className="formTitle">Drop me a message.</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">First Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="fname"
              name="firstName"
              placeholder="Your name.."
              onChange={handleChange}
              value={formData.firstName}
              style={{borderBottom: errors.firstName ? '5px solid red' : ''}}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="lname">Last Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lname"
              name="lastName"
              placeholder="Your last name.."
              onChange={handleChange}
              value={formData.lastName}
              style={{borderBottom: errors.lastName ? '5px solid red' : ''}}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Email</label>
          </div>
          <div className="col-75">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
              onChange={handleChange}
              value={formData.email}
              style={{borderBottom: errors.email ? '5px solid red' : ''}}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="col-75">
            <textarea
              id="subject"
              name="message"
              placeholder="Write something.."
              style={{ height: "200px", borderBottom: errors.email ? '5px solid red' : ''}}
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <input type="submit" style={{ float: "right" }} value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

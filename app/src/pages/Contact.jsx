import React from "react";
import "../styles/App.css";

import Navigation from "../components/Navigation/Navigation";
import Side from "../components/Side/Side";

const Contact = () => (
  <div className="page">
    <Navigation />
    <div className="main-content">
      <div className="side-component">
        <Side />
      </div>
      <div className="page-card contact-card">
        <div className="title contact-title">
          <h2>CONTACT</h2>
        </div>
        <hr className="page-divide" />
        <div className="index-content contact-content">
          <div className="contact-content-container">
            <p>Feel free to get in touch. You can email me at:</p>
          </div>
          <p>mail@jonathanchristensen.com</p>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;

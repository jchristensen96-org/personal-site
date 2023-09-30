import React from "react";
import "../styles/App.css";

import Navigation from "../components/Navigation/Navigation";
import Side from "../components/Side/Side";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

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
          <p>Feel free to get in touch. You can email me at:</p>
          <a className="contact-email" href="mailto: jon@jonathanchristensen.com">jon@jonathanchristensen.com</a>
        </div>
        <div className="contact-icon-container">
            <a
              href="https://www.linkedin.com/in/jonathan-christensen-76a401189/"
              target="_blank"
              className="contact-icon linkedin"
            >
              <BiLogoLinkedin />
            </a>
            <a href="mailto: jon@jonathanchristensen.com" className="contact-icon email">
              <AiOutlineMail />
            </a>
          </div>
      </div>
    </div>
  </div>
);
export default Contact;

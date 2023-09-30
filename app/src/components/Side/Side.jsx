import React from "react";
import { Link } from "react-router-dom";
import "./side.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Side = () => {
  return (
    <div>
      <div className="side-container">
        <div className="side-header">
          <img
            src="https://jc-ecom-app-images-209328912.s3.amazonaws.com/images/project/U8wQcYEnnEm3rEw6ZG.png"
            alt=""
          />
          <h3 className="side-header-name">JON CHRISTENSEN</h3>
          <a
            href="mailto: jon@jonathanchristensen.com"
            className="side-header-email"
          >
            jon@jonathanchristensen.com
          </a>
        </div>
        <div className="side-body">
          <div className="side-body-info">
            <table>
              <tbody>
                <tr>
                  <td className="info-category">RESIDENCE</td>
                  <td className="info-info">UNITED STATES</td>
                </tr>
                <tr>
                  <td className="info-category">CURRENT CITY</td>
                  <td className="info-info">MINNEAPOLIS</td>
                </tr>
                <tr>
                  <td className="info-category">AGE</td>
                  <td className="info-info">27</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="side-divide" />
          <div className="side-body-about">
            <h3>ABOUT</h3>
            <p>
              Welcome to my resume website! My name is Jon Christensen and I am
              an IT specialist with experience in designing and deploying
              advanced infrastructure solutions and leading transformative
              security initiatives.
            </p>
            <Link className="side-button" to="/resume">
              LEARN MORE
            </Link>
          </div>
          <hr className="side-divide" />
          <div className="side-download-cv">
            <a
              target="_blank"
              href="https://pa45hr9jsw59xva4txbdm2at88c55idp.s3.amazonaws.com/personal-site/Resumev1.pdf"
              download="Jonathan Christensen Resume"
            >
              DOWNLOAD CV
            </a>
          </div>
          <div className="social-icon-container">
            <a
              href="https://www.linkedin.com/in/jonathan-christensen-76a401189/"
              target="_blank"
              className="social-icon linkedin"
            >
              <BiLogoLinkedin />
            </a>
            <a href="mailto: jon@jonathanchristensen.com" className="social-icon email">
              <AiOutlineMail />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© Jon Christensen jonathanchristensen.com</p>
      </div>
    </div>
  );
};

export default Side;

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
            src="https://pa45hr9jsw59xva4txbdm2at88c55idp.s3.amazonaws.com/personal-site/U8wQcYEnnEm3rEw6ZG.png"
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
            <h3>ABOUT ME</h3>
            <p>
              My name is Jon Christensen. I have 3+ years of experience working
              as an IT administrator. I'm a passionate learner with diverse
              interests ranging from technology and finance to film, philosophy,
              religion, and history. When I'm not working or studying,
              I enjoy doing anything with family and friends.
            </p>
          </div>
          <hr className="side-divide" />
          <div className="side-download-cv">
            <a
              target="_blank"
              href="https://pa45hr9jsw59xva4txbdm2at88c55idp.s3.amazonaws.com/personal-site/Jonathan+Christensen+Resume.pdf"
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
            <a
              href="mailto: jon@jonathanchristensen.com"
              className="social-icon email"
            >
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

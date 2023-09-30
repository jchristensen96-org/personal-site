import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

import Navigation from "../components/Navigation/Navigation";
import Side from "../components/Side/Side";

const Index = () => (
  <div className="page">
    <Navigation />
    <div className="main-content">
      <div className="side-component">
        <Side />
      </div>
      <div className="page-card">
        <div className="title">
          <h2>WELCOME</h2>
          <p>
            This site serves as a hub to display my recent{" "}
            <Link to="/projects" className="index-link-text">
              projects
            </Link>{" "}
            and an up to date{" "}
            <Link to="/resume" className="index-link-text">
              resume
            </Link>{" "}
            and{" "}
            <Link to="/contact" className="index-link-text">
              contact
            </Link>{" "}
            information. Feel free to also take a look at my{" "}
            <a target="_blank" href="https://github.com/JChristensen96">
              GitHub
            </a>{" "}
            and{" "}
            <a target="_blank" href="https://gitlab.com/JChristensen96">
              GitLab
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Index;

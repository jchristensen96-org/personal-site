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
          <h2>ABOUT THIS SITE</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <hr className="page-divide" />
        <div className="index-content">
          <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur.
          </p>
          <div className="index-links">
            <Link className="index-link" to="/resume">VIEW RESUME</Link>
            <Link className="index-link" to="/projects">SEE PROJECTS</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Index;

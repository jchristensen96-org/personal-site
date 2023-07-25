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
            A BEAUTIFUL, RESPONSIVE, STATICALLY-GENERATED, REACT APPLICATION
            WRITTEN WITH MODERN JAVASCRIPT.
          </p>
        </div>
        <hr className="page-divide" />
        <div className="index-content">
          <p>
            As an experienced IT specialist with a passion for DevOps, I
            showcase my journey of transforming antiquated infrastructures,
            implementing cutting-edge security solutions, and mastering a
            diverse range of technologies. Explore my projects, certifications,
            and expertise in creating CI/CD pipelines as I strive to make a
            meaningful impact in the world of technology.
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

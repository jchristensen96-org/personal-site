import React from "react";
import "../styles/App.css";

import Navigation from "../components/Navigation/Navigation";
import Side from "../components/Side/Side";

const Projects = () => (
  <div className="page">
    <Navigation />
    <div className="main-content">
      <div className="side-component">
        <Side />
      </div>
      <div className="page-card project-card">
        <div className="title">
          <h2>PROJECTS</h2>
          <p>A SELECTION OF MY RECENT PROJECTS</p>
        </div>
        <hr className="page-divide" />
        <div className="project-content">
          <div className="project-container">
            <div className="project-title-container">
              <a href="https://gitlab.com/jdchristensen/aws-eks-deployment" target="_blank"><h3>3-TIER WEB APP DEPLOYMENT TO AWS WITH GITLAB CI</h3></a>
              <p>September 2023</p>
            </div>
            <div className="project-image-container">
              <img src="https://jc-ecom-app-images-209328912.s3.amazonaws.com/images/project/9Aettr7ENFg8fEVjtJ.png" alt="" />
            </div>
          </div>
          <div className="project-container">
            <div className="project-title-container">
              <a href="https://github.com/jchristensen96-org/personal-site" target="_blank"><h3>Personal Site: Built and deployed via GitHub Actions to AWS S3</h3></a>
              <p>September 2023</p>
            </div>
            <div className="project-image-container">
              <img src="https://jc-ecom-app-images-209328912.s3.amazonaws.com/images/project/3RLxJvekC463yogYTb.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Projects;

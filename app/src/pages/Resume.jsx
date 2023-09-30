import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import Navigation from "../components/Navigation/Navigation";
import Side from "../components/Side/Side";

const Resume = () => (
  <div className="page">
    <Navigation />
    <div className="main-content">
      <div className="side-component">
        <Side />
      </div>
      <div className="page-card resume-card">
        <div className="title">
          <h2>RESUME</h2>
          <p>EXPERIENCE . EDUCATION . CERTIFICATIONS</p>
        </div>
        <hr className="page-divide" />
        <div className="resume-content">
          <div className="resume-experience">
            <h2>WORK EXPERIENCE</h2>
            <h3>DELTA MODTECH - IT SPECIALIST</h3>
            <p className="experience-date">March 2021 – Present</p>
            <p className="experience-company">
              Delta ModTech is a manufacturing solutions company with 40 years
              of mechanical, electrical and software engineering experience in
              designing and building specialty web converting and packaging
              machinery, RFID, print finishing equipment, and custom automation
              machinery.
            </p>
            <ul>
              <li>
                Ensure the continuous availability of business critical systems
                by maintaining a robust network infrastructure, providing
                uninterrupted connectivity for a user base of 250+ employees
                across multiple locations.
              </li>
              <li>
                Improved network visibility through the deployment of ELK stack
                for log collection, Prometheus + Grafana for server metrics, and
                PRTG for downtime alerts.
              </li>
              <li>
                Introduced a local GitLab server with a dedicated runner to
                optimize version control and automated testing.
              </li>
              <li>
                Led the transition from an insecure infrastructure with poor
                security practices to a security-compliant environment,
                achieving this transformation by:
                <ul>
                  <li>
                    Creation of Disaster Recovery, Incident Response, & Business Continuity plans.
                  </li>
                  <li>
                    Implementation of network access controls via 802.1x &
                    RADIUS.
                  </li>
                  <li>
                    Reworking IAM to enforce the principle of least privilege.
                  </li>
                  <li>
                    Ensuring system and software integrity through regular updates, patch management, and the timely
                    replacement of unsupported systems.
                  </li>
                  <li>
                    Training non-technical staff on cyber security awareness and
                    best practices.
                  </li>
                </ul>
              </li>
            </ul>
            <h3>MARQUIS YACHTS - NETWORK ADMINISTRATOR</h3>
            <p className="experience-date">June 2020 – March 2021</p>
            <p className="experience-company">
              Marquis Yachts was a yacht manufacturing company designing and
              building boats measuring 35 to 72 feet.
            </p>
            <ul>
              <li>
                Solely administered a Microsoft Windows Server network of 15+
                servers, ensuring the uninterrupted availability of critical
                network services after a rapid transition from the previous
                administrator.
              </li>
              <li>
                Led the installation and maintenance of networking
                infrastructure, including copper and fiber runs, termination,
                routers, switches, and wireless systems during a relocation to a
                new facility.
              </li>
            </ul>
          </div>
          <div className="resume-education">
            <h2>EDUCATION</h2>
            <p className="education-degree">
              B.S. Information Technology, Application and Database Development
            </p>
            <p className="education-school">Liberty University, 2019</p>
          </div>
          <div className="resume-certs">
            <h2>CERTIFICATIONS</h2>
            <p>AWS Certified Solutions Architect - Professional</p>
            <p>AWS Certified Solutions Architect - Associate </p>
            <p>AWS Certified Developer - Associate</p>
            <p>AWS Certified SysOps Administrator - Associate</p>
            <p>Certified Kubernetes Administrator</p>
            <p>Certified Kubernetes Application Developer</p>
            <p>HashiCorp Certified: Terraform Associate</p>
            <p>Cisco Certified Network Associate</p>
            <p>CompTIA Advanced Security Practitioner</p>
            <p>CompTIA CySA+</p>
            <p>CompTIA Security+</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Resume;

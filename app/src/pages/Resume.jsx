import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
        <div className="title resume-title">
          <h2>RESUME</h2>
          <p>
            <AnchorLink offset="70" href="#experience">
              EXPERIENCE
            </AnchorLink>{" "}
            .{" "}
            <AnchorLink offset="70" href="#education">
              EDUCATION
            </AnchorLink>{" "}
            .{" "}
            <AnchorLink offset="70" href="#certs">
              CERTIFICATIONS
            </AnchorLink>
          </p>
        </div>
        <hr id="experience" className="page-divide" />
        <div className="resume-content">
          <div className="resume-experience resume-headings">
            <h2>WORK EXPERIENCE</h2>
            <h3 className="experience-heading">
              GAMA-1 TECHNOLOGIES - SCIENTIFIC PROGRAMMER
            </h3>
            <p className="experience-date">April 2024 – Present</p>
            <p className="experience-company">
              GAMA-1 Technologies provides development, engineering, security,
              implementation, and maintenance of IT solutions and services for
              multiple Federal Government agencies.
            </p>
            <ul>
              <li>
                Collaborated with a team of developers and cloud specialists to
                design and test a cloud archiving system for NOAA's datasets,
                utilizing a custom-built Python API for Infrastructure as Code
                (IaC) in AWS.
              </li>
              <li>
                Developed Python scripts for automating the archival of various
                datasets using the custom API, ensuring seamless data storage
                and retrieval, while supporting specific user-driven workflows
                and business logic.
              </li>
            </ul>
            <h3>DELTA MODTECH - IT SPECIALIST</h3>
            <p className="experience-date">March 2021 – April 2024</p>
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
                    Creation of Disaster Recovery, Incident Response, & Business
                    Continuity plans.
                  </li>
                  <li>
                    Implementation of network access controls via 802.1x &
                    RADIUS.
                  </li>
                  <li>
                    Reworking IAM to enforce the principle of least privilege.
                  </li>
                  <li>
                    Ensuring system and software integrity through regular
                    updates, patch management, and the timely replacement of
                    unsupported systems.
                  </li>
                  <li>
                    Training non-technical staff on cyber security awareness and
                    best practices.
                  </li>
                </ul>
              </li>
            </ul>
            <h3 className="experience-heading">
              MARQUIS YACHTS - NETWORK ADMINISTRATOR
            </h3>
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
          <div className="resume-education resume-headings">
            <h2 id="education">EDUCATION</h2>
            <p className="education-degree">
              B.S. Information Technology, Application and Database Development
            </p>
            <p className="education-school">Liberty University, 2019</p>
          </div>
          <div className="resume-certs resume-headings">
            <h2 id="certs">CERTIFICATIONS</h2>
            <div className="cert-link">
              <a
                href="https://www.credly.com/badges/916c9a26-28c4-403c-a02a-a0a692cc7230/linked_in_profile"
                target="_blank"
              >
                AWS Certified Solutions Architect - Professional
              </a>
            </div>
            <div className="cert-link">
              <a
                href="https://www.credly.com/badges/8908c4ec-a215-41e2-b089-a61e681f3fd7/linked_in_profile"
                target="_blank"
              >
                AWS Certified Solutions Architect - Associate{" "}
              </a>
            </div>
            <div className="cert-link">
              <a
                href="https://www.credly.com/badges/058ada7b-c493-47d6-b73d-e12315d45585/linked_in_profile"
                target="_blank"
              >
                AWS Certified Developer - Associate
              </a>
            </div>
            <div className="cert-link">
              <a
                href="https://www.credly.com/badges/1105da8f-214c-427c-97aa-f61756ee51f5/linked_in_profile"
                target="_blank"
              >
                AWS Certified SysOps Administrator - Associate
              </a>
            </div>
            <div className="cert-link">
              <a
                href="https://www.credly.com/badges/bd100fb3-dfae-4a5f-b8a5-5379c2e9a1ca/linked_in_profile"
                target="_blank"
              >
                Certified Kubernetes Administrator
              </a>
            </div>
            <div className="cert-link">
              <a
                href="https://www.credly.com/badges/90a06806-3eb7-4ff2-89f4-30c99ba77bd6/linked_in_profile"
                target="_blank"
              >
                Certified Kubernetes Application Developer
              </a>
            </div>
            <div className="cert-link">
              <a
                href="https://www.credly.com/badges/0dd6106a-17da-41d3-a8ab-03f12f776508/linked_in_profile"
                target="_blank"
              >
                HashiCorp Certified: Terraform Associate
              </a>
            </div>
            <div className="cert-link">
              <a
                href="https://www.credly.com/badges/e2f3ce36-9a27-435f-b042-fd1406232920/linked_in_profile"
                target="_blank"
              >
                CCNA
              </a>
            </div>
            <div className="cert-link">
              <a
                href="https://www.credly.com/badges/2d246a09-1604-472d-b6be-6a92a7a2410a/linked_in_profile"
                target="_blank"
              >
                CompTIA CASP+
              </a>
            </div>
            <div className="cert-link">
              <a
                href="https://www.credly.com/badges/10e6e836-144a-459f-97ee-624551a5b1ee/linked_in_profile"
                target="_blank"
              >
                CompTIA CySA+
              </a>
            </div>
            <div className="cert-link">
              <a
                href="https://www.credly.com/badges/823b03dc-af0e-4896-81ae-b1ebd4a166a0/linked_in_profile"
                target="_blank"
              >
                CompTIA Security+
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Resume;

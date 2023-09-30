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
            <h2>EXPERIENCE</h2>
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
                Implemented and maintained robust network infrastructure,
                ensuring uninterrupted connectivity.
              </li>
              <li>
                Conducted regular security audits and vulnerability assessments,
                implementing necessary patches and updates, resulting in a 30%
                decrease in cybersecurity incidents.
              </li>
              <li>
                Collaborated with cross-functional teams to design and implement
                a disaster recovery plan, ensuring minimal data loss and
                achieving a recovery time objective of under 2 hours.
              </li>
              <li>
                Managed and supported a diverse range of software applications,
                providing timely technical assistance to over 200 employees as
                well as customers.
              </li>
              <li>
                Spearheaded the design and deployment of Infrastructure
                Monitoring tools such as a dockerized ELK stack deployment to
                centralize log collection from network devices and a Prometheus
                + Grafana deployment for gathering systems metrics.
              </li>
              <li>
                Led the end-to-end setup and configuration of a GitLab version
                control server, enabling the adoption of a centralized and
                version-controlled development workflow across the organization.
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
                Installed/programed/maintained networking infrastructure during
                a building move performing copper and fiber runs and
                termination, configuring routers, switches, company wireless,
                visitor wireless
              </li>
              <li>Maintained firewall security and VPN security</li>
              <li>
                Administered a Microsoft Windows Server network of servers
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

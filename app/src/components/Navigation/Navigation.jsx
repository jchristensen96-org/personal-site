import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import "./navigation.css";

const Navigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "nav-logo pending"
                : isActive
                ? "nav-logo active"
                : "nav-logo"
            }
          >
            JON CHRISTENSEN
          </NavLink>
        </div>
        <div className="nav-divide"></div>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink
              to="/resume"
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-links pending"
                  : isActive
                  ? "nav-links active"
                  : "nav-links"
              }
            >
              RESUME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-links pending"
                  : isActive
                  ? "nav-links active"
                  : "nav-links"
              }
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-links pending"
                  : isActive
                  ? "nav-links active"
                  : "nav-links"
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

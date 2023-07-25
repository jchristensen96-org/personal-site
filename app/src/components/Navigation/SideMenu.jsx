import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const SideMenu = ({ isOpen }) => {
  return (
    <>
      <div className="side-menu-container">
        <div className="menu-logo-container">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "menu-logo pending"
                : isActive
                ? "menu-logo active"
                : "menu-logo"
            }
          >
            JON CHRISTENSEN
          </NavLink>
        </div>
        <hr className="menu-divide" />
        <ul className="menu-container">
          <li className="menu-item">
            <NavLink
              to="/resume"
              className={({ isActive, isPending }) =>
                isPending
                  ? "menu-links pending"
                  : isActive
                  ? "menu-links active"
                  : "menu-links"
              }
            >
              RESUME
            </NavLink>
          </li>
          <hr className="menu-divide" />
          <li className="menu-item">
            <NavLink
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending
                  ? "menu-links pending"
                  : isActive
                  ? "menu-links active"
                  : "menu-links"
              }
            >
              PROJECTS
            </NavLink>
          </li>
          <hr className="menu-divide" />
          <li className="menu-item">
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "menu-links pending"
                  : isActive
                  ? "menu-links active"
                  : "menu-links"
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .side-menu-container {
          position: fixed;
          right: 0;
          top: 0;
          transform: translate3d(-100vw, 0, 0);
          transform: ${isOpen
            ? "translate3d(0vw, 0, 0) transform .3s cubic-bezier(0, .52, 0, 1)"
            : "translate3d(-100vw, 0, 0) transform .3s cubic-bezier(0, .52, 0, 1)"};
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default SideMenu;

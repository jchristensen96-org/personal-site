import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Hamburger = ({ isOpen }) => {
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>
      <div className={`side-menu-container ${isOpen ? "open" : ""}`}>
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

      <style>{`
        .burger1 {
          transform: ${
            isOpen ? "rotate(45deg) translate(-0.15rem, 0rem)" : "rotate(0)"
          };
        }
        .burger2 {
          transform .1s;
          opacity: ${isOpen ? 0 : 1};
        }
        .burger3 {
          transform: ${
            isOpen ? "rotate(-45deg) translate(-0.15rem, 0rem)" : "rotate(0)"
          };
        }
        .side-menu-container {
            position: fixed;
            right: 0;
            top: 0;
            height: 100vh;
            background-color: #758595;
            transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
            transform: ${isOpen ? "translateX(0)" : "translateX(100%)"};
          }
        .side-menu-container.open {
            transform: translateX(0);
          }
      `}</style>
    </>
  );
};

export default Hamburger;

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Link className="navbar-brand" to="/">
        Valerio Varani
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">
              Contact
            </Link>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/valerio-varani-635ba31a1/"
            >
              LinkedIn
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/ValVarius">
              GitHub
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Resume.pdf" target="_blank">
              Resume
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

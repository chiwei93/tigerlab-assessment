import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

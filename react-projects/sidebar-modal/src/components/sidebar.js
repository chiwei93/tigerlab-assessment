import React from "react";
import {
  FaBehance,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaHome,
  FaFolderOpen,
  FaCalendarAlt,
  FaUserFriends,
  FaSketch,
  FaRegFileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./logo";
import CloseIcon from "./closeIcon";
import "./sidebar.css";

const Sidebar = ({ showSidebar, onSidebarClose }) => {
  const active = showSidebar ? "active" : "";

  return (
    <div className={`sidebar ${active}`}>
      <div className="logo-container">
        <Logo />
        <button className="btn-close-sidebar" onClick={onSidebarClose}>
          <CloseIcon />
        </button>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">
            <FaHome className="icon" />
            Home
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/team" className="sidebar-link">
            <FaUserFriends className="icon" />
            Team
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/projects" className="sidebar-link">
            <FaFolderOpen className="icon" />
            Projects
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/calendar" className="sidebar-link">
            <FaCalendarAlt className="icon" />
            Calendar
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/documents" className="sidebar-link">
            <FaRegFileAlt className="icon" />
            Documents
          </Link>
        </li>
      </ul>

      <div className="social-container">
        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.facebook.com/" className="social-link">
              <FaFacebook />
            </a>
          </li>
          <li className="social-item">
            <a href="https://twitter.com/" className="social-link">
              <FaTwitter />
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/" className="social-link">
              <FaLinkedin />
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.behance.net/" className="social-link">
              <FaBehance />
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.sketch.com/" className="social-link">
              <FaSketch />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

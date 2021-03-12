import React from "react";
import { Link } from "react-router-dom";
import navLink from "./NavLink.module.css";

const NavLink = ({ children, path, onClick }) => {
  return (
    <div className={navLink.linkContainer}>
      <Link to={path} onClick={onClick} className={navLink.link}>
        {children}
      </Link>
      <span className={navLink.underline}></span>
    </div>
  );
};

export default NavLink;

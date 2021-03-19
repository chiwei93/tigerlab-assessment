import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import navLink from "./NavLink.module.css";

const NavLink = ({ path, children }) => {
  const { setShowSidebar } = useGlobalContext();

  return (
    <Link
      to={path}
      className={navLink.link}
      onClick={() => setShowSidebar(false)}
    >
      {children}
    </Link>
  );
};

export default NavLink;

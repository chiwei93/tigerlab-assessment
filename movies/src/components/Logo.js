import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import logo from "./Logo.module.css";

const Logo = () => {
  const { setIsHomePage, setShowSidebar } = useGlobalContext();

  return (
    <Link
      to="/"
      className={logo.logoContainer}
      onClick={() => {
        setIsHomePage(true);
        setShowSidebar(false);
      }}
    >
      <span className={logo.firstLetter}>M</span>
      <span className={logo.letters}>OVIEDIRECT</span>
    </Link>
  );
};

export default Logo;

import React from "react";
import { Link } from "react-router-dom";
import footerLink from "./FooterLink.module.css";

const FooterLink = ({ path, children }) => {
  return (
    <div className={footerLink.linkContainer}>
      <Link to={path} className={footerLink.link}>
        {children}
      </Link>
      <span className={footerLink.underline}></span>
    </div>
  );
};

export default FooterLink;

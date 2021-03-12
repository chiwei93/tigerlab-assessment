import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import logoLink from "./LogoLink.module.css";
import { useGlobalContext } from "./context";

const LogoLink = () => {
  const { isSignedIn } = useGlobalContext();

  //for setting the path based on whether the user is signed in
  const setPath = () => {
    if (!isSignedIn) {
      return "/";
    }

    return "/users";
  };

  return (
    <Link to={setPath()} className={logoLink.logoLink}>
      <FaInstagram className={logoLink.logo} />
      Nextagram
    </Link>
  );
};

export default LogoLink;

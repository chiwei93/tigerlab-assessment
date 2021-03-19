import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import socialLink from "./SocialLink.module.css";

const SocialLink = ({ href, icon }) => {
  const renderIcon = () => {
    if (icon === "facebook") {
      return <FaFacebook />;
    }

    if (icon === "twitter") {
      return <FaTwitter />;
    }

    if (icon === "instagram") {
      return <FaInstagram />;
    }
  };

  return (
    <a href={href} className={socialLink.link}>
      {renderIcon()}
    </a>
  );
};

export default SocialLink;

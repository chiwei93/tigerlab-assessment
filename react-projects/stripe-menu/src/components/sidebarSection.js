import React from "react";
import "./sidebarSection.css";

const SidebarSection = ({ data }) => {
  const onLinkClick = (event) => {
    event.preventDefault();
  };

  const renderLinks = () => {
    return data.links.map((link, index) => {
      return (
        <li className="sidebar-item" key={index}>
          <a href={link.url} className="sidebar-link" onClick={onLinkClick}>
            {link.icon}
            <span className="sidebar-text">{link.label}</span>
          </a>
        </li>
      );
    });
  };

  return (
    <div className="sidebar-section-container">
      <p className="sidebar-header">{data.page}</p>
      <ul className="sidebar-list">{renderLinks()}</ul>
    </div>
  );
};

export default SidebarSection;

import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";
import "./submenu.css";

const SubMenu = () => {
  const {
    showSubMenu,
    activeButton: { page, links },
    subMenuPosition,
  } = useGlobalContext();

  const SubMenuRef = useRef(null);

  useEffect(() => {
    const SubMenu = SubMenuRef.current;

    const { center, bottom } = subMenuPosition;

    SubMenu.style.left = `${center}px`;
    SubMenu.style.top = `${bottom}px`;
  }, [subMenuPosition]);

  const renderLinks = () => {
    return links.map((link) => {
      return (
        <li className="popup-item" key={link.label}>
          <a href={link.url} className="popup-link">
            {link.icon}
            <span className="link-text">{link.label}</span>
          </a>
        </li>
      );
    });
  };

  const active = showSubMenu ? "active" : "";

  return (
    <aside className={`popup ${active}`} ref={SubMenuRef}>
      <h4>{page}</h4>

      <ul className="popup-list">{renderLinks()}</ul>
    </aside>
  );
};

export default SubMenu;

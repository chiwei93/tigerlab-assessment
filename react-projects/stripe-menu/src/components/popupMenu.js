import { render } from "@testing-library/react";
import React from "react";
import { useGlobalContext } from "./context";

import "./popupMenu.css";

const PopupMenu = ({ data, mouseEnter }) => {
  return (
    <li className="navbar-item">
      <button className="navbar-link" onMouseEnter={mouseEnter}>
        {data.page}
      </button>
    </li>
  );
};

export default PopupMenu;

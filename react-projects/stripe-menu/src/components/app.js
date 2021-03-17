import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.svg";
import phone from "../images/phone.svg";
import Sidebar from "./sidebar";
import PopupMenu from "./popupMenu";
import SubMenu from "./submenu";
import { useGlobalContext } from "./context";
import data from "./data";
import "./app.css";

const App = () => {
  const { onToggleBtnClick, openSubMenu, closeSubMenu } = useGlobalContext();

  const onButtonMouseEnter = (event) => {
    const coords = event.target.getBoundingClientRect();

    const center = coords.left;

    const bottom = coords.bottom - 5;

    const text = event.target.textContent;

    openSubMenu(text, { center, bottom });
  };

  const renderLinks = () => {
    return data.map((obj, index) => {
      return (
        <PopupMenu data={obj} key={index} mouseEnter={onButtonMouseEnter} />
      );
    });
  };

  const onSubMenuClose = (event) => {
    if (event.target.classList.contains("navbar-link")) return;

    closeSubMenu();
  };

  return (
    <React.Fragment>
      <nav className="navbar" onMouseOver={onSubMenuClose}>
        <img src={logo} alt="Logo image" />

        <ul className="navbar-list">{renderLinks()}</ul>

        <button className="btn-signin btn">Sign in</button>

        <button className="btn-toggle-sidebar btn" onClick={onToggleBtnClick}>
          <FaBars />
        </button>
      </nav>

      <section className="hero" onMouseOver={closeSubMenu}>
        <div className="hero-center">
          <article className="hero-info">
            <h1>Payments infrastructure for the internet</h1>
            <p>
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </p>
            <button className="btn-start btn">Start Now</button>
          </article>
          <img src={phone} alt="Image of phone" />
        </div>
      </section>

      <Sidebar data={data} />
      <SubMenu />
    </React.Fragment>
  );
};

export default App;

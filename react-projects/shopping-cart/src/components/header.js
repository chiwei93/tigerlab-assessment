import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "./context";
import "./header.css";

const Header = () => {
  const { amount, cart } = useGlobalContext();

  return (
    <header className="header">
      <h1>UseReducer</h1>
      <div className="cart-container">
        <FaShoppingCart className="cart-icon" />
        <div className="cart-number">{amount}</div>
      </div>
    </header>
  );
};

export default Header;
